# [Get Planet Name By ID](https://www.codewars.com/kata/515e188a311df01cba000003/)

As it said in the Title, The function should return the planet's name when its given a specific number.

## Syntax

> getPlanetName(`number`) -> `string`

### Parameters

**ID**: `number`

- A number between 1 and 9 representing each planet.

### Return Value: `string`

Names of the planets.

## Examples

This function's behavior is relatively simple to understand. This exercise didn't include complicated edge cases so there are only 9 possible examples. 


```js
const planet =6;
const planet6 = getPlanetName(planet);
console.log(planet6); // 'Saturn'
```

```js
const p = 3;
const planet3 = getPlanetName(planet);
console.log(planet6); // 'Earth'

```

---
---

## [F11Gamer](https://www.codewars.com/users/F11Gamer)

```js
function getPlanetName(i){
  return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
}
```

### Strategy

This problem has a small number of possible arguments and return values. F11Gamer chose the strategy of listing all possible solutions and using the argument to determine which value to return.

### Implementation

F11Gamer wrote a function that uses array access to get the correct answer.Since the first value's index is `0`, not `1`.  they used subtraction so the count can start at 1. 


*** function - explicit return**: The function is simple and easy to read with a `return` statement.

**Array access by index**: F11Gamer used an index to access the correct answer in the array.


### Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,(see the second example)
- by assigning a specific index number to a specific name...

---

## [erafael](https://www.codewars.com/users/erafael)

```js
function getPlanetName(id){  
  switch(id){
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
    default:
      return "invalid planet id in function getPlanetName()";
  }
}
```

### Strategy

erafael approached this problem with switch case method.they used a strategy of  listing all possible solutions case by case .

### Implementation

**Switch-case**: This function assigns each number to a planet using case.


### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- an arrow function with implicit return

---

## Notes

---