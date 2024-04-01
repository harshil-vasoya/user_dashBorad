// Initilize express router
const express = require("express"); 
const router = express.Router();


const { createTeam, getTeams, getTeamById } = require("../controllers/team");

// create team
router.route("/").post(createTeam);

//get all teams
router.route("/all").get(getTeams);

//get team by id
router.route("/:id").get(getTeamById);


module.exports = router;

