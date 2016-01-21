var testGenerator = {
    inputArray: [4, 2, 15, [1, 1, 5], 0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null],

    testArray: [2, 4, 15, 16, 0, 'желтый', 'Желтый', 'синий', 'кра', true, false, []],

    comparingLogic: function (a, filterCondition) {
        return a == filterCondition;
    },

    makeTest: function (i, expected) {
        it('filters by ' + typeof i + ' ' + '"' + i + '"' + ' and result is : ' + expected, function () {
            assert.deepEqual(myFilter(testGenerator.inputArray, function (a) {
                return testGenerator.comparingLogic(a, i);
            }), expected)
        })
    },

    singleCompare: function (filterCondition) {
        var expectedAfterNativeFilter = testGenerator.inputArray.filter(function (a) {
            return testGenerator.comparingLogic(a, filterCondition);
        });
        testGenerator.makeTest(filterCondition, expectedAfterNativeFilter);
    },

    multiCompare: function () {
        for (var k = 0; k < testGenerator.testArray.length; k++) {
            this.singleCompare(testGenerator.testArray[k]);
        }
    },

    makeDescribeBlock: function (name, filterCondition, doMultiCompare) {
        describe(name + ' ' + filterCondition, function () {
            if (!doMultiCompare) {
                testGenerator.singleCompare(filterCondition);
            } else {
                testGenerator.multiCompare()
            }
        })
    }
};

testGenerator.makeDescribeBlock('filters by different value', '', 1);
testGenerator.makeDescribeBlock('filters by', null);
testGenerator.makeDescribeBlock('filters by', undefined);
testGenerator.makeDescribeBlock('filters by', 6 + 2 * 4 + 4 + 3 - 1);


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
