import { useState } from "react";
import axios from "axios";

const FilterBar = (props) => {
    const [filterBy,setFilterBy] = useState('')
    const [filter, setfilter] = useState('')
    const [dupes,setDupes] = useState([])

  const handleSelect = (event) => {
    let filterByv = event.target.value;
    let optionsArray = props.songs.map((song) => {
      return song[filterByv];
    });
    let noDupesArr = optionsArray.filter(
      (att, pos) => optionsArray.indexOf(att) == pos
    );
    setFilterBy(filterByv)
    setDupes(noDupesArr)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(filterBy === 'all') {
        props.getSongs()
    } else {
    let newArr = props.songs.filter(song => song[filterBy] === filter)
    props.getSongs(newArr)
    }
}

  return (
    <form onSubmit={handleSubmit}>
      <select name="filterBy" onChange={handleSelect}>
        <option value="all">All</option>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="genre">Genre</option>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
      <select name="filter" onChange={(e)=>setfilter(e.target.value)}>
        {dupes.map((song) => {
          return <option value={song}>{song}</option>;
        })}
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterBar;
