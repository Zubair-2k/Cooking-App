import { useEffect } from "react";
import { gsap } from "gsap";

import "./RecipeDetails.css"
import ScrollToTop from "../ScrollingPosition/ScrollToTop";

// import TrData from "../../Data/trending_cuisine.json"
// import QkData from "../../Data/quickMeal_cuisine.json"

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useLayoutEffect } from "react";
import useAnimationPreference from "../../hooks/useAnimationPreference";
import { useGSAP } from "@gsap/react";


const RecipeDetails = () => {
    const { id } = useParams()
  const navigate = useNavigate()

  const [recipeData,setRecipeData] = useState(null);
  const [animationEnabled, setAnimationEnabled] =useAnimationPreference();

  console.log(animationEnabled)

    // useEffect(() => {
    
    // const tl = gsap.timeline();
    
    // tl.fromTo(".recipeHeaderImg", { opacity: 0 }, { opacity: 1, duration: 0.8 })
    // .fromTo(".highlightWrapper", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.7}, "-=0.2")  
    // .fromTo(".recipeHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8})
    // .fromTo(".recipeDesc", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.3,stagger:0.4 }, "-=0.5")  
    // .fromTo(".recipePrepDetailAnimate", {opacity: 0 }, { opacity: 1, duration: 0.8,stagger:0.4 }, "-=0.5")  
    // .fromTo(".recipeIngredientHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 0.8 },"detail")
    // .fromTo(".recipeIngredientHeadingIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.3}, "detailIcon")  
    // .fromTo(".recipecIngredientHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3},"detailHeading")
    // .fromTo(".recipeIngredientHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.4}, "detailSubText")  
    // .fromTo(".recipeIngredient", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 0.7,stagger:0.4 }, "detailValues")  
    // .fromTo(".recipeInstructionsHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 1 },"detail")
    // .fromTo(".recipeInstructionsIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.3}, "detailIcon")  
    // .fromTo(".recipecInstructionsHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3},"detailHeading")
    // .fromTo(".recipeInstructionsHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.4}, "detailSubText")  
    // .fromTo(".recipeInstruction", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 0.8,stagger:0.4 }, "detailValues")  
    
    // tl.fromTo(".recipeHeaderImg", { opacity: 0 }, { opacity: 1, duration: 1.5 })
    // .fromTo(".highlightWrapper", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 1}, "-=0.2")  
    // .fromTo(".recipeHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1})
    // .fromTo(".recipeDesc", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 1,stagger:0.4 }, "-=0.5")  
    // .fromTo(".recipePrepDetailAnimate", {opacity: 0 }, { opacity: 1, duration: 1,stagger:0.4 }, "-=0.5")  
    // .fromTo(".recipeIngredientHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 1.5 },"detail")
    // .fromTo(".recipeIngredientHeadingIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 1}, "detailIcon")  
    // .fromTo(".recipecIngredientHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1},"detailHeading")
    // .fromTo(".recipeIngredientHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 1}, "detailSubText")  
    // .fromTo(".recipeIngredient", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 1,stagger:0.4 }, "detailValues")  
    // .fromTo(".recipeInstructionsHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 1.5 },"detail")
    // .fromTo(".recipeInstructionsIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 1}, "detailIcon")  
    // .fromTo(".recipecInstructionsHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1},"detailHeading")
    // .fromTo(".recipeInstructionsHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 1}, "detailSubText")  
    // .fromTo(".recipeInstruction", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 1,stagger:0.4 }, "detailValues")  
    

//     return () => {
//       tl.kill();
//     };

//   }, []);

  useGSAP(()=>{
    if(!recipeData) return
    if(!animationEnabled) return;

    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "instant"
    // });
    window.scrollTo(0,0);

    const ctx = gsap.context(()=>{
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)",()=>{
            const tl = gsap.timeline();
            
            tl.fromTo(".recipeHeaderImg", { opacity: 0 }, { opacity: 1, duration: 0.8 })
            .fromTo(".highlightWrapper", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.7}, "-=0.2")  
            .fromTo(".recipeHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8})
            .fromTo(".recipeDesc", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.3,stagger:0.4 }, "-=0.5")  
            .fromTo(".recipePrepDetailAnimate", {opacity: 0 }, { opacity: 1, duration: 0.8,stagger:0.4 }, "-=0.5")  
            .fromTo(".recipeIngredientHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 0.8 },"detail")
            .fromTo(".recipeIngredientHeadingIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.3}, "detailIcon")  
            .fromTo(".recipecIngredientHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3},"detailHeading")
            .fromTo(".recipeIngredientHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.4}, "detailSubText")  
            .fromTo(".recipeIngredient", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 0.7,stagger:0.4 }, "detailValues")  
            .fromTo(".recipeInstructionsHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 1 },"detail")
            .fromTo(".recipeInstructionsIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.3}, "detailIcon")  
            .fromTo(".recipecInstructionsHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3},"detailHeading")
            .fromTo(".recipeInstructionsHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.4}, "detailSubText")  
            .fromTo(".recipeInstruction", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 0.8,stagger:0.4 }, "detailValues")  

        })

        // mm.add("(min-width: 344px)",()=>{
        mm.add("(max-width: 1199px)",()=>{
            const tl = gsap.timeline();

            tl.fromTo(".recipeHeaderImg", { opacity: 0 }, { opacity: 1, duration: 0.8 })
            .fromTo(".highlightWrapper", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.7}, "-=0.2")  
            .fromTo(".recipeHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8})
            .fromTo(".recipeDesc", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.3,stagger:0.4 }, "-=0.5")  
            .fromTo(".recipePrepDetailAnimate", {opacity: 0 }, { opacity: 1, duration: 0.8,stagger:0.4 }, "-=0.5")  
            .fromTo(".recipeIngredientHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 0.8 })
            .fromTo(".recipeIngredientHeadingIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.3})  
            .fromTo(".recipecIngredientHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3})
            .fromTo(".recipeIngredientHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.4})  
            .fromTo(".recipeIngredient", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 0.7,stagger:0.4 })  
            .fromTo(".recipeInstructionsHeader", { y:-10, opacity: 0 }, { y:0, opacity: 1, duration: 1 })
            .fromTo(".recipeInstructionsIcon", {x:-20, opacity: 0 }, {x:0, opacity: 1, duration: 0.3})  
            .fromTo(".recipecInstructionsHeadingText", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3})
            .fromTo(".recipeInstructionsHeadingSubText", {y:-20, opacity: 0 }, { y:0, opacity: 1, duration: 0.4})  
            .fromTo(".recipeInstruction", { x:-10, opacity: 0 }, { x:0, opacity: 1, duration: 0.8,stagger:0.4 })  

        })
        
    })

    return ()=> ctx.revert()

},[recipeData,animationEnabled])

  

//   const recipeData = TrData.find((item)=>item.id == id) || QkData.find((item)=> item.id == id)

//   console.log(recipeData)

  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/recipes/recipe/${id}`).then(res=> setRecipeData(res.data))
  },[id])

  return (
    <>
        <ScrollToTop/>

        <div className="navbar">
            <div className="navbarLeft"></div>

            <div className="navbarCenter">

                <div className="logo">

                    <div className="logoIcon">
                        <img src="/Logo.png" alt="LogoImg" className='logoImg'/>
                    </div>

                    <div className="logoName">
                        <div className="logoName1">The Modern</div>
                        <div className="logoName2">Pantry</div>
                    </div>
                
                </div>

            </div>
            
            <div className="navbarRight">

                 <div className="animationText">
                        Animation
                </div>

                <button
                className={`toggleBtn ${animationEnabled ? "on" : "off"}`}
                onClick={()=>setAnimationEnabled(!animationEnabled)}
                aria-label = "Toogle Animation">


                    <span className="circle"></span>
                    <span className="label">{animationEnabled ? "ON" : "OFF"}</span>
                </button>

                {/* <button 
                className="animationToggle"
                onClick={()=>setAnimationEnabled(!animationEnabled)}
                >
                    {animationEnabled ? "Disable Animation" : "Enable Animation"}
                </button> */}

            </div>

        </div>

        <div className="recipeDetailsContainer">
            <div className="backBtn" 
            onClick={()=>{
                if (window.history.length>1){
                    navigate(-1)
                    window.scrollTo(0,0)
                }
                else{
                    navigate("/")
                    window.scrollTo(0,0)
                }
            }}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>

            <div className="recipeDetailContainer">
                <div className="recipeHeader">
                    <div className="recipeHeaderImg">
                        <img src={`http://localhost:5000/images/${recipeData?.image_url}`} alt={recipeData?.name} title={recipeData?.name} className="recipeImgValue"/>
                    </div>

                    <div className="recipeHeadingContent">

                        <div className="highlightWrapper">

                            <img src="/brushBgImg.png" alt="Brush Img" className="brushImg" />

                            <div className="recipeHeadingText">{recipeData?.name}</div> 
                        
                        </div>

                        <div className="recipeDescription">
                            {recipeData?.description?.split(".").filter((sentence) => sentence.trim() !== "").map((data,index)=>{
                                return(
                                <div className="recipeDesc" key={index}>
                                    <div className="recipeDescIcon">
                                        <img src="/DescIcon2.png" alt="Description Icon" className="DescIcon"/>
                                    </div>
                                    <div className="recipeDescText">
                                        {data}                                    
                                    </div>
                                </div>
                            )
                            })}
                        </div>
                        
                        <div className="recipePrepDetails">
                            <div className="prepTime recipePrepDetailAnimate">
                                <div className="prepTimeIcon">
                                    <span className="material-symbols-outlined">timer</span>
                                </div>
                                <div className="prepTimeContent">
                                    <div className="prepTimeText">
                                        Prep Time
                                    </div>
                                    <div className="prepTimeValue">
                                        {recipeData?.prep_time?.slice(9)}ins
                                    </div>
                                </div>
                            </div>
                            <div className="courses recipePrepDetailAnimate">
                                <div className="coursesIcon">
                                    <i className="fa-solid fa-utensils"></i>
                                </div>
                                <div className="coursesContent">
                                    <div className="coursesText">
                                        Courses
                                    </div>
                                    <div className="coursesValue">
                                        {recipeData?.course}
                                    </div>
                                </div>
                            </div>
                            <div className="diet recipePrepDetailAnimate">
                                <div className="dietIcon">
                                    <i className="fa-solid fa-bowl-food"></i>
                                </div>
                                <div className="dietContent">
                                    <div className="dietText">
                                        Diet
                                    </div>
                                    <div className="dietValue">
                                        {recipeData?.diet}
                                    </div>
                                </div>
                            </div>
                            <div className="cuisine recipePrepDetailAnimate">
                                <div className="cuisineIcon">
                                    <i className="fa-solid fa-earth-asia"></i>
                                </div>
                                <div className="cuisineContent">
                                    <div className="cuisineText">
                                        Cuisine
                                    </div>
                                    <div className="cuisineValue">
                                        {recipeData?.cuisine}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="recipeDetails">
                    <div className="recipeIngInsContainer">
                        <div className="recipeIngredientContainer">
                            <div className="recipeIngredientHeader">
                                    <div className="recipeIngredientHeading">
                                        <div className="recipeIngredientHeadingIcon">
                                            <img src="/ingredientsIcon.png" alt="Ingredients Icon" className="ingredientsIcon"/>    
                                        </div>                    
                                        <div className="recipecIngredientHeadingText">
                                            Ingredients
                                        </div>
                                    </div>
                                    <div className="recipeIngredientHeadingSubText">
                                        Everything you'll need
                                    </div>
                            </div>

                            <div className="recipeIngredientContent">
                                {recipeData?.ingredients?.replace(/\t+/g, "").replace(/\n+/g, "\n").split("\n").map((line) => line.trim()).filter((line) => line !== "").map((data,index)=>{
                                    return (
                                    <div className="recipeIngredient" key={index}>
                                        <div className="recipeIngredientIcon">
                                            <img src="/IngredientsListIcon.png" alt="Ingredients List Icon" className="ingredientsListIcon"/>
                                        </div>
                                        <div className="recipeIngredientValue">{data}</div>
                                    </div>
                                    )

                                })}

                            </div>
                        </div>

                        <div className="recipeInstructionsContainer">
                            <div className="recipeInstructionsHeader">
                                <div className="recipeInstructionsHeading">
                                    <div className="recipeInstructionsIcon">
                                        <img src="/instructionIcon.png" alt="Instructions Icon" className="instructionsIcon"/>
                                    </div>

                                    <div className="recipecInstructionsHeadingText">
                                        Instructions
                                    </div>
                                </div>

                                <div className="recipeInstructionsHeadingSubText">
                                    Follow these steps for best results
                                </div>
                            </div>

                            <div className="recipeInstructionsContent">

                                {recipeData?.instructions?.split(".").filter((sentence) => sentence.trim() !== "").map((data,index)=>{
                                    const stepNumber = index + 1;
                                    const formattedNumber = stepNumber < 10 ? `0${stepNumber}` : stepNumber;
                                    return(
                                        
                                        <div className="recipeInstruction" key={index}>
                                            <div className="recipeInstructionNumber">
                                                {formattedNumber}
                                            </div>

                                            <div className="recipeInstructionText">
                                                {data}.
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </>
  )
}

export default RecipeDetails;