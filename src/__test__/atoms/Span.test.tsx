import 'jsdom-global/register';
import React from 'react';
import Span from '../../components/atoms/Span';
import { mount } from 'enzyme';

describe('<Span/>', () => {
  let container = null;

  it('renders correctly', () => {
    container = mount(<Span size="big">test</Span>);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
