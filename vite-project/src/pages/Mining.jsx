import { useState } from "react"
import Footer from "../components/footer"

const UrbanDev = [
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/infrastructure3.jpg',
        heading:'ADVANTAGES OF DRONES',
        text:'Our drone survey solutions for town planning helps our clients with saving time, money and have access to better data. While other remote sensing options such as satellite imagery provides you with about 30cm resolution data, we provide you with more than 10 times better resolution and accuracy. Conventional survey methods such as DGPS and TS takes more time in data collection as well as processing, while drone surveys help you realize at least 5x faster data delivery. Further, since the data is generated from actual imagery, it brings in better transparency.'
    },
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/city1.jpg',
        heading:'DRONE SURVEY FOR TOWN PLANNING',
        text:'AIRPIX provides drone survey services for town planning, land record digittization and smart city development. Our fleet of fixed wing & multi-rotor drones and drone pilots can cover square kilometers of area in a day and deliver you with high resolution base map down to 2cm GSD. Our team of GIS experts and high end workstations can carry out the necessary photogrammetry processing to deliver 3D city models, orthophotos and GIS feature extraction solutions.'
    },
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/city2.jpg',
        heading:'APPLICATIONS OF DRONES',
        text:'Drone survey and drone videos can be used at different stages of town planning, smart city development and land records management. While 3D models and high resolution base map help in carrying out the initial survey required for quick planning and designing, drone videos with geotagged information can help in project monitoring and implementation. Further, once the base map of a city is prepared, it can then be integrated with cadastral maps and geospatial information to be leveraged for multiple applications such as property tax collection, large infrastructure development, solar rooftop potential estimation, roads & metro development and more.'
    }
]
const Transport = [
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/railway1.jpg',
        heading:'RAILWAYS',
        text:'Airpix is associated with some marquee Indian Railway Projects for surveying, planning and project monitoring using drone survey and drone videos. We provide mapping, land record digitiziing, base map generation, GIS, geotagged videos, orthophoto generation and drone data management portal for easy viewing, accessing and sharing of drone data of different projects. We have covered more than 500km of Indian railway lines, multiple early stage projects, station yards and existing railway station development projects for Central Railways, DFCC, Rail Vikas Nigam Ltd. for their drone data project requirements.'
    },
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/road1.jpg',
        heading:'HIGHWAYS & ROADWAYS',
        text:'Drone survey provides for quick and accurate survey of roads and highway projects. For planning of existing highways, Airpix drone survey provides data required for junction planning, by pass designing and lane extension. For greenfield projects, our quick topographic survey provides auhtorities with orthophoto, DTM, contur and cut fill estimation to carry out engineering design of the new highways. Drone videos help to quickly analyze the entire alignment both for designing purposes and traffic survey. Government boides such as MSRDC, NHAI, IHMCL and state government departments are the users of this technology.'
    },
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/airport1.jpg',
        heading:'AIRPORTS',
        text:'Our unmanned aerial vehical provides near real-time video monitoring with high-resolution geospatial inputs, we provide the perfect drone-based solution for useful studies, Detailed Project Reports, project monitoring and level comparison on one platform for project planners, design engineers and project management consultants to collaborate and get things done. Read our case study on how AIRPIX drone survey and drone video solutions are helping the Navi Mumbai International Airport project'
    }
]
const mining = [
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/mining1.jpg',
        heading:'MINING',
        text:'Drone survey has become an integral part of the mining industry delivering accurate results much faster than the conventional survey methods while being much cheaper than other expensive options such as Lidar survey. Our solutions help mining industry companies to do site monitoring digitize their lease areas, identify illegal encroachment and carry out inspection of plant areas. We provide insights from 3D visualization of mines to ensure robust inventory management and safety reviews.'
    },
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/mining3.jpg',
        heading:'LEASE AREA MAPPING',
        text:`Airpix has covered more than 25,000 acres of mining lease areas in India working with India's leading companies such as ACC, Ambuja cements, Tata Steel, JSW and many more. We have covered locations across India providing the much critical data required for digitizing their lease r ecords and monitoring illegal mining & encroachment. Our detailed survey provides the companies with the necessary inputs for mining plan preparation, bench analysis, haul road analysis and compliances.`
    },
    {
        image:'https://airpix.in/assets/images/industries/infra_and_mining/mining2.jpg',
        heading:'STOCK PILE VOLUME ANALYSIS',
        text:'Our drone survey based stock volumetric analaysis provides 98% accuracy with actual volumes, which is much higher than what can be realized with conventional total station or DGPS based surveys. The highly dense point cloud and high resolution photography enables to produce data that almost follows the contour of the actual stockpile surface, rather than taking a few points and extrapolating thus generating accurate results. Watch our video here to understand bette'
    }
]


export default function Mining(){

    const [urban,setUrban] = useState(true)
    const [transport,setTransport] = useState(false)
    const [mine,setMining] = useState(false)
     return (
        <div>
            <div className="flex justify-center text-3xl mt-10 ">
            {urban? 'URBAN DEVELOPMENT' : '' || transport ? 'TRANSPORT':'' || mine ? 'MINING': '' }
            </div>

           <p className="text-gray-400 mx-48 text-center mt-10">
           Drone solutions that deliver analytical geospatial information will shape the smart cities of the future by way of smart land-use governance, digitization of land records and near real-time 3-Dimensional infrastructure insights.
           </p>

            
            <div className="mx-48 mt-10 flex flex-col md:flex-row border-2 justify-between items-center">
                <div className={`p-3 md:w-[33%] w-[100%] flex justify-center  md:border-r-2 cursor-pointer ${urban==false ? 'border-b-0':'border-b-2 border-b-red-700 '}`}

                
                onClick={(e)=>{
                   
                   setUrban(true);
                   setTransport(false);
                   setMining(false);
                }}
                >URBAN DEVELOPMENT</div>

                <div
                 onClick={(e)=>{
                    
                    setUrban(false);
                    setTransport(true);
                    setMining(false);
                 }}
                className={`p-3   flex justify-center md:w-[33%] w-[100%] md:border-r-2 cursor-pointer ${transport==false ? 'border-b-0':'border-b-2 border-b-red-700 '}`}>TRANSPORT</div>
                <div 
                 onClick={(e)=>{
                
                    setUrban(false);
                    setTransport(false);
                    setMining(true);
                 }}
                className={`p-3 md:w-[34%] w-[100%] flex justify-center cursor-pointer ${mine==false ? 'border-b-0':'border-b-2 border-b-red-700'}` }>MINING</div>
            </div>

            <div className="flex flex-col md:flex-row  md:gap-28 gap-10 justify-between mt-10 md:mx-48  ">
               <img src={urban? UrbanDev[0].image : '' || transport ? Transport[0].image:'' || mine ? mining[0].image : '' }
               className="rounded-xl h-80 md:w-[480px] w-[100%] "
               />

               <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{urban? UrbanDev[0].heading : '' || transport ? Transport[0].heading:'' || mine ? mining[0].heading : '' }</h1>
                <p
                className="text-gray-400"
                >{urban? UrbanDev[0].text : '' || transport ? Transport[0].text:'' || mine ? mining[0].text : '' }</p>
               </div>
            </div>

            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48 ">
            <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{urban? UrbanDev[1].heading : '' || transport ? Transport[1].heading:'' || mine ? mining[1].heading : '' }</h1>
                <p
                className="text-gray-400"
                >{urban? UrbanDev[1].text : '' || transport ? Transport[1].text:'' || mine ? mining[1].text : '' }</p>
               </div>

               <img src={urban? UrbanDev[1].image : '' || transport ? Transport[1].image:'' || mine ? mining[1].image : '' }  
               className="rounded-xl h-80 md:w-[480px] w-[100%] "
               />

              
            </div>
            <div className="flex-col flex md:flex-row md:gap-28 gap-10 justify-between mt-10 md:mx-48">
            <img src={urban? UrbanDev[2].image : '' || transport ? Transport[2].image:'' || mine ? mining[2].image : '' }  
               className="rounded-xl h-80 md:w-[480px] w-[100%]"
               />

            <div className="flex flex-col   gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">{urban? UrbanDev[2].heading : '' || transport ? Transport[2].heading:'' || mine ? mining[2].heading : '' }</h1>
                <p
                className="text-gray-400"
                >{urban? UrbanDev[2].text : '' || transport ? Transport[2].text:'' || mine ? mining[2].text : '' }</p>
               </div>
               
              

              
            </div>

            
            <div className="flex justify-center flex-col items-center font-semibold text-2xl mt-12">
                <h1>What we offer</h1>
            </div>

            <div className="flex-col flex md:flex-row justify-between mt-10 mx-48 translate-x-10
             items-center " >
                <div className=" flex  flex-col items-center  gap-3">
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