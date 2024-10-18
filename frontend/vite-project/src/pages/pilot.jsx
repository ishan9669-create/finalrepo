import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Industries from "../components/industries";
 const ImageSlider = () => {
    const images = [
        {
          url: "https://airpix.in/assets/images/pilots/banner-1.png",
         
        },
        {
          url: "https://airpix.in/assets/images/pilots/banner-2.png",
          
        },
        
      ];
      
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all  duration-500 ease-in-out "
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      ></div>

    
      {/* Buttons */}
      <div className="absolute left-4 z-10">
        <button
          onClick={prevImage}
          className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 focus:outline-none"
        >
          Prev
        </button>
      </div>
      <div className="absolute right-4 z-10">
        <button
          onClick={nextImage}
          className="text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};
// export default function Pilot(){

 
       
      
          
//     return (
//         <div>
//             <div className="h-[800px] ">
//                 {/* <img src="https://airpix.in/assets/images/pilots/banner-1.png" 
//                   className="w-full h-[730px] relative"/> */}
//                   <ImageSlider/>

//                   <h1 className="absolute text-4xl bottom-[400px] left-[600px] text-white font-semibold ">Become a Drone Pilot</h1>
//                   <p className="absolute bottom-[350px] left-[690px] text-lg text-white">start a career in flying</p>

//                   <button 
//                   onClick={()=>{
//                     window.location.href = '/pilotregister'
//                   }}
//                   className="px-4 bottom-[290px] left-[710px] rounded-lg transition-all duration-300 hover:bg-blue-500 py-2 absolute bg-blue-950 text-white">Register Here</button>
//             </div>

//             <div className="h-[250px] bg-slate-100 p-8">
//                 <h1 className="flex justify-center text-3xl text-blue-900  font-semibold" >
//                     What is Drone Pilots Portal ?
//                 </h1>

//                 <div className="mx-48 mt-4" >
//                   <p>For all the drone pilots out there and the one's who are planning to start a career in flying we have created this portal for you so that we can provide you with drone training with all industries know how to operate your drone for video shooting , photography and various industrial applications that drones are being used for.This way you can do more business by flying your drone and using your equipment's optimally.</p>
//                 </div>
//                 <div className="mx-48 mt-4" >
//                   <p>
//                   Please register yourself and provide us with all your equipment & camera details after which our team will be getting in touch with you for further quality check & training so that we can share more business opportunities with you. See you soon!</p>
//                 </div>
//             </div>

//             <div className="mx-48 p-8">
//                 <h1 className="flex justify-center text-3xl text-blue-900 font-semibold">How it Works</h1>

//                 <div className="flex justify-between items-center p-3">
//                     <div className="flex flex-col items-center">
//                         <img src="https://airpix.in/assets/images/pilots/register.png" />
//                         <span>REGISTER</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="https://airpix.in/assets/images/pilots/contact.png" />
//                     <span>CONTACT FOR WORK</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="https://airpix.in/assets/images/pilots/drone.png" />
//                     <span>FLY YOUR DRONE</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="https://airpix.in/assets/images/pilots/getpaid.png" />
//                     <span>GET PAID</span>
//                     </div>
//                 </div>
//             </div>
// 7
//             <div className=" p-7 bg-slate-100">
//                 <h1 className="flex justify-center text-3xl font-semibold">Why Join</h1>
                   

//                    <p className="mt-7 mx-48">AIRPIX is a leading drone solutions provider in India. The services provided by AIRPIX include - aerial UAV industrial inspections, aerial survey for GIS, agriculture and mining, drone photography for the real estate, aerial photography & video shooting for media & production houses. Our systems and expertise in both multi-rotor and fixed wing UAVs helps us complete challenging tasks. With our reach in Industry we can help you with you get contracts on regular basis.While we take care of techical and sales aspect you can focus on data collection and optimise your schedule and make most out of your skillset and equipment.</p>
//             </div>

//             <div className="p-8 bg-slate-200">
//                 <h1 className="flex justify-center text-3xl font-semibold">What to register as a pilot?</h1>

//                 <div className="mt-8 flex justify-center">
//                 <button
//                 onClick={()=>{
//                     window.location.href='/pilotregister'
//                 }}
//                 className="px-4 py-3 hover:bg-white
//                 hover:text-blue-900 hover:border-black  border transition-all duration-300 rounded-lg text-white bg-blue-950">REGISTRATION  FORM</button>
//                 </div>
//             </div>

//              <Industries/>
//              <Footer/>
//         </div>
//     )
// }
export default function Pilot() {
  return (
      <div>
          <div className="relative h-[800px]">
              {/* Image slider or image background */}
              {/* <img src="https://airpix.in/assets/images/pilots/banner-1.png" 
                  className="w-full h-[730px] relative"/> */}
              <ImageSlider />

              <h1 className="absolute text-3xl sm:text-4xl bottom-[40%] sm:bottom-[50%] left-1/2 transform -translate-x-1/2 text-center text-white font-semibold">
                  Become a Drone Pilot
              </h1>
              <p className="absolute text-sm sm:text-lg bottom-[35%] left-1/2 transform -translate-x-1/2 text-center text-white">
                  Start a career in flying
              </p>

              <button
                  onClick={() => {
                      window.location.href = '/pilotregister';
                  }}
                  className="px-4 py-2 absolute bottom-[30%] left-1/2 transform -translate-x-1/2 rounded-lg bg-blue-950 text-white transition-all duration-300 hover:bg-blue-500"
              >
                  Register Here
              </button>
          </div>

          <div className="h-auto bg-slate-100 p-8">
              <h1 className="text-center text-2xl sm:text-3xl text-blue-900 font-semibold">
                  What is Drone Pilots Portal?
              </h1>

              <div className="max-w-4xl mx-auto mt-4 text-justify">
                  <p>
                      For all the drone pilots out there and the ones who are planning to start a career in flying, we have created this portal for you. We provide drone training with industry know-how to operate your drone for video shooting, photography, and various industrial applications. This way, you can do more business by flying your drone and using your equipment optimally.
                  </p>
                  <p className="mt-4">
                      Please register yourself and provide us with all your equipment and camera details. Our team will get in touch with you for further quality checks and training, after which we will share more business opportunities with you. See you soon!
                  </p>
              </div>
          </div>

          <div className="max-w-4xl mx-auto p-8">
              <h1 className="text-center text-2xl sm:text-3xl text-blue-900 font-semibold">How it Works</h1>

              <div className="flex flex-col sm:flex-row justify-between items-center p-3 space-y-6 sm:space-y-0 sm:space-x-4">
                  <div className="flex flex-col items-center">
                      <img src="https://airpix.in/assets/images/pilots/register.png" alt="Register" />
                      <span className="mt-2 text-center">REGISTER</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <img src="https://airpix.in/assets/images/pilots/contact.png" alt="Contact for Work" />
                      <span className="mt-2 text-center">CONTACT FOR WORK</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <img src="https://airpix.in/assets/images/pilots/drone.png" alt="Fly Drone" />
                      <span className="mt-2 text-center">FLY YOUR DRONE</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <img src="https://airpix.in/assets/images/pilots/getpaid.png" alt="Get Paid" />
                      <span className="mt-2 text-center">GET PAID</span>
                  </div>
              </div>
          </div>

          <div className="p-7 bg-slate-100">
              <h1 className="text-center text-2xl sm:text-3xl font-semibold">Why Join</h1>

              <p className="mt-7 max-w-4xl mx-auto text-justify">
                  AIRPIX is a leading drone solutions provider in India. The services provided by AIRPIX include aerial UAV industrial inspections, aerial survey for GIS, agriculture and mining, drone photography for the real estate, aerial photography & video shooting for media & production houses. Our systems and expertise in both multi-rotor and fixed-wing UAVs help us complete challenging tasks. With our industry reach, we can help you get contracts regularly. We handle the technical and sales aspects, while you focus on data collection and optimizing your schedule to make the most of your skill set and equipment.
              </p>
          </div>

          <div className="p-8 bg-slate-200">
              <h1 className="text-center text-2xl sm:text-3xl font-semibold">Want to register as a pilot?</h1>

              <div className="mt-8 flex justify-center">
                  <button
                      onClick={() => {
                          window.location.href = '/pilotregister';
                      }}
                      className="px-4 py-3 hover:bg-white hover:text-blue-900 hover:border-black border transition-all duration-300 rounded-lg text-white bg-blue-950"
                  >
                      REGISTRATION FORM
                  </button>
              </div>
          </div>

          <Industries />
          <Footer />
      </div>
  );
}

