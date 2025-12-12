
function ButtonIcon({ href, src, target, alt, icon }) {
    return (

        <div className="hover:text-black/60 duration-200">
            <a
                href={href}
                target={target}>

                {icon}

            </a>
        </div>


    )
}

export default ButtonIcon