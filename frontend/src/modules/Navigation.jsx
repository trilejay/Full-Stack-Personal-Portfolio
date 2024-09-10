import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";

function Navigation(){
    return (
        <>
            <nav> 
            <Link to="/"><FaHome/>Home</Link>
            {/* <Link to="/contact"><AiFillPicture/>Contact</Link> */}
            <Link to="/gallery"><AiFillPicture/>Gallery</Link>
            <Link to="/order"><BiSolidPurchaseTag/>Order</Link>
            <Link to="/topics"><FaBook/>Topics</Link>
            {/* <Link to="/moviesPage">Movies</Link> */}
            <Link to="/jobsPage"><FaSuitcase/>Jobs</Link>
            </nav>
        </>
    )
}
export default Navigation;