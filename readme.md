# Google Optimize Use AB React Hook

PS: Not published to NPM (:

# Usage
The following code goes to the variant into Google Optimize
```js
var myABTest = new CustomEvent('ab_myabtest');
window.dispatchEvent(myABTest);
```

The following code is inside your component
```jsx
const Component = () => {
  const ab = useAB('myabtest');
  return (ab ? <div>yes</div> : <div>no</div>)
};
```

# License
MIT

# Author
Matheus Freire Rabelo
