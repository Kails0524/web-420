/*
; Title: stephens-composer.js
; Author: Kailee Stephens
; Date: 4 Sept 2022
; Description: Assignment 4.2 - Composer API
*/

// require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// composer schema
const composerSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
});

// Exporting the composer model
module.exports = mongoose.model("Composer", composerSchema);
