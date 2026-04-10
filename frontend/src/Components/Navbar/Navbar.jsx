import { useEffect } from "react";
import { gsap } from "gsap";
import "./Navbar.css"

const Navbar = () => {
  
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".logoIcon", { opacity: 0 },{ opacity: 1,duration:1.4})
      .fromTo(".logoName1", {x:-20,opacity: 0 },{ x:0, opacity: 1}, "-=0.5")
      .fromTo(".logoName2", { y: -5, opacity: 0},{y:0,opacity:1},"-=0.1");
    
  }, []);

  return (
    <>
      <div className="navbarItems">

        <div className="logo">

          <div className="logoIcon">
            <img src="/Logo.webp" alt="LogoImg" className='logoImg'/>
          </div>

          <div className="logoName">
            <div className="logoName1">The Modern</div>
            <div className="logoName2">Pantry</div>
          </div>
        
        </div>
      
      </div>
    </>
  )
}

export default Navbar