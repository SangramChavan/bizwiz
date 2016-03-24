import angular from 'angular';

import Storage from './storage.service';
import Team from './team.service';
import ScaleMeUp from './scale-me-up.service';
import Month2Year from './month2year.service';

export default angular.module('app.common', [])
  .service('Storage', Storage)
  .service('Team', Team)
  .service('ScaleMeUp', ScaleMeUp)
  .service('Month2Year', Month2Year);
