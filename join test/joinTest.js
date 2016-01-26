/**
 * Created by Julia on 26.01.2016.
 */
var testGenerator = {
    inputArray: [4, 2, 15, [1, 1, 5], 0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null],
    makeExpected: function () {
        return testGenerator.inputArray.join();
    },
    makeTest: function (expected) {
        it('joins and result is : ' + expected, function () {
            assert.equal(myJoin(testGenerator.inputArray), expected)
        })
    },
    makeDescribe: function () {
        testGenerator.makeTest(testGenerator.makeExpected());
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