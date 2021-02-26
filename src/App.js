import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Damn you adlan
          </p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/adlanhercus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See him in all his glory
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
