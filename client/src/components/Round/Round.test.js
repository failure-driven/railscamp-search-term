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
  expect(wrapper.find('textarea').prop('autofocus')).toEqual('true');
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

describe('guess comparator module', () => {
  const wrapper = shallow(<Round />);

  it('should be incorrect if not the right subject', () => {
    expect(wrapper.find('.status').text()).toEqual('');

    wrapper.find('textarea').simulate('change', { target: { value: 'michael' }});

    expect(wrapper.find('.status').text()).toEqual('');
  });

  it('should be correct when the right subject has been guessed', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'matt' }});

    expect(wrapper.find('.status').text()).toEqual('CORRECT');
  });
  it('should display the "next" button when the right subject has been guessed', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'matt' }});

    expect(wrapper.find('button').text()).toEqual('NEXT');
  });
  it('should display the no button if the right subject has not been guessed', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'max' }});

    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('should be correct when the right subject has been guessed on multiple lines', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'Cat\nMatt' }});

    expect(wrapper.find('.status').text()).toEqual('CORRECT');
  });

  it('should not be correct when the subject is part of the guess comparator input', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'Tomatthey' }});

    expect(wrapper.find('.status').text()).toEqual('');
  });

  it('should be correct when the right subject has been guessed with mixed case', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'mAtT' }});

    expect(wrapper.find('.status').text()).toEqual('CORRECT');
  });
})
