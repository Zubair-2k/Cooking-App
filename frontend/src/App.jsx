import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, ScrollRestoration} from "react-router-dom"
import "./App.css"
import RecipeDetails from "./Components/RecipeDetails/recipeDetails";
// import ScrollToSearchBar from "./Components/ScrollingPosition/ScrollToSearchBar";
import Home from "./Components/Home/Home";

function App() {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="api/recipes/recipe/:id" element={<RecipeDetails />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
