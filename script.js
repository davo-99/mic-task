"use strict";

const btn = document.getElementById('btn');
const selected = document.getElementById('select');
const flag1 = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');
const flag3 = document.getElementById('flag3');

const removeDuplicates = (myArr, prop) =>
    myArr.filter((obj, pos, arr) =>
        arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);

arr = removeDuplicates(arr, 'country');
arr.sort((a,b)=>(a.country>b.country)?1:((b.country>a.country)?-1:0)); 
console.dir(arr);

(() => {
    for (const elem of arr) {
        const select = document.getElementById('select');
        const option = document.createElement('option');
        option.text = elem.country;
        select.add(option);
    }
})();

function opFlag(opt) {
    for (let i = 0; i < arr.length; i++)
        if (opt[i].text === opt.value) {
            [
                flag1.style.backgroundColor,
                flag2.style.backgroundColor,
                flag3.style.backgroundColor
            ] = arr[i].flag;
            console.log(`%c${opt[i].text}`, 'color: blue; font-size: 13px');
            break;
        }
}

btn.addEventListener('click', () => opFlag(selected));
