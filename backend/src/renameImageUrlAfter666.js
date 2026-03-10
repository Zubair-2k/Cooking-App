const fs =  require("fs")
const path = require("path")

const inputPath = path.join(__dirname,"/data/recipes_updated_after_3322.json")

const outputPath = path.join(__dirname,"/data/recipes_updated_after_3829.json");

const BREAK_ID = 3829

const recipes = JSON.parse(fs.readFileSync(inputPath,"utf-8"))

const updatedRecipes = recipes.map((recipe)=>{
    if(!recipe.id || !recipe.image_url) return recipe;

    const fileName = path.basename(recipe.image_url);

    const parts= fileName.split(".");
    const currentImageNum = parseInt(parts[0]);

    if(isNaN(currentImageNum)) return recipe;

    const newImageNum = recipe.id >= BREAK_ID? currentImageNum+1 :currentImageNum;


    const newImageUrl = `${newImageNum}.${parts.slice(1).join(".")}`;

    return {
        ...recipe,
        image_url: newImageUrl,
    };
})

fs.writeFileSync(outputPath,JSON.stringify(updatedRecipes,null,2));

console.log("Image Url updated as id.filename format")