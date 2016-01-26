/**
 * Created by Julia on 25.01.2016.
 */
function myMap(arr, func) {
    var length = arr.length;
    var result = new Array(length);
    if (arr && func && typeof func === 'function') {
        for (var i = 0; i < length; i++) {
            if (i in arr) {
                result[i] = func(arr[i]);
            }
        }
    }
    return result;
}


