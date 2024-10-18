import { useState } from "react"
import Footer from "../components/footer"

const TOWER = [
    {
        image:'https://airpix.in/assets/images/industries/utilities/powerline1.jpg',
        heading:'Drone Inspection Services for Powerline and Transmission Tower',
        text:'he conventional methods of surveying include walkover surveys, prior surveys, and detailed surveys, all of which take a considerable amount of time and manpower. These are manual methods and there is always a risk that the results do not accurately reflect the details on the ground. On the other hand, modern surveying techniques leverage the latest technologies for mapping and aerial monitoring and reduce the possibility of error.'
    },
    {
        image:'https://airpix.in/assets/images/industries/utilities/powerline2.jpg',
        heading:``,
        text:'The twin pillars of a growing digital economy are energy and information. Drone technologies make sure essential power infrastructure supports us uninterrupted With our drone solution, surveys can be carried out through the field for optimizing roads, digitizing property and collecting elevation data. This is provided on a single platform, which enables power lines and transmission towers to be maintained and inspected using high-resolution video and drone data.'
    },
    {
        image:'https://airpix.in/assets/images/industries/utilities/powerline3.jpg',
        heading:'DRONE SOLUTIONS CONNECT PEOPLE',
        text:'Powerlines and cell towers are more critical than roads and railways for connecting people as they shed light on modernization and knowledge. However, the inspection and monitoring of lattice towers and powerlines across remote terrain continues to remain a critical challenge to ensure we stay connected to spread the light.'
    }
]
const TURBINE = [
    {
        image:'https://airpix.in/assets/images/industries/utilities/wind1.jpg',
        heading:'WIND TURBINE BLADE INSPECTION USING DRONES',
        text:'Using professional drones with high flight times and drone pilots with specific experience in carrying out wind turbine blade inspection, we capture blade wise images using high-resolution cameras and zoom cameras on drones. By following our standard operating procedure, images of suction side, pressure side, trailing edge, and leading-edge are captured to be studied and analyzed for the overall health status of the wind turbine.'
    },
    {
        image:'https://airpix.in/assets/images/industries/utilities/wind2.jpg',
        heading:'SAVE TIME AND REDUCE RISK',
        text:'Depending on the wind and site conditions, our teams can carry out up to 8 turbines in a day, thus saving the much critical downtime of the wind turbines and thereby helping clients to achieve better power generation and reduce losses. With our drone-based inspection solutions, you will not have to risk your manpower to inspect the blades our drones will fly, capture, and inspect your drones in no time with minimal safety hazards.'
    },
    {
        image:'https://airpix.in/assets/images/industries/utilities/wind4.jpg',
        heading:'IMPROVE REPORTING, ANALYSIS, AND TRANSPARENCY',
        text:'Drone technology performs drone calculations and provide comprehensive report on the inspection carried out. Our reports consist of detailed information on the defects, classification of damages based on their type & severity and location of the damage. The data is available on a cloud-based platform and in PDF reports for easy visualization, analysis and decision making.'
    }
]
const GAS = [
    {
        image:'https://airpix.in/assets/images/industries/utilities/oilandgas1.png',
        heading:'DRONE INSPECTION FOR OIL & GAS ASSETS',
        text:'Oil and gas projects, refineries and plants have huge safety & operation critical assets that are to be monitored and inspected regularly to ensure safe operations. Airpix provides drone services for oil and gas inspection & survey to help companies to maintain their assets better and improve safety. Our fleet of professional drones with high resolution cameras, thermal cameras Flir Vue Pro series and experienced drone pilots can inspect all your assets such as chimneys, flare stacks, pipelines, cooling towers and more to find out all types of surface defects.'
    },
    {
        image:'https://airpix.in/assets/images/industries/utilities/oilandgas2.png',
        heading:'SAVE TIME AND REDUCE RISK',
        text:`With our drone inspection serivces, you can inspect your assets without bringing your operations to a halt. We have inspected chimneys and flare stacks without shutting down the plant for companies like IOCL. Risk to human life is reduced since tall and difficult to access assets can be inspected with our drones and collecting all the crticial information in a short period of time - safety personnel will not have to climb and inspect the assets manually. Our drone inspection services with standard operating procedures help reduce asset shut down times, improve safety and reduce risk to manpower.`
    },
    {
        image:'https://airpix.in/assets/images/industries/utilities/oilandgas3.png',
        heading:'IMPROVE REPORTING, ANALYSIS, AND TRANSPARENCY',
        text:'We provide comprehensive reports on the drone inspection carried out. Our reports consist of detailed information on the defects, claissification of damages based on their type & severity and location of the damage. The data is available on a cloud based platform and in PDF reports for easy visualization, analysis and decision making'
    }
]


export default function Utility(){

    const [tower,setTower] = useState(true)
    const [turbine,setTurbine] = useState(false)
    const [gas,setGas] = useState(false)
     return (
        <div>
            <div className="flex justify-center text-3xl mt-10 ">
            {tower? 'TRANSMISSION TOWER' : '' || turbine ? 'WIND TURBINE':'' || gas ? 'OIL & GAS INSPECTION': '' }
            </div>

           <p className="text-gray-400 mx-48 text-center mt-10">
           Drone solutions that deliver analytical geospatial information will shape the smart cities of the future by way of smart land-use governance, digitization of land records and near real-time 3-Dimensional infrastructure insights.
           </p>

            
            <div className="mx-48 mt-10 flex-col flex md:flex-row border-2 justify-between items-center">
                <div className={`p-3  md:w-[33%] w-[100%] flex justify-center md:border-r-2 cursor-pointer ${tower==false ? 'border-b-0':'border-b-2 border-b-red-700 '}`}

                
                onClick={(e)=>{
                   
                   setTower(true);
                   setTurbine(false);
                   setGas(false);
                }}
                >TRANSMISSION TOWER</div>

                <div
                 onClick={(e)=>{
                    
                    setTower(false);
                    setTurbine(true);
                    setGas(false);
                 }}
                className={`p-3  md:w-[33%] w-[100%] flex justify-center md:border-r-2 cursor-pointer ${turbine==false ? 'border-b-0':'border-b-2 border-b-red-700 '}`}>WIND TURBINE</div>
                <div 
                 onClick={(e)=>{
                
                    setTower(false);
                    setTurbine(false);
                    setGas(true);
                 }}
                className={`p-3 md:w-[34%] w-[100%] flex justify-center cursor-pointer ${gas==false ? 'border-b-0':'border-b-2 border-b-red-700'}` }>OIL & GAS INSPECTION</div>
            </div>

            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
               <img src={tower? TOWER[0].image : '' || turbine ? TURBINE[0].image:'' || gas ? GAS[0].image : '' }
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

               <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{tower? TOWER[0].heading : '' || turbine ? TURBINE[0].heading:'' || gas ? GAS[0].heading : '' }</h1>
                <p
                className="text-gray-400"
                >{tower? TOWER[0].text : '' || turbine ? TURBINE[0].text:'' || gas ? GAS[0].text : '' }</p>
               </div>
            </div>

            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
            <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{tower? TOWER[1].heading : '' || turbine ? TURBINE[1].heading:'' || gas ? GAS[1].heading : '' }</h1>
                <p
                className="text-gray-400"
                >{tower? TOWER[1].text : '' || turbine ? TURBINE[1].text:'' || gas ? GAS[1].text : '' }</p>
               </div>

               <img src={tower? TOWER[1].image : '' || turbine ? TURBINE[1].image:'' || gas ? GAS[1].image : '' }  
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

              
            </div>
            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
            <img src={tower? TOWER[2].image : '' || turbine ? TURBINE[2].image:'' || gas ? GAS[2].image : '' }  
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

            <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{tower? TOWER[2].heading : '' || turbine ? TURBINE[2].heading:'' || gas ? GAS[2].heading : '' }</h1>
                <p
                className="text-gray-400"
                >{tower? TOWER[2].text : '' || turbine ? TURBINE[2].text:'' || gas ? GAS[2].text : '' }</p>
               </div>
               
              

              
            </div>

            
            <div className="flex justify-center font-semibold text-2xl mt-12">
                <h1>What we offer</h1>
            </div>

            <div className="flex-col flex md:flex-row justify-between mt-10 mx-48 translate-x-10
             items-center " >
                <div className="flex flex-col items-center  gap-3">
                <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-09-256.png" 
                className="h-[150px]"
                />
                <span>2cm Resolution Data</span>
                </div>
                <div className="flex flex-col items-center gap-5">
                <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/share-sharing-socialmedia-social-network-exchange-256.png" 
                className="h-[130px]"
                alt="" />
                <span>5x Faster Data Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                <img src="https://cdn4.iconfinder.com/data/icons/thin-line-icons-for-seo-and-development-1/64/SEO_SEO-256.png" alt="" className="h-[150px]"/>
                <span>Improve Transparency In Projects</span>

                </div>
            </div>


         <Footer/>
        </div>
     )
}