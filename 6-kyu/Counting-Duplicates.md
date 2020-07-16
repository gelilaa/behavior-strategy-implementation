# [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/)

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


## Syntax
function (`string`)
> function duplicateCount(`string`) `number`

### Parameters

**text**: `string`

- the initial given text.

### Return Value: `number`

how many characters are duplicated.

## Examples

 The examples i chose try to show how to get the desired return value in a very simple way.


```js
const firstTry = '222334455';
const  ans_1 = duplicateCount(firstTry);
console.log(ans_1); // 4
```

```js
const secondTry = 'aabbabccd';
const  ans_2 = duplicateCount(secondTry);
console.log(ans_1); // 3

```

---
---

## [Jacob](https://www.codewars.com/users/jacobb)

```js
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
```

### Strategy

Jacob started by solving the case-insensitiveness.They made a new string from the duplicated strings and count how many of them are duplicated by matching each substrings.


### Implementation

They wrote a function that split's each input string to substrings,counts each length and how many times it is been duplicated by counting the matches with Regular expression .


***function - explicit return**: The function is with a `return` statement.

**.toLowerCase**: Returns the calling string value converted to lowercase

**.split**:  to split a string into an array of substrings

**.sort**: Sorts the elements of an array. 

**.join** Joins all elements of an array into a string.

**.length**:Returns the length of the string(number)
**.match** :Used to match a regular expression against a string.

**/([^])\1+/g** Regular expression : 

      [^] matches any character, including newline characters. 
      +  Match one or more (>=1) item.
      /g identifies all the matches.


### Possible Refactors

This strategy could also be implemented with these Implementation ...

- a  `if else if else` statement

---

## [DmitryTa](https://www.codewars.com/users/DmitryTa)

```js
function duplicateCount(text){

 var count = 0,
  buffer = '',
  sortedStr = text.toLowerCase().split('').sort().join('');

  for(var i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] == sortedStr[i+1]  && sortedStr[i] != buffer) {
      buffer = sortedStr[i];
      count++;
      i++;
    }
  }
  return count;
 }
```

### Strategy

DmitryTa approached the problem with relatively longer solution.They counted every single string by splitting the string input.They also arranged  for each string to be counted if the single input string is Replicated and allow the final result to be incremented depending on their duplication State.

### Implementation

DmitryTa wrote a function that uses a for loop and assigns the given string input length to be counted and if statement that helps to increment the duplicated string amount and count how many of them are there. they also used a split and sort built in String Methods to find the return value.

**for loop**
**if statement**
**+, -, %, +**


### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- A while  statement.
---

## Notes
[Regular expressions](https://flaviocopes.com/javascript-regular-expressions/)

[JavaScript String match()](https://www.javascripttutorial.net/javascript-string-match/)