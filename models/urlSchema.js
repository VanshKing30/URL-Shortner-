const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URLschema = new Schema({

    shortId : {
        type : String,
        required : true,
        unique : true,
    },
    redirectURL : {
        type : String,
        required : true
    },
    visitHistory : [ {timeStamp : {type : Number}} ],
    
},{timestamps : true});

module.exports = mongoose.model("url" , URLschema );