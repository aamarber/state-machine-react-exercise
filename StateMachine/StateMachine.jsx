import React from 'react'

export default function StateMachine({states}) {

    const circleSize = 50;
    let x = 0;
    const topMargin = 10;    

    const calcCircleMargin = (circleIndex) => {
        return 150 * circleIndex;
    }

    const calcCirclePosition = (circleIndex) => {
        //index 0 -> return 50
        //index 1 -> return 150 (margin)
        return (circleSize * (circleIndex + 1)) + calcCircleMargin(circleIndex);
    }

  return (
    <svg>
    {states.map((state, index) => {
        return <>
            <circle cx={calcCirclePosition(index)} cy={circleSize + topMargin} r={circleSize}></circle>
            <text x={calcCirclePosition(index)} y={circleSize + topMargin}
                textAnchor="middle"
                alignmentBaseline="middle"
                >
                    {state.name}
            </text>

            {index === (states.length) - 1 ? '' 
            : <line className='arrow' 
                    x1={calcCirclePosition(index) + circleSize} 
                    y1={topMargin + circleSize} 
                    x2={calcCirclePosition(index + 1) - circleSize} 
                    y2={topMargin + circleSize}
                ></line>
            }
            
        </>
    })}
    </svg>
  )
}
