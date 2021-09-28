"use strict";

const mongoose = require("mongoose");


const favSchema = new mongoose.Schema({
    name : String,
    imgUrl : String,
    userEmail: String,
    type:String
})

const favModel = mongoose.model('favorites',favSchema)

module.exports = {
    
    favSchema,
    favModel,
}