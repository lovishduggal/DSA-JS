function naiveSearch(string, subString) {
    let tempStr = '';
    let i;
    for (i = 0; i < string.length; i++) {
        for (let j = 0; j < subString.length; j++) {
            if (!(string[i] === subString[j])) break;
            else {
                i++;
                tempStr += subString[j];
            }
        }
    }
    return tempStr === subString ? true : -1;
}

// The TC would be Quadratic: O(n^2)
const result = naiveSearch('hello duggal', 'ggl');
console.log(result);
