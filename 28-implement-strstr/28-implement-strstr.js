/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needleLn = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needleLn) === needle) {
            return i;
        }
    }
    return -1;
    
};