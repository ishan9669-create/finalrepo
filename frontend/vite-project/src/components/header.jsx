// import { useNavigate } from "react-router-dom"
// import { DropDownIndus, DropDownSolu } from "./dropdown";
// import { useEffect, useState } from "react";

// export default function Header(){
//     const navigate = useNavigate();
//     const [solution,setSolution] = useState('none')
//     const [indus,setIndust] = useState('none')


//     const [isScrolled, setIsScrolled] = useState(false);

//     // Effect to track scroll position
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollY = window.scrollY;
//         setIsScrolled(scrollY > 50); // Change header style if scrolled more than 50px
//       };
  
//       window.addEventListener('scroll', handleScroll);
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
//     return (

//         <header className={`flex items-center  justify-evenly transition-all duration-300 p-3 fixed z-20  ${
//             isScrolled
//               ? 'bg-yellow-400 text-white '
//               : ' bg-white '
//           } top-0 w-full shadow-xl `}
//                    >
//             <div className="p-3">
//                 <span
//                 className=" flex gap-1  w-[250px]   "
//                 >
//                     <img src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/512/greek-alfa-a-letter-latin-alphabet-256.png" className="w-10 h-10 translate-x-1"  />
//                     <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-i-512.png" className="w-10 h-10 -translate-x-3" alt="" />
//                     <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-r-512.png" className="w-10 h-10 -translate-x-7" alt="" />
//                     <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-p-256.png" className="w-10 h-10 -translate-x-8" alt="" />
//                     <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-l-256.png" className="w-10 h-10 -translate-x-11" alt="" />
//                     <img src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/512/greek-alfa-a-letter-latin-alphabet-256.png" className="w-10 h-10 -translate-x-[51px]" alt="" />
//                     <img src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-n-512.png" className="w-10 h-10 -translate-x-[58px]" alt="" />
//                 </span>
//             </div>

            
//             <div className=" flex gap-4  text-[13.5px]  font-semibold items-center">
//                 <span className="hover:text-blue-500 cursor-pointer"
//                 onClick={()=>{
//                     navigate('/home')
//                 }}
//                 >HOME</span>
//                 <span className=" cursor-pointer flex items-center relative">
//                     <span
//                     className="hover:text-blue-600"
//                     onClick={()=>{
//                         if(solution=='flex') setSolution('none');
//                         else setSolution('flex');
//                     }}
                  
//                     >SOLUTIONS</span>
//                     <img src="https://cdn3.iconfinder.com/data/icons/remixicon-system/24/arrow-drop-down-fill-256.png" className="w-7 h-7" />
//                     <DropDownSolu visible={solution}/>
//                     </span>
//                 <span className=" cursor-pointer flex items-center">
//                     <span
//                     className="hover:text-blue-500"
//                     onClick={()=>{
//                         if(indus=='flex') setIndust('none');
//                         else setIndust('flex')
//                     }}
//                     >INDUSTRIES</span>
//                     <img src="https://cdn3.iconfinder.com/data/icons/remixicon-system/24/arrow-drop-down-fill-256.png"  className="w-7 h-7 "/>
//                     <DropDownIndus visible={indus}/>
//                 </span>
//                 <span className="hover:text-blue-500 cursor-pointer"
//                 onClick={()=>{
//                     navigate('/product')
//                 }}
//                 >PRODUCT</span>
//                 <span className="hover:text-blue-500 cursor-pointer"
//                 onClick={()=>{
//                     navigate('/worksyte')
//                 }}
//                 >WORKSYTE</span>
//                 <span
//                 onClick={()=>{
//                     window.location.href='/pilot'
//                 }}
//                 className="hover:text-blue-500 cursor-pointer">PILOT</span>
//                 <span className="hover:text-blue-500 cursor-pointer"
//                 onClick={()=>{
//                     navigate('/case')
//                 }}
//                 >CASE STUDIES</span>
//                 <span className="hover:text-blue-500 cursor-pointer"
//                 onClick={()=>{
//                     navigate('/contactus')
//                 }}
//                 >CONTACT US</span> 
//                 <span
//                 onClick={()=>{
//                     navigate('/faqs')
//                 }}
//                 className="hover:text-blue-500 cursor-pointer">FAQ</span>
//                 <span className="hover:text-blue-500 cursor-pointer" 
//                 onClick={()=>{
//                     navigate('/login')
//                 }}
//                 >LOGIN</span>
//             </div>
//         </header>
//     )
// }
import { useNavigate } from "react-router-dom";
import { DropDownIndus, DropDownSolu } from "./dropdown";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [solution, setSolution] = useState("none");
  const [indus, setIndust] = useState("none");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For hamburger menu

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Change header style if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`flex items-center justify-between transition-all duration-300 p-3 fixed z-20 ${
        isScrolled ? "bg-yellow-400 text-white" : "bg-white"
      } top-0 w-full shadow-xl`}
    >
      {/* Logo */}
      <div className="p-3">
        <span className="flex gap-1 w-[250px]">
          <img
            src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/512/greek-alfa-a-letter-latin-alphabet-256.png"
            className="w-10 h-10 translate-x-1"
            alt="logo"
          />
          <img
            src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-i-512.png"
            className="w-10 h-10 -translate-x-3"
            alt="logo"
          />
          <img
            src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-r-512.png"
            className="w-10 h-10 -translate-x-7"
            alt="logo"
          />
          <img
            src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-p-256.png"
            className="w-10 h-10 -translate-x-8"
            alt="logo"
          />
          <img
            src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-l-256.png"
            className="w-10 h-10 -translate-x-11"
            alt="logo"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/mathematics-geometry/512/greek-alfa-a-letter-latin-alphabet-256.png"
            className="w-10 h-10 -translate-x-[51px]"
            alt="logo"
          />
          <img
            src="https://cdn0.iconfinder.com/data/icons/alphanumeric/16/letter-n-512.png"
            className="w-10 h-10 -translate-x-[58px]"
            alt="logo"
          />
        </span>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Full Navigation Links (hidden on mobile) */}
      <div className="hidden md:flex gap-4 text-[13.5px] font-semibold items-center">
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/home")}>
          HOME
        </span>
        <span className="cursor-pointer flex items-center relative">
          <span
            className="hover:text-blue-600"
            onClick={() => (solution === "flex" ? setSolution("none") : setSolution("flex"))}
          >
            SOLUTIONS
          </span>
          <img src="https://cdn3.iconfinder.com/data/icons/remixicon-system/24/arrow-drop-down-fill-256.png" className="w-7 h-7" />
          <DropDownSolu visible={solution} />
        </span>
        <span className="cursor-pointer flex items-center">
          <span className="hover:text-blue-500" onClick={() => (indus === "flex" ? setIndust("none") : setIndust("flex"))}>
            INDUSTRIES
          </span>
          <img src="https://cdn3.iconfinder.com/data/icons/remixicon-system/24/arrow-drop-down-fill-256.png" className="w-7 h-7" />
          <DropDownIndus visible={indus} />
        </span>
        {/* Other navigation links */}
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/product")}>
          PRODUCT
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/worksyte")}>
          WORKSYTE
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => window.location.href = "/pilot"}>
          PILOT
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/case")}>
          CASE STUDIES
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/contactus")}>
          CONTACT US
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/faqs")}>
          FAQ
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
          LOGIN
        </span>
      </div>

      {/* Mobile Navigation Menu (visible on mobile when hamburger clicked) */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden flex flex-col gap-2 mt-4`}>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/home")}>
          HOME
        </span>
        <span className="cursor-pointer" onClick={() => (solution === "flex" ? setSolution("none") : setSolution("flex"))}>
          SOLUTIONS
          <DropDownSolu visible={solution} />
        </span>
        <span className="cursor-pointer" onClick={() => (indus === "flex" ? setIndust("none") : setIndust("flex"))}>
          INDUSTRIES
          <DropDownIndus visible={indus} />
        </span>
        {/* Other mobile navigation links */}
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/product")}>
          PRODUCT
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/worksyte")}>
          WORKSYTE
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => window.location.href = "/pilot"}>
          PILOT
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/case")}>
          CASE STUDIES
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/contactus")}>
          CONTACT US
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/faqs")}>
          FAQ
        </span>
        <span className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
          LOGIN
        </span>
      </div>
    </header>
  );
}
