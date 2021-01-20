import 'jsdom-global/register';
import React from 'react';
import MemoTitle from '../../components/molecules/MemoTitle';
import { mount } from 'enzyme';

describe('<MemoTitle/>', () => {
  let container = null;

  it('renders correctly', () => {
    container = mount(<MemoTitle title="test" kind="Work" />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
