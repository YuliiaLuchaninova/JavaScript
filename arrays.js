/**
 * Created by Julia on 03.02.2016.
 */
//Получить последний элемент массива
var a = goods[goods.length - 1];

//Добавить новый элемент в массив
goods[goods.length] = 'Компьютер';

//Создание массива
var styles = ['джаз', 'блюз'];
styles.push('рок-н-ролл');
styles[styles.length - 2] = 'классика';
alert(styles.shift);
styles.unshift('рэп', 'рэгги');

//Получить случайное значение из массива
function getRandom(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    alert(arr[rand]);
}
//Создайте калькулятор для введённых значений
var arr = [];
while (true) {
    var value = prompt('введите значение', '0');
    if (isNaN(value) || value == undefined || value == '') break;
    arr.push(value);
}
var sum = 0;
for (var i = 0; i <= arr.length; i++) {
    sum += arr[i];
}
alert(sum);

//Чему равен элемент массива?

var arr = [1, 2, 3];

var arr2 = arr;
arr2[0] = 5;

alert(arr[0]); //выведет 5
alert(arr2[0]); //выведет  тоже 5, т.к. в строке var arr2 = arr; копировалась ссылка на массив и в итоге arr2[0] = 5; менят тот же массив

//Поиск в массиве
function find(arr, value) {
   return arr.indexOf(value);
}

//Фильтр диапазона
function filterRange(arr, a, b){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
       if(a <= arr[i] && arr[i] <= b){
           newArr.push(arr[i])
       }
    }
    return newArr;
}

//Решето Эратосфена
function findPrime(n) {
    var arr = [];
    var resArr = [];
    var j = 2;
    var p = 2;
    var sum = 0;
    if (n > j) {
        while (j <= n) {
            arr.push(j);
            j++
        }
    }
    while (p * p <= n) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != p) {
                if (arr[i] % p === 0) {
                    delete arr[i];
                }
            }
        }
        p++;
    }
    for (var c = 0; c < arr.length; c++) {
        if (arr[c]) {
            resArr.push(arr[c]);
            sum += arr[c];

        }
    }
    return sum;
}
findPrime(100);//->1060

//Подмассив наибольшей суммы
function findArr(arr) {
    var temp = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        temp += arr[i];
        if(temp < 0){
            temp = 0;
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}