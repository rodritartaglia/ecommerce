import { useState } from 'react'
import { BsSearch, BsPerson } from "react-icons/bs";
import Login from './Login';

function Account() {

    const [showModale, setShowModale] = useState(false)

    const toggleModale = () => {
        setShowModale(!showModale)
    }

    return (
        <div>
            <div className="flex items-center cursor-pointer" onClick={toggleModale}>
                <BsPerson className="h-6 w-auto" />
                <h2 className='p-2'>Cuenta</h2>
            </div>
            {showModale && <Login />}
        </div>
    )
}

export default Account