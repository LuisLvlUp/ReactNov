import React from 'react'

export const Split = ({ left, right }) => {
    return (
        <div className='row mt-5'>
            <div className='col-6'>
                {left}
            </div>
            <div className='col-6'>
                {right}
            </div>
        </div>
    )
}
