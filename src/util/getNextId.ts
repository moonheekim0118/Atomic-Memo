import memoData from '../model/memoData';

const getNextId = (datas: Array<memoData>, id: string): string => {
  let index = datas.findIndex((v, i) => v.id === id) || 0;
  let nextId;
  if (index === datas.length - 1) {
    nextId = datas[0]?.id || '';
  } else {
    nextId = datas[index + 1].id;
  }
  if (datas.length === 1) {
    nextId = '';
  }
  return nextId;
};

export default getNextId;
