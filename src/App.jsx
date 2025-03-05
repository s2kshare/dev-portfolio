import { useEffect, useRef, useState } from "react";
import CustomMouseCross from "./components/custom-mouse/CustomMouseCross";
import Frame from "./components/Frame";
import {
    BrowserRouter,
    Outlet,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import DeveloperSidePanel from "./components/DeveloperSidePanel";

function App() {
    const appref = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoverMessage, setHoverMessage] = useState("");

    /**
     * Sets the state of the mouse position from the clientX and clientY
     * coordinates from the given event.
     *
     * @param {MouseEvent} e
     *   The mouse event that triggered the function.
     */
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    // Custom Classes for handling pointer events issue
    const allowedSelectors = [".hoverable", ".clickable"];

    /**
     * Handles the mouseover event by setting the hoverMessage state and
     * isHovering state. This function is also responsible for ignoring the
     * mouseover event if the target element is not one of the allowed selectors.
     *
     * @param {MouseEvent} e
     *   The mouse event that triggered the function.
     *
     * @return {void}
     */
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

    /**
     * Handles the mouseout event by setting the isHovering state to false if
     * the target element is one of the allowed selectors.
     *
     * @param {MouseEvent} event
     *   The mouse event that triggered the function.
     *
     * @return {void}
     */
    const handleMouseOut = (event) => {
        if (
            allowedSelectors.some((selector) => event.target.matches(selector))
        ) {
            setIsHovering(false);
        }
    };

    /**
     * Attaches the event listeners for mouseover and mouseout events to the
     * document object. This is done to capture the events globally and
     * determine if the target element is one of the allowed selectors.
     *
     * The event listeners are removed when the component is unmounted.
     * Currently there is no removal of the component.
     */
    useEffect(() => {
        // Attach event listeners
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        // Clean up event listeners when component is unmounted
        return () => {
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <BrowserRouter basename="/dev-portfolio">
            <LocationProvider>
                <div
                    ref={appref}
                    className="bg-[--col-base-200] text-white w-screen h-[100vh] min-h-[100vh] p-2 md:p-10"
                    onMouseMove={handleMouseMove}
                >
                    <CustomMouseCross
                        mousePosition={mousePosition}
                        isHovering={isHovering}
                        message={hoverMessage}
                    />
                    <Frame mousePosition={mousePosition} />
                    <div className=" text-2xl font-semibold rounded-xl h-0 md:h-[90%] p-2 md:p-8 mx-0 md:mx-16 my-16 md:bg-[--col-base-300] flex flex-col md:flex-row">
                        <DeveloperSidePanel />
                        <div className="flex-[2_2_0%] flex flex-col md:flex-row mt-3 gap-4">
                            <div className="flex-1 overflow-scroll w-full h-full bg-[--col-text-base] text-[--col-base-200] rounded-md p-">
                                <RoutesWithAnimation
                                    mousePosition={mousePosition}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LocationProvider>
        </BrowserRouter>
    );
}

/**
 * Provides an animation presence context for its children components,
 * allowing for animated transitions when components enter and exit.
 *
 * @param {React.ReactNode} children
 *   The child components to be wrapped within the animation presence context.
 *
 * @returns {JSX.Element}
 *   The rendered AnimatePresence component containing the children.
 */
function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>;
}

/**
 * Renders a set of animated routes for the application using the current location.
 *
 * @param {{ x: number, y: number }} mousePosition
 *   The current mouse position, used to pass to components for additional effects.
 *
 * @returns {JSX.Element}
 *   A React component containing the routes for the Home, Contact, and Project pages,
 *   each wrapped in an animated transition.
 */
function RoutesWithAnimation({ mousePosition }) {
    const location = useLocation();
    const routeVariants = {
        initial: {
            y: "100vh",
        },
        final: {
            y: "0vh",
            transition: {
                type: "easeInOut",
                mass: 0.4,
                duration: 0.5,
            },
        },
    };

    return (
        <Routes location={location} key={location.key}>
            <Route
                path="/"
                element={
                    <HomePage
                        mousePosition={mousePosition}
                        variants={routeVariants}
                    />
                }
            />
            <Route
                path="/contact"
                element={<ContactPage variants={routeVariants} />}
            />
            <Route
                path="/projects"
                element={<ProjectPage variants={routeVariants} />}
            />
        </Routes>
    );
}

export default App;
