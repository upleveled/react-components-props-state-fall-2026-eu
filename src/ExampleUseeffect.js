import { useEffect, useState } from 'react';

export default function ExampleUseeffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Karl');

  // // 1. useEffect with no dependency array (this runs on
  // //    page load and every re-rerender - changes to state or props)
  // useEffect(() => {
  //   document.title = `${name} clicked ${count} times`;
  //   console.log('useEffect ran');
  // });

  // // 2. useEffect with empty dependency array (this runs on
  // //    page load)
  // useEffect(
  //   () => {
  //     console.log('useEffect ran');
  //   },
  //   [],
  // );

  // 3. useEffect with non-empty dependency array (this runs on
  //    page load and on any change to the variables in the
  //    dependency array)
  useEffect(
    () => {
      document.title = `${name} clicked ${count} times`;
      console.log('useEffect ran');
    },
    // The "dependency array" determines which variables
    // to watch to re-run the function
    [count, name],
  );

  // // Antipattern 1: Endless loop with updating state
  // useEffect(() => {
  //   // setCount(count + 1);
  // });

  // // Antipattern 2: Endless loop with updating state
  // useEffect(() => {
  //   // setCount(count + 1);
  // }, [count]);

  return (
    <>
      <h1>ExampleUseeffect</h1>

      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <div>
        {name}

        <input
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </div>
    </>
  );
}
