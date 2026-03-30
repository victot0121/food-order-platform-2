import { Route, Routes,  Navigate } from "react-router-dom"

const AppRoute =()=>{
    return(
       <Routes>
          <Route path="/" element={<h1 className="text-red-500 text-2xl">Home</h1>} />
          <Route path="/about" element={<h1 className="text-red-500 text-2xl">About</h1>} /> 
          <Route path="*" element={<Navigate to="/" />} />
       </Routes>
    )
}

export default AppRoute;