import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SearchButton from '../components/SearchButton';

describe('SearchButton', () => {
  describe('SearchButton conditional display', () => {
    it('should render when there is a non-empty query', () => {
      const searchButton = shallow(<SearchButton query="some query" />);

      expect(searchButton.html()).toBe('<button class="search-button">Search</button>');
    });

    it('should not render when there is an empty query', () => {
      const searchButton = shallow(<SearchButton query="" />);

      expect(searchButton.html()).toBe(null);
    });
  });
});
