import React, {Component} from 'react';


class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterBy: "",
            filter: "",
            noDupes: []
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSelect = (event) => {
        let filterByv = event.target.value
        console.log(filterByv)
        let optionsArray = this.props.songs.map(song => {
            return song[filterByv]
        })
        let noDupesArr = optionsArray.filter((att, pos) => optionsArray.indexOf(att) == pos)
        this.setState({ filterBy: filterByv, noDupes: noDupesArr })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sort(this.state.filterBy, this.state.filter)
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>   
            <select name="filterBy" onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="genre">Genre</option>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </select>
            <select name="filter" onChange={this.handleChange} >
                {this.state.noDupes.map(song => {
                    return <option value={song}>{song}</option>
                })}
            </select>    
            <button type="submit">Filter</button>
        </form>)
    }
}
 
export default FilterBar;
