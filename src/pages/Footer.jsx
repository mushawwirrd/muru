
import { motion } from "motion/react"

import ButtonIcon from "../ui/IconButton"
import IconTextButton from "../ui/IconTextButton"
import { FaArrowRight, FaArrowRightLong, FaGithub } from "react-icons/fa6"
import { FaBehance, FaBehanceSquare, FaLinkedin } from "react-icons/fa"


function Footer({ data }) {

    if (!data) return null


    return (
        <footer className="pt-20 ">
            <div className="pt-9 pb-4  border-t border-t-primary/15 ">

                <div className="flex flex-col items-center justify-center mx-8 lg:mx-10 ">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-full mb-16">

                        <div className="text-center ">
                            <h1 className="text-xl font-bold lg:text-2xl mb-5 lg:mb-0">
                                Let's work together
                            </h1>
                        </div>

                        <div className="">
                            <IconTextButton href="https://linktr.ee/mushawwirrd" lable={"Let's Talk"} icon2={<FaArrowRightLong/>} />
                        </div>
                    </motion.div>


                    <div className="flex flex-row justify-center gap-5 lg:justify-start mb-4">

                        <ButtonIcon
                            href="https://www.linkedin.com/in/mushawwir-rudianto"
                            icon={<FaLinkedin size={28}/>}
                            target="_blank"
                            alt="Linked In"
                        />

                        <ButtonIcon
                            href="https://github.com/mushawwirrd"
                            target="_blank"
                            icon={<FaGithub size={28}/>}
                            alt="Github"
                        />

                        <ButtonIcon
                            href="https://www.behance.net/mushawwrudiant"
                            icon={<FaBehanceSquare size={28}/>}
                            target="_blank"
                            alt="Behance"
                        />

                    </div>

                    <div className="w-full text-center">
                        <p className="text-sm">{data.copy}</p>
                        <p className="text-sm"> {data.message} Mushawwir R</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer