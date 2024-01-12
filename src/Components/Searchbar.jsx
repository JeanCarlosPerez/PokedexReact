import React from "react";
import { useState } from "react";
import { SearchPokemon } from "../Api";

const Searchbar = () => {
    const [Search, setSearch] = useState('');
    const [Pokemon, setPokemon] = useState();

    const onChange = (evt) =>{
        setSearch (evt.target.value);
    }

    const onClick = async (e) => {
        const data = await SearchPokemon(Search)
        setPokemon(data)
    }

    return (
        <div className="Searchbar-container">
            <div className="Searchbar">
                <input type="text" placeholder="Buscar pokemon" onChange={onChange}/>
            </div>
            <div>
                <button  className="Searchbar-buttom" onClick={onClick}>Buscar</button>
            </div>
            {Pokemon &&
            <div>
                
                <div>Nombre: {Pokemon.name}</div>
                <div>Peso: {Pokemon.weight}</div>
                <img src={Pokemon.sprites.front_default} alt="" />

                </div>
}
        </div>

    )
}


export default Searchbar;