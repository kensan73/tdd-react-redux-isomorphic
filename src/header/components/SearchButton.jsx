import React, {Component} from 'react';

export default class SearchButton extends Component {
  render() {
    const {query} = this.props;
    if(query.trim() == '')
      return null;
    return <button className="search-button">Search</button>;
  }
}