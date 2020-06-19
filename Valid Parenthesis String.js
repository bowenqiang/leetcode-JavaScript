/**
 * @param {string} s
 * @return {boolean}
 */

var helper = function (s, idx, stack) {
    if (stack[0] === ')') {
        return false;
    }
    if (stack.length > (s.length - idx)) {
        return false;
    }
    if (idx === s.length) {
        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    if (s[idx] === '*') {
        var result1 = helper(s, idx + 1, [...stack]); //# as empty
        var last = stack[stack.length - 1];
        var temp = [...stack];
        if (last === '(') {
            temp.pop();
        } else {
            temp.push(')')
        }
        var result2 = helper(s, idx + 1, temp); //# as )

        temp = [...stack];
        temp.push('(')
        var result3 = helper(s, idx + 1, temp); //# as C

        return result1 || result2 || result3;
    } else {
        var last = stack[stack.length - 1];
        if (last === '(' && s[idx] === ')') {
            stack.pop();
        } else {
            stack.push(s[idx]);
        }
        return helper(s, idx + 1, [...stack]);
    }
}

var checkValidString = function (s) {
    return helper(s, 0, []);
};



/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    var len = s.length, stackLeft = [], stackStar = [];
    for (var i = 0; i< len; i++) {
        if (s[i] === "*") {
            stackStar.push(i);
        } else if (s[i] === "(") {
            stackLeft.push(i);
        } else {
            if (!stackLeft.length && !stackStar.length) {
                return false;
            }
            if (stackLeft.length) {
                stackLeft.pop();
            } else {
                stackStar.pop();
            }
        }
    }
    while(stackLeft.length && stackStar.length) {
        if(stackLeft[stackLeft.length - 1] > stackStar[stackStar.length - 1]) {
            return false;
        }
        stackLeft.pop();
        stackStar.pop();
    }
    return !stackLeft.length;
};

