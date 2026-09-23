import { useState } from 'react';

export default function ExampleStateArraysOfObjects() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'Maya',
      lastName: 'Chen',
    },
    {
      id: 2,
      firstName: 'Jonas',
      lastName: 'Weber',
    },
    {
      id: 3,
      firstName: 'Sofia',
      lastName: 'Martinez',
    },
  ]);

  return (
    <>
      <h1>ExampleStateArraysOfObjects</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none' }}
      >
        {users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                width: '250px',
                border: '1px solid #aaa',
                borderRadius: 8,
                padding: '10px',
              }}
            >
              {user.firstName} {user.lastName}
            </div>
          );
        })}
        <button
          style={{
            width: '250px',
            border: '1px solid #aaa',
            borderRadius: 8,
            padding: '10px',
          }}
          onClick={() => {
            // // Adding user object to users array
            const lastUser = users.at(-1);

            // // Older way
            // const lastUser = users[users.length - 1];

            // Create a new array to tell React that there is a new value
            setUsers([
              ...users,
              {
                id: lastUser.id + 1,
                firstName: 'Sofia',
                lastName: 'Martinez',
              },
            ]);

            // // Alternative: first copy array, then use .push()
            // const newUsers = [...users]; // alternative: Array.from(users)
            // newUsers.push({
            //   id: lastUser.id + 1,
            //   firstName: 'Sofia',
            //   lastName: 'Martinez',
            // });
            // setUsers(newUsers);

            // // This doesn't work in React, because React doesn't know it's a new value
            // users.push({
            //   id: lastUser.id + 1,
            //   firstName: 'Sofia',
            //   lastName: 'Martinez',
            // });
            // setUsers(users);
          }}
        >
          +
        </button>
      </div>

      <button
        style={{
          width: '250px',
          border: '1px solid #aaa',
          borderRadius: 8,
          padding: '10px',
        }}
        onClick={() => {
          // Create copy to tell React that there is a new value
          const newUsers = [...users];
          newUsers[0].firstName = 'Karl';
          setUsers(newUsers);
        }}
      >
        Change first name to Karl
      </button>

      <button
        style={{
          width: '250px',
          border: '1px solid #aaa',
          borderRadius: 8,
          padding: '10px',
        }}
        onClick={() => {
          // Create copy to tell React that there is a new value
          const newUsers = users.filter((user) => {
            return user.lastName !== 'Martinez';
          });

          setUsers(newUsers);
        }}
      >
        Remove all Martinez users
      </button>
    </>
  );
}
