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

describe('button', () => {
  it('takes you to round 1 on click', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('[data-start-button]').prop('href')).toEqual('/rounds/1')
  });
})