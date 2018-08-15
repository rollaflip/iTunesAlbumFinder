import React, { Component } from 'react';
import '../style.css';
import getAlbumsByArtist from './iTunesApiFetch'
import AlbumList from './AlbumList';
import Button from '@material-ui/core/Button'
// import style from './'

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      prevTerm: '',
      albumsArray:[]
    };
  }

  handleChange = evt => {
    evt.preventDefault();
    this.setState({
      term: evt.target.value,

    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log(this.state.term, '@@ name on state @@')
    let previousTerm = this.state.prevTerm
    let searchTerm = this.state.term

    let albumsFromAPI = await getAlbumsByArtist(searchTerm);
    console.log(`request sent to iTunes!`)
    this.setState({
      prevTerm: searchTerm,
      term: '',
      albumsArray: albumsFromAPI
    })
    console.log(this.state.albumsArray, '### Handle Sumbit ###')
  };

  render() {
    return (
      <div >
        {/* <div> in search bar Brother!</div> */}

          <p>Enter Artist Name:</p>
        <form onSubmit={this.handleSubmit} className="divSpace">
          <input
            onChange={this.handleChange}
            name="artistName"
            ref="artistName"
            placeholder = "Search for Albums by Artist"
          />
          <Button className="buy" id="buy" variant="contained" color="primary" onClick={this.handleSubmit}>
            Search
          </Button>
        </form>


        <AlbumList albums={this.state.albumsArray} prevTerm={this.state.prevTerm}/>
      </div>
    );
  }
}
