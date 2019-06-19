import React from 'react';
import { connect } from 'react-redux';
import { fetchApodStart } from '../lib/reducers/apod';

const mapStateToProps = state => ({
  apod: state.apod,
});

const mapDispatchToProps = dispatch => ({
  fetchApod: date => dispatch(fetchApodStart(date)),
});

class About extends React.Component {
  static async getInitialProps({ isServer, store }) {
   
    return {};
  }

  render() {
    return (
      <div>
        <h1>About this cruel world</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
