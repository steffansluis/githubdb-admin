import * as React from 'react';
import './App.css';

import * as githubdb from 'githubdb';

const logo = require('./logo.svg');

class App extends React.Component<{}, { token: string }> {
  constructor() {
    super();

    this.state = {
      token: ''
    };

    githubdb();
  }

  handleChange(e: any) {
    this.setState({ token: e.target.value });
  }

  setToken() {
    /*let token = window['$']("#token").value;*/
    console.log(`Setting token to ${this.state.token}`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GitHubDB</h2>
        </div>
        <p className="App-intro">
          Enter your GitHub token here:.
        </p>
        <input id="token" value={this.state.token} onChange={ this.handleChange.bind(this) } placeholder='Token...' />
        <input type="button" value="Set token" onClick={this.setToken.bind(this)} />
      </div>
    );
  }
}

export default App;
