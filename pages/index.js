import React from 'react';
import { connect } from 'react-redux';
import { fetchApodStart,logIn } from '../lib/reducers/apod';
import Link from 'next/link';
import store from "../lib/store";
import Button from '@material-ui/core/Button';



const mapStateToProps = state => ({
  apod: state.apod,
});

const mapDispatchToProps = dispatch => ({
  logIn:() => dispatch(logIn())
});

class Index extends React.Component {
  static async getInitialProps({ isServer, store }) {
   

    return {};
  }
  logIn = async () => {
    console.log('fist debug')
   this.props.logIn();
  }

  render() {
    return (
      <div>
        <h1>Hello Cruel World</h1>
        <Link href="/about"><a>about</a></Link>
        <btn onClick={()=>{this.logIn()}}>Long in</btn>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
