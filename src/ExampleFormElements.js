import { useState } from 'react';

export default function ExampleFormElements() {
  const [username, setUsername] = useState('');

  return (
    <>
      <h1>ExampleFormElements</h1>
      {/*
        <form> is good for:
        1. Pressing "return" submits form
        2. Better accessibility
        3. onSubmit function when form is submitted
      */}
      <form
        onSubmit={(event) => {
          // Prevent the page from reloading for single page apps
          event.preventDefault();

          console.log('onSubmit');

          // Log the current value of the state variable
          // (only works for Controlled Components)
          console.log(username);

          // Read values from `name` props using FormData
          // (also allows for reading values from Uncontrolled Components)
          const formData = new FormData(event.currentTarget);
          console.log(formData.get('username'));
          console.log(formData.get('email'));
        }}
      >
        <input
          // Controlled Component
          value={username}
          onChange={(event) => {
            setUsername(event.currentTarget.value);
          }}

          // This is the name sent via the form. It will also
          // show up in the URL after the ? if we do not prevent
          // the default action.
          name="username"

          // // For autocomplete, you can use
          // autocomplete="username"
        />

        {/* Uncontrolled Component */}
        <input
          // This is the name sent via the form. It will also show up in the URL after the ? if we do not prevent the default action.
          name="email"
        />

        <button>Submit</button>
      </form>
    </>
  );
}
