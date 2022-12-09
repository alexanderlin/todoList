const mongoose = require('mongoose');
const {Schema} = mongoose;

const MONGO_URI = 'MONGODB URL STRING HERE FRIENDS';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Todo'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const userSchema =  new Schema({
  id:{type:String,required:true},
  firstName:{type: String, required: true},
  lastName:{type: String, required: true},
  age:{type: Number, required: true},
  goals:[{type:String, required: true}]
});

const user = mongoose.model('user',userSchema);

module.exports = {
  user,
}