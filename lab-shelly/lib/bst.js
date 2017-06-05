'use strict';

const BSTNode = module.exports = function(value) {
  this.value = value;
  this.parent = null;
  this.left = null;
  this.right = null;
};

// BSTNode.fromArray = function(arr) {
//
//   let rootMid = Math.floor(arr.length/2);
//   let root = new BSTNode(arr[rootMid]);
//   // console.log('ROOT', root);
//   console.log(root.left);
//   let leftMid = Math.floor(rootMid/2);
//   root.left = new BSTNode(arr[leftMid]);
//
//   let rightMid = Math.floor((arr.length + rootMid)/2);
//   root.right = new BSTNode(arr[rightMid]);
//   // console.log('rootright', root.right);
// };

BSTNode.prototype.appendChild = function(value) {

  if(!this) return;
  if(value === this.value) {
    throw new Error('value must be unique');
  }

  if(value > this.value) {
    if(!this.right) {
      this.right = new BSTNode(value);
      this.right.parent = this;
    } else this.right.appendChild(value);
  } else if(value < this.value) {
    if(!this.left) {
      this.left = new BSTNode(value);
      this.left.parent = this;
    } else this.left.appendChild(value);
  }
  return;
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

BSTNode.prototype.find = function(value) {
  // if(value !== this.value) return null;
  if(value === this.value) return this;
  if(value < this.value) {
    if(!this.left) return null;
    else return this.left.find(value);
  } else if(value > this.value) {
    if(!this.right) return null;
    else return this.right.find(value);
  }
};
