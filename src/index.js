import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ghibli from './components/Ghibli'
import $ from 'jquery';
import Popper from 'popper.js';

class App extends React.Component {
  render(){
    return (
      <Ghibli />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)