"use client";
// https://ui.aceternity.com/components/hover-border-gradient
import React, {useState, useEffect, useRef} from "react";
import {motion} from "motion/react";
import {cn} from "@site/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";
type ColorTheme = "green" | "blue";

export function HoverBorderGradient({
                                        children,
                                        containerClassName,
                                        className,
                                        as: Tag = "button",
                                        duration = 1,
                                        clockwise = true,
                                        colorTheme = "green",
                                        ...props
                                    }: React.PropsWithChildren<
    {
        as?: React.ElementType;
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
        colorTheme?: ColorTheme;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const rotateDirection = (currentDirection: Direction): Direction => {
        const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    // Green theme (original)
    const greenMovingMap: Record<Direction, string> = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(93, 207, 242, 1) 0%, rgba(93, 207, 242, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(93, 207, 242, 1) 0%, rgba(93, 207, 242, 0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(121, 234, 83, 1) 0%, rgba(121, 234, 83, 0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(121, 234, 83, 1) 0%, rgba(121, 234, 83, 0) 100%)",
    };

    // Blue theme based on the primary colors from custom.css
    const blueMovingMap: Record<Direction, string> = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(0, 80, 151, 1) 0%, rgba(0, 80, 151, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(0, 80, 151, 1) 0%, rgba(0, 80, 151, 0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(0, 88, 166, 1) 0%, rgba(0, 88, 166, 0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(0, 104, 196, 1) 0%, rgba(0, 104, 196, 0) 100%)",
    };

    // Select the appropriate moving map based on the color theme
    const movingMap = colorTheme === "blue" ? blueMovingMap : greenMovingMap;

    // Different highlight gradients based on theme
    const greenHighlight = "radial-gradient(75% 181.16% at 50% 50%, rgba(93, 207, 242, 1) 0%, rgba(121, 234, 83, 0.5) 100%)";
    const blueHighlight = "radial-gradient(75% 181.16% at 50% 50%, rgba(0, 80, 151, 1) 0%, rgba(0, 104, 196, 0.5) 100%)";

    // Select the appropriate highlight based on the color theme
    const highlight = colorTheme === "blue" ? blueHighlight : greenHighlight;

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered]);
    return (
        <Tag
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-full border border-slate-50  content-center bg-transparent items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-auto text-white z-10 bg-transparent px-4 py-2 rounded-[inherit]",
                    className
                )}
            >
                {children}
            </div>
            <motion.div
                className={cn(
                    "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                )}
                style={{
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
                initial={{background: movingMap[direction]}}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ease: "linear", duration: duration ?? 1}}
            />
            <div className="bg-slate-50 absolute z-1 flex-none inset-[2px] rounded-[100px]"/>
        </Tag>
    );
}
