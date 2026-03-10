import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./Header.css"

const Header = () => {
  // const hasAnimated = useRef(false)
  
  useGSAP(() => {

    // if (hasAnimated.current) return;


    // if(hasAnimated.current){
    //     document.body.style.overflow = "auto";
    //     return;
    // }

    // hasAnimated.current=true;

    // const hasAnimate = localStorage.getItem("homeAnimated");

    // if(hasAnimate){
      //   document.body.style.overflow = "auto";
      //   return;
      // }

    // document.body.style.overflow = "hidden";
    
    const tl = gsap.timeline(
      {
        onComplete: () => {
          document.body.style.overflow = "auto";

          // localStorage.setItem("homeAnimated","true");

          gsap.fromTo(".scrollDown",
            { y: 0, opacity: 0 },
            { y: 20, opacity: 1, repeat: -1, yoyo: true, duration: 1 }
          );
        }
    });
    
    tl.fromTo(".headerQuote1", { x: -20, opacity: 0 },{ x:0, opacity: 1,duration:0.4,delay: 2})
      .fromTo(".highightQuote", {opacity: 0 },{ opacity: 1,duration:0.5},"-=0.2")
      .fromTo(".headerQuote2", { y: -20, opacity: 0 },{ y:0, opacity: 1,duration:0.8},"-=0.2")

    // tl.fromTo(".headerQuote1", { x: -20, opacity: 0 },{ x:0, opacity: 1,duration:1.4,delay: 2})
    //   .fromTo(".highightQuote", {opacity: 0 },{ opacity: 1,duration:1.5},"-=0.2")
    //   .fromTo(".headerQuote2", { y: -20, opacity: 0 },{ y:0, opacity: 1,duration:1.4},"-=0.2")



    // const tl = gsap.timeline(
    //   {
    //     onComplete: () => {
    //       document.body.style.overflow = "auto";

    //       localStorage.setItem("homeAnimated","true");

    //       gsap.fromTo(".scrollDown",
    //         { y: 0, opacity: 0 },
    //         { y: 20, opacity: 1, repeat: -1, yoyo: true, duration: 1 }
    //       );
    //     }
    // });

    // tl.fromTo(".headerQuote1", { x: -20, opacity: 0 },{ x:0, opacity: 1,duration:1.4,delay: 2})
    //   .fromTo(".highightQuote", {opacity: 0 },{ opacity: 1,duration:1.5},"-=0.2")
    //   .fromTo(".headerQuote2", { y: -20, opacity: 0 },{ y:0, opacity: 1,duration:1.4},"-=0.2")

    return () => {
      document.body.style.overflow = "auto";
    };
    
  }, []);

  return (
    <>

        <div className="headerContainer">

          <div className="headerContent">

            <div className="headerQuote">
              <div className="headerQuote1">
                Discover Your <span className='highightQuote'>Next</span>
              </div>

              <div className="headerQuote2">
                Favorite Meal 
              </div>

            </div>

            {/* <div className="browseRecipes">
              <button className='browseRecipesBtn'>Browse All Recipes</button>
            </div>
             */}

            <div className="scrollDown">
              <p className="scrollDownHeading">Scroll Down</p>

              <div className="downArrow">
                <img src="/scrollDownIcon.png" alt="Scroll Down Icon" />
              </div>
            </div>

            
          </div>

          
        </div>
    </>
  )
}

export default Header