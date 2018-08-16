import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import '../style.css';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums,
      hiddenTitle:""
    };
  }

abbreviate = (str)=>{
  if(str.length >= 40){
    return str.slice(0,40).concat('...')
  }
  return str
}
  render() {
    let { albums, prevTerm } = this.props;

    console.log(albums, '%% in albumList Render %%%');
    if (albums.length > 0) {
      return (
        <div>
          <Grid
            className="albumGrid"
            container
            direction="row"
            // justify="center"
            // alignItems="center"
            spacing={0}
          >
            <Grid item sm >

            </Grid>
          </Grid>
          <Grid
            className="albumGrid"
            container
            direction="row"
            // justify="center"
            // alignItems="center"
            spacing={0}
          >
            {albums.map(album => {
              return (
                <Grid
                  item
                  sm
                  // container
                  direction="column"
                  key={album.collectionId}
                >
                  <div className="brightness">
                    <img
                      src={album.artworkUrl100.replace('100x100', '200x200')}
                      alt=""
                    />
                  </div>
                  <div>{this.abbreviate(album.collectionName)}</div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    } if (prevTerm.length) {
      return <div> Sorry, no results for "{prevTerm}", please try again</div>;
    } else {
      return null;
    }
  }
}
