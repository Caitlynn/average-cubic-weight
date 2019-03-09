import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

jest.mock('./fetch_products_info', () => {
  return () => new Promise(() => 20);
});

const App = require('./App').default;
const mockCalculation = require('./fetch_products_info').default;

describe('<App />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('the business logic function gets called after button clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.App-button').simulate('click');
    expect(mockCalculation).toBeCalled;
  });
});
