'use strict';

class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(newValue) {
        let node = new Node;
        node.value = newValue;
        if (this.head != null) {

            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    includes(newValue) {
        let tempNode = this.head;
        while(tempNode.next != null) {
            if (tempNode.value === newValue) {
                return true;

            }
            tempNode = tempNode.next;
        }

        return false;
    }

    _toString() {
        let tempNode = this.head;
       let nodeToString = '';
        while(tempNode.next != null) {
            nodeToString + '' + tempNode.value;
            tempNode = tempNode.next;
        }
        return nodeToString;
    }


}