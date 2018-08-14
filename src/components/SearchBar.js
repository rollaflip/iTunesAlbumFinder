import React, { Component } from 'react';
import getAlbumsByArtist from './iTunesApiFetch'
import AlbumList from './AlbumList';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
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
    let searchTerm = this.state.term

    let albumsFromAPI = await getAlbumsByArtist(searchTerm);
    console.log(`request sent to iTunes!`)
    this.setState({
      term: '',
      albumsArray: albumsFromAPI
    })
    console.log(this.state.albumsArray, '### Handle Sumbit ###')
  };

  render() {
    return (
      <div>
        <div> in search bar Brother!</div>

        <form onSubmit={this.handleSubmit}>
          <p>Enter Artist Name:</p>
          <input
            onChange={this.handleChange}
            name="artistName"
            ref="artistName"
            placeholder = "Search for Albums by Artist"
          />
          <button onClick={this.handleSubmit}>
            Search
          </button>
        </form>


        <AlbumList albums={this.state.albumsArray}/>
      </div>
    );
  }
}
