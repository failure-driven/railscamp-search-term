import React from 'react';
import Round from './';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

it('renders welcome message', () => {
  const wrapper = shallow(<Round />);
  const round = <h2>This is round 1</h2>;
  expect(wrapper.contains(round)).toEqual(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders img', () => {
  const wrapper = shallow(<Round />);
  expect(wrapper.find('img').prop('src')).toEqual('');
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
