import React, { useState } from "react";
import MusicTable from "./MusicTable/MusicTable";
import SongForm from "./SongForm/SongForm";
import FilterBar from "./FilterBar/FilterBar";
import "./App.css";
import EditSong from "./EditSong";
import SearchBar from "./SearchBar/SearchBar";

const App = (props) => {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState();

  const getSongs = (songs) => {
    setSongs(songs);
  };
  const newSong = () => {
    setToggle(!toggle);
  };

  function filterSongs(searchTerm){
    let foundSongs = songs.filter(function(element){
      if(searchTerm ==''){
        return songs
      }
      else if (element.title.toLowerCase().includes(searchTerm.toLowerCase()) || element.artist.toLowerCase().includes(searchTerm.toLowerCase()) || element.album.toLowerCase().includes(searchTerm.toLowerCase()) || element.genre.toLowerCase().includes(searchTerm.toLowerCase()) || element.release_date.toLowerCase().includes(searchTerm.toLowerCase())){
        return true
      }
      
    })
    setSongs(foundSongs)
  }


  return (
    <div className="main">
      <h1> Music Library </h1>
      <SearchBar filterSongs={filterSongs}/>
      <FilterBar songs={songs} getSongs={getSongs} />
      <MusicTable toggle={toggle} songs={songs} getSongs={getSongs} />
      <SongForm getSongs={getSongs} newSong={newSong} />
    </div>
  );
};
export default App;
