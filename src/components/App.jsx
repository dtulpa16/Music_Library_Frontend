import React, { useState } from "react";
import MusicTable from "./MusicTable/MusicTable";
import SongForm from "./SongForm/SongForm";
import FilterBar from "./FilterBar/FilterBar";
import "./App.css";
import EditSong from "./EditSong";

const App = (props) => {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState();

  const getSongs = (songs) => {
    setSongs(songs);
  };
  const newSong = () => {
    setToggle(!toggle);
  };

  return (
    <div className="main">
      <h1> Music Library </h1>
      <FilterBar songs={songs} getSongs={getSongs} />
      <MusicTable toggle={toggle} songs={songs} getSongs={getSongs} />
      <SongForm getSongs={getSongs} newSong={newSong} />
    </div>
  );
};
export default App;
