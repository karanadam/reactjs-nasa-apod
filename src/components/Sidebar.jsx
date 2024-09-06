import React from 'react'

function Sidebar(props) {

    const { handleToggleModal, data } = props

    return (
        <div className='sidebar'>
            <div className='bg-overlay' onClick={handleToggleModal}></div>
            <div className='sidebar-contents'>
                <h2>{data?.title}</h2>
                <div>
                    <p className='description-title'>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Sidebar