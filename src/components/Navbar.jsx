import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex pointer-events-auto text-nowrap text-xs sm:text-sm md:text-base justify-between">
            <Link
                to={"/"}
                className="hoverable hover:cursor-pointer"
                data-hover-message="Return Home?"
            >
                DEV-PORTFOLIO
            </Link>
            <div className="items flex gap-10">
                <Link
                    to={"/"}
                    alt="Just hold on, we're going home!"
                    className="hoverable pointer-events-auto hover:cursor-pointer"
                >
                    HOME
                </Link>
                <Link
                    to={"/contact"}
                    alt="Get in contact with me!"
                    className="hoverable pointer-events-auto hover:cursor-pointer"
                >
                    CONTACT
                </Link>
                <Link
                    to={"/projects"}
                    alt="Get in contact with me!"
                    className="hoverable pointer-events-auto hover:cursor-pointer"
                >
                    PROJECTS
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
