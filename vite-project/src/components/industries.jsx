// import { useNavigate } from "react-router-dom"

// export default function Industries(){
//     const navigate = useNavigate();
//     return (
//         <div>
           
//          <div className="flex justify-center mt-20 text-3xl font-medium">
//                 <h1>Industries Served</h1>
//             </div>

//             <div  className="flex justify-between mt-10 mx-48">
//                 <div className="w-[300px] bg-blue-950 
//                 hover:bg-blue-500 cursor-pointer text-white rounded-t-xl rounded-b-xl"
                
//                 onClick={()=>{
//                     navigate('/mining')
//                 }}
//                 >
//                     <img src="https://i.redd.it/knddnqcpueca1.jpg" className="h-[170px] w-full rounded-t-xl "  />
//                     <div className="p-3 flex justify-center items-center">
//                         INFRA & MINING
//                     </div>
//                 </div>
//                 <div  
//                 onClick={()=>{
//                     navigate('/utilities')
//                 }}
//                 className="w-[300px] bg-blue-950 text-white hover:bg-blue-500 cursor-pointer rounded-t-xl rounded-b-xl">
//                 <img src="https://simscrane.com/wp-content/uploads/2023/03/Tower-Crane-A.jpg"  className="h-[170px] w-full rounded-t-xl" /> 
//                     <div className="p-3 flex justify-center items-center">
//                         UTILITIES
//                     </div>
//                 </div>
//                 <div  className="w-[300px] 
                 
//                 bg-blue-950 hover:bg-blue-500 cursor-pointer text-white rounded-t-xl rounded-b-xl"
//                 onClick={()=>{
//                     navigate('/agriculture')
//                 }}
//                 >
//                 <img src="https://www.nicheagriculture.com/wp-content/uploads/2023/09/Are-agriculture-and-farming-the-same-Agriculture-vs-Farming-scaled.jpg" className="h-[170px] w-full rounded-t-xl" />
//                     <div className="p-3 flex justify-center items-center">
//                         AGRICULTURE
//                     </div>
//                 </div>
//             </div> 
//         </div>
//     )
// }
import { useNavigate } from "react-router-dom";

export default function Industries() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-center mt-20 text-3xl font-medium">
        <h1>Industries Served</h1>
      </div>

      {/* Industry Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:justify-between mt-10 mx-6 md:mx-12 lg:mx-48">
        {/* Card 1: Infra & Mining */}
        <div
          className="w-full md:w-[300px] bg-blue-950 
          hover:bg-blue-500 cursor-pointer text-white rounded-t-xl rounded-b-xl"
          onClick={() => {
            navigate("/mining");
          }}
        >
          <img
            src="https://i.redd.it/knddnqcpueca1.jpg"
            className="h-[200px] w-full object-cover rounded-t-xl"
            alt="Infra & Mining"
          />
          <div className="p-3 flex justify-center items-center">
            INFRA & MINING
          </div>
        </div>

        {/* Card 2: Utilities */}
        <div
          onClick={() => {
            navigate("/utilities");
          }}
          className="w-full md:w-[300px] bg-blue-950 text-white 
          hover:bg-blue-500 cursor-pointer rounded-t-xl rounded-b-xl"
        >
          <img
            src="https://simscrane.com/wp-content/uploads/2023/03/Tower-Crane-A.jpg"
            className="h-[200px] w-full object-cover rounded-t-xl"
            alt="Utilities"
          />
          <div className="p-3 flex justify-center items-center">UTILITIES</div>
        </div>

        {/* Card 3: Agriculture */}
        <div
          className="w-full md:w-[300px] bg-blue-950 
          hover:bg-blue-500 cursor-pointer text-white rounded-t-xl rounded-b-xl"
          onClick={() => {
            navigate("/agriculture");
          }}
        >
          <img
            src="https://www.nicheagriculture.com/wp-content/uploads/2023/09/Are-agriculture-and-farming-the-same-Agriculture-vs-Farming-scaled.jpg"
            className="h-[200px] w-full object-cover rounded-t-xl"
            alt="Agriculture"
          />
          <div className="p-3 flex justify-center items-center">AGRICULTURE</div>
        </div>
      </div>
    </div>
  );
}
