const router = require('express').Router();
let Register = require('../models/register.model');
router.route('/').get((req,res) => {
Register.find()
.then(registers => res.json(registers))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password= req.body.password;
    const newRegister = new Register({
        username,
    email,
    password});

    newRegister.save()
    .then(() => res.json('Registration sucessfully'))
    .catch(err => res.status(400).json('Error :' + err))
});

router.route('/fin').post((req,res) => {
    const username = req.body.username;
   

    Register.findOne({username:username})
    .then(registers => res.json(registers))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;