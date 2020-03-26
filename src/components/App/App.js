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

          <Route path="/" exact component={MovieList} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
          <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);

