import { useEffect, useState } from "react"
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import Project from "./Project"
import Experience from "./Experience"
import Skill from "./Skill"

export default function Content() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <div>

            <Hero data={data.main} />
            <Skill data={data.mySkill} />
            <AboutMe data={data.about} />
            <Project data={data.port} />
            <Experience data={data.myExperience} />

        </div>
    )
}
