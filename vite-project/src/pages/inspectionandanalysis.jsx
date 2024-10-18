import Footer from "../components/footer";
import Industries from "../components/industries";
import { TestimonialsCarousel } from "../components/testimonials"


export default function Inspection(){
    return (
        <div>
            <div className="w-full h-[550px] relative">
            <img src="
            https://airpix.in/assets/images/uav-inspection-and-monitoring/banner_inspection_monitoring.jpg" className="h-full w-[100%] "/>
             
             <h1 className="  text-4xl bottom-[300px] absolute font-semibold text-white left-[580px]">Drone Inspection Services</h1>
             <p className=" absolute text-2xl text-white bottom-[200px] left-[450px] text-center font-semibold max-w-[700px]">(Wind Turbine Inspection , Tranmission tower inspection , Flare stack inpsection , Solar Panel Inspection )</p>
            </div>

            <div>
                <div className="flex justify-center text-2xl font-semibold mt-10">
                    <h1>Inspection and Analysis</h1>
                </div>
                <div className="text-slate-500 mx-48 mt-10">
                    <p>
                    AIRPIX provides detailed and quick drone inspection for critical asset infrastructure. Our fleet of drones and drone pilots across the country can be deployed on a short notice. We have inspected more than 400 wind turbine blades, about 300km transmission line and many flare stacks, chimneys and pipelines for oil and gas industry. Drone Inspection is carried out by both RGB and thermal sensors to detect visual defects and damages proving to be one of the fastest means of non-destructive testing of critical assets. RGB sensors include high resolution zoom cameras and thermal sensors include Flir 336, Flir 640, XT2 and more.
                    </p>

                    <p className="mt-6">
                    The inspected data is then collated and an autonomous report is generated giving details on defect wise distribution, level of severity and asset wise information. Clients get access to our cloud based platform to review the entire report and a summary is available on easy to interpret dashboard. The images of the defects observed are linked with the respective assets and the entire report can be downloaded, shared with collaeagues & contractors and actions taken can be recorded.
                    </p>

                    <p className="mt-6"> 
                    In certain cases, we have helped our clients achieve upto 4x faster inspection compared to their old conventional methods, helped them reduce the critical asset downtime and avoid risk to human life.
                    </p>

                    <p className="mt-7">
                    We carefully do planning by reviewing area where the survey has to be drone, the drone flies over the area collects data. An analysis is then perofrmed on the inspection done. Various insights can be drawn and defects can thereby be rectified effeciently.
                    </p>
                </div>

                <div className="mt-10 flex justify-center gap-[100px]">
                    <img src="https://airpix.in/assets/images/uav-inspection-and-monitoring/Process1.png" alt="" />
                    <img src="https://airpix.in/assets/images/uav-inspection-and-monitoring/Process2.png" alt="" />
                    <img src="https://airpix.in/assets/images/uav-inspection-and-monitoring/Process3.png" alt="" />
                    <img src="https://airpix.in/assets/images/uav-inspection-and-monitoring/Process4.png" alt="" />
                </div>

                <div className="mt-10">
                    <h1 className="flex justify-center text-3xl font-semibold">Inspection And Monitoring Application</h1>

                    <AerialPhoto/>
                     

                    <div className="flex gap-28 justify-between mt-10 mx-48">

                    <div className="flex flex-col mx-40  gap-11 justify-center">
                <h1 className="font-bold font-serif text-3xl">Drone Videos</h1>
                <p
                className="text-gray-400"
                >Drone videos help in taking a quick overview of assets and for plant area surveillance. Drone videos can also be of critical help during major plant shutdown wherein it can help to monitor and coordinate the entire activity in order to avoid bottlenecks, improve safety and avoid hazards & accidents. Our drone video platform helps easy uploading, editing, tagging critical information and colllaborating with teams.</p>
               </div>
               <iframe src="https://www.youtube.com/embed/SLO0eyThots"  
               className="w-[580px] h-[200px]"
              
               />

               
            </div>

                </div>

            </div>
            <Industries/>
            <Footer/>


           
        </div>
    )
}
 function AerialPhoto(){
    return (
      <div className="mt-10 ">
 <div className="mt-4 mx-48 flex ">
                <TestimonialsCarousel testimonials={testimonials}/>

                <div className="flex  w-[500px] mt-10
                 flex-col gap-5 justify-center items-center">
                    <h1 className="font-semibold text-3xl">Drone Images</h1>
                    <p className="text-slate-500">High resolution drone Images of inaccessible areas of critical assets are captured using high endurance drones by professional drone pilots. The RGB + Thermal data helps clients to analyze asset health in operational and in under load conditions. Our drone inspection services include wind turbine inspection, transmission tower inspection, oil & gas inspection and solar panel inspection

                  
                    </p>
                    <p className="text-slate-500">  If you require any stock photographs from our inventory then, do contact us</p>
                </div>
            </div>
      </div>
     
    )
  }
const testimonials = [
    {
      image:'https://airpix.in/assets/images/drone_photography/virtualtour2.jpg'
    },
    {
      image:'https://airpix.in/assets/images/drone_photography/virtualtour1.jpg'
    },
    
  ];
