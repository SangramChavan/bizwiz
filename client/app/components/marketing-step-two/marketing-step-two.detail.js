import _ from 'lodash';
import template from './marketing-step-two.detail.html';

import './marketing-step-two.detail.scss';

class MarketingStepTwoDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: MarketingStepTwoDetailController,
  bindings: {
  }
};
