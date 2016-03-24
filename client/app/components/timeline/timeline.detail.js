import _ from 'lodash';
import template from './timeline.detail.html';

import './timeline.detail.scss';

class TimelineDetailController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
  }

  calcTimelineWidth(months) {
    return 100 * months / 60;
  }
}

export default {
  template,
  controller: TimelineDetailController,
  bindings: {
  }
};
