export  function DropDownIndus({visible}){
    return (
        <div style={{display:visible,flexDirection:visible=='none' ? '':'column'} } className="absolute right-[600px]  top-[60px] z-10 bg-slate-100">
            <span className="border-b-2  text-black p-2">Infrastructure</span>
            <span className="border-b-2  text-black p-2">Transport</span>
            <span className="border-b-2  text-black p-2">Mining</span>
            <span className="border-b-2  text-black p-2">Utilities</span>
            <span className="border-b-2  text-black p-2">Wind Turbine</span>
            <span className="border-b-2  text-black p-2">Oil and Gas Inspection</span>
            <span className="border-b-2  text-black p-2">Agriculture</span>
            <span className="border-b-2  text-black p-2">Canal Mapping</span>
        </div>
    )
}
export  function DropDownSolu({visible}){
    return (
        <div style={{display:visible,flexDirection:visible=='none' ? '':'column'}} className="absolute  top-[50px]  -right-[59px] w-[200px] z-10 bg-slate-100">
            <span 
            onClick={()=>{
                window.location.href = '/'
            }}
            className="border-b-2   text-black p-2">Surveying and Mapping</span>
            <span className="border-b-2   text-black p-2">Inspection and Analysis</span>
            <span className="border-b-2  text-black p-2">UAV Data Processing</span>
            <span className="border-b-2  text-black p-2">BIM Solutions</span>
            <span className="border-b-2  text-black p-2">Project Progress Monitoring</span>
            <span className="border-b-2  text-black p-2">Aerial LiDAR</span>
            <span className="border-b-2  text-black p-2">Multispectral Imaging</span>
            <span
            onClick={()=>{
                window.location.href = '/aerialphoto'
            }}
            className="border-b-2  text-black p-2">Creative Aerial Content</span>
        </div>
    )
}