import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to the Game</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('renders a button', () => {
  const wrapper = shallow(<App />);
  const button = <button>Start Game</button>;
  expect(wrapper.contains(button)).toEqual(true);
});