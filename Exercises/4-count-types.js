'use strict';

const Array = ['Marcus', true, 'hello', 5, 12, -200,
  false, 'Aurelius', false, 'word', 322, true, 'imperor',
  234000, 'KPI is the best', 12, false, 14.5, 'true', true];

const countTypesInArray = (arr) => {
  const hash = {};
  for (const num of arr)
    if (typeof num in hash)
      hash[typeof num] += 1;
    else
      hash[typeof num] = 1;
  return hash;
};

console.log(countTypesInArray(Array));

module.exports = { countTypesInArray };
