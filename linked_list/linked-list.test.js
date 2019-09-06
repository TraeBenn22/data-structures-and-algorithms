'use strict';

const list = require('./linked-list');


let testList = new list();

function setupTest() {
    //Add n elements to our testList [1, 2, 3, 4]
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
}

describe('testing functions includes and insert', () => {
   it('should insert a value, and return true that list includes it', () => {
       testList = new list();
       testList.insert(1);
       expect(testList.includes(1)).toBe(true);
   })
});

describe('testing function findNodeWithK', ()  => {
    it('should find the node with a value of k and count its position from the end', () => {
        setupTest();
        expect(testList.findNodePositionFromEnd(1)).toBe(3);

    })
});