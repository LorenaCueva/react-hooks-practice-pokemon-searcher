import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const{name, hp, sprites} = pokemon;
  const [flipped, setFlipped] = useState(false);

  function handleCardClick(){
    setFlipped((flipped) => !flipped);
  }

  return (
    <Card onClick={handleCardClick}>
      <div>
        <div className="image">
          {flipped ?  <img src={sprites.back} alt="oh no!" /> :  <img src={sprites.front} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
