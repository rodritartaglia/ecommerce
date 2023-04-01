import Navbar from '../components/Navbar'
import axios from "axios"
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb"
import { MdKeyboardReturn } from "react-icons/md"

function SingleProduct() {

    const { category, id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {

        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/${category}/${id}`)
            setProduct(data)
        }
        fetchProduct()

    }, [])


    return (
        <div>
            <Navbar />
            <div className='flex p-24 '>
                <div className='w-full  flex justify-center items-center'>
                    <img src={product.image} alt="" className='w-3/4 h-3/4 object-contain' />
                </div>
                <div className='flex flex-col ml-20 w-full'>
                    <h2 className='text-4xl font-semibold'>{product.name}</h2>
                    <p className='mt-5'>{product.detail}</p>
                    <span className='text-3xl border-y my-5 py-5'>${product.price}</span>
                    <span className='w-fit border-solid border-black border py-2 px-4 rounded-full'>-1+</span>
                    <div className='mt-5 flex gap-6'>
                        <button className='text-lg text-white font-medium bg-[#6f0291] py-3 px-8 rounded-full  hover:text-white'>Comprar ahora</button>
                        <button className='text-lg text-[#6f0291] font-medium border-solid border-[#6f0291] border py-3 px-8 rounded-full hover:bg-[#c2c2c2] hover:border-[#c2c2c2] hover:text-white'>Añadir al carrito</button>
                    </div>
                    <div className='mt-5 py-10 border-t flex-col flex'>
                        <div className='flex flex-col '>
                            <TbTruckDelivery className='absolute text-lg text-[#6f0291] mt-1' />
                            <span className='font-semibold pl-6 '>Envío gratis</span>
                            <p className='text-sm pl-6 '>Ingrese su código postal para verificar la disponibilidad del envío</p>
                        </div>
                        <div className='mt-5 flex flex-col '>
                            <MdKeyboardReturn className='absolute text-xl text-[#6f0291] mt-1' />
                            <span className='font-semibold pl-6 '>Devolución gratis</span>
                            <p className='text-sm pl-6 '>Tenés 30 días desde que lo recibís para poder devolverlo de forma gratuita!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct