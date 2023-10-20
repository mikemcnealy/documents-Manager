const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
//var cors = require('cors');
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","origin,X-Requested-With,Content-Type,Accept");
  next();
})

app.get('/api',(req,res)=>{
 res.json({
  message:'Welcome to the API'
 })
});


app.listen(5000,()=>console.log('serviver started on port 5000'));
app.post('/api/login',(req,res)=>{

  console.log('==========mike mike===============')
  const roleID= {role}=req.query
  console.log(roleID)
  const user={
    //id:11,
    //username:'mike',
  //  role:req.roleID,
    //email:'mike.mcnealy@outloock.com'
  }
  jwt.sign({roleID},'mike123',(err,token)=>{token
  res.json({token})

  })
})
app.post('/api/verifyToken',(req,res)=>{
  const headerHeader = req.headers['authorization'];
  //check if bearer is undefind
  if(typeof bearerHeader !=='undefined'){

  }else{
    //Forbidden
    res.sendStatus(403);
  }
});
