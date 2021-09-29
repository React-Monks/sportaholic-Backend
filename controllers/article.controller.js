"use strict";

const {articleModel}=require('../models/article.model');

const getArticleController = (req,res) =>{
    articleModel.find().then(data=>{
        res.json(data);
    })
}



const creatArticleController = async(req,res) =>{
    let dataArticle = req.body;
    let newArticle =new articleModel(dataArticle);
    newArticle.save();
    let articalLest=await articleModel.find({})
     res.status(201).json(articalLest)
    
}

const deleteArticleController = (req,res)=>{
    let articleID = req.params.id;
    articleModel.findByIdAndDelete(articleID).then(()=>{
        articleModel.find().then(data=>{
            res.status(200).json(data);
        })
    })
    
}

const updateArticleController =async (req,res)=>{
    let articleID =  req.params.id;
    let dataArticle = req.body;
    
    articleModel.findOne({_id:articleID}).then(article=>{

        article.userName = dataArticle.userName;
        article.userEmail =dataArticle.userEmail;
        article.text =dataArticle.text;
        article.title =dataArticle.title;
        article.save();
    });
     

      let list=await articleModel.find()
       res.status(201).json(list);
    
}


module.exports={
    getArticleController,
    creatArticleController,
    deleteArticleController,
    updateArticleController
}