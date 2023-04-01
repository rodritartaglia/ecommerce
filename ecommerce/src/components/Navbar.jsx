import { useState } from "react";
import { BsSearch, BsPerson } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";
import Account from "./Account";
import Dropdown from "./Dropdown";


function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className='grid grid-cols-10 text-center h-20 items-center shadow-md'>
            <div className='flex justify-center items-center font-semibold gap-3 col-span-2'>
                <img src="icon.png" alt="icon-image" className='w-12 object-contain' />
                <h1 className=' text-xl'>Ecommerce</h1>
            </div>
            <div className='col-span-4 h-12 flex items-center'>
                <ul className='flex justify-evenly gap-18 text-lg font-normal w-full h-full'>
                    <div className="flex items-center relative">
                        <li className="p-2 cursor-pointer" onClick={toggleDropdown}>Categorias</li>
                        <TiArrowSortedDown className="cursor-pointer" onClick={toggleDropdown} />
                        {showDropdown && <Dropdown list={["Auriculares", "Teclados", "Mouses", "Monitores"]} />}
                    </div>
                    <a href="/Ofertas"><li className="p-2">Ofertas</li></a>
                    <a href="/Nuevos"><li className="p-2">Nuevos</li></a>
                    <a href="/Envio"><li className="p-2">Envio</li></a>
                </ul>
            </div>
            <div className='col-span-2 h-12 flex items-center justify-center'>
                <input type="text" className='w-4/5 pl-3.5 py-2 focus:outline-none rounded-l-md' placeholder='Buscar Producto' />
                <BsSearch className="bg-white h-10 w-auto p-3 text-gray-400 rounded-r-md" />
            </div>
            <div className='flex justify-center col-span-2 gap-x-20 h-12 items-center'>
                <Account />
                <a href="">
                    <div className="flex items-center">
                        <TfiShoppingCartFull className="h-6 w-auto" />
                        <h2 className='p-2'>Carrito</h2>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default Navbar