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

      {/* <header className="fixed z-50 w-full bg-white/30 backdrop-blur-lg shadow-sm">

        <div className="flex items-center justify-between px-10 py-5 ">

          <div>

            <a href="#hero">
              <img src="muru.png" alt="muru" className="w-16" />
            </a>

          </div>

          <div className="hidden lg:block ">
            <NavDekstop />
          </div>

          <NavMobile isOpen={isOpenMenu} setOpen={setOpenMenu} />
        </div>

      </header>

      {isOpenMenu && (
        <div onClick={() => setOpenMenu(false)}
          className="fixed z-40 top-[3.5rem] inset-0 bg-black/30 backdrop-blur-lg ">

        </div>
      )} */}


    </div>


  )

}

export default App
