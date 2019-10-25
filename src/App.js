import React from 'react';
import AppRouter from './router/AppRouter';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  render() {  
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img src="favicon.ico" width="30" height="30" class="d-inline-block align-top pad-right" alt=""></img>
            &nbsp;&nbsp;ABOUT MY IOT
          </a>
        </nav>
        <div class="content">
          <AppRouter />
        </div>
        <div class="footer">
          {/* footer */}
        </div>
      </div>
    );
  }
}

export default App;
