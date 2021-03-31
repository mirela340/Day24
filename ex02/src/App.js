import React, { Component } from 'react';
class App extends Component {
  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  getMyStorage() {
    var myCookieData = document.cookie
      .split('; ')
      .find(row => row.startsWith('Year='))
      .split('=')[1];
    var myLocalStorage = localStorage.getItem("Paragon");
    var mySessionStorageData = sessionStorage.getItem("frontend");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>
          Click me
        </button>

        <button onClick={this.getMyStorage}>
          Click me
        </button>
      </div>
    )
  }
}

export default App;
