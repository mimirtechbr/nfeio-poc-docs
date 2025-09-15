import React, {useCallback, useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {cn} from "@site/lib/utils";
import "./FlipWords.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {HoverBorderGradient} from "@site/src/components/AceternityUI/HoverBorderGradient";

const FlipWords = ({words, duration = 3000, className}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    // thanks for the fix Julian - https://github.com/Julian-AT
    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    `current-word-container z-10 inline-block relative text-white text-left px-2`,
                    className
                )}
                key={currentWord}
            >
                {currentWord.split(" ").map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{opacity: 0, y: 10, filter: "blur(8px)"}}
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                        transition={{
                            delay: wordIndex * 0.3,
                            duration: 0.2,
                        }}
                        className="inline-block whitespace-nowrap"
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={word + letterIndex}
                                initial={{opacity: 0, y: 10, filter: "blur(8px)"}}
                                animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                                transition={{
                                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                                    duration: 0.3,
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default function FlipWordsHero() {
    const words = ["Referências da API", "Documentação", "Integrações", "Prefeituras Integradas"];
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            <motion.div
                style={{marginTop: "10rem", marginBottom: "10rem"}}
                className="h-[40rem] flex-col justify-center justify-items-center items-center px-4 text-center text-white"
                initial={{opacity: 0, filter: "blur(4px)", y: 10}}
                animate={{opacity: 1, filter: "blur(0px)", y: 0}}
                transition={{
                    duration: 0.3,
                    delay: 0.1,
                    ease: "easeInOut",
                }}
            >
                <div
                    className={`flipwords-container text-3xl md:text-5xl lg:text-7xl font-extrabold mx-auto text-slate-50`}
                >
                    <FlipWords words={words}/>
                    <br/>
                    da{" "}
                    <span className="bg-gradient-to-r from-primary-400 to-secondary inline-block text-transparent bg-clip-text drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
            {siteConfig.organizationName}
          </span>
                </div>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-lg text-white font-normal"
                >
                    {siteConfig.tagline}
                </motion.p>
                <div className="flex justify-center text-center mt-4">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-transparent text-black flex items-center space-x-2"
                        colorTheme="green"
                        to={'/documentacao'}
                    >
                        <span>Acesse a Documentação Completa</span>
                    </HoverBorderGradient>
                </div>
            </motion.div>
        </>
    );
}
