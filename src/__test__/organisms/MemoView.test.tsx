import 'jsdom-global/register';
import React from 'react';
import MemoView from '../../components/organisms/MemoView';
import { mount } from 'enzyme';

describe('<MemoView/>', () => {
  let container = null;
  let mockData = {
    id: 'test',
    title: 'test',
    main: 'test',
    kind: 'test',
    time: 'test',
  };
  it('renders correctly', () => {
    container = mount(<MemoView data={mockData} type="memos" />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
