'use strict';

use tempTestDb;

//Get All Restaurants
//db.restaurants.find().pretty()

// list first 10 restaruants, alphabeticaly sorted
// db.restaurants.find().sort({name: 1}).limit(10).pretty()

// Get by _id
// db.restaurants.find({_id: ObjectId("59074c7c057aaffaafb10acb")})

// Get by value
//db.restaurants.find({borough: "Queens"}).pretty()

// Get restaurant count
// db.restaurants.count()

// Count by nested value - 11206, document.address.zipcode
//db.restaurants.find({document.address.zipcode: { $in: ["11206"]}})

db.runCommand({ count: 'restaurants', query: {address:{ zipcode: { '11206'}}}, limit: 5})