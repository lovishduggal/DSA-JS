/**
 * The function `findMinNumber` finds the minimum number in an array with a time complexity of O(n).
 * @param array - The `array` parameter is an array of numbers from which we need to find the minimum
 * value.
 * @returns The function `findMinNumber` returns the minimum number from the input array.
 */
function findMinNumber(array) {
    //? It does not depend on n(size of an arr). It will always run only once  -> O(1).
    if (!array.length) {
        throw new Error('array should not be empty');
    }
    //? It does not depend on n(size of an arr). It will always run only once  -> O(1).
    else if (array.length === 1) {
        return array[0];
    } else {
        let currentMin = array[0];
        for (let i = 1; i < array.length; i++) {
            //? It depends on n(size of an arr). The no. of operations depends on size of an arr -> O(n).
            if (array[i] < currentMin) {
                currentMin = array[i];
            }
        }
        return currentMin;
    }
}

//! Now we try to calculate TC of the above algo:
//? We always ignore the small TC values bcz we are always looking for worse case in Big O. So, the TC will be O(n). This O(n) is known as Linear TC.
//? As n(size) increases the no. of operations will grow linearly.
