# [Bus Timer](https://www.codewars.com/kata/5736378e3f3dfd5a820000cb/)
write functions that make sure all the passwords are valid, there will be two functions: signIn() and logIn(). signIn() will make a new password. logIn() will make sure that the password given is valid.

## Syntax
> function(`string`)=> `string`
> function(`string`)=> `boolean`

### Parameters

**newpassword**: `string`
**password**: `string`

### Return Value: `string` , `boolean`

- the new password `string`
- check the password is true or false `boolean`


## Examples

This functions are practicaly can be writen using built in methods. The examples i choose will show methods that are for me.


```js
const annie = 'hi there';
const myNewPassword = signIn(annie);
console.log(myNewPassword); // 'hi there'

const annie = 'hello there';
const myLogInPassword = logIn(annie);
console.log(myLogInPassword); // false
```

---
---

## [ooflorent](https://www.codewars.com/users/ooflorent)

```js
const passwords = new Set()

function signIn(password) {
  passwords.add(password)
}

function logIn(password) {
  return passwords.has(password)
}
```

### Strategy

ooflorent created the two solutions with a very short responses.In the first solution he made the new incoming password is going to be the sign-in password. The second solution checks if the user is putting the same password that they used for signing-in for logging-in.  
 
### Implementation

His function first declares a global variable that is available for both functions. this variable has an object value of `new Set ()` which can store unique values of any type.Next he simply used an object build-in method `add` to add the incoming password to get the final value. In the log-in function he Plainly asks if that set of objects has the password that is given as sign-in or not by using an object build-in method `has`.


**function - explicit return**: The function is long with a `return` statement.

**new Set ()**: object lets you store unique values of any type, whether primitive values or object references.

**add**: appends a new element with a specified value to the end of a Set object.

**has**:  returns a boolean indicating whether an element with the specified value exists in a Set object or not.
  
### Possible Refactors

This strategy could also be implemented with these Implementation ...

- an `if else ` statement
- a long `switch case`
- a relatively short Arrow function with implicit return

---

## [deadfish](https://www.codewars.com/users/deadfish)

```js
var storage = [];
var signIn = function(newPassword) {
  storage.push(newPassword);
};
var logIn = function(password) {
  for (var i = 0; i < storage.length; i++) {
    if(storage[i] == password) {
      return true;
    }
  }
  return false;
}
```

### Strategy

deadfish approched the problem with two Comparatively different solutions than ooflorent. First they added the incoming password to be saved as a new password.After that they wrote a solution that checks the every given login passwords substrings with the new password and confirms the correctness of them.

### Implementation

deadfish decleard a global empty array at first.Then he added the incoming new password to the array by using build in push method in the function. In the second function he used a for loop that checks the the global array substring length and if statement that checks the equalization of each substring with a password that is given as a login password.

**for**

**if statement**

**==** converts the variable values to the same type before performing comparison.


### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- a while  statement.
---

## Notes
This was my solution

```js
let input = [];
var signIn = newPassword =>input.push(newPassword);
var logIn = password => input.includes(password);
```
OMG I'm getting to like this higher order functions :laughing: