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
      status: 500,
      message: { err: 'createUser has exploded' },
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
      status: 500,
      message: { err: 'getUser has exploded' },
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
      status: 500,
      message: { err: 'updateUser has exploded' },
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
      status: 500,
      message: { err: 'updateUser has exploded' },
    });
  }
};

module.exports = userController;