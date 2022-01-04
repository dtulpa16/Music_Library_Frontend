import React from "react";
import "./MusicTable.css";
import EditSong from "../EditSong";
import { useState } from "react";

const MusicTable = (props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  console.log(props);
  if (props.songs !== [])
    return (
      <div>
        <table className="center">
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
          {props.songs.map((song) => {
            return (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td><button onClick={() => props.deleteSong(song.id)} type="submit">
                  Delete Song
                </button></td>
                <EditSong show={show} handleClose={hideModal} props={song}>
                  <p>Edit Song</p>
                </EditSong>
                <td><button type="button" onClick={showModal}>
                  Edit Song
                </button></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  else {
    return (
      <div>
        <h1>Loading Music, Please Wait</h1>
      </div>
    );
  }
};

export default MusicTable;
