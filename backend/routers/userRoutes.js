import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const newUser = new User({
      username: username,
      password: password,
      email: email
    });

    await newUser.save();

    res.status(201).json({
      message: 'New User Added',
      data: newUser
    });
  } catch (error) {
    res.status(500).send('Error in adding new User');
  }
});

export default router;

