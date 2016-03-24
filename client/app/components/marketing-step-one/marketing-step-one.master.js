import _ from 'lodash';
import template from './marketing-step-one.master.html';

import './marketing-step-one.master.scss';

class MarketingStepOneMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: MarketingStepOneMasterController,
  bindings: {
  }
};
