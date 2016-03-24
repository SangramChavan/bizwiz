import _ from 'lodash';
import template from './summary.master.html';

import './summary.master.scss';

class SummaryMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;

    const initialMonthlyBudget = this.Storage.data.marketingStepThree.monthlyBudget;

    this.budgetSliderOptions = {
      floor: 1,
      ceil: initialMonthlyBudget * 4
    };

    this.viralitySliderOptions = {
      floor: 0,
      ceil: 500
    };

    this.developmentTimeSliderOptions = {
      floor: 1,
      ceil: 30
    };

    this.salariesSliderOptions = {
      floor: -100,
      ceil: 100
    };
  }
}

export default {
  template,
  controller: SummaryMasterController,
  bindings: {}
};
