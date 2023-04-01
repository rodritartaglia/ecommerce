import { useState } from 'react'
import Register from './Register'


function Login() {

    const [showRegister, setShowRegister] = useState(false)


    return showRegister ? <Register /> : (
        <div className='bg-white fixed inset-0 w-fit h-fit m-auto rounded-xl shadow-lg z-10'>
            <form action="" className='flex flex-col items-center justify-center gap-3.5 py-5 px-16'>
                <span className='font-bold text-xl'>Iniciar Sesion</span>
                <input type="email" name="" id="" className="p-3.5 border-b border-[#a7bcff] w-64" placeholder='Email' />
                <input type="password" name="" id="" className="p-3.5 border-b border-[#a7bcff] w-64" placeholder='Contraseña' />
                <button className='bg-[#7b96ec] text-white p-2.5 border-none w-full'>Aceptar</button>
                <p className='text-[#5d5b8d] text-sm mt-2.5'>¿No tenes cuenta? <span className='text-[#1647eb] cursor-pointer' onClick={() => setShowRegister(true)}>Registrate!</span></p>
            </form>
        </div>

    )
}

export default Login