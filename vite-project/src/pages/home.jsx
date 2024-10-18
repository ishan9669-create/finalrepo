import React, { useEffect, useState } from "react";
import Industries from "../components/industries";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

// Define your images in an array

export const ImageSlider = () => {
    const images = [
        {
          url: "https://www.edinburghdronecompany.co.uk/wp-content/uploads/2021/02/P4RTK-Scene-Pic-3.jpg",
          text: "Drone Survey in India",
          additionaltext:'Perform fast and cost-effective drone survey and topographic land surveying'
        },
        {
          url: "https://www.flyability.com/hs-fs/hubfs/wind-turbine-inspection-flyability-2.jpg?width=1269&height=846&name=wind-turbine-inspection-flyability-2.jpg",
          text: "Wind turbine inspections and Monitoring",
          additionaltext:'Safe and fast inspection services and factual reporting of Wind Turbines'
        },
        {
          url: "https://kissflow.com/hubfs/best-project-management-software-1.jpg",
          text: "Project Monitoring Application",
          additionaltext:'Tag & track objects, insert data, locate data interactively and collaborate with teams for better project progress monitoring with drone data'
        },
        {
            url: "https://absolutesolar.com/wp-content/uploads/2021/02/solar-panel-inspection.jpeg",
            text: "Solar Panel Inspection",
            additionaltext:'Precautionary Measures Before Failure'
        },
        {
            url: "https://agfundernews.com/wp-content/uploads/2019/05/iStock-898449496-768x512.jpg",
            text: "Precision Agriculture",
            additionaltext:'Site Specific crop Management'
        },
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

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content and Text */}
      <div className="relative z-10 text-white text-center px-6 py-4">
        <h1 className="text-4xl font-bold mb-4">{images[currentIndex].text}</h1>
        <p className="text-lg">{images[currentIndex].additionaltext}</p>
      </div>

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

export const Card = ({ jumpto, Heading, data, image }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
      <img src={image} className="w-full h-auto rounded-lg" alt={Heading} />
      <h2 className="text-xl font-bold mt-4">{Heading}</h2>
      <p className="text-sm text-gray-700 text-center">{data}</p>
      { (
        <Link to={jumpto} className="mt-2 text-blue-600">
          Learn More
        </Link>
      )}
      </div>
  )
}   


// export function Card({ Heading, data, image, jumpto }) {
//   return (
//     <div
//       className="sm:h-[300px] sm:w-[350px] w-full rounded-t-lg hover:shadow-2xl transition-all"
//       style={{ transitionDuration: '0.4s' }}
//     >
//       <img
//         src={image}
//         className="rounded-t-lg sm:h-[200px] h-[150px] w-full object-cover"
//         alt="Card image"
//       />

//       <div className="p-5 bg-white rounded-b-lg shadow-md">
//         <h1 className="text-2xl text-blue-700 sm:w-[330px] w-full">
//           {Heading}
//         </h1>

//         <p className="text-sm sm:text-base mt-2">
//           {data}
//         </p>

//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => {
//               window.location.href = jumpto;
//             }}
//             className="px-3 bg-blue-950 text-white py-1 rounded-md hover:bg-blue-600"
//           >
//             Know More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



const testimonials = [
  {
    image:'https://upload.wikimedia.org/wikipedia/commons/e/e3/NDTV_logo_v2.png?20201121045520'
  },
  {
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Apple_gray_logo.png/900px-Apple_gray_logo.png?20121106103121'
  },
  {
   image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png?20160213081640'
  },
  {
    image:'https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png'
  },
  {
    image:'https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png'
  }
];



const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [testimonials.length]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <div className="relative w-full max-w-xl">
        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div
            className="testimonial-wrapper flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full p-4 sm:p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={testimonial.image}
                  className="h-[150px] sm:h-[200px] w-auto mb-4"
                  alt={testimonial.name}
                />
                <p className="text-lg italic text-gray-700 text-center">
                  "{testimonial.feedback}"
                </p>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};






// export default function Home() {
//   return (
//     <div className="relative w-full h-[400px] bg-slate-400">
//       {/* <img 
//         className="w-full h-[430px]"
//         src="https://crucialservices.net/wp-content/uploads/2022/09/sunny-evening-view-from-drone-towards-breiddon-hill.jpg" />
//         <span className="absolute top-[210px] left-[550px] font-semibold text-white text-5xl">Drone survey in India</span> */}
//       <ImageSlider />

//       <div className="flex justify-center text-3xl font-semibold mt-10">
//         <h1>About Us</h1>
//       </div>
//       <div className="text-gray-600 mt-10 sm:mx-12 lg:mx-48 px-5 lg:px-0">
//         <p>
//           AIRPIX is a team of engineers, drone pilots, GIS experts, and software
//           developers that has delivered numerous drone solutions in India. We
//           provide complete end-to-end solutions for our clients from drone data
//           acquisition, drone data processing, analysis, and development or
//           integration of web and mobile applications. With access to a fleet of
//           drones and a network of drone pilots across India, we can mobilize
//           teams and deliver projects in a short period. Our systems include both
//           fixed-wing and multi-rotor UAVs carrying payloads such as
//           high-resolution cameras, thermal cameras, NIR sensors, high zoom
//           cameras, and multi-spectral sensors. Our drone services include drone
//           survey and mapping, photogrammetry data processing, 3D model
//           generation, drone inspection, GIS, and automated report generation.
//           Our web-based drone data management platform helps you to host, view,
//           share and collaborate over drone data such as orthophoto, contours,
//           DEM, and drone videos thus helping companies and government bodies in
//           infrastructure planning, project progress monitoring, and critical
//           asset management. We are one of the prime drone companies in India.
//         </p>
//       </div>

//       <div className="mt-10 bg-gray-200 pb-10">
//         <h1 className="flex justify-center text-2xl font-semibold mt-10">
//           Our Services (Contour Survey)
//         </h1>

//         <div id="overlap" className="flex flex-wrap gap-10 mt-7 sm:mx-10 lg:mx-48 justify-evenly">
//           <Card
//             jumpto={"/"}
//             Heading={"Surveying And Mapping"}
//             data={
//               "Drone surveyor using fixed-wing and multi-rotor drones to generate high resolution and accurate orthophoto, DTM, contour, NDVI for multiple industries and applications."
//             }
//             image={
//               "https://carrollengineering.com/wp-content/uploads/2019/06/Topographic_Map-618066732_size.jpg"
//             }
//           />
//           <Card
//             Heading={"Inspection And Analysis"}
//             data={
//               "Drone inspection of critical assets such as wind turbines, solar panels, transmission towers & transmission lines, chimneys and flare stacks using high resolution RGB and thermal cameras."
//             }
//             image={
//               "https://www.tekwellservices.com/wp-content/uploads/2021/11/overhead-crane-inspection-knoxville-atlanta.jpg"
//             }
//           />
//           <Card
//             Heading={"Data Processing"}
//             data={
//               "We can assist and support you in drone data processing to generate outputs such as orthophoto, Digital Terrain Model (DTM), contour, 3D model, point cloud processing and GIS."
//             }
//             image={"https://cdn.imago-images.com/bild/st/0708701529/m.jpg"}
//           />
//         </div>

//         <div className="flex flex-wrap mt-10 sm:mx-10 lg:mx-48 justify-evenly">
//           <Card
//             jumpto={"/aerialphoto"}
//             Heading={"Aerial Photography"}
//             data={
//               "Professional aerial photography for your real estate, resort or any marketing promotion along with aerial 360 degree panorama, virtual tour and large hoarding size imagery."
//             }
//             image={
//               "https://www.photopilot.com/media/images/San_Diego_3A5RGcc.0ec3cdf0.fill-900x600.jpg"
//             }
//           />
//           <Card
//             Heading={"Project Monitoring"}
//             data={
//               "Project progress monitoring of large infrastructure projects such as railways, roads, highways, industrial corporation and more using drone survey and drone videos with volumetric calculations and geotagged videos."
//             }
//             image={"https://airpix.in/assets/images/case-studies/topographic_survey.jpg"}
//           />
//           <Card
//             Heading={"Drone Video"}
//             data={
//               "Periodic drone videos for project progress monitoring, reporting and collaboration to reduce project costs and improve project timelines. Professional drone video services for marketing your infrastructure or real estate projects."
//             }
//             image={
//               "https://cdn.thewirecutter.com/wp-content/media/2023/11/dronesforphotovideo-2048px-DSC4828.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
//             }
//           />
//         </div>
//       </div>

//       <div>
//         <div className="flex justify-center font-semibold text-2xl mt-10">
//           <h1>Associations and Partners</h1>
//         </div>

//         <div className="flex flex-wrap items-center justify-around mx-5 sm:mx-20 lg:mx-40 mt-8 gap-5">
//           <img
//             src="https://cdnbbsr.s3waas.gov.in/s312b1e42dc0746f22cf361267de07073f/uploads/2023/07/2023071196.jpg"
//             className="h-[100px] sm:h-[150px] lg:h-[200px]"
//           />
//           <img
//             src="https://cdn1.vc4a.com/media/2018/11/AIRBUS.jpg"
//             className="h-[100px] sm:h-[150px] lg:h-[200px]"
//           />
//           <img
//             src="https://media.licdn.com/dms/image/D5612AQEfaoOAXPaerA/article-cover_image-shrink_600_2000/0/1693850337611?e=2147483647&v=beta&t=hIR9tY4fBRjqj1bvrlDQJdyyY2EQBAar3zssDEu73c8"
//             className="h-[70px] sm:h-[100px] lg:h-[150px]"
//           />
//           <img
//             src="https://unicorn-nest.com/wp-content/uploads/2021/11/Axilor-Ventures.jpg"
//             className="h-[80px] sm:h-[110px] lg:h-[150px]"
//           />
//           <img
//             src="https://lobbymap.org/site//data/001/361/1361973.png"
//             className="h-[100px] sm:h-[130px] lg:h-[170px]"
//           />
//         </div>
//       </div>

//       <div className="bg-gray-200">
//         <div className="flex justify-center font-semibold text-3xl mt-10">
//           <h1>Our clients</h1>
//         </div>

//         <div className="mt-5">
//           <TestimonialsCarousel testimonials={testimonials}/>
//         </div>
//       </div>

//       <Industries />
//       <Footer />
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="relative w-full h-[400px] bg-slate-400">
      <ImageSlider />

      <div className="flex justify-center text-3xl font-semibold mt-10">
        <h1>About Us</h1>
      </div>
      <div className="text-gray-600 mt-10 sm:mx-12 lg:mx-48 px-5 lg:px-0">
        <p>
          AIRPIX is a team of engineers, drone pilots, GIS experts, and software
          developers that has delivered numerous drone solutions in India. We
          provide complete end-to-end solutions for our clients from drone data
          acquisition, drone data processing, analysis, and development or
          integration of web and mobile applications. With access to a fleet of
          drones and a network of drone pilots across India, we can mobilize
          teams and deliver projects in a short period. Our systems include both
          fixed-wing and multi-rotor UAVs carrying payloads such as
          high-resolution cameras, thermal cameras, NIR sensors, high zoom
          cameras, and multi-spectral sensors. Our drone services include drone
          survey and mapping, photogrammetry data processing, 3D model
          generation, drone inspection, GIS, and automated report generation.
          Our web-based drone data management platform helps you to host, view,
          share and collaborate over drone data such as orthophoto, contours,
          DEM, and drone videos thus helping companies and government bodies in
          infrastructure planning, project progress monitoring, and critical
          asset management. We are one of the prime drone companies in India.
        </p>
      </div>

      <div className="mt-10 bg-gray-200 pb-10">
        <h1 className="flex justify-center text-2xl font-semibold mt-10">
          Our Services (Contour Survey)
        </h1>

        <div className="flex flex-wrap gap-10 mt-7 sm:mx-10 lg:mx-48 justify-center">
          {/* First Set of Cards */}
          <Card
            jumpto={"/"}
            Heading={"Surveying And Mapping"}
            data={
              "Drone surveyor using fixed-wing and multi-rotor drones to generate high resolution and accurate orthophoto, DTM, contour, NDVI for multiple industries and applications."
            }
            image={
              "https://carrollengineering.com/wp-content/uploads/2019/06/Topographic_Map-618066732_size.jpg"
            }
          />
          <Card
            Heading={"Inspection And Analysis"}
            data={
              "Drone inspection of critical assets such as wind turbines, solar panels, transmission towers & transmission lines, chimneys and flare stacks using high resolution RGB and thermal cameras."
            }
            image={
              "https://www.tekwellservices.com/wp-content/uploads/2021/11/overhead-crane-inspection-knoxville-atlanta.jpg"
            }
          />
          <Card
            Heading={"Data Processing"}
            data={
              "We can assist and support you in drone data processing to generate outputs such as orthophoto, Digital Terrain Model (DTM), contour, 3D model, point cloud processing and GIS."
            }
            image={"https://cdn.imago-images.com/bild/st/0708701529/m.jpg"}
          />
        </div>

        <div className="flex flex-wrap gap-10 mt-10 sm:mx-10 lg:mx-48 justify-center">
          {/* Second Set of Cards */}
          <Card
            jumpto={"/aerialphoto"}
            Heading={"Aerial Photography"}
            data={
              "Professional aerial photography for your real estate, resort or any marketing promotion along with aerial 360 degree panorama, virtual tour and large hoarding size imagery."
            }
            image={
              "https://www.photopilot.com/media/images/San_Diego_3A5RGcc.0ec3cdf0.fill-900x600.jpg"
            }
          />
          <Card
            Heading={"Project Monitoring"}
            data={
              "Project progress monitoring of large infrastructure projects such as railways, roads, highways, industrial corporation and more using drone survey and drone videos with volumetric calculations and geotagged videos."
            }
            image={
              "https://airpix.in/assets/images/case-studies/topographic_survey.jpg"
            }
          />
          <Card
            Heading={"Drone Video"}
            data={
              "Periodic drone videos for project progress monitoring, reporting and collaboration to reduce project costs and improve project timelines. Professional drone video services for marketing your infrastructure or real estate projects."
            }
            image={
              "https://cdn.thewirecutter.com/wp-content/media/2023/11/dronesforphotovideo-2048px-DSC4828.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
            }
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center font-semibold text-2xl mt-10">
          <h1>Associations and Partners</h1>
        </div>

        <div className="flex flex-wrap items-center justify-around mx-5 sm:mx-20 lg:mx-40 mt-8 gap-5">
          <img
            src="https://cdnbbsr.s3waas.gov.in/s312b1e42dc0746f22cf361267de07073f/uploads/2023/07/2023071196.jpg"
            className="h-[100px] sm:h-[150px] lg:h-[200px]"
          />
          <img
            src="https://cdn1.vc4a.com/media/2018/11/AIRBUS.jpg"
            className="h-[100px] sm:h-[150px] lg:h-[200px]"
          />
          <img
            src="https://media.licdn.com/dms/image/D5612AQEfaoOAXPaerA/article-cover_image-shrink_600_2000/0/1693850337611?e=2147483647&v=beta&t=hIR9tY4fBRjqj1bvrlDQJdyyY2EQBAar3zssDEu73c8"
            className="h-[70px] sm:h-[100px] lg:h-[150px]"
          />
          <img
            src="https://unicorn-nest.com/wp-content/uploads/2021/11/Axilor-Ventures.jpg"
            className="h-[80px] sm:h-[110px] lg:h-[150px]"
          />
          <img
            src="https://lobbymap.org/site//data/001/361/1361973.png"
            className="h-[100px] sm:h-[130px] lg:h-[170px]"
          />
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="flex justify-center font-semibold text-3xl mt-10">
          <h1>Our clients</h1>
        </div>

        <div className="mt-5">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>

      <Industries />
      <Footer />
    </div>
  );
}
