import angular from 'angular';

import BusinessFocusMaster from './business-focus/business-focus.master';
import BusinessFocusDetail from './business-focus/business-focus.detail';

import TimelineMaster from './timeline/timeline.master';
import TimelineDetail from './timeline/timeline.detail';

import MvpMaster from './mvp/mvp.master';
import MvpDetail from './mvp/mvp.detail';

import PilotMaster from './pilot/pilot.master';
import PilotDetail from './pilot/pilot.detail';

import MarketingStepOneMaster from './marketing-step-one/marketing-step-one.master';
import MarketingStepOneDetail from './marketing-step-one/marketing-step-one.detail';

export default angular
  .module('app.components', [])

  .component('businessFocusMaster', BusinessFocusMaster)
  .component('businessFocusDetail', BusinessFocusDetail)

  .component('timelineMaster', TimelineMaster)
  .component('timelineDetail', TimelineDetail)

  .component('mvpMaster', MvpMaster)
  .component('mvpDetail', MvpDetail)

  .component('pilotMaster', PilotMaster)
  .component('pilotDetail', PilotDetail)

  .component('marketingStepOneMaster', MarketingStepOneMaster)
  .component('marketingStepOneDetail', MarketingStepOneDetail);
