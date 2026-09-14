import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

export default function App() {
  return (
    <div className="App">
      <ExampleComponents />
      <ExampleProps
        // 1. Pass props to component
        name="Kevin"
        age={25}
        games={['Cyberpunk 2077', 'GTA']}
      />
      <ExampleStateCounter />
      <ExampleStateEmail />
    </div>
  );
}
