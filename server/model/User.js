const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    iss:{
        type:String
    },
    sub: {
        type:String
    },
    email:{
        type:String
    },
    email_verifie:{
        type:Boolean
    },
    azp:{
        type:String
    },
  name:{
    type:String
  },
  picture:{
    type:String
  },
  given_name:{
    type:String
  },
  family_name: {
    type:String
  },
  iat:{
    type:Number
  },
  exp:{
    type:Number
  },
  jti:{
    type:String
  }
});


module.exports= mongoose.model('User',userSchema);