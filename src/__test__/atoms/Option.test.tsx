import 'jsdom-global/register';
import React from 'react';
import Option from '../../components/atoms/Option';
import { mount } from 'enzyme';

describe('<Option/>', () => {
  let container = null;

  it('renders correctly', () => {
    container = mount(<Option dataName="test">test</Option>);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
