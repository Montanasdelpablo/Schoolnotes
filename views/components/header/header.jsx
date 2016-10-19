import React from 'react';
import Navbar from './nav.jsx';

export default class Header extends React.Component {
  
  render() {
    return <div className="container-fluid"> 
                <div className="row">
                <Navbar> </Navbar>
                </div>
           </div>;
  }
}