import React from 'react';
import Header from './header/header.jsx';
import Body from './body/body.jsx';

export default class App extends React.Component {
  render() {
    return <div> 
                <Header />
                <Body />
           </div>;
  }
}