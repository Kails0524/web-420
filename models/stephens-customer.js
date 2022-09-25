/*
; Title: stephens-customer.js
; Author: Kailee Stephens
; Date: 25 Sept 2022
; Description: Assignment 7 - NodeShopper
*/

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let lineItemSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number }
});

let invoiceSchema = new Schema({
    subtotal: { type: Number },
    tax: { type: Number },
    dateCreated: { type: String },
    dateShipped: { type: String },
    lineItems: [lineItemSchema]
});

let customerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    invoices: [invoiceSchema]
})

module.exports = mongoose.model("Customer", customerSchema)