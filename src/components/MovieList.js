import React, { Component } from 'react';
import './MovieList.css';

class MovieList extends Component {
  render() {
    return (
      <div className="list-container">
        <h3>{this.props.title}</h3>
        <div className="list">{this.props.children}</div>
      </div>
    );
  }
}

export default MovieList;
