

// import express from 'express';
require('dotenv').config();
const express = require('express')
// import mongoose from 'mongoose';
const mongoose = require('mongoose')
var encrypt = require('mongoose-encryption');
// import cors from 'cors'
const cors = require('cors')

const md5 = require('md5')
// console.log(md5("hello"))

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connected`))
  .catch(() => console.log(`Some problem with mongodb connection`));



const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//hashing password
userSchema.pre('save', async function(next) {
  if(this.isModified('password')){
    this.password = md5(this.password)
  }
  next();
})



// const secret_key = process.env.SECRET
// userSchema.plugin(encrypt, {
//   secret:process.env.SECRET,
//   encryptedFields: ["password"],
// })

const User = new mongoose.model('User', userSchema);



//Routes

app.post('/login', async (req, res) => {
  // res.send("LOgin");
  const { email, password } = req.body;
   const user =  await User.findOne({ email }); 
    // console.log(user)
    if (user) {
      if (md5(password) === (user.password)) {
        res.send({ message: 'Login Successfully', user : user } );
      } else {
        res.send({ message: 'Incorrect Password!!' });
      }
    } else {
      res.send({ message: 'user not found!!' });
    }
  
});


// rsnkdmkefs

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) res.send({message:'Already Registered!'});
  else {
    const newUser = new User({ email, name, password});

    //hashing userSchemaprev executes here which call next() just before save func.

    const response = await newUser.save();
    return res.json(response);
  }
});

//heroku

if(process.env.NODE_ENV == "production"){
  app.use(express.static("build"))
}

//port
const PORT = process.env.PORT || 9002;

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}.`);
});

