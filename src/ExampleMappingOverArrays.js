export default function ExampleMappingOverArrays() {
  const technologies = [
    {
      id: 1,
      name: 'TypeScript',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Next.js',
    },
  ];

  return (
    <div>
      <h1>ExampleMappingOverArrays</h1>
      <ul style={{ textAlign: 'left' }}>
        {technologies.map((technology) => {
          return (
            <li
              // Key needs to be unique for mapping in React
              key={`technology-${technology.id}`}
            >
              {technology.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
