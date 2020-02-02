import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Edit extends Component {


  render() {
    return (
      <Router>
        <div>
   
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Edit);