///Проверка на аргумент-undefined

function f(x) {
    if(arguments.length){
        console.log(1);
    }
    else {
        console.log(0);
    }
}

f(undefined); // 1
f(); // 0

//Сумма аргументов
function sum(){
    var sum = 0;
    if(arguments.length){
        for(var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
    }
    return sum;
}
