'use strict'

function testVar(){
    var a = 50;
    if(true){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
testVar()

function testLet(){
    let a = 77;
    if(true){
        let a = 66;
        console.log(a);
    }
    console.log(a);
}
testLet()

for(var i = 0; i <= 9; i++){
    console.log(i)
}
console.log(i);

const colors = [];
colors.push('red');
colors.push('green');
 colors = green;
console.log(colors);