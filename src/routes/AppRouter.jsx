import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import Layout from "../pages/Layout"
import Content from "../pages/Content"
import NoPages from "../pages/NoPages"
import Fina from "../pages/MoreFina"
import MoreNancy from "../pages/MoreNancy"
import Sjy from "../pages/MoreSjy"
import Scrolltop from "../components/Scrolltop"
import Cakep from "../pages/MoreCakep"

function AppRouter() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <BrowserRouter basename="/muru/">

            <Scrolltop />

            <Routes >

                <Route path="/" element={<Layout />}>

                    <Route index element={<Content />} />

                    <Route path="fina-more" element={<Fina data={data.portDetail1} />} />
                    <Route path="nancy-more" element={<MoreNancy data={data.portDetail2} />} />
                    {/* <Route path="sjy-more" element={<Sjy data={data.portDetail3} />} /> */}
                    <Route path="cakep-more" element={<Cakep data={data.portDetail4} />} />

                    <Route path="*" element={<NoPages />} />

                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter