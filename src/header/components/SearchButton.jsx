import React, { Component } from 'react';

export default class SearchButton extends Component {
  render() {
    const { query, handleClick } = this.props;
    if (query.trim() === '') { return null; }
    return <button onClick={handleClick} className="search-button">Search</button>;
  }
}
