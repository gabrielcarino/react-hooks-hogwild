import React, { useState } from "react";
import HogTile from "./HogTile";

function Hogs({ hogs }) {
  const [greasedState, setGreasedState] = useState("all");
  const [sort, setSort] = useState("unsorted");

  function onFilter(value) {
    setGreasedState(value)
  };
  function onSort(value) {
    setSort(value)
  };

  let sortedHogs = hogs;
  let filteredHogs = sortedHogs;

  if (sort === "abc") {
    sortedHogs = hogs.sort(function(a, b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
     })
  }
  else if (sort === "weight") {
    hogs.sort(function(a, b) {
      if(a.weight < b.weight) return -1;
      if(a.weight > b.weight) return 1;
      return 0;
     })
  }
  else sortedHogs = hogs;

  if (greasedState === "greased") {
    filteredHogs = hogs.filter(hog => hog.greased === true)
  }
  else if (greasedState === "ungreased") {
    filteredHogs = hogs.filter(hog => hog.greased === false)
  }
  else filteredHogs = sortedHogs;

  const hogsGrid = filteredHogs.map(hog => {
    return <HogTile hog={hog} key={hog.name} />
  })
  return (
    <>
      <label>Filter:</label>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="ungreased">Ungreased</option>
      </select>
      <label>Sort:</label>
      <select onChange={(e) => onSort(e.currentTarget.value)}>
        <option value="unfiltered">Sort</option>
        <option value="abc">Alphabetically</option>
        <option value="weight">By weight</option>
      </select>
      <div className="ui grid container">{hogsGrid}</div>
    </>
  )
}

export default Hogs;