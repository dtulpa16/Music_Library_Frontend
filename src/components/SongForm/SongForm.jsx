import React, {Component, useState} from 'react';
import './SongForm.css'
import axios from "axios";

const SongForm = (props) => {
    const [state, setState] = useState({ title: "", artist: "", album:"", genre:"", release_date:""});
    
        const handleChange = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

const handleSubmit = async(e) =>{
    e.preventDefault()
    await axios.post('http://127.0.0.1:8000/music/', state)
    props.newSong()
}

        return ( 
            <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <h1>Add a Song</h1>
                <label>Title</label>
                <input name="title" onChange={handleChange} />
                <label>Artist</label>
                <input name="artist" onChange={handleChange} />
                <label>Album</label>
                <input name="album" onChange={handleChange} />
                <label>Genre</label>
                <input name="genre" onChange={handleChange} />
                <label>Release Date</label>
                <input type="date" name="release_date" onChange={handleChange} />
                <button type="submit">Add Song</button>
            </form>
            </div>
         );
}
 
export default SongForm;
