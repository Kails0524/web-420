/*
; Title: stephens-person-routes.js
; Author: Kailee Stephens
; Date: 11 Sept 2022
; Description: Assignment 5.2 - Person's API
*/

const express = require('express')
const router = express.Router()
const Person = require ('../models/stephens-person')

/** findAllPersons
*@openapi
* /api/persons:
*   get:
*   summary: Returns a list of all people
*   description: |
*          Returns a list of all people
* responses:
*   '200':    # status code
*      description: A JSON array of people's names          
*   '500':    # status code
*      description: Server exceptions   
*   '501':    # status code
*      description: MongoDB exceptions*/

router.get('/api/persons', async(req, res) => {
    try {
        Person.find({}, function(err, persons) {
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else {
                console.log(persons);
                res.json(persons);
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})

/**createPerson
* @openapi
*  /api/persons:
*     post:
*      summary: Creates a new person
*      description: |
*        Creates and adds a new person to the catalog.
*      responses:
*        '200':    # status code
*          description: A JSON array for new composer.
*        '500':    # status code
*          description: Server exceptions
*        '501':    # status code
*          description: MongoDB exceptions*/


router.post('/api/persons', async(req, res) => {
    try {
        const newPerson = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            roles: req.body.roles,
            dependents: req.body.dependents,
            birthDate: req.body.birthDate
        };

        Person.create(newPerson, function (err, person) {
            if (err) {
                console.log(err)
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else {
                console.log(person)
                res.json(person)
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})

module.exports = router;