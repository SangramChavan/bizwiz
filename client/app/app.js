import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('business-focus', {
        url: '/business-focus',
        views: {
          master: { template: '<business-focus-master></business-focus-master>' },
          detail: { template: '<business-focus-detail></business-focus-detail>' }
        }
      })
      .state('timeline', {
        url: '/timeline',
        views: {
          master: { template: '<timeline-master></timeline-master>' },
          detail: { template: '<timeline-detail></timeline-detail>' }
        }
      })
      .state('mvp', {
        url: '/mvp',
        views: {
          master: { template: '<mvp-master></mvp-master>' },
          detail: { template: '<mvp-detail></mvp-detail>' }
        }
      })
      .state('pilot', {
        url: '/pilot',
        views: {
          master: { template: '<pilot-master></pilot-master>' },
          detail: { template: '<pilot-detail></pilot-detail>' }
        }
      })
      .state('marketing-step-one', {
        url: '/marketing-step-one',
        views: {
          master: { template: '<marketing-step-one-master></marketing-step-one-master>' },
          detail: { template: '<marketing-step-one-detail></marketing-step-one-detail>' }
        }
      });

    $urlRouterProvider.otherwise("/business-focus");
  })
  .component('app', AppComponent);
