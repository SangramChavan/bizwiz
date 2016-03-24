import _ from 'lodash';
import template from './marketing-step-two.detail.html';

import './marketing-step-two.detail.scss';

class MarketingStepTwoDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;

    this.priceSliderOptions = {
      floor: 0,
      ceil: 1000
    };

    this.viralitySliderOptions = {
      floor: 0,
      ceil: 10
    };
  }
}

export default {
  template,
  controller: MarketingStepTwoDetailController,
  bindings: {}
};
