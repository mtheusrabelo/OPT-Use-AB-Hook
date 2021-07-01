# Google Optimize Use AB React Hook

# Usage
The following code goes inside your component
```jsx
const Component = () => {
  const ab = useAB('mytest');
  return (ab ? <div>yes</div> : <div>default</div>);
};
```

# License
MIT

# Author
Matheus Freire Rabelo
