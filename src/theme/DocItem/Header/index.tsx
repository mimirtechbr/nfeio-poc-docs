// File: 'src/theme/DocItem/Header/index.tsx'
import React from 'react';
import OriginalHeader from '@theme-original/DocItem/Header';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function DocItemHeader(props: React.ComponentProps<typeof OriginalHeader>) {
  const {frontMatter} = useDoc();
  const layoutType = (frontMatter as {layout_type?: string}).layout_type;

  if (layoutType === 'IntegrationLayout') {
    // Hide the default doc header; the custom layout renders its own hero/title.
    return null;
  }

  return <OriginalHeader {...props} />;
}
