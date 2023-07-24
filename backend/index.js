import express from 'express';
import process from 'node:process';
import { connect } from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import User from './models/User.js';
import Location from './models/location.js';
import Itinerary from './models/itinerary.js';
import userRoutes from './routers/userRoutes.js'


const app = express();
const PORT = process.env.PORT || 3000;


app.set('port', PORT);
app.use(bodyParser.json());
app.use(cors());


await connect('mongodb://127.0.0.1:27017/Wanderlist');

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

// Registration
app.use(userRoutes);




//Login with JWT
const secretKey = 'secret';

app.post('/login', async (req, res) => {
  // JWT Token
  // Add the payload to the token

  const { username, password } = req.body;
  // Find the user with the given username
  const user = await User.findOne({ username: username })

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (user.password != password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = jwt.sign({
    userID: user._id,
    username: user.username,
    email: user.email
  }, secretKey);


  res.status(201).json({
    token,
  });
});

app.get('/protected', async (req, res) => {
  const authorization = req.headers.authorization;

  // To check value of Authorization
  if (!authorization) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const [, token] = authorization.split(' ');
  const payload = jwt.verify(token, secretKey);


  res.status(200).json(
    payload.userID
  );
});


//Add Location and Date
app.post('/location', async (req, res) => {
  try {
    const { user,location, startDate, endDate } = req.body;
    const newLocation = new Location({
      user: user,
      location: location,
      startDate: startDate,
      endDate: endDate
    });

    await newLocation.save();

    res.status(201).json({
      message: 'New Location Added',
      data: newLocation
    });
  }
  catch (error) {
    res.status(500).send('Error in adding new Location')
  }
});

// Add Things to Do
app.post('/itinerary', async (req, res) => {
  try {
    const { user,location, thingsToDo } = req.body;
    const newItinerary = new Itinerary({
      user: user,
      location: location,
      thingsToDo: thingsToDo
    });

    await newItinerary.save();

    res.status(201).json({
      message: 'New Itinerary Added',
      data: newItinerary
    });
  }
  catch (error) {
    res.status(500).send('Error in adding new Itinerary')
  }
});

// View all Locations
app.get("/location", async (req, res) => {

  const allLocation = await Location.find();

  res.send({ data: allLocation });

})


//View all Itinerary
app.get("/itineraries", async (req, res) => {

  const allItinerary = await Itinerary.find();

  res.send({ data: allItinerary });

})



app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
