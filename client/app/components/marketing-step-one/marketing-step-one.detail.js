import _ from 'lodash';
import template from './marketing-step-one.detail.html';

import './marketing-step-one.detail.scss';

class MarketingStepOneDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }

  chooseBusinessModel(focus) {
    this.Storage.data.marketingStepOne.businessModel = focus;
  }

  isChosenBusinessModel(focus) {
    return focus === this.Storage.data.marketingStepOne.businessModel;
  }
}

export default {
  template,
  controller: MarketingStepOneDetailController,
  bindings: {
  }
};
