import { useState } from 'react';

export default function ExampleControlledComponentsCheckboxes() {
  // 1. Create state variable
  const [lightbulbOn, setLightbulbOn] = useState(false);

  return (
    <>
      <h1>ExampleControlledComponentsCheckboxes</h1>
      <div>Lightbulb is {lightbulbOn ? 'ON' : 'OFF'}</div>

      <input
        type="checkbox"
        // 2. Connect the state variable to the Controlled Components
        checked={lightbulbOn}
        onChange={(event) => {
          // 3. Update the state variable when user makes change
          setLightbulbOn(event.currentTarget.checked);

          // // Another way, ignoring the event.currentTarget.checked
          // setLightbulbOn(!lightbulbOn);
          // console.log('new value (stale)', lightbulbOn);

          // // A third way, using the callback function - in case you need the current value
          // setLightbulbOn((previousLightbulbOn) => {
          //   console.log(
          //     'value after first setLightbulbOn',
          //     previousLightbulbOn,
          //   );
          //   return previousLightbulbOn;
          // });

          // console.log('new value 2 (stale)', lightbulbOn);
        }}
      />
    </>
  );
}
