"use strict";
const mongoose = require("mongoose");

const footballSchema = new mongoose.Schema({
  date: String,
  matchStatus: String,
  homeLogo: String,
  homeName: String,
  homeScore: String,
  awayLogo: String,
  awayName: String,
  awayScore:String,
  leagueName:String
});

const footballModel = mongoose.model('football', footballSchema);

module.exports = {
    footballSchema,
    footballModel
};