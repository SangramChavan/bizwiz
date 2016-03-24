import _ from 'lodash';
import template from './growth.master.html';

import './growth.master.scss';

class GrowthMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: GrowthMasterController,
  bindings: {
  }
};
