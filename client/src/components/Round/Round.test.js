import React from 'react';
import Round from './';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

it('renders round one message', () => {
  const wrapper = shallow(<Round />);
  const round = <h2>This is round 1</h2>;
  expect(wrapper.contains(round)).toEqual(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders img', () => {
  const wrapper = shallow(<Round />);
  expect(wrapper.find('img').prop('src')).toEqual('http://localhost:5000/8e85e82e854.gif');
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders renders a text area', () => {
  const wrapper = shallow(<Round />);
  expect(wrapper.find('textarea').exists()).toBe(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders a status', () => {
  const wrapper = shallow(<Round />);
  expect(wrapper.find('.status').text()).toEqual('');

  wrapper.find('textarea').simulate('change', { target: { value: 'matt' }});

  expect(wrapper.find('.status').text()).toEqual('CORRECT');
});