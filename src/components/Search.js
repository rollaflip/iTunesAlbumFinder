import React, { Component } from 'react';
import '../style.css';
import getAlbumsByArtist from './iTunesApiFetch';
import AlbumList from './AlbumList';
import { Input } from '@material-ui/core';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      prevTerm: '',
      albumsArray: [],
    };
  }

  handleChange = evt => {
    evt.preventDefault();
    this.setState({
      term: evt.target.value,
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    let searchTerm = this.state.term;

    if (searchTerm.length) {
      let albumsFromAPI = await getAlbumsByArtist(searchTerm);
      this.setState({
        prevTerm: searchTerm,
        albumsArray: albumsFromAPI,
      });
    }
  };

  render() {
    return (
      <div className="centerTheText">
        <div className="searchBarStyle">
          <p>Enter Artist Name:</p>

          <form onSubmit={this.handleSubmit} className="searchBarStyle">
            <Input
              autoComplete="off"
              type="search"
              onChange={this.handleChange}
              name="artistName"
              ref="artistName"
              style={{ width: '18%' }}
              placeholder="Search for Albums by Artist"
            />
          </form>
        </div>
        <AlbumList
          albums={this.state.albumsArray}
          prevTerm={this.state.prevTerm}
        />
      </div>
    );
  }
}
