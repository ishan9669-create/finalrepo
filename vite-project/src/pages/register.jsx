import axios from "axios";
import { useState } from "react"

export default function Register(){

    const [slide,setSlide] = useState('register');
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const[password,setPassword] = useState('')
    const[company,setCompany] = useState('')
    const[created,setCreated] = useState('');
    const[signin,setSignin] = useState('')
    return (
        <div className="h-screen" style={{backgroundColor:'#15a6ff'}}>
           <div className="p-8">
            <span className="text-3xl font-bold tracking-widest text-white">AIRPLAN</span>
           </div>

           <div className="h-[600px] flex justify-center items-center ">

            <div className="bg-blue-900 w-[700px] h-[400px]  flex relative">
           

             <div className="p-10 w-[50%] -translate-x-7 ">
                 <h1 className="text-white font-semibold text-2xl">Don't have an account?</h1>

                 <p className="translate-y-10 text-slate-300">Cloud software suite to convert basic drone data into operational effectiveness.</p>


                 <button className={`px-9 py-2 translate-y-32 text-blue-600 bg-slate-300
                 
                 `}
                 onClick={()=>{
                    setSlide('register')
                 }}
                 >REGISTER</button>
             </div>

             <div className="p-10 w-[50%] translate-x-10 ">
             <h1 className="text-white font-semibold text-2xl">Have an account?</h1>

            <p className="translate-y-10 text-slate-300">Cloud software suite to convert basic drone data into operational effectiveness.</p>


            <button className="px-9 py-2 translate-y-32 text-blue-600 bg-slate-300"
            onClick={()=>{
                setSlide('login')
            }}
            >LOGIN</button>

             </div>


             {/* upar wala div */}

             <div className={`h-[500px] -bottom-12 bg-white absolute w-[400px] 
                ${slide=='register' ? 'animate-moveleft':'animate-moveright'}
                `}> 
               <h1 className="text-2xl mt-5 text-blue-600 mx-5 font-semibold">{slide=='register'?"Registration":"Login"}</h1>

               <form action="
               
               " className="mt-5 flex flex-col gap-4">
                
               <input
               onChange={(e)=>{
                setName(e.target.value)
               }}
               type="text" className={`p-2 outline-none border w-[80%]   rounded-lg  mx-5 ${slide=='login'? 'mt-8':''}`} placeholder="Name"/>
               <p className={`${name=='' ? 'text-red-500':'text-green-400'} ml-7`}>{name=='' ? 'Please fill out this field!':'valid!'}</p>

                <input
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                type="email" className="p-2 outline-none border w-[80%] rounded-lg  mx-5" placeholder="Email ID"/>
                
                <p
                className={`${email.split('@')[1]=='gmail.com' ? 'text-green-400':'text-red-500'} ml-7`}
                >{email.split('@')[1]=='gmail.com' ? 'Valid!!':'Please fill out this field!'}</p>

                {slide=='register' ? (
                    <div>
                        <input 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        type="password" className="p-2 outline-none border w-[80%] rounded-lg  mx-5" placeholder="Password"/>
                        <p className={`${password=='' ? 'text-red-500':'text-green-400'} ml-7`}>{password=='' ? 'Please fill out this field!':'valid!'}</p>
                    </div>
                
            ):''}

                
                {slide=='register' ? (
                    <div>
                        <input 
                        onChange={(e)=>{
                            setCompany(e.target.value)
                        }}
                        type="text" className="p-2 outline-none border w-[80%]  rounded-lg mx-5" placeholder="Company Name" />
                        <p className={`${company=='' ? 'text-red-500':'text-green-400'} ml-7`}>{company=='' ? 'Please fill out this field!':'valid!'}</p>
                    </div>
                ):''}
                
                
              
               
               </form>
                 {slide=='login'?(<span className="mx-5 text-slate-500">Forget Password</span>):''}

               <div className="flex flex-col gap-[20px] items-center -translate-y-5">
               <button
               onClick={async()=>{
                if(slide=='register'){
                 const User =   await axios({
                    method:'post',
                    url:'http://localhost:3000/signup',
                    data:{
                        name:name,
                        email:email,
                        password:password,
                        company_name:company
                    }
                   })

                   if(User.data.msg){
                        setCreated(User.data.msg)
                   }


                }

                else{
                    const User = await axios({
                    method:'post',
                    url:'http://localhost:3000/signin',
                    data:{
                        email:email,
                        password:password
                    }
                    })

                    if(User.data.msg){
                           setSignin(User.data.msg)
                           localStorage.setItem('user_id',User.data.user_id)
                           window.location.href = '/afterlogin'
                    }
                }
               }}
               
               className="px-9 mx-5 py-2 translate-y-8 hover:bg-red-400 hover:text-white text-blue-600 bg-slate-300">{slide=='register'?"REGISTER":"LOGIN"}</button>
               
                <span className="text-green-500 translate-y-[10px]">{slide=='register' ? created:signin}</span>
                </div> 
                
             </div>

            </div>
           </div>
        </div>
    )
}