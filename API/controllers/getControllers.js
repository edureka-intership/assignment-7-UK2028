const LocationData = require('../Models/LocationsModels');
const mealtypeData = require('../Models/mealType');
const restaurantsData = require('../Models/Restaurants');

exports.getLocations = (req,res) => {
    LocationData.find()
    .then((result) => {
        res.status(200).json({
            message:"data is fetched",
            DATA: result
        })
    })
    .catch((err) => {
        res.status(500).json({
            message:"data is not fetched",
            ERROR: err
        })
    })
}

exports.getmealType = (req,res) => {
    mealtypeData.find()
    .then((result) => {
        res.status(200).json({
            message:"data is fetched",
            DATA: result
        })
    })
    .catch((err) => {
        res.status(500).json({
            message:"data is not fetched",
            ERROR: err
        })
    })
}

exports.getRestaurantsByCity = (req,res) =>{
    restaurantsData.find({city:req.params.id})
    .then((result) => {
        res.status(200).json({
            message:"data is fetched",
            DATA: result
        })
    })
    .catch((err) => {
        res.status(500).json({
            message:"data is not fetched",
            ERROR: err
        })
    })
}

exports.getRestaurantsByName = (req,res) =>{
    restaurantsData.find({name:req.params.name})
    .then((result) => {
        res.status(200).json({
            message:"data is fetched",
            DATA: result
        })
    })
    .catch((err) => {
        res.status(500).json({
            message:"data is not fetched",
            ERROR: err
        })
    })
}