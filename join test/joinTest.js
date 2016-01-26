/**
 * Created by Julia on 26.01.2016.
 */
var testGenerator = {
    inputArray: [4, 2, 15, [1, 1, 5], 0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null],
    sepArray: ['---', 'hgf', '123', ',03', '', , undefined,0, null, [1,3], x = {a:9, v:0}],
    makeExpected: function (i) {
        return testGenerator.inputArray.join(i);
    },
    makeTest: function (expected,  i) {
        it('joins and result is : ' + expected, function () {
            assert.equal(myJoin(testGenerator.inputArray, i), expected);
        })
    },
    makeDescribe: function () {
        for(var i = 0; i < testGenerator.sepArray.length;i++ ) {
            testGenerator.makeTest(testGenerator.makeExpected(testGenerator.sepArray[i]),testGenerator.sepArray[i]);
        }
    }

};
testGenerator.makeDescribe();

//describe('myJoin', function () {
//    var arr = [4, 2, 15, [1, 1, 5], 0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null];
//    describe('joins', function () {
//        function makeTest(expected) {
//            it('joins and result is : ' + expected, function () {
//                assert.equal(myJoin(arr), expected)
//            })
//        }
//            var expectedAfterNativeJoin = arr.join();
//            makeTest(expectedAfterNativeJoin);
//
//    });
//});