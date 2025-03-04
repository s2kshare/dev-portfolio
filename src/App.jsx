import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import CustomMouseCross from "./components/custom-mouse/CustomMouseCross";

function App() {
    const appref = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div
            ref={appref}
            className="bg-[--col-base-200] text-white w-screen h-[100vh] min-h-[100vh] p-10"
            onMouseMove={handleMouseMove}
            onClick={() => setIsHovering(!isHovering)}
        >
            <CustomMouseCross
                mousePosition={mousePosition}
                isHovering={isHovering}
            />
            <div className="flex flex-col fixed top-10 left-10 right-10 bottom-10">
                <div className="top-nav flex-1">
                    <Navbar />
                </div>
                <div className="mid-nav flex-[2_2_0%] flex items-center justify-center"></div>
                <div className="bot-nav flex-1 flex flex-col justify-end">
                    <h1>SOURCE_CODE</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
