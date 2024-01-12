import renderer from 'react-test-renderer';
import StateMachine from '../StateMachine/StateMachine';

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
