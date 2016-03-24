import _ from 'lodash';
import template from './pilot.master.html';

import './pilot.master.scss';

class PilotMasterController {
  constructor(Storage) {
    'ngInject';
    this.Storage = Storage;
    this.formData = {};
  }

  onSubmit(data) {
    this.Storage.data.pilot.employeeList.push(data);
    this.formData = {};
  }
}

export default {
  template,
  controller: PilotMasterController,
  bindings: {
  }
};
