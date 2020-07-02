const router = require('express').Router();
let Activity = require('../models/activity.model');
router.route('/').get((req,res) => {
Activity.find()
.then(registers => res.json(registers))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const activity = req.body.activity;
   
    const newRegister = new Activity({
        username,
    activity});

    newRegister.save()
    .then(() => res.json('Registration sucessfully'))
    .catch(err => res.status(400).json('Error :' + err))
});

router.route('/fin').post((req,res) => {
    const username = req.body.username;
    const activity =req.body.activity;
    Activity.update(
        { username: username },
        { $push: { activity: activity  } }
     ).then(registers=> {Activity.findOne({username:username})
     .then(registers => res.json(registers))
 .catch(err => res.status(400).json('Error: ' + err));})
     .catch(err => res.status(400).json('Error: ' + err))

  
});
module.exports = router;