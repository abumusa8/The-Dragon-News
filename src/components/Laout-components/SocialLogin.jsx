

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="">
            <h2 className="font-semibold ">Login With</h2>
            <div className="space-y-2">
                <button className="btn w-full"><FaGoogle />Login With Google</button>
                <button className="btn w-full"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;