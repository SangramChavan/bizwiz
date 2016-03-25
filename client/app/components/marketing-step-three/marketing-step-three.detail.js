import _ from 'lodash';
import template from './marketing-step-three.detail.html';

import './marketing-step-three.detail.scss';

class MarketingStepThreeDetailController {
  constructor(Storage, $scope) {
    'ngInject';
    this.Storage = Storage;
    this.$scope = $scope;
    this.drawPie();

    $scope.$watch(() => this.Storage.data.marketingStepThree, () => this.drawPie(), true);
  }

  drawPie() {
    const chartKeyNames = {
      semSeo: 'SEM & SEO',
      ppcContent: 'PPC & Content Campaign',
      eventsAndShows: 'Events & Trade shows',
      pr: 'PR'
    };

    const seriesData = Object.keys(this.Storage.data.marketingStepThree)
      .filter(key => !!chartKeyNames[key])
      .map((key, index) => {
        return {
          name: chartKeyNames[key],
          color: this.Storage.chartColors[index],
          y: this.Storage.data.marketingStepThree[key]
        };
      });

    const unallocated = (seriesData.map(data => data.y).reduce((curr, next) => curr - next, 100));
    if (unallocated > 0) {
      seriesData.push({
        name: 'Unallocated',
        y: unallocated
      });
    }

    $('.marketing-step-three-pie').highcharts({
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
            format: '<span style="font-size: 16px;">{point.name}</span><br><span style="font-size: 15px; color: #888">{point.roleType}</span>',
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
  controller: MarketingStepThreeDetailController,
  bindings: {}
};
