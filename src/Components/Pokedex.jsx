import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const { Pokemons, Page, setPages, Total, Loading } = props;

    const LastPage = () =>{
        const NextPage = Math.max(Page - 1, 0 )
        setPages(NextPage)
    }

    const NextPage = () =>{
        const NextPage = Math.min(Page + 1, Total )
        setPages(NextPage)
    }

    return (
        <div>
            <div className="Header">
                <h1 className="titulo-retro">Pokedex</h1>
                <Pagination Page={Page + 1} TotalPages={Total} OnLeftClick={LastPage} OnRightClick={NextPage}/>
            </div>
           
            { Loading ?  <div className="cargando">Cargando Pokemones...</div>:
            
            <div className="Pokedex-grid">
                {Pokemons.map((pokemon, idx) => {
                    return <Pokemon Pokemon={pokemon} key={pokemon.name} />
                })}
            </div>}
        </div>
    );
}

export default Pokedex;
