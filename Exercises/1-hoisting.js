/* eslint-disable no-var */
/* eslint-disable no-use-before-define */

'use strict';

const fn = () => {
  console.log(a); //undefined
  var a = 16;
};

fn();

module.exports = { fn };
