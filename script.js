const btn = document.getElementById('btn');
const selected = document.getElementById('select');
const flag1 = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');
const flag3 = document.getElementById('flag3');
// let arr = [];

// let xhr = new XMLHttpRequest();
// xhr.onload = function() {
//     arr = JSON.parse(xhr.responseText);
// }
// xhr.onerror = function() {
//     console.error('Error occurred.');
// }
// xhr.open('GET', 'map.json');
// xhr.send();

let removeDuplicates = (myArr, prop) =>
    myArr.filter((obj, pos, arr) =>
        arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);

arr = removeDuplicates(arr, 'country');
arr.sort((a,b)=>(a.country>b.country)?1:((b.country>a.country)?-1:0)); 
console.log(arr);

window.onload = function() {
    for (const elem of arr) {
        let select = document.getElementById('select');
        let option = document.createElement('option');
        option.text = elem.country;
        select.add(option);
    }
};

function opFlag(opt) {
    for (let i = 0; i < arr.length; i++)
        if (opt[i].text === opt.value) {
            console.log(`%c${opt[i].text}`, 'color: blue; font-size: 13px');
            flag1.style.backgroundColor = arr[i].flag[0];
            flag2.style.backgroundColor = arr[i].flag[1];
            flag3.style.backgroundColor = arr[i].flag[2];
            break;
        }
}

btn.addEventListener('click', () => opFlag(selected));
