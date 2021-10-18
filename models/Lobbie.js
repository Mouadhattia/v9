const mongoose = require("mongoose");

const schema = mongoose.Schema;
const LobbieSchema = new schema({
  name: { 
    type: String,
     required: true
   },
 users:{
   type:Array,
   user:{
    type: mongoose.ObjectId,
    ref: "user"
    
  }
 }
  
 
});
module.exports = mongoose.model("lobbie", LobbieSchema);