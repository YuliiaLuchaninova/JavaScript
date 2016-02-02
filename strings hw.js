/**
 * Created by Julia on 02.02.2016.
 */
//Сделать первый символ заглавным
function ucFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Проверьте спам
function checkSpam(str){
   var newStr = str.toLowerCase();
    if(newStr.indexOf('viagra') || newStr.indexOf('xxx')) {
        return true;
    }
    return false;
}

//Усечение строки
function truncate(str, maxLength){
    if(str.length > maxLength){
        return str.slice(0,maxLength - 3) + "..."
    }
    else{
        return str;
    }
}
//Выделить число
function extractCurrencyValue(str){
    return + str.slice(1, str.length);
}