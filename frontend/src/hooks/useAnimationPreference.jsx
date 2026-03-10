import { useEffect, useState } from "react";

const useAnimationPreference = () =>{
    const [enabled, setEnabled] = useState(()=>{
        const saved = localStorage.getItem("animationEnabled");
        return saved !== null ? JSON.parse(saved) : true;
    });

    useEffect(()=>{
        localStorage.setItem("animationEnabled",JSON.stringify(enabled));
    },[enabled]);

    return [enabled,setEnabled]
};

export default useAnimationPreference;

