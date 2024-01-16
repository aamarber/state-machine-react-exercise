import renderer from 'react-test-renderer';
import StateMachine from '../StateMachine/StateMachine';
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const states = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'},
    {name: 'D'},
    {name: 'E'},
];

it('creates the state machine', () => {
    const component = renderer.create(
        <StateMachine states={states}></StateMachine>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    
});

test('allows to create the states', async () => {
    // ARRANGE
    const {container} = render(<StateMachine states={states}></StateMachine>)

    let stateName = container.querySelector('#stateName');

    let stateAdder = container.querySelector('#stateAdder');

    const newStateName = 'F';

    //ACT
    await fireEvent.change(stateName, {target: {value: newStateName}});

    await userEvent.click(stateAdder);

    // ASSERT
    expect(screen.getByText(newStateName)).toBeDefined();
  })
