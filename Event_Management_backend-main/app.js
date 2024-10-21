const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
 .then (()=> console.log('MongoDB connected successfully'))
 .catch((error)=> console.log(`MongoDB connection error: ${error}`));

 const PORT =process.env.PORT || 3000;

 app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
 });



