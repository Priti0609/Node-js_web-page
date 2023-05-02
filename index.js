const express = require('express'); //import express module
const bp = require('body-parser');//import body-parser module

const path= require('path');//import path module
const app = express();
const port = 3000;
app.use(bp.urlencoded({extended:false}));

app.use(bp.json())

//Serve static files
app.use(express.static('public'));

//handle form submission

app.post('/submit-form',(req,res)=>{
  const mobile=req.body.mobile;
  const message=req.body.message;

  console.log('Mobile number ',mobile);
  console.log('Message ',message);

  res.send('Form submitted successfully!');
});

//start the server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});