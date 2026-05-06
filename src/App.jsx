import { useEffect, useState } from "react"
import Hero from "./pages/Hero"
import NavDekstop from "./components/NavDekstop"
import NavMobile from "./components/NavMobile"
import Skill from "./pages/Skill"
import AboutMe from "./pages/AboutMe"
import Experience from "./pages/Experience"
import Project from "./pages/Project"
import Footer from "./pages/Footer"
import AppRouter from "./routes/AppRouter"

function App() {
  const [isOpenMenu, setOpenMenu] = useState(false)


  return (
    <div>
      <AppRouter />

    </div>


  )

}

export default App
