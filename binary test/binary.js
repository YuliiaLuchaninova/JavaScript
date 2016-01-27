/**
 * Created by Julia on 27.01.2016.
 */
function binarySearch(arr, n) {
    var l = 0;
    var r = arr.length-1;
    while (l <= r) {
        var k = Math.floor((l + r) / 2);
        if(arr[k] === n){
            return k;
        }
        else if( n < arr[k]){
            r = k-1;
        }
        else{
            l = k+1;
        }
    }
    return -1;
}