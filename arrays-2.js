/**
 * Created by Julia on 11.02.2016.
 */
//фильтрация массива "на месте" без методов массивов

function filterRange(arr, a, b) {
    var counter;
    var length = arr.length;
    for (var j = 0; j < length; j++) {
        for (var i = 0; i < length - 1; i++) {
            if (arr[i] < a || arr[i] > b) {//ставим "метку" в виде приведения к строчному типу тому эл.массива, который не соотв.условию
                var k = arr[i]; //и "выдавливаем" его в конец массива пузырьковой сортировкой
                arr[i] = arr[i + 1];
                arr[i + 1] = k.toString();
            }
        }
    }
    for (var c = 0; c < length; c++) {
        if (typeof arr[c] == 'string') {
            counter = c;
            break;
        }
    }
    arr.length = counter; //обрезаем массив, оставляя только нужные элементы
    console.log(arr);
}

var arr = [0, 1, 3, 5, 6, 2, 90, 5, 110, 11, 0, 0];
filterRange(arr, 3, 100);

//Решето Эратосфена
function findPrime(n) {
    var arr = [];
    var j = 2;
    var sum = 0;
    var tempArr = [];
    while (j <= n) {
        arr.push(j);
        j++
    }
    for (var d = 0, p = 2; d < tempArr.length, p * p <= n; d++, p++) {
        if (tempArr[d] != p) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != p && arr[i] % p === 0) {
                    tempArr.push(arr[i]); //создаю временный массив удаленных элементов, чтобы их уже не использовать
                    arr.splice(i, 1);
                }
            }
        }
    }
    for (var c = 0; c < arr.length; c++) {
        sum += arr[c];

    }
    console.log(arr, sum);
}
findPrime(100);//->1060

//Сортировать в обратном порядке с помощью существующих методов
function reverseSort(a,b){
    return b-a;
}
arr.sort(reverseSort);

//перевернуть массив руками
function reverseSortManual(arr){
    var length = arr.length, k, i;
    for(i = 0; i < Math.floor(length/2); i++){
        k = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = k;
    }
    return arr;
}
var arr = [1,2,3,4,5,6];
reverseSortManual(arr);

//Добавление элемента в начало списка
function addElementManual(arr, elem1, elem2) {
    var addArr = [];
    for (var i = 1; i < arguments.length; i++) {
        addArr.push(arguments[i]);
    }
    for (var k = 0; k < arr.length; k++) {
        addArr[addArr.length] = arr[k];
    }

    return addArr;
}
var arr = [3, 4, 5, 6];
//addElementManual(arr, 1, 2);
//addElementManual(arr, 1);
addElementManual(arr, 1, 2,2,5);

//добавление элемента в конец списка
function addElementLikePush(arr, elem1,elem2){
    var addArr = [];
    for (var i = 1; i < arguments.length; i++){
        addArr.push(arguments[i]);
    }
    for(var k = 0; k < addArr.length; k++){
        arr[arr.length] = addArr[k];
    }
    return arr;

}
var arr = [3, 4, 5, 6];
addElementLikePush(arr, 1, 2,2,5);

//удаление первого элемента
function deleteFirst(arr){
    for(var i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.length = arr.length -1;
    return arr;
}

//удаление последнего элемента
function deleteLast(arr){
    arr.length = arr.length -1;
    return arr;
}
//Удаление всех элементов списка с данным значением - аналогично /фильтрация массива "на месте" без методов массивов
function deleteFilter(arr, a) {
    var counter;
    var length = arr.length;
    for (var j = 0; j < length; j++) {
        for (var i = 0; i < length - 1; i++) {
            if (arr[i] == a) {//ставим "метку" в виде приведения к строчному типу тому эл.массива, который не соотв.условию
                var k = arr[i]; //и "выдавливаем" его в конец массива пузырьковой сортировкой
                arr[i] = arr[i + 1];
                arr[i + 1] = k.toString();
            }
        }
    }
    for (var c = 0; c < length; c++) {
        if (typeof arr[c] == 'string') {
            counter = c;
            break;
        }
    }
    arr.length = counter; //обрезаем массив, оставляя только нужные элементы
    console.log(arr);
}
var arr = [1,2,4,4,5,6,7,2,3,2];
deleteFilter(arr, 2);

//Определение количества элементов списка
function getNumOfElem(arr){
    var counter = 0;
    for(i in arr){
        counter++;
    }
    return counter;
}