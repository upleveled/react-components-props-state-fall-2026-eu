import { useState } from 'react';

export default function ExampleSetStateIsNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  function toggleLight() {
    // console.log('before', isOn); // true
    // setIsOn(!isOn); // After setIsOn, the value isn't immediately changed
    // console.log('after', isOn); // true

    // Recommendation: set variable with the new value
    console.log('before', isOn);
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    console.log('after', newIsOn);
  }

  // Outside of the function will also show the correct value,
  // because this will run after re-render
  console.log('outside of the function', isOn);

  return (
    <div>
      <h1>ExampleSetStateIsNotSynchronous</h1>
      light bulb is {isOn ? 'on 🌝 ' : 'off 🌑 '}
      <button onClick={toggleLight}>toggle</button>
    </div>
  );
}
