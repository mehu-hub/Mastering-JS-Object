const numbers = [12, 45, 3, 44, 23, 32]

for(const number of numbers){
    // console.log(number)
}


const bottle = {
    color: 'Yellow',
    price: 500,
    isClean: true,
    capacity: '5ltr'
};

const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key, bottle[key])
} 

// "for of" can not be used of object
// for(const key of bottle){
//     // console.log(key)
// }

//-----------------------------------

// for in loop 
for(const key in bottle){
    console.log(key, bottle[key])
}

