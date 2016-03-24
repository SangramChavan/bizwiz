import _ from 'lodash';
import template from './marketing-step-three.master.html';

import './marketing-step-three.master.scss';

class MarketingStepThreeMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: MarketingStepThreeMasterController,
  bindings: {
  }
};
