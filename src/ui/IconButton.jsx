
function ButtonIcon({ href, src, target, alt }) {
    return (

        <div className="">
            <a href={href}
                target={target}
            >

                <img
                    src={src}
                    alt={alt}
                    className="w-7 h-7" />

            </a>
        </div>


    )
}

export default ButtonIcon