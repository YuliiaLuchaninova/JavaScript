/**
 * Created by Julia on 07.01.2016.
 */
var array = [1, 3, 5, 2, 56, 10, 0];

function sort(array, left, right) {
    var n = array.length;
    var l = left = left || 0;
    var r = right = right || n - 1;
    var j = (left + right) / 2;
    var b = array[j.toFixed()];

    if (n <= 1) return array;

    //разделение
    while (l <= r) {
        while (array[l] < b)
            l++;
        while (array[r] > b)
            r--;
        if (l <= r) {
            var k = array[l];
            array[l] = array[r];
            array[r] = k;
            l++;
            r--;
        }
    }
    console.log('left: ', left);
    console.log('l: ', l);
    console.log('right: ', right);
    console.log('r: ', r);

    //рекурсия

    if (left < r) {
        sort(array, left, r);//запускам ф. с новым r
    }

    if (l < right) {
        sort(array, l, right);//запускаем с новым l
    }
    return array;
}
var result = sort(array);
console.log(result);//[ 0, 1, 2, 3, 5, 10, 56 ]