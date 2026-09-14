// 2. Accept props in the function parameter
export default function ExampleProps(props) {
  return (
    <div>
      <h1>ExampleProps</h1>
      <div
        style={{
          border: 'solid 2px #ff3367',
          borderRadius: '3px',
          padding: '1em',
          display: 'inline-block',
        }}
      >
        {/* 3. Use the prop in the JSX */}
        <div>Name: {props.name} </div>
        <div>Age: {props.age} </div>
        <div>
          Games: {props.games[0]} and {props.games[1]}
        </div>
      </div>
    </div>
  );
}
