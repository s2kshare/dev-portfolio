import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaEnvelope, FaReact } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function HomePage({ variants }) {
    const welcomeArray = ["W", "E", "L", "C", "O", "M", "E"];
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Track mouse position within the div
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Handle mouse movement
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const relativeX = e.clientX - left - width / 2;
        const relativeY = e.clientY - top - height / 2;

        mouseX.set(relativeX);
        mouseY.set(relativeY);
    };

    return (
        <motion.div
            ref={containerRef}
            variants={variants}
            initial="initial"
            animate="final"
            className="flex items-center justify-center w-full h-full flex-col"
            onMouseMove={handleMouseMove}
        >
            <motion.h1 className="text-6xl font-semibold flex gap-2">
                {welcomeArray.map((letter, index) => {
                    const baseX = (index - welcomeArray.length / 2) * 60;
                    const baseY = 0;

                    // Floating effect: randomizing the starting position and slight movement
                    const floatX = useMotionValue(Math.random() * 20 - 10); // Random horizontal drift
                    const floatY = useMotionValue(Math.random() * 20 - 10); // Random vertical drift
                    const rotate = useMotionValue(Math.random() * 10 - 5); // Slight random rotation

                    // Mouse movement effect
                    const moveX = useTransform(mouseX, (x) =>
                        Math.abs(x - baseX) < 150 ? (x - baseX) * 0.2 : 0
                    );
                    const moveY = useTransform(mouseY, (y) =>
                        Math.abs(y - baseY) < 150 ? (y - baseY) * 0.2 : 0
                    );
                    const rotateEffect = useTransform(mouseX, (x) =>
                        Math.abs(x - baseX) < 150
                            ? (x - baseX) * 0.1
                            : rotate.get()
                    );

                    // Smooth animations
                    const springX = useSpring(moveX, {
                        stiffness: 100,
                        damping: 10,
                    });
                    const springY = useSpring(moveY, {
                        stiffness: 100,
                        damping: 10,
                    });
                    const springRotate = useSpring(rotateEffect, {
                        stiffness: 100,
                        damping: 10,
                    });

                    // Apply floating effect on top of mouse movement
                    const finalX = useSpring(floatX, {
                        stiffness: 200,
                        damping: 10,
                    });
                    const finalY = useSpring(floatY, {
                        stiffness: 200,
                        damping: 10,
                    });

                    // Final position combines floating and mouse movement effects
                    const finalPosX = useTransform(
                        [finalX, springX],
                        ([float, move]) => float + move
                    );
                    const finalPosY = useTransform(
                        [finalY, springY],
                        ([float, move]) => float + move
                    );

                    return (
                        <motion.span
                            key={index}
                            style={{
                                x: finalPosX,
                                y: finalPosY,
                                rotate: springRotate,
                                transformOrigin: "center center",
                            }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    );
                })}
            </motion.h1>

            <p className="text-base font-normal">Hello! My Name is Devontae!</p>
            <p className="text-xs font-normal">
                Read the panel on the left to read about me!
            </p>
            <div className="flex gap-2">
                <motion.button
                    className="py-2 flex gap-2 items-center px-4 mt-4 bg-[--col-base-300] rounded-md text-white hover:bg-[--col-base-100] transition duration-300 text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/projects")}
                >
                    <FaReact className="mr-2" /> Check Projects
                </motion.button>
                <motion.button
                    className="py-2 px-4 flex items-center gap-2 mt-4 border border-[--col-base-300] text-[--col-base-300] rounded-md hover:bg-[--col-base-300] hover:text-white transition duration-300 text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/contact")}
                >
                    <FaEnvelope className="" /> Send Message
                </motion.button>
            </div>
        </motion.div>
    );
}

export default HomePage;
