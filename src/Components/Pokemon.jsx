import React, { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

const Pokemon = (props) =>{
    const { Pokemon } = props
    const {FavoritePokemons, UpdateFavoritePokemons} = useContext(FavoriteContext)
    const RedHeart = "❤️"
    const BlackHeart = "🖤"
    const Heart = FavoritePokemons.includes(Pokemon.name) ? RedHeart : BlackHeart
    const ClickHeart = (e) => {
        e.preventDefault()
        UpdateFavoritePokemons(Pokemon.name)
    }
    return(
        <div className="Pokemon-card">
            <div className="Pokemon-img-container">
                <img src={Pokemon.sprites.front_default} alt={Pokemon.name} />
            </div>
            <div className="Card-body">
            <div className="Card-top">
                <h3>{Pokemon.name}</h3>
                <div>#{Pokemon.id}</div>
            </div>
            <div className="Card-bottom">
                <div className="Pokemon-type">
                    {Pokemon.types.map((type, idx) =>{
                        return(
                            <div className="Pokemon-type-text" key={idx}>{type.type.name}</div>
                        )
                    })}
                </div>
                <button  onClick={ClickHeart} className="botones">{Heart}</button>
            </div>
            </div>
        </div>
    )
}

export default Pokemon;