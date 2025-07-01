// check the number is palindrome or not
// 121 - true
// 123 false
// madam - true

function isPalindrome(string) {
    if (string.length === 0) {
        return false;
    }

    let startIndex = 0;
    let endIndex = string.length - 1;
    while (startIndex < endIndex) {
        if (string[startIndex] !== string[endIndex]) {
            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
}

const string = "123444321";
console.log(isPalindrome(string));