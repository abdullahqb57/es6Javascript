"use strict"
SET....

let myArray = [11,22,33,44,55];
let mySet = new Set(myArray);

mySet.add(100);
mySet.add({a:1,b:2});
mySet.delete(22)
mySet.clear();
mySet.add('222');
mySet.add(123);

mySet.forEach(function(val){
    console.log(val);
});

console.log(mySet);
var myMap = ['nancy','fancy','abc'];
 myMap = new Map([['q1','polo'],['q2','trello']]);
 myMap.set('a1','food');
 myMap.delete('q1');
console.log(myMap); 