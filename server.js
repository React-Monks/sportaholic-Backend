"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
const sportsData = require("./data/data.json");
app.listen(process.env.PORT, () =>
  console.log(`Server up on ${process.env.PORT}`)
);

// 
// ------------------
class Sport {
  constructor( strFormat, strSportThumb, strSportDescription) {
      (this.strFormat = strFormat),
      (this.strSportThumb = strSportThumb),
      (this.strSportDescription = strSportDescription)
  }
}

app.get("/sports", (req, res) => {
  let strSport = req.strFormat;


  // let arr = sportsData.sports.find((item) => {
  //   return item.strSport.toLowerCase() === strSport;
  // });
// console.log(arr)
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
