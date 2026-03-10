import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () =>{
    const location = useLocation()

    useEffect(()=>{
        console.log("Scroll To Top : ",location.pathname)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    },[location.pathname]);

    return null
}

export default scrollToTop;