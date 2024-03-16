const express = require('express');
const cors = require('cors');
require('dotenv').config()
const User = require('./models/Users');
const { default: mongoose, mongo} = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3030;

app.get('/api/users', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const users = await User.find()
    res.json(users)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})