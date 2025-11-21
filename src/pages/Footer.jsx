import { ArrowUpRight, MoveRightIcon, MoveUpRight } from "lucide-react"
import NavFooter from "../components/NavFooter"

import ButtonIcon from "../ui/IconButton"
import IconTextButton from "../ui/IconTextButton"


function Footer({ data }) {

    const social = data.social.map(sc => {
        return (
            <div className="mx-2">
                <a href="">
                    <img src={sc.socialIcon} alt="" className="w-6 h-6" />
                </a>
            </div>
        )
    })


    return (
        <footer className="pt-20 ">
            <div className="pt-8 pb-4  border-t border-t-primary/15 ">

                <div className="flex flex-col items-center  justify-center mx-8 lg:mx-10 ">

                    <div className="w-28 mb-8">
                        <img src="/muru.png" alt="" />
                    </div>

                    <div className="text-center mb-5">
                        <h1 className="text-2xl lg:text-3xl">Have an awesome idea? <span className="block">Let's bring it to the screen!</span> </h1>
                    </div>

                    <div className="flex items-center justify-center mb-20 ">
                        <IconTextButton  icon2={<MoveRightIcon />} href="https://linktr.ee/mushawwirrd" lable={"Bring To Screen"} />
                    
                    </div>

                    <div className="flex flex-row justify-center gap-5 lg:justify-start mb-4">

                        <ButtonIcon
                            href="https://www.linkedin.com/in/mushawwir-rudianto"
                            src="/linkedin.svg"
                            target="_blank"
                            alt="Linked In"
                        />

                        <ButtonIcon
                            href="https://github.com/mushawwirrd"
                            src="/github.svg"
                            target="_blank"
                            alt="Github"
                        />

                        <ButtonIcon
                            href="https://www.behance.net/mushawwrudiant"
                            src="/behance.svg"
                            target="_blank"
                            alt="Behance"
                        />

                    </div>

                    <div className="w-full text-center">
                        <p>{data.copy}</p>
                        <p className=""> {data.message} Mushawwir R</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer