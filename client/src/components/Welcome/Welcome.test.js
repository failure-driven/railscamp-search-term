import React from 'react';
import Welcome from './';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import { Link } from 'react-router-dom';

it('renders welcome message', () => {
  const wrapper = shallow(<Welcome />);
  const welcome = <h2>Welcome to the Game</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

describe('button', () => {
  it('takes you to round 1 on click', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find(Link).prop('to')).toEqual('/rounds/1');
  });
})