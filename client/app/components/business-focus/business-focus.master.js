import _ from 'lodash';
import template from './business-focus.master.html';

import './business-focus.master.scss';

class BusinessFocusMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: BusinessFocusMasterController,
  bindings: {
  }
};
