/**
 * Created by Julia on 27.01.2016.
 */
//интерфейс суммы
var a = +prompt('Введите первое число', '');
var b = +prompt('Введите второе число', '');
alert(a + b);

//Почему 6.35.toFixed(1) == 6.3?
1.35.toFixed(20);//->1.35000000000000008882"  - округляется до 1,35
6.35.toFixed(20); // -> "6.34999999999999964473", т.е отсекается на первом знаке после запятой кот. округл до 3, а не 4

//Сложение цен
alert(0.1 + 0.2 + '$');
var c = 0.1;
var d = 0.2;
alert(+(c + d).toFixed(2) + '$');

//Бесконечный цикл по ошибке
var i = 0;
while (i != 10) {
    i += 0.2;
}
//потому что 0.2 хранится в памяти как "0.20000000000000001110", и при сложении никогда не даст не дробное число

//Как получить дробную часть числа?
function getDecimal(num) {
    return num - Math.floor(num);
}

//Формула Бине

function fib2(n) {
    var sq5 = Math.sqrt(5);
    var a = (1 + sq5) / 2;
    return (Math.round(Math.pow(a,n)/sq5));
}
fib2(77);//->5527939700884755 а должно быть 5527939700884757, изза округления корень из 5.

//Случайное из интервала (0, max)
function random(max){
    return (Math.random()* max);
}
random(56);

//Случайное из интервала (min, max)
function random2(min,max){
    return ( min + Math.random() * (max - min) );
}
random2(10,40);

//Случайное целое от min до max
function random3(min,max){
    return Math.floor(( min + Math.random() * (max - min + 1) ));
}
random3(10,40);