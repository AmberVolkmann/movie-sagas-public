import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'

class Details extends Component {

    goHome = () => {
        this.props.history.push('/')
    }

    edit = () => {
        this.props.history.push('/edit');
        this.props.dispatch({type: 'GET_DETAILS', payload: {...this.props.movie}})
    }


  render() {
    let currentID = this.props.reduxStore.currentMovie
    return (
      <Router>
        <div>
            <h1>{currentID.title}</h1>
   
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Details);