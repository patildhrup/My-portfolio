
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfileLinks from "./pages/ProfileLinks"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"



export default function App() {
  return (
    <div className="relative overflow-hidden">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileLinks />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

      
    </div>
  )
}
