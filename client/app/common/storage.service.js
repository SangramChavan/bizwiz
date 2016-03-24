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
      },
      marketingStepTwo: {
        averagePricePerUser: 5,
        viralityFactor: 3,
        monthlyChurn: 0
      },
      marketingStepThree: {
        monthlyBudget: 30000,
        semSeo: 0,
        ppcContent: 0,
        eventsAndShows: 0,
        pr: 0
      }
    };
    this.options = JSON.parse(dataJSON);
  }
}
