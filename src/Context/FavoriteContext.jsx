import React from "react";

const FavoriteContext = React.createContext({
    FavoritePokemons: [],
    UpdateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext 