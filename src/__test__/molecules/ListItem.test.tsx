import 'jsdom-global/register';
import React from 'react';
import ListItem from '../../components/molecules/ListItem';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('<ListItem/>', () => {
  let container = null;

  it('renders correctly', () => {
    container = mount(
      <MemoryRouter>
        <ListItem title="test" time="10" kind="Work" path="" />
      </MemoryRouter>
    );
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
