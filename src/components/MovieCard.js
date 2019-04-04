import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          className="responsive-image"
          src={this.props.item.img}
          alt="Movie"
        />
        <p className="title">{this.props.item.title}</p>
        <div className="overlay" />
        <button
          className="button"
          onClick={() => this.props.onClick(this.props.item)}
        >
          {this.props.type === 'remove' ? 'Remove' : 'Add'}
        </button>
      </div>
    );
  }
}

export default MovieCard;
