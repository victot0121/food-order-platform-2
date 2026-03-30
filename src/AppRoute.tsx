import { Route, Routes } from "react-router-dom"

const AppRoute =()=>{
    return(
       <Routes>
          <Route path="/" element={<h1 className="text-red-500 text-2xl">Home</h1>} />
          <Route path="/about" element={<h1 className="text-red-500 text-2xl">About</h1>} /> 
       </Routes>
    )
}

export default AppRoute;