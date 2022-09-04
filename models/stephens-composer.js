/*
; Title: stephens-composer.js
; Author: Kailee Stephens
; Date: 4 Sept 2022
; Description: Assignment 4.2 - Composer API
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for the composer
let composerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Exporting the composer model
module.exports = mongoose.model("Composer", composerSchema);
