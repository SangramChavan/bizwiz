
function calcConvertedCAC(HR, budget, ppcPercent, semPercent, prPercents, eventsPercent, growth) {
  var profile = {};
  profile.ppcCAC = 1.0;
  profile.prCAC = 1.0;
  profile.eventsCAC = 10;
  profile.semCAC = 1.0;
  profile.growthFactor=1;

  var convertedCAC = (1/(1+growth*profile.growthFactor))
    * (
      (ppcPercent * profile.ppcCAC + prPercents * profile.prCAC + eventsPercent * profile.eventsCAC)*(budget/(budget+HR))
      + (HR/(budget+HR)) * profile.semCAC
    );

  return convertedCAC;
};

// calculates and returns [users, newUsersThisMonth]
function nextMonthUsers(users, lastMonthNewUsers, churn, virality, budget, HR, convertedCAC) {
  return [users*(1-churn)+((budget+HR)/convertedCAC)+lastMonthNewUsers*virality, ((budget+HR)/convertedCAC)+lastMonthNewUsers*virality];
};

function calcLTV(pricing, churn) {
  return pricing*(1/(1-churn));
};

// return [convertedCAC, LTV, users, users_new, rev]
// where convertedCAC and LTV (lifetime value) in USD
// the rest is 60 cell arrays
function ScaleMeUp(monthScaleStart, seedUsers, pricing, growth, churn, virality,
                   HR, budget, ppcPercent, semPercent, prPercent, eventsPercent)
{
  // contains the weighted average of the bugdet spending, into converted users
  var convertedCAC = calcConvertedCAC(HR, budget, ppcPercent, semPercent, prPercent, eventsPercent, growth);

  var LTV = calcLTV(pricing, churn);
  var users = new Array(60); 		users.fill(0);
  var users_new = new Array(60); 	users_new.fill(0);
  var rev = new Array(60);		rev.fill(0);

  // var users = []; 		users.lenth = 60; 		users.fill(0);
  // var users_new = [];		users_new.lenth = 60; 	users_new.fill(0);
  // var rev = [];			rev.lenth = 60;			rev.fill(0);

  // first month is the pilot month

  users[monthScaleStart-1] = seedUsers;

  // fill the next 60 months
  for (var i=monthScaleStart; i < 60; ++i) {
    var a = nextMonthUsers(users[i-1], users_new[i-2], churn, virality, budget, HR, convertedCAC+0.01*Math.max(0, 12-(i-monthScaleStart)));
    var usersTotal = a[0];
    var usersNewThisMonth = a[1];

    users[i] = usersTotal;
    users_new[i] = usersNewThisMonth;
    rev[i] = usersTotal*pricing;
  }

  return {
    'convertedCAC': convertedCAC,
    'LTV' : LTV,
    'Users' : users,
    'NewUsers': users_new,
    'Revenue' : rev
  };
}

// ScaleMeUp(6, 100000, 1.0, 1.0, 0.05, 0.1, 10000, 20000, 0.5, 0.2, 0.4, 0.1)

export default () => {
  return {
    calculate: ScaleMeUp
  };
};
