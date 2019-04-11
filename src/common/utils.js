const SUPPORTED_SPORTS = [
  'BASKETBALL',
  'HANDBALL',
];

const teamA = 'Team A';

const teamB = 'Team B';

const sortArrayDescBy = prop => (a, b) => {
  if (a[prop] > b[prop]) return -1;
  if (a[prop] < b[prop]) return 1;
  return 0;
};

function startsWithAny(arr, str) {
  return arr.some(el => str.startsWith(el));
}

module.exports = {
  SUPPORTED_SPORTS,
  sortArrayDescBy,
  startsWithAny,
  teamA,
  teamB,
};
