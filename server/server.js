const express = require('express');
const app = express();
const path = require('path');
const userController = require('./controller/userController');

app.use(express.json());
// app.use(express.static('/'));
app.get('/',(req,res) =>{
  // res.sendFile(path.resolve(__dirname,'../index.html'));
  console.log('server hit')
  return res.send('hello thisere');
});
app.get('/users',userController.getUsers,(req,res) =>{
  // res.sendFile(path.resolve(__dirname,'../index.html'));
  // console.log('uiser hit')
  return res.json(res.locals.users);
});

app.get('/list/:id',userController.getList,(req,res)=>{
  return res.json(res.locals.list);
});

app.post('/create',userController.createUser,(req,res)=>{
  return res.json(res.locals.created);
});

app.put('/updateUserInfo',userController.updateUserInfo,(req,res)=>{
  return res.json(res.locals.updated);
})

app.put('/updateGoals',userController.updateGoals,(req,res)=>{
  return res.json(res.locals.updatedGoals);
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