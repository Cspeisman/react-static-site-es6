import React from 'react';
import Router from 'react-router';
let Link = Router.Link

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'>Index</Link>
        <Link to='/about'>About</Link>
      </header>
    )
  }
}
