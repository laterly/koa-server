(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./node_modules/_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_vue-loader@15.6.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.6.2@vue-loader/lib/index.js?!./src/components/menuDetail/menuDetail.vue?vue&type=style&index=0&lang=less&":function(e,t,a){},"./src/components/menuDetail/menuDetail.vue":function(e,t,a){"use strict";a.r(t);var s=a("./src/components/menuDetail/menuDetail.vue?vue&type=template&id=e14ef7e2&"),n=a("./src/components/menuDetail/menuDetail.vue?vue&type=script&lang=js&"),i=(a("./src/components/menuDetail/menuDetail.vue?vue&type=style&index=0&lang=less&"),a("./node_modules/_vue-loader@15.6.2@vue-loader/lib/runtime/componentNormalizer.js")),l=Object(i.a)(n.a,s.render,s.staticRenderFns,!1,null,null,null),o=a("./node_modules/_vue-hot-reload-api@2.3.2@vue-hot-reload-api/dist/index.js");o.install(a("./node_modules/_vue@2.6.6@vue/dist/vue.esm.js")),o.compatible&&(e.hot.accept(),e.hot.data?o.reload("e14ef7e2",l.options):o.createRecord("e14ef7e2",l.options),e.hot.accept("./src/components/menuDetail/menuDetail.vue?vue&type=template&id=e14ef7e2&",function(e){s=a("./src/components/menuDetail/menuDetail.vue?vue&type=template&id=e14ef7e2&"),o.rerender("e14ef7e2",{render:s.render,staticRenderFns:s.staticRenderFns})})),l.options.__file="src/components/menuDetail/menuDetail.vue",t.default=l.exports},"./src/components/menuDetail/menuDetail.vue?vue&type=script&lang=js&":function(e,t,a){"use strict";var s=a("./node_modules/_vuex@3.1.0@vuex/dist/vuex.esm.js"),n=a("./node_modules/_better-scroll@1.14.1@better-scroll/dist/bscroll.esm.js"),i=a("./src/utils/common/store.js"),l={created:function(){this.getSong()},mounted:function(){var e=this;this.$nextTick(function(){e.scroll=new n.a(e.$refs.wrapper,e.options),console.log(e.scroll)})},data:function(){return{info:[],totalSong:0,list:[],options:{click:!0,taps:!0}}},methods:{playAll:function(){i.a.local.set("playSongList",this.list),this.$store.commit("playListType",2),this.getSongDetails(this.list[0])},onClickLeft:function(){this.$router.go(-1)},getSong:function(){var e=this,t=this.$loading();this.$http.getSongMenuDetails(this.$route.query.specialid).then(function(a){t.clear();var s=a.data.info.list;e.info={imgUrl:s.imgurl.replace("{size}",e.$store.state.koGouSize),specialname:s.specialname,publishtime:s.publishtime,nickname:s.nickname,tags:s.tags},e.$store.dispatch("setMenuTitle",e.info.specialname);var n=a.data.list.list.info;e.totalSong=n.length;for(var i=0;i<n.length;i++)e.list.push({filename:n[i].filename,remark:n[i].remark,hash:n[i].hash})})},getSongDetails:function(e){var t=this;e.hash!==this.$store.state.player.nowPlaying.hash?this.$http.getSongDetails({hash:e.hash}).then(function(a){t.addPlayerList={hash:a.data.data.hash,author_name:a.data.data.author_name,song_name:a.data.data.song_name,img:a.data.data.img,play_url:a.data.data.play_url,timelength:a.data.data.timelength,lyrics:a.data.data.lyrics,currentTime:0,newRangeValue:0},console.log(t.addPlayerList),t.$store.commit("nowPlayList",t.addPlayerList);var s=i.a.local.get("localPlayList")?i.a.local.get("localPlayList"):[],n=[],l=!0,o=!1,r=void 0;try{for(var c,u=s[Symbol.iterator]();!(l=(c=u.next()).done);l=!0){var d=c.value;n.push(d.hash)}}catch(a){o=!0,r=a}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}n.includes(a.data.data.hash)||s.push(e),i.a.local.set("localPlayList",s)}):this.$store.dispatch("revisePlay",!this.$store.state.player.play)}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){var s,n,i;s=e,i=a[n=t],n in s?Object.defineProperty(s,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[n]=i})}return e}({},Object(s.b)({koGouSize:function(e){return e.koGouSize},menuTitle:function(e){return e.menuTitle},songListData:function(e){return e.songList.list},playerList:function(e){return e.playerList.list},player:function(e){return e.player.player},play:function(e){return e.player.play},hash:function(e){return e.player.nowPlaying.hash}}))};t.a=l},"./src/components/menuDetail/menuDetail.vue?vue&type=style&index=0&lang=less&":function(e,t,a){"use strict";var s=a("./node_modules/_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_vue-loader@15.6.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.6.2@vue-loader/lib/index.js?!./src/components/menuDetail/menuDetail.vue?vue&type=style&index=0&lang=less&");a.n(s).a},"./src/components/menuDetail/menuDetail.vue?vue&type=template&id=e14ef7e2&":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-detail fullScreen menu"},[a("img",{staticClass:"vux-bg-blur",attrs:{src:e.info.imgUrl}}),e._v(" "),a("div",{staticClass:"menu-box rel"},[a("van-nav-bar",{staticClass:"abs",attrs:{title:e.menuTitle,"left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),e._v(" "),a("div",{staticClass:"van-card",staticStyle:{"margin-top":"0"}},[a("div",{staticClass:"van-card__header"},[a("a",{staticClass:"van-card__thumb rel"},[a("div",{staticClass:"thumb-img rel"},[a("img",{staticClass:"van-card__img",attrs:{src:e.info.imgUrl}})])]),e._v(" "),a("div",{staticClass:"van-card__content rel"},[a("div",{staticClass:"van-card__desc van-ellipsis"},[e._v("来自:"+e._s(e.info.nickname))]),e._v(" "),a("div",{staticClass:"van-card__bottom"},[a("div",{staticClass:"van-card__price"},[e._v("\n              创建时间:\n              "),a("span",[e._v(e._s(e.info.publishtime))])]),e._v(" "),a("div",{staticClass:"van-card__num"},e._l(e.info.tags,function(t,s){return a("van-tag",{key:s,attrs:{round:"",plain:"",type:"success"}},[e._v(e._s(t.tagname))])}),1)])])])])],1),e._v(" "),a("div",{staticClass:"song-list-menu"},[a("div",{staticClass:"van-nav-bar van-hairline--bottom",staticStyle:{"z-index":"1"}},[a("div",{staticClass:"van-nav-bar__left",on:{click:e.playAll}},[a("i",{staticClass:"van-icon van-icon-play-circle-o van-nav-bar__arrow"}),e._v(" "),a("span",{staticClass:"van-nav-bar__text"},[e._v("播放全部"),a("span",[e._v("(共"+e._s(e.totalSong)+"首)")])])])]),e._v(" "),a("div",{ref:"wrapper",staticClass:"wrapper song-list-scroll"},[a("div",{staticClass:"content"},e._l(e.list,function(t,s){return a("div",{key:s,staticClass:"van-cell van-cell--clickable van-address-item",on:{click:function(a){return e.getSongDetails(t)}}},[a("div",{staticClass:"van-cell__value van-cell__value--alone van-address-item__value"},[a("div",{staticClass:"van-radio"},[a("div",{staticClass:"van-radio__icon van-radio__icon--round"},[a("div",{staticClass:"rank-des"},[e._v(e._s(s+1))])]),e._v(" "),a("span",{staticClass:"van-radio__label"},[a("div",{staticClass:"van-address-item__name"},[e._v(e._s(t.filename))]),e._v(" "),a("div",{staticClass:"van-address-item__address"},[e._v(e._s(t.remark))])])])]),e._v(" "),a("i",{class:["van-icon van-address-item__edit",e.play&&t.hash===e.hash?"van-icon-pause-circle-o":"van-icon-play-circle-o"]})])}),0)])])])},n=[];s._withStripped=!0,a.d(t,"render",function(){return s}),a.d(t,"staticRenderFns",function(){return n})}}]);