import 'jsdom-global/register';
import React from 'react';
import TitleText from '../../components/molecules/TitleText';
import { mount } from 'enzyme';

describe('<TitleText/>', () => {
  let container = null;
  const mockFn = jest.fn();

  it('renders correctly', () => {
    container = mount(
      <TitleText value="Work" onChange={mockFn} error={false} />
    );
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
