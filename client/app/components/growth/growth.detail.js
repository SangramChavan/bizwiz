import _ from 'lodash';
import template from './growth.detail.html';

import './growth.detail.scss';

class GrowthDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: GrowthDetailController,
  bindings: {
  }
};
