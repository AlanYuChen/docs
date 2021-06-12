(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{473:function(s,t,a){"use strict";a.r(t);var e=a(57),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-css"}},[s._v("#")]),s._v(" Working with CSS")]),s._v(" "),a("p",[s._v("Vue CLI projects comes with support for "),a("a",{attrs:{href:"http://postcss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Modules"),a("OutboundLink")],1),s._v(" and pre-processors including "),a("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Less"),a("OutboundLink")],1),s._v(" and "),a("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stylus"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"referencing-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referencing-assets"}},[s._v("#")]),s._v(" Referencing Assets")]),s._v(" "),a("p",[s._v("All compiled CSS are processed by "),a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-loader"),a("OutboundLink")],1),s._v(", which parses "),a("code",[s._v("url()")]),s._v(" and resolves them as module requests. This means you can refer to assets using relative paths based on the local file structure. Note if you want to reference a file inside an npm dependency or via webpack alias, the path must be prefixed with "),a("code",[s._v("~")]),s._v(" to avoid ambiguity. See "),a("RouterLink",{attrs:{to:"/guide/html-and-static-assets.html#static-assets-handling"}},[s._v("Static Asset Handling")]),s._v(" for more details.")],1),s._v(" "),a("h2",{attrs:{id:"pre-processors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-processors"}},[s._v("#")]),s._v(" Pre-Processors")]),s._v(" "),a("p",[s._v("You can select pre-processors (Sass/Less/Stylus) when creating the project. If you did not do so, the internal webpack config is still pre-configured to handle all of them. You just need to manually install the corresponding webpack loaders:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D sass-loader sass\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Less")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D less-loader "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Stylus")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D stylus-loader stylus\n")])])]),a("p",[s._v("Then you can import the corresponding file types, or use them in "),a("code",[s._v("*.vue")]),s._v(" files with:")]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("scss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("A Tip on Sass Performance")]),s._v(" "),a("p",[s._v("Note that when using Dart Sass, "),a("strong",[s._v("synchronous compilation is twice as fast as asynchronous compilation")]),s._v(" by default, due to the overhead of asynchronous callbacks. To avoid this overhead, you can use the "),a("a",{attrs:{href:"https://www.npmjs.com/package/fibers",target:"_blank",rel:"noopener noreferrer"}},[s._v("fibers"),a("OutboundLink")],1),s._v(" package to call asynchronous importers from the synchronous code path. To enable this, simply install "),a("code",[s._v("fibers")]),s._v(" as a project dependency:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -D fibers\n")])])]),a("p",[s._v("Please also be aware, as it's a native module, there may be compatibility issues vary on the OS and build environment. In that case, please run "),a("code",[s._v("npm uninstall -D fibers")]),s._v(" to fix the problem.")])]),s._v(" "),a("h3",{attrs:{id:"automatic-imports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-imports"}},[s._v("#")]),s._v(" Automatic imports")]),s._v(" "),a("p",[s._v("If you want to automatically import files (for colors, variables, mixins...), you can use the "),a("a",{attrs:{href:"https://github.com/yenshih/style-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("style-resources-loader"),a("OutboundLink")],1),s._v(". Here is an example for stylus that imports "),a("code",[s._v("./src/styles/imports.styl")]),s._v(" in every SFC and every stylus files:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" types "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue-modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normal-modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addStyleResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stylus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("oneOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addStyleResource")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-resource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-resources-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      patterns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/styles/imports.styl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("You can also use the "),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli-plugin-style-resources-loader"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[s._v("#")]),s._v(" PostCSS")]),s._v(" "),a("p",[s._v("Vue CLI uses PostCSS internally.")]),s._v(" "),a("p",[s._v("You can configure PostCSS via "),a("code",[s._v(".postcssrc")]),s._v(" or any config source supported by "),a("a",{attrs:{href:"https://github.com/michael-ciniawsky/postcss-load-config",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss-load-config"),a("OutboundLink")],1),s._v(", and configure "),a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss-loader"),a("OutboundLink")],1),s._v(" via "),a("code",[s._v("css.loaderOptions.postcss")]),s._v(" in "),a("code",[s._v("vue.config.js")]),s._v(".")]),s._v(" "),a("p",[s._v("The "),a("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[s._v("autoprefixer"),a("OutboundLink")],1),s._v(" plugin is enabled by default. To configure the browser targets, use the "),a("RouterLink",{attrs:{to:"/guide/browser-compatibility.html#browserslist"}},[s._v("browserslist")]),s._v(" field in "),a("code",[s._v("package.json")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Note on Vendor-prefixed CSS Rules")]),s._v(" "),a("p",[s._v("In the production build, Vue CLI optimizes your CSS and will drop unnecessary vendor-prefixed CSS rules based on your browser targets. With "),a("code",[s._v("autoprefixer")]),s._v(" enabled by default, you should always use only non-prefixed CSS rules.")])]),s._v(" "),a("h2",{attrs:{id:"css-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[s._v("#")]),s._v(" CSS Modules")]),s._v(" "),a("p",[s._v("You can "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/css-modules.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("use CSS Modules in "),a("code",[s._v("*.vue")]),s._v(" files"),a("OutboundLink")],1),s._v(" out of the box with "),a("code",[s._v("<style module>")]),s._v(".")]),s._v(" "),a("p",[s._v("To import CSS or other pre-processor files as CSS Modules in JavaScript, the filename should end with "),a("code",[s._v(".module.(css|less|sass|scss|styl)")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.module.css'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// works for all supported pre-processors as well")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sassStyles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.module.scss'")]),s._v("\n")])])]),a("p",[s._v("If you want to drop the "),a("code",[s._v(".module")]),s._v(" in the filenames, set "),a("code",[s._v("css.requireModuleExtension")]),s._v(" to "),a("code",[s._v("false")]),s._v(" in "),a("code",[s._v("vue.config.js")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    requireModuleExtension"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("If you wish to customize the generated CSS modules class names, you can do so via "),a("code",[s._v("css.loaderOptions.css")]),s._v(" in "),a("code",[s._v("vue.config.js")]),s._v(". All "),a("code",[s._v("css-loader")]),s._v(" options are supported here, for example "),a("code",[s._v("localIdentName")]),s._v(" and "),a("code",[s._v("camelCase")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaderOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Note: the following config format is different between Vue CLI v4 and v3")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// For Vue CLI v3 users, please refer to css-loader v1 documentations")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/webpack-contrib/css-loader/tree/v1.0.1")]),s._v("\n        modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          localIdentName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name]-[hash]'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        localsConvention"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'camelCaseOnly'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"passing-options-to-pre-processor-loaders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passing-options-to-pre-processor-loaders"}},[s._v("#")]),s._v(" Passing Options to Pre-Processor Loaders")]),s._v(" "),a("p",[s._v("Sometimes you may want to pass options to the pre-processor's webpack loader. You can do that using the "),a("code",[s._v("css.loaderOptions")]),s._v(" option in "),a("code",[s._v("vue.config.js")]),s._v(". For example, to pass some shared global variables to all your Sass/Less styles:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaderOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pass options to sass-loader")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @/ is an alias to src/")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// so this assumes you have a file named `src/variables.sass`")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Note: this option is named as "prependData" in sass-loader v8')]),s._v("\n      sass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        additionalData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('@import "~@/variables.sass"')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// by default the `sass` option will apply to both syntaxes")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// because `scss` syntax is also processed by sass-loader underlyingly")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// but when configuring the `prependData` option")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// in that case, we can target the `scss` syntax separately using the `scss` option")]),s._v("\n      scss"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        additionalData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('@import "~@/variables.scss";')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pass Less.js Options to less-loader")]),s._v("\n      less"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// http://lesscss.org/usage/#less-options-strict-units `Global Variables`")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `primary` is global variables fields name")]),s._v("\n        globalVars"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          primary"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#fff'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Loaders which can be configured via "),a("code",[s._v("loaderOptions")]),s._v(" include:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("css-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("sass-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("less-loader"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("stylus-loader"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("This is preferred over manually tapping into specific loaders using "),a("code",[s._v("chainWebpack")]),s._v(", because these options need to be applied in multiple locations where the corresponding loader is used.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);