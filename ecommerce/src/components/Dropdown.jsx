import React from 'react'


function Dropdown(props) {
    const list = props.list

    return (
        <div className='bg-[#f9f9f9] top-16 absolute w-full shadow-lg rounded-b-lg z-10'>
            <ul className='flex flex-col divide-y divide-gray-200'>
                {list.map(item => (
                    <a className="p-2 hover:bg-[#c2c2c2]" href={`/${item}`}>{item}</a>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown