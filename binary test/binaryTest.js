/**
 * Created by Julia on 27.01.2016.
 */
var test = {
    inputArray: [1, 3, 5, 6, 8, 9, 11, 15, 17, 25, 90, 109],
    searchElementArray: [1, 3, 4, 6, 0, 2, 109,5,11],
    makeExpectedIndex: function(searchElem){
        return test.inputArray.indexOf(searchElem);
    },
    makeTest: function (expected, i) {
        it('searches ' + i+ ' and result index is : ' + expected, function () {
            assert.equal(binarySearch(test.inputArray, i), expected);
        })
    },
    makeDescribe: function(){
        for(var i = 0; i < test.searchElementArray.length;i++ ) {
            test.makeTest(test.makeExpectedIndex(test.searchElementArray[i]),test.searchElementArray[i]);
        }
    }

};
test.makeDescribe();
