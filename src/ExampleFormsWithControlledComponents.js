import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  // 1. Create a state variable
  const [username, setUsername] = useState('');
  const [reversedUsername, setReversedUsername] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h1>ExampleFormsWithControlledComponents</h1>

      <form
        onSubmit={(event) => {
          // Prevent the page from reloading for single page apps
          event.preventDefault();

          setReversedUsername(username.split('').reverse().join(''));
        }}
      >
        <input
          // 2. Connect the state variable with the controlled component
          value={username}
          // 3. Update the username when user types in the input
          onChange={(event) => {
            setUsername(event.currentTarget.value);
          }}

          // // This is the name sent via the form, if we do not prevent the default action
          // name="username"

          // // For autocomplete, you can use
          // autocomplete="username"
        />

        <div>{username}</div>

        <button>Reverse username</button>
      </form>

      <div>Reversed username: {reversedUsername}</div>
    </div>
  );
}
