import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const mockData = [
  {
    id: 1,
    title: '안녕하세ddddd요쿵짜리쿵ㅇ짜리쿵쿵짜리라',
    kind: 'Work',
    time: '2021~00',
  },
  { id: 2, title: '안녕하세요', kind: 'Life', time: '2021~00' },
];

const Home = () => {
  let { id } = useParams<{ id: string }>();

  return (
    <Templates datas={mockData} pageName="Home">
      <MemoView />
    </Templates>
  );
};

export default Home;
