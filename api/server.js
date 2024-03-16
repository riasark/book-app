const express = require('express');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/Users');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3030;

mongoose.connect(process.env.MONGO_URL);

app.post('/login', async (req, res) => {
  const {pass, user} = req.body;
  User.findOne({user: user})
  .then(user => {
      if(user && user.pass === pass){
          res.json("Success")
      } else{
        res.status(500).send("User or password is incorrect")
      }
  }
  )
 })

// Endpoint for fetching all users (just for testing purposes)
app.get('/users', async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
