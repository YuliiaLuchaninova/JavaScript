/**
 * Created by Julia on 03.02.2016.
 */
//Первый объект
var user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;

//Определите, пуст ли объект
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

//Сумма свойств

function sum(obj) {
    var sum = 0;
    for (var key in obj) {
        sum += obj[key];
    }
    return sum;
}

//Свойство с наибольшим значением
function findMaxSalary(obj) {
    var salary = 0;
    var name;
    for (var key in obj) {
        if (obj[key] > salary) {
            salary = obj[key];
            name = key.toString();
        }
    }
    if(name){
        return name;
    }
    else {
        return 'нет сотрудников';
    }
}

//Умножьте численные свойства на 2
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}