// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "The Thirsty Student"
                , productCategories: ["Beer", "Wine", "Spirits","Cocktails", "Soft Drinks", "Hot Drinks",]
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

router.get("/search_result", (req, res) => {
  const searchData = {
    shopName: shopData.shopName,
    search_text: req.query.search_text,
    category: req.query.category
  };

  res.render("search_result.ejs", searchData);
});


router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req, res) => {
  const userData = {
    shopName: shopData.shopName,
    first: req.body.first,
    last: req.body.last,
    email: req.body.email
  };

  res.render("registered.ejs", userData);
});

// Show the survey form
router.get("/survey", (req, res) => {
  res.render("survey.ejs", { shopName: shopData.shopName, productCategories: shopData.productCategories });
});

// Handle survey submission
router.post("/survey_result", (req, res) => {
  const surveyData = {
    shopName: shopData.shopName,
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    age: req.body.age,
    category: req.body.category,
    isStudent: req.body.isStudent === "on" ? "Yes" : "No"
  };
  res.render("survey_result.ejs", surveyData);
});

// Export the router object so index.js can access it
module.exports = router;
