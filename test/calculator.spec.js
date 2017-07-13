var chai = require('chai');
var should = chai.should();
var calculate = require('../calculator');

describe('calculator', function() {
  it('simple', function() {
    var operand1 = 5;
    var operator = '+';
    var operand2 = 6;

    calculate(operand1, operator, operand2).should.equal(11);
  })

  it('one nested operand', function() {
    var operand1 = [4, '-', 1];
    var operator = '*';
    var operand2 = 5;

    calculate(operand1, operator, operand2).should.equal(15);
  })

  it('two nested operands', function() {
    var operand1 = [5, '*', 3];
    var operator = '/';
    var operand2 = [7, '-', 2];

    calculate(operand1, operator, operand2).should.equal(3)
  })
})
