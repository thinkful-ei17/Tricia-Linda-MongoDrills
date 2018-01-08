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
// db.restaurants.find({'address.zipcode': '11206'}).count()

// Delete by ID
// db.restaurants.deleteOne({ _id: ObjectId("59074c7c057aaffaafb10acb") })
// db.restaurants.find({ _id: ObjectId("59074c7c057aaffaafb10acb") })

// Update a single document:  sets the name property of a document with a specific _id to 'Bizz Bar Bang'. Make sure that you're not replacing the existing document, but instead updating only the name property.
// db.restaurants.update({ _id: ObjectId("59074c7c057aaffaafb0da87") }, { name: "Bizz Bar Bang" })
// db.restaurants.find({ name: "Bizz Bar Bang" }).pretty()

// Update many documents:  Replace zip code 10035 to 10036
db.runCommand({
    update: "restaurants",
    updates: [{
        q: {
            'address.zipcode': "10035"
        },
        u: {
            $set: { 'address.zipcode': "10036" }
        },
        multi: true
    }]
})
db.restaurants.find({ 'address.zipcode': "10035" }).count()