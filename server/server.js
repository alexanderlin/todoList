const express = require('express');
const app = express();
const path = require('path');
const userController = require('./controller/userController');

app.use(express.json());
// app.use(express.static('/'));

app.put('/list/update/',userController.updateList,(req,res)=>{
  return res.status(200).json(res.locals.list);
});

app.get('/users/:firstName',userController.getUsers,(req,res) =>{
  // res.sendFile(path.resolve(__dirname,'../index.html'));
  console.log('uiser hit')
  return res.json(res.locals.chosenUser);
});

app.get('/list/:firstName',userController.getList,(req,res)=>{
  return res.json(res.locals.list);
});

app.delete('/delete/:firstName', userController.deleteGoals, (req,res)=>{
  return res.status(200).json(res.locals.deletedGoal);
})

app.put('/updateUserInfo',userController.updateUserInfo,(req,res)=>{
  return res.status(200).json(res.locals.updated);
})

app.put('/updateGoals',userController.updateGoals,(req,res)=>{
  return res.status(200).json(res.locals.updatedGoals);
});

app.post('/createUser',userController.createUser,(req,res)=>{
  return res.json(res.locals.created);
});

app.get('/users',userController.getUsers,(req,res) =>{
  // res.sendFile(path.resolve(__dirname,'../index.html'));
  // console.log('uiser hit')
  return res.json(res.locals.users);
});

app.get('/',(req,res) =>{
  // res.sendFile(path.resolve(__dirname,'../index.html'));
  console.log('server hit')
  return res.send('hello thisere');
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