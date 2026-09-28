import { useState } from 'react';

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // // Version with an extra state variable
  // const [positiveValues, setPositiveValues] = useState([]);
  //
  // useEffect(() => {
  //   if (count1 > 0 && count2 > 0) {
  //     setPositiveValues([count1, count2]);
  //   } else if (count1 > 0) {
  //     setPositiveValues([count1]);
  //   } else if (count2 > 0) {
  //     setPositiveValues([count2]);
  //   } else {
  //     setPositiveValues([]);
  //   }
  // }, [count1, count2]);

  const positiveValues = [count1, count2].filter((count) => {
    return count > 0;
  });

  return (
    <>
      <h1>ExampleDerivingState</h1>
      <div>
        {count1}
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
      </div>
      <div>
        {count2}
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
      </div>
      Positive values: {positiveValues.join(', ')}
    </>
  );
}
