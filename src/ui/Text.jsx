import { Link } from "react-router-dom";

export default function Text({ click, lable }) {
    return (
        <div className="">
            <Link
                to={click}>
                {lable}
            </Link>
        </div>
    )
}

