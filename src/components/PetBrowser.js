import React from "react";
import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  const petCards = pets.map(pet=>{
    return <Pet key={pet.id} onAdoptPet={onAdoptPet} pet={pet} />
  })
  return <div className="ui cards">{petCards}</div>;
}

export default PetBrowser;
