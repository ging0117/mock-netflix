import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../constant/netflix-logo.png';
import './App.css';
import {
  requestMovieData,
  addMovieToList,
  removeMovieFromList,
} from '../actions/movieAction';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';

class App extends Component {
  componentDidMount() {
    //fetch data from backend api
    this.props.requestMovieData();
  }

  handleRemove = item => {
    this.props.removeMovieFromList(item);
  };

  handleAdd = item => {
    this.props.addMovieToList(item);
  };

  render() {
    const { myList, recommandationsList } = this.props;
    const movieList =
      myList.length === 0 ? (
        <div className="no-data-messege">
          You haven't addded any titles to your list yet.
        </div>
      ) : (
        myList.map(item => (
          <MovieCard
            type="remove"
            key={item.id}
            item={item}
            isAdded={false}
            onClick={this.handleRemove}
          />
        ))
      );

    const recommandationList = recommandationsList.map(item => (
      <MovieCard
        type="add"
        key={item.id}
        item={item}
        isAdded={myList.filter(value => value.id === item.id).length === 1}
        onClick={this.handleAdd}
      />
    ));

    return (
      <div className="app">
        <header className="app-header">
          <img className="app-logo" src={logo} alt="logo" />
          <a href="/" className="app-login-button">
            Login
          </a>
        </header>
        <div className="app-body">
          <MovieList title="My List">{movieList}</MovieList>
          <MovieList title="Recommandations">{recommandationList}</MovieList>
          <div style={{ marginTop: 30, color: '#ccc' }}>
            My List: {myList.map(item => item.title + ', ')}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  myList: state.movieReducer.data.mylist,
  recommandationsList: state.movieReducer.data.recommendations,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestMovieData, addMovieToList, removeMovieFromList },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
