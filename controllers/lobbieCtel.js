const Lobbie = require("../models/Lobbie");




const lobbieCtrl = {
    post: async (req, res) => {
        try {
          const newLobbie = new Lobbie(req.body);
    
          const result = await newLobbie.save();
          res.send({ lobbie: result });
        } catch (error) {
          res.send({ err: error });
        }
      },
      put: async (req, res) => {
        try {
          const result = await Lobbie.updateOne(
            { _id: req.params.id },
            { $set: { ...req.body } }
          );
          result.modifiedCount = 1
            ? res.send({ message: "lobbie updated" })
            : res.send({ message: "there is no lobbie with this id " });
          
        } catch (error) {
          console.log(error);
        }
      },
      get: async (req, res) => {
        try {
          const result = await Lobbie.find().populate("users");
          res.send({ response: result, message: "getting lobbie " });
        } catch (error) {
          res.status(400).send({ message: "can not get lobbie" });
        }
      },
      getOne: async (req, res) => {
        try {
          const result = await Lobbie.findOne({ _id: req.params.id }).populate("users");
          if (!result) {
            return res
              .status(400)
              .send({ message: "there is no lobbie with this id" });
          }
          res.send({ response: result, message: "getting lobbie " });
        } catch (error) {
          res.status(400).send({ message: "there is no lobbie with this id" });
        }
      },
      delete:async (req, res) => {
        try {
          const result = await Lobbie.deleteOne({ _id: req.params.id });
          result.deletedCount == 1
            ? res.send({ response: "Lobbie deleted" })
            : res.send({ message: "there is no Lobbie with this id " });
        } catch (error) {
          res.status(400).send({ message: "there is no Lobbie with this id" });
        }
      },
}



module.exports = lobbieCtrl;