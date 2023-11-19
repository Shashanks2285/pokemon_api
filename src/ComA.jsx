import React, { useEffect, useState } from "react";
import axios from 'axios';

const ComA = ()=>{
    const [value,setValue]= useState();
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();

    const select_value = (event)=>{
        setValue(event.target.value);
    }


    const changeEffect=()=>{
        setNum(value);
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName (res.data.name);
            setMoves(res.data.moves.length);
            console.log(res);
        }

        getData();
    };
    return (
        <>
        <h1>You selected choice <span>{num}</span></h1>
        <h1>You selected choice pokemon is :<span>{name}</span></h1>
        <h1>Your {name} has <span>{moves}</span> moves</h1>

        <input type="text" placeholder="Enter the number" onChange={select_value}/>
        <button onClick={changeEffect}>Search</button>
        </>
    );
}

export default ComA;