const mongoose = require("mongoose");
const schema = mongoose.Schema;


const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: { 
    type: Boolean,
     default: false 
    },
  team: {
     type: mongoose.ObjectId,
      ref: "team" 
    },
    lobbies:{
      type:Array,
      lobbie:{
       type: mongoose.ObjectId,
       ref: "lobbie"
      
     }
    }
    
    
    
});
module.exports = mongoose.model("user", UserSchema);
