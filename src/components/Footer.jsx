import React from 'react'

function Footer(props) {
    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>ACOD Project</h1>

            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer >
    )
}

export default Footer