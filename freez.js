const bottle = {
    color: 'Yellow',
    price: 500,
    isClean: true,
    capacity: '5ltr'
};

const keys = Object.keys(bottle);
console.log(keys) // get keys

const values = Object.values(bottle);
console.log(values) // get values

const pair = Object.entries(bottle);
console.log(pair)

//---------------------------------  

const twoDimention = [
    ['color', 'Yellow'],
    ['price', 500],
    ['isClean', true],
    ['capacity', '5ltr']
]