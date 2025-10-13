import React, {PropsWithChildren} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import styles from './IntegrationLayout.module.css';

type IntegrationFrontMatter = {
    heroTitle?: string;
    heroDescription?: string;
    provider?: string;
    badge?: string;
    ctaLabel?: string;
    ctaUrl?: string;
    heroImage?: string; // path under 'static/'
    tags?: string[];
};

export function IntegrationLayout({children}: PropsWithChildren) {
    const {metadata, frontMatter} = useDoc();

    const fm = frontMatter as IntegrationFrontMatter;
    const title = fm.heroTitle ?? metadata.title;
    const description = fm.heroDescription ?? metadata.description;

    return (
        <div className={`${styles.container} tw-scope container`}>
            <header className={styles.hero}>
                <div className={styles.heroText}>
                    {fm.provider && <span className={styles.provider}>{fm.provider}</span>}
                    <h1 className={styles.title}>{title}</h1>
                    {description && <p className={styles.description}>{description}</p>}
                    <div className={styles.metaRow}>
                        {fm.badge && <span className={styles.badge}>{fm.badge}</span>}
                        {/*{Array.isArray(fm.tags) && fm.tags.length > 0 && (*/}
                        {/*    <ul className={styles.tags}>*/}
                        {/*        {fm.tags.map((t) => (*/}
                        {/*            <li key={t} className={styles.tagItem}>{t}</li>*/}
                        {/*        ))}*/}
                        {/*    </ul>*/}
                        {/*)}*/}
                    </div>
                    {fm.ctaUrl && fm.ctaLabel && (
                        <div className={styles.ctaRow}>
                            <Link className={styles.cta} to={fm.ctaUrl}>
                                {fm.ctaLabel}
                            </Link>
                        </div>
                    )}
                </div>
                {fm.heroImage && (
                    <div className={`${styles.heroImageWrap} container max-w-sm`}>
                        <img className={`${styles.heroImage} bg-primary-500 px-8 py-2 rounded-md hover:border-primary-500`} src={fm.heroImage} alt={title} />
                    </div>
                )}
            </header>

            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}

export default IntegrationLayout;
