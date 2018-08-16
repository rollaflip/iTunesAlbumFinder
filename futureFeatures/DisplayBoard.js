import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import '../style.css';

export default class DisplayBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums,
      artistObj:{},
      display: "Enter Artist Name:"
    };
  }

  for()
  render(){
    return(
      <p>Showing results for </p>
    )
  }

}
