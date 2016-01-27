var testGenerator = {
    inputArray: [2, 4, null, 0, , 1, '', -6, undefined, [1, 4]],
    multuplyFunc: function (a) {
        return a * 4;
    },
    subtractFunc: function (a) {
        return a - 2;
    },
    denyFunc: function (a) {
        return !a;
    },
    noFunc: function (a) {
    },
    testFuncArr: function () {
        return [testGenerator.multuplyFunc, testGenerator.subtractFunc, testGenerator.denyFunc, testGenerator.noFunc];
    },
    getExpected: function (mapCallback) {
        return testGenerator.inputArray.map(mapCallback)
    },
    makeTest: function (expected, mapCallback) {
        it('changes input array and result is : ' + expected, function () {
            assert.deepEqual(myMap(testGenerator.inputArray, mapCallback), expected)
        })
    },
    makeDescribeBlock: function (name) {
        var arrayFunc = testGenerator.testFuncArr();
        for (var i = 0; i < arrayFunc.length; i++) {
            if (name == arrayFunc[i]) {
                describe('changes input array by ' + arrayFunc[i], function () {
                    testGenerator.makeTest(testGenerator.getExpected(arrayFunc[i]), arrayFunc[i]);
                })
            }
        }
    }
};
testGenerator.makeDescribeBlock(testGenerator.multuplyFunc);
testGenerator.makeDescribeBlock(testGenerator.subtractFunc);
testGenerator.makeDescribeBlock(testGenerator.denyFunc);
testGenerator.makeDescribeBlock(testGenerator.noFunc);



//
//describe('myMap', function () {
//    var arr = [2, 4, null, 0, , 1, '', -6, undefined, [1, 4]];
//    describe('changes input array', function () {
//        function makeTest(expected) {
//            it('changes input array and result is : ' + expected, function () {
//                assert.deepEqual(myMap(arr, testFunc), expected)
//            })
//        }
//
//        var testFunc = function (a) {
//            return a * 4;
//        };
//        var expectedAfterNativeMap = arr.map(testFunc);
//        makeTest(expectedAfterNativeMap);
//    });
//
//    describe('changes input array', function () {
//        function makeTest(expected) {
//            it('changes input array and result is : ' + expected, function () {
//                assert.deepEqual(myMap(arr, testFunc), expected)
//            })
//        }
//
//        var testFunc = function (a) {
//            return a - 2;
//        };
//        var expectedAfterNativeMap = arr.map(testFunc);
//        makeTest(expectedAfterNativeMap);
//    });
//    describe('changes input array', function () {
//        function makeTest(expected) {
//            it('changes input array and result is : ' + expected, function () {
//                assert.deepEqual(myMap(arr, testFunc), expected)
//            })
//        }
//
//        var testFunc = function (a) {
//            return !a;
//        };
//        var expectedAfterNativeMap = arr.map(testFunc);
//        makeTest(expectedAfterNativeMap);
//    });
//    describe('changes input array', function () {
//        function makeTest(expected) {
//            it('changes input array and result is : ' + expected, function () {
//                assert.deepEqual(myMap(arr, testFunc), expected)
//            })
//        }
//
//        var testFunc = function (a) {
//        };
//        var expectedAfterNativeMap = arr.map(testFunc);
//        makeTest(expectedAfterNativeMap);
//    });
//
//});


