import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div>
      <div className="gap-2 flex items-center p-2 bg-base-200">
        <p className="bg-[#D72050]  text-base-100 px-3 py-2">latest</p>
        <Marquee pauseOnHover={true} speed={80}>
          <Link to="/news">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dicta.
          </Link> 
          <Link to="/news">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dicta.
          </Link> 
          <Link to="/news">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dicta.
          </Link> 
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
