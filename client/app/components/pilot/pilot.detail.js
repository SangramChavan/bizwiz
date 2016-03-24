import _ from 'lodash';
import template from './pilot.detail.html';

import './pilot.detail.scss';

class PilotDetailController {
  constructor(Storage, $scope) {
    'ngInject';
    this.Storage = Storage;
    this.$scope = $scope;
    this.drawPie();

    $scope.$watch(() => this.Storage.data.pilot.employeeList, () => this.drawPie(), true);
  }

  drawPie() {
    const allEmployeesList = this.Storage.data.mvp.founderList.concat(this.Storage.data.pilot.employeeList);
    const seriesData = allEmployeesList.map(employee => {
      return {
        name: employee.roleType,
        y: employee.initialSalary
      };
    });

    $('.pilot-pie').highcharts({
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
  controller: PilotDetailController,
  bindings: {
  }
};
