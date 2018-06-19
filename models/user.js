const mongoose=require('mongoose'),Schema=mongoose.Schema
const UserSchema=new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  meta:{
    createAt:{
      type:Date,
      default:Date.now()
    }
  }
})

module.exports=mongoose.model('user',UserSchema)
