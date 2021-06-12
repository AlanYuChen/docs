(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{528:function(e,t,s){"use strict";s.r(t);var r=s(57),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性"}},[e._v("#")]),e._v(" 浏览器兼容性")]),e._v(" "),s("h2",{attrs:{id:"browserslist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[e._v("#")]),e._v(" browserslist")]),e._v(" "),s("p",[e._v("你会发现有 "),s("code",[e._v("package.json")]),e._v(" 文件里的 "),s("code",[e._v("browserslist")]),e._v(" 字段 (或一个单独的 "),s("code",[e._v(".browserslistrc")]),e._v(" 文件)，指定了项目的目标浏览器的范围。这个值会被 "),s("a",{attrs:{href:"https://new.babeljs.io/docs/en/next/babel-preset-env.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@babel/preset-env"),s("OutboundLink")],1),e._v(" 和 "),s("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Autoprefixer"),s("OutboundLink")],1),e._v(" 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。")]),e._v(" "),s("p",[e._v("现在查阅"),s("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("了解如何指定浏览器范围。")]),e._v(" "),s("h2",{attrs:{id:"polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polyfill"}},[e._v("#")]),e._v(" Polyfill")]),e._v(" "),s("h3",{attrs:{id:"usebuiltins-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usebuiltins-usage"}},[e._v("#")]),e._v(" useBuiltIns: 'usage'")]),e._v(" "),s("p",[e._v("一个默认的 Vue CLI 项目会使用 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vue/babel-preset-app"),s("OutboundLink")],1),e._v("，它通过 "),s("code",[e._v("@babel/preset-env")]),e._v(" 和 "),s("code",[e._v("browserslist")]),e._v(" 配置来决定项目需要的 polyfill。")]),e._v(" "),s("p",[e._v("默认情况下，它会把 "),s("a",{attrs:{href:"https://new.babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-usage",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("useBuiltIns: 'usage'")]),s("OutboundLink")],1),e._v(" 传递给 "),s("code",[e._v("@babel/preset-env")]),e._v("，这样它会根据源代码中出现的语言特性自动检测需要的 polyfill。这确保了最终包里 polyfill 数量的最小化。然而，这也意味着"),s("strong",[e._v("如果其中一个依赖需要特殊的 polyfill，默认情况下 Babel 无法将其检测出来。")])]),e._v(" "),s("p",[e._v("如果有依赖需要 polyfill，你有几种选择：")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("如果该依赖基于一个目标环境不支持的 ES 版本撰写:")]),e._v(" 将其添加到 "),s("code",[e._v("vue.config.js")]),e._v(" 中的 "),s("RouterLink",{attrs:{to:"/zh/config/#transpiledependencies"}},[s("code",[e._v("transpileDependencies")])]),e._v(" 选项。这会为该依赖同时开启语法转换和根据使用情况检测 polyfill。")],1)]),e._v(" "),s("li",[s("p",[s("strong",[e._v("如果该依赖交付了 ES5 代码并显式地列出了需要的 polyfill:")]),e._v(" 你可以使用 "),s("code",[e._v("@vue/babel-preset-app")]),e._v(" 的 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#polyfills",target:"_blank",rel:"noopener noreferrer"}},[e._v("polyfills"),s("OutboundLink")],1),e._v(" 选项预包含所需要的 polyfill。"),s("strong",[e._v("注意 "),s("code",[e._v("es.promise")]),e._v(" 将被默认包含，因为现在的库依赖 Promise 是非常普遍的。")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// babel.config.js")]),e._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  presets"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@vue/app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      polyfills"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'es.promise'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'es.symbol'")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("我们推荐以这种方式添加 polyfill 而不是在源代码中直接导入它们，因为如果这里列出的 polyfill 在 "),s("code",[e._v("browserslist")]),e._v(" 的目标中不需要，则它会被自动排除。")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("如果该依赖交付 ES5 代码，但使用了 ES6+ 特性且没有显式地列出需要的 polyfill (例如 Vuetify)："),s("strong",[e._v("请使用 "),s("code",[e._v("useBuiltIns: 'entry'")]),e._v(" 然后在入口文件添加 "),s("code",[e._v("import 'core-js/stable'; import 'regenerator-runtime/runtime';")]),e._v("。这会根据 "),s("code",[e._v("browserslist")]),e._v(" 目标导入")]),e._v("所有")]),e._v(" polyfill，这样你就不用再担心依赖的 polyfill 问题了，但是因为包含了一些没有用到的 polyfill 所以最终的包大小可能会增加。")])])]),e._v(" "),s("p",[e._v("更多细节可查阅 "),s("a",{attrs:{href:"https://new.babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("@babel/preset-env 文档"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"构建库或是-web-component-时的-polyfills"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建库或是-web-component-时的-polyfills"}},[e._v("#")]),e._v(" 构建库或是 Web Component 时的 Polyfills")]),e._v(" "),s("p",[e._v("当使用 Vue CLI 来"),s("RouterLink",{attrs:{to:"/zh/guide/build-targets.html"}},[e._v("构建一个库或是 Web Component")]),e._v(" 时，推荐给 "),s("code",[e._v("@vue/babel-preset-app")]),e._v(" 传入 "),s("code",[e._v("useBuiltIns: false")]),e._v(" 选项。这能够确保你的库或是组件不包含不必要的 polyfills。通常来说，打包 polyfills 应当是最终使用你的库的应用的责任。")],1),e._v(" "),s("h2",{attrs:{id:"现代模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现代模式"}},[e._v("#")]),e._v(" 现代模式")]),e._v(" "),s("p",[e._v("有了 Babel 我们可以兼顾所有最新的 ES2015+ 语言特性，但也意味着我们需要交付转译和 polyfill 后的包以支持旧浏览器。这些转译后的包通常都比原生的 ES2015+ 代码会更冗长，运行更慢。现如今绝大多数现代浏览器都已经支持了原生的 ES2015，所以因为要支持更老的浏览器而为它们交付笨重的代码是一种浪费。")]),e._v(" "),s("p",[e._v("Vue CLI 提供了一个“现代模式”帮你解决这个问题。以如下命令为生产环境构建：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vue-cli-service build --modern\n")])])]),s("p",[e._v("Vue CLI 会产生两个应用的版本：一个现代版的包，面向支持 "),s("a",{attrs:{href:"https://jakearchibald.com/2017/es-modules-in-browsers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES modules"),s("OutboundLink")],1),e._v(" 的现代浏览器，另一个旧版的包，面向不支持的旧浏览器。")]),e._v(" "),s("p",[e._v("最酷的是这里没有特殊的部署要求。其生成的 HTML 文件会自动使用 "),s("a",{attrs:{href:"https://philipwalton.com/articles/deploying-es2015-code-in-production-today/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phillip Walton 精彩的博文"),s("OutboundLink")],1),e._v("中讨论到的技术：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("现代版的包会通过 "),s("code",[e._v('<script type="module">')]),e._v(" 在被支持的浏览器中加载；它们还会使用 "),s("code",[e._v('<link rel="modulepreload">')]),e._v(" 进行预加载。")])]),e._v(" "),s("li",[s("p",[e._v("旧版的包会通过 "),s("code",[e._v("<script nomodule>")]),e._v(" 加载，并会被支持 ES modules 的浏览器忽略。")])]),e._v(" "),s("li",[s("p",[e._v("一个针对 Safari 10 中 "),s("code",[e._v("<script nomodule>")]),e._v(" 的修复会被自动注入。")])])]),e._v(" "),s("p",[e._v("对于一个 Hello World 应用来说，现代版的包已经小了 16%。在生产环境下，现代版的包通常都会表现出显著的解析速度和运算速度，从而改善应用的加载性能。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[s("code",[e._v('<script type="module">')]),e._v(" "),s("a",{attrs:{href:"https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("需要配合始终开启的 CORS 进行加载"),s("OutboundLink")],1),e._v("。这意味着你的服务器必须返回诸如 "),s("code",[e._v("Access-Control-Allow-Origin: *")]),e._v(" 的有效的 CORS 头。如果你想要通过认证来获取脚本，可使将 "),s("RouterLink",{attrs:{to:"/zh/config/#crossorigin"}},[e._v("crossorigin")]),e._v(" 选项设置为 "),s("code",[e._v("use-credentials")]),e._v("。")],1),e._v(" "),s("p",[e._v("同时，现代浏览器使用一段内联脚本来避免 Safari 10 重复加载脚本包，所以如果你在使用一套严格的 CSP，你需要这样显性地允许内联脚本：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Content-Security-Policy: script-src 'self' 'sha256-4RS22DYeB7U14dra4KcQYxmwt5HkOInieXK1NUMBmQI='\n")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);