import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  
  const cards = pokeList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  );
} 

export default PokemonCollection;
