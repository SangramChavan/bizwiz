import _ from 'lodash';
import dataJSON from '../data/data.json';

export default class Storage {
  constructor() {
    'ngInject';
    this.data = {
      businessFocus: {
        type: ''
      },
      timeline: {
        mvp: 4,
        pilot: 6
      },
      mvp: {
        founderList: []
      },
      pilot: {
        employeeList: []
      },
      marketingStepOne: {
        businessModel: ''
      }
    };
    this.options = JSON.parse(dataJSON);
  }
}
