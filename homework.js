/**
 * Created by Julia on 04.01.2016.
 */
//Повторять цикл, пока ввод неверен:

var i ;
while (i <= 100 && i != null){
    i = prompt ("введите число больше 100");
}

//Вывести простые числа. Создайте код, который выводит все простые числа из интервала от 2 до 10

next: for(var a = 2; a < 10; a++){
    for (var b = 2; b < a; b++){
        if(a%b == 0) continue next;
    }
    console.log(a);
}


//сортировка массива по возрастанию
var c = [1,4,45,2];//например

function sort(c) {
    for (var z = 0; z < c.length -1; z++) {
        for(var j= 0; j < c.length -1 - z; j++)
            if (c[j + 1] < c[j]) {
                var k = c[j + 1];
                c[j + 1] = c[j];
                c[j] = k;

            }
    }
    console.log('var c = [' + c + ']');
}
sort(c);

//перезапись массива наоборот [1, 4, 5, 8, 3, 7] -> [7,  3, 8, 5, 4, 1]

var d = [1,4,5,8,3,7];
d.reverse();
console.log(d);
