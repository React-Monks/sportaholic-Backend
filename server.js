"use strict";
const express = require("express");
const app = express();
const cors = require("cors");  
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
const sportsData = require("./data/data.json");
const mongoose = require("mongoose");
app.use(mongoose());
app.listen(process.env.PORT, () =>
  console.log(`Server up on ${process.env.PORT}`)
);
const MONGO_SERVER= process.env.MONGO_SERVER

mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });


// class Sport {
//   constructor( strFormat, strSportThumb, strSportDescription) {
//       (this.strFormat = strFormat),
//       (this.strSportThumb = strSportThumb),
//       (this.strSportDescription = strSportDescription)
//   }
// }

app.get("/football", (req, res) => {
  let strSport = req.strFormat;

  let sportsDetails = sportsData.sports.map((i) => {
    return new Sport(
      i.strSport,
      i.strFormat,
      i.strSportThumb,
      i.strSportDescription
    );
  });

  res.status(200).json(strSport);
});

// ----------------------------

app.get('/nutrition')