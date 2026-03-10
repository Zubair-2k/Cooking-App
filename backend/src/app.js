// const express = require("express")
// const cors = require("cors")

// const recipeRoutes = require("./routes/recipe.routes")

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use("/api/recipes", recipeRoutes);

// module.exports = app;



const express = require("express")
const cors = require("cors")
const path = require("path")

const recipeRoutes = require("./routes/recipe.routes") 

const app = express()

app.use(cors())
app.use(express.json())

app.use("/images", express.static(path.join(process.cwd(),"public/images")));

app.use("/api/recipes",recipeRoutes)

module.exports = app;

