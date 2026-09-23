import { useEffect, useState } from 'react';

export default function ExampleUseeffectDataFetching() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // HTTP response
      const response = await fetch('https://dummyjson.com/users');
      // Data from the HTTP response body
      const json = await response.json();
      // Update the state
      setUsers(json.users);
    }

    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  // Show loading message when users is still an empty array
  if (users.length === 0) {
    return (
      <>
        <h1>ExampleUseeffectDataFetching</h1>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <h1>ExampleUseeffectDataFetching</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.firstName} {user.lastName} (age {user.age})
          </div>
        );
      })}
    </>
  );
}
