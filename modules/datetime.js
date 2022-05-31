import { DateTime } from '../node_modules/luxon/src/luxon.js';

const twoDigits = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};

const startTime = () => {
  const now = DateTime.now();
  const showData = `${now.toLocaleString(DateTime.DATE_FULL)} ${now.hour}:${twoDigits(now.minute)}:${twoDigits(now.second)} hrs.`;
  document.querySelector('.mainTime').innerHTML = showData;
  setInterval(startTime, 1000);
};

export default startTime;
