import Navbar from "./Navbar";

function Frame({ mousePosition }) {
    const prior_messages = [
        "I'm a bit of a trophy hunter!",
        "Gary Come Home :(",
        "Never Try, Never Fail",
    ];

    return (
        <div className="flex pointer-events-none flex-col fixed top-10 left-10 right-10 bottom-10">
            <div className="top-nav flex-1">
                <Navbar />
            </div>
            <div className="mid-nav flex-[2_2_0%] text-xs flex-col pointer-events-none md:flex hidden ">
                <p className=" pointer-events-none text-xs">
                    X: {mousePosition.x}
                </p>
                <p className=" pointer-events-none text-xs">
                    Y: {mousePosition.y}
                </p>
                <div className=" pt-20">
                    {/* {prior_messages.map((message, index) => (
                        <p key={index} className=" text-xs">
                            {message}
                        </p>
                    ))} */}
                </div>
            </div>
            <div className="bot-nav pointer-events-none flex-1 flex flex-col justify-end">
                <a
                    href="https://google.com"
                    target="_blank"
                    className="pointer-events-auto"
                >
                    SOURCE_CODE
                </a>
            </div>
        </div>
    );
}

export default Frame;
