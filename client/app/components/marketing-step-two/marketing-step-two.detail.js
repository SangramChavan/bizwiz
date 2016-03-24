import _ from 'lodash';
import template from './marketing-step-two.detail.html';

import './marketing-step-two.detail.scss';

class MarketingStepTwoDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;

    this.arpuSliderOptions = {
      floor: 0,
      ceil: 100
    };

    this.viralitySliderOptions = {
      floor: 0,
      ceil: 500
    };
  }
}

export default {
  template,
  controller: MarketingStepTwoDetailController,
  bindings: {}
};
