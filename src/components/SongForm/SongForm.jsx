import React, {Component, useState} from 'react';
import './SongForm.css'
import axios from "axios";

const SongForm = (props) => {
    const [title,setTitle] = useState('')
    const [artist,setArtist] = useState('')
    const [album,setAlbum] = useState('')
    const [genre,setGenre] = useState('')
    const [release_date,setReleaseDate] = useState('')

const handleSubmit = async(e) =>{
    e.preventDefault()
    let newSong = {
        title:title,
        artist:artist,
        album:album,
        genre: genre,
        release_date:release_date
    }
    await axios.post('http://127.0.0.1:8000/music/', newSong)
    props.newSong()
}

        return ( 
            <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <h1>Add a Song</h1>
                <label>Title</label>
                <input name="title" onChange={(e)=>setTitle(e.target.value)} />
                <label>Artist</label>
                <input name="artist" onChange={(e)=>setArtist(e.target.value)} />
                <label>Album</label>
                <input name="album" onChange={(e)=>setAlbum(e.target.value)} />
                <label>Genre</label>
                <input name="genre" onChange={(e)=>setGenre(e.target.value)} />
                <label>Release Date</label>
                <input type="date" name="release_date" onChange={(e)=>setReleaseDate(e.target.value)} />
                <button type="submit">Add Song</button>
            </form>
            </div>
         );
}
 
export default SongForm;
