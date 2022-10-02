/*
; Title: stephens-composer-routes.js
; Author: Kailee Stephens
; Date: 4 Sept 2022
; Description: Assignment 4.2 - Composer API
*/

const express = require("express");
const router = express.Router();
const Composer = require("../models/stephens-composer.js");



/**
 * findAllComposers
 * @openapi
 * /api/composers:
 *   get:
 *     tags:
 *       - Composers
 *     description: API for returning an array of composer documents.
 *     summary: returns an array of composers in JSON format.
 *     responses:
 *       '200':
 *         description: array of composer documents.
 *       '500':
 *         description: Server Exception.
 *       '501':
 *         description: MongoDB Exception.
 */
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


  /**
   * findComposerById
   * @openapi
   * /api/composers/{id}:
   *   get:
   *     tags:
   *       - Composers
   *     description:  API for returning a composer document by Id
   *     summary: returns a composer document
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: composer document id
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Composer document
   *       '500':
   *         description: Server exception
   *       '501':
   *         description: MongoDB Exception
   */
router.get("/composers/:id", async (req, res) => {
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


  /**
   * createComposer
   * @openapi
   * /api/composers:
   *   post:
   *     tags:
   *       - Composers
   *     description: API for adding a new composer document to MongoDB Atlas
   *     summary: creates a new composer document
   *     requestBody:
   *       description: composer information
   *       content:
   *        application/json:
   *          schema:
   *             required:
   *               - firstName
   *               - lastName
   *             properties:
   *               firstName:
   *                 type: string
   *               lastName:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Composer added
   *       '500':
   *         description: Server Exception
   *       '501':
   *         description: MongoDB Exception
   */
router.put("/composers", async (req, res) => {
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

/**
 * @openapi
 * /api/composers/{id}:
 *   delete:
 *     tags:
 *       - Composers
 *     description: Deletes a composer document
 *     summary: Finds a composer by Id and deletes this composer document
 *     operationId: deleteComposerById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         scheme:
 *           type: string
 *     responses:
 *       '200':
 *         description: Composer document
 *       '500':
 *         description: Server Exception
 *       '501':
 *         description: MongoDB Exception
 */
 router.delete("/composers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    Composer.findByIdAndDelete({ _id: id }, function (err, composer) {
      if (composer) {
        // res.json(composer);
        res.status(200).send({
          message: `Deleted: ${composer}`,
        });
      } else {
        res.status(501).send({
          message: `MongoDB Exception ${err}`,
        });
      }
    });
  } catch (e) {
    res.status(500).send({
      message: `Server Exception: ${e}`,
    });
  }
});
module.exports = router;
