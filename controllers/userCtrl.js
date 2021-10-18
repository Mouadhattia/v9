const User = require("../models/User");

const userCtrl = {
  get: async (req, res) => {
    try {
      const result = await User.find().populate({path:"team",populate:{path:"TOP MID JUNGLE ADC SUPPORT"}});
      res.send({ response: result, message: "getting contacts " });
    } catch (error) {
      res.status(400).send({ message: "can not get contacts" });
    }
  },
  getOne: async (req, res) => {
    try {
      const result = await User.findOne({ _id: req.params.id }).populate({path:"team",populate:{path:"TOP MID JUNGLE ADC SUPPORT"}});
      if (!result) {
        return res
          .status(400)
          .send({ message: "there is no contact with this id" });
      }
      res.send({ response: result, message: "getting contact " });
    } catch (error) {
      res.status(400).send({ message: "there is no contact with this id" });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await User.deleteOne({ _id: req.params.id });
      result.deletedCount == 1
        ? res.send({ response: "contact deleted" })
        : res.send({ message: "there is no contact with this id " });
    } catch (error) {
      res.status(400).send({ message: "there is no contact with this id" });
    }
  },

  put: async (req, res) => {
    try {
      const result = await User.updateOne(
        { _id: req.params.id },
        { $set: { team: req.body } }
      );
      result.modifiedCount = 1
        ? res.send({ message: "user updated" })
        : res.send({ message: "there is no contact with this id " });
      res.send({ response: result, message: "getting contact " });
    } catch (error) {
      console.log(error);
    }
  },
  updateUser:async (req, res) => {
    try {
      const result = await User.updateOne(
        { _id: req.params.id },
        { $set: { user: req.body } }
      );
      result.modifiedCount = 1
        ? res.send({ message: "user updated" })
        : res.send({ message: "there is no contact with this id " });
      res.send({ response: result, message: "getting contact " });
    } catch (error) {
      console.log(error);
    }
  },

};

module.exports = userCtrl;
