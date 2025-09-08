"use client";
import type {ReactNode} from 'react';
import React from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {BoxesBackground} from "@site/src/components/AceternityUI/BoxesBackground";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import FlipWordsHero from "@site/src/components/AceternityUI/FlipWords";
import HomePageCards from "@site/src/components/HomePageCards";
import HomePageSectionTitleOne from "@site/src/components/HomePageSectionTitles/HomePageSectionTitleOne";
import HomePageFeaturedContent from "@site/src/components/FeaturedContent/HomePageFeaturedContent";

function HeroSectionOne() {

    return (
        <div className="h-120 relative w-full overflow-hidden bg-slate-800 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-primary-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <BoxesBackground />
            <FlipWordsHero />
        </div>
    );
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
      wrapperClassName="homepage tw-scope"
    >
        <HeroSectionOne />
      <main className="homepage-main">
          <HomePageCards />
        <HomePageSectionTitleOne title={"Confira alguns itens da nossa documentação"} />
          <HomePageFeaturedContent />
      </main>
    </Layout>
  );
}
