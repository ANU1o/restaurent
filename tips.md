# Tips to know

### #1

To place footer at bottom of page conveniently, turn the entire page's display mode to flex such as

    	<div "d-flex flex-column min-vh-100"></div>

After this, add class `mt-auto` within footer container so that it will always stays bottom.

Since the entire content is in flex layout, while adding component to page make sure it's parent container has `my-5` which will prevent attachment to header and footer.

### #2

`fetch` JS uses to get JSON data from APIs and converts JSON data to JS manually

#### `axios`

React Library that automatically processes API data to usable format

> **Note:** To use `axios` in react project, first install package using
>
>     	npm i axios

##### Method in `axios`

- post
- get
- put
- patch
- delete

`async` & `await`

These ajax function allows to increase efficiency of using asynchronous data

### Access URL router params

`useParams` - hook

### Destructuring

Example

    	user = {name:"anu,age:23,place:"kochi"}

- Without Destructuring

      var name=user.name
      var age=user.age
      var place=user.place

- With Destructuring

      var {name, age, place} = user


