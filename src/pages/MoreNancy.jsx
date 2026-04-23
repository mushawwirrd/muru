import { FaGithub } from "react-icons/fa"

export default function MoreNancy({ data }) {

    const projectNancy = data.project2.map(p => (

        <div className="flex flex-col">

            <div>

                <h1 className="text-xl lg:text-2xl font-bold">{p.title}</h1>

                <div className="flex justify-center mt-5">
                    <img src={p.image} alt={p.title} className="overflow-hidden rounded-xl lg:w-3/4" />
                </div>

            </div>

            <div className="mt-5 space-y-3" >
                <p>{p.prg1}</p>
                <p>{p.prg2}</p>
                <p>{p.prg3}</p>

                <h2 className="text-base lg:text-lg font-bold" >Still Empty</h2>
                <p>The message for each condition remains the same as in the previous Financial Health Diagnosis Web App. In this condition, if the user hasn't entered anything and then presses the Diagnosis button, the message "Kamu belum input apa - apa" meaning You haven't entered anything yet. With expectations, this can serve as a guideline for users to know what the first step is.</p>
                <div className="flex flex-col items-center justify-center">
                    <img src={p.img1} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                    <p>User has not input anything</p>
                </div>

                {/* Sehat */}
                <h2 className="text-base lg:text-lg font-bold" >Healthy</h2>
                <p>Now this is the fun part, as I said in the previous project, the logic is very simple, comparing income with expenses, but this is quite complex. When users enter their income and expenses, each type of income and expense will be calculated, and the final result will be compared to see which is the largest. Because in the case of income being greater than expenses, the web app will diagnose their financial situation with a message that says "Your financial condition is healthy" which means your financial condition is healthy</p>
                <div className="flex flex-col items-center justify-center">
                    <img src={p.img2} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                    <p>Healthy financial condition</p>
                </div>

                {/* Tidak Sehat */}
                <h2 className="text-base lg:text-lg font-bold" >Unhealthy</h2>
                <p>The results will be different if after you enter your income and expenses, then after calculating and comparing the final results, your expenses are greater than your income, then the web app will diagnose your financial condition with a message that says "Kondisi keuangan kamu belum sehat" which means Your financial condition is not yet healthy"</p>
                <div className="flex flex-col items-center justify-center">
                    <img src={p.img3} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                    <p>Unhealthy financial condition</p>
                </div>

                <h2 className="text-base lg:text-lg font-bold" >My expectations</h2>
                <p>My hope is still the same as before, I really hope that this financial health diagnosis web app can make people aware of their financial health condition and make the right decisions. See you in the next project👋🏻</p>



                <div className="mt-3">
                    <div>
                        <p className="mb-1">Anyway, you can see this project on github</p>

                        <div className="flex justify-center bg-black hover:bg-white hover:shadow-xl text-white hover:text-black rounded-full w-fit px-5 py-2 ">
                            <a href="https://github.com/mushawwirrd/nancy" className="flex items-center  font-semibold gap-1">See On Github <FaGithub size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ))
    if (!data) return null
    return (

        <div>
            <div className="py-20 mx-7 lg:mx-14">
                {projectNancy}
            </div>
        </div>
    )
}