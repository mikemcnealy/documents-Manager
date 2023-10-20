const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded());
app.use(cors());
// app.use((req,res,next)=>{
//    res.header("Access-Control-Allow-Origin","*");
//    res.header("Access-Control-Allow-Headers","origin,X-Requested-With,Content-Type,Accept");
//    next();
// })
app.enableCors({ origin: "*" });

app.get('/api',(req,res)=>{
 res.json({
  message:'Welcome to the API'
 })
});
app.post('/api/posts',(req,res)=>{
  res.json({
    message:'Post created ...'
  });
});
app.post('/api/login',(req,res)=>{
  //Mock User
  console.log(req.body)
  const user={
    id:11,
    username:'mike',
    role:1,
    email:'mike.mcnealy@outloock.com'
  }
  jwt.sign({user},'mike123',(err,token)=>{token
  res.json({token})
  })
})
app.listen(5000,()=>console.log('serviver started on port 5000'));


