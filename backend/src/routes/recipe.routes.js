// const express = require("express")
// const router = express.Router()

// router.get("/test",(req,res)=>{
//     res.json({message: "Backend API working"})
// });

// module.exports = router;


const express = require("express")
const recipeController = require("../controllers/recipe.controller")
const router = express.Router()

router.get("/test",(req,res)=>{
    res.json({
        message: "Backend API working"
    })
})

router.get("/search",recipeController.searchRecipeByName)

router.get("/recipe/:id",recipeController.viewRecipe)

module.exports =  router;