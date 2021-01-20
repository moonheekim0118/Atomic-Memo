import 'jsdom-global/register';
import React from 'react';
import Select from '../../components/molecules/Select';
import { mount } from 'enzyme';

describe('<Select/>', () => {
  let container = null;
  const mockFn = jest.fn();

  it('renders correctly', () => {
    container = mount(<Select defaultText="Work" setDefaultText={mockFn} />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
