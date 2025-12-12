import { motion } from "motion/react"

import Button from "../ui/Button"

export default function Project({ data }) {
  if (!data) return null

  const myProject =
    <div className="flex flex-wrap justify-center lg:gap-x-5">

      {data.project.map((prj, i) => (


        <div className="lg:w-[450px] mt-6  ">

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 17 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-xl lg:rounded-2xl overflow-hidden shadow-lg ">

            <div className="">

              <div>
                <img src={prj.image} alt={prj.title} />
              </div>

              {/* <div className=" absolute top-2 right-0 left-2 ">
                <p className="py-0.5 px-2.5 border border-slate-300 rounded-full mb-2 w-fit text-slate-300 ">{prj.type}</p>
              </div> */}

            </div>

            <div className="flex flex-col items-start gap-y-1 p-4">

              <motion.div
                key={i}
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-1">
                <h1 className="text-2xl font-bold ">{prj.title}</h1>
              </motion.div>

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex gap-3 w-6 lg:w-7 mb-0.5">
                <img src={prj.lng1} />
                <img src={prj.lng2} />
                <img src={prj.lng3} />
                <img src={prj.lng4} />
              </motion.div>

              <motion.div
                key={i}
                initial={{ opacity: 0, x: 17 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="self-end">
                <Button href={prj.link} lable="Preview" />
              </motion.div>

            </div>


          </motion.div>


        </div>


      ))
      }
    </div >

  return (

    <section id='project' className='pt-16'>

      <div>
        <div className='mx-5 lg:mx-10'>

          <h1 className='text-primary text-3xl lg:text-4xl font-bold mx-8 lg:mx-0'>Project</h1>

          <div className="mt-5">
            {myProject}
          </div>

        </div>
      </div>

    </section>
  )
}