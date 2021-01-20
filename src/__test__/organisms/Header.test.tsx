import 'jsdom-global/register';
import React from 'react';
import Header from '../../components/organisms/Header';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('<Header/>', () => {
  let container = null;
  let mockFn = jest.fn();

  it('renders correctly', () => {
    container = mount(
      <MemoryRouter>
        <Header onToggle={mockFn} pageName="Home" />
      </MemoryRouter>
    );
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
