import React from 'react'
import Navbar from './../components/Navbar';
import axios from "axios"
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function Offers() {

    const [headsets, setHeadsets] = useState([])

    const [keyboards, setKeyboards] = useState([])

    const [monitors, setMonitors] = useState([])

    const [mouses, setMouses] = useState([])

    useEffect(() => {

        const fetchOffersProducts = async () => {
            const { data: auriculares } = await axios.get("http://localhost:3000/api/auriculares")
            setHeadsets(auriculares)
            const { data: teclados } = await axios.get("http://localhost:3000/api/teclados")
            setKeyboards(teclados)
            const { data: monitores } = await axios.get("http://localhost:3000/api/monitores")
            setMonitors(monitores)
            const { data: mouses } = await axios.get("http://localhost:3000/api/mouses")
            setMouses(mouses)
        }
        fetchOffersProducts()

    }, [])

    const allProducts = [headsets, keyboards, monitors, mouses].map(product => product.filter(e => e.offer === true))





    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap bg-yellw-400 my-10 mx-16 gap-10 justify-center'>
                {allProducts.map(item => item.map(item => {
                    return <ProductCard category={item.category} id={item.id} image={item.image} name={item.name} detail={item.detail} price={item.price} offer={item.offer} />
                }))}
            </div>
        </div>
    )
}

export default Offers