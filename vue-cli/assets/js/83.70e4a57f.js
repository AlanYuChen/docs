(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{527:function(e,v,_){"use strict";_.r(v);var t=_(57),r=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[e._v("警告")]),e._v(" "),_("p",[e._v("这份文档是对应 "),_("code",[e._v("@vue/cli")]),e._v("。老版本的 "),_("code",[e._v("vue-cli")]),e._v(" 文档请移步"),_("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/v2#vue-cli--",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),_("OutboundLink")],1),e._v("。")])]),e._v(" "),_("p",[e._v("Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：")]),e._v(" "),_("ul",[_("li",[e._v("通过 "),_("code",[e._v("@vue/cli")]),e._v(" 实现的交互式的项目脚手架。")]),e._v(" "),_("li",[e._v("通过 "),_("code",[e._v("@vue/cli")]),e._v(" + "),_("code",[e._v("@vue/cli-service-global")]),e._v(" 实现的零配置原型开发。")]),e._v(" "),_("li",[e._v("一个运行时依赖 ("),_("code",[e._v("@vue/cli-service")]),e._v(")，该依赖：\n"),_("ul",[_("li",[e._v("可升级；")]),e._v(" "),_("li",[e._v("基于 webpack 构建，并带有合理的默认配置；")]),e._v(" "),_("li",[e._v("可以通过项目内的配置文件进行配置；")]),e._v(" "),_("li",[e._v("可以通过插件进行扩展。")])])]),e._v(" "),_("li",[e._v("一个丰富的官方插件集合，集成了前端生态中最好的工具。")]),e._v(" "),_("li",[e._v("一套完全图形化的创建和管理 Vue.js 项目的用户界面。")])]),e._v(" "),_("p",[e._v("Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。")]),e._v(" "),_("h2",{attrs:{id:"该系统的组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#该系统的组件"}},[e._v("#")]),e._v(" 该系统的组件")]),e._v(" "),_("p",[e._v("Vue CLI 有几个独立的部分——如果你看到了我们的"),_("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("源代码"),_("OutboundLink")],1),e._v("，你会发现这个仓库里同时管理了多个单独发布的包。")]),e._v(" "),_("h3",{attrs:{id:"cli"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),_("p",[e._v("CLI ("),_("code",[e._v("@vue/cli")]),e._v(") 是一个全局安装的 npm 包，提供了终端里的 "),_("code",[e._v("vue")]),e._v(" 命令。它可以通过 "),_("code",[e._v("vue create")]),e._v(" 快速搭建一个新项目，或者直接通过 "),_("code",[e._v("vue serve")]),e._v(" 构建新想法的原型。你也可以通过 "),_("code",[e._v("vue ui")]),e._v(" 通过一套图形化界面管理你的所有项目。我们会在接下来的指南中逐章节深入介绍。")]),e._v(" "),_("h3",{attrs:{id:"cli-服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cli-服务"}},[e._v("#")]),e._v(" CLI 服务")]),e._v(" "),_("p",[e._v("CLI 服务 ("),_("code",[e._v("@vue/cli-service")]),e._v(") 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 "),_("code",[e._v("@vue/cli")]),e._v(" 创建的项目中。")]),e._v(" "),_("p",[e._v("CLI 服务是构建于 "),_("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),_("OutboundLink")],1),e._v(" 和 "),_("a",{attrs:{href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-dev-server"),_("OutboundLink")],1),e._v(" 之上的。它包含了：")]),e._v(" "),_("ul",[_("li",[e._v("加载其它 CLI 插件的核心服务；")]),e._v(" "),_("li",[e._v("一个针对绝大部分应用优化过的内部的 webpack 配置；")]),e._v(" "),_("li",[e._v("项目内部的 "),_("code",[e._v("vue-cli-service")]),e._v(" 命令，提供 "),_("code",[e._v("serve")]),e._v("、"),_("code",[e._v("build")]),e._v(" 和 "),_("code",[e._v("inspect")]),e._v(" 命令。")])]),e._v(" "),_("p",[e._v("如果你熟悉 "),_("a",{attrs:{href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("create-react-app"),_("OutboundLink")],1),e._v(" 的话，"),_("code",[e._v("@vue/cli-service")]),e._v(" 实际上大致等价于 "),_("code",[e._v("react-scripts")]),e._v("，尽管功能集合不一样。")]),e._v(" "),_("p",[_("RouterLink",{attrs:{to:"/zh/guide/cli-service.html"}},[e._v("CLI 服务")]),e._v("章节涵盖了它的具体用法。")],1),e._v(" "),_("h3",{attrs:{id:"cli-插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cli-插件"}},[e._v("#")]),e._v(" CLI 插件")]),e._v(" "),_("p",[e._v("CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 "),_("code",[e._v("@vue/cli-plugin-")]),e._v(" (内建插件) 或 "),_("code",[e._v("vue-cli-plugin-")]),e._v(" (社区插件) 开头，非常容易使用。")]),e._v(" "),_("p",[e._v("当你在项目内部运行 "),_("code",[e._v("vue-cli-service")]),e._v(" 命令时，它会自动解析并加载 "),_("code",[e._v("package.json")]),e._v(" 中列出的所有 CLI 插件。")]),e._v(" "),_("p",[e._v("插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的 preset。我们会在"),_("RouterLink",{attrs:{to:"/zh/guide/plugins-and-presets.html"}},[e._v("插件和 preset")]),e._v(" 章节进行深入讨论。")],1)])}),[],!1,null,null,null);v.default=r.exports}}]);