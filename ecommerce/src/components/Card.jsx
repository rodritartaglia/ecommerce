import React from 'react'

function Card(props) {

    return (
        <div className={`h-64 w-52 ${props.backgroundColor} rounded-xl text-center text-xl pt-5 text-white font-semibold`}>{props.text}</div>
    )
}

export default Card