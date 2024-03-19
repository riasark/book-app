const express = require('express');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/Users');
const BookList = require('./models/Books')
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3030;

app.post('/login', async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const {user, pass} = req.body;
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

 app.get('/booklist', async (req, res) =>{
  await mongoose.connect(process.env.MONGO_URL);
  const { user } = req.query;

  const books = await BookList.find({user: user});
  res.json(books);
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
