import { useEffect, useState } from "react";
import axios from "axios"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SearchList from "../SearchList/SearchList";
import "./Search.css"
import { useSearchParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Search = () => {
  const [recipeInput, setRecipeInput] = useState("");
  const [recipeResult,setRecipeResult]= useState([]);
  const [loading, setLoading] =useState(false)

  const [totalPages,setTotalPages] = useState(1);
  const limit = 20
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const pageFromUrl = Number(searchParams.get("page") || 1);
  const [page,setPage] = useState(pageFromUrl);

  // console.log(recipeInput)

  // useEffect(()=>{
  //   setRecipeInput(searchValue);
  //   setPage(pageFromUrl);
  // },[])

  useEffect(()=>{
    setRecipeInput(searchValue);
    setPage(pageFromUrl);
  },[searchValue,pageFromUrl])
  
  const handleSearch = (e) =>{
    const value = e.target.value;
    setRecipeInput(value);
    setSearchParams(value ? {search: value,page: 1} : {})
    // setPage(1);
  }

  useEffect(()=>{
      if(recipeInput === ""){
        setRecipeResult([]);
        setTotalPages(1);
        setLoading(false);
        return;
      }

      setLoading(true)

      const timer = setTimeout(() => {
        axios.get(`http://localhost:5000/api/recipes/search?`,
          {
            params: {
              name: recipeInput,
              page,
              limit,
            },
          })
        .then(res=>{
          setRecipeResult(res.data);
          setTotalPages(Math.ceil(res.data.total/limit));
        })
        .catch((err)=>{
          console.error(err);
          setRecipeResult([])
        })
        .finally(()=>setLoading(false))
      }, 500);

      return ()=> clearTimeout(timer)

  },[recipeInput,page])


  // useGSAP(() => {
    
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".search",
  //       start: "top 80%"   
  //     },
  //   });

  //   tl.fromTo(".searchBar", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  //     .fromTo(".searchIcon", {x: 20, opacity: 0 }, { x:0, opacity: 1, duration: 1}, "-=0.5")  
      
  //   return () => {
  //     tl.kill();
  //   };

  // }, []);

  return (
    <>
      <div className="search">

        <div className="searchBar">
          <input 
          type="text" 
          className='searchInput' 
          value={recipeInput} 
          placeholder='Search By Dishes or Ingredients'
          onChange={handleSearch}
          />

          <div className="searchIcon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

      </div>

      <SearchList 
      recipeResult={recipeResult} 
      recipeInput={recipeInput} 
      loading={loading}
      page={page}
      totalPages={totalPages}
      setPage={(newPage)=>{
        setSearchParams({
          search: recipeInput,
          page: newPage
        })
      }}
      />

    </>
  )
}

export default Search