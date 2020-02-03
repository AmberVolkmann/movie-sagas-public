import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Details extends Component {

    goHome = () => {
        this.props.history.push('/')
    }

    


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

export default connect(mapStateToProps) (Details);