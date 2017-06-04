'use strict';

const expect = require('chai').expect;
const BSTNode = require('../lib/bst');

describe('testing the BSTNode construtor', function() {
  it('should create a new binary search tree', () => {
    let testBst = new BSTNode(4);
    expect(testBst).to.be.an('object');
    expect(testBst).to.have.property('value');
    expect(testBst).to.have.property('parent');
    expect(testBst).to.have.property('left');
    expect(testBst).to.have.property('right');
    expect(testBst.value).to.equal(4);
  });
});

describe('testing the appendChild method', function() {

  let testBST = new BSTNode(6);
  testBST.appendChild(15);
  testBST.appendChild(11);
  testBST.appendChild(17);
  testBST.appendChild(4);
  testBST.appendChild(5);
  testBST.appendChild(1);

  it('should insert nodes to the binary search tree', () => {
    expect(testBST.left).to.not.be.empty;
    expect(testBST.right).to.not.be.empty;
  });

  it('nodes left of root/parent should be smaller than root/parent', () => {
    expect(testBST.left.value).to.equal(4);
    expect(testBST.left.left.value).to.equal(1);
    expect(testBST.right.left.value).to.equal(11);
  });

  it('nodes right of root/parent should be larger than root/parent', () => {
    expect(testBST.right.value).to.equal(15);
    expect(testBST.right.right.value).to.equal(17);
    expect(testBST.left.right.value).to.equal(5);
  });

  it('should return an error if node is not unique value', function() {
    let testBST = new BSTNode(15);
    let err = 'value must be unique';
    expect(function() {
      testBST.appendChild(15);
    }).to.throw(err);
  });
});
