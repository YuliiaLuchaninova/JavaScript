/**
 * Created by Julia on 02.02.2016.
 */
function getDecimal(num) {
    var numStr = '' + num;
    var dot = numStr.indexOf('.');
    if(dot == -1){
        return 0;
    }
    return +numStr.slice(dot);
}