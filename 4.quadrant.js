const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(‘\n’);

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]); 
const x;
const y;

if(x> 0 && y>0){
    console.log('1');
} else if( x<0 && y>0){
    console.log('2');
}else if(x<0 && y<0){
    console.log('3');
}else if(x>0 && y<0){
    console.log('4');
}