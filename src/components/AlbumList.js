import React, { Component } from 'react';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums
    }
  }

  render() {
    let {albums} = this.props;
    console.log(albums, '%% in albumList Render %%%')
    if (albums.length > 0) {

      return (
        <div>
          <div>in AlbumList</div>
          <ul>
          {albums.map(album => {
            return (
              <li key={album.collectionId}>
                <div>{album.collectionName}</div>
                <div>{album.artworkUrl60}</div>
                <div>{album.collectionPrice}</div>
              </li>
            );
          })}
        </ul>
        </div>
      );
    }
    return null
  }
}
