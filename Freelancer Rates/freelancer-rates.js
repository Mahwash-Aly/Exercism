// @ts-check


export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget/ratePerHour)/8);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  return Math.ceil((numDays%22)*dayRate(ratePerHour) + Math.floor(numDays/22)*8*22*(ratePerHour-(ratePerHour*discount)));
}
// 