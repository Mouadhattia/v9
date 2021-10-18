const express = require("express");
const router = express.Router();
var FCM = require('fcm-node');
var serverKey = process.env.SERVER_KEY; 



router.post("/", async(req,res,next)=>{
    var fcm = new FCM(serverKey);
    var message = { 
        to: 'f_Uc3bsL4XOw-S-GqJJZPN:APA91bHws9KXoJwItj334_zxk4xwm9dlc7W4I3rYVjx1Y_Gwpa-G-ICuRd47qj5XaS1E-y0_gM06qT_ZN-yBNOJcA5Yh6YdfigvmLiJ71VoBZgUxTlrAllWjveIXtqoigoVZjtodIF35', 
        
        notification: {
            title: req.body.title, 
            body: req.body.body,
            data :req.body.data
        },
        
        
    }
    fcm.send(message, function(err, response){
        if (err) {
            next(err)
            console.log("Something has gone wrong!");
        } else {
            res.send(response)
            console.log("Successfully sent with response: ", response ,message);
        }
    });
    
} );





module.exports = router;
