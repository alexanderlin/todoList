const models = require('../model/userModel');

const userController = {};

userController.createUser = async(req,res,next) => {
  try{
    const {id,firstName,lastName,age,goals} = req.body;
    if (!goals)
      goals = [];
    const created = await models.user.create({id,firstName,lastName,age,goals});
    res.locals.created = created;
    return next();
  }catch(err){
    return next({
      log: 'Express error handler caught in userController.createUser',
      status: 400,
      message: { err: 'createUser has exploded bad mongoose' },
    });
  }
};

userController.getUsers = async(req,res,next) => {
  try{
    const users = await models.user.find({});
    res.locals.users = users;
    return next();
  }catch(err){
    return next({
      log: 'Express error handler caught in userController.getUsers',
      status: 400,
      message: { err: 'getUser has exploded bad mongoose' },
    });
  }
};

userController.getList = async(req,res,next)=>{
  try{
    const id = req.params.id;
    const {goals} = await models.user.findOne({id});
    res.locals.list = goals;
    return next();
  }catch(e){
    return next({
      log: 'Express error handler caught in userController.getList',
      status: 400,
      message: { err: 'getList has exploded bad mongoose' },
    });
  }
};

userController.updateUserInfo = async(req,res,next) => {
  try{
    const {id,firstName,lastName,age,goals} = req.body;
    const updated = await models.user.findOneAndUpdate({id},{firstName,lastName,age,goals});
    res.locals.updated = updated;
    return next();
  }catch(err){
    return next({
      log: 'Express error handler caught in userController.updateUser',
      status: 400,
      message: { err: 'updateUser has exploded bad mongoose' },
    });
  }
};

userController.updateGoals = async(req,res,next) => {
  try{
    const {id,goals} = req.body;
    const updated = await models.user.findOneAndUpdate({id},{goals});
    res.locals.updatedGoals = updated;
    return next();
  }catch(err){
    return next({
      log: 'Express error handler caught in userController.updateUser',
      status: 400,
      message: { err: 'updateUser has exploded bad mongoose' },
    });
  }
};

module.exports = userController;