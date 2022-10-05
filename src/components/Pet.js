import React, {useState} from "react";

function Pet({pet, onAdoptPet}) {
  console.log("pet", pet)
  const [adopted, setAdopted]=useState(pet.isAdopted)
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? '♀' : '♂' }
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted ? <button className={adopted ? "ui primary button" : "ui disabled button"}>Already adopted</button> : <button className={adopted ? "ui disabled button" : "ui primary button"} onClick={()=>{setAdopted(true); onAdoptPet(pet.id)}}>Adopt pet</button>}
        
      </div>
    </div>
  );
}

export default Pet;
