import { motion } from "motion/react"

import Button from "../ui/Button"
import TextButton from "../ui/TextButton"
import Text from "../ui/Text"

import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go"
import MButton from "../components/Button/MButton"
import SButton from "../components/Button/SButton"

export default function Project({ data }) {

  if (!data) return null

  const myProject =
    <div className="max-w-4xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">

        {data.project.map((prj, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 17 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-2 rounded-2xl border border-gray-100 shadow-md ">

            <div className=" overflow-hidden rounded-xl">
              <img src={prj.image} alt={prj.title} className=" w-full flex-shrink-0  h-44 lg:h-60" />
            </div>


            <div className=" px-2 py-2 ">

              <motion.div
                key={i}
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-1">
                <h1 className="text-lg font-bold ">{prj.title}</h1>
              </motion.div>

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex gap-3 w-5 lg:w-5 mb-0.5">
                <img src={prj.lng1} />
                <img src={prj.lng2} />
                <img src={prj.lng3} />
                <img src={prj.lng4} />
              </motion.div>

              <motion.div
                key={i}
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="my-1">
                <Link to={prj.read} className="flex items-start text-xs font-medium text-gray-400 hover:text-black underline gap-0.5" >Read More</Link>
              </motion.div>

              <motion.div
                key={i}
                initial={{ opacity: 0, x: 17 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex justify-end">
                <MButton href={prj.link} lable="Preview" />
              </motion.div>

            </div>

          </motion.div>

        ))}

      </div >

    </div>

  return (

    <section id='project' className='pt-16'>

      <div>
        <div className='mx-5 lg:mx-10'>

          <h1 className='text-primary text-3xl lg:text-4xl font-bold mx-8 lg:mx-0'>Project</h1>

          <div className="mt-6">
            {myProject}
          </div>

        </div>
      </div>

    </section>
  )
}