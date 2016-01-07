/**
 * Created by Julia on 07.01.2016.
 */
//С использованием цикла, быстрее рекурсии т.к. имеет всего 1 контекст, в котором меняется i и a

function sumTo(n){
    var a = 0;
    for(var i=1; i <=n; i++){
        a+=i;
    }
    return a;
}
console.log(sumTo(10)); //->55

//через рекурсию, самый долги способ, т.к запоминает х операций (контекстов)

function sumToRecursion(x){
    if(x > 1){
       return x + sumToRecursion(x-1);
    }
    else{
        return x;
    }
}
sumToRecursion(10); //->55

//через сумму арифметической прогрессии, самый быстрый т.к сразу считает по формуле 1 раз

function arProgression(k){
   return k * (1 + k)/2;
}
arProgression(10);