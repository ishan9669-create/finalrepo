import { useEffect, useState } from "react";
import { TestimonialsCarousel } from "../components/testimonials";
import Industries from "../components/industries";
import Footer from "../components/footer";

 const ImageSlider = () => {
   
    const testimonials = [
        {
          image:'https://airpix.in/assets/images/drone_photography/banner/banner4.jpg'
        },
        {
          image:'https://airpix.in/assets/images/drone_photography/banner/banner1.jpg'
        },
        {
         image:'https://airpix.in/assets/images/drone_photography/banner/banner2.jpg'
        },
        {
          image:'https://airpix.in/assets/images/drone_photography/banner/banner3.jpg'
        },
        {
          image:'https://airpix.in/assets/images/drone_photography/banner/banner3.jpg'
        }
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative h-[540px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all  duration-500 ease-in-out "
        style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content and Text */}
      

      {/* Buttons */}
      <div className="absolute left-4 z-10">
        <img
        src="https://cdn3.iconfinder.com/data/icons/elements-of-geometry/154/arrow-left-geometry-256.png"
          onClick={prevImage}
          className="  rounded-full p-3 focus:outline-none translate-y-10 h-[50px] cursor-pointer hover:bg-black"
        />
        
      </div>
      <div className="absolute right-4 z-10">
        <img
        src="https://cdn3.iconfinder.com/data/icons/elements-of-geometry/154/arrow-right-geometry-256.png"
          onClick={nextImage}
          className="  rounded-full p-3 focus:outline-none  translate-y-10 h-[50px] cursor-pointer hover:bg-black"
       />
       
      </div>
    </div>
  );
};

export default function Aerial(){

    const [virtual,setVirtual] = useState(true);
    const [aerial,setAerial] = useState(false);
    const [video,setVideo] = useState(false);
    
    return (
        <div>
            <div>
                <ImageSlider/>

            </div>

            <div>
                <div className="flex justify-center font-semibold text-3xl mt-10">
                    <h1>Drone Photography in India</h1>
                </div>

                <div className="mx-48 mt-10 text-slate-500">
                    <p>Airpix provides drone photography, aerial photography. Drones offers 360 degree photography and image processing technology to help clients market their products better, communicate their value proposition and achieve higher prices. We provide drone with camara and we are pioneers to introduce the concept of drone photography to the Mumbai real estate and how it can be used to get higher prices for flats with better views by capturing view from the flat even before the beginning of the real estate construction.</p>


                    <p className="mt-3">We have worked with all the leading real estate projects of Mumbai such as Omkar 1973, Lodha World Towers, Piramal Aranya, Lodha The Park, Trump Towers, Piramal Revanta, Shapoorji Pallonji Imperial Towers, K Raheja Vivarea and many more. Our aerial photography in india and aerial virtual tours help capturing the views in every direction during day, evening and night. It also helps show the connectivity of the site with essential ammenities depending on target market.

                    </p>
                </div>

                <div className="flex-col flex md:flex-row  justify-evenly mx-48 mt-10">
                    <button
                    onClick={()=>{
                        setVirtual(true)
                        setVideo(false)
                        setAerial(false)
                    }}
                    className={`px-3 py-2
                    ${virtual==true ? "bg-blue-500 text-white":"bg-blue-900"}
                     text-white rounded-lg`}>Virtual Tour</button>

                    <button
                    onClick={()=>{
                        setVirtual(false)
                        setVideo(false)
                        setAerial(true)
                    }}
                    className={`px-3 py-2
                        ${aerial==true ? "bg-blue-500 text-white":"bg-blue-900"}
                         text-white rounded-lg`}>Aerial Photography</button>
                    <button
                    onClick={()=>{
                        setVirtual(false)
                        setVideo(true)
                        setAerial(false)
                    }}
                    className={`px-3 py-2
                        ${video==true ? "bg-blue-500 text-white":"  bg-blue-900"}
                         text-white rounded-lg`}>Drone Video</button>
                </div>
            </div>

          {virtual==true ?  <VirtualTour/>:""} 
          
          {aerial==true ?  <AerialPhoto/>:""}
          
          {video==true ? <DroneVideo/>:""}  

          <Industries/>
          <Footer/>
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
// function DroneVideo(){
//   return (
//     <div className="bg-slate-100">
//         <div className="flex justify-center text-3xl font-semibold mt-10" >
//           <h1 className="mt-10">Aerial Cinematography</h1>
//         </div>

        
//           <p className="mx-48 text-slate-500 mt-10">
//           Our experienced drone pilots work with a range of professional drone systems such as DJI Phantom series, DJI Inspire, DJI Matrice with Canon and other professional cameras. Be it advertising, documentaries, feature films, corporate reels, or events – we get it right for you always!
//           Our editors also help you redefine the videos with special effects, color corrections, voice overs and any information overlay
//           </p>

//           <div className="mt-12 mx-48 flex gap-[40px] justify-center ">
//             <iframe src="https://www.youtube.com/embed/yK1c8qA_ivY" className="rounded-2xl"
//             height={'300px'} width={'400px'}
//             />
//             <iframe src="https://www.youtube.com/embed/2jdNrXRpY2o" className="rounded-2xl"
//             height={'300px'} width={'400px'}
//             />
//           </div>
//           <div className="mt-10 mx-48 flex gap-[40px] justify-center ">
//             <iframe src="https://youtube.com/embed/OlKiDGYt6UI" className="rounded-2xl"
//             height={'300px'} width={'400px'}
//             />
//             <iframe src="https://www.youtube.com/embed/lC--KxBlBBQ" className="rounded-2xl"
//             height={'300px'} width={'400px'}
//             />
//           </div>
//           <div className="mt-10 mx-48 flex gap-[40px] justify-center ">
//             <iframe src="https://www.youtube.com/embed/CVEZxmI24Ow" className="rounded-2xl"
//             height={'300px'} width={'400px'}
//             />
//             <iframe src="https://www.youtube.com/embed/PqirVie0i9A" className="rounded-2xl"
//             height={'300px'} width={'400px'}
//             />
//           </div>
        
//     </div>

//   )
// }
function DroneVideo(){
  return (
    <div className="bg-slate-100 py-10">
        <div className="flex justify-center text-2xl lg:text-3xl font-semibold mt-4 lg:mt-10" >
          <h1>Aerial Cinematography</h1>
        </div>

        <p className="mx-4 md:mx-16 lg:mx-48 text-slate-500 mt-6 lg:mt-10 text-center">
          Our experienced drone pilots work with a range of professional drone systems such as DJI Phantom series, DJI Inspire, DJI Matrice with Canon and other professional cameras. Be it advertising, documentaries, feature films, corporate reels, or events – we get it right for you always! Our editors also help you redefine the videos with special effects, color corrections, voice overs, and any information overlay.
        </p>

        <div className="mt-8 lg:mt-12 flex flex-wrap justify-center gap-4 lg:gap-8 mx-4 md:mx-16 lg:mx-48">
          <iframe 
            src="https://www.youtube.com/embed/yK1c8qA_ivY"
            className="rounded-2xl"
            height="200px"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
          <iframe 
            src="https://www.youtube.com/embed/2jdNrXRpY2o"
            className="rounded-2xl"
            height="200px"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-8 mx-4 md:mx-16 lg:mx-48">
          <iframe 
            src="https://youtube.com/embed/OlKiDGYt6UI"
            className="rounded-2xl"
            height="200px"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
          <iframe 
            src="https://www.youtube.com/embed/lC--KxBlBBQ"
            className="rounded-2xl"
            height="200px"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-8 mx-4 md:mx-16 lg:mx-48">
          <iframe 
            src="https://www.youtube.com/embed/CVEZxmI24Ow"
            className="rounded-2xl"
            height="200px"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
          <iframe 
            src="https://www.youtube.com/embed/PqirVie0i9A"
            className="rounded-2xl"
            height="200px"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
        </div>
    </div>
  )
}

export function AerialPhoto() {
  return (
    <div className="mt-10 bg-slate-100 py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:mx-48 mx-4">
        {/* Carousel Section */}
        <div className="w-full lg:w-1/2">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>

        {/* Text Content Section */}
        <div className="flex w-full lg:w-1/2 flex-col gap-5 justify-center items-center">
          <h1 className="font-semibold text-2xl lg:text-3xl text-center lg:text-left">
            Drone Photography in India
          </h1>
          <p className="text-slate-500 text-center lg:text-left">
            Airpix helps you capture breathtaking aerial photographs using a fleet of professional drone systems and experienced drone pilots. Our photographers understand your requirements to take photographs depending on the end requirement such as real estate photography, industrial plant photography, resorts, and for tourism promotion. We also have in-house experts to carry out the required post-processing to edit the photographs.
          </p>
          <p className="text-slate-500 text-center lg:text-left">
            If you require any stock photographs from our inventory, do contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

function VirtualTour() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <div className="mt-10 bg-slate-100">
      {/* Section with Testimonials and Text */}
      <div className="flex flex-col lg:flex-row mt-4 lg:mx-48 mx-4 gap-8">
        <div className="lg:w-1/2 w-full">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
        <div className="flex w-full lg:w-1/2 flex-col gap-5 justify-center items-center">
          <h1 className="font-semibold text-2xl lg:text-3xl text-center lg:text-left">
            Virtual Reality Aerial View
          </h1>
          <p className="text-slate-500 text-center lg:text-left px-4 lg:px-0">
            Using drone photography, we capture and integrate high-resolution spherical panoramas with vital infographics to give the user an interactive and informative aerial tour around a location. These tours make it possible for a user to experience a location anytime, anyplace on digital platforms like PCs, tablets, or mobile phones. We take extreme care to configure the 360 virtual tour for the final application in order to present the location in the best possible way.
          </p>
        </div>
      </div>

      {/* Aerial 360 Tours Heading */}
      <div className="flex justify-center text-2xl lg:text-3xl text-blue-900 font-semibold mt-8">
        <h1>Aerial 360 Tours</h1>
      </div>

      {/* Image Grid Section */}
      <div className="flex flex-col md:flex-row mx-4 lg:mx-48 mt-10 justify-evenly gap-8 p-4">
        {/* First Image */}
        <div
          onMouseOver={() => setFirst(true)}
          onMouseLeave={() => setFirst(false)}
          className="relative w-full md:w-[360px] h-[250px] lg:h-[300px] flex justify-center items-center"
        >
          <img
            src="https://airpix.in/assets/virtual_tour/t01.jpg"
            className="w-full h-full object-cover rounded cursor-pointer"
            alt="Bangalore Virtual Tour"
          />
          {first && (
            <h1 className="absolute bottom-[100px] lg:bottom-[150px] tracking-widest text-white text-xl lg:text-2xl font-bold animate-textUp">
              BANGALORE VIRTUAL TOUR
            </h1>
          )}
        </div>

        {/* Second Image */}
        <div
          onMouseOver={() => setSecond(true)}
          onMouseLeave={() => setSecond(false)}
          className="relative w-full md:w-[360px] h-[250px] lg:h-[300px] flex justify-center items-center"
        >
          <img
            src="https://airpix.in/assets/virtual_tour/t02.jpg"
            className="w-full h-full object-cover rounded cursor-pointer"
            alt="Powai Virtual Tour"
          />
          {second && (
            <h1 className="absolute bottom-[100px] lg:bottom-[150px] tracking-widest text-white text-xl lg:text-2xl font-bold animate-textUp">
              POWAI VIRTUAL TOUR
            </h1>
          )}
        </div>

        {/* Third Image */}
        <div
          onMouseOver={() => setThird(true)}
          onMouseLeave={() => setThird(false)}
          className="relative w-full md:w-[360px] h-[250px] lg:h-[300px] flex justify-center items-center"
        >
          <img
            src="https://airpix.in/assets/virtual_tour/t04.jpg"
            className="w-full h-full object-cover rounded cursor-pointer"
            alt="Dadar Virtual Tour"
          />
          {third && (
            <h1 className="absolute bottom-[100px] lg:bottom-[150px] tracking-widest text-white text-xl lg:text-2xl font-bold animate-textUp">
              DADAR VIRTUAL TOUR
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
