"use strict";
function solveEquation(a, b, c) {

  const d = b**2 - 4 * a * c;
  let arr = [];

  if (d > 0) {
    const rootFirst = (-b + Math.sqrt(d))/(2*a);
    const rootSecond = (-b - Math.sqrt(d))/(2*a);
    arr = [rootFirst, rootSecond];
    return arr;
  } else if (d === 0) {
    const x = (-b/(2*a));
    arr = [x];
    return arr;
  } else {
    arr = [];
    return arr;
  }
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const P = percent / 100 / 12;
  const S = amount - contribution;
  const payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  const totalAmount = payment * countMonths;
  
  return Number(totalAmount.toFixed(2));

}