// File: 'src/theme/MDXComponents/index.tsx'
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import IntegrationLayout from '@site/src/components/IntegrationLayout/IntegrationLayout';

export default {
  ...MDXComponents,
  IntegrationLayout,
} as typeof MDXComponents;