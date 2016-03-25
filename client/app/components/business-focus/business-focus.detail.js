import _ from 'lodash';
import template from './business-focus.detail.html';

import './business-focus.detail.scss';

class BusinessFocusDetailController {
  constructor(Storage, $state) {
    'ngInject';
    this.Storage = Storage;
    this.$state = $state;

    this.images = {
      'Mobile App': 'mobile.png',
      'Enterprise Software': 'enterprise_software.png',
      'Website / Social': 'social.png'
    };

    this.colors = {
      'Mobile App': '',
      'Enterprise Software': '#ff9933',
      'Website / Social': '#00cc00'
    };
  }

  chooseBusinessFocus(focus) {
    this.Storage.data.businessFocus.type = focus;
    this.$state.go('timeline');
  }

  isChosenBusinessFocus(focus) {
    return focus === this.Storage.data.businessFocus.type;
  }
}

export default {
  template,
  controller: BusinessFocusDetailController,
  bindings: {
  }
};
