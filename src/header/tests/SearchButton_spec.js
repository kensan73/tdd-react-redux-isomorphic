import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import SearchButton from '../components/SearchButton';

describe('SearchButton', () => {
  describe('SearchButton conditional display', () => {
    it('should render when there is a non-empty query', () => {
      const searchButton = shallow(<SearchButton query="some query"/>);

      expect(searchButton.html()).toBe('<button class="search-button">Search</button>');
    });

    it('should not render when there is an empty query', () => {
      const searchButton = shallow(<SearchButton query=""/>);

      expect(searchButton.html()).toBe(null);
    });

    it('should not render when there are just spaces for query', () => {
      const searchButton = shallow(<SearchButton query="              "/>);

      expect(searchButton.html()).toBe(null);
    });
  });

  describe('SearchButton behavior', () => {
    it('should call the onclick handler when button is clicked', () => {
      let fakeFunction = sinon.spy();

      const searchButton =
        shallow(<SearchButton query="some query" handleClick={fakeFunction} />);
      searchButton.simulate('click');

      expect(fakeFunction.called).toBe(true);
    });
  });
});
