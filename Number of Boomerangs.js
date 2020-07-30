/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var count = 0;
    for(var i = 0; i < points.length; ++i) {
        var tempMap = new Map();
        for(var j = 0; j < points.length; ++j) {
            var a = points[i][0] - points[j][0];
            var b = points[i][1] - points[j][1];
            var distance = Math.sqrt(a * a + b * b);
            if(tempMap.has(distance)) {
                tempMap.set(distance, tempMap.get(distance) + 1);
            } else {
                tempMap.set(distance, 1);
            }
        }
        for (var [key, value] of tempMap) {
            if (value > 1) {
                count += arrangment(2, value);
            }
        }
    }
    return count;
};

function arrangment(m, n) {
    if (m > n) {
        return 0;
    }
    var a = 1,c = n;
    while(c) {
        a = a * c;
        c--;
    }
    var b = 1;
    c = n - m;
    while(c) {
        b = b * c;
        c--;
    }
    return a / b;
}