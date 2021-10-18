const Dat = require("../models/Date");


const dateCtrl = {
    post: async (req, res) => {
        try {
          const newDate = new Dat(req.body);
    
          const result = await newDate.save();
          res.send({ date: result });
        } catch (error) {
          res.send({ err: error });
        }
      },
      put: async (req, res) => {
        try {
          const result = await Dat.updateOne(
            { _id: req.params.id },
            { $set: { ...req.body } }
          );
          result.modifiedCount = 1
            ? res.send({ message: "Date updated" })
            : res.send({ message: "there is no date with this id " });
          res.send({ response: result, message: "getting date " });
        } catch (error) {
          console.log(error);
        }
      },
      get: async (req, res) => {
        try {
          const result = await Dat.find();
          res.send({ response: result, message: "getting date " });
        } catch (error) {
          res.status(400).send({ message: "can not get date" });
        }
      },
      delete:async (req, res) => {
        try {
          const result = await Dat.deleteOne({ _id: req.params.id });
          result.deletedCount == 1
            ? res.send({ response: "date deleted" })
            : res.send({ message: "there is no date with this id " });
        } catch (error) {
          res.status(400).send({ message: "there is no date with this id" });
        }
      },
}

module.exports = dateCtrl