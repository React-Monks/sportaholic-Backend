"use strict";

const {favModel}=require('../models/fav.modles');

const getfavController = (req,res) =>{
    favModel.find().then(data=>{
        res.json(data);
    })
}



const creatfavController = async(req,res) =>{
    let datafav = req.body;
    let newfav =new favModel(datafav);
    newfav.save();
    let favLest=await favModel.find({})
     res.status(201).json(favLest)
    
}

const deletefavController = (req,res)=>{
    let favID = req.params.id;
    favModel.findByIdAndDelete(favID).then(()=>{
        favModel.find().then(data=>{
            res.status(200).json(data);
        })
    })
    
}

const updatefavController =async (req,res)=>{
    let favID =  req.params.id;
    let datafav = req.body;
    
    favModel.findOne({_id:favID}).then(fav=>{

        fav.Name = datafav.Name;
        fav.imgUrl =datafav.imgUrl;
        fav.userEmail = datafav.userEmail;
        fav.save();
    });
     

      let list=await favModel.find()
       res.status(201).json(list);
    
}


module.exports={
    getfavController,
    creatfavController,
    deletefavController,
    updatefavController
}