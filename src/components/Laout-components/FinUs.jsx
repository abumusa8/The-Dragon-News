import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




const FinUs = () => {
  return (
    <div>
      <h2 className="font-semibold ">Find Us On</h2>
      <div className="join flex *:bg-base-100 join-vertical">
        <button className="btn join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter /> Twitter
        </button>
        <button className="btn join-item justify-start"><FaInstagramSquare /> instagram
        </button>
      </div>
    </div>
  );
};

export default FinUs;
