/**
 * Created by Julia on 18.01.2016.
 */
//фильтр
var arr = [0, 6, 7, 20, 5, 13,,7, 'ngsgndg'];
function myFilter(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if(!arr[i]) {
            arr[i] = null;
        }
        var someParam = arr[i];
        if (func(someParam)) {
            result.push(someParam)
        }
    }
    return result;
}
console.log(myFilter(arr, function (a) {
    return a == 0; //любая функция которая вернет true/false
}));



//map
function myMap(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if(!arr[i]) {
            arr[i] = null;
        }
        var someParam = func(arr[i]);
        result.push(someParam)
    }
    return result;
}
console.log(myMap(arr,function(a){
    return a*2;  //любая функция которая вернет данные
}));



//join
function myJoin(arr, separator) {
    var length = arr.length;
    var result = '';
    var resultLength = result.length;
    if (!separator) {
        separator = ',';
    }
    for (var i = 0; i < length; i++) {
        if(!arr[i]) {
            arr[i] = '0';
        }
            var a = arr[i];
            result = result + separator + a;
        }
    result = result.substring(1,resultLength);
    return result;
}
var arr = [0, 'rfh', 7, 20, , , 5, 13, 7];
console.log(myJoin(arr));