import './App.css';
import ExampleCheckingDataTypesOfPropsWithTypescript from './ExampleCheckingDataTypesOfPropsWithTypescript';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleControlledComponentsCheckboxes from './ExampleControlledComponentsCheckboxes';
import ExampleConvertingClassComponentsToFunctionComponents from './ExampleConvertingClassComponentsToFunctionComponents';
import ExampleFormElements from './ExampleFormElements';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExamplePropsDestructuring from './ExamplePropsDestructuring';
import ExampleSetStateIsNotSynchronous from './ExampleSetStateIsNotSynchronous';
import ExampleStateArraysOfObjects from './ExampleStateArraysOfObjects';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStyling from './ExampleStyling';
import ExampleUseeffect from './ExampleUseeffect';
import ExampleUseeffectDataFetching from './ExampleUseeffectDataFetching';

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
      <ExampleChildrenProps />
      <ExampleCheckingDataTypesOfPropsWithTypescript />
      <ExampleControlledComponentsCheckboxes />
      <ExampleFormElements />
      <ExampleStateArraysOfObjects />
      <ExampleUseeffect />
      <ExampleUseeffectDataFetching />
    </div>
  );
}
