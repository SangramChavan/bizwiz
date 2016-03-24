import _ from 'lodash';
import template from './summary.detail.html';

import './summary.detail.scss';

class SummaryDetailController {
  constructor(Storage, $scope, Team, ScaleMeUp, Month2Year) {
    'ngInject';
    this.Storage = Storage;
    this.Team = Team;
    this.ScaleMeUp = ScaleMeUp;
    this.Month2Year = Month2Year;

    this.$scope = $scope;
    this.adjusts = {};

    this.drawSummaryChart();

    $scope.$watch(() => this.Storage.data, () => this.drawSummaryChart(), true);
  }

  getChartData() {
    const allMarketingEmployees = this.Storage.data.pilot.employeeList.filter(employee => employee.roleType === 'Marketing');

    const monthScaleStart = this.Storage.data.timeline.mvp + this.Storage.data.timeline.pilot;
    const seedUsers = 500;
    const pricing = this.Storage.data.marketingStepTwo.arpu;
    const growth = this.Storage.data.marketingStepTwo.arpu;
    const churn = this.Storage.data.marketingStepTwo.monthlyChurn;
    const virality = this.Storage.data.marketingStepTwo.viralityFactor / 100;
    const hr = _.sum(allMarketingEmployees.map(employee => employee.initialSalary));
    const budget = this.Storage.data.marketingStepThree.monthlyBudget;
    const ppcPercent = this.Storage.data.marketingStepThree.ppcContent / 100;
    const semPercent = this.Storage.data.marketingStepThree.semSeo / 100;
    const prPercent = this.Storage.data.marketingStepThree.pr / 100;
    const eventsPercent = this.Storage.data.marketingStepThree.eventsAndShows / 100;

    const scaleMeUp = this.ScaleMeUp.calculate(monthScaleStart, seedUsers, pricing, growth, churn, virality, hr, budget, ppcPercent, semPercent, prPercent, eventsPercent);

    const founders = this.Storage.options.roleTypes.map(roleType => {
      return this.Storage.data.mvp.founderList.filter(founder => founder.roleType === roleType).length;
    });
    const foundersBaseSalary = _.get(this.Storage.data.mvp, 'founderList[0].initialSalary', 2000);
    const pilotHeadcount = {
      juniors: this.Storage.options.roleTypes.map(roleType => {
        return this.Storage.data.pilot.employeeList.filter(employee => employee.roleType === roleType && employee.level === 'Junior').length;
      }),
      seniors: this.Storage.options.roleTypes.map(roleType => {
        return this.Storage.data.pilot.employeeList.filter(employee => employee.roleType === roleType && employee.level === 'Senior').length;
      })
    };
    const year5Headcount = { // TODO
      juniors: [this.Storage.data.growth.juniorRnD, this.Storage.data.growth.juniorMS, this.Storage.data.growth.juniorGA],
      seniors: [this.Storage.data.growth.seniorRnD, this.Storage.data.growth.seniorMS, this.Storage.data.growth.seniorGA]
    };
    const salariesFactor = this.Storage.data.summary.adjustSalaries;

    const team = this.Team.calculate(founders, foundersBaseSalary, pilotHeadcount, year5Headcount, monthScaleStart, salariesFactor, budget);

    const profit = scaleMeUp.Revenue.map((revenue, index) => revenue - team.expenses[index]);

    return {
      scaleMeUp: scaleMeUp,
      team: team,
      profit: profit
    };
  }

  drawSummaryChart() {
    const data = this.getChartData();

    $('.summary-pnl-chart').highcharts({
      chart: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']
      },
      yAxis: {
        title: {
          text: 'Amount (in M$)'
        }
      },
      plotOptions: {
        spline: {
          animation: false
        },
        column: {
          animation: false
        }
      },
      series: [
        {
          type: 'column',
          name: 'Expenses',
          data: this.Month2Year.convert(data.team.expenses).map(item => Number((item / 1e6).toFixed(2)))
        }, {
          type: 'column',
          name: 'Revenue',
          data: this.Month2Year.convert(data.scaleMeUp.Revenue).map(item => Number((item / 1e6).toFixed(2)))
        }, {
          type: 'spline',
          name: 'Profit',
          data: this.Month2Year.convert(data.profit).map(item => Number((item / 1e6).toFixed(2))),
          marker: {
            lineWidth: 2,
            lineColor: '#eee',
            fillColor: 'white'
          }
        }
      ]
    });
  }
}

export default {
  template,
  controller: SummaryDetailController,
  bindings: {}
};
