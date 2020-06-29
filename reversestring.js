//Objective is to reverse a string in place.

let string = 'Hello'


//O(n) solution that uses a front and back pointer.

let left = 0
let right = string.length - 1

while (left < right) {
    let temp = string[left]
    string[left++] = string[right]
    string[right--] = temp
}

return string