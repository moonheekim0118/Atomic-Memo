import 'jsdom-global/register';
import React from 'react';
import MemoEditor from '../../components/organisms/MemoEditor';
import { mount } from 'enzyme';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('<MemoEditor/>', () => {
  let container = null;

  it('renders correctly', () => {
    container = mount(<MemoEditor />);
  });

  it('matches snpashot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
