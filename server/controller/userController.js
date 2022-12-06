const models = require('../model/userModel');

const userController = {};

userController.createUser = async(req,res,next) => {
  try{
    const {firstName,lastName,age} = req.body;
    const created = await models.user.create({firstName,lastName,age,"goals":[]});
    res.locals.created = created;
    return next();
  }catch(err){
    return next(err);
  }
};

module.exports = userController;