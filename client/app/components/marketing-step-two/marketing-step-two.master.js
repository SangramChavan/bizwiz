import _ from 'lodash';
import template from './marketing-step-two.master.html';

import './marketing-step-two.master.scss';

class MarketingStepTwoMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: MarketingStepTwoMasterController,
  bindings: {
  }
};
