import { useEffect, useState } from 'react';

function ComponentWithAntipatterns() {
  // Antipattern 1: calling the state variable and setter inconsistent names
  const [user, updateUser] = useState(0);

  // Antipattern 2: calling state setter within useEffect()
  // We will cover later
  useEffect(() => {
    updateUser('Karl');
  });

  return (
    <button
      id="my-button"
      onClick={() => {
        const user = 'Karl';
        // Antipattern 3: getting DOM element with document methods
        document.getElementById('my-button').textContent = `Hi ${user}`;
        // document.querySelector('div').textContent = `Hi ${user}`;
      }}
    >
      Log in
    </button>
  );
}

function ComponentWithoutAntipatterns() {
  const [user, setUser] = useState(0);

  // Antipattern 2: calling state setter within useEffect()
  // // We will cover later
  // useEffect(() => {
  //   updateUser(1);
  // });

  return (
    <button onClick={() => setUser('Karl')}>
      {!user ? 'Log in' : `Hi ${user}`}
    </button>
  );
}

export default function ExampleAntipatterns() {
  return (
    <div>
      <h1>ExampleAntiPatterns</h1>

      <ComponentWithAntipatterns />
      <ComponentWithoutAntipatterns />
    </div>
  );
}
