const mongoose = require("mongoose");

const schema = mongoose.Schema;

const PlayerSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  realname :{
    type: String,
    required: true,
  },
  teamUrl:{
    type: String,
    required: true,
  },
  pickRate:{
    type: String,
    required: true,
  },
  imgUrl:{
    type: String,
    required: true,
  },
  assists:{
    type: Number,
    required: true,
  },
  countryUrl:{
    type: String,
    required: true,
  },
  deaths:{
    type: Number,
    required: true,
  },
  kills:{
    type: Number,
    required: true,
  },
  firstTowerKill:{
    type: Boolean,
    required: true,
  },
  baronKills:{
    type: Number,
    required: true,
  },
  firstBloodKill:{
    type: Boolean,
    required: true,
  },
  win:{
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalpoints: {
    type: String,
  },
  form: {
    type: String,
  },
});
module.exports = mongoose.model("player", PlayerSchema);
