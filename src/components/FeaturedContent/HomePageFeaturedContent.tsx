import React from 'react';
import Link from '@docusaurus/Link';
import {DocumentTextIcon} from '@heroicons/react/20/solid';

function SidebarCard({title, description, items, colorClass = 'primary'}) {
    const colorMap = {
        blue: 'nfeio-border-t-gradient-4  bg-slate-50',
        red: 'border-t-4 border-red-500 bg-red-50',
        orange: 'border-t-4 border-orange-500 bg-orange-50',
        green: 'border-t-4 border-green-500 bg-green-50',
        purple: 'border-t-4 border-purple-500 bg-purple-50',
        primary: 'border-t-4 border-indigo-500 bg-indigo-50',
    };
    const cardStyle = `rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full ${colorMap[colorClass] || ''}`;
    return (
        <div className={cardStyle}>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                {description && <p className="text-gray-600 mb-4">{description}</p>}
            </div>
            <div className="p-4 flex-grow">
                <ul className="list-none space-y-2">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                            <DocumentTextIcon className="flex-shrink-0 size-6 text-gray-500"/>
                            <Link to={item.to} className="text-gray-800 hover:underline font-medium">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function HomePageFeaturedContent() {
    const featuredCategories = [
        {
            id: 'certificadoDigital',
            title: 'Certificado Digital',
            description: '',
            colorClass: 'blue',
            items: [
                {
                    label: 'Guia para exportar seu certificado digital no Mac OS',
                    to: '/documentacao/certificado-digital/guia-para-exportar-certificado-mac-os'
                },
                {
                    label: 'Guia para exportar seu certificado digital no Windows',
                    to: '/documentacao/certificado-digital/guia-para-exportar-certificado-windows'
                },
                {
                    label: 'Conceitos básicos sobre certificados digitais',
                    to: '/documentacao/certificado-digital/conceitos'
                },
            ]
        },
        {
            id: 'conceitos',
            title: 'Conceitos',
            description: '',
            colorClass: 'blue',
            items: [
                {
                    label: 'Webhooks',
                    to: '/documentacao/conceitos/webhooks'
                },
                {
                    label: 'Pessoa Jurídica',
                    to: '/documentacao/conceitos/pessoa-juridica'
                },
                {
                    label: 'Pessoa Física',
                    to: '/documentacao/conceitos/pessoa-fisica'
                }
            ]
        },
        {
            id: 'consultas',
            title: 'Consultas',
            description: '',
            colorClass: 'blue',
            items: [
                {
                    label: 'Introdução à consulta de CPF com a NFE.io',
                    to: '/documentacao/conceitos/pessoa-juridica'
                },
                {
                    label: 'Introdução à consulta de CNPJ com a NFE.io',
                    to: '/documentacao/conceitos/pessoa-juridica'
                },
                {
                    label: 'Consultar Endereços',
                    to: '/documentacao/conceitos/pessoa-juridica'
                },
            ]
        },
        {
            id: 'nfce',
            title: 'Nota Fiscal de Consumidor Eletrônica',
            description: '',
            colorClass: 'blue',
            items: [
                {
                    label: 'Conceitos',
                    to: '/documentacao/nota-fiscal-consumidor/conceitos'
                },
                {
                    label: 'Credenciamento da nota fiscal de consumidor',
                    to: '/documentacao/nota-fiscal-consumidor/credenciamento'
                },
                {
                    label: 'Integração Nota Fiscal de Consumidor - NFC-e',
                    to: '/documentacao/nota-fiscal-consumidor/integracao-api/nfc-primeiros-passos'
                },
            ]
        },
        {
            id: 'nfe',
            title: 'Nota Fiscal de Produto Eletrônica',
            description: '',
            colorClass: 'blue',
            items: [
                {
                    label: 'Primeiros Passos',
                    to: '/documentacao/conceitos/pessoa-juridica'
                },
                {
                    label: 'Credenciamento na SEFAZ: como emitir a Nota Fiscal Eletrônica',
                    to: '/documentacao/nota-fiscal-produto-eletronica/credenciamento'
                },
                {
                    label: 'Como habilitar o fornecedor e emissor de nota fiscal (NFe – mercadoria) estado do Paraná',
                    to: '/como-habilitar-o-fornecedor-e-emissor-de-nota-fiscal-nfe-mercadoria'
                },
            ]
        },
        {
            id: 'nfse',
            title: 'Nota Fiscal de Serviço Eletrônica',
            description: '',
            colorClass: 'blue',
            items: [
                {
                    label: 'API Prefeituras',
                    to: '/documentacao/nota-fiscal-servico-eletronica/api-prefeituras'
                },
                {
                    label: 'Campos de autorização NFSe',
                    to: '/documentacao/nota-fiscal-servico-eletronica/duvidas/campos-de-autorizacao-nfse'
                },
                {
                    label: 'Cálculo de impostos na NFE.io',
                    to: '/documentacao/nota-fiscal-servico-eletronica/duvidas/calculo-de-impostos'
                },
            ]
        },
    ];

    const cards = featuredCategories.map((category) => (
        <SidebarCard
            key={category.id}
            title={category.title}
            description={category.description}
            items={category.items || []}
            colorClass={category.colorClass}
        />
    ));

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {cards}
            </div>
        </div>
    );
}
