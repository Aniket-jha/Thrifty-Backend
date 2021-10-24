import  mongoose  from "mongoose";

const userSchema= new mongoose.Schema(
   { 
      name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
      },
      contact:{
          type:String,
          min:10,
          max:10
      },
      email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
      },
      password: {
        type: String,
        required: true
    },
    addresslineone:{
      type: String,
        required: true
    },
        addresslinetwo:{
      type: String,
        required: true
    },
        addresslinethree:{
      type: String,
        required: true
    },
      
   }
)

const User=mongoose.model('user',userSchema)

export default User

