import 'jsdom-global/register';
import React from 'react';
import Button from '../../components/atoms/Button';
import { mount } from 'enzyme';

describe('<Button/>', () => {
  let container = null;
  const mockFn = jest.fn();

  it('renders correctly', () => {
    container = mount(<Button onClick={mockFn}>test</Button>);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should call onClick if Container is Clicked', () => {
    container.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
