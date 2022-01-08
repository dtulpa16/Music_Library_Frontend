import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import bootstrap from "bootstrap";
import './EditSong.css'
import axios from "axios";

const EditSong = ({ handleClose, show, props, toggle, setToggle }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [state, setState] = useState({ title: props.title, artist: props.artist, album:props.album, genre:props.genre, release_date:props.release_date});
    
        const handleChange = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

    const handleSubmit = async(event) => {
      console.log('state', state)
        event.preventDefault()
        await axios.put(`http://127.0.0.1:8000/music/${props.id}/`, state).then(alert('Song updated!'))
        handleClose()
        setToggle(!toggle)
    }

  return (
    <div className={showHideClassName}>
    {console.log('Props ',props)}
      <section className="modal-main">
      <form onSubmit={handleSubmit}>
                <h1>Edit Song</h1>
                <label>Title</label>
                <input name="title" onChange={handleChange} defaultValue={props.title}/>
                <label>Artist</label>
                <input name="artist" onChange={handleChange} defaultValue={props.artist}/>
                <label>Album</label>
                <input name="album" onChange={handleChange} defaultValue={props.album}/>
                <label>Genre</label>
                <input name="genre" onChange={handleChange} defaultValue={props.genre}/>
                <label>Release Date</label>
                <input type="date" name="release_date" onChange={handleChange} defaultValue={props.release_date}/>
                <button type="submit">Update Song</button>
            </form>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default EditSong;