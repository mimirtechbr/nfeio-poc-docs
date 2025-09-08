"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@site/lib/utils";


// Função para obter as cores do tema Docusaurus
const getThemeColors = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return [
            "#005097", // Fallback para --ifm-color-primary
            "#004888", // Fallback para --ifm-color-primary-dark
            "#004480", // etc.
            "#00386a",
            "#0058a6",
            "#005cae",
            "#0068c4"
        ];
    }

    const style = getComputedStyle(document.documentElement);
    return [
        style.getPropertyValue('--ifm-color-primary').trim(),
        style.getPropertyValue('--ifm-color-primary-dark').trim(),
        style.getPropertyValue('--ifm-color-primary-darker').trim(),
        style.getPropertyValue('--ifm-color-primary-darkest').trim(),
        style.getPropertyValue('--ifm-color-primary-light').trim(),
        style.getPropertyValue('--ifm-color-primary-lighter').trim(),
        style.getPropertyValue('--ifm-color-primary-lightest').trim(),
        style.getPropertyValue('--ifm-color-secondary').trim(),
        style.getPropertyValue('--ifm-color-secondary-dark').trim(),
    ];
};




export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);
    let colors = getThemeColors();
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
    }}
    className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
)}
    {...rest}
>
    {rows.map((_, i) => (
        <motion.div
            key={`row` + i}
        className="relative h-8 w-16 border-l border-slate-700"
            >
            {cols.map((_, j) => (
                    <motion.div
                        whileHover={{
        backgroundColor: `${getRandomColor()}`,
            transition: { duration: 0 },
    }}
        animate={{
        transition: { duration: 2 },
    }}
        key={`col` + j}
        className="relative h-8 w-16 border-t border-r border-slate-700"
        >
        {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
            fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
        >
        <path
            strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
            />
            </svg>
    ) : null}
        </motion.div>
    ))}
        </motion.div>
    ))}
    </div>
);
};

export const BoxesBackground = React.memo(BoxesCore);
