import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import CustomMouseCross from "./components/custom-mouse/CustomMouseCross";
import Frame from "./components/Frame";
import { BrowserRouter } from "react-router-dom";

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
                        <div className="flex flex-col mx-6">
                            <div
                                data-hover-message="Hey! Its ME!"
                                className="box hoverable mb-3 self-center md:self-start rounded-xl h-32 w-32"
                            >
                                <img
                                    className="hoverable w-full h-full object-cover rounded-xl"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
                                    alt="Hey Look! Its me :)"
                                />
                            </div>
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
                        </div>
                    </div>
                    <div className="flex-[2_2_0%] flex flex-col md:flex-row mt-3 gap-4">
                        <div className="flex-1 w-full h-full bg-red-400 rounded-md">
                            <img
                                className="hoverable w-full h-full object-cover rounded-md"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
                                alt="Hey Look! Its me :)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
