import React, { useState } from 'react'
import StateComponent from './StateComponent';
import StateCreator from './StateCreator';

export default function StateMachine({states}) {

    const [statesInternal, setStates] = useState(states);

    const stateSize = 50;

    const createState = (stateName) => {
        setStates([...statesInternal, {name: stateName}]);
    }

  return (
    <>
        <StateCreator createState={createState}></StateCreator>
        <svg width={(stateSize * statesInternal.length) * 4}>
        {statesInternal.map((state, index) => {
            return <>
                <StateComponent stateSize={50} state={state} statePosition={index} isLast={index === statesInternal.length - 1}></StateComponent>
            </>
        })}
        </svg>
    </>
  )
}
