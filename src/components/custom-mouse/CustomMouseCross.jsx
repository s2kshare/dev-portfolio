import {
    motion,
    useMotionValue,
    useSpring,
    useVelocity,
    useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A custom mouse cursor that follows the user's mouse position and changes its
 * style on hover.
 *
 * @param {{ x: number, y: number }} mousePosition
 *   The position of the mouse.
 *
 * @returns {JSX.Element}
 *   The custom mouse cursor element.
 */
function CustomMouseCross({ mousePosition, isHovering, message }) {
    const variants = {
        initial: [
            { x1: 24.5, y1: 25, x2: 24.5, y2: 0 }, // Vertical line (middle)
            { x1: 24, y1: 24.5, x2: 49, y2: 24.5 }, // Horizontal right
            { x1: 0, y1: 24.5, x2: 25, y2: 24.5 }, // Horizontal left
            { x1: 24.5, y1: 49, x2: 24.5, y2: 24 }, // Bottom vertical
        ],
        hover: [
            { x1: 12, y1: 11.5, x2: 37, y2: 11.5 }, // Top horizontal
            { x1: 36.5, y1: 11, x2: 36.5, y2: 36 }, // Right vertical
            { x1: 12.5, y1: 12, x2: 12.5, y2: 37 }, // Left vertical
            { x1: 12, y1: 36.5, x2: 37, y2: 36.5 }, // Bottom horizontal
        ],
    };

    const x = useMotionValue(mousePosition.x);
    const y = useMotionValue(mousePosition.y);

    const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

    const velocityX = useVelocity(smoothX);
    const velocityY = useVelocity(smoothY);

    const rotation = useSpring(velocityX, {
        stiffness: 10,
        damping: 15,
        mass: 0.5,
    });

    const controls = useAnimation();

    // Recenter the SVG to the exact mouse position after 1s of inactivity
    useEffect(() => {
        x.set(mousePosition.x);
        y.set(mousePosition.y);
    }, [mousePosition, x, y, controls]);

    useEffect(() => {}, [isHovering]);

    // TODO: Adjust dummy Text to component parameters

    return (
        <>
            <motion.svg
                width="50"
                height="50"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fixed pointer-events-none"
                style={{
                    translateX: "-125%",
                    translateY: "-125%",
                    x: smoothX,
                    y: smoothY,
                    rotate: rotation,
                }}
                animate={controls}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {variants.initial.map((line, index) => (
                    <motion.line
                        key={index}
                        initial={variants.initial[index]}
                        animate={
                            isHovering
                                ? variants.hover[index]
                                : variants.initial[index]
                        }
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        stroke="white"
                    />
                ))}
            </motion.svg>
            {/* Wipe opacity animation for floating text next to cursor only during hovering */}
            {isHovering && message && (
                <motion.p
                    className="fixed pointer-events-none bg-[--col-base-300] bg-opacity-75 px-2 py-1 rounded"
                    style={{
                        translateX: "0%",
                        translateY: "-200%",
                        x: smoothX,
                        y: smoothY,
                    }}
                >
                    {message.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.05, delay: index * 0.05 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.p>
            )}
        </>
    );
}

export default CustomMouseCross;
