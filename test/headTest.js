const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([3, 4, 6]), 3);
assertEqual(head([false, true, true]), false);