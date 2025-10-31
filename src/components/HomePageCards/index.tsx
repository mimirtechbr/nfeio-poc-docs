"use client";

import React from "react";
import {WobbleCard} from "../AceternityUI/WobbleCard";
import {HoverBorderGradient} from "@site/src/components/AceternityUI/HoverBorderGradient";

export default function HomePageCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full px-4 py-15">
            {/*docs*/}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 bg-primary min-h-[400px] lg:min-h-[500px] xl:min-h-[300px]"
            >
                <div className="max-w-md">
                    <h2 className="max-w-md md:max-w-lg lg:max-w-xl text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                        Documentação NFe.io
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Seja bem vindo à documentação do NFE! Você vai encontrar aqui documentação sobre a plataforma,
                        referência para as APIs e bibliotecas para desenvolvimento. Nosso objetivo com esse portal é
                        apoiar você para que seja rápido e fácil começar a emissão de notas fiscais eletrônicas.
                    </p>
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
                </div>
                <img
                    src="/docs/img/docs-top.jpg"
                    width={500}
                    height={500}
                    alt="Documentação NFe.io"
                    className="absolute -right-4 md:-right-[40%] lg:-right-1  lg:-bottom-15 md:bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            {/*docs*/}
            {/*api*/}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-1 h-full bg-secondary min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Referências da API
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Veja todas as referências das nossas APIs e Bibliotecas de Linguagens
                    </p>

                    <div className="flex justify-center text-center">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            to="/api-rest"
                            className="bg-transparent text-black flex items-center space-x-2"
                            colorTheme="blue"
                        >
                            <span>Acesse as Referencias da API</span>
                        </HoverBorderGradient>
                    </div>
                </div>
                <img
                    src="/docs/img/img-desenvolvedores.jpg"
                    width={480}
                    height={500}
                    alt="Referências da API NFE.io"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -top-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            {/*api*/}
            {/*integracoes*/}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-1 h-full bg-primary-300 min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Integrações NFE.io
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Confira quais são as integrações com Plataformas e Plugins.
                    </p>

                    <div className="flex justify-center text-center mt-4">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-transparent text-black flex items-center space-x-2"
                            colorTheme="green"
                            to={'/integracoes'}
                        >
                            <span>Veja as Integrações</span>
                        </HoverBorderGradient>
                    </div>
                </div>
                <img
                    src="/docs/img/img-integracoes.jpg"
                    width={480}
                    height={500}
                    alt="Integrações da NFE.io"
                    className="absolute -right-4 lg:-right-[33%] grayscale filter -top-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            {/*integracoes*/}
        </div>
    );
}
