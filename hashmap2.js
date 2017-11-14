'use strict';

/**********************************************************/
/*   HASH MAP IMPLEMENTATION USING SEPARATE CHAINING      */
/**********************************************************/


const {LinkedList} = require('./linkedlist');

class HashMapCH {
  constructor(initialCapacity=8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) { 
      throw new Error('Key error');
    }
    for (let current = this._slots[index].head; current; current = current.next){
      if(current.value.key === key){
        return current.value.value;
      }
    }
    throw new Error('Key error');
  }

  set(key, value) {

    const index = this._findSlot(key);
    
    if(!this._slots[index]) {
      this._slots[index] = new LinkedList();
      this.length++; 
      this._slots[index].insert(0, {key, value}
      );
    } 
    else {
      for (let current = this._slots[index].head; current; current = current.next){
        if(current.value.key === key){
          current.value.value = value;
          return;
        }
      }
      this._slots[index].insert(0, {key, value});
      this.length++;
    }
  }

  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    throw new Error ('unimplemented');
    //this.length--;
  }

  _findSlot(key) {
    const hash = HashMapCH._hashString(key);
    const start = hash % this._capacity;

    return start % this._capacity;
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.deleted) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i=0; i<string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}

HashMapCH.MAX_LOAD_RATIO = 0.9;
HashMapCH.SIZE_RATIO = 3;

exports.HashMapCH = HashMapCH;