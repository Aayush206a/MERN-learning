import React, { useState } from 'react'

const Loginform = () => {

    const [email,setEmail] = useState('email'); //email
    const onEmailChange = (e) =>{
        console.log("email changed",e.target.value)
        setEmail(e.target.value)
    }

    console.log('state',email)

    // hook, sideffet, memorization
    //usestate


    return(
        <div className='mt-10'>
                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[10px] font-semibold' htmlFor="email">Email: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' id="email" type='email' placeholder='Email' required onChange={onEmailChange}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[10px] font-semibold' htmlFor="password">Password: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' id="password" type='password' placeholder='password' required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[10px] font-semibold' htmlFor="re-password">Password: </label>
                        {/* input */}
                        <input className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400' id="re-password" type='password' placeholder='retype Passwor' required />
                    </div>
                    <div className='w-full mt-4'>
                        <button className='w-full bg-blue-600! py-3.5 text-white font-bold rounded-md' type='submit'>Create Account</button>
                    </div>
                </form>
            </div>
    )
    
}
export default Loginform
