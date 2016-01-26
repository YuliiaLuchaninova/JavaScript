/**
 * Created by Julia on 19.01.2016.
 */
function myFilter(arr, func) {
    var result = [],
        i = 0;

    if (arr && func && typeof func === 'function') {
        for (; i < arr.length; i++) {
            if (i in arr) {
                var someParam = arr[i];
                if (func(someParam)) {
                    result.push(someParam)
                }
            }
        }
    } else {
        alert("you haven't enter a callback function ");
    }

    return result;
}

