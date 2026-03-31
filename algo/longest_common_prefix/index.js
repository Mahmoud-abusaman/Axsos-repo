/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let j = 0;
    let result = ""/**
 * @param {string[]} strs
 * @return {string}
 */
    var longestCommonPrefix = function (strs) {
        let j = 0;
        let result = ""
        while (strs[0][j]) {
            let flag = true;
            for (let i = 1; i < strs.length; i++) {
                if (j >= strs[i].length || j >= strs[i - 1].length) { flag = false; break; }
                if (strs[i][j] !== strs[i - 1][j]) flag = false;
            }
            if (!flag) break;
            result += strs[0][j]
            j++;
        }
        return result;
    };
    while (strs[0][j]) {
        let flag = true;
        for (let i = 1; i < strs.length; i++) {
            if (j >= strs[i].length || j >= strs[i - 1].length) { flag = false; break; }
            if (strs[i][j] !== strs[i - 1][j]) flag = false;
        }
        if (!flag) break;
        result += strs[0][j]
        j++;
    }
    return result;
};