import 'jsdom-global/register';
import React from 'react';
import MainView from '../../components/molecules/MainView';
import { mount } from 'enzyme';

describe('<MainView/>', () => {
  let container = null;

  it('renders correctly', () => {
    container = mount(<MainView text="test" />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
