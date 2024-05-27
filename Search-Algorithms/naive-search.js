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

    console.log(tempStr, subString, i);
    return tempStr === subString ? true : -1;
}
const result = naiveSearch('hello', 'llo');
console.log(result);
