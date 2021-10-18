const express = require("express");
const teamCtrl = require("../controllers/teamCtrl");
const router = express.Router();


//Team Create
router.post("/create", teamCtrl.create);
//Fill Team
router.put("/:team_id", teamCtrl.fill);
//GET ALL TEAM
router.get("/all", teamCtrl.getTeams);
// GET TEAM by Id
router.get("/:team_id", teamCtrl.getTeam);

module.exports = router;
