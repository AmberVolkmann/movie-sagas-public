import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'

class Home extends Component {


  render() {
    return (
      <Router>
          <div className="movieList">
            {this.props.reduxStore.movies.map(movie => {
                return <MovieCard id={movie.id} key={movie.id} />
            })}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Home);