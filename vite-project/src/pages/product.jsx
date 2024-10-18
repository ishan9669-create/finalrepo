// import Footer from "../components/footer";
// import Industries from "../components/industries";

// export default function Product(){
//     return (
//         <div className="relative w-full h-[400px] bg-slate-400">
            
//         <img 
//         className="w-[100%] h-[430px]"
//         src="https://www.lg.com/my/press-release/attachment/LG-ThinQ-Smart-Home_01-768x381.jpg" />
//         <span className="absolute top-[180px] left-[500px] w-[700px]  font-semibold text-white text-3xl">Smart Products with Effective Solution</span>
        

//     <div className=" text-gray-600 mt-24 mx-48">
//         <p>
//         Airpix has developed products that are cost-effective and time convenient which cater to accurate results. Our products are always accessible and can sustain in harsh conditions. Hybrid VTOL & Cleaning Robots for wind turbines add many possibilities where many products fail. At Airpix we offer enterprise drone aerial mapping products that capture high-resolution three-dimensional terrain measurements with precision and accuracy. Our products and solution are vertically integrated to add value to the agriculture, utilities, construction, and energy industries. Airpix’s drone surveying service is a full end-to-end solution where Airpix’s licensed UAV pilots conduct the surveys, we process all the data in-house, and then delivers actionable data and media to our customers.

//         </p>    
//      </div>

   
    

//      <div>

//         <div className="flex gap-28 justify-between mt-10 mx-48">
//            <img src="https://cdn-focjb.nitrocdn.com/RzUKmdHdCIStbdZtPxHaJLNXjEKZQBeM/assets/images/optimized/rev-ce2e8e0/wingtra.com/wp-content/uploads/rotors-flaps.png"  
//            className="rounded-xl h-80 w-[480px]"
//            />

//            <div className="flex flex-col   gap-11 justify-center">
//             <h1 className="font-bold font-serif text-3xl">Hybrid VTOL for Surveying</h1>
//             <p
//             className="text-gray-400"
//             >Hybrid VTOLs are next-generation UAV drones. They combine the benefits of Multi-Rotor and efficiency of Planes while allowing us to transition between two modes during flight. The Airpix Drone is a Twin Rotor, tailsitter VTOL. Its ability to take off vertically allows it to operate from any location. Its fixed-wing design increases its flight time and helps in covering larger distances.
// While other conventional VTOLs need four motors to take off and land, Airpix’s Drone eliminates the need for carrying extra motors and weight. It also reduces the possibility of mechanical failures. Its ability to fly like a conventional plane and reduced weight increase its endurance. The Airpix Drone has a wide spectrum of applications, from surveying to surveillance.</p>
//            </div>
//         </div>

//         <div className="flex gap-28 justify-between mt-10 mx-48">
//         <div className="flex flex-col   gap-11 justify-center">
//             <h1 className="font-bold font-serif text-3xl">Cleaning Robot for Wind Turbines</h1>
//             <p
//             className="text-gray-400"
//             >With time dirt gets accumulated on the surface of wind turbine blades. Dirt covering blade affects its aerodynamic efficiency that results in a lower energy production rate. Due to this wind turbine needs to be cleaned at regular interval of time. Wind turbine cleaning and maintenance require cranes and personnel to service it. Cleaning of blades at heights near the hub and middle part of blades become difficult and risky. Drone technology has evolved in past years to overcome these shortcomings of cleaning, airpix has developed a robot that can clean wind turbine blades at an efficient rate.
// The robot carries a chassis of water ejecting at all sides of the blade surface. This chassis is carried by a robot that loops around the tower and goes upward with the help of actuators. The robot carries a water pipe with it that goes to the water ejector assembly. The whole system is supervised by a personnel on the ground.</p>
//            </div>

//            <img src="https://assets.newatlas.com/dims4/default/77702c5/2147483647/strip/true/crop/1500x1000+0+0/resize/1500x1000!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff9%2F3d%2Fc13f1b984b2899840898c38f9ff2%2Fbb.jpg"  
//            className="rounded-xl h-80 w-[480px]"
//            />

          
//         </div>
      

       

//      </div>


//      <Industries/>
//      <Footer/>
//     </div>
//     )
// }
import Footer from "../components/footer";
import Industries from "../components/industries";

export default function Product() {
  return (
    <div className="relative w-full ">
      {/* Image banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          className="w-full h-full object-cover"
          src="https://www.lg.com/my/press-release/attachment/LG-ThinQ-Smart-Home_01-768x381.jpg"
        />
        <span className="absolute top-[170px] md:top-[140px] lg:top-[180px] left-[10%] md:left-[20%] lg:left-[30%] w-[80%] md:w-[60%] lg:w-[40%] font-semibold text-white text-xl md:text-2xl lg:text-3xl text-center">
          Smart Products with Effective Solution
        </span>
      </div>

      {/* Description section */}
      <div className="text-gray-600 mt-8 mx-8 md:mx-16 lg:mx-48">
        <p className="text-sm md:text-base">
          Airpix has developed products that are cost-effective and time
          convenient which cater to accurate results. Our products are always
          accessible and can sustain in harsh conditions. Hybrid VTOL & Cleaning
          Robots for wind turbines add many possibilities where many products
          fail. At Airpix we offer enterprise drone aerial mapping products that
          capture high-resolution three-dimensional terrain measurements with
          precision and accuracy. Our products and solution are vertically
          integrated to add value to the agriculture, utilities, construction,
          and energy industries. Airpix’s drone surveying service is a full
          end-to-end solution where Airpix’s licensed UAV pilots conduct the
          surveys, we process all the data in-house, and then delivers
          actionable data and media to our customers.
        </p>
      </div>

      {/* Product Cards */}
      <div className="mt-10 space-y-10 lg:space-y-0 lg:flex lg:gap-28 lg:justify-between lg:mx-48">
        {/* Card 1 */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <img
            src="https://cdn-focjb.nitrocdn.com/RzUKmdHdCIStbdZtPxHaJLNXjEKZQBeM/assets/images/optimized/rev-ce2e8e0/wingtra.com/wp-content/uploads/rotors-flaps.png"
            className="rounded-xl w-full lg:w-[40%] h-60 lg:h-80 object-cover"
          />
          <div className="lg:w-[60%] flex flex-col gap-4">
            <h1 className="font-bold font-serif text-xl md:text-2xl lg:text-3xl">
              Hybrid VTOL for Surveying
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Hybrid VTOLs are next-generation UAV drones. They combine the
              benefits of Multi-Rotor and the efficiency of Planes while
              allowing us to transition between two modes during flight. The
              Airpix Drone is a Twin Rotor, tailsitter VTOL. Its ability to take
              off vertically allows it to operate from any location. Its
              fixed-wing design increases its flight time and helps in covering
              larger distances.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="lg:w-[60%] flex flex-col gap-4">
            <h1 className="font-bold font-serif text-xl md:text-2xl lg:text-3xl">
              Cleaning Robot for Wind Turbines
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              With time, dirt gets accumulated on the surface of wind turbine
              blades. This dirt affects the blade's aerodynamic efficiency,
              resulting in a lower energy production rate. Airpix has developed
              a robot that efficiently cleans wind turbine blades, using a
              water-ejecting chassis and an actuator-driven robot to handle the
              cleaning process.
            </p>
          </div>
          <img
            src="https://assets.newatlas.com/dims4/default/77702c5/2147483647/strip/true/crop/1500x1000+0+0/resize/1500x1000!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff9%2F3d%2Fc13f1b984b2899840898c38f9ff2%2Fbb.jpg"
            className="rounded-xl w-full lg:w-[40%] h-60 lg:h-80 object-cover"
          />
        </div>
      </div>

      {/* Footer and Industries */}
      <Industries />
      <Footer />
    </div>
  );
}
