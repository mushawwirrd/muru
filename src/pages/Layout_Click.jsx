import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const [data, setData] = useState()
    const [active, setActive] = useState('Hero')
    const location = useLocation()

    useEffect(() => {
        const section = document.querySelectorAll("section")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    setActive(entry.target.id)
                }
            })
        }, { threshold: 0.6 })

        section.forEach(sec => observer.observe(sec))

        return () => observer.disconnect()

    }, [location])

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <div>

            <nav className=" shadow-md py-5">

                <div className="flex items-center justify-between px-8">
                    
                    <div>
                        <Link to="/" className=""></Link>
                    </div>

                    <h1 className="text-xl font-sans font-bold tracking-wide">Halo</h1>

                    <ul className="flex space-x-6 ">

                        <li>
                            <Link to="/" className="font-sans font-medium hover:text-gray-500 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/product" className="font-sans font-medium hover:text-gray-500 transition">Product</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <Outlet />

        </div>
    )
}