import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Details from '../Details/Details'
import { withRouter } from 'react-router-dom';

class MovieCard extends Component {

    details = (id) => {
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
        this.props.history.push(`/details`)
    }

    render() {

        let id = this.props.id
        let index = id -1
        let movie = this.props.reduxStore.movies[index]

        return (
            <Router>
                <div>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster} alt={this.props.reduxStore.movies.title}
                    onClick = {()=>{this.details(id)}}
                    />
                    {/* <p>{movie.description}</p> */}
                </div>
            </Router>
            );
        }
    }

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapStateToProps) (MovieCard));