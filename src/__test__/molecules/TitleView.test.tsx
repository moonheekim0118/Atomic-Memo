import 'jsdom-global/register';
import React from 'react';
import TitleView from '../../components/molecules/TitleView';
import { mount } from 'enzyme';

describe('<TitleView/>', () => {
  let container = null;
  it('renders correctly', () => {
    container = mount(<TitleView text="test" time="test" />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
