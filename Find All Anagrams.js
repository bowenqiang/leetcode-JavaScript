/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var result = [], lenS = s.length, lenP = p.length;
    if (lenP < lenP) {
        return result;
    }   
    var map = {};
    for (var i = 0; i < lenP; ++i) {
        if (!map[p[i]]) {
            map[p[i]] = 1;
        } else {
            map[p[i]]++;
        }
    }
    var left = 0, right = 0, difference = lenP;
    while (right < lenS) {
        if ((right - left) <= lenP) {
            if (s[right] in map) {
                difference--;
                map[s[right]]--;
            }
            right++;
        }
        if ((right - left) > lenP) {
            left++;
            if (s[left - 1] in map) {
                difference++;
                map[s[left - 1]]++;
            }
        }
        if (!difference) {
            var flag = true;
            var elem;
            for (elem in map) {
                if (map[elem] !== 0) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                result.push(left);
            }
        }
    }
    return result;
};