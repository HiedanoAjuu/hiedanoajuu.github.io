/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/09/Geologic-time-scale/index.html","bed8338b7ba91127898f92fca19391c0"],["/2023/10/14/Cenozoic/index.html","5df491e5be2b436c13152c84f314e9cd"],["/2023/10/14/Cenozoic/paris_basin.gif","cde22068b5006684b91b70a608b7ab1b"],["/2023/10/21/Archean-Hadean/ida.jpg","0096582ebca0e1bb373bb37e4f69917a"],["/2023/10/21/Archean-Hadean/index.html","bab4433cb6c77d9e289ba1134268b03f"],["/2023/10/21/Archean-Hadean/m16.jpg","64280b60ad306fb57bbef5ee8bedbcbd"],["/2023/10/21/Archean-Hadean/sharkbay.jpg","7ad767f71bb952988ffc3c6ba999ceb7"],["/2023/10/28/About-Geologic-time-scale/cedarbreaks.jpg","88e88f3806b74dfc4520f1ade3d53336"],["/2023/10/28/About-Geologic-time-scale/index.html","d05a68e20acfcf63a8c87311f624f664"],["/2023/10/28/About-Geologic-time-scale/paintedhills.jpg","f6562a80e6fa2d38dc420373f4d72a1f"],["/2023/11/04/Plate-tectonics/index.html","ff30b99333876bcdb877b2bb2d334e2b"],["/2023/11/04/Plate-tectonics/mag_anom.gif","407fcb46a0c6d923ee501be9ef1c239e"],["/2023/11/04/Plate-tectonics/seafloor2.gif","fa185f88defe5ac3af3d54f04afa26cd"],["/2023/11/19/Holocene/adirondacks.jpg","a0b8e0173f691bbf7af6e6d34c92363e"],["/2023/11/19/Holocene/index.html","acdae906450d0a9dd510a9877207324e"],["/2024/01/20/Voyage-to-North-America/index.html","e24e26bb855b788ca1119c519857c68d"],["/2024/06/20/rosetta-stone-translation-greek/index.html","37f7544daf4da4df616b923d3d870028"],["/2024/06/20/rosetta-stone-translation-greek/rosetta-stone.jpg","35d670ac260e360e5b95f2461ca5bcee"],["/2024/08/07/akyuu/akyuu.jpg","2d858839cd0bb0b5aa276cc85fc55789"],["/2024/08/07/akyuu/index.html","8e70d8b4579e6f1bf7b8e11337f86e88"],["/2024/08/10/hiragana-in-chinese/a.jpg","d9289a1d7aeef5d5aef0a8bae58f0548"],["/2024/08/10/hiragana-in-chinese/chi.jpg","e7bd92a3fc7f9ff07464f0b805f7a912"],["/2024/08/10/hiragana-in-chinese/e.jpg","0e02eaca2de90cc6c0f504ff1a8e52c5"],["/2024/08/10/hiragana-in-chinese/fu.jpg","dd63d8301e57863a25d472c271d41133"],["/2024/08/10/hiragana-in-chinese/ha.jpg","a420d77b62a82cdf93c19db0c0dd77e9"],["/2024/08/10/hiragana-in-chinese/he.jpg","fc88c203fd1acf9d658fb2faf6ef982b"],["/2024/08/10/hiragana-in-chinese/hi.jpg","784fcf8ebe9ddbef27269f40aa5c2bed"],["/2024/08/10/hiragana-in-chinese/ho.jpg","55cbfdbbca057cfe983186b2a6b305d8"],["/2024/08/10/hiragana-in-chinese/i.jpg","0e1f5d86cce474f9f1d45ee6ee8ce8e3"],["/2024/08/10/hiragana-in-chinese/index.html","4460c848b02a4072e26b6c075fe743a4"],["/2024/08/10/hiragana-in-chinese/ka.jpg","4221d464ec520d0c443f9db0fdebb2e5"],["/2024/08/10/hiragana-in-chinese/ke.jpg","df2fc58699cf0be64230c073c883b1cc"],["/2024/08/10/hiragana-in-chinese/ki.jpg","7c1d63f182b07f39688fcafed5404a56"],["/2024/08/10/hiragana-in-chinese/ko.jpg","394377319630e03f4aabf2f04289360e"],["/2024/08/10/hiragana-in-chinese/ku.jpg","bf64d0a378c387513d3592c52e3405c1"],["/2024/08/10/hiragana-in-chinese/ma.jpg","fd5d0b3ab205fb7c4eba26cdc429675d"],["/2024/08/10/hiragana-in-chinese/me.jpg","03b89e439fe206d3b7a41b13fcfbeab5"],["/2024/08/10/hiragana-in-chinese/mi.jpg","0099b4e46f9fad62075b349a3a119dda"],["/2024/08/10/hiragana-in-chinese/mo.jpg","9d8db8b44022d4209b754c2563b98ca1"],["/2024/08/10/hiragana-in-chinese/mu.jpg","836e1250ff97d370695714efaf3b52dd"],["/2024/08/10/hiragana-in-chinese/n.jpg","de9e438881733c7184e850458df49b36"],["/2024/08/10/hiragana-in-chinese/na.jpg","e767329f3c79b150fdca4c1899a9c4d9"],["/2024/08/10/hiragana-in-chinese/ne.png","3a74ab1214f398529a163e06d106d946"],["/2024/08/10/hiragana-in-chinese/ni.jpg","a10a45b467f01a849bd76ed38217c35c"],["/2024/08/10/hiragana-in-chinese/no.jpg","b50b3a88ab3ef81828a0c90c5f37bac1"],["/2024/08/10/hiragana-in-chinese/nu.jpg","7c15d1859b58ae53c56d79f14510748e"],["/2024/08/10/hiragana-in-chinese/o.jpg","14eb0d1369fea942c6875281c27ee0c4"],["/2024/08/10/hiragana-in-chinese/ra.jpg","efbf5191d1f6c3f9985033d475f0e2b6"],["/2024/08/10/hiragana-in-chinese/re.jpg","1ff1b515576ccfca0054afdfe9e070e8"],["/2024/08/10/hiragana-in-chinese/ri.jpg","f8b46cd48679e42243f2e07ab6128340"],["/2024/08/10/hiragana-in-chinese/ro.jpg","abeeefbb510a37533d728c62df34d8b4"],["/2024/08/10/hiragana-in-chinese/ru.jpg","600982b8c6697fa9b493004810b7e12c"],["/2024/08/10/hiragana-in-chinese/sa.jpg","d422c6cc81b32ea471da39e5d8190353"],["/2024/08/10/hiragana-in-chinese/se.jpg","7543e33ad2a486ef09b7c884c91c9bee"],["/2024/08/10/hiragana-in-chinese/si.jpg","f3169b919404152fe4b58153f9da0428"],["/2024/08/10/hiragana-in-chinese/so.jpg","c4aed165af3ca18fbe70355b45c8e668"],["/2024/08/10/hiragana-in-chinese/su.jpg","a2cf04f22103b3d983cbb51d952a4c25"],["/2024/08/10/hiragana-in-chinese/ta.jpg","20054a0e5b980ccd794deeb774e288a7"],["/2024/08/10/hiragana-in-chinese/te.jpg","ee988134da8180866d10b19b3e859062"],["/2024/08/10/hiragana-in-chinese/to.jpg","1f204d31d1eaddc7489f59bb018affad"],["/2024/08/10/hiragana-in-chinese/tsu.jpg","b79d1a643710e629dc680126ea9e07fa"],["/2024/08/10/hiragana-in-chinese/u.jpg","f7d7da69d256f7ffa593e7a1094d8b21"],["/2024/08/10/hiragana-in-chinese/wa.jpg","316f8e4435afe4b8b577774cf23aa5cb"],["/2024/08/10/hiragana-in-chinese/we.jpg","2fbd5f168566b3eaeadb51f5b607ef74"],["/2024/08/10/hiragana-in-chinese/wi.jpg","cd9d43ed1e22db7fef634456d5a0ae1a"],["/2024/08/10/hiragana-in-chinese/wo.jpg","1fe50982375db354fb491ff04fa9a653"],["/2024/08/10/hiragana-in-chinese/ya.jpg","4ccbae5f6e3151f2b6bc6523bbcf01b1"],["/2024/08/10/hiragana-in-chinese/ye.jpg","a6b8214c56b616abb29d648c762fae46"],["/2024/08/10/hiragana-in-chinese/yo.jpg","51315d22a6ee09b7e2e4e0cfce98a819"],["/2024/08/10/hiragana-in-chinese/yu.jpg","dd3a928369f28e1bd95cde08ae9bcfcd"],["/2024/10/07/manetho/index.html","545a500182985280754e73f8697fc50e"],["/2025/01/10/egypt-maps/central_egypt.gif","e4719e6d8033ce6bb993fab17721d8e5"],["/2025/01/10/egypt-maps/index.html","d81cd0c01dfc11601438b7b5cf49e027"],["/2025/01/10/egypt-maps/lower_egypt.gif","f10e37b6834fc54c21576e2bcb63e967"],["/2025/01/10/egypt-maps/sinai.gif","d702a40794aa3ce76cafd9f2f326aef4"],["/2025/01/10/egypt-maps/southern_egypt.gif","36ec5dce21c4241736858f569e984c42"],["/2025/01/19/expt-7/assemble.png","edcb2bc40c2afe19902f6483f07ea18e"],["/2025/01/19/expt-7/index.html","4144e88e8583b1b244c1945e7ad82332"],["/2025/01/19/expt-7/table.png","245f914efc95fe19ed56ceb2484fe11c"],["/2025/01/21/hello-world-masm/assemble.png","a8a6000a2955fafa0c260a0873bbe483"],["/2025/01/21/hello-world-masm/hello.png","45f6d9e00b902b2c3a520ca39e88fea6"],["/2025/01/21/hello-world-masm/index.html","4557f44a97d4d665e597cf1364c48a75"],["/2025/01/25/power-idea/assemble.png","f608bcb368acb42d861d2d0a81f5f7cd"],["/2025/01/25/power-idea/demo.jpg","6da60b37a64f0a0dc13dc1e61b009532"],["/2025/01/25/power-idea/index.html","2ef939f92a079f485c70c3a1bad90882"],["/2025/01/25/power-idea/table.png","ef41ab60a58f8e76c8ed88788b276784"],["/2025/02/01/time-exe/assemble.png","e7ee676c3adb25e468307c93ecdb84b8"],["/2025/02/01/time-exe/date.png","49f90318980f51575e84cfeaacaa0bce"],["/2025/02/01/time-exe/index.html","2f9722662b042bd092030a0e87453acb"],["/2025/02/01/time-exe/path.png","e9c0b68cb5aba3866eba4da4e3d4d399"],["/2025/02/01/time-exe/time.png","27e7ace075ee9c687e52594bd9969ef1"],["/2025/02/04/int9/assemble.png","5ef1d310a893d4857ca77eeebe37f370"],["/2025/02/04/int9/index.html","3f5a456b56b04e351dcda1017ecb1f52"],["/2025/02/09/qemu-ms-dos/dos-floppy.png","54f0f466c4a18a80cc82be11b9bc2b4e"],["/2025/02/09/qemu-ms-dos/dos-shell.png","a154b8725754f98e55959de924f41e35"],["/2025/02/09/qemu-ms-dos/index.html","85e68cb26fd4aa4f1111336641127df2"],["/2025/04/04/th-sst/index.html","d9bd85a4f1d75212b24f94b8a3656190"],["/archives/2023/09/index.html","311bc94f1ef4c0c5c7a63bb8dcdd1734"],["/archives/2023/10/index.html","2dcc5a953133130d175954fdda9c1bf4"],["/archives/2023/11/index.html","2ffc292bb11908f2f72e394754f55ecf"],["/archives/2023/index.html","f04de087fecb39785be905bd29434712"],["/archives/2024/01/index.html","61dc1eac616f89702e51a22f80f379cb"],["/archives/2024/06/index.html","f5db7529ea30f245879d36dc429e8f4b"],["/archives/2024/08/index.html","5c9e731517107b293a80cc349e69039d"],["/archives/2024/10/index.html","eba6b9cd5a01e304958bc98606ede2bb"],["/archives/2024/index.html","acaa6fbc12c37af3143ee1179d84298a"],["/archives/2025/01/index.html","3ff33828daa1995373af08d73fe37e59"],["/archives/2025/02/index.html","90a4c4ffc17669bc12928aaa1f34498c"],["/archives/2025/04/index.html","2d7f75b6c95be631429ac4cc60eff9dc"],["/archives/2025/index.html","1e9fe26fa9db31268ec576961fbd3248"],["/archives/index.html","802c75d13850a85d10a33f2a5a2099ce"],["/archives/page/2/index.html","9e4a98d7bb24a749221cd24e10004867"],["/categories/index.html","b7ca91304b122056457f6a6423f4318a"],["/categories/东方/index.html","fd54b5a27c0c6e17907c7f6bd6030ab4"],["/categories/历史/index.html","76e187e9a04c9208f0bba52fdb66ab48"],["/categories/历史/古代史/index.html","c00f2ed7a4a547f987cde726c4329aa2"],["/categories/历史/古代史/人类起源/index.html","9e4902233926a15d66ba256996587d53"],["/categories/历史/古代史/人类起源/地质年代/index.html","deef8e1949c1bc172fa2dba82a103be6"],["/categories/历史/古代史/埃及/0-杂项/index.html","cc55a59c782058f0174ba17cbf00726d"],["/categories/历史/古代史/埃及/1-早王朝-公元前3150-2705年-第1-2王朝/index.html","046f77eded108cfee853b1d5761c2c7c"],["/categories/历史/古代史/埃及/5-后王国时代-公元前1070-332年-第21-31王朝/index.html","d2ef4e5557be97bea7333ae02fdb353b"],["/categories/历史/古代史/埃及/index.html","524dea139a983018dc63f4f704c02a98"],["/categories/历史/现代史/index.html","7724c3fb3e32571398b02b50fbc5df6d"],["/categories/历史/现代史/北美殖民地/index.html","0a10b831bb62219634b86ac01d42f81a"],["/categories/历史/现代史/北美殖民地/早期征服与剥削/index.html","b3d75efcf1d425f75d0171a763ab830d"],["/categories/杂项/index.html","85bbd81d55d8c8e93a97cd376d991fdd"],["/categories/计算机/index.html","3d6b3bfa038a21c88f2bdc2715e7dcea"],["/categories/计算机/汇编语言/Masm/index.html","ffadcd5baaa8064a7e31add6d9a1d256"],["/categories/计算机/汇编语言/index.html","56d0b63ff03d1989c9d9888686707b34"],["/css/main.css","9cde302cdabfba7fcba2f3b6c4a6919f"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7e313879002f64aaf888360cabb618ce"],["/fonts/consola.ttf","1db29588408eadbd4406aae9238555eb"],["/fonts/fzrzh.ttf","b47b71b58e5243587072fe926923afc3"],["/fonts/fzzj-whjzt.ttf","d0ea1fef0f20d3395cda817b441a0072"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","82ce9e4bb95be05418bebffba5bb58cf"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.jpg","71fbe01a5e143f95a46fd001cf047628"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/fa_16x16.svg","9f4b06531516afe18e75b0f709b376ec"],["/images/fa_32x32.svg","169aa13ca9b4f18d3928bf1ba35d271a"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","75cbd7f0a2e2032a12516bfa60aafe3c"],["/index.html","1b731c90e5b39ca56f869fbf522949a6"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/md5.min.js","af62250cb2d922418db97b55bbeee54d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","319112f59d0017c051638fe3a44f64fd"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/reading_progress/README.html","03aec53a7d776fff04947840d087a8fd"],["/lib/reading_progress/reading_progress.js","4532bad6f74d2abbad00ae166ced99a5"],["/lib/reading_progress/reading_progress.min.js","abbebb6c477b3a170cb6aea8fc2915e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e221dbb4442d2925f36db4853643b356"],["/sw-register.js","b85d51395c8249202337b526924435f1"],["/tags/Hello-World/index.html","696bef0414aa47bbf7d72c03a9a32c34"],["/tags/index.html","6f97acc5eabae0340ce92da337ece5d0"],["/tags/东方/index.html","f7f5eda030b2f4b89ee4ac894569b9d8"],["/tags/东方Project二次创作/index.html","9eea45c4788e0d100902a6bcb8c65e53"],["/tags/书法/index.html","5402990336d4c2246f6322c87e6c0529"],["/tags/内存/index.html","6726a5295810a2c2b94d9bba20ecdd84"],["/tags/北美/index.html","2b4857866c5c363780f41e9e0f33b22d"],["/tags/历史/index.html","b65f0694b09efeef67e77684fc773923"],["/tags/古埃及/index.html","f34f9922215402f261a203a93493756d"],["/tags/史书/index.html","e2243b97bb57e850da00cf7b91e0d45e"],["/tags/图表/index.html","341267e284f23778df26ee067de992c6"],["/tags/地图/index.html","92ee42cb530143f541b8e15959a7177b"],["/tags/地理/index.html","864380a820b2da5c467b6b7082862f98"],["/tags/埃及/index.html","9c2efc233ac20876a827c078a2daf69f"],["/tags/幻想乡/index.html","9334d95e9238b5425292e91a96eef557"],["/tags/折腾/index.html","588efaa01eeac6363dd8224cb51f15e8"],["/tags/文化/index.html","dba915a9ead492008f1121072bc67130"],["/tags/新闻/index.html","a5bab71b64490128f5a2e213bc6f1f9f"],["/tags/日语/index.html","ab39ec7d262ab8432e5f2fa0ec4533c9"],["/tags/显存/index.html","881ecd5ea916466bee28e01166bb45d6"],["/tags/殖民/index.html","8b56046e6a8d0662a3cf2eb687621332"],["/tags/汇编语言/index.html","29bb9beb4765d5f7a4f9e875ffe885a3"],["/tags/渣翻/index.html","025f615e784d88f3a2f910b3f8ea8405"],["/tags/石碑/index.html","0aa79a91d52b94ba6f7796b48adb4d36"],["/tags/计算机/index.html","4c276afdc8c16003d966ba879f929b07"],["/tags/风见幽香/index.html","2a39b8dbcee37204e2eb282c2a21121b"],["/tags/高危/index.html","a664f7072d524a57ef3ef3d121898daa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
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



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/npm/*", toolbox.cacheFirst, "cdn.jsdelivr.net");





/* eslint-enable */
