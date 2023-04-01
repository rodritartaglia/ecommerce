import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <h3 className='text-3xl font-semibold m-16'>Categorias Top</h3>
            <div className='flex justify-evenly'>
                <Card backgroundColor="bg-green-400" text="Muebles" />
                <Card backgroundColor="bg-orange-300" text="Bolsos" />
                <Card backgroundColor="bg-red-400" text="Libros" />
                <Card backgroundColor="bg-green-600" text="Tecnologia" />
                <Card backgroundColor="bg-pink-200" text="Zapatos" />
                <Card backgroundColor="bg-orange-200" text="Vacaciones" />

            </div>
        </div>
    )
}

export default Home