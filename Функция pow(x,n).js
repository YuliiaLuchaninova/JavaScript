/**
 * Created by Julia on 07.01.2016.
 */
//Решение до рекурсии

function pow(x, n) {
    var z = x;
    if (x <= 0 || n <= 0) {
        return false;
    }
    else {
        for (var i = 2; i <= n; i++) { //от 2х потому что в первой степени число равно само себе, при n=1 цикл досчитает до 2й степени
            z = z * x;
        }
    }
    return z;
}
pow(3, 1);//-> 3

//рекурсия
function pow1(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return x * pow1(x, n - 1);
    } else {
        return x;
    }
}
pow1(2,5);