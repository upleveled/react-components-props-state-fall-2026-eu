export default function ExamplePropsDestructuring() {
  return (
    <div>
      <h1>ExamplePropsDestructuring</h1>
      <Tweet message="I like React" username="Karl" likes={12} />
      <Tweet message="Please post on Slack" username="Victor" likes={56} />
    </div>
  );
}

function Tweet({ message, username, likes }) {
  return (
    <div
      style={{
        border: '2px solid',
        margin: '8px',
        padding: '0 12px 20px',
        display: 'inline-block',
        minWidth: '200px',
      }}
    >
      <h2>{message}</h2>
      <div>{username}</div>
      <div>{likes}</div>
    </div>
  );
}

// function Tweet(props) {
//   return (
//     <div
//       style={{
//         border: '2px solid',
//         margin: '8px',
//         padding: '0 12px 20px',
//         display: 'inline-block',
//         minWidth: '200px',
//       }}
//     >
//       <h2>{props.message}</h2>
//       <div>{props.username}</div>
//       <div>{props.likes}</div>
//     </div>
//   );
// }
