import { useState } from "react"
import Footer from "../components/footer"

const AGRI = [
    {
        image:'https://airpix.in/assets/images/industries/agriculture/agriculture/agriculture1.jpg',
        heading:'DRONE SURVEY FOR PRECISION AGRICULTURE',
        text:'Drones in india are widely implemeted in agriculture. Drones in agriculture are used for survey have RGB and NIR sensors that gives multi spectral data of the agriculture farms. This data is processed to generate high resolution base maps in the respective bands and then carry out NDVI analysis to find out relative crop health in the field - an insight that can be used to improve fertilization and optimized water treatment'
    },
    {
        image:'https://airpix.in/assets/images/industries/agriculture/agriculture/agriculture2.jpg',
        heading:'CROP COUNTING AND YIELD ESTIMATION',
        text:'Our GIS and image processing team carry out data processing of the drone survey completed to give you autonomous output regarding the tota number of crops in a field and integrate it with the NDVI analysis to give insights on potential yield estimation of your farm. Timely survey of farms with our systems can help you realize higher outputs'
    },
    {
        image:'https://airpix.in/assets/images/industries/agriculture/agriculture/agriculture3.jpg',
        heading:'CROP INSURANCE',
        text:'Drone survey data integrated with GIS and land records data gives government bodies transparent data on the crops being grown, land ownership and farmer details. During natural calaimities, Airpix drones deployed collects on-demand information for damage assessment of agricutlure fields thus giving government, farmers, insurance companies and consultants complete transparent information on the extent of damage crop wise and field wise.'
    }
]
const CANAL = [
    {
        image:'https://airpix.in/assets/images/industries/agriculture/canal_mapping/canal_lining.jpg',
        heading:'DRONE SURVEY FOR IRRIGATION',
        text:'Airpix captures aerial photographs by drone surveys to generate high resolution and accurate orthophoto, Digital Elevation Model (DEM), Digital Terrain Model (DTM), and contour maps. The data serves as an input for authorities to simulate models and understand the flow of water so that they can design canals accordingly.'
    },
    {
        image:'https://airpix.in/assets/images/industries/agriculture/canal_mapping/canal1.jpg',
        heading:'LAND RECORD DIGITIZATION',
        text:'Using our high-resolution orthophoto as a base map, all on-ground features are digitized, cadastral & revenue map overlaid and detailed reports are generated regarding land use classification so that authorities can have an up to date information about on ground conditions'
    },
    {
        image:'https://airpix.in/assets/images/industries/agriculture/canal_mapping/canal2.jpg',
        heading:'WEB APPLICATION TO VIEW, SHARE AND COLLABORATE',
        text:'Authorities can host all the data on our web application so that they can access the data from anywhere and collaborate with different departments and contractors to quicken the design & development of canals'
    }
]
export default function Agriculture(){

    const [agri,setAgri] = useState(true)
    const [canal,setCanal] = useState(false)
   
     return (
        <div>
            <div className="flex justify-center text-3xl mt-10 ">
            {agri? 'AGRICULTURE' : '' || canal ? 'CANAL MAPPING':'' }
            </div>

           <p className="text-gray-400 mx-48 text-center mt-10">
           Drone solutions that deliver analytical geospatial information will shape the smart cities of the future by way of smart land-use governance, digitization of land records and near real-time 3-Dimensional infrastructure insights.
           </p>

            
            <div className="mx-48 mt-10 flex-col flex md:flex-row border-2 justify-between items-center">
                <div className={`p-3  md:w-[50%] w-[100%] flex justify-center md:border-r-2 cursor-pointer ${agri==false ? 'border-b-0':'border-b-2 border-b-red-700 '}`}

                
                onClick={(e)=>{
                   
                   setAgri(true)
                   setCanal(false)
                }}
                >AGRICULTURE</div>

                <div
                 onClick={(e)=>{
                    
                    setAgri(false);
                    setCanal(true);
                    
                 }}
                className={`p-3  md:w-[50%] w-[100%] flex justify-center md:border-r-2 cursor-pointer ${canal==false ? 'border-b-0':'border-b-2 border-b-red-700 '}`}>CANAL MAPPING</div>
                
            </div>

            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
               <img src={agri? AGRI[0].image : '' || canal ? CANAL[0].image:''  }
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

               <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{agri? AGRI[0].heading : '' || canal ? CANAL[0].heading:'' }</h1>
                <p
                className="text-gray-400"
                >{agri? AGRI[0].text : '' || canal ? CANAL[0].text:'' }</p>
               </div>
            </div>

            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
            <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{agri? AGRI[1].heading : '' || canal ? CANAL[1].heading:'' }</h1>
                <p
                className="text-gray-400"
                >{agri? AGRI[1].text : '' || canal ? CANAL[1].text:'' }</p>
               </div>

               <img src={agri? AGRI[1].image : '' || canal ? CANAL[1].image:''  } 
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

              
            </div>
            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
            <img src={agri? AGRI[2].image : '' || canal ? CANAL[2].image:''  } 
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

            <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{agri? AGRI[2].heading : '' || canal ? CANAL[2].heading:'' }</h1>
                <p
                className="text-gray-400"
                >{agri? AGRI[2].text : '' || canal ? CANAL[2].text:'' }</p>
               </div>
               
              

              
            </div>

            
            <div className="flex justify-center font-semibold text-2xl mt-12">
                <h1>What we offer</h1>
            </div>

            <div className="flex-col flex md:flex-row justify-between mt-10 mx-48 translate-x-10
             items-center " >
                <div className="flex flex-col items-center  gap-3">
                <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-09-256.png" 
                className="h-[510px]"
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