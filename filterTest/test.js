var testGenerator = {
        inputArray: [4, 2, 15, [1, 1, 5], 0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null],
        testArray: [2, 4, 15, 16, 0, 'желтый', 'Желтый', 'синий', 'кра', true, false, [], null, undefined],
        firstFunc: function (a, filterCondition) {
            return a == filterCondition;
        },
        secondFunc: function (a, filterCondition) {
            return a > filterCondition;
        },
        thirdFunc: function (a, filterCondition) {
            return a < filterCondition;
        },
        testFuncArr: function () {
            return [this.firstFunc, this.secondFunc, this.thirdFunc];
        },
        makeTest: function (callBack) {
            for (var k = 0; k < testGenerator.testArray.length; k++) {
                var i = testGenerator.testArray[k];
                var expectedAfterNativeFilter = testGenerator.inputArray.filter(function (a) {
                    return callBack(a, i);
                });
                it('filters by ' + typeof i + ' ' + '"' + i + '"' + ' and result is : ' + expectedAfterNativeFilter, function () {
                    assert.deepEqual(myFilter(testGenerator.inputArray, callBack), expectedAfterNativeFilter)
                })
            }
        },
        makeDescribe: function () {
            var funcArr = testGenerator.testFuncArr();
            for (var k = 0; k < funcArr.length; k++) {
                testGenerator.makeTest(funcArr[k])
            }
        }
};
testGenerator.makeDescribe();

/*describe('myFilter', function () {
 var arr = [4, 2, 15, [1, 1, 5], 0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null];
 describe('filters by different value', function () {
 function makeTest(i, expected) {
 it('filters by ' + typeof i + ' ' + '"' + i + '"' + ' and result is : ' + expected, function () {
 assert.deepEqual(myFilter(arr, function (a) {
 return a == i;
 }), expected)
 })
 }

 var testArray = [2, 4, 15, 16, 0, 'желтый', 'Желтый', 'синий', 'кра', true, false, []];
 for (var k = 0; k < testArray.length; k++) {
 var expectedAfterNativeFilter = arr.filter(function (a) {
 return a == testArray[k];
 });
 makeTest(testArray[k], expectedAfterNativeFilter);
 }
 });

 describe('filters by null', function () {
 function makeTest(i, expected) {
 it('filters by ' + ' ' + '"' + i + '"' + ' and result is : ' + expected, function () {
 assert.deepEqual(myFilter(arr, function (a) {
 return a == i;
 }), expected)
 })
 }

 var expectedAfterNativeFilter = arr.filter(function (a) {
 return a == null;
 });
 makeTest(null, expectedAfterNativeFilter);

 });

 describe('filters by undefined', function () {
 function makeTest(i, expected) {
 it('filters by ' + ' ' + '"' + i + '"' + ' and result is : ' + expected, function () {
 assert.deepEqual(myFilter(arr, function (a) {
 return a == i;
 }), expected)
 })
 }

 var expectedAfterNativeFilter = arr.filter(function (a) {
 return a == undefined;
 });
 makeTest(undefined, expectedAfterNativeFilter);
 });
 });*/
