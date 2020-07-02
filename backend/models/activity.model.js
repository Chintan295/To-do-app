const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const activitySchema = new Schema({
    username: {
        type: String,
        required:true,
        unique:true,
        trim:true
      
    },
    activity:{
      type: Array,
      "default": []  
    }
},{
    timestamps:true, 
}) ;
const Activity = mongoose.model('Activity',activitySchema);
module.exports = Activity;
