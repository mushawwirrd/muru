import { motion } from "motion/react"

export default function AboutMe({ data }) {

    if (!data) return "null"

    return (
        <section id="about" className="pt-16 lg:pt-28">
            <div >

                <div className="flex flex-col mx-8 lg:mx-12">

                    <div>
                        <h1 className='text-primary text-3xl lg:text-4xl  font-bold'>About Me</h1>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-5 text-lg lg:text-2xl w-full ">

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-[680px] mb-1 ">
                            {data.prg2}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-[680px]">
                            {data.prg3}
                        </motion.p>

                    </div>

                </div>

            </div>

        </section>
    )
}
