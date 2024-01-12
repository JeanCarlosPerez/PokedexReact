import React from "react";
import FavoriteContext from "../Context/FavoriteContext";

const {useContext} = React;

const Navbar = () => {

    const {FavoritePokemons} = useContext(FavoriteContext)

let Logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

return <nav>
    <img src={Logo } alt="Logo-pokeapi"/>
    <div className="Corazon-contador">
    <div>❤️ {FavoritePokemons.length}</div>
    </div>
</nav>
}

export default Navbar;