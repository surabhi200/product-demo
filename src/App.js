import React, { Component } from 'react';
//mport logo from './logo.svg';
//import './App.css';
import "./typo.less";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> 
          </p>
         
    </header>*/}
    <div id="app-root" class=" m">
 
    <div class="m-page m-page-lightBlueBackground"></div>
    <header class="m-header m-header-isFixed">
    <div class="m-header-position">
    <div class="m-header-inner">
    <div class="m-header-logo"><img src="./brand-logo.png" alt="Logo" 
    class="m-logo m-logo-isMakro m-logo-isSmall"></img>
    <div class="m-header-content">
    </div>
    </div>
    </div>
    </div>
  </header>

<div class="m-page-container">
</div>

      <footer class="m-footer m-footer-isTransparent">
      <span>
        
        <a href="#" class="m-footer-link">Terms &amp; Conditions</a>
        </span><span><a href="#" class="m-footer-link">German</a>
        <a href="#" class="m-footer-link m-footer-link-isActive">English</a>
        <a href="#" class="m-footer-link">Français</a><a href="#" class="m-footer-link">Česky</a></span>
        </footer>
      </div>
      </div>

    
    );
  }
}

export default App;
