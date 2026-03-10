const fs =  require("fs")
const path = require("path")

const inputPath = path.join(__dirname,"/data/cuisine_with_id_dup.json")

const outputPath = path.join(__dirname,"/data/recipes_updated.json");

const recipes = JSON.parse(fs.readFileSync(inputPath,"utf-8"))

const updatedRecipes = recipes.map((recipe)=>{
    if(!recipe.id || !recipe.image_url) return recipe;

    const fileName = path.basename(recipe.image_url);

    const newImageUrl = `${recipe.id}.${fileName}`;

    return {
        ...recipe,
        image_url: newImageUrl,
    };
})

fs.writeFileSync(outputPath,JSON.stringify(updatedRecipes,null,2));

console.log("Image Url updated as id.filename format")