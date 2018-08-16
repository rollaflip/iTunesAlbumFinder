import React, { Component } from 'react';
import '../style.css';
import getAlbumsByArtist from './iTunesApiFetch'
import AlbumList from './AlbumList';
import {Button, TextField, Input} from '@material-ui/core'
// import { faFreebsd } from '@fontawesome/free-brands-svg-icons'


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
    // let previousTerm = this.state.prevTerm
    let searchTerm = this.state.term

    if(searchTerm.length){

      let albumsFromAPI = await getAlbumsByArtist(searchTerm);
      console.log(`request sent to iTunes!`)
      this.setState({
        prevTerm: searchTerm,
        // term: '',
        albumsArray: albumsFromAPI
      })
      console.log(this.state.albumsArray, '### Handle Sumbit ###')
    }
  };

  render() {
    return (
      <div className="centerTheText">
        <div className="searchBarStyle">
          <p>Enter Artist Name:</p>

          <form className="container-1" onSubmit={this.handleSubmit} className="searchBarStyle">


            <Input
            autoComplete="off"

              type="search"
              onChange={this.handleChange}
              name="artistName"
              ref="artistName"
              style ={{width: '25%'}}
              // inputStyle ={{width: '33%'}}
              placeholder = "Search for Albums by Artist"
            />

            {/* <Button className="buy" id="buy" variant="contained" color="primary" onClick={this.handleSubmit}>
              Search
            </Button> */}
          </form>

        </div>

          {/* <div className="box">
          <form onSubmit={this.handleSubmit} className="container-1">
          <span className="icon"><i className="fa fa-search"></i></span>
          <input  type="search" id="search" placeholder="Search..." />
          </form>
        </div>  */}


        <AlbumList albums={this.state.albumsArray} prevTerm={this.state.prevTerm}/>
      </div>
    );
  }
}
