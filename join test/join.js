/**
 * Created by Julia on 26.01.2016.
 */
function myJoin(arr, separator) {
    var length = arr.length;
    var result = '';
    if(separator === null){
        separator = 'null';
    }
    if (separator == null) {
        separator = ',';
    }
    separator = separator.toString();
    var sepLength = separator.length;
    for (var i = 0; i < length; i++) {
        if(i in arr && arr[i] !== null && arr[i] !== undefined) {
            result = result + separator + arr[i];
        }
        else{
            result = result + separator;
        }
    }
    return result.substring(sepLength, result.length);
}