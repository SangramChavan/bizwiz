import _ from 'lodash';
import template from './mvp.detail.html';

import './mvp.detail.scss';

class MvpDetailController {
  constructor(Storage, $scope) {
    'ngInject';
    this.Storage = Storage;
    this.$scope = $scope;
    this.drawFoundersPie();

    $scope.$watch(() => this.Storage.data.mvp.founderList, () => this.drawFoundersPie(), true);
  }

  drawFoundersPie() {
    const seriesData = this.Storage.data.mvp.founderList.map(founder => {
      return {
        name: founder.fullName,
        y: founder.percentInCompany
      };
    });

    seriesData.push({
      name: 'Unallocated',
      y: 100 - (seriesData.map(data => data.y).reduce((curr, next) => curr + next, 0))
    });

    $('.mvp-founders-pie').highcharts({
      chart: {
        type: 'pie',
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        colorByPoint: true,
        data: seriesData
      }]
    });
  }
}

export default {
  template,
  controller: MvpDetailController,
  bindings: {
  }
};
