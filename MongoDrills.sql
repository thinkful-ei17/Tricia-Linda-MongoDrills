'use strict';

-- //Get All Restaurants
db.restaurants.find().pretty();


-- list first 10 restaruants, alphabeticaly sorted
db.restaruants.find().sort({name: 1}).limit(10).pretty();

-- Get by _id
db.restaurants.find({_id: ObjectId("59074c7c057aaffaafb10acb")});