// File: 'src/theme/DocItem/Content/index.tsx'
import React from 'react';
import OriginalContent from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import IntegrationLayout from '@site/src/components/IntegrationLayout/IntegrationLayout';

const LAYOUTS: Record<string, React.ComponentType<React.PropsWithChildren>> = {
    IntegrationLayout,
};

export default function DocItemContent(props: React.ComponentProps<typeof OriginalContent>) {
    const {frontMatter} = useDoc();
    const layoutType = (frontMatter as {layout_type?: string}).layout_type;

    const Layout = layoutType ? LAYOUTS[layoutType] : undefined;

    if (Layout) {
        return (
            <Layout>
                <OriginalContent {...props} />
            </Layout>
        );
    }

    return <OriginalContent {...props} />;
}