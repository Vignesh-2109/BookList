import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-1 rounded-lg w-fit flex items-center shadow-lg transform transition-transform hover:scale-105'
      >
        <BsArrowLeft className="text-2xl mr-2"/>
        <span className="text-white"></span>
      </Link>
    </div>
  )
}

export default BackButton;
