import React from 'react';
import Welcome from './';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

it('renders welcome message', () => {
  const wrapper = shallow(<Welcome />);
  const welcome = <h2>Welcome to the Game</h2>;
  console.log( wrapper.find('h2') )
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

describe('button', () => {
  it('takes you to round 1 on click', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('[data-start-button]').prop('href')).toEqual('/rounds/1')
  });
})