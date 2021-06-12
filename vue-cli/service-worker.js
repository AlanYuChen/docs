/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5a43e67dedfa26470e7855ba6a108db8"
  },
  {
    "url": "assets/css/0.styles.451f4c04.css",
    "revision": "6b365e55b7eac0f198c2b099a31110a4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8a7bc39b.js",
    "revision": "1ca736c67da0d63a4de0b6dce9a9ea34"
  },
  {
    "url": "assets/js/11.7b28340c.js",
    "revision": "cb294f9ef212e5e28a0870bc3234a13e"
  },
  {
    "url": "assets/js/12.c6269c77.js",
    "revision": "0bf65ab6d5a29bb38fcfad622e639091"
  },
  {
    "url": "assets/js/13.3ad4b9cb.js",
    "revision": "2306583121766737c941f1ff680b70cd"
  },
  {
    "url": "assets/js/14.b6a52bc0.js",
    "revision": "4b7e64b2f1df973759e3be1c3045eb77"
  },
  {
    "url": "assets/js/15.51f6b1f3.js",
    "revision": "e14feaf3ad2d0b3e08002e7e8d157489"
  },
  {
    "url": "assets/js/16.22a1d79f.js",
    "revision": "7a6879f38f52d5fd6f477b0f2f77e270"
  },
  {
    "url": "assets/js/17.0a056577.js",
    "revision": "3aa337fbee01d0410b22f3dae1b2ff91"
  },
  {
    "url": "assets/js/18.eaf055bf.js",
    "revision": "ca769b43f7a5bb8a5b681bc13b4c1b2f"
  },
  {
    "url": "assets/js/19.7232fe9a.js",
    "revision": "a4517262bc4351ac9dd255f1831e5989"
  },
  {
    "url": "assets/js/20.4b589c56.js",
    "revision": "f15175139e4e7feb2f1f819a12fb63cf"
  },
  {
    "url": "assets/js/21.5d292f5e.js",
    "revision": "d2bc0017848e6360e69310b6e76dde7f"
  },
  {
    "url": "assets/js/22.be9ead35.js",
    "revision": "f263220729ccb43fbbb0712775c0f76d"
  },
  {
    "url": "assets/js/23.d0458f44.js",
    "revision": "56029e2824f2a7fc4c271c79c7ac6ba4"
  },
  {
    "url": "assets/js/24.278a7f1b.js",
    "revision": "700cb2324acfabf1475020b3bf7c4193"
  },
  {
    "url": "assets/js/25.ad3caef9.js",
    "revision": "7e1057269b0b4c19f550e579673b2aab"
  },
  {
    "url": "assets/js/26.c801114d.js",
    "revision": "3b6d5e172557a297310364e886011fd6"
  },
  {
    "url": "assets/js/27.d2314419.js",
    "revision": "eec680d3b608a2d673ba4a0d71024566"
  },
  {
    "url": "assets/js/28.e57d67b6.js",
    "revision": "c13f3c38c1006148b208e12914e0038e"
  },
  {
    "url": "assets/js/29.9248f012.js",
    "revision": "765b128676c2608866cdc082894c6c36"
  },
  {
    "url": "assets/js/3.7bdd7b04.js",
    "revision": "034c968e8c95ad7c2f0731982ca65509"
  },
  {
    "url": "assets/js/30.0a4a01e4.js",
    "revision": "50f22d0382f8e79f999ace10cb5708a3"
  },
  {
    "url": "assets/js/31.908674d5.js",
    "revision": "5cdff3f472f106a9b76d781a8c3d9b34"
  },
  {
    "url": "assets/js/32.30532c18.js",
    "revision": "e99a7f833c379968b1d5342b7bbf5bf0"
  },
  {
    "url": "assets/js/33.f933257b.js",
    "revision": "a7f7bf93e36e04420b552f352bfa64e8"
  },
  {
    "url": "assets/js/34.54bf62b1.js",
    "revision": "2cfdc0ea47fcb0b656985ca190ee133a"
  },
  {
    "url": "assets/js/35.5930c23a.js",
    "revision": "67b6d0f34047f0b22b0f5c9279ec61ac"
  },
  {
    "url": "assets/js/36.872434ef.js",
    "revision": "acce021ecd7811d12c39ce843cf1ef7b"
  },
  {
    "url": "assets/js/37.f18958bc.js",
    "revision": "0c5161bb7087adeef505683825a168a9"
  },
  {
    "url": "assets/js/38.19ec3395.js",
    "revision": "be025e1d9cf60113e4679252cd35c53d"
  },
  {
    "url": "assets/js/39.56e9766b.js",
    "revision": "6f8a17b7a3a0a913f3f7db0d196caa4b"
  },
  {
    "url": "assets/js/4.6488ec64.js",
    "revision": "e6f1242e8ed9811e72c6022401f3af96"
  },
  {
    "url": "assets/js/40.afd2d88e.js",
    "revision": "c5f8f24c8cde55df939848a5430bd5e1"
  },
  {
    "url": "assets/js/41.3811a677.js",
    "revision": "97f565b3699d0c27123f7ce5ea52bdba"
  },
  {
    "url": "assets/js/42.8eb9033d.js",
    "revision": "7f3d997ec343e263c1e8395e13c2deaa"
  },
  {
    "url": "assets/js/43.e000ce1c.js",
    "revision": "88b106cdbb3f30448a7f2223158fe325"
  },
  {
    "url": "assets/js/44.487ef822.js",
    "revision": "94cf42874b298dc4c36e01663a458cc7"
  },
  {
    "url": "assets/js/45.9ef7e937.js",
    "revision": "f535e12635154fb21ca914eaeaa8e5b3"
  },
  {
    "url": "assets/js/46.face255c.js",
    "revision": "27e5d34dce077e842be8d99a70c6711e"
  },
  {
    "url": "assets/js/47.050624f6.js",
    "revision": "8cae9c81577e84e3354dc462b3f694f1"
  },
  {
    "url": "assets/js/48.8a9ae311.js",
    "revision": "674e6ae6ddfce6f493973da90ad65858"
  },
  {
    "url": "assets/js/49.f4d01173.js",
    "revision": "efa06d577b0a27d1e82cd00655f51311"
  },
  {
    "url": "assets/js/5.cd81bcfd.js",
    "revision": "52f944c43c5b678407d4ff6a5ec1f3a5"
  },
  {
    "url": "assets/js/50.669fa975.js",
    "revision": "089f8d238e5d56d676ed5fdb5eac8ad3"
  },
  {
    "url": "assets/js/51.4fb8dd56.js",
    "revision": "11b6e7460f7924070f03ca5717ef3cb4"
  },
  {
    "url": "assets/js/52.cb5f97ec.js",
    "revision": "d00bd90dc55e71f997b8b93b9d5704ab"
  },
  {
    "url": "assets/js/53.76aaeab2.js",
    "revision": "e8799c6790340dd6b6f7a63b14ade82f"
  },
  {
    "url": "assets/js/54.b250820c.js",
    "revision": "f67ceb0996c07600570cbecc58cbd761"
  },
  {
    "url": "assets/js/55.5ffb30fb.js",
    "revision": "ae4fe7ae1192ebf0353c3c60ea1d5281"
  },
  {
    "url": "assets/js/56.f0c6745a.js",
    "revision": "b96926498e9dd1ed45b29637157ef596"
  },
  {
    "url": "assets/js/57.6d755ce6.js",
    "revision": "ea01c5c67cd2914f724de576ece5bcc5"
  },
  {
    "url": "assets/js/58.181d2ac3.js",
    "revision": "d58113df8d5107f829c851b3273bf796"
  },
  {
    "url": "assets/js/59.d7ae82ea.js",
    "revision": "72a0e884ffbcdc16537cacf76f63a45e"
  },
  {
    "url": "assets/js/6.e6b10ccc.js",
    "revision": "32e771fbcab4945565a8a6c2e097eae0"
  },
  {
    "url": "assets/js/60.a4f176f5.js",
    "revision": "4f51f7efe85b8ca6d83cb07e454541a7"
  },
  {
    "url": "assets/js/61.f400c8a5.js",
    "revision": "3b1e5d056dffc9d769d5ba0b96b8a071"
  },
  {
    "url": "assets/js/62.daee1e69.js",
    "revision": "a89ad27fc19b7e2b662e26ab34d590d3"
  },
  {
    "url": "assets/js/63.63060c53.js",
    "revision": "24510d18de1cafd2daeb18dd43885f0b"
  },
  {
    "url": "assets/js/64.22e87673.js",
    "revision": "59bb5f6bf72a532092541b629a90a48b"
  },
  {
    "url": "assets/js/65.bbd4f5a5.js",
    "revision": "54f2e71d5dea8cfea25abac53ad5aa8a"
  },
  {
    "url": "assets/js/66.97efae9f.js",
    "revision": "2b62516de07cef9c72505b6d973f5a22"
  },
  {
    "url": "assets/js/67.264af5a7.js",
    "revision": "8e55ecc8f24779a85f038def412f744e"
  },
  {
    "url": "assets/js/68.f51b4acf.js",
    "revision": "4e11132b4f165f01ea122c8ca7d1e473"
  },
  {
    "url": "assets/js/69.8084869f.js",
    "revision": "b831ffa9dafc28f54e3c069063ed731a"
  },
  {
    "url": "assets/js/7.b7116fc4.js",
    "revision": "230eb5253ddc1582cccadae166de9c79"
  },
  {
    "url": "assets/js/70.f5f05e2b.js",
    "revision": "d96ec4ba120cd1edc3fc841b1dd5a3eb"
  },
  {
    "url": "assets/js/71.804e9f00.js",
    "revision": "b77e6c12c2b28e9d08e1e6bc8740a445"
  },
  {
    "url": "assets/js/72.42e135dd.js",
    "revision": "5056c58d3995d5dccffcc8baa9916bf3"
  },
  {
    "url": "assets/js/73.837c9021.js",
    "revision": "95196d74b1245a9baa9c062f34caf4fe"
  },
  {
    "url": "assets/js/74.dd361c0c.js",
    "revision": "edc2c4b5c1a5170dee21e31d23a5da67"
  },
  {
    "url": "assets/js/75.3e233374.js",
    "revision": "e41af345810687ddabab083c69357f74"
  },
  {
    "url": "assets/js/76.401d6e20.js",
    "revision": "70a2015667598e5d99a32d1c50cdfe4b"
  },
  {
    "url": "assets/js/77.929dae96.js",
    "revision": "aae1484224f4fc3c96c952b59092e2f2"
  },
  {
    "url": "assets/js/78.0de401e6.js",
    "revision": "c37572fafcc6266845111511b637ff83"
  },
  {
    "url": "assets/js/79.1963c544.js",
    "revision": "407b24f352bc8dad6b56743a1c37f208"
  },
  {
    "url": "assets/js/8.5bfe7d02.js",
    "revision": "b01a5d7d4001aedf7c5380318648c39a"
  },
  {
    "url": "assets/js/80.ba0973f5.js",
    "revision": "9ca02d98e4e51cfaba4d2b7c74396e9b"
  },
  {
    "url": "assets/js/81.c75067c1.js",
    "revision": "f680fdd69cecef125ee1f02c941e7345"
  },
  {
    "url": "assets/js/82.57f1a82b.js",
    "revision": "fb0057a0f665f89e973d7ac410fafcbe"
  },
  {
    "url": "assets/js/83.70e4a57f.js",
    "revision": "8e492958a34d3416c72026c484d47ede"
  },
  {
    "url": "assets/js/84.f5d6979e.js",
    "revision": "0bd7db471250ee2a6fd5bf921da0a18e"
  },
  {
    "url": "assets/js/85.8089909b.js",
    "revision": "c6bcbf9283cd01c13fff00da6f7340e3"
  },
  {
    "url": "assets/js/86.2ccc7589.js",
    "revision": "314964a6e50bed17a03f253f3b25b8da"
  },
  {
    "url": "assets/js/87.3be8b83c.js",
    "revision": "78a842587008a17c577bccaff00e606e"
  },
  {
    "url": "assets/js/88.a186b911.js",
    "revision": "cc19713d51d002b940e7aceb09cf4159"
  },
  {
    "url": "assets/js/89.33caee7b.js",
    "revision": "b3249b06fbb4bd02185eccd44849c6c5"
  },
  {
    "url": "assets/js/9.b2071b1f.js",
    "revision": "d86d2fe8f960c2be19bf8bd9d1f03c79"
  },
  {
    "url": "assets/js/90.f0b704b2.js",
    "revision": "56677b8358d87a2bfcbfa47d01cc70ec"
  },
  {
    "url": "assets/js/91.754bdeb9.js",
    "revision": "5f882accad59e83271a75c9d1c985462"
  },
  {
    "url": "assets/js/92.468a3937.js",
    "revision": "76bbe0884d7fd4a2565afc9d03c69418"
  },
  {
    "url": "assets/js/93.87767fe9.js",
    "revision": "6fee1950617e79e312f385430459cee8"
  },
  {
    "url": "assets/js/94.dadb80c9.js",
    "revision": "6d7cf3722f5bc2f143fa4f0966e80ff8"
  },
  {
    "url": "assets/js/95.d2fc1cd4.js",
    "revision": "77ef5ef0870b96fd972f356289d67714"
  },
  {
    "url": "assets/js/96.a9e71dd3.js",
    "revision": "7c6f1d3a2003da4c4279107dcf638d98"
  },
  {
    "url": "assets/js/app.d97c7f36.js",
    "revision": "9c7020a57ea39c7c35e5aaefc4600fd5"
  },
  {
    "url": "assets/js/vendors~docsearch.d7ff67ab.js",
    "revision": "03181c0514ea73508f20f32214009d18"
  },
  {
    "url": "bit-wide.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "cli-new-project.png",
    "revision": "92eba99ef4ce3133242f6f3b1b7fae3c"
  },
  {
    "url": "cli-select-features.png",
    "revision": "b3a275b99d5505ee4622395a05c9b52a"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "89a90c90354fa7746eeadfaa717c354f"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "d1d2a1262ec65ead5355256dce101a88"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "63f0b23315a21e283f55a81b4329f5b5"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "69596e70dde3171de90593f38d91f2c4"
  },
  {
    "url": "core-plugins/e2e-webdriverio.html",
    "revision": "d0ff325425a094a0083f0ae496286158"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "a40afb4cde1055001837024cdfab5315"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "7b46eb26be7280b863785706a5dae5df"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "7a24904ab985318e173b465e4d7bc394"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "5e7c03fd7731263b78e74b9c6a8e435e"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "f542a0e311b80fba443d2812bb8dbd17"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "542684121064c21e618fde64e2b1ec1a"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "937a80805d85fa47d2aa6e0a68c1d7e4"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "0fa580f42f2131f295af972f291b6634"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "dd3f6d5186d4f35bf6a1598289fa7966"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "2fb1cc19139f00c3e8d5d3d1fd7f73b9"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "ba78b01cd9acb34c226452bcdaef4d01"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "d71c506fb2a8cb201a6c0f5972dbfd15"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "ad5b2c623ca98accde2351a855ac87ed"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "20d479ddff881477e892d3f0106d52fc"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "generator-template.png",
    "revision": "48e1da57cb9739a5ed48a4631889a951"
  },
  {
    "url": "guide/browser-compatibility.html",
    "revision": "13bab6d9d1ac5758920e183c2a763e4d"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "570f34309a7fb9a70cf6c4fd0f306ca0"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "b31badb60a960084bb77c33ad1f3293e"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "f152ed45e3d3cde8bb56cf7804ccfd4d"
  },
  {
    "url": "guide/css.html",
    "revision": "37bedc994008e48cfcdee68dc7da0022"
  },
  {
    "url": "guide/deployment.html",
    "revision": "9b5ca8eda6f0a2e99c3e403634e56150"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "890888f377c9af50ee73a6d42491f722"
  },
  {
    "url": "guide/index.html",
    "revision": "3b410f0eb3c3dd40cb518b0a327be8ce"
  },
  {
    "url": "guide/installation.html",
    "revision": "435bdf9ef1ab341b1f3938ee48bfaf52"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "1478fc2c8889e36a93ffc652d7ccabf8"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "247831bd884946461056ede2b09239d7"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "50b71064b2a9ba52732261e2bc5d6d53"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "1cdbe46a5560a169ec6a417f2f6d6a73"
  },
  {
    "url": "guide/webpack.html",
    "revision": "ed7c917ceeb044fe80e22961851cdf45"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "ebc08714eeb58b925ce33f3859c92190"
  },
  {
    "url": "migrating-from-v3/index.html",
    "revision": "3bb7dbc210e0a19cf731896560a5f4f5"
  },
  {
    "url": "plugin-search-item.png",
    "revision": "6f65b4e8ae9bd1afa8f0c9cfe64f769c"
  },
  {
    "url": "plugins.png",
    "revision": "ce8ce5bfc34d3ef709895d66fff8396a"
  },
  {
    "url": "prompts-example.png",
    "revision": "66d10e746046951dec06a6db3e2c816e"
  },
  {
    "url": "ru/config/index.html",
    "revision": "57d8de0e3cc91b75f0358d457c2dabde"
  },
  {
    "url": "ru/core-plugins/babel.html",
    "revision": "7f95ec6f7f825d1dfa719448f3192f8f"
  },
  {
    "url": "ru/core-plugins/e2e-cypress.html",
    "revision": "08f4347d9c86b5e61df2dee61263b196"
  },
  {
    "url": "ru/core-plugins/e2e-nightwatch.html",
    "revision": "24219e3602a6ed837b797a3c48bde4f4"
  },
  {
    "url": "ru/core-plugins/e2e-webdriverio.html",
    "revision": "178bdaaa7e7dd469189c8c08784f5026"
  },
  {
    "url": "ru/core-plugins/eslint.html",
    "revision": "cdf9502c106b7e578c5bb42648a65094"
  },
  {
    "url": "ru/core-plugins/index.html",
    "revision": "6ed96130296ed9e1c39c9945469796b7"
  },
  {
    "url": "ru/core-plugins/pwa.html",
    "revision": "988b2e09c5f10346281df4a2c5bf5923"
  },
  {
    "url": "ru/core-plugins/router.html",
    "revision": "99b46dfac6b860d355b9c871cb59702a"
  },
  {
    "url": "ru/core-plugins/typescript.html",
    "revision": "69dc63e1c674da93d78514186d421caa"
  },
  {
    "url": "ru/core-plugins/unit-jest.html",
    "revision": "555f2e26101c9ea1921011da9dbafe08"
  },
  {
    "url": "ru/core-plugins/unit-mocha.html",
    "revision": "47cb6be2ff3c153ee8cf5816cde9039d"
  },
  {
    "url": "ru/core-plugins/vuex.html",
    "revision": "ce8ab0679878d0af57fde1c6322c61c5"
  },
  {
    "url": "ru/dev-guide/generator-api.html",
    "revision": "23a397ec1388706614ef34d489649768"
  },
  {
    "url": "ru/dev-guide/plugin-api.html",
    "revision": "22d4085dfc6b224c51273ee058f1bc9c"
  },
  {
    "url": "ru/dev-guide/plugin-dev.html",
    "revision": "5dabf96e028d05944ce7c31a4c2843d9"
  },
  {
    "url": "ru/dev-guide/ui-api.html",
    "revision": "90b505f569c24c757a4ec33f16c84372"
  },
  {
    "url": "ru/dev-guide/ui-info.html",
    "revision": "9dea0de114c83e68d3e6e190dfb9042a"
  },
  {
    "url": "ru/dev-guide/ui-localization.html",
    "revision": "18274f98192c074a615ed43ddd241b98"
  },
  {
    "url": "ru/guide/browser-compatibility.html",
    "revision": "9df3669bda9f03951f68b91210ff9fd8"
  },
  {
    "url": "ru/guide/build-targets.html",
    "revision": "290c557481d236400f54a748c86519f9"
  },
  {
    "url": "ru/guide/cli-service.html",
    "revision": "e71f2aab7e7f593668a030f3c25a3ec6"
  },
  {
    "url": "ru/guide/creating-a-project.html",
    "revision": "98ca30f60ae98150f9eb4bc5eb4d3d0f"
  },
  {
    "url": "ru/guide/css.html",
    "revision": "bcd7e45788d8640c31bf62411021bee5"
  },
  {
    "url": "ru/guide/deployment.html",
    "revision": "e8709bfd02d1553e9c893ddf5d862330"
  },
  {
    "url": "ru/guide/html-and-static-assets.html",
    "revision": "80c723f9ff568d5c42c9b917ea7771d6"
  },
  {
    "url": "ru/guide/index.html",
    "revision": "94e617e03131112855c109e203c534ed"
  },
  {
    "url": "ru/guide/installation.html",
    "revision": "b20a3102adac2697b7ec2e953eab3a15"
  },
  {
    "url": "ru/guide/mode-and-env.html",
    "revision": "4a88665aa4d7b722a8b80ef564a18ec1"
  },
  {
    "url": "ru/guide/plugins-and-presets.html",
    "revision": "5f5d51f23f753fc180da2311deec3c2f"
  },
  {
    "url": "ru/guide/prototyping.html",
    "revision": "39739206a16098f2b9870f4b31cdb2ba"
  },
  {
    "url": "ru/guide/troubleshooting.html",
    "revision": "fc2f9eabf983bdc37566dcb8be9c519d"
  },
  {
    "url": "ru/guide/webpack.html",
    "revision": "179cd90bcd7a5588c6521d2d97938f8a"
  },
  {
    "url": "ru/index.html",
    "revision": "1f3c5e45535ce7c19e5adde31b4b2c0e"
  },
  {
    "url": "ru/migrating-from-v3/index.html",
    "revision": "e1587c38f101548f9c043eb3425a4a7c"
  },
  {
    "url": "ru/vue-cli-ui-schema.png",
    "revision": "75b8cf9e1c37eabf2718cb75e62dfe51"
  },
  {
    "url": "screenshot.png",
    "revision": "b09e5bcd945dadfff7e8116d1c46a44d"
  },
  {
    "url": "suggestion.png",
    "revision": "dbac5be64fdb516e564fde02974eb833"
  },
  {
    "url": "task-view.png",
    "revision": "3efc61b1c61f79381daec24ec060b3e3"
  },
  {
    "url": "tasks-ui.png",
    "revision": "4b271c3a1df05f3ba9cec18829ab3fd9"
  },
  {
    "url": "ui-analyzer.png",
    "revision": "89f829eb201f268fc8ef5698ef2f5d9a"
  },
  {
    "url": "ui-browse-local-plugin.png",
    "revision": "3358f71b0bc6ae733cb5beb10a35f686"
  },
  {
    "url": "ui-config-start.png",
    "revision": "9bdac28bae9920012076bbc823252386"
  },
  {
    "url": "ui-configuration-default.png",
    "revision": "90b1cc05688b6c230d2e4e7ce5fa0e8c"
  },
  {
    "url": "ui-configuration.png",
    "revision": "7198b603bebca0fea84b51f1745f48ef"
  },
  {
    "url": "ui-greet-task.png",
    "revision": "97dded6e9f515a18827bbe4caacf6210"
  },
  {
    "url": "ui-new-project.png",
    "revision": "b445678f1a79c36cb74b54971e2959f9"
  },
  {
    "url": "ui-plugin-refresh.png",
    "revision": "6ae0e6a9a0e86562dd234e743724f0f0"
  },
  {
    "url": "ui-project-manager.png",
    "revision": "71cfde004266603a0998a90342977fa8"
  },
  {
    "url": "ui-prompts.png",
    "revision": "9442e88075c4fbc30cfa91dd2bbf0075"
  },
  {
    "url": "ui-select-plugin.png",
    "revision": "65e7155d35a866b94ecc09f978e93c87"
  },
  {
    "url": "vue-cli-ui-schema.png",
    "revision": "08266803bd50c4ba141a52c81f8e1b0c"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6003c00429359c3c15252e91d8288b9e"
  },
  {
    "url": "zh/dev-guide/plugin-dev.html",
    "revision": "d03e00166637e23315cf86b67c034023"
  },
  {
    "url": "zh/dev-guide/ui-api.html",
    "revision": "95c7e48841a6da4d1cc6c48a42b17b09"
  },
  {
    "url": "zh/dev-guide/ui-info.html",
    "revision": "ca0a53a149d2a5811f8c44c151505fe8"
  },
  {
    "url": "zh/dev-guide/ui-localization.html",
    "revision": "05a3b616c17ead38af19c6d9e198bc9e"
  },
  {
    "url": "zh/guide/browser-compatibility.html",
    "revision": "c2d241c8e6c430a7ba2f222d2ae42dce"
  },
  {
    "url": "zh/guide/build-targets.html",
    "revision": "e0147dbde43caee6e3a92349cb7c1e70"
  },
  {
    "url": "zh/guide/cli-service.html",
    "revision": "de3ccdbfbdb87e2a923413bfc89b1e10"
  },
  {
    "url": "zh/guide/creating-a-project.html",
    "revision": "c7fa40cae1cfd19d5504ef4fea3032a9"
  },
  {
    "url": "zh/guide/css.html",
    "revision": "c1fdd738df1966c492b1a10eeaf414ad"
  },
  {
    "url": "zh/guide/deployment.html",
    "revision": "2f8825c32267c0ecaba535231363a938"
  },
  {
    "url": "zh/guide/html-and-static-assets.html",
    "revision": "da2085b4c9338587809fbc0d601a882a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a15dbd40e45db0fc678ae82b58b3eaf1"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "b05eaae1e3e9a84ad97b08d18939f8d3"
  },
  {
    "url": "zh/guide/mode-and-env.html",
    "revision": "687165fb0965d6e4f8c279792844f47e"
  },
  {
    "url": "zh/guide/plugins-and-presets.html",
    "revision": "ba3f18a650e3eb7ac1759aae74845427"
  },
  {
    "url": "zh/guide/prototyping.html",
    "revision": "30c74521575f4cf636529ece62901a20"
  },
  {
    "url": "zh/guide/webpack.html",
    "revision": "3f1a87cfa2a6116a51485682a8883a72"
  },
  {
    "url": "zh/index.html",
    "revision": "f83826de44707bd969c2d504c6fc34c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
