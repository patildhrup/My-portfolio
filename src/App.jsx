import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import ProfileLinks from "./pages/ProfileLinks"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AskMeAnything from "./components/AskMeAnything"

function Layout() {
  const location = useLocation();
  // Don't show on ProfileLinks (which is at "/")
  const showAMA = location.pathname !== "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<ProfileLinks />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showAMA && <AskMeAnything />}
    </>
  );
}

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}
