//Router Module
const express = require("express");

//model
const mealsModel = require('./meals-model.js')

const router = express.Router();

//MEALS CRUD
router.get('/all', async (req, res) => {
    try {
        const meals = await mealsModel.getAllMeals();
        res.status(200).json(meals)
    } catch (error) {
        res.status(500).json(error);
    }
});

  //Export Router
module.exports = router;