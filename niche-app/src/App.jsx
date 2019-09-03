import React from 'react';
import Dashboard from './Dashboard.jsx';
import ItemDetails from './ItemDetails.jsx';
import Upload from './Upload.jsx';
import Nav from './Nav.jsx';
import './App.scss';

class App extends React.Component{
  render(){
    return (
      <div className="app">
        <header>
            <h2>NACHO</h2>
            <i className="fas fa-bars"></i>
        </header>

        <Details></Details>
        
        <footer>
            <i className="fas fa-home"></i>
            <i className="fas fa-search"></i>
            <i className="far fa-plus-square plus"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-user-circle"></i>
        </footer>
    </div>
    );
  }
}

export default App;
