import IHateThisPhoto from "../assets/ew_its_me.png";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import ResumePDF from "../assets/DevontaeCV.pdf";
import { STYLE_GLASSMORPHISM } from "../utils/constants";

function DeveloperSidePanel() {
    return (
        <div
            className={`flex flex-col items-center p-5 justify-center ${STYLE_GLASSMORPHISM}`}
        >
            <div className="flex flex-col my-6 mx-6 rounded-2xl hover:cursor-default">
                <div
                    data-hover-message="Hey! Its ME!"
                    className="box hoverable mb-3 self-center md:self-start rounded-xl h-32 w-32"
                >
                    <img
                        className="hoverable w-full h-full object-cover rounded-xl"
                        src={IHateThisPhoto}
                        alt="Hey Look! Its me :)"
                    />
                </div>
                <span className="text-xs text-center md:text-start text-gray-500 opacity-75">
                    dev-portfolio
                </span>
                <h1 className="text-center md:text-start text-2xl font-bold">
                    DEVONTAE CHADWICK
                </h1>
                <p className="text-sm font-semibold text-center md:text-start">
                    Developer x Designer
                </p>
                <p className=" text-sm font-normal whitespace-nowrap mt-3">
                    Passionate software developer with a knack for solving
                    <br />
                    complex problems and building efficient systems.
                    <br /> I have a degree in IT and a strong background in
                    <br className="mt-2" />
                    full-stack development, working with technologies like
                    <br />
                    React, ASP.NET, Python, and SQL.
                </p>
                <div className="socials mt-5 flex gap-3">
                    <a
                        href="https://github.com/s2kshare"
                        className=" hoverable pointer-events-auto"
                        target="_blank"
                        alt="Checkout my GitHub!"
                    >
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a
                        href="mailto:s2kdevelopshare@gmail.com"
                        alt="Send me an Email!"
                        className=" hoverable pointer-events-auto"
                    >
                        <IoIosMail className="w-8 h-8" />
                    </a>
                </div>
                <a
                    download
                    href={ResumePDF}
                    alt="YES! HIRE ME!!! :D"
                    className=" hoverable transition-all text-[--col-text-base] text-base hover:cursor-pointer hover:text-blue-400 mt-3 flex gap-3 pt-3"
                >
                    <IoMdDownload className="w-7 h-7" /> Download Resume
                </a>
            </div>
        </div>
    );
}

export default DeveloperSidePanel;
