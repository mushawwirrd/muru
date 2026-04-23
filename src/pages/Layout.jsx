import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavMobile from "../components/NavMobile";

export default function Layout() {
    const [data, setData] = useState()
    const [isOpenMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <div>

            <nav className="fixed z-50 w-full bg-white/30 backdrop-blur-lg shadow-sm">

                <div className="flex items-center justify-between px-10 py-5 ">

                    <div>
                        <Link to="/">
                            <img src="muru.png" alt="muru" className="w-16" />
                        </Link>
                    </div>

                    <div className="hidden lg:block">

                        <ul >
                            <li className="flex justify-center space-x-5">
                                <Link
                                    to="/"
                                    className="font-sans hover:text-gray-500 transition"
                                >
                                    Home 
                                </Link>
                            
                                <button className="font-sans hover:text-gray-500 transition" onClick={() => {
                                    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
                                }}>About</button>

                                <button className="font-sans hover:text-gray-500 transition" onClick={() => {
                                    document.getElementById("project").scrollIntoView({ behavior: "smooth" })
                                }}>Project</button>


                                {/* <a
                                    href="#about"
                                    className="font-sans hover:text-gray-500 transition"
                                >
                                    About
                                </a>
                                <a
                                    href="#project"
                                    className="font-sans hover:text-gray-500 transition"
                                >
                                    Project
                                </a> */}
                            </li>
                        </ul>

                    </div>

                    <NavMobile isOpen={isOpenMenu} setOpen={setOpenMenu} />
                </div>

            </nav>

            {isOpenMenu && (
                <div onClick={() => setOpenMenu(false)}
                    className="fixed z-40 top-[3.5rem] inset-0 bg-black/30 backdrop-blur-lg ">

                </div>
            )}

            <Outlet />
            <Footer data={data.footer} />

        </div>
    )
}