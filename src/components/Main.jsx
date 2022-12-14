import React from "react";
import Card from './Card';
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
const Main=()=>{
    const [pokeData, setPokeData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")

    const pokefun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        console.log(res.data)
    }
    useEffect(()=>{
        pokeFun();
    },{url})
return(
    <>
<div className="container">
        <div className="left-content">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <div className="btn-group">
                <button>Previous</button>
                <button>Next</button>
                </div>
        </div>
        <div className="right-content">
            <Pokeinfo/>
        </div>
    </div>
 </>
)
}
export default Main;