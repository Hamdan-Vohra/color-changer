import React from 'react'

const DisplayBox = ({ color, isDarkText }) => {
    return (
        <section className='displayBox' style={{ backgroundColor: color }}>
            <p style={{ color: { isDarkText } ? 'black' : 'white' }}
            >{color ? color : 'Empty Value'}</p>
        </section>
    )
}

export default DisplayBox