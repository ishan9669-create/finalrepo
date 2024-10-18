// export default function Footer(){
//     return (
//         <div>
//                 <div className="p-14 flex justify-around mt-16 bg-black" >
//             <div className="flex flex-col gap-5">
//                     <span className="text-white
//                     font-bold text-2xl
//                     ">Link</span>
//                     <div className="flex flex-col gap-3
//                     text-gray-400 
//                     ">
//                         <span
//                         onClick={()=>{
//                             window.location.href = '/home'
//                         }}
//                         className="hover:text-white cursor-pointer">Home</span>
//                         <span
//                         onClick={()=>{
//                             window.location.href = '/mining'
//                         }}
//                         className="hover:text-white cursor-pointer">Industries</span>
                        
//                         <span 
//                         onClick={()=>{
//                             window.location.href = '/pilot'
//                         }}
//                         className="hover:text-white cursor-pointer">Pilot</span>
//                         <span
//                         onClick={()=>{
//                             window.location.href = '/contactUs'
//                         }}
//                         className="hover:text-white cursor-pointer">Contact Us</span>
                        
//                     </div>
//                 </div>
                

//                 <div className="flex flex-col gap-5">
//                     <span className="text-white
//                     font-bold text-2xl
//                     ">Solutions</span>
//                     <div className="flex flex-col gap-3
//                     text-gray-400
//                     ">
//                         <span 
//                         onClick={()=>{
//                             window.location.href = '/'
//                         }}
//                         className="hover:text-white cursor-pointer">Surveying and Mapping</span>
//                         <span className="hover:text-white cursor-pointer">Inspection and Monitoring</span>
//                         <span className="hover:text-white cursor-pointer">UAV Data Processing</span>
//                         <span className="hover:text-white cursor-pointer">Project Proress Monitoring</span>
//                         <span 
//                         onClick={()=>{
//                             window.location.href = '/aerialphoto'
//                         }}
//                         className="hover:text-white cursor-pointer">Creative Aerial Content</span>
                        
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-5">

//                 <span className="text-white
//                    font-bold text-2xl">Products</span>
//                     <div className="flex flex-col gap-3 text-gray-400">
//                         <span 
//                         onClick={()=>{
//                             window.location.href = '/worksyte'
//                         }}
//                         className="hover:text-white cursor-pointer">Worksyte</span>
//                         <span
//                         onClick={()=>{
//                             window.location.href = '/product'
//                         }}
//                         className="hover:text-white cursor-pointer">Hardware</span>
                       
//                     </div>
//                     <span className="text-white
//                    font-bold text-2xl">Resources</span>
//                     <div className="flex flex-col gap-3 text-gray-400">
//                         <span 
//                         onClick={()=>{
//                             window.location.href = '/case'
//                         }}
//                         className="hover:text-white cursor-pointer">Case studies</span>
                        
                       
//                     </div>
//                 </div>
                
//                 <div className="flex flex-col gap-5">
//                 <span className=" font-semibold tracking-widest text-2xl text-yellow-400">AIR<span className="text-blue-500">PLAN</span></span>
//                     <div className="flex flex-col gap-3 text-gray-400">
//                         <span className="hover:text-white cursor-pointer">Address : A 503, Kukreja Plaza , Sector 11</span>
//                         <span className="hover:text-white cursor-pointer">CBD Belapur , Navi Mumbai - 400614.</span>
//                         <span className="hover:text-white cursor-pointer">Phone : +91 9619123020</span>
//                         <span className="hover:text-white cursor-pointer">Email: contact@airpix.in </span>
//                     </div>
//                 </div>
//             </div>

//             <footer>
//                 <div className="flex justify-center p-4 
//                  text-black font-bold font-sans">
//                 <span>&#169; All rights reserved</span>
               
//                 </div>
//             </footer>
//         </div>
//     )
// }
export default function Footer() {
    return (
      <div className="w-full">
        {/* Footer content */}
        <div className="p-10 md:p-14 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 bg-black mt-16">
          
          {/* Links Column */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-2xl">Link</span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span
                onClick={() => {
                  window.location.href = '/home';
                }}
                className="hover:text-white cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => {
                  window.location.href = '/mining';
                }}
                className="hover:text-white cursor-pointer"
              >
                Industries
              </span>
              <span
                onClick={() => {
                  window.location.href = '/pilot';
                }}
                className="hover:text-white cursor-pointer"
              >
                Pilot
              </span>
              <span
                onClick={() => {
                  window.location.href = '/contactUs';
                }}
                className="hover:text-white cursor-pointer"
              >
                Contact Us
              </span>
            </div>
          </div>
  
          {/* Solutions Column */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-2xl">Solutions</span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span
                onClick={() => {
                  window.location.href = '/';
                }}
                className="hover:text-white cursor-pointer"
              >
                Surveying and Mapping
              </span>
              <span className="hover:text-white cursor-pointer">Inspection and Monitoring</span>
              <span className="hover:text-white cursor-pointer">UAV Data Processing</span>
              <span className="hover:text-white cursor-pointer">Project Progress Monitoring</span>
              <span
                onClick={() => {
                  window.location.href = '/aerialphoto';
                }}
                className="hover:text-white cursor-pointer"
              >
                Creative Aerial Content
              </span>
            </div>
          </div>
  
          {/* Products & Resources Column */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-2xl">Products</span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span
                onClick={() => {
                  window.location.href = '/worksyte';
                }}
                className="hover:text-white cursor-pointer"
              >
                Worksyte
              </span>
              <span
                onClick={() => {
                  window.location.href = '/product';
                }}
                className="hover:text-white cursor-pointer"
              >
                Hardware
              </span>
            </div>
  
            <span className="text-white font-bold text-2xl">Resources</span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span
                onClick={() => {
                  window.location.href = '/case';
                }}
                className="hover:text-white cursor-pointer"
              >
                Case Studies
              </span>
            </div>
          </div>
  
          {/* Contact Information Column */}
          <div className="flex flex-col gap-5">
            <span className="font-semibold tracking-widest text-2xl text-yellow-400">
              AIR<span className="text-blue-500">PLAN</span>
            </span>
            <div className="flex flex-col gap-3 text-gray-400">
              <span className="hover:text-white cursor-pointer">
                Address: A 503, Kukreja Plaza, Sector 11
              </span>
              <span className="hover:text-white cursor-pointer">
                CBD Belapur, Navi Mumbai - 400614
              </span>
              <span className="hover:text-white cursor-pointer">
                Phone: +91 9619123020
              </span>
              <span className="hover:text-white cursor-pointer">
                Email: contact@airpix.in
              </span>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <footer>
          <div className="flex justify-center p-4 text-gray-300 font-bold font-sans bg-black">
            <span>&#169; All rights reserved</span>
          </div>
        </footer>
      </div>
    );
  }
  