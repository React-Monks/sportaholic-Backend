"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require('mongoose')
const {
  creatArticleController,
  getArticleController,
  deleteArticleController,
  updateArticleController
} = require("./controllers/article.controller");

const {
  creatfavController,
  getfavController,
  deletefavController,
  updatefavController
} = require("./controllers/fav.controller");
app.use(express.json());
const MONGO_SERVER = process.env.MONGO_SERVER;

mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(process.env.PORT);

// ----------------------------


app.get('/article', getArticleController);
app.post('/createArticle', creatArticleController);
app.delete('/deleteArticle/:id', deleteArticleController);
app.put('/updateArticle/:id', updateArticleController)

app.get('/fav', getfavController);
app.post('/createfav', creatfavController);
app.delete('/deletefav/:id', deletefavController);
app.put('/updatefav/:id', updatefavController)