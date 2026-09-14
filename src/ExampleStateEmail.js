import { useState } from 'react';

export default function ExampleStateEmail() {
  const [email, setEmail] = useState('');
  return (
    <div>
      <h1>ExampleStateEmail</h1>
      <input
        value={email}
        onChange={(event) => {
          setEmail(event.currentTarget.value);
        }}
      />
      <div
        style={{
          padding: '10px',
          border: '3px solid green',
        }}
      >
        Email: {email}
      </div>
    </div>
  );
}
