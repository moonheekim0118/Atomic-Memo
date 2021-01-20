import 'jsdom-global/register';
import React from 'react';
import Textarea from '../../components/atoms/Textarea';
import { mount } from 'enzyme';

describe('<Textarea/>', () => {
  let container = null;
  const mockFn = jest.fn();

  it('renders correctly', () => {
    container = mount(<Textarea value="" onChange={mockFn} size="title" />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should call onChage if Container is Changed', () => {
    container.simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});
