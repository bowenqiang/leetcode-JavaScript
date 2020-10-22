/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var count = 0, length = A.length;
    if (!length) {
        return count;
    }
    var mapA = new Map(), mapB = new Map();
    for(var i = 0; i < length; ++i) {
        for(var j = 0; j < length; ++j) {
            var valueA = A[i] + B[j];
            var valueB = C[i] + D[j];
            if(mapA.has(valueA)) {
                mapA.set(valueA, mapA.get(valueA) + 1);
            } else {
                mapA.set(valueA, 1);
            }
            if(mapB.has(valueB)) {
                mapB.set(valueB, mapB.get(valueB) + 1);
            } else {
                mapB.set(valueB, 1);
            }
        }
    }
    for (let [key, value] of mapA) {
        if(mapB.has(-1 * key)) {
            count+= value * mapB.get(-1 * key);
        }
    }
    return count;
};