import React from 'react';
import Navigation from '../../../components/organisms/Navigation';

const mockData = [
  {
    id: 1,
    title: '안녕하세ddddd요쿵짜리쿵ㅇ짜리쿵쿵짜리라',
    kind: 'Work',
    time: '2021~00',
  },
  { id: 2, title: '안녕하세요', kind: 'Life', time: '2021~00' },
];

const HomeTemplates = () => {
  return (
    <>
      <Navigation open={true} datas={mockData} />
    </>
  );
};

export default HomeTemplates;
