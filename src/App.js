import './App.css';
import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import Searchbar from './Components/Searchbar';
import { useState, useEffect } from 'react';
import { getPokemonData, getPokemons } from './Api';
import { FavoriteProvider } from './Context/FavoriteContext';

export default function App() {
  const [Pokemons, setPokemons] = useState([])
  const [Page, setPages] = useState(0)
  const [Total, setTotal] = useState(0)
  const [Loading, setLoading] = useState(true)
  const [Favorite, setFavorite] = useState([""])


  const fetchPokemons = async () =>{
    try{
      setLoading(true)
      const data = await getPokemons(24, 24 * Page) 
      const promises = data.results.map(async(Pokemon) =>{
        return await getPokemonData(Pokemon.url)
      })
      const results = await Promise.all(promises)  
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 24))
    }catch(err){

    }

  }

  useEffect(() =>{
    fetchPokemons()
  }, [Page])

  const UpdateFavoritePokemons = (name) =>{
    const Updated = [...Favorite]
    const IsFavorite = Updated.indexOf(name)
    if(IsFavorite >= 0) {
    Updated.splice(IsFavorite, 1)
    }else{
      Updated.push(name)
    }
    setFavorite(Updated)
  }

  

  return (
    <FavoriteProvider value={{FavoritePokemons: Favorite, UpdateFavoritePokemons: UpdateFavoritePokemons}}>
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex Pokemons = {Pokemons} Page={Page} setPages={setPages} Total={Total} Loading={Loading} />
    </div>
    </FavoriteProvider>
  );
}
