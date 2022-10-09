/*
; Title: stephens-team.js
; Author: Kailee Stephens
; Date: 9 Oct 2022
; Description: Assignment 9.2 - Team API
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// playerSchema
const playerSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  salary: { type: Number, require: true },
});

// teamSchema
const teamSchema = new Schema({
  name: { type: String, require: true },
  mascot: { type: String, require: true },
  players: [playerSchema],
});

module.exports = mongoose.model("Team", teamSchema);