"use strict";

const axios= require("axios");

let footballController = (req, res) => {

    bookModel.find().then(data => {
        res.status(200).json(data)
    })
}