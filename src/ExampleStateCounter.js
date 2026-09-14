// 1. Import useState from React
import { useState } from 'react';

export default function ExampleStateCounter() {
  // 2. Create the state variable (naming: first element is the name, second is setName)
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>ExampleStateCounter</h1>
      {/* 3. Use state variable on page */}
      {count}

      {/* 4. Update state variable */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
