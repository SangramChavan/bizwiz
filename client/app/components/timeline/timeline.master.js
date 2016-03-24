import _ from 'lodash';
import template from './timeline.master.html';

import './timeline.master.scss';

class TimelineMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }
}

export default {
  template,
  controller: TimelineMasterController,
  bindings: {
  }
};
