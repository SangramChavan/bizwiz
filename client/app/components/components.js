import angular from 'angular';

import BusinessFocusMaster from './business-focus/business-focus.master';
import BusinessFocusDetail from './business-focus/business-focus.detail';

import TimelineMaster from './timeline/timeline.master';
import TimelineDetail from './timeline/timeline.detail';

import MvpMaster from './mvp/mvp.master';
import MvpDetail from './mvp/mvp.detail';

import PilotMaster from './pilot/pilot.master';
import PilotDetail from './pilot/pilot.detail';

import GrowthMaster from './growth/growth.master';
import GrowthDetail from './growth/growth.detail';

import MarketingStepOneMaster from './marketing-step-one/marketing-step-one.master';
import MarketingStepOneDetail from './marketing-step-one/marketing-step-one.detail';

import MarketingStepTwoMaster from './marketing-step-two/marketing-step-two.master';
import MarketingStepTwoDetail from './marketing-step-two/marketing-step-two.detail';

import MarketingStepThreeMaster from './marketing-step-three/marketing-step-three.master';
import MarketingStepThreeDetail from './marketing-step-three/marketing-step-three.detail';

import SummaryMaster from './summary/summary.master';
import SummaryDetail from './summary/summary.detail';

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

  .component('growthMaster', GrowthMaster)
  .component('growthDetail', GrowthDetail)

  .component('marketingStepOneMaster', MarketingStepOneMaster)
  .component('marketingStepOneDetail', MarketingStepOneDetail)

  .component('marketingStepTwoMaster', MarketingStepTwoMaster)
  .component('marketingStepTwoDetail', MarketingStepTwoDetail)

  .component('marketingStepThreeMaster', MarketingStepThreeMaster)
  .component('marketingStepThreeDetail', MarketingStepThreeDetail)

  .component('summaryMaster', SummaryMaster)
  .component('summaryDetail', SummaryDetail);
