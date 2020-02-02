import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import MovieCard from '../MovieCard/MovieCard';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM

  //Use componentDidMount here
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES'
     })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <p>App Page</p>
          <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/edit" component={Edit} />
            </div>
        </div>
      </Router>
    );
  }
}


export default connect() (App);
