import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const ScrollToSearchBar = () =>{
    // const { pathname } = useLocation()

    useEffect(()=>{
        window.scrollTo({
            top: 400,
            left: 0,
            behavior: "instant"
        });
    },[]);

    return null
}

export default ScrollToSearchBar;