import React, { Component } from 'react'; 
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import SongForm from './SongForm/SongForm';
import FilterBar from './FilterBar/FilterBar';
import './App.css'
import EditSong from './EditSong';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

 
    componentDidMount() {
        this.getSongs()
    }



    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
    }

    async deleteSong(key){
        await axios.delete(`http://127.0.0.1:8000/music/${key}/`)
        window.location.reload();
    }

    addSong = async(newSong) => {
        await axios.post('http://127.0.0.1:8000/music/', newSong)
        this.getSongs()
    }

    filterSelect = (filterBy, filter) => {
        if(filterBy === 'all') {
            this.getSongs()
        } else {
        let newArr = this.state.songs.filter(song => song[filterBy] === filter)
        this.setState({
            songs: newArr
        })
        }
    }

    render() {
        return (
            <div className='main'>
            <h1> Music Library </h1>
            <FilterBar sort={this.filterSelect} songs={this.state.songs}/>
            <MusicTable deleteSong={this.deleteSong} songs={this.state.songs} />
            <SongForm addNewSong={this.addSong}/>
           
            </div>
        )
    }
}
export default App; 