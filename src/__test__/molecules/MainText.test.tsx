import 'jsdom-global/register';
import React from 'react';
import MainText from '../../components/molecules/MainText';
import { mount } from 'enzyme';

describe('<MainText/>', () => {
  let container = null;
  const mockFn = jest.fn();

  it('renders correctly', () => {
    container = mount(<MainText value="" onChange={mockFn} error={false} />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
