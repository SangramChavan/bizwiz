var JobTitle = ['Research & Development', 'Marketing & Sales', 'General & Administration'];
var JobStatus = ['Junior', 'Senior'];
var SalarySenior = [10000, 8000, 10000];
var SalaryJunior = [6500, 3000, 6500];

function getSalary(jobTitle, jobStatus) {
  try {
    var ind = JobTitle.indexOf(jobTitle);

    if (jobStatus == 'Junior') {
      return SalaryJunior[ind];
    }
    else {
      return SalarySenior[ind];
    }
  }
  catch (err) {
    console.log(err.message);
    return 0;
  }
}

// founders: array of numbers - for each type gives the headcount
// pilotHeadCount: array of { juniors, seniors } from start to monthScaleStart, for each type gives headcount
// year5Headcount: array of { juniors, seniors } from monthScaleStart till 5 years, linearly growing
function team(founders, foundersBaseSalary, pilotHeadcount, year5Headcount, monthScaleStart, salariesFactor, budget) {
  var headcount = new Array(60);
  var salaries = new Array(60);
  var expenses = new Array(60);

  var foundersCount = 0;
  for (var i=0; i < founders.length; ++i) { foundersCount += founders[i]; }

  var pilotTeam = 0;
  for (var i=0; i < founders.length; ++i) {
    pilotTeam += founders[i];
  }

  var pilotSalaries = 0;
  for (var i=0; i < pilotHeadcount.juniors.length; ++i) {
    pilotTeam += pilotHeadcount.juniors[i];
    pilotTeam += pilotHeadcount.seniors[i];

    pilotSalaries += pilotHeadcount.juniors[i]*getSalary(JobTitle[i], JobStatus[0]);
    pilotSalaries += pilotHeadcount.seniors[i]*getSalary(JobTitle[i], JobStatus[1]);
  }

  for (var i=0; i < monthScaleStart; ++i) {
    headcount[i] = pilotTeam;
    salaries[i] = pilotSalaries + foundersCount * foundersBaseSalary;
  }

  for (var i=monthScaleStart; i < 60; ++i) {
    headcount[i] = pilotTeam;
    salaries[i] = 0;

    for (var j=0; j < pilotHeadcount.juniors.length; ++j) {
      var start = pilotHeadcount.juniors[j];
      var goal = year5Headcount.juniors[j];
      var change = Math.round((goal-start)* (i-monthScaleStart) / (60-monthScaleStart));

      headcount[i] = headcount[i] + change;
      salaries[i] = salaries[i] + change*getSalary(JobTitle[j], JobStatus[0]) + foundersCount * foundersBaseSalary;
    }

    for (var j=0; j < pilotHeadcount.seniors.length; ++j) {
      var start = pilotHeadcount.seniors[j];
      var goal = year5Headcount.seniors[j];
      var change = Math.round((goal-start)* (i-monthScaleStart) / (60-monthScaleStart));

      headcount[i] = headcount[i] + change;
      salaries[i] = salaries[i] + change*getSalary(JobTitle[j], JobStatus[0]);
    }

    for (var j=0; j < founders.length; ++j) {
      // add the growth period salaries of founders - expert + 25%
      salaries[i] = salaries[i] + founders[j]*getSalary(JobTitle[j], JobStatus[1])*1.25;
    }
  }

  for (var i=0; i < 60; ++i) {
    salaries[i] *= (100+salariesFactor)/100;
  }

  // expenses = salaries + G&A + marketing budget
  var prevHeadCount = 0;
  for (var i=0; i < 60; ++i) {
    expenses[i] = salaries[i]
      + 750*headcount[i]
      + 2000
      + 1500
      + (headcount[i] - prevHeadCount)*750
      + 1500
      + 100*headcount[i]
      + (i >= monthScaleStart ? 5000 : 0)
      + 1000
      + budget; // the marketing budget
  }

  return {
    'expenses': expenses,
    'salaries' : salaries,
    'headcount' : headcount
  };
}

// team([1, 1, 1, 1, 1, 0], 2000,
//   { 'juniors': [1, 2, 1, 0, 0, 0], 'seniors': [0, 1, 1, 0, 1, 0] },
//   { 'juniors': [5, 6, 7, 4, 3, 2], 'seniors': [1, 0, 2, 0, 1, 0] }, 6);

// headcount
// founder - mininal until growth, after that senior+25%
// others - from-to

// G&A
// office + office management $750/person/month
// professional service provicers $2000/month
// travel budget $1500/month
// desk+PC $750/new person
// misc, $1500/month
// IT (communication) $100/person
// branch $10K
// $5000/month - advisory board - on growth stage only

// R&D - licensing, software, manufacturing, etc. $1000/month

export default () => {
  return {
    calculate: team
  };
};
