/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/docs/vuejs/2019/02/18/hello/index.html","b484dbc169ce1a9d422c50d35d57c216"],["/docs/vuejs/about/index.html","a58bbe56a7a539b404fe28cea0c6a931"],["/docs/vuejs/api/index.html","e4f3e0567be0cfeb9a7c64f1d1f247e0"],["/docs/vuejs/archives/2019/02/index.html","d93903b19b53d3f5735369b19ab08524"],["/docs/vuejs/archives/2019/index.html","3eb05262cef1f7a4c5d415b9f3968269"],["/docs/vuejs/archives/index.html","1c816280e66dd314ddcc21f603864c06"],["/docs/vuejs/atom.xml","f361e57c43b94fa260ced4da0c2bd168"],["/docs/vuejs/browserconfig.xml","8c40dafb3e79c8e6a182e03f7c27a475"],["/docs/vuejs/coc/index.html","0e86f28b27517dc7c48fb36515af30cd"],["/docs/vuejs/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/docs/vuejs/css/index.css","3da7bda66534165fb582015571411ae7"],["/docs/vuejs/css/page.css","e3d807830defcc50bef8a4d36fb4521c"],["/docs/vuejs/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/docs/vuejs/examples/commits.html","4c7da992b54c4d0dfdb0c4e2ec47dd01"],["/docs/vuejs/examples/elastic-header.html","2d95ac18ae9367688367c3c3747261f8"],["/docs/vuejs/examples/firebase.html","fed61dd3be476edaedd8e0dd9b40f3ea"],["/docs/vuejs/examples/grid-component.html","2b302e140fe39db34ae13c4beb586bcd"],["/docs/vuejs/examples/hackernews.html","bb2cc79b3c3a452760d408f32245ad9b"],["/docs/vuejs/examples/index.html","12fb28f6f40b56cc3b6a42b12f409fa6"],["/docs/vuejs/examples/modal.html","4ac5e3f4a8bfa51f6e2321b9980d3bfa"],["/docs/vuejs/examples/select2.html","d97789e7c4fd206088f83401ded387ae"],["/docs/vuejs/examples/svg.html","54d9c66d7f42044dfbb268eaa21e832c"],["/docs/vuejs/examples/todomvc.html","9cefa49da571c449c77bddbe27b48557"],["/docs/vuejs/examples/tree-view.html","a192469c5f1fe1f6e09ec3168ecd83a8"],["/docs/vuejs/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/docs/vuejs/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/docs/vuejs/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/docs/vuejs/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/docs/vuejs/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/docs/vuejs/guide/class-and-style.html","e4e447835a587ed179fd197d456bcb94"],["/docs/vuejs/guide/comparison.html","d5a05d4013f5de5bcc670a2ba3c21972"],["/docs/vuejs/guide/components.html","39bd927abef121d41bd101f049415892"],["/docs/vuejs/guide/computed.html","683b48530e072b5e5e64ed8a069b9f93"],["/docs/vuejs/guide/conditional.html","d9d25bf2f991d0578fbd1042e00ee433"],["/docs/vuejs/guide/custom-directive.html","e480cb3624e91442df01c8e43724cbd3"],["/docs/vuejs/guide/deployment.html","715fda1a3d8886b4582b9d72f35f41f9"],["/docs/vuejs/guide/events.html","ade691a0d5e2ac46659f1a3773b43f07"],["/docs/vuejs/guide/forms.html","bcdc5644d0616bd032672e4be1ee221a"],["/docs/vuejs/guide/index.html","05aa65f23fa4c0de4335c0a3937a0f99"],["/docs/vuejs/guide/installation.html","bbc862bb126f6e511367076b4c7b80ea"],["/docs/vuejs/guide/instance.html","db85e11588a6a7384c2d6479e902f5ac"],["/docs/vuejs/guide/join.html","0b9be055589ef51ffa2e6dd856b9f93e"],["/docs/vuejs/guide/list.html","af9da63f1d29a06ac4848101204c2cfd"],["/docs/vuejs/guide/migration-vue-router.html","d8d504a32655b23633ef9e2e7355e5ec"],["/docs/vuejs/guide/migration-vuex.html","6d39743e409e8f03551d0c5425c5825a"],["/docs/vuejs/guide/migration.html","fc2cec0430981ff626f8cacc24e095f5"],["/docs/vuejs/guide/mixins.html","de942aa1890edb511ee1bbcd2613ffd4"],["/docs/vuejs/guide/plugins.html","aa7c725d5f32757e39b42047566d63e6"],["/docs/vuejs/guide/reactivity.html","76f40a06ce5e4690ec068a2f08abe414"],["/docs/vuejs/guide/render-function.html","80ab11aa17cbc74a6b05ff7d6308f529"],["/docs/vuejs/guide/routing.html","aec380da0d8f56b2dc4a6b48b8f8c912"],["/docs/vuejs/guide/single-file-components.html","2cdcf221cf3cbe0512b7c6ef7f860a03"],["/docs/vuejs/guide/ssr.html","1a13a921e546af41d40a4de30c013e23"],["/docs/vuejs/guide/state-management.html","4e10bd7d3d762db4e68bc4238252cdda"],["/docs/vuejs/guide/syntax.html","6ebc5dd100fe47e40e5052f284a0fe35"],["/docs/vuejs/guide/transitioning-state.html","884265b723d66fb5150b1b8a230e091e"],["/docs/vuejs/guide/transitions.html","8dd72582d1d6457c9569c5ccd263b2f9"],["/docs/vuejs/guide/unit-testing.html","e821ffed89ab207a7fc9a201ff3eca25"],["/docs/vuejs/images/Monterail.png","bf1ec94a0ca48f0e6be0c97fa60a42c0"],["/docs/vuejs/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/docs/vuejs/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/docs/vuejs/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/docs/vuejs/images/aussiecasinohex.svg","1442ac7722d1185a138dc29bb8e0491a"],["/docs/vuejs/images/autocode.svg","e1c1c17d96d289b20b2d91819a4c9e4d"],["/docs/vuejs/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/docs/vuejs/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/docs/vuejs/images/betting_bet.png","0611ea789636d8aff211ece0d146640d"],["/docs/vuejs/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/docs/vuejs/images/blokt_cryptocurrency_news.png","0ecada49bad35aabc864a8df221fd816"],["/docs/vuejs/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/docs/vuejs/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/docs/vuejs/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/docs/vuejs/images/check.png","c634675b753a1a03b587c43d8b535600"],["/docs/vuejs/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/docs/vuejs/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/docs/vuejs/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/docs/vuejs/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/docs/vuejs/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/docs/vuejs/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/docs/vuejs/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/docs/vuejs/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/docs/vuejs/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/docs/vuejs/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/docs/vuejs/images/dcloud.gif","78338ea80dbe45402fd0b3bfa354754b"],["/docs/vuejs/images/dcloud1.png","68fd56ffc4a217f07ca2066784545a24"],["/docs/vuejs/images/dcloud2.png","1ee124f02bdf52f089e5cd15585dea01"],["/docs/vuejs/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/docs/vuejs/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/docs/vuejs/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/docs/vuejs/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/docs/vuejs/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/docs/vuejs/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/docs/vuejs/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/docs/vuejs/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/docs/vuejs/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/docs/vuejs/images/down.png","2f948222df409af3121254d5fe0ed377"],["/docs/vuejs/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/docs/vuejs/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/docs/vuejs/images/exmax.png","32e07b09290df956dba4b2420a7a81db"],["/docs/vuejs/images/fastcoding_inc.png","08a0a7652db79fa3395c0ef28d49f0cd"],["/docs/vuejs/images/fastcoding_inc.svg","9d33d7905c4fb224aba61de096505794"],["/docs/vuejs/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/docs/vuejs/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/docs/vuejs/images/flatlogic_templates.svg","4442dca91b270a32353ee5aca44ebc33"],["/docs/vuejs/images/foo.png","1c9cde53bb9c98a316edc93d57684e4d"],["/docs/vuejs/images/free_bets_us.png","8181ea6e9415589808fc2ee66d9dc6fe"],["/docs/vuejs/images/frontendlove.png","1ded4719274d362c27031ad4ba3f86a5"],["/docs/vuejs/images/geekbang-ad.jpg","7ab75cf133fd8bc36861403f743cea82"],["/docs/vuejs/images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["/docs/vuejs/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/docs/vuejs/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/docs/vuejs/images/happy_programmer_llc.png","3f3303d42a57ff9edf36373f59d376af"],["/docs/vuejs/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/docs/vuejs/images/hn.png","99176cdebac521e823be519aef514bb3"],["/docs/vuejs/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/docs/vuejs/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/docs/vuejs/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/docs/vuejs/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/docs/vuejs/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/docs/vuejs/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/docs/vuejs/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/docs/vuejs/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/docs/vuejs/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/docs/vuejs/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/docs/vuejs/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/docs/vuejs/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/docs/vuejs/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/docs/vuejs/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/docs/vuejs/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/docs/vuejs/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/docs/vuejs/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/docs/vuejs/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/docs/vuejs/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/docs/vuejs/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/docs/vuejs/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/docs/vuejs/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/docs/vuejs/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/docs/vuejs/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/docs/vuejs/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/docs/vuejs/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/docs/vuejs/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/docs/vuejs/images/icons_8.png","e386832a598b7dbd8405108dac787ca5"],["/docs/vuejs/images/imooc-ad.png","9686f3f6da6b8804a483ba8e1f8a77a9"],["/docs/vuejs/images/imooc-ad2.png","1980fd121849fea1cc67ae58c73a55a3"],["/docs/vuejs/images/imooc-ad3.png","a8b8084e0bb616cef5637f589d0c3a49"],["/docs/vuejs/images/imooc-sponsor.png","7ddc7f938fbbc08f816a888225786a4c"],["/docs/vuejs/images/imooc-sponsor2.png","ce9575f62520e0ac8b7d93ada2c6b274"],["/docs/vuejs/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/docs/vuejs/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/docs/vuejs/images/ionic.png","05da967b8d61bbce5aa3ddc47c819bd5"],["/docs/vuejs/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/docs/vuejs/images/isolutions_uk_limited.png","0f76512940c38b72fcf48337b4d64692"],["/docs/vuejs/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/docs/vuejs/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/docs/vuejs/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/docs/vuejs/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/docs/vuejs/images/line_corporation.png","51fcc307909b7505d1cc4e337d7c6fa1"],["/docs/vuejs/images/litslink.png","41178830976ade9f1f163dc400b77018"],["/docs/vuejs/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/docs/vuejs/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/docs/vuejs/images/logo.svg","791e63f2b90107b2fe9df7bd82e8cfd2"],["/docs/vuejs/images/lowdefy.png","4af7e47e701c3a1d3101acdd95e8bbee"],["/docs/vuejs/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/docs/vuejs/images/memberful.png","8f11061a5ee1d58a91855b3671b79505"],["/docs/vuejs/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/docs/vuejs/images/menu-blm.png","b0c054903425b560ae6828e6c732995e"],["/docs/vuejs/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/docs/vuejs/images/modus.png","6498c04fee5b8542449b350e77180379"],["/docs/vuejs/images/moovweb.png","8183954731fdeb0f136fac1485198184"],["/docs/vuejs/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/docs/vuejs/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/docs/vuejs/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/docs/vuejs/images/netflix_vpn.png","ac75acaa7e0c6c12511cb2d3aed3c0c6"],["/docs/vuejs/images/newicon.png","befb5ccdbfcc16fdb7f57195d13b506c"],["/docs/vuejs/images/nuxt.png","8aa12e03c917d7985455e4b16a609845"],["/docs/vuejs/images/okay.png","3fdb892c86df8ef6a2088d38be7be941"],["/docs/vuejs/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/docs/vuejs/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/docs/vuejs/images/oxford-comma.jpg","8a220093d78172e4eb9d98529f9fba05"],["/docs/vuejs/images/passionate_people.png","fefdc6671ef83bc03a4003c91524f49e"],["/docs/vuejs/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/docs/vuejs/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/docs/vuejs/images/philip_john_basile.gif","35fc21939087e126d93d173491900c70"],["/docs/vuejs/images/piratebay_proxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/docs/vuejs/images/piratebayproxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/docs/vuejs/images/primevue.png","60f2e8fb0dce3e9045fc3a2a8039fa82"],["/docs/vuejs/images/programmers_io.png","02cb415eb9a8e9ce6579c7aff03759dd"],["/docs/vuejs/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/docs/vuejs/images/pullrequest.svg","50847513b306736d33234d50b11c5e1d"],["/docs/vuejs/images/quickbooks_tool_hub.png","b74acbde8b8dbdc65326ec0ae3b49171"],["/docs/vuejs/images/retool.png","aaad6a749deb625da5771750dcb51920"],["/docs/vuejs/images/roadster.png","080fb711e736d686f182358a582d7c6b"],["/docs/vuejs/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/docs/vuejs/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/docs/vuejs/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/docs/vuejs/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/docs/vuejs/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/docs/vuejs/images/staff_augmentation.png","999025bb7194afd0fb71a94dbe77146f"],["/docs/vuejs/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/docs/vuejs/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/docs/vuejs/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/docs/vuejs/images/storyblok.png","64ec1772109b769e91138b58526484ad"],["/docs/vuejs/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/docs/vuejs/images/team_extension_north_america_inc.png","8d43aeceffc8388b244d46a7d3adae15"],["/docs/vuejs/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/docs/vuejs/images/tencent-ad.png","adf85e09ed9c9a5c91d83b9ecf7bd3dd"],["/docs/vuejs/images/tendermint.png","a529fd7a1a0d62f2cb7953e87f8687ce"],["/docs/vuejs/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/docs/vuejs/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/docs/vuejs/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/docs/vuejs/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/docs/vuejs/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/docs/vuejs/images/unicorn_io.png","e0c072bd78f366471a393b9c366c9b74"],["/docs/vuejs/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/docs/vuejs/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/docs/vuejs/images/vant.png","802bad3fb5ca2a791682fc27c5af22f8"],["/docs/vuejs/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/docs/vuejs/images/vpn_review.png","7d40e6362db451204e14ffdc8a42a80f"],["/docs/vuejs/images/vpnranks.png","35d7392e773d487e13358d8b5f7fb646"],["/docs/vuejs/images/vpsserver_com.png","7ed2ee5d1cc7ca87137751880d84b566"],["/docs/vuejs/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/docs/vuejs/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/docs/vuejs/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/docs/vuejs/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/docs/vuejs/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/docs/vuejs/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/docs/vuejs/images/vuetraining_net__note__since_i_m_not_sure_where_else_to_put_it____this_is_replacing_vuescreencasts___they_re_both_run_by_me__i_m_just_switching_where_i_want_my_sponsorship_to_point_.png","4f23eba857989b1203ed74c10abca9e7"],["/docs/vuejs/images/watchcartoononline.png","f7cf1082b14003908496f02f9eb2ae00"],["/docs/vuejs/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/docs/vuejs/images/webucator.png","3c87885f4c36bc1b07f8c2b547e84b6f"],["/docs/vuejs/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/docs/vuejs/images/writers_per_hour.jpg","2033e6d7e88969e97e78e38d8d030eb9"],["/docs/vuejs/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/docs/vuejs/images/xinguan.png","9eedb6a8a2ee1b0deded1cbadb2680a5"],["/docs/vuejs/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/docs/vuejs/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/docs/vuejs/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/docs/vuejs/index.html","ae3ce2605bec3e342365cf5c0e11afa8"],["/docs/vuejs/js/common.js","cbc44e599a29dbc553adaee8c73f5b24"],["/docs/vuejs/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/docs/vuejs/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/docs/vuejs/js/theme-data.js","b386c91122fd188194ea98b2da18996e"],["/docs/vuejs/js/vue.js","ea86876dd3a53ad9d7095ff5ec012dea"],["/docs/vuejs/js/vue.min.js","b21b8531847604ab5f2f5caaef51ba31"],["/docs/vuejs/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/docs/vuejs/menu/index.html","cb82df6c1a04e4bd00af1798360d35fb"],["/docs/vuejs/perf/index.html","1bc640d1e276f9b5c783b8c730f5abda"],["/docs/vuejs/resources/partners.html","4359d3fc8506317843769b262301075d"],["/docs/vuejs/resources/themes.html","7d31dce22239f2093e03f986f94e0d0e"],["/docs/vuejs/support-vuejs/index.html","82704c5efa2e86776ad7b4d89df006b6"],["/docs/vuejs/v2/api/index.html","6582194ceb7bfde567851f41382e7f86"],["/docs/vuejs/v2/cookbook/adding-instance-properties.html","889d83843d99868c85839c27502a72b9"],["/docs/vuejs/v2/cookbook/avoiding-memory-leaks.html","537b4f8b4006e561f9b9d09d9e22ff50"],["/docs/vuejs/v2/cookbook/client-side-storage.html","f287c001183a5d217eee9da5b11975dd"],["/docs/vuejs/v2/cookbook/creating-custom-scroll-directives.html","85b528ed857934e68ecd03b6a759958f"],["/docs/vuejs/v2/cookbook/debugging-in-vscode.html","91d7bffddb4308bf6d428a59ef94034c"],["/docs/vuejs/v2/cookbook/dockerize-vuejs-app.html","f4cb9fbd036fcc302894a0bb421a0545"],["/docs/vuejs/v2/cookbook/editable-svg-icons.html","83e896d1c9ac51a4510d1017229cd0e7"],["/docs/vuejs/v2/cookbook/form-validation.html","635e267164d0ed82eb785f50e2fa1bad"],["/docs/vuejs/v2/cookbook/index.html","1d7e0971377805e77866e599bb4ad5fc"],["/docs/vuejs/v2/cookbook/packaging-sfc-for-npm.html","11a77e980891ce0d1d3b6c30bceb8488"],["/docs/vuejs/v2/cookbook/practical-use-of-scoped-slots.html","9c2a2ee6e52b7a08210f69669841a515"],["/docs/vuejs/v2/cookbook/serverless-blog.html","766fd3c99b6198d0f450096a9da3d9a7"],["/docs/vuejs/v2/cookbook/unit-testing-vue-components.html","e9cff408bcf2aaf66a83758a423ac361"],["/docs/vuejs/v2/cookbook/using-axios-to-consume-apis.html","5a75b6dd8909c0976eaf3a79e3ed20db"],["/docs/vuejs/v2/examples/commits.html","7dfbca11d133491c3f7a9554b5264c0b"],["/docs/vuejs/v2/examples/deepstream.html","2de9806549879148be1714fd81358a96"],["/docs/vuejs/v2/examples/elastic-header.html","471048ce48a05e36d11681de0a7546f7"],["/docs/vuejs/v2/examples/firebase.html","e2aa16d3ac787bb1e4d0352c44628859"],["/docs/vuejs/v2/examples/grid-component.html","97131588dd3676281afe4df6fe770f73"],["/docs/vuejs/v2/examples/hackernews.html","eb5f6dddd12835e95222bd4ece9bfe1d"],["/docs/vuejs/v2/examples/index.html","6f6486b7330d0fb587433d50427e4abd"],["/docs/vuejs/v2/examples/modal.html","32116d61c222a84433114d9ae289c4b8"],["/docs/vuejs/v2/examples/select2.html","d31004623ac26b4be84c352e714e8aeb"],["/docs/vuejs/v2/examples/svg.html","8c6bb55bc3dd75ec5756167bce0ae6fc"],["/docs/vuejs/v2/examples/todomvc.html","42d21e7db6c85e408eeebaaf5f6f2adb"],["/docs/vuejs/v2/examples/tree-view.html","88ad95502dd23229f9d62ff6f1293278"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v2/index.html","8cdf1aefeba58c666a84f6cfb49a136a"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v2/package.json","f44b414ea6c8007e83f66181cbd3dfe9"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v2/sandbox.config.json","621f7d2e11e751c81508c494a4212e91"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v3/currency-validator.js","38c3c6804f52f9dc0e1e1d3f0df71576"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v3/index.html","4c22a3d5bba1263b3cd79ab3604baaee"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v3/package.json","8328b2bdef3541bae867c8ccd98cf385"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter-v3/sandbox.config.json","621f7d2e11e751c81508c494a4212e91"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter/index.html","493cec5ef58d21c7da73ea2a5a19f20b"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter/package.json","03b1cfe851ef28a294827443bf247d03"],["/docs/vuejs/v2/examples/vue-10-two-way-currency-filter/sandbox.config.json","621f7d2e11e751c81508c494a4212e91"],["/docs/vuejs/v2/guide/class-and-style.html","655e32f6d90cdcd5538b054afeeda5fe"],["/docs/vuejs/v2/guide/comparison.html","ee72cd614c6a8680081d26d4a293157a"],["/docs/vuejs/v2/guide/components-custom-events.html","6053f44c45e7519e6b042c0fa35d9b3d"],["/docs/vuejs/v2/guide/components-dynamic-async.html","f0600bd0695de89fbc21b2352fdfa663"],["/docs/vuejs/v2/guide/components-edge-cases.html","52dfbb1e71d8814c480f6c60db85a855"],["/docs/vuejs/v2/guide/components-props.html","c86a823088409e01b6ae4291128825e0"],["/docs/vuejs/v2/guide/components-registration.html","9f23b92d6ef76210f5a0f5ed39220e93"],["/docs/vuejs/v2/guide/components-slots.html","d97d1784dd1d04939de2abac81ab1be6"],["/docs/vuejs/v2/guide/components.html","1dc221fabeac4e030a70c4c5447a645d"],["/docs/vuejs/v2/guide/computed.html","71009589479c68462323b348f3a6c285"],["/docs/vuejs/v2/guide/conditional.html","a42d24f8933d6e232160aab6a0df2996"],["/docs/vuejs/v2/guide/custom-directive.html","3319af0e8b39ae425d02044988b439ea"],["/docs/vuejs/v2/guide/deployment.html","9e23d7c980b860371c21ea7753c8d99c"],["/docs/vuejs/v2/guide/events.html","934c6020f3785a4cc490b5a8b7493608"],["/docs/vuejs/v2/guide/filters.html","e79f7f105333789c93cba3ff6a0b5661"],["/docs/vuejs/v2/guide/forms.html","d46956e7a1e7911b1481e62181af198c"],["/docs/vuejs/v2/guide/index.html","adfd6d0c6cd5d60152926dbb53810b97"],["/docs/vuejs/v2/guide/installation.html","08e2121ce1489c3adfa8978f1517d372"],["/docs/vuejs/v2/guide/instance.html","02ade2a64f0784ea138cd842a567387e"],["/docs/vuejs/v2/guide/join.html","346be3b9bda622d56a94edc479be3bd8"],["/docs/vuejs/v2/guide/list.html","fb17e2cd454b4f5ea5178e4903514ea4"],["/docs/vuejs/v2/guide/migration-vue-router.html","7acad624a4689a456dba41d8613133e4"],["/docs/vuejs/v2/guide/migration-vuex.html","c9a0b04e7182d9df7cb8ea86eca6b167"],["/docs/vuejs/v2/guide/migration.html","4b0121e7862700a64c5b3b4b31269c79"],["/docs/vuejs/v2/guide/mixins.html","abfb81bb359ad3be334f700b211e9cd2"],["/docs/vuejs/v2/guide/plugins.html","464f9b5a302abddce51f76621ed198d5"],["/docs/vuejs/v2/guide/reactivity.html","ceb1eb548db238d4a1bae4d885a6d6d2"],["/docs/vuejs/v2/guide/render-function.html","74ee3b477d524e98b56259f92a3cd8c9"],["/docs/vuejs/v2/guide/routing.html","1daeb2aea40bf1307d52d27352e2f536"],["/docs/vuejs/v2/guide/security.html","cd21bb57a79297d623b879dd9631ff5d"],["/docs/vuejs/v2/guide/single-file-components.html","79f9e8a88969681e32c480ae8cc7fd17"],["/docs/vuejs/v2/guide/ssr.html","3c4bab41f9a9ee361b707294668cea44"],["/docs/vuejs/v2/guide/state-management.html","5bf32d687eb76bb94e26acb09e21730c"],["/docs/vuejs/v2/guide/syntax.html","fc2faaf497515e6d8c1a6fb3cc9578e4"],["/docs/vuejs/v2/guide/team.html","694973377a8d1da404778a82cef6affe"],["/docs/vuejs/v2/guide/testing.html","1c5db7b6098c264ee10929969dc9469f"],["/docs/vuejs/v2/guide/transitioning-state.html","c9e6a418fef5e9ae56b045eed7f90aac"],["/docs/vuejs/v2/guide/transitions.html","0a731e1bfaa87f8555f09a736a6c4210"],["/docs/vuejs/v2/guide/typescript.html","8e00ef0f4929b566ddcd5127f889bb8d"],["/docs/vuejs/v2/search/index.html","326b4e14c24e59db7a9033b0ce80d7d1"],["/docs/vuejs/v2/style-guide/index.html","7df3f413d6840e5b7b5806723d48cdee"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




