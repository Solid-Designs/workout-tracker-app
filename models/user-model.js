var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    userName: {type:String},
    message: {type:String}
  }
);

userSchema.virtual('userMessage').get(function(){
  return this.userName + 'Says: ' + this.message;
});

module.exports = mongoose.model('User', userSchema);
