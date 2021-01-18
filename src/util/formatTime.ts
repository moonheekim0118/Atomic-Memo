const formatTime = (seconds: number) => {
  let date = new Date(seconds * 1000),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    year = '' + date.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('/');
};

export default formatTime;
