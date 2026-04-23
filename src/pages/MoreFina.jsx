import { FaGithub } from "react-icons/fa"

export default function Fina({ data }) {


    const projectFina = data.project1.map(p => (

        <div className="flex flex-col">

            <div >
                <h1 className="text-xl lg:text-2xl font-bold">{p.title}</h1>

                <div className=" flex justify-center mt-5">
                    <img src={p.image} alt={p.title} className="overflow-hidden rounded-xl lg:w-3/4" />
                </div>
            </div>

            <div className="mt-5">

                <div className="space-y-3">

                    <p>{p.prg1}</p>
                    <p>{p.prg2}</p>
                    <p>{p.prg3}</p>

                    {/* Form Kosong */}
                    <h2 className="text-base lg:text-lg font-bold" >Still Empty</h2>
                    <p>This is what happens when the user hasn't entered any numbers in the form and presses the diagnose button. A message will appear, "Kamu belum input apa - apa," meaning You haven't entered anything yet. I created this to improve the user experience and as a guideline to help users know what the first step is.</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img1} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>User has not input anything</p>
                    </div>

                    {/* Sehat */}
                    <h2 className="text-base lg:text-lg font-bold" >Healthy</h2>
                    <p>As I said at the beginning, the logic is very simple, compare income with expenses, this display shows when the user enters the amount of their income and expenses, in case their income is greater than their expenses, the web app will diagnose their financial condition through a message that says "Your financial condition is healthy." which means your financial condition is healthy</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img2} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Healthy financial condition</p>
                    </div>



                    {/* Tidak Sehat */}
                    <h2 className="text-base lg:text-lg font-bold" >Unhealthy</h2>
                    <p>The logic remains the same, but in this section, the user's financial situation is unhealthy, with expenses exceeding income. When the user enters their income and expenses, and if their income exceeds their expenses, the web app will diagnose their financial situation with a message that says, "Your financial situation is not yet healthy." which means Your financial situation is not yet healthy.</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img3} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Unhealthy financial condition</p>
                    </div>

                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >My expectations</h2>
                        <p>{p.last}</p>
                    </div>


                    <div className="">
                        <p>Anyway, you can see this project on github</p>
                        <div>
                            <a href="" className="flex items-center font-bold gap-1">See On Github  <FaGithub size={20} /></a>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    ))

    if (!data) return null

    return (

        <div>
            <div className="pt-20 mx-7 lg:mx-14">
                {projectFina}
            </div>

        </div>
    )
}