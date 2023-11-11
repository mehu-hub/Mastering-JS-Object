// const first = {a: 2};
// const second = {a:2};
// const third = second;
/* if(third === second){
    console.log('Same')
}
else{
    console.log('Different')
} */


// do not use this method to compare object or array
const first = { a: 2, b: 3, d: 5 };
const second = { a: 2, c: 5, b: 3 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

/* if (firstString === secondString) {
    console.log('Same')
}
else {
    console.log('Different')
} */

function compareObject(first, second){
    const firstkeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    if(firstkeys.length === secondkeys.length){
        for(const key of firstkeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false
    }
}

const output = compareObject(first, second)
console.log(output)
