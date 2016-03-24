import angular from 'angular';

import Storage from './storage.service';

export default angular.module('app.common', [])
  .service('Storage', Storage);
