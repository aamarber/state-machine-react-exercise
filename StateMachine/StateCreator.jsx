import React, { useState } from 'react'

export default function StateCreator({createState}) {
    const [stateName, setStateName] = useState('');

    const clickAddState = () => {
        if(!stateName){
            return;
        }

        createState(stateName);
    };

  return (
    <>
        <input type="text" id='stateName' onChange={(e) => setStateName(e.target.value)} />
        <button id='stateAdder' onClick={clickAddState}>Add State</button>
    </>
  )
}
