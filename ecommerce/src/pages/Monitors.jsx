import Navbar from '../components/Navbar'
import axios from "axios"
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function Monitors() {

    const [monitors, setMonitors] = useState([])

    useEffect(() => {

        const fetchMonitors = async () => {
            const { data } = await axios.get("http://localhost:3000/api/monitores")
            setMonitors(data)
        }
        fetchMonitors()

    }, [])


    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap bg-yellw-400 my-10 mx-16 gap-10 justify-center'>
                {monitors.map(item => {
                    return <ProductCard category={item.category} id={item.id} image={item.image} name={item.name} detail={item.detail} price={item.price} offer={item.offer} />
                })}
            </div>
        </div>
    )
}

export default Monitors