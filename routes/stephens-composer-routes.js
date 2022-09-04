/*
; Title: stephens-composer-routes.js
; Author: Kailee Stephens
; Date: 4 Sept 2022
; Description: Assignment 4.2 - Composer API
*/

const express = require("express");
const router = express.Router();
const Composer = require("../models/composer.js");

//get request to find all composers

router.get("/composers", (req, res) => {
  try {
    Composer.find({}, function (err, composers) {
      if (err) {
        res.status(501).send("MongoDB Exception!");
      } else {
        res.json(composers);
      }
    });
  } catch (error) {
    res.status(500).send("Server Exception");
    console.log(error);
  }
});


//get request to find composers by ID

router.get("/composers/:id", function (req, res) {
  try {
    var id = req.params.id;
    Composer.findOne({ _id: id }, function (err, composer) {
      if (err) {
        res.status(501).send("MongoDB Exception!");
      } else {
        res.json(composer);
      }
    });
  } catch (error) {
    res.status(500).send("Server Exception");
    console.log(error);
  }
});


// a Post request to create a Composer
// createComposer

router.post("/composers", function (req, res) {
  try {
    console.log(req.body);
    let composer = new Composer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    Composer.create(composer, function (err, addComposer) {
      if (err) {
        res.status(501).send("MongoDB Exception!");
      } else {
        res.json(addComposer);
      }
    });
  } catch (error) {
    res.status(500).send("Server Exception");
    console.log(error);
  }
});

module.exports = router;
