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
        <input type="text" onChange={(e) => setStateName(e.target.value)} />
        <button onClick={clickAddState}>Add State</button>
    </>
  )
}
