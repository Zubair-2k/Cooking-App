// const recipeData = require("../data/cuisine_with_id.json")
const recipeData = require("../data/recipes_updated_after_3829.json")
const Fuse = require("fuse.js")

const fuse = new Fuse(recipeData,{
    keys: ["name"],
    threshold: 0.2,
    ignoreLocation: true,
    minMatchCharLength:2
});

const searchRecipeByName = (req,res)=>{
    const searchedName = req.query.name?.trim().toLowerCase();
    const {page=1, limit=20} =req.query;
    
    if(!searchedName) return res.status(200).json([])

    const fuseResult = fuse.search(searchedName);

    console.log(fuseResult)
    
    const filteredRecipes = fuseResult.map((recipe)=>recipe.item)

    // const filteredRecipes = recipeData.filter((recipe)=>recipe.name.toLowerCase().includes(searchedName))
        
    const start = (page-1) * limit;
    const end = start + Number(limit)
        
    const finalRecipes = filteredRecipes.filter((data)=>data.instructions.split(".").filter((sentence)=>sentence.trim() !== "").length>1)
    
    const limitedRecipes = finalRecipes.slice(start, end)
    
    res.status(200).json(
        {
            recipes: limitedRecipes,
            total: finalRecipes.length,
            page: Number(page),
            totalPages: Math.ceil(finalRecipes.length/limit)
        })

    // res.status(200).json(filteredRecipes)
        
    
    
    // console.log(finalRecipesCheck)

    // const randomNum = Math.floor(Math.random()*10)
        
    // const limitedRecipes = filteredRecipes.slice(start, end)

    // console.log(limitedRecipes)

    // const finalRecipes = limitedRecipes.filter((data)=>data.instructions.split(".").filter((sentence)=>sentence.trim() !== "").length>1)

    // console.log(finalRecipes)


    // res.status(200).json(
    //     {
    //         recipes: finalRecipes,
    //         total: filteredRecipes.length,
    //         page: Number(page),
    //         totalPages: Math.ceil(filteredRecipes.length/limit)
    //     })
    
    // res.status(200).json(limitedRecipes)


    // const limitedRecipes = filteredRecipes.slice(randomNum,randomNum+20)

    // res.status(200).json(limitedRecipes)
}

const viewRecipe = (req,res)=>{
    const { id } = req.params;

    const recipeDetail = recipeData.find((recipe)=>recipe.id===parseInt(id))

    if(!recipeDetail) return res.status(404).json({message:"Recipe Not Found"})

    res.json(recipeDetail)
}

module.exports = {  searchRecipeByName, viewRecipe };