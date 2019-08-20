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
        recursiveAppend(value) {
            if(this.head === null) {
               this.head = value;
            } else {
                this.recursiveAppendHelper();
            }

        }
        recursiveAppendHelper(value, current) {
            if(current.next === null) {
                current.next = new Node(value);
            } else {
                this.recursiveAppend();
            }
        }

        insertBefore(value, newVal) {
            if(this.head === null) {
                this.head = new Node(newVal);
                return true;
            }
            let insertedNode = new Node(newVal);
            let firstNode = this.head;
            if(firstNode.next === null) {
                firstNode.next = new Node(newVal);
            }
            while(firstNode.next.next !== null) {
                if(firstNode.next.value === value) {
                    insertedNode.next = firstNode.next;
                    firstNode.next = insertedNode;
                    return true;
                }
                firstNode = firstNode.next;
            }
                return false;
        }

        insertAfter(value, newVal) {
            if(this.head === null) {
                this.head = new Node(newVal);
                return true;
            }
            let insertedNode = new Node(newVal);
            let firstNode = this.head;

            if(firstNode.next === null) {
                firstNode.next = new Node(newVal);
            }
            while(firstNode.next.next !== null) {
                if(firstNode.value == value) {
                    insertedNode.next = firstNode.next;
                    firstNode.next = insertedNode
                }
                firstNode = firstNode.next;
            }

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