import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums,
    };
  }

  render() {
    let { albums, prevTerm } = this.props;

    console.log(albums, '%% in albumList Render %%%');
    if (albums.length > 0) {
      return (
        <div>
          {/* <div>in AlbumList</div> */}
          <Grid
            container
            direction="row"
            // justify="center"
            // alignItems="center"
            spacing={16}
          >
            {albums.map(album => {
              return (
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  // padding={6}
                  spacing={8}
                  key={album.collectionId}
                  // space-around={10}
                >
                  <div>
                    <img
                      src={album.artworkUrl100.replace('100x100', '200x200')}
                      alt=""
                    />
                  </div>
                  <div>{album.collectionName}</div>
                  {/* <div>{album.collectionPrice}</div> */}
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    } else if (prevTerm.length) {
      return <div> Sorry no results for ${prevTerm}, please try again</div>;
    } else {
      return null;
    }
  }
}
