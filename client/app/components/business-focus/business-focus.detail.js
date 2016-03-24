import _ from 'lodash';
import template from './business-focus.detail.html';

import './business-focus.detail.scss';

class BusinessFocusDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }

  chooseBusinessFocus(focus) {
    this.Storage.data.businessFocus.type = focus;
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
