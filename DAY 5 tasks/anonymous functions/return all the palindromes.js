let returnPalindromes = function(arr){
    let palindrome = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().split('').reverse().join('') === arr[i].toLowerCase()) {
            palindrome.push(arr[i]);
        }
    }
    return palindrome;

}
returnPalindromes(['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'])