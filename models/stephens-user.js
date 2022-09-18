/*
; Title: stephens-user.js
; Author: Kailee Stephens
; Date: 18 Sept 2022
; Description: Assignment 6.2 - NodeSecurity
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    userName: { type: String },
    Password: { type: String },
    emailAddress: { type: Array }
});

module.exports = mongoose.model("User", userSchema);