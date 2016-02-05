/**
 * Created by Julia on 05.02.2016.
 */
//Добавить класс в строку
var obj = {
    className: 'open menu'
};
function addClass(obj, cls) {
    if (obj.className) {
        var arr = obj.className.split(' ');
    }
    else {
        arr = [];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            return;
        }
    }
    arr.push(cls);
    obj.className = arr.join(' ');
}

//Перевести текст вида border-left-width в borderLeftWidth
function camelize(str) {
    var arr = str.split('-');
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('')
}

//Функция removeClass
function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
        }
    }
    obj.className = arr.join(' ');
}

//Фильтрация массива "на месте"
function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (a <= arr[i] || arr[i] <= b) {
            arr.splice(i, 1);
        }
    }
}

//Сортировать в обратном порядке
function sort(arr) {
    return arr.reverse();
}

//Скопировать и отсортировать массив
var arrSorted = arr.slice().sort();

//Случайный порядок в массиве
function random(a, b) {
    return Math.random() - Math.random();
}
arr.sort(random);

//Сортировка объектов
function sort2(a, b) {
    return a.age - b.age;
}
var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};

var people = [vasya, masha, vovochka];
people.sort(sort2);
//people =[vovochka, masha, vasya];

//Вывести односвязный список

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }

}
//рекурсия
function recPrintLisr(list) {
    console.log(list.value);
    if (list.next) {
        recPrintLisr(list.next);
    }
}
//рекурсия с обратным выводом
function recPrintLisrReverse(list) {
    if (list.next) {
        recPrintLisrReverse(list.next);
    }
    console.log(list.value);
}
//без рекурсии обратный вывод
function printListReverse(list) {
    var arr = [];
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    var start = arr.length - 1;
    for (var i = start; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//Отфильтровать анаграммы
function aclean(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].toLowerCase().split('').sort().join('') == arr[j].toLowerCase().split('').sort().join('')) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

//Оставить уникальные элементы массива
function unique(arr) {
    var obj = {};
    var str;
    for (var i = 0; i < arr.length; i++) {
        str = arr[i];
        obj[str] = 1;
    }
    return Object.keys(obj);
}