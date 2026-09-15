import { useState } from 'react';

export default function ExampleLiftingStateUp() {
  // 2. "Lift up" state to this location (copy it)
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>ExampleLiftingStateUp</h1>
      {/* 3. Pass props to components */}
      <LightBulb isOn={isOn} />
      <LightSwitch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}

// 4. Add `props` parameter to accept props
function LightBulb(props) {
  // 1. Comment out the previous state (creates errors)
  // const [isOn, setIsOn] = useState(false);

  // 5. Use props within component
  return <div>Lightbulb is {props.isOn ? '🌞 ON' : '🌑 OFF'}</div>;
}

// 4. Add `props` parameter to accept props
function LightSwitch(props) {
  // 1. Comment out the previous state (creates errors)
  // const [isOn, setIsOn] = useState(false);

  return (
    // 5. Use props within component
    <button onClick={() => props.setIsOn(!props.isOn)}>Toggle</button>
  );
}
