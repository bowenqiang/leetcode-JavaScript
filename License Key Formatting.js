/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var result = '';
    var filteredS = S.split('-').join('').toUpperCase();
    var value = filteredS.length % K;
    for(var i = 0; i < filteredS.length; ++i) {
        result += filteredS[i];
        if ((i === (value - 1) || (i - value + 1) % K === 0) && i !== filteredS.length - 1) {
            result += '-';
        }
    }
    return result;
};