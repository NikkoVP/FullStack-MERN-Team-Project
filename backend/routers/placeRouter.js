import express from 'express';
import Place from '../models/placeModel.js';

const router = express.Router();

// ADD PLACE
router.post('/addPlace', async (req, res) => {
  try {
    const { user,place, fromDate, toDate } = req.body;

    const newPlace = new Place({
      user: user,
      place: place,
      fromDate:fromDate,
      toDate:toDate
    });

    await newPlace.save();

    res.status(201).json({
      message: 'New Place Added',
      data: newPlace
    });
  } catch (error) {
    res.status(500).send('Error in adding new Place');
  }
});


//SHOW PLACE 
router.get("/showPlace", async (req, res) => {

  const place = await Place.find();
  res.send({ data: place })

});

export default router;