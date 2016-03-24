import _ from 'lodash';
import dataJSON from '../data/data.json';

export default class Month2Year {
  constructor() {
    'ngInject';
  }

  convert(arr) {
    var res = [];
    var pos = 0;

    for (var y=0; y < 5; ++y) {
      var yearTotal = 0;
      for (var m=0; m < 12; ++m) {
        yearTotal += arr[pos];
        ++pos;
      }

      res.push(yearTotal);
    }

    return res;
  }
}
