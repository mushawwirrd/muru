import { FaGithub } from "react-icons/fa"

export default function Cakep({ data }) {


    const projectFina = data.project4.map(p => (

        <div className="flex flex-col">

            <div >
                <h1 className="text-xl lg:text-2xl font-bold">{p.title}</h1>

                <div className=" flex justify-center mt-5">
                    <img src={p.image} alt={p.title} className="overflow-hidden rounded-xl lg:w-3/4" />
                </div>
            </div>

            <div className="mt-5">

                <div className="mt-1">
                    <p className="bg-orange-500/10 border-x-2 border-x-orange-500 mb-3 p-3 rounded-md">📌 {p.note}</p>
                </div>

                <div className="space-y-3">

                    {/* <p>{p.intro1}</p> */}
                    <p>{p.intro2}</p>
                    <p>{p.intro3}</p>
                    <p>{p.intro4}</p>

                    <h2 className="text-base lg:text-lg font-bold" >Sections on the website</h2>
                    <p>{p.bridge}</p>

                    {/* Booking - Regist */}
                    <h2 className="text-base lg:text-lg font-bold" >Booking - Regist</h2>
                    <p>{p.prg1}</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img1} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Customer registers</p>
                    </div>

                    {/* Booking */}
                    <h2 className="text-base lg:text-lg font-bold" >Booking </h2>
                    <p>{p.prg2}</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img2} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Customer makes a booking (online)</p>
                    </div>



                    {/* Kasir */}
                    {/* <h2 className="text-base lg:text-lg font-bold" >Cashier</h2> */}
                    <p>{p.prg3}</p>
                    {/* <div className="flex flex-col items-center justify-center">
                        <img src={p.img3} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Unhealthy financial condition</p>
                    </div> */}


                    {/* Kasir - Admin/Cashier */}
                    <h2 className="text-base lg:text-lg font-bold" >Cashier - Admin/Cashier</h2>
                    <p>{p.prg4}</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img3} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Admin/Cashier adds service</p>
                        <img src={p.img4} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Admin/Cashier enters onsite transaction</p>
                        <img src={p.img5} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Admin/Cashier completes transaction</p>
                    </div>

                    {/* Kasir - Owner */}
                    <h2 className="text-base lg:text-lg font-bold" >Cashier - Owner</h2>
                    <p>{p.prg6}</p>
                    <p>{p.prg7}</p>
                    <div className="flex flex-col items-center justify-center">
                        <img src={p.img6} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Owner can see customer data</p>
                        <img src={p.img7} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Owner opens customer data detail</p>
                        <img src={p.img8} alt={p.title} className="overflow-hidden rounded-lg w-11/12 lg:w-1/2" />
                        <p>Dahsboard that  can be seen by the Owner</p>
                    </div>

                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >My expectations</h2>
                        <p>{p.myExp}</p>
                    </div>


                    <div className="space-y-2">
                        <p className="mb-1">Anyway, you can see this project on github</p>
                        <div className="bg-black hover:bg-white text-white  hover:text-black hover:shadow-xl rounded-full w-fit px-5 py-2 ">
                            <a href="" className="flex items-center font-semibold gap-1">Frontend - Booking <FaGithub size={20} /></a>
                        </div>
                        <div className="bg-black hover:bg-white hover:shadow-xl text-white hover:text-black  rounded-full w-fit px-5 py-2 ">
                            <a href="" className="flex items-center  font-semibold gap-1">Frontend - Cashier <FaGithub size={20} /></a>
                        </div>
                        <div className="bg-black hover:bg-white hover:shadow-xl text-white hover:text-black rounded-full w-fit px-5 py-2 ">
                            <a href="" className="flex items-center  font-semibold gap-1">Backend <FaGithub size={20} /></a>
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