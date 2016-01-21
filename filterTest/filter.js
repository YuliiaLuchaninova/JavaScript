/**
 * Created by Julia on 19.01.2016.
 */
function myFilter(arr, func) {
    if (arr && func && typeof func === 'function') {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (i in arr) {
                var someParam = arr[i];
                if (func(someParam)) {
                    result.push(someParam)
                }
            }
        }
    }
    else{
        alert("you haven't enter a callback function ");
    }
        return result;
}


