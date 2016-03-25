import _ from 'lodash';
import dataJSON from '../data/data.json';

export default class Storage {
  constructor() {
    'ngInject';
    this.data = {
      businessFocus: {
        type: 'Mobile App',
        companyName: 'Karma by Aleph',
        country: 'Israel',
        state: '',
        city: 'Tel-Aviv'
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
            level: 'Senior',
            initialSalary: 10000
          },
          {
            roleType: 'Marketing & Sales',
            level: 'Junior',
            initialSalary: 3000
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
        monthlyChurn: 5
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

    this.chartColors = ['#00cc00', '#2fbfe0', '#6633ff', '#33597d'];
  }
}
