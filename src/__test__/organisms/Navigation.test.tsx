import 'jsdom-global/register';
import React from 'react';
import Navigation from '../../components/organisms/Navigation';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('<Navigation/>', () => {
  let container = null;
  let mockData = {
    id: 'test',
    title: 'test',
    main: 'test',
    kind: 'test',
    time: 'test',
  };
  it('renders correctly', () => {
    container = mount(
      <MemoryRouter>
        <Navigation datas={[mockData]} type="memos" open={true} />
      </MemoryRouter>
    );
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
