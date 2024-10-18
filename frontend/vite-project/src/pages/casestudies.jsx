   import Footer from "../components/footer";
   import Industries from "../components/industries";
   import { Card } from "./home";

   export default function Case(){
      return (
         <div>
               <img 
               className="w-[100%] h-[460px]"
               src="https://asylonrobotics.com/wp-content/uploads/2022/05/Asylon-DroneDog-DroneSentry-GXO-Case-Study-600x403.png" />
               <span className="absolute top-[280px] left-[640px] font-semibold text-white text-5xl">Case Studies</span>

            
               <div className="flex-col flex md:flex-row items-center md:mx-48 mt-24 gap-7 justify-between ">
                  <Card image={'https://airpix.in/assets/images/case-studies/windturbines.jpg'}
                  Heading={'Wind turbine blade Inspection'} data={'Damage Detection of Wind Turbines'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/agricultire.jpg'}
                  Heading={'Alleviating Agriculture'} data={'Precision farming with infrared sensors'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/topographic_survey.jpg'}
                  Heading={'Drone Topographic Survey'} data={'Monitoring the topography using drone'}
                  />
               </div>
               <div className="flex-col flex md:flex-row items-center md:mx-48  gap-7 justify-between ">
                  <Card image={'https://airpix.in/assets/images/case-studies/canal_survey.jpg'}
                  Heading={'Railway Project Monitoring'} data={'Surveying a Rail route using drone'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/highway_greenfield.jpg'}
                  Heading={'Highway Green Field Alignment'} data={'Transforming Highways with drones'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/banas_flood.jpg'}
                  Heading={'Banas River Flood Survey'} data={'Terrain mapping for flood management'}
                  />
               </div>
               <div className="flex-col flex md:flex-row items-center md:mx-48 gap-7 justify-between ">
                  <Card image={'https://airpix.in/assets/images/case-studies/canal_survey.jpg'}
                  Heading={'Canal Survey of Nagpur'} data={'Aerial Site intelligence for canal surveying   '}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/bidkin.png'}
                  Heading={'Bidkin Land Survey'} data={'Drones offer innovative solutions'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/traffic_survey.jpg'}
                  Heading={'Traffic Survelliance'} data={'Allocation, site safety and traffic control.'}
                  />
               </div>
               <div className="flex-col flex md:flex-row items-center md:mx-48 gap-7 justify-between ">
                  <Card image={'https://airpix.in/assets/images/case-studies/solar_panel_inspection.jpg'}
                  Heading={'Wind turbine blade Inspection'} data={'Damage Detection of Wind Turbines'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/ACC.jpg'}
                  Heading={'Alleviating Agriculture'} data={'Precision farming with infrared sensors'}
                  />
                  <Card image={'https://airpix.in/assets/images/case-studies/nmia-aecom.jpg'}
                  Heading={'Drone Topographic Survey'} data={'Monitoring the topography using drone'}
                  />
               </div>

               <Industries/>

               <Footer/>
               
         </div>
      )
   }