const express = require("express");
const dateCtrl = require("../controllers/dateCtrl");
const router = express.Router();


//Post date 
router.post("/", dateCtrl.post);
//       
router.put("/:id", dateCtrl.put);
// //get date
router.get("/", dateCtrl.get);
// // delete date 
router.delete("/:id", dateCtrl.delete
);



module.exports = router;
