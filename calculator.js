// Refactor a calculator
// Operand: Can be a number or another list of operands and an operator
// Operator: +, -, /, *

// Example:
// (5 * 3) / (7 - 2) = 3


var calculate = function(operand1, operator, operand2) {
  var a = 0;
  var b = 0;

  if(Array.isArray(operand1)) {
    var t = 0;
    var x = operand1[0];
    var y = operand1[2];
    var op = operand1[1];

    if(op === '+') {
      t = x + y;
    } else if(op === '-') {
      t = x - y;
    } else if(op === '/') {
      t = x / y;
    } else {
      t = x * y;
    }
    a = t;
  } else {
    a = operand1;
  }

  if(Array.isArray(operand2)) {
    var t = 0;
    var x = operand2[0];
    var y = operand2[2];
    var op = operand2[1];

    if(op === '+') {
      t = x + y;
    } else if(op === '-') {
      t = x - y;
    } else if(op === '/') {
      t = x / y;
    } else {
      t = x * y;
    }

    b = t;
  } else {
    b = operand2;
  }

  if(operator === '+') {
    return a + b;
  } else if(operator === '-') {
    return a - b;
  } else if(operator === '/') {
    return a / b;
  } else {
    return a * b;
  }
}

module.exports = calculate;
