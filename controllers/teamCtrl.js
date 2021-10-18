const Team = require("../models/Team");


const teamCtrl = {
create: async (req, res) => {
    try {
      const {name} = req.body;
      //Validate is name exist
  
      const oldTeam = await Team.findOne({ name });
      
      if (oldTeam) {
        res.status(402).send({msg:"team name already exist"});
      } else {
        const newTeam = new Team({
          name
         
        });
        newTeam.save();
        res.status(200).send({msg:"Your team has been created ",newTeam});
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  fill :async (req, res) => {
    try {
      const { TOP, MID, JUNGLE, SUPPORT, ADC, name } = req.body;
      const result = await Team.updateOne(
        { _id: req.params.team_id },
        { $set: { TOP, MID, JUNGLE, SUPPORT, ADC, name } }
      );
      res.status(200).send(result);
    } catch (err) {
      console.log("err", err);
      res.status(400).send(err);
    }
  },
  getTeams: async (req, res) => {
    try {
      const allTeams = await Team.find({})
      .populate("TOP MID JUNGLE ADC SUPPORT");
      res.status(200).send(allTeams);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
   getTeam: async (req,res) => {
    try {
      const team = await Team.findOne({ _id: req.params.team_id })
        .populate("TOP MID JUNGLE ADC SUPPORT")
        .then((team) => res.status(200).send(team));
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }}
}

module.exports = teamCtrl;