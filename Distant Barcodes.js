/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    var stack = {};
    var len = barcodes.length;
    for (var i = 0; i < len; i++) {
        if(!stack[barcodes[i]]) {
            stack[barcodes[i]] = 1;
        } else {
            stack[barcodes[i]]++;
        }
    }
    var arr = [];
    for (var prop in stack) {
        arr.push({
            val: prop,
            count: stack[prop]
        })
    }
    var arrSorted = arr.sort(function(a, b){
        return a.count > b.count ? -1 : 1;
    })
    var result = new Array(len);
    var index = 0;
    var indexArr = 0;
    while(index < len) {
        if(arrSorted[indexArr].count) {
            result[index] = arrSorted[indexArr].val;
            arrSorted[indexArr].count--;
            index += 2;
        } else {
            indexArr++;
        }

    }
    var index = 1;
    while(index < len) {
        if(arrSorted[indexArr].count) {
            result[index] = arrSorted[indexArr].val;
            arrSorted[indexArr].count--;
            index += 2;
        } else {
            indexArr++;
        }
    }
    return result;
};