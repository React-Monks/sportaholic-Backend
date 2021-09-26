// "use strict";

// const axios= require("axios");

// let sportsInformation  =async (req,res)=>{
//     let strSport= req.query.strSport;
//     let url =`https://www.thesportsdb.com/api/v1/json/1/all_sports.php&query=${strSport}`;
// let sports= await axios.get(url)
// let  sportsData= sports.data.sports.map((i)=>{
//     return new Sport (
//         i.strSport,
//         i.strFormat,
//         i.strSportThumb,
//         i.strSportDescription

//     )
// })
// res.status(200).json(sportsData)
// }

// module.exports= {sportsInformation}