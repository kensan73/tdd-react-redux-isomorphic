import React from 'react';
import AutocompleteResultsList from './AutocompleteResultsList';

const SearchBar = ({ handleKeyDown, handleValueChange, handleSearch, query }) => {
  return (
    <div className="search-container">
      <div className="ui search-bar">
        <input
          className="search-bar-input"
          type="text"
          value={query}
          placeholder="Search..."
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleKeyDown: React.PropTypes.func.isRequired,
  handleValueChange: React.PropTypes.func.isRequired,
  query: React.PropTypes.string.isRequired
};

export default SearchBar;
