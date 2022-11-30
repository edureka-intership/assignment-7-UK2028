const express = require('express');
const controller = require('../Controllers/getControllers');

const routers = express.Router();

routers.get('/locations',controller.getLocations);
routers.get('/mealtypes',controller.getmealType);
routers.get('/restaurants/city/:id',controller.getRestaurantsByCity);
routers.get('/restaurants/:name',controller.getRestaurantsByName);

module.exports = routers;