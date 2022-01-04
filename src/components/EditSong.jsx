import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import bootstrap from "bootstrap";
import './EditSong.css'
import axios from "axios";

const EditSong = ({ handleClose, show, props }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [title,setTitle]=useState(props.title)
    const [artist,setArtist]=useState(props.artist)
    const [album,setAlbum]=useState(props.album)
    const [genre,setGenre]=useState(props.genre)
    const [release,setRelease]=useState(props.release_date)


    const handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        let updatedSong = {
            title: title,
            artist: artist,
            album:album,
            genre:genre,
            release_date:release
        }
        await axios.put(`http://127.0.0.1:8000/music/${props.id}/`, updatedSong).then(alert('Song updated!'))
        handleClose()
        window.location.reload();
    }

  return (
    <div className={showHideClassName}>
    {console.log('Props ',props)}
      <section className="modal-main">
      <form onSubmit={handleSubmit}>
                <h1>Edit Song</h1>
                <label>Title</label>
                <input name="title" onChange={(e)=>setTitle(e.target.value)} defaultValue={title}/>
                <label>Artist</label>
                <input name="artist" onChange={(e)=>setArtist(e.target.value)} defaultValue={props.artist}/>
                <label>Album</label>
                <input name="album" onChange={(e)=>setAlbum(e.target.value)} defaultValue={props.album}/>
                <label>Genre</label>
                <input name="genre" onChange={(e)=>setGenre(e.target.value)} defaultValue={props.genre}/>
                <label>Release Date</label>
                <input type="date" name="release_date" onChange={(e)=>setRelease(e.target.value)} defaultValue={props.release_date}/>
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