import _ from 'lodash';
import dataJSON from '../data/data.json';

export default class Storage {
  constructor() {
    'ngInject';
    this.data = {
      businessFocus: {
        type: 'Mobile App'
      },
      timeline: {
        mvp: 4,
        pilot: 6
      },
      mvp: {
        founderList: [
          {
            fullName: 'Yossi',
            title: 'CEO',
            roleType: 'General & Administration',
            initialSalary: 2000,
            percentInCompany: 50
          },
          {
            fullName: 'Odelia',
            title: 'Design',
            roleType: 'Research & Development',
            initialSalary: 2000,
            percentInCompany: 50
          }
        ]
      },
      pilot: {
        employeeList: [
          {
            roleType: 'Research & Development',
            level: 'Senior'
          },
          {
            roleType: 'Marketing & Sales',
            level: 'Junior'
          }
        ]
      },
      growth: {
        juniorGA: 2,
        seniorGA: 2,
        juniorRnD: 15,
        seniorRnD: 10,
        juniorMS: 5,
        seniorMS: 5
      },
      marketingStepOne: {
        businessModel: 'Freemium'
      },
      marketingStepTwo: {
        arpu: 1.3,
        viralityFactor: 25,
        monthlyChurn: 0.05
      },
      marketingStepThree: {
        monthlyBudget: 30000,
        semSeo: 25,
        ppcContent: 25,
        eventsAndShows: 20,
        pr: 30
      },
      summary: {
        adjustBudget: 0,
        adjustDevelopmentTime: 0,
        adjustSalaries: 0
      }
    };
    this.options = JSON.parse(dataJSON);
  }
}
