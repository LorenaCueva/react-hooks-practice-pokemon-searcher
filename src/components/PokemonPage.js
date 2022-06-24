import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  
  const [pokeList, setPokeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(pokemons => setPokeList(pokemons))
    .catch(error => console.log(error));
  },[])

  function handleSearch(searchWord){
    setSearch(searchWord);
  }

  function handleAddPokemon(data){
    const newPokemon = {name: data.name,
                        hp: data.hp,
                        sprites: {
                          front: data.front,
                          back: data.back
                        }};

    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(pokemon => setPokeList([...pokeList, pokemon]))
    .catch(error => console.log(error));
  }

  const pokemonToDisplay = pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokeList={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
