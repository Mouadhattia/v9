const express = require("express");
const lobbieCtrl = require("../controllers/lobbieCtel");
const router = express.Router();


//Post lobbie 
router.post("/", lobbieCtrl.post);
//    edit lobbie   
router.put("/:id", lobbieCtrl.put);
// // //get lobbie
router.get("/", lobbieCtrl.get);
// get one
router.get("/:id", lobbieCtrl.getOne);
// // // delete lobbie 
router.delete("/:id", lobbieCtrl.delete);



module.exports = router;