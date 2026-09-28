import { useState } from 'react';

const roles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'noRights',
};

export default function ExampleStateDataManipulation() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Kevin',
      jobPosition: 'Developer',
      role: roles.editor,
      pets: [
        {
          name: 'Ronald',
          type: 'lizard',
        },
        {
          name: 'Sabine',
          type: 'cat',
        },
      ],
    },
    {
      id: 2,
      name: 'Kevin 2',
      jobPosition: 'Marketer',
      role: roles.noRights,
      pets: [],
    },
  ]);

  return (
    <>
      <h1>ExampleStateDataManipulation</h1>

      <div>
        {teamMembers.map((teamMember) => {
          return (
            <div key={teamMember.id}>
              {teamMember.name} ({teamMember.jobPosition}, {teamMember.role})
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          const newTeamMembers = [...teamMembers];
          const lastTeamMember = teamMembers.at(-1);
          newTeamMembers.push({
            id: lastTeamMember.id + 1,
            name: 'Kevin 3',
            jobPosition: 'CEO',
            role: roles.noRights,
            pets: [],
          });
          setTeamMembers(newTeamMembers);

          // Alternative (non-mutation version)
          // setTeamMembers([
          //   ...teamMembers,
          //   {
          //     id: lastTeamMember.id + 1,
          //     name: 'Kevin 4',
          //     jobPosition: 'CTO',
          //     role: roles.admin,
          //     pets: [],
          //   },
          // ])
        }}
      >
        Add new team member
      </button>

      <button
        onClick={() => {
          const newTeamMembers = [...teamMembers];

          // Update the name of the second team member (mutation version with .find)
          const secondTeamMember = newTeamMembers.find((teamMember) => {
            return teamMember.id === 2;
          });

          secondTeamMember.name = 'Karl';

          // // Alternative: Update the name of the second team member (mutation version with index)
          // // WARNING: this will possibly fail if array is different order
          // newTeamMembers[1].name = 'Karl';

          // // Alternative (non-mutation version)
          // const newTeamMembers = teamMembers.map((teamMember) => {
          //   // Make a copy of the single team member, because if don't,
          //   // it will update the object in the `teamMember` array
          //   const newTeamMember = {
          //     ...teamMember,
          //   };

          //   if (newTeamMember.id === 2) {
          //     newTeamMember.name = 'Karl';
          //   }

          //   return newTeamMember;
          // });

          setTeamMembers(newTeamMembers);
        }}
      >
        Change 2nd team member name to 'Karl'
      </button>
    </>
  );
}
