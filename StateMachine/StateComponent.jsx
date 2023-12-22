import React from 'react'

export default function StateComponent({stateSize, state, statePosition, isLast}) {
  
    const topMargin = 10;

    const calcCircleMargin = (circleIndex) => {
        return 150 * circleIndex;
    }

    const calcCirclePosition = (circleIndex) => {
        //statePosition 0 -> return 50
        //statePosition 1 -> return 150 (margin)
        return (stateSize * (circleIndex + 1)) + calcCircleMargin(circleIndex);
    }

  return (
    <>
        <circle cx={calcCirclePosition(statePosition)} cy={stateSize + topMargin} r={stateSize}></circle>
                <text x={calcCirclePosition(statePosition)} y={stateSize + topMargin}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    >
                        {state.name}
                </text>

                {isLast ? '' 
                : <line className='arrow' 
                        x1={calcCirclePosition(statePosition) + stateSize} 
                        y1={topMargin + stateSize} 
                        x2={calcCirclePosition(statePosition + 1) - stateSize} 
                        y2={topMargin + stateSize}
                    ></line>
                }
    </>
  )
}
