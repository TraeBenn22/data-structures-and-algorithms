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

module.exports = {printLeafValues, Bnodes, Btree};