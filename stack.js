'use strict';

/**********************************************************/
/*               STACK IMPLEMENTATION                     */
/**********************************************************/


class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = _createNode(data);
      return;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = _createNode(data, this.top);
    this.top = node;
  }

  peek() {
    //if the top of the stack does not have anything 
    //then the stack is empty
    //otherwise return what's on the top
    if (this.top === null) {
      return null;
    }

    return this.top.data;
  }

  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  display() {
    // displays the entire contents of the stack
    let node = this.top;
    while (node !== null) {
      console.log(node.data);
      node = node.next;
    }
  }

}

function _createNode(data=null, next=null) {
  return {
    data,
    next
  };
}

exports.Stack = Stack;