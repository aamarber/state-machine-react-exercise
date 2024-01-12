import {render, screen} from '@testing-library/react'
import StateMachine from '../StateMachine/StateMachine';
import '@testing-library/jest-dom'

const states = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'}
];

test('renders the states', async () => {
  // ARRANGE
  render(<StateMachine states={states}></StateMachine>)

  // ACT
  for (let index = 0; index < states.length; index++) {
    const state = states[index];
    
    expect(screen.getByText(state.name)).toBeDefined();
  }
})


