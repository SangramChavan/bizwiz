import _ from 'lodash';
import template from './mvp.master.html';

import './mvp.master.scss';

class MvpMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
    this.formData = {};
  }

  onSubmit(data) {
    this.Storage.data.mvp.founderList.push(data);
    this.formData = {};
  }
}

export default {
  template,
  controller: MvpMasterController,
  bindings: {
  }
};
