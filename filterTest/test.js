/**
 * Created by Julia on 19.01.2016.
 */

describe('myFilter', function () {
    var arr = [4, 2, 15,[1,1,5],0, 4, 15, 15, 15, 15, 'синий', 'сиНий', 'красный', , 'желтый', 'синий', 'Желтый', true, null, false, undefined, '', , null];
    describe('фильтрует по числовому значению', function () {
        function makeTest(i, expected) {
            it('фильтрует по ' + i + ' результат: ' + expected, function () {
                assert.deepEqual(myFilter(arr, function (a) {
                    return a == i;
                }), expected)
            })
        }
        makeTest(2, [2]);
        makeTest(4, [4, 4]);
        makeTest(15, [15, 15, 15, 15, 15]);
        makeTest(16, []);
    });

    describe('фильтрует по строкам', function () {
        function makeTest(str, expected) {
            it('фильтрует по ' + str + ' результат: ' + expected, function () {
                assert.deepEqual(myFilter(arr, function (a) {
                    return a == str;
                }), expected)
            })
        }
        makeTest('желтый', ['желтый']);
        makeTest('Желтый', ['Желтый']);
        makeTest('синий', ['синий', 'синий']);
        makeTest('кра', []);
    });

    describe('фильтрует по нулевому значению', function () {
        function makeTest(i, expected) {
            it('фильтрует по ' + i + ' результат: ' + expected, function () {
                assert.deepEqual(myFilter(arr, function (a) {
                    return a == i;
                }), expected)
            })
        }
        var expectedAfterNativeFilter = arr.filter(function (a) {
            return a == null;
        });
        makeTest(null, expectedAfterNativeFilter);

        expectedAfterNativeFilter = arr.filter(function (a) {//по числу 0
            return a == 0;
        });
        makeTest(0, expectedAfterNativeFilter);
    });

    describe('фильтрует по значению undefined', function () {
        function makeTest(i, expected) {
            it('фильтрует по ' + i + ' результат: ' + expected, function () {
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

    describe('фильтрует по значению true', function () {
        function makeTest(i, expected) {
            it('фильтрует по ' + i + ' результат: ' + expected, function () {
                assert.deepEqual(myFilter(arr, function (a) {
                    return a == i;
                }), expected)
            })
        }
        var expectedAfterNativeFilter = arr.filter(function (a) {
            return a == true;
        });
        makeTest(true, expectedAfterNativeFilter);
    });

    describe('фильтрует по значению false', function () {
        function makeTest(i, expected) {
            it('фильтрует по ' + i + ' результат: ' + expected, function () {
                assert.deepEqual(myFilter(arr, function (a) {
                    return a == i;
                }), expected)
            })
        }
        var expectedAfterNativeFilter = arr.filter(function (a) {
            return a == false;
        });
        makeTest(false, expectedAfterNativeFilter);
    });

    describe('фильтрует по массиву', function () {
        function makeTest(i, expected) {
            it('фильтрует по ' + i + ' результат: ' + expected, function () {//результат - пустой массив
                assert.deepEqual(myFilter(arr, function (a) {
                    return a === i;
                }), expected)
            })
        }
        var expectedAfterNativeFilter = arr.filter(function (a) {
            return a === [1,1,5];
        });
        makeTest([1,1,5], expectedAfterNativeFilter);
    });
});
