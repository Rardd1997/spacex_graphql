import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {proxy} from '../package.json';
import Launches from './components/Launches';
import Launch from './components/Launch';
import NavbarMenu from './components/NavbarMenu';

const client = new ApolloClient({
  uri: `${proxy}/graphql`
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container App">
            <NavbarMenu />
            <img
              src = {logo}
              alt = "SpaceX"
              style = {{width: 300, display: 'block', paddingTop: 30, margin: 'auto'}}  
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
