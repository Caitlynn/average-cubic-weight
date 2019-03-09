import React, { Component } from 'react';
import fetchAverageCubicWeight from './fetch_products_info';
import './App.css';

class App extends Component {

  state = {
    averageCubicWeight: undefined,
  };

  onClick = () => {
    fetchAverageCubicWeight().then((result) => {
      this.setState({ averageCubicWeight: result.toFixed(2) });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="App-button" onClick={this.onClick}>Get Average Cubic Weight</button>
          {this.state.averageCubicWeight !== undefined &&
            <h1 className="App-title">The average cubic weight is: {this.state.averageCubicWeight} kg</h1>
          }
        </header>
      </div>
    );
  }
}

export default App;
