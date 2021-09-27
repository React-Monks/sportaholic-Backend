"use strict";
const express = require("express");
const app = express();
const cors = require("cors");  
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose=require('mongoose')
const { creatArticleController,
        getArticleController, 
        deleteArticleController,
        updateArticleController} = require("./controllers/article.controller");

app.use(express.json());
const MONGO_SERVER = process.env.MONGO_SERVER;

mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.status(200).send('iam working')
})

app.listen(process.env.PORT, () =>
  console.log(`Server up on ${process.env.PORT}`)
);

// ----------------------------


app.get('/article',getArticleController);
app.post('/createArticle',creatArticleController);
app.delete('/deleteArticle/:id',deleteArticleController);
app.put('/updateArticle/:id',updateArticleController)
