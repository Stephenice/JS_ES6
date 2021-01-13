'use strict';

function creditMask(number){
    const numStr= String(number);
    const numLen = numStr.length;
    const numSlice = numStr.slice(-4);
    const mark = numSlice.padStart(numLen, '*')
    console.log(mark);
}

creditMask(6646646464646)