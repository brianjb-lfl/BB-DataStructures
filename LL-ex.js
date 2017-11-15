'use strict';

const { LinkedList } = require ('./linkedlist');

// *** SET UP LL FOR EXERCISES

const myLL = new LinkedList ();
myLL.insert (0, "genesis");
myLL.insert (0, "foreigner");
myLL.insert (0, "elo");
myLL.insert (0, "danzig");
myLL.insert (0, "cheap trick");
myLL.insert (0, "black sabbath");
myLL.insert (0, "acdc");

function dispList (inLL) {
  let i = 0;
  for(let node = inLL.head; node; node = node.next) {
    console.log(`${i++}:  ${node.value}`);
  }
}



// *** FIND MIDDLE OF LL

function findMidLL (inLL) {
  let nodeF;
  let nodeS = 0;

  for (nodeF = inLL.head; nodeF; nodeF = nodeF.next) {
    nodeS += 0.5;
  }

  return (inLL.get(Math.floor(nodeS)));
}

//console.log(findMidLL(myLL));

// *** FIND 3RD LAST ELEMENT

function find3L (inLL) {
  let ctr = 0;
  for(let node = inLL.head; node; node = node.next) {
    ctr++;
  }
  return (inLL.get (ctr - 3));
}

//console.log(find3L (myLL));

// *** REVERSE LINKED LIST

function revLL (inLL) {
  const revList = new LinkedList();
  console.log('list supplied ...')
  dispList(inLL);


  for (let node = inLL.head; node; node = node.next) {
    revList.insert(0, node.value);
  }

  console.log('list returned ...');
  dispList (revList);

}

//revLL(myLL);