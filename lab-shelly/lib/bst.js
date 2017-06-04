'use strict';

const BSTNode = module.exports = function(value) {
  this.value = value;
  this.parent = null;
  this.left = null;
  this.right = null;
};

BSTNode.prototype.min = function() {
  let current = this;
  if(!current) return;

  while(current.left) {
    current = current.left;
  }
  // console.log(current.value);
  return current.value;
};

BSTNode.prototype.max = function() {
  let current = this;
  if(!current) return;

  while(current.right) {
    current = current.right;
  }
  return current.value;
};
