import _ from 'lodash';
import template from './marketing-step-one.detail.html';

import './marketing-step-one.detail.scss';

class MarketingStepOneDetailController {
  constructor(Storage, $state) {
    'ngInject';
    this.Storage = Storage;
    this.$state = $state;

    this.images = {
      'SaaS / Subscription': 'saas.png',
      'Lead Generation': 'lead_generation.png',
      'Advertising': 'advertising.png',
      'Freemium': 'freemium.png'
    };
  }

  chooseBusinessModel(focus) {
    this.Storage.data.marketingStepOne.businessModel = focus;
    this.$state.go('marketing-step-two');
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
