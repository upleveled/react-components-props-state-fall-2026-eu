import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleConvertingClassComponentsToFunctionComponents from './ExampleConvertingClassComponentsToFunctionComponents';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExamplePropsDestructuring from './ExamplePropsDestructuring';
import ExampleSetStateIsNotSynchronous from './ExampleSetStateIsNotSynchronous';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStyling from './ExampleStyling';

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
      <ExampleMappingOverArrays />
      <ExampleConditionalRendering />
      <ExamplePropsDestructuring />
      <ExampleSetStateIsNotSynchronous />
      <ExampleFormsWithControlledComponents />
      <ExampleLiftingStateUp />
      <ExampleStyling />
      <ExampleConvertingClassComponentsToFunctionComponents />
    </div>
  );
}
