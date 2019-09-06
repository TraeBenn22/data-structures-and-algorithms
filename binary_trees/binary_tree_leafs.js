'use strict';

class Bnodes {
    constructor() {
 this.value = null;
this.left = null;
this.right = null;
}
}

class Btree {
    constructor() {
        this.root = null;
    }
}


function printLeafValues(node) {
    if(!node) {
        return;
    }
    if(!node.left && !node.right) {
        console.log(node.value);
    }
    if(node.left) {
        printLeafValues(node.left);
    }
    if(node.right) {
        printLeafValues(node.right);
    }
}


function lengthBetweenNodes(node, child, newArray) {
    if(node.value == child)  {
        return newArray;
    }  if(node.left) {
        newArray.push(node.value);
        lengthBetweenNodes(node.left, child, newArray)
    } if(node.right) {
        newArray.push(node.value)
        lengthBetweenNodes(node.right, child, newArray)
    }
};


function findPathLength(node, parent, child) {
    let newArray = [];
    if(node.value == parent) {
      lengthBetweenNodes(node, child, newArray)
    }  if(node.left) {
        newArray.push(node.value);
        findPathLength(node.left, parent, newArray)
    } if(node.right) {
        newArray.push(node.value)
        findPathLength(node.right, parent, newArray)
    }
};

module.exports = {printLeafValues, Bnodes, Btree, lengthBetweenNodes, findPathLength};