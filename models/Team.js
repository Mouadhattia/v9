const mongoose = require("mongoose");

const schema = mongoose.Schema;
const TeamSchema = new schema({
  name: { 
    type: String,
     required: true
   },
  totalLp:{
    type:Number
  },
  TOP: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  MID: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  JUNGLE: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  ADC: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  SUPPORT: {
    type: mongoose.ObjectId,
    ref: "player",
  },
});
module.exports = mongoose.model("team", TeamSchema);
