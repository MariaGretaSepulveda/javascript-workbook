"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // My code here
  let elmt = stacks[startStack].pop();
  stacks[endStack].push(elmt);
}

function isLegal(startStack, endStack) {
  // My code here
  if (stacks[startStack].length == 0 && stacks[endStack].length == 0) {
    return false;
  }
  let elmt1 = stacks[startStack][stacks[startStack].length - 1];
  if (elmt1 > 0 && stacks[endStack].length == 0) {
    return true;
  }
  let elmt2 = stacks[endStack][stacks[endStack].length - 1];
  if (elmt2 > elmt1) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // My code here
  if (stacks.c.length === 4) {
  // Displays that a player has won  
    console.log("You Win!");
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // My code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  // Verifies that all pieces are in order on stack c
  if (checkForWin()) {
    stacks = {
      a: [],
      b: [],
      c: [4, 3, 2, 1]
    };
  }
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}