import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <Link className="hover:scale-110 hover:ease-in hover:duration-75 hover:shadow-xl" to={`/${props.category}/${props.id}`}>
            <div className='shadow-lg px-12 py-10 max-w-xs relative'>
                <img src={props.image} alt="" className='w-56 h-48 object-contain ' />
                <img src="oferta.png" alt="" className={props.offer ? "absolute h-10 w-10 top-5 right-12" : "hidden"} />
                <div className='flex place-content-between text-lg font-medium my-2'>
                    <span className=''>{props.name}</span>
                    <span className=''>${props.price}</span>
                </div>
                <p className='text-sm'>{props.detail}</p>
                <div className='relative mt-4'>
                    <span className='text-lg mx-2'>-</span>
                    <span>1</span>
                    <span className='text-lg mx-2'>+</span>
                    <button className='absolute right-0 border-solid border-black border py-2 px-4 rounded-full hover:bg-[#c2c2c2] hover:border-[#c2c2c2] hover:text-white'>Añadir</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard