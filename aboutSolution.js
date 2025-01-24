```javascript
// pages/aboutSolution.js
import {getServerSideProps} from 'next';

export default function About({data}) {
  return (
    <div>About Page: {JSON.stringify(data)}</div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
```