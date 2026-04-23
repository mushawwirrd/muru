import { FaGithub } from "react-icons/fa"

export default function Sjy({ data }) {

    const sjyProject =

        data.project3.map(p => (
            <div className="flex flex-col">

                <div>

                    <h1 className="text-xl lg:text-3xl font-bold">{p.title}</h1>

                    <div className=" flex justify-center mt-3">
                        <img src={p.image} alt={p.title} className="overflow-hidden rounded-xl w-3/4" />
                    </div>

                </div>

                <div>
                    <p>{p.prg1}</p>
                    <p>{p.prg2}</p>

                    <div className="mt-5">
                        <a href={p.gthb} className="flex items-center font-bold gap-1">See On Github (FE) <FaGithub size={20} /> </a>
                        <a href={p.gthb2} className="flex items-center font-bold  gap-1">See On Github (BE) <FaGithub size={20} /></a>
                    </div>

                </div>

            </div>
        ))

    if (!data) return null
    return (
        <div>
            <div className="py-20 mx-7 lg:mx-14">
                {sjyProject}
            </div>

        </div>
    )
}