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

                <div className="mt-1 ">
                    <p className="bg-orange-500/10 border-x-2 text-sm border-x-orange-500 mb-3 py-4 px-5 lg:w-full rounded-md">📌 {p.note}</p>
                </div>

                <div className="space-y-3">

                    {/* <p>{p.intro1}</p> */}
                    <p>{p.intro2}</p>
                    <p>{p.intro3}</p>
                    <p>{p.intro4}</p>

                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >Sections on the website</h2>
                        <p>{p.bridge}</p>
                    </div>

                    {/* Booking - Regist */}
                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >Booking - Regist</h2>
                        <p className="mb-2">{p.prg1}</p>

                        <div className="flex flex-col gap-3">
                            <div className="max-w-md mx-auto">
                                <div className="grid lg:grid-cols-1 gap-2">
                                    <img src={p.img1} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Customer registers</p>
                            </div>
                        </div>

                    </div>

                    {/* Booking */}
                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >Booking </h2>
                        <p className="mb-2">{p.prg2}</p>

                        <div className="flex flex-col gap-3">
                            <div className="max-w-md mx-auto">
                                <div className="grid lg:grid-cols-1 gap-2">
                                    <img src={p.img2} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Customer makes a booking (online)</p>
                            </div>
                        </div>
                    </div>

                    {/* Kasir */}
                    <p>{p.prg3}</p>


                    {/* Kasir - Admin/Cashier */}
                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >Cashier - Admin/Cashier/Owner</h2>
                        <p className="mb-2">{p.prg4}</p>

                        <div className="flex flex-col gap-2">

                            <div className="max-w-4xl mx-auto">
                                <div className="grid lg:grid-cols-2 gap-2">
                                    <img src={p.img3} alt={p.title} className="overflow-hidden rounded-lg" />
                                    <img src={p.img9} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Add services</p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="grid lg:grid-cols-1 gap-2">
                                    <img src={p.img12} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Enter onsite transaction</p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="grid lg:grid-cols-2 gap-2">
                                    <img src={p.img10} alt={p.title} className="overflow-hidden rounded-lg " />
                                    <img src={p.img5} alt={p.title} className="overflow-hidden rounded-lg " />

                                </div>
                                <p className="text-center text-sm mt-1">Complete the transaction</p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="grid lg:grid-cols-2 gap-2">
                                    <img src={p.img4} alt={p.title} className="overflow-hidden rounded-lg " />
                                    <img src={p.img11} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Enter onsite transaction with the booking list</p>
                            </div>

                        </div>
                    </div>

                    {/* Kasir - Owner */}
                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >Cashier - Owner</h2>
                        <p>{p.prg6}</p>
                        <p className="mb-2">{p.prg7}</p>

                        <div className="flex flex-col gap-3">
                            <div className="max-w-md mx-auto">
                                <div className="grid lg:grid-cols-1 gap-2">
                                    <img src={p.img7} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Owner can see customer data</p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="grid lg:grid-cols-1 gap-2">
                                    <img src={p.img6} alt={p.title} className="overflow-hidden rounded-lg " />
                                </div>
                                <p className="text-center text-sm mt-1">Owner opens customer data detail</p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="grid lg:grid-cols-1 gap-2">
                                    <img src={p.img8} alt={p.title} className="overflow-hidden rounded-lg 2" />
                                </div>
                                <p className="text-center text-sm mt-1">Dahsboard that  can be seen by the Owner</p>
                            </div>
                        </div>


                    </div>

                    <div>
                        <h2 className="text-base lg:text-lg font-bold" >My expectations</h2>
                        <p>{p.myExp}</p>
                    </div>


                    <div className="space-y-2">
                        <p className="mb-1">Anyway, you can see this project on github</p>
                        <div className="flex justify-center bg-black hover:bg-white text-white  hover:text-black hover:shadow-xl rounded-full w-64 px-5 py-2 ">
                            <a href="https://github.com/mushawwirrd/cakep-book" className="flex items-center font-semibold gap-1">See On Github - Booking <FaGithub size={20} /></a>
                        </div>
                        <div className="flex justify-center bg-black hover:bg-white hover:shadow-xl text-white hover:text-black  rounded-full w-64 px-5 py-2 ">
                            <a href="https://github.com/mushawwirrd/cakep-cashier" className="flex items-center  font-semibold gap-1">See On Github - Cashier <FaGithub size={20} /></a>
                        </div>
                        <div className="flex justify-center bg-black hover:bg-white hover:shadow-xl text-white hover:text-black rounded-full w-64 px-5 py-2 ">
                            <a href="https://github.com/mushawwirrd/cakep-backend" className="flex items-center  font-semibold gap-1">See On Github - Backend <FaGithub size={20} /></a>
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