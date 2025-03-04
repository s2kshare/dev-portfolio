import { useEffect, useRef, useState } from "react";
import CustomMouseCross from "./components/custom-mouse/CustomMouseCross";
import Frame from "./components/Frame";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import IHateThisPhoto from "./assets/ew_its_me.png";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
    const appref = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoverMessage, setHoverMessage] = useState("");

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    const allowedSelectors = [".hoverable", ".clickable"];

    const handleMouseOver = (e) => {
        if (
            !allowedSelectors.some((selector) => event.target.matches(selector))
        ) {
            return;
        }

        const message =
            e.target.getAttribute("alt") ||
            e.target.getAttribute("data-hover-message");
        setHoverMessage(message || "Default Text");
        setIsHovering(true);
    };

    const handleMouseOut = (event) => {
        if (
            allowedSelectors.some((selector) => event.target.matches(selector))
        ) {
            setIsHovering(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);
        return () => {
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <BrowserRouter>
            <div
                ref={appref}
                className="bg-[--col-base-200] text-white w-screen h-[100vh] min-h-[100vh] p-10"
                onMouseMove={handleMouseMove}
            >
                <CustomMouseCross
                    mousePosition={mousePosition}
                    isHovering={isHovering}
                    message={hoverMessage}
                />
                <Frame mousePosition={mousePosition} />
                <div className=" text-2xl font-semibold overflow-scroll rounded-xl p-2 md:p-8 mx-0 md:mx-16 my-16 bg-[--col-base-300] h-[85%] flex flex-col md:flex-row">
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
                            dev-portfolio
                            <h1 className="text-center md:text-start">
                                DEVONTAE CHADWICK
                            </h1>
                            <p className="text-sm font-normal text-center md:text-start">
                                Developer x Designer
                            </p>
                            <h2 className="text-2xl mt-6">About</h2>
                            <p className=" text-sm font-normal">
                                Passionate software developer with a knack for
                                solving complex problems and building efficient
                                systems. I have a degree in IT and a strong
                                background in full-stack development, working
                                with technologies like React, ASP.NET, Python,
                                and SQL.
                            </p>
                            <div className="socials mt-5 flex gap-3">
                                <FaGithub className="w-8 h-8" />
                                <IoIosMail className="w-8 h-8" />
                            </div>
                            <div className=" hoverable transition-all text-base hover:cursor-pointer hover:text-blue-400 mt-3 flex gap-3 text-[--col-text-base] py-3">
                                <IoMdDownload className="w-7 h-7" /> Download
                                Resume
                            </div>
                        </div>
                    </div>
                    <div className="flex-[2_2_0%] flex flex-col md:flex-row mt-3 gap-4">
                        <div className="flex-1 w-full h-full bg-red-400 rounded-md">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="/contact"
                                    element={<ContactPage />}
                                />
                                <Route
                                    path="/projects"
                                    element={<ProjectPage />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
