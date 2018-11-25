import React from 'react';
import Round from './';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

it('renders round one message', () => {
  const wrapper = shallow(<Round match={{ params: { round: 1 } }} />);
  const round = <h2>This is round 1</h2>;
  expect(wrapper.contains(round)).toEqual(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders img', () => {
  const wrapper = shallow(<Round match={{ params: { round: 1 } }}  />);
  expect(wrapper.find('img').prop('src')).toEqual('http://localhost:5000/8e85e82e854.gif');
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders renders a text area', () => {
  const wrapper = shallow(<Round match={{ params: { round: 1 } }} />);
  expect(wrapper.find('textarea').exists()).toBe(true);
  expect(wrapper.find('textarea').prop('autoFocus')).toEqual('true');
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

// TODO how do we test focus
it.skip('focuses on the text area when it is the next round', () => {
  const div = document.createElement('div');
  const wrapper = ReactDOM.render(<Round match={{ params: { round: 1 } }} />, div);
  expect(wrapper.find('textarea').prop('autofocus')).toEqual('true');

  wrapper.find('textarea').simulate('change', { target: { value: 'matt' }});
  expect(wrapper.find('textarea:disabled').exists()).toBe(true);
  wrapper.find('[data-test-next]').simulate("click");

  expect(wrapper.find('textarea').prop('autofocus')).toEqual('true');
});

describe('guess comparator module', () => {
  const wrapper = shallow(<Round match={{ params: { round: 1 } }} />);

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

    expect(wrapper.find('[data-test-next]').props().to).toEqual('/rounds/2');
  });
  it('should display the no button if the right subject has not been guessed', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'max' }});

    expect(wrapper.find('[data-test-next]').exists()).toBe(false);
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
