import { IoIosMail } from "react-icons/io";
import { FaGithub, FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";

function ContactPage({ variants }) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="final"
            className="flex flex-col items-center justify-center h-full py-3"
        >
            <h1 className="text-3xl mb-3">Contact Me!</h1>
            <p className=" text-sm font-normal w-3/4">
                If you're trying to get in contact with me, you can try
                messaging me on my social media accounts or email me at{" "}
                <a
                    href="mailto:s2kdevelopshare@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    s2kdevelopshare@gmail.com
                </a>
                . I'll do my best to respond to you in a timely manner.
            </p>
            <div className="flex mt-3 text-lg font-normal flex-col items-center text-center">
                <p className=" hover:text-yellow-300 transition-all hover:cursor-pointer">
                    <IoIosMail className="inline-block mr-2" />
                    Email
                </p>
                <p className=" hover:text-blue-800 transition-all hover:cursor-pointer">
                    <FaGithub className="inline-block mr-2" />
                    Github
                </p>
                <p className=" hover:text-blue-300 transition-all hover:cursor-pointer">
                    <FaDiscord className="inline-block mr-2" />
                    Discord
                </p>
            </div>
        </motion.div>
    );
}

export default ContactPage;
