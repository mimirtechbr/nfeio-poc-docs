// Minimal stubs to satisfy external plugin type imports that are not shipped with @docusaurus/core
// These are intentionally lightweight and only include the shapes actually referenced.

declare module '@docusaurus/plugin-content-docs/src/sidebars/types' {
  export interface SidebarItemDoc {
    type: string;
    id?: string;
    label?: string;
    items?: any[];
    permalink?: string;
  }
}

declare module '@docusaurus/plugin-content-docs-types' {
  export interface SidebarItemLink { type: string; label?: string; href?: string; };
  export interface PropSidebarItemCategory { type: string; label?: string; items?: any[]; collapsed?: boolean; };
  export type PropSidebarItem = SidebarItemLink | PropSidebarItemCategory | any;
  export interface PropSidebar extends Array<PropSidebarItem> {}
}

