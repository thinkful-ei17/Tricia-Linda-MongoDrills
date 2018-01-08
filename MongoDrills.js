'use strict';

use tempTestDb;

//Get All Restaurants
//db.restaurants.find().pretty()

// list first 10 restaruants, alphabeticaly sorted
//db.restaurants.find().sort({name: 1}).limit(10).pretty()

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
// db.runCommand({
//     update: "restaurants",
//     updates: [{
//         q: {
//             'address.zipcode': "10035"
//         },
//         u: {
//             $set: { 'address.zipcode': "10036" }
//         },
//         multi: true
//     }]
// })

//confirming update was made => 0
// db.restaurants.find({ 'address.zipcode': "10035" }).count()

// Build a query to filter the data set. Find all of the restaurants which have:
// The cuisine set to something other than "Not Listed/Not Applicable"
// The borough set to something other than "Missing"
// At least one grade
// None of the grades set to "Not Yet Graded"
// None of the scores set to -1

//db.restaurants.distinct("cuisine")
//db.restaurants.distinct("borough")
// const listOfBorough =
// [
//     "Brooklyn",
//     "Bronx",
//     "Queens",
//     "Manhattan",
//     "Staten Island",
// ];



// db.restaurants.find({'borough': {$in:[listOfBorough]}})


db.restaurants.find({borough: {$ne: "Missing"},
cuisine: {$ne: "Not Listed/Not Applicable"}, 
grades: {$exists: true}, 
"grades.grade": {$ne: "Not Yet Graded"}, 
"grades.score": {$ne: -1}
}
).count()

//db.restaurants.distinct("cuisine")
// [
//         "Italian",
//         "American",
//         "Pizza",
//         "Chinese",
//         "Jewish/Kosher",
//         "Mexican",
//         "Irish",
//         "Pizza/Italian",
//         "Soul Food",
//         "Seafood",
//         "Hamburgers",
//         "Steak",
//         "Bakery",
//         "Japanese",
//         "Indian",
//         "French",
//         "Greek",
//         "Spanish",
//         "Russian",
//         "Caribbean",
//         "Delicatessen",
//         "Bagels/Pretzels",
//         "Mediterranean",
//         "Tex-Mex",
//         "Chicken",
//         "Donuts",
//         "Café/Coffee/Tea",
//         "Chinese/Japanese",
//         "Indonesian",
//         "Chinese/Cuban",
//         "Vegetarian",
//         "Continental",
//         "Korean",
//         "Brazilian",
//         "Sandwiches",
//         "Turkish",
//         "Thai",
//         "Soups & Sandwiches",
//         "German",
//         "Filipino",
//         "Asian",
//         "Peruvian",
//         "African",
//         "Polish",
//         "Ethiopian",
//         "Salads",
//         "Middle Eastern",
//         "Iranian",
//         "Eastern European",
//         "Portuguese",
//         "Cajun",
//         "Scandinavian",
//         "Moroccan",
//         "Soups",
//         "Barbecue",
//         "Southwestern",
//         "Tapas",
//         "Pakistani",
//         "Hotdogs",
//         "Other",
//         "Hawaiian",
//         "Bangladeshi",
//         "Fruits/Vegetables",
//         "Armenian",
//         "Hotdogs/Pretzels",
//         "Czech",
//         "Creole",
//         "English"
// ]

// db.restaurants.distinct("borough: {")




// [
//     "Brooklyn",
//     "Bronx",
//     "Queens",
//     "Manhattan",
//     "Staten Island",
//     "Missing"
// ]

