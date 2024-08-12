NOTES

# Few Frontend and Backend projects:

## Authentication System
### Problem: Implement a user authentication system that includes user registration, login, and logout functionalities.
Skills Tested: Security, session management, authentication libraries (JWT, OAuth), database design for user data.

To implement a user authentication system with user registration, login, and logout functionalities, we'll build a Django backend to handle authentication and a React.js frontend to interact with the backend. This will involve setting up Django views, URLs, and models for handling authentication, as well as creating React components and making API calls to the backend.

## Weather Dashboard
### Problem: Build a weather dashboard that fetches and displays weather information based on user input.
Skills Tested: API consumption (e.g., OpenWeatherMap), data visualization, frontend frameworks, state management.

OpenWeatherMap API for frontend using react and Django in the backend


## NOTES: 

React and Javascript

Here we use LET INSTEAD OF VAR AND CONST for constant variables which cannot be reassigned,
try online compiler <http//jsbin.com>
```js
let myname = 'pans';
console.log(myname);

const name = 'mans';
console.log(name);
 ```
 SYNATAX OF ARROW FUNCTIONS
 
 ```
 const myfunction = () => {
 ...
 }
 ```
 EXAMPLE
 ```
 const myfunction = (name) => {   /*name is a argument*/
 console.log(name);
}

myfunction('pans');
```
ALTERNATIVE
```
const myfunction = () => {
console.log('PANS');
}

myfunction();


```
  MORE THAN ONE ARGUMENT 
  ```
  const myfunction = (name, age) => {
console.log(name, age);
}

myfunction('pans', 21);


```
MATHEMAICAL OPERATIONS
```
const multiply = (number) =>  {
return number * 2;
}
console.log(multiply(4));

```
SIMPLER FORM OF THE ABOVE
```
const multiply = number =>  number * 2;

console.log(multiply(4));

```

EXPORTS AND IMPORTS

consider person.js
```
const person = {
name : 'pans'
...
}
export default person

```
consider utility.js
```
export const clean() => {
....}
export const baseData=10;

```
consider app.js
```
import person from './person.js'
import {baseData} from './utility.js'
```
