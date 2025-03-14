class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var partAArray = [];
        for (const str of strs) {
            partAArray.push(str.length);
            partAArray.push(",");
        }
        var partB = strs.join("");

        var result = [];
        result.push(strs.length);
        result.push("!");
        result.push(partAArray.join(""));
        result.push(partB);
        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        var lengths = [];
        var substrArray = [];
        while (str[i] != "!") {
            substrArray.push(str[i]);
            i++;
        }
        var stringCount = parseInt(substrArray.join(""));
        while (lengths.length < stringCount) {
            i++;
            substrArray = [];
            while (str[i] != ",") {
                substrArray.push(str[i]);
                i++;
            }
            lengths.push(parseInt(substrArray.join("")));
        }

        var result = [];
        i++;
        let lengthIndex = 0;
        while (lengthIndex < lengths.length) {
            substrArray = [];
            let charIndex = 0;
            while (charIndex < lengths[lengthIndex]) {
                substrArray.push(str[i]);
                i++;
                charIndex++;
            }
            result.push(substrArray.join(""));
            lengthIndex++;
        }
        return result;
    }
}

var solution = new Solution();
var encodedMessage = solution.encode(["neet", "code", "love", "you"]);
console.log(encodedMessage);
console.log(solution.decode(encodedMessage));

// Time-complexity: O(n)
// Space-complexity: O(n)
