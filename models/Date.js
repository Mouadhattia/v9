const mongoose = require("mongoose");
const schema = mongoose.Schema;


const DateSchema = new schema({
  date:{type:String}
});
module.exports = mongoose.model("date", DateSchema);