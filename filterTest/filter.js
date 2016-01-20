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
                    if (typeof someParam === 'undefined') {
                        result.push(someParam);
                        continue;
                    }
                    if (typeof someParam === 'object' && someParam == null) {
                        result.push(someParam);
                        continue;
                    }
                    result.push(someParam)
                }
            }
        }
    }
        return result;
}


