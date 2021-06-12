(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{481:function(e,t,a){"use strict";a.r(t);var s=a(57),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"instant-prototyping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instant-prototyping"}},[e._v("#")]),e._v(" Instant Prototyping")]),e._v(" "),a("p",[e._v("You can rapidly prototype with just a single "),a("code",[e._v("*.vue")]),e._v(" file with the "),a("code",[e._v("vue serve")]),e._v(" and "),a("code",[e._v("vue build")]),e._v(" commands, but they require a global addon to be installed along with the Vue CLI:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @vue/cli @vue/cli-service-global\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @vue/cli @vue/cli-service-global\n")])])]),a("p",[e._v("The drawback of "),a("code",[e._v("vue serve")]),e._v(" is that it relies on globally installed dependencies which may be inconsistent on different machines. Therefore this is only recommended for rapid prototyping.")]),e._v(" "),a("h3",{attrs:{id:"vue-serve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-serve"}},[e._v("#")]),e._v(" vue serve")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: serve [options] [entry]\n\nserve a .js or .vue file in development mode with zero config\n\n\nOptions:\n\n  -o, --open         Open browser\n  -c, --copy         Copy local url to clipboard\n  -p, --port <port>  Port used by the server (default: 8080 or next available port)\n  -h, --help         Output usage information\n")])])]),a("p",[e._v("All you need is an "),a("code",[e._v("App.vue")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("Hello!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[e._v("Then in the directory with the "),a("code",[e._v("App.vue")]),e._v(" file, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vue serve\n")])])]),a("p",[a("code",[e._v("vue serve")]),e._v(" uses the same default setup (webpack, babel, postcss & eslint) as projects created by "),a("code",[e._v("vue create")]),e._v(". It automatically infers the entry file in the current directory - the entry can be one of "),a("code",[e._v("main.js")]),e._v(", "),a("code",[e._v("index.js")]),e._v(", "),a("code",[e._v("App.vue")]),e._v(" or "),a("code",[e._v("app.vue")]),e._v(". You can also explicitly specify the entry file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vue serve MyComponent.vue\n")])])]),a("p",[e._v("If needed, you can also provide an "),a("code",[e._v("index.html")]),e._v(", "),a("code",[e._v("package.json")]),e._v(", install and use local dependencies, or even configure babel, postcss & eslint with corresponding config files.")]),e._v(" "),a("h3",{attrs:{id:"vue-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-build"}},[e._v("#")]),e._v(" vue build")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: build [options] [entry]\n\nbuild a .js or .vue file in production mode with zero config\n\n\nOptions:\n\n  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)\n  -n, --name <name>      name for lib or web-component (default: entry filename)\n  -d, --dest <dir>       output directory (default: dist)\n  -h, --help             output usage information\n")])])]),a("p",[e._v("You can also build the target file into a production bundle for deployment with "),a("code",[e._v("vue build")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vue build MyComponent.vue\n")])])]),a("p",[a("code",[e._v("vue build")]),e._v(" also provides the ability to build the component as a library or a web component. See "),a("RouterLink",{attrs:{to:"/guide/build-targets.html"}},[e._v("Build Targets")]),e._v(" for more details.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);