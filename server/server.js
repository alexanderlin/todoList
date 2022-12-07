const express = require('express');
const app = express();
const path = require('path');
const userController = require('./controller/userController');

app.use(express.json());
// app.use(express.static('/'));
app.get('/',(req,res) =>{
  // res.sendFile(path.resolve(__dirname,'../index.html'));
  console.log('server hit')
  res.send('hello thisere');
});


app.post('/create',userController.createUser,(req,res)=>{
  res.json(res.locals.created);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);