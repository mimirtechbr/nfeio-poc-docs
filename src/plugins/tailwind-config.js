//  Important: We're using .push() instead of replacing the plugin list. This keeps other PostCSS
//  features working (like Sass or autoprefixer).
module.exports = function tailwindPlugin(context, options) {
    return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("@tailwindcss/postcss"));
            return postcssOptions;
        },
    };
};