(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{501:function(t,a,e){"use strict";e.r(a);var s=e(57),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"api-плагина"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-плагина"}},[t._v("#")]),t._v(" API плагина")]),t._v(" "),e("h2",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" version")]),t._v(" "),e("p",[t._v("Тип: "),e("code",[t._v("string")])]),t._v(" "),e("p",[t._v("Строка с версией "),e("code",[t._v("@vue/cli-service")]),t._v(" загружающей плагин.")]),t._v(" "),e("h2",{attrs:{id:"assertversion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#assertversion"}},[t._v("#")]),t._v(" assertVersion")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{integer | string} range")]),t._v(" — semver диапазон, которому должен соответствовать "),e("code",[t._v("@vue/cli-service")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")])]),t._v(" "),e("p",[t._v("Хотя "),e("code",[t._v("api.version")]),t._v(" и может быть полезным, иногда приятнее просто объявить требуемую версию. Данный API предоставляет простой способ сделать это.")]),t._v(" "),e("p",[t._v("Ничего не произойдёт, если предоставленная версия устраивает. В противном случае, будет выдана ошибка.")]),t._v(" "),e("p",[t._v("Примечание: Рекомендуется использовать "),e("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#peerdependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("поле "),e("code",[t._v("peerDependencies")]),t._v(" в файле "),e("code",[t._v("package.json")]),e("OutboundLink")],1),t._v(" в большинстве случаев.")])])]),t._v(" "),e("h2",{attrs:{id:"getcwd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcwd"}},[t._v("#")]),t._v(" getCwd")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Использование")]),t._v(":\nВозвращает текущий рабочий каталог")])]),t._v(" "),e("h2",{attrs:{id:"resolve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolve"}},[t._v("#")]),t._v(" resolve")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{string} path")]),t._v(" — относительный путь от корня проекта")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Возвращает")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{string}")]),t._v(" — разрешённый (resolved) абсолютный путь")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРазрешение пути для текущего проекта")])])]),t._v(" "),e("h2",{attrs:{id:"hasplugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hasplugin"}},[t._v("#")]),t._v(" hasPlugin")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{string} id")]),t._v(" — идентификатор плагина, можно опустить префикс (@vue/|vue-|@scope/vue)-cli-plugin-")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Возвращает")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{boolean}")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nПроверяет есть ли в проекте плагин с указанным идентификатором")])])]),t._v(" "),e("h2",{attrs:{id:"registercommand"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registercommand"}},[t._v("#")]),t._v(" registerCommand")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{string} name")])]),t._v(" "),e("li",[e("code",[t._v("{object} [opts]")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  description"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  usage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("{function} fn")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rawArgs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Promise\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРегистрация команды, доступной как "),e("code",[t._v("vue-cli-service [name]")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"chainwebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack"}},[t._v("#")]),t._v(" chainWebpack")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{function} fn")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРегистрация функции, которая получит chainable-конфигурацию webpack. Эта функция ленива и не будет вызываться до вызова функции "),e("code",[t._v("resolveWebpackConfig")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"configurewebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack"}},[t._v("#")]),t._v(" configureWebpack")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{object | function} fn")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРегистрация объекта конфигурации webpack, который будет объединён с конфигурацией "),e("strong",[t._v("ИЛИ")]),t._v(" функция, которая получит исходную конфигурацию webpack. Функция может либо мутировать конфигурацию напрямую, либо возвращать объект, который будет объединён с конфигурацией webpack.")])])]),t._v(" "),e("h2",{attrs:{id:"configuredevserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuredevserver"}},[t._v("#")]),t._v(" configureDevServer")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{object | function} fn")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРегистрация функции для конфигурирования сервера разработки. Она получает "),e("code",[t._v("app")]),t._v(" экземпляр express сервера разработки.")])])]),t._v(" "),e("h2",{attrs:{id:"resolvewebpackconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolvewebpackconfig"}},[t._v("#")]),t._v(" resolveWebpackConfig")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{ChainableWebpackConfig} [chainableConfig]")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Возвращает")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{object}")]),t._v(" — исходная конфигурация webpack")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРазрешение финальной конфигурации webpack, которая и будет передана в webpack.")])])]),t._v(" "),e("h2",{attrs:{id:"resolvechainablewebpackconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolvechainablewebpackconfig"}},[t._v("#")]),t._v(" resolveChainableWebpackConfig")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Возвращает")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{ChainableWebpackConfig}")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nРазрешение промежуточной chainable-конфигурации webpack, которую можно дополнительно настроить перед генерированием финальной конфигурации webpack. Можно вызывать несколько раз для генерации различных ветвей от базовой конфигурации webpack.")])])]),t._v(" "),e("p",[t._v("Подробнее см. "),e("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mozilla-neutrino/webpack-chain"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"gencacheconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gencacheconfig"}},[t._v("#")]),t._v(" genCacheConfig")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Аргументы")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("id")])]),t._v(" "),e("li",[e("code",[t._v("partialIdentifier")])]),t._v(" "),e("li",[e("code",[t._v("configFiles")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Возвращает")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{object}")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cacheDirectory"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cacheIdentifier"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Использование")]),t._v(":\nГенерация идентификатора кэша из нескольких переменных.")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);