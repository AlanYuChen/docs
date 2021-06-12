(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{537:function(t,s,a){"use strict";a.r(s);var e=a(57),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"插件和-preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件和-preset"}},[t._v("#")]),t._v(" 插件和 Preset")]),t._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("Vue CLI 使用了一套基于插件的架构。如果你查阅一个新创建项目的 "),a("code",[t._v("package.json")]),t._v("，就会发现依赖都是以 "),a("code",[t._v("@vue/cli-plugin-")]),t._v(" 开头的。插件可以修改 webpack 的内部配置，也可以向 "),a("code",[t._v("vue-cli-service")]),t._v(" 注入命令。在项目创建的过程中，绝大部分列出的特性都是通过插件来实现的。")]),t._v(" "),a("p",[t._v("基于插件的架构使得 Vue CLI 灵活且可扩展。如果你对开发一个插件感兴趣，请翻阅"),a("RouterLink",{attrs:{to:"/zh/dev-guide/plugin-dev.html"}},[t._v("插件开发指南")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("你可以通过 "),a("code",[t._v("vue ui")]),t._v(" 命令使用 GUI 安装和管理插件。")])]),t._v(" "),a("h3",{attrs:{id:"在现有的项目中安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在现有的项目中安装插件"}},[t._v("#")]),t._v(" 在现有的项目中安装插件")]),t._v(" "),a("p",[t._v("每个 CLI 插件都会包含一个 (用来创建文件的) 生成器和一个 (用来调整 webpack 核心配置和注入命令的) 运行时插件。当你使用 "),a("code",[t._v("vue create")]),t._v(" 来创建一个新项目的时候，有些插件会根据你选择的特性被预安装好。如果你想在一个已经被创建好的项目中安装一个插件，可以使用 "),a("code",[t._v("vue add")]),t._v(" 命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" eslint\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("vue add")]),t._v(" 的设计意图是为了安装和调用 Vue CLI 插件。这不意味着替换掉普通的 npm 包。对于这些普通的 npm 包，你仍然需要选用包管理器。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("我们推荐在运行 "),a("code",[t._v("vue add")]),t._v(" 之前将项目的最新状态提交，因为该命令可能调用插件的文件生成器并很有可能更改你现有的文件。")])]),t._v(" "),a("p",[t._v("这个命令将 "),a("code",[t._v("@vue/eslint")]),t._v(" 解析为完整的包名 "),a("code",[t._v("@vue/cli-plugin-eslint")]),t._v("，然后从 npm 安装它，调用它的生成器。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个和之前的用法等价")]),t._v("\nvue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" cli-plugin-eslint\n")])])]),a("p",[t._v("如果不带 "),a("code",[t._v("@vue")]),t._v(" 前缀，该命令会换作解析一个 unscoped 的包。例如以下命令会安装第三方插件 "),a("code",[t._v("vue-cli-plugin-apollo")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装并调用 vue-cli-plugin-apollo")]),t._v("\nvue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" apollo\n")])])]),a("p",[t._v("你也可以基于一个指定的 scope 使用第三方插件。例如如果一个插件名为 "),a("code",[t._v("@foo/vue-cli-plugin-bar")]),t._v("，你可以这样添加它：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @foo/bar\n")])])]),a("p",[t._v("你可以向被安装的插件传递生成器选项 (这样做会跳过命令提示)：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" eslint --config airbnb --lintOn save\n")])])]),a("p",[t._v("如果一个插件已经被安装，你可以使用 "),a("code",[t._v("vue invoke")]),t._v(" 命令跳过安装过程，只调用它的生成器。这个命令会接受和 "),a("code",[t._v("vue add")]),t._v(" 相同的参数。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("如果出于一些原因你的插件列在了该项目之外的其它 "),a("code",[t._v("package.json")]),t._v(" 文件里，你可以在自己项目的 "),a("code",[t._v("package.json")]),t._v(" 里设置 "),a("code",[t._v("vuePlugins.resolveFrom")]),t._v(" 选项指向包含其它 "),a("code",[t._v("package.json")]),t._v(" 的文件夹。")]),t._v(" "),a("p",[t._v("例如，如果你有一个 "),a("code",[t._v(".config/package.json")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuePlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resolveFrom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".config"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"项目本地的插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目本地的插件"}},[t._v("#")]),t._v(" 项目本地的插件")]),t._v(" "),a("p",[t._v("如果你需要在项目里直接访问插件 API 而不需要创建一个完整的插件，你可以在 "),a("code",[t._v("package.json")]),t._v(" 文件中使用 "),a("code",[t._v("vuePlugins.service")]),t._v(" 选项：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuePlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"service"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-commands.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("每个文件都需要暴露一个函数，接受插件 API 作为第一个参数。关于插件 API 的更多信息可以查阅"),a("RouterLink",{attrs:{to:"/zh/dev-guide/plugin-dev.html"}},[t._v("插件开发指南")]),t._v("。")],1),t._v(" "),a("p",[t._v("你也可以通过 "),a("code",[t._v("vuePlugins.ui")]),t._v(" 选项添加像 UI 插件一样工作的文件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuePlugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ui"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-ui.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("更多信息请阅读 "),a("RouterLink",{attrs:{to:"/zh/dev-guide/ui-api.html"}},[t._v("UI 插件 API")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preset"}},[t._v("#")]),t._v(" Preset")]),t._v(" "),a("p",[t._v("一个 Vue CLI preset 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("vue create")]),t._v(" 过程中保存的 preset 会被放在你的 home 目录下的一个配置文件中 ("),a("code",[t._v("~/.vuerc")]),t._v(")。你可以通过直接编辑这个文件来调整、添加、删除保存好的 preset。")]),t._v(" "),a("p",[t._v("这里有一个 preset 的示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useConfigFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cssPreprocessor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sass"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vue/cli-plugin-babel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vue/cli-plugin-eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airbnb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lintOn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"save"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vue/cli-plugin-router"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vue/cli-plugin-vuex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Preset 的数据会被插件生成器用来生成相应的项目文件。除了上述这些字段，你也可以为集成工具添加配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useConfigFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcss"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslintConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这些额外的配置将会根据 "),a("code",[t._v("useConfigFiles")]),t._v(" 的值被合并到 "),a("code",[t._v("package.json")]),t._v(" 或相应的配置文件中。例如，当 "),a("code",[t._v('"useConfigFiles": true')]),t._v(" 的时候，"),a("code",[t._v("configs")]),t._v(" 的值将会被合并到 "),a("code",[t._v("vue.config.js")]),t._v(" 中。")]),t._v(" "),a("h3",{attrs:{id:"preset-插件的版本管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preset-插件的版本管理"}},[t._v("#")]),t._v(" Preset 插件的版本管理")]),t._v(" "),a("p",[t._v("你可以显式地指定用到的插件的版本：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vue/cli-plugin-eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 该插件的其它选项")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意对于官方插件来说这不是必须的——当被忽略时，CLI 会自动使用 registry 中最新的版本。不过"),a("strong",[t._v("我们推荐为 preset 列出的所有第三方插件提供显式的版本范围")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"允许插件的命令提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许插件的命令提示"}},[t._v("#")]),t._v(" 允许插件的命令提示")]),t._v(" "),a("p",[t._v("每个插件在项目创建的过程中都可以注入它自己的命令提示，不过当你使用了一个 preset，这些命令提示就会被跳过，因为 Vue CLI 假设所有的插件选项都已经在 preset 中声明过了。")]),t._v(" "),a("p",[t._v("在有些情况下你可能希望 preset 只声明需要的插件，同时让用户通过插件注入的命令提示来保留一些灵活性。")]),t._v(" "),a("p",[t._v("对于这种场景你可以在插件选项中指定 "),a("code",[t._v('"prompts": true')]),t._v(" 来允许注入命令提示：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vue/cli-plugin-eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让用户选取他们自己的 ESLint config")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prompts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"远程-preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程-preset"}},[t._v("#")]),t._v(" 远程 Preset")]),t._v(" "),a("p",[t._v("你可以通过发布 git repo 将一个 preset 分享给其他开发者。这个 repo 应该包含以下文件：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("preset.json")]),t._v(": 包含 preset 数据的主要文件（必需）。")]),t._v(" "),a("li",[a("code",[t._v("generator.js")]),t._v(": 一个可以注入或是修改项目中文件的 "),a("RouterLink",{attrs:{to:"/zh/dev-guide/plugin-dev.html#generator"}},[t._v("Generator")]),t._v("。")],1),t._v(" "),a("li",[a("code",[t._v("prompts.js")]),t._v(" 一个可以通过命令行对话为 generator 收集选项的 "),a("RouterLink",{attrs:{to:"/zh/dev-guide/plugin-dev.html#第三方插件的对话"}},[t._v("prompts 文件")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("发布 repo 后，你就可以在创建项目的时候通过 "),a("code",[t._v("--preset")]),t._v(" 选项使用这个远程的 preset 了：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 GitHub repo 使用 preset")]),t._v("\nvue create --preset username/repo my-project\n")])])]),a("p",[t._v("GitLab 和 BitBucket 也是支持的。如果要从私有 repo 获取，请确保使用 "),a("code",[t._v("--clone")]),t._v(" 选项：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue create --preset gitlab:username/repo --clone my-project\nvue create --preset bitbucket:username/repo --clone my-project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 私有服务器")]),t._v("\nvue create --preset gitlab:my-gitlab-server.com:group/projectname --clone my-project\nvue create --preset direct:ssh://git@my-gitlab-server.com/group/projectname.git --clone my-project\n")])])]),a("h3",{attrs:{id:"加载文件系统中的-preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载文件系统中的-preset"}},[t._v("#")]),t._v(" 加载文件系统中的 Preset")]),t._v(" "),a("p",[t._v("当开发一个远程 preset 的时候，你必须不厌其烦的向远程 repo 发出 push 进行反复测试。为了简化这个流程，你也可以直接在本地测试 preset。如果 "),a("code",[t._v("--preset")]),t._v(" 选项的值是一个相对或绝对文件路径，或是以 "),a("code",[t._v(".json")]),t._v(" 结尾，则 Vue CLI 会加载本地的 preset：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./my-preset 应当是一个包含 preset.json 的文件夹")]),t._v("\nvue create --preset ./my-preset my-project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者，直接使用当前工作目录下的 json 文件：")]),t._v("\nvue create --preset my-preset.json my-project\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);