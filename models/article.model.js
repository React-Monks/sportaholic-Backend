
"use strict";

const mongoose = require("mongoose");


const articleSchema = new mongoose.Schema({
    userName : String,
    userEmail : String,
    text :String,
    title:String
})

const articleModel = mongoose.model('football',articleSchema)

module.exports = {
    
    articleSchema,
    articleModel,
}