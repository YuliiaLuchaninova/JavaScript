/**
 * Created by Julia on 16.02.2016.
 */
function unique(arr) {
    var newArray = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        if (!contains(arr[i],arr)) {
            newArray.length ++;
            newArray[newArray.length - 1] = arr[i];
        }
    }
    console.log(newArray);
}

function contains (value,arr) {
    var counter = 0;
    for (var j = 0; j <= arr.length - 1; j++) {
        if (arr[j] === value){
            counter ++;
        }
    }
    if(counter > 1){
        return true;
    }
    else {
        return false;
    }
}
var arr = [1,2,2,3,10,11,11,12,4,5,6,7,6,5,0];
unique(arr);

