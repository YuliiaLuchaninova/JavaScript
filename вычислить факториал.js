/**
 * Created by Julia on 07.01.2016.
 */
function  factorial(n){
    if (n == 1){
        return n;
    }
    else{
        return n * factorial(n-1);
    }
}
factorial(5);