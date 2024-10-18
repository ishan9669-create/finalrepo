import { useState } from "react"

export default function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5 w-[700px]  translate-y-[250px] p-2">
               <div className="flex flex-col  ">
                <label htmlFor="email">Email address:</label>
                <input 
               
                
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                style={{border:`${email.split('@')[1]=='gmail.com' ? "1px solid green":"1px solid red"}`}} type="email" id="email"  className={`p-2 rounded-md translate-y-2 outline-none`} />
                <p className={`${email.split('@')[1]=='gmail.com' ? 'text-green-500':'text-red-600'} translate-y-2`}>{email.split('@')[1]=='gmail.com' ?   "Valid!":"Please fill out this field!"}</p>
                
               </div>

               <div className="flex flex-col " >
                <label htmlFor="password">Password :</label>
                <input 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                style={{border:`${password=='' ? "1px solid red":"1px solid green"}`}} type="password" id="password"  className="p-2 rounded-md translate-y-2 outline-none" />

                <p className={`${password=='' ? "text-red-600":"text-green-500"} translate-y-2`}>{password=='' ? "Please fill out this field!":"Valid!"}</p>
               </div>
<br />
               <button className="hover:bg-blue-700 bg-blue-500 px-2 py-2 w-[100px]  rounded-full text-white">Submit</button>
            </div>


        </div>
    )
}