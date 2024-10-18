import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import imagetobase64 from "../help/imagebase64";
export default function Afterlogin(){
     const[id,setId] = useState(false)
    const[addproject,setAddproject] = useState(false)
    const[pic,setPic] = useState('')
    const[pic2,setPic2] = useState('')
    const[company,setCompany] = useState('')
    const[project,setProject] = useState('')

    let  [projectcard,setProjectcard] = useState([])
    const [index,setIndex] = useState(0)
    async function handleEdit(e){
        const file = e.target.files[0];
        const imagePic  = await imagetobase64(file)

      setPic(imagePic)
    }

    async function handlepic(e){
        const file = e.target.files[0];
        const imagePic = await imagetobase64(file)
         
        setPic2(imagePic)
    }
    return ( 
        <div className="flex  h-screen">

        {/* left side bar */}

        <div className="flex flex-col justify-start  h-full w-[100px] items-center gap-6 shadow-xl ">
            <img src="https://e4.shell.in/our-start-ups-portfolio/_jcr_content/par/imageiconlist_copy_c_1895065417/imageiconlistsection_112957931/image.img.960.jpeg/1682390108248/cognitensor.jpeg?imwidth=960 " className="h-[50px] border-black border  mt-4 w-[50px] rounded-full" />
            <FaRegFolderOpen  className="w-[100%] hover:text-black h-[50px] text-white bg-blue-600"/>
            <span className=" -translate-y-5">Projects</span>
        </div>


        {/* right big bar */}

        <div>
            <div id="upper-bar" className="bg-blue-600 relative w-[calc(100vw-100px)] p-5">
            <div className="flex justify-between">
                <span className="text-4xl text-white font-semibold">AIR<span className="text-black font-bold">PLAN</span></span>
                <div className="flex justify-between items-center  w-[300px] text-white">
                    <IoMdNotificationsOutline className="text-4xl hover:text-yellow-300 cursor-pointer "/>
                    <div className="flex flex-col items-center
                    hover:text-black cursor-pointer
                    "
                     onClick={()=>{
                        if(id==false) setId(true) 
                         else setId(false)   
                    }}> 
                    <FaRegUserCircle className="text-5xl"/>
                    <span>User</span>
                    </div>
                    <IoMdArrowDropdown className="text-2xl 
                    otext-black cursor-pointer hover:text-black " 
                    onClick={()=>{
                        if(id==false) setId(true) 
                         else setId(false)   
                    }}
                    />
                    {id ? ( <div className="w-[300px] h-[300px] absolute flex flex-col items-center justify-center top-[150px] left-[1130px]">
                       <div className="w-[100%] flex items-center h-[80%] bg-blue-500 justify-center">

                        
                           <div className="flex flex-col items-center">
                           <img src={pic2}   className="w-[100px] h-[100px] rounded-full" />
                           <label  className="text-black font-semibold" >
                            
                            change

                           <input type="file"  className="hidden" onClick={handlepic}/>
                           </label>
                             
                           </div>
                           <span className="text-2xl ml-2">Ishan</span>

                       </div>
                       <div className="w-[100%] h-[20%] text-black border-black border flex">
                           <span className="w-[50%] flex justify-center items-center border-r-2 border-blue-500">EDIT</span>
                           <span className="w-[50%] flex justify-center items-center">SIGN OUT</span>
                       </div>

                    </div>):''}
                   
                    
                </div>
            </div>
            <div className="flex justify-around mt-5">
                <div className="flex gap-10  relative">
                    <span className="text-4xl text-white font-semibold">Projects</span>
                    <button 
                    onClick={()=>{
                        if(addproject==false) setAddproject(true)
                            else setAddproject(false)
                    }}
                    className="px-2 py-1 hover:bg-pink-700 hover:text-white bg-white text-pink-700 font-semibold rounded-md">+ ADD PROJECT</button>
                    {/* project wala div */}
                    {addproject==true ? <div className="absolute  w-[300px] h-[450px] top-[67px] shadow-2xl">
                        <div className=" w-full h-[40%] border-b-2 border-black flex flex-col  justify-center items-center">
                           {pic ? <img src={pic} className="w-[80px]  rounded-full h-[80px]"  />:<MdAddAPhoto  className="text-5xl" />}
                         <input type="file" className="text-xs translate-x-6" onClick={handleEdit} />
                        </div>

                        <div className=" bg-blue-600 w-full h-[50%] p-4 flex flex-col gap-6">
                            <input
                            onChange={(e)=>{
                                setProject(e.target.value)
                            }}
                            type="text" placeholder="project name" className="outline-none border-b-2 border-black bg-blue-600 k" />
                            <input 
                            onChange={(e)=>{
                                setCompany(e.target.value)
                            }}
                            type="text" className=" bg-blue-600 outline-none border-b-2 border-black" placeholder="company name"/>

                           
                        </div>
                        <div className="w-[100%] h-[10%] border-t-2 border-black flex justify-between">
                                <span
                                onClick={()=>{
                                    setProjectcard([...projectcard,<ProjectCard projectcard={projectcard} index={index} setProjectcard={setProjectcard} pic={pic} project={project} company={company}/>])
                                    setAddproject(false)
                                    setIndex(index+1)
                                }}
                                 className="flex justify-center items-center w-[50%] border-r-2 border hover:text-pink-700 cursor-pointer"
                                >CREATE</span>
                                <span className="flex justify-center items-center w-[50%] hover:text-red-700 cursor-pointer">CANCEL</span>
                            </div>
                    </div>: ''}
                </div>
                <div className="rounded-xl   bg-blue-400 w-[400px] mr-40">
                     
                </div>
            </div>
            </div>

            <div className="pt-4 ml-4 flex gap-5">
                 {
                    projectcard.map((p)=>{
                        return (p)
                    })
                 }
            </div>

            
        </div>



        </div>
    )
}

function ProjectCard({project,company,pic,setProjectcard,projectcard,index}){
  return (
    <div className="  w-[300px] h-[450px] top-[67px] shadow-2xl">
                        <div className=" w-full h-[40%] border-b-2 border-black flex flex-col  justify-center items-center">
                           <img src={pic} className="w-[80px]  rounded-full h-[80px]"  />
                         
                        </div>

                        <div className=" bg-blue-600 w-full h-[50%] p-4 flex flex-col gap-6">
                           
                           <span className="font-semibold text-white text-2xl">{project}</span>

                           <span >{company}</span>

                           
                        </div>
                        <div className="w-[100%] h-[10%] border-t-2 border-black flex justify-between">
                                <span
                                 className="flex justify-center items-center w-[50%] border-r-2 border hover:text-pink-700 cursor-pointer"
                                >EDIT</span>
                                <span
                                onClick={()=>{
                                    projectcard = projectcard.filter((a)=>{
                                        if(a == projectcard[index]) return false;
                                        else return true
                                    })
                                    setProjectcard(projectcard)
                                }}
                                className="flex justify-center items-center w-[50%] hover:text-red-700 cursor-pointer">REMOVE</span>
                            </div>
                    </div>
  )
}