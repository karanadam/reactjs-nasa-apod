import React from 'react'

function Main(props) {

    const { data } = props

    return (
        <div className='img-container'>
            <img src={data?.hdurl} alt="img" className={'bg-img'} />
        </div>
    )
}

export default Main