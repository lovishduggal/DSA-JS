// Javascript In-build Sort:

// const array = [2,5,6,4,8,7,9].sort();
// console.log(array);

// by default sort -> it will convert number in unicode and then
// it will call sort on them

// if answer is negative then a will come before b
// if positive then b before a
// if zero then equal
const array = [4, 6, 15, 10].sort((a, b) => {
    console.log(a, b);
    return a - b;
});
console.log(array);
