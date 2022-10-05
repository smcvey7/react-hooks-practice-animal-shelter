import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(()=>{
    fetch(`http://localhost:3001/pets`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(r=>r.json())
    .then(data=>{
      const animals = data
      setPets(animals)
    })
  },[])

  function onAdoptPet(id){
    const adoptedPetList = pets.map(pet=>{
      if (pet.id===id){
        return {...pet, isAdopted: true}
      }else return pet
    })
    setPets(adoptedPetList)
  }

  function onChangeType(type){
    setFilters({type:type})
  }

  function onFindPetsClick(){
    fetch(`http://localhost:3001/pets`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(r=>r.json())
    .then(data=>{
      const animals = data
      const filteredPets = data.filter(pet=>{
        if (filters.type === "all") return true
        else return pet.type === filters.type
      })
      setPets(filteredPets)
    })}

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={onFindPetsClick} onChangeType={onChangeType} />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
