// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Drinks R Us"
                , productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"]
};


// Handle the main routes

router.get("/", function (req, res) {
    res.render("index.ejs", shopData);
});

router.get("/about", function (req, res) {
    res.render("about.ejs", shopData);
});

router.get("/search", function (req, res) {
    res.render("search.ejs", shopData);
});

router.get("/search_result", function (req, res) {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// Export the router object so index.js can access it
module.exports = router;
