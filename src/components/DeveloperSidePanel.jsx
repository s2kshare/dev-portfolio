import IHateThisPhoto from "../assets/ew_its_me.png";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import ResumePDF from "../assets/Devontae_CV.pdf";

function DeveloperSidePanel() {
    return (
        <div className="flex-1 items-center justify-center flex flex-col">
            <div className="flex flex-col mx-6 hover:cursor-default">
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
                <span className=" text-xs text-gray-500">dev-portfolio</span>
                <h1 className="text-center md:text-start">DEVONTAE CHADWICK</h1>
                <p className="text-sm font-normal text-center md:text-start">
                    Developer x Designer
                </p>
                <h2 className="text-2xl mt-6">About</h2>
                <p className=" text-sm font-normal">
                    Passionate software developer with a knack for solving
                    complex problems and building efficient systems. I have a
                    degree in IT and a strong background in full-stack
                    development, working with technologies like React, ASP.NET,
                    Python, and SQL.
                </p>
                <div className="socials mt-5 flex gap-3">
                    <FaGithub className="w-8 h-8" />
                    <IoIosMail className="w-8 h-8" />
                </div>
                <a
                    download
                    href={ResumePDF}
                    className=" hoverable transition-all text-base hover:cursor-pointer hover:text-blue-400 mt-3 flex gap-3 text-[--col-text-base] py-3"
                >
                    <IoMdDownload className="w-7 h-7" /> Download Resume
                </a>
            </div>
        </div>
    );
}

export default DeveloperSidePanel;
