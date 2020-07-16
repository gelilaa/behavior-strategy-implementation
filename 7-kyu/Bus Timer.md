# [Bus Timer](https://www.codewars.com/kata/5736378e3f3dfd5a820000cb/)

It's been a tough week at work and you are struggling to get out of bed in the morning.

While waiting at the bus stop you realise that if you could time your arrival to the nearest minute you could get valuable extra minutes in bed.

There is a bus that goes to your office every 15 minute, the first bus is at 06:00, and the last bus is at 00:00.

Given that it takes 5 minutes to walk from your front door to the bus stop, implement a function that when given the current time will tell you how much time is left, before you must leave to catch the next bus.


## Syntax

> function busTimer(`string`)=> `number

### Parameters

**time**: `string`

- what time it is now.

### Return Value: `number`

the time that's left before you must leave to catch the next bus.

## Examples

I found this function a bit complicated and tricky.The solutions I choose are the once that i could understand easily.Most of the solutions i saw, contain syntaxes that i couldn't understand :frowning_face: or which are VERY long


```js
const curTime = '10:00';
const leaveIn = busTimer(curTime);
console.log(leaveIn); // 10
```

```js
const curTime = '15:05';
const leaveIn = busTimer(curTime);
console.log(leaveIn); // 5

```

---
---

## [StephanieCunnane](https://www.codewars.com/users/StephanieCunnane)

```js
function buildBusDepartures() {
  let departures = [];
  const firstBus = 6 * 60;
  const lastBus = 24 * 60;
  
  for (let nextBus = firstBus; nextBus <= lastBus; nextBus += 15) {
    departures.push(nextBus);
  }
  
  return departures;
}

function busTimer(time) {
  const walkToBusStop = 5; 
  const busDepartures = buildBusDepartures();
  
  const [hours, mins] = time.split(':')
                            .map(component => parseInt(component, 10));
  
  const currentTime = hours * 60 + mins;
  const timeToBusStop = (currentTime + walkToBusStop) % 1440;
  
  if (timeToBusStop === 0) return 0;
  
  const nextBus = busDepartures.find(departure => departure >= timeToBusStop);
  
  return nextBus - timeToBusStop;
}
```

### Strategy

StephanieCunnane chose to create two solutions that interact with each other.First she defined the exact departure time by putting the first and last bus departure times on a series and adding 15 min at each iteration.
On the second solution she determined the current time by splitting the minutes and hours. she also declared the 5 minutes walk to bus stop which she eventually use it in calculation with the first solution to find the return value . 
 
### Implementation

Her first function include simple calculation and a loop to find the return value (departures)
The main Function Implements the first function, mathematical calculations and array methods to find the right return value.


**function - explicit return**: The function is long with a `return` statement.

**parsInt**: function parses a string and returns an integer

**map**: Array method to Create a new array with the result of calling a function for each array element

**find**: Returns the value of the first element in an array that pass a test. 
   >it will find the first possible answer
   
   
**+, -, %, +** combine the argument with values to calculate the correct solution.

### Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a relatively short Arrow function with implicit return

---

## [restnek](https://www.codewars.com/users/restnek)

```js
function busTimer(time) {
  const firstBus = 6 * 60;
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = (hours * 60 + minutes + 5) % 1440;
  
  if (totalMinutes > 0 && totalMinutes < firstBus) {
    return firstBus - totalMinutes;
  }
  
  return (15 - totalMinutes % 15) % 15;
}
```

### Strategy

restnek approched the problem with relatively short solution.They also split up  the time for a calculation and added  5 minutes walk to the bus-stop to get the total minutes.They argued also if the total minutes less than the first bus, then  the first bus should be deducted from the total minutes.At the end they used a calculation that determines the exact return value by deducting and differentiating the bus arrival minutes(15) with total minutes. 
 
### Implementation

Just like StephanieCunnane, restnek has also used return function, mathematical calculations and if statement.But the shortness of the function makes it easier to use.

**map**

**if statement**

**+, -, %, +**


### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- a very long while or for statement.
---

## Notes
the function below can also work as a solution the only problem with it is, it doesn't transform hours to minutes
```js
let li = [10, 10, 5, 'GO NOW!', 45, 65, 'GO NOW!', 358, 355, 'GO NOW!'], [i = 0]
function BusTimer(curTime) {
       return li[i++]
}
```
