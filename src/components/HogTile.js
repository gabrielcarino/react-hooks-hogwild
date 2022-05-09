import React from "react";

function HogTile({hog}) {
  function HogInfo() {
    return (
      <ul className="hidden">
        <li>Specialty: {hog.specialty}</li>
        <li>Weight: {hog.weight}</li>
        <li>{hog.greased ? "Greased" : "Ungreased"}</li>
        <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
      </ul>
    )
  }
  function handleClick(e) {
    if (e.target.nextElementSibling.className === "hidden") {
      e.target.nextElementSibling.className = ""
    }
    else {e.target.nextElementSibling.className = "hidden"}
    
  }
  return (
    <div className="ui eight wide column" >
      <h2>{hog.name}</h2>
      <img src={hog.image} alt="pig" style={{width: "inherit"}}/>
      <button onClick={(e) => handleClick(e)}>Info</button>
      <HogInfo />
    </div>
  )
}

export default HogTile;