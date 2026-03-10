import { useEffect } from "react";
import { Link, useNavigate, useSearchParams} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Data from "../../Data/cuisine_with_id.json"
import TrData from "../../Data/trending_cuisine.json"
import QkData from "../../Data/quickMeal_cuisine.json"
// import Img1 from "../../dishImg/TrendingImg/Ambur_Star_Chicken_Biryani_Recipe_.jpg"
import "./SearchList.css"

gsap.registerPlugin(ScrollTrigger);

const SearchList = ({recipeResult, recipeInput, loading, page, totalPages, setPage}) => {

    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams()

    const search = searchParams.get("search")

    // const dataList = () =>{
    //     let data1 = Data[0]
    //     console.log(Data[0]["name"])
    // }

    console.log(recipeResult)
    console.log(recipeResult.recipes)

    useEffect(()=>{
        if(page > totalPages) return;
    },[page, totalPages])

    const handleViewRecipe = (id)=>{
        navigate(`api/recipes/recipe/${id}?search=${search}&page=${page}`)
    }

//     useEffect(() => {
    
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".searchListContainer",
//         start: "-30%"   
//       },
//     });  
    
//     tl.fromTo(".trendingHeading", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
//       .fromTo(".trendingSearchedItem", {x:-20, opacity: 0 }, { x:0, opacity: 1, duration: 1,stagger:0.4 }, "-=0.5")  
//       .fromTo(".QuickMealHeading", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1})
//       .fromTo(".quickMealSearchedItem", {x:-20, opacity: 0 }, { x:0, opacity: 1, duration: 1,stagger:0.4 }, "-=0.5")  

//     return () => {
//       tl.kill();
//     };

//   }, []);


    return (
        <>
            <div className="searchListContainer">
                {loading && <h3 className="loadingText">Recipes Loading ...</h3>}
                {!loading && recipeInput.trim() !== "" && recipeResult.recipes?.length === 0 && (<h1 className="recipeNotFoundText">Recipe Not Found</h1>)}
                {!loading && recipeInput && 
                <div className="trendingItems paginationFlex">

                    <div className="searchedItems searchedCardItem">
                        {recipeResult.recipes?.map((item)=>(
                        <div className="trendingSearchedItem">
                            <div className="recipeImg">
                                <img src={`http://localhost:5000/images/${item.image_url}`} alt={item.name} title={item.name} className='searchedItemImg'/>
                            </div>

                            <div className="recipeDetails">

                                <div className="recipeName" title={item.name}>{item.name}</div>
                            
                                <div className="recipeInterval">
                                    <div className="timeIcon">
                                        <img src="/timer.png" alt="timerImg" className='timerImg'/>
                                        {/* <i class="fa-solid fa-hourglass-end"></i> */}
                                    </div>
                                    <div className="recipeTime">{item.prep_time?.slice(9)}ins</div>
                                </div>

                                <div className="recipeViewDetails">
                                    
                                        <button className="viewRecipe" onClick={()=>handleViewRecipe(item.id)}>View Recipe</button>
                                    
                                    <div className={`dietRecipe ${
                                        item.diet?.toLowerCase().includes("non vegeterian") ||  item.diet?.toLowerCase().includes("non vegetarian") || item.diet?.toLowerCase().includes("eggetarian") ? "nonVeg" :
                                        item.diet?.toLowerCase().includes("vegetarian") || item.diet?.toLowerCase().includes("vegan") ? "veg": 
                                        "otherDiet"
                                    }`}>{item.diet}</div>
                                </div>

                            </div>

                        </div>
                        )
                        )}

                    </div>

                    {recipeInput.trim() !== "" && recipeResult.recipes?.length > 0 && 
                        (
                            <div className="pagination">
                                <button 
                                className="prevBtn"
                                disabled={page === 1}
                                onClick={()=>setPage(page-1)}>
                                    {/* <i class="fa-solid fa-caret-left"></i> */}
                                    <i class="fa-solid fa-circle-chevron-left"></i>
                                </button>
                            
                                <span className="pageValue">{page}/{totalPages}</span>
                            
                                <button 
                                className="nextBtn"
                                disabled={page === totalPages}
                                onClick={()=>setPage(page+1)}>
                                    {/* <i class="fa-solid fa-caret-right"></i> */}
                                    <i class="fa-solid fa-circle-chevron-right"></i>
                                </button>
                            </div>
                        )
                    }
                </div>}

                {recipeInput.trim() === "" &&
                <>

                <div className="trendingItems">

                    <div className="trendingHeading">Trending Now</div>

                    <div className="searchedItems">
                        {TrData.map((item)=>(
                        <div className="trendingSearchedItem">
                            <div className="recipeImg">
                                <img src={`http://localhost:5000/images/${item.image_url}`} alt={item.name} title={item.name} className='searchedItemImg'/>
                            </div>

                            <div className="recipeDetails">

                                <div className="recipeName" title={item.name}>{item.name}</div>
                            
                                <div className="recipeInterval">
                                    <div className="timeIcon">
                                        <img src="timer.png" alt="timerImg" className='timerImg'/>
                                        {/* <i class="fa-solid fa-hourglass-end"></i> */}
                                    </div>
                                    <div className="recipeTime">{item.prep_time.slice(9)}ins</div>
                                </div>

                                <div className="recipeViewDetails">
                                    <Link to={`api/recipes/recipe/${item.id}`}>
                                    <button className="viewRecipe">View Recipe</button>
                                    </Link>

                                    <div className={`dietRecipe ${
                                        item.diet.toLowerCase().includes("non vegeterian") ||  item.diet.toLowerCase().includes("non vegetarian") || item.diet.toLowerCase().includes("eggetarian") ? "nonVeg" :
                                        item.diet.toLowerCase().includes("vegetarian") || item.diet.toLowerCase().includes("vegan") ? "veg": 
                                        "otherDiet"
                                    }`}>{item.diet}</div>
                                </div>

                            </div>

                        </div>
                        )
                        )}
                        
                    </div>

                </div>

                <div className="trendingItems">

                    <div className="QuickMealHeading">Quick & Easy Meal</div>

                    <div className="searchedItems">

                         {QkData.map((item)=>(
                            <div className="quickMealSearchedItem">
                            <div className="recipeImg">
                                <img src={`http://localhost:5000/images/${item.image_url}`} alt={item.name} title={item.name} className='searchedItemImg'/>
                            </div>

                            <div className="recipeDetails">

                                <div className="recipeName" title={item.name}>{item.name}</div>
                            
                                <div className="recipeInterval">
                                    <div className="timeIcon">
                                        <img src="timer.png" alt="timerImg" className='timerImg'/>
                                        {/* <i class="fa-solid fa-hourglass-end"></i> */}
                                    </div>
                                    <div className="recipeTime">{item.prep_time.slice(9)}ins</div>
                                </div>

                                <div className="recipeViewDetails">
                                    
                                    <button className="viewRecipe" onClick={()=>handleViewRecipe(item.id)}>View Recipe</button>
                                    
                                    <div className={`dietRecipe ${
                                        item.diet.toLowerCase().includes("non vegeterian") ||  item.diet.toLowerCase().includes("non vegetarian") || item.diet.toLowerCase().includes("eggetarian") ? "nonVeg" :
                                        item.diet.toLowerCase().includes("vegetarian") || item.diet.toLowerCase().includes("vegan") ? "veg": 
                                        "otherDiet"
                                    }`}>{item.diet}</div>
                                </div>

                            </div>

                        </div>
                        )
                        )}
                    </div>

                </div>

                </>

                }
                
            </div>
        </>
    )
}

export default SearchList