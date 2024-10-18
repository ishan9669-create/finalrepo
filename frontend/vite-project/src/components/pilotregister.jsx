import axios from 'axios'
import {useState} from 'react'

export default function PilotRegister(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [age,setAge] = useState('')
    const [description,setDescription] = useState('')
    return (
        <div className="flex justify-center items-center gap-6 flex-col translate-y-[100px]">
            <input
            onChange={(e)=>{
                setName(e.target.value)
            }}
            type="text"  placeholder="Enter name"  className="w-[800px]  p-3  border-black border rounded-lg "/>
            <input 
              onChange={(e)=>{
                setEmail(e.target.value)
            }}
            type="email" placeholder="Enter email"  className="w-[800px] p-3 border-black border rounded-lg "/>
            <input
              onChange={(e)=>{
                setPhone(e.target.value)
            }}
            type="text"  placeholder="Enter phone number" className="w-[800px] p-3 border-black border rounded-lg "/>
            <input
              onChange={(e)=>{
                setAge(e.target.value)
            }}
            type="text"  placeholder="Enter Your age" className="w-[800px] p-3 border-black border rounded-lg "/>
            <textarea 
              onChange={(e)=>{
                setAddress(e.target.value)
            }}
           className="w-[800px] p-2 border-black border rounded-lg "
           placeholder="Address"></textarea>
            <textarea 
              onChange={(e)=>{
                setDescription(e.target.value)
            }}
            className="w-[800px] p-3 border-black border rounded-lg " placeholder="LIST YOUR DRONES HERE. for eg. DJI Phantom 4, DJI Inspire 1 ,etc. In case of custom made drones - please describe the setup in this way : Multirotor Type (QUAD , HEXA , OCTA ) , etc" ></textarea>

          
            <button 
            onClick={async()=>{
              await axios({
                method:'post',
                url:'http://localhost:3000/register',
                data:{
                    name,
                    email,
                    phone,
                    age,
                    address,
                    description
                }
              })
            }}
            
            className="px-3 py-2 rounded-lg text-white  bg-blue-600 hover:bg-blue-700">Submit</button>
            
        </div>
    )
}