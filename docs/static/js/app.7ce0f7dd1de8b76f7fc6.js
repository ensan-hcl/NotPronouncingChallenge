webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("p",{staticClass:"icon"},[this._v("🙊")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("n54G")},null,null).exports,i=n("/ocq"),o=n("BO1k"),l=n.n(o),u={debug:!0,state:{property:{type:"1",word:""}},validate:function(){if(0==this.state.property.word.length)throw new Error("1文字以上入力してください");if(null===this.state.property.word.match(/[a-zA-Z]/gi))throw new Error("英単語を入力してください");if(this.state.property.word.match(/[^a-zA-Z \'\.,']/gi))throw new Error("英単語を入力してください");return!0},result:function(t){var e=[],n=!0,r=!1,a=void 0;try{for(var s,i=l()(t);!(n=(s=i.next()).done);n=!0){var o=s.value.toLowerCase();if(![" ","'",".",","].includes(o))if(0==d[o].length)e.push(o+"は発音せざるを得ません");else{var u=d[o][Math.floor(Math.random()*d[o].length)];e.push(o+"は"+u+"の"+o+"です")}}}catch(t){r=!0,a=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}return t.includes("v")?(e.unshift("💥"+t+"を発音しないチャレンジ失敗です💥"),e):(e.unshift("🎉"+t+"を発音しないチャレンジ成功です🎉"),e)}},d={a:["logically(ˈlɒdʒɪkli)","aesthetic(ɛsˈθɛdɪk)","aisle(aɪl)"],b:["bomb(bɑm)","climb(klaɪm)","thumb(θəm)","debt(dɛt)"],c:["muscle(ˈməsəl)","indict(ɪnˈdaɪt)"],d:["Wednesday(ˈwɛnzdeɪ)","handsome(ˈhænsəm)"],e:["date(deɪt)","imagine(ɪˈmædʒən)","leave(liv)"],f:["halfpenny(ˈheɪpni)"],g:["gnosis(ˈnoʊsəs)","sign(saɪn)"],h:["hour(ˈaʊr)","honest(ˈɑnəst)","ghost(ɡoʊst)"],i:["business(ˈbɪznəs)","suit(sut)"],j:["marijuana(ˈmɛrəˈwɑnə)"],k:["know(noʊ)","knight(naɪt)"],l:["walk(wɔk)","would(wʊd)","half(hæf)"],m:["mnemonic(nəˈmɑnɪk)"],n:["autumn(ˈɔdəm)","solemn(ˈsɑləm)"],o:["leopard(ˈlɛpərd)","jeopardy(ˈdʒɛpərdi)"],p:["receipt(rəˈsit)","psychology(saɪˈkɑlədʒi)","coup(ku)"],q:["lacquer(ˈlækər)"],r:["comfortable(ˈkəmftərbəl)","February(ˈfɛbuˌɛri)","forecastle(ˈfoʊksəl)"],s:["island(ˈaɪlənd)","apropos(ˌæprəˈpoʊ)","isle(aɪl)"],t:["ballet(bæˈleɪ)","debut(deɪˈbju)","whistle(ˈwɪsəl)"],u:["dialogue(ˈdaɪəˌlɑɡ)","tongue(təŋ)"],v:[],w:["write(raɪt)","sword(sɔrd)","who(hu)"],x:["faux pas(ˌfoʊ ˈpɑ)","grand prix(ˌɡrænd ˈpri)"],y:["beyond(biˈɑnd)"],z:["rendezvous(ˈrɑndəˌvu)"]},h=r.a.extend({name:"input-word",template:'<input class="input" v-model="sharedState.state.property.word" placeholder="英単語を入力してください">',data:function(){return{privateState:{},sharedState:u}}}),p=r.a.extend({name:"input-button",template:'<div><button class="button" v-on:click="result">チャレンジ！</button></div>',data:function(){return{privateState:{},sharedState:u}},methods:{result:function(t){try{this.$data.sharedState.validate()&&this.$router.push("/result")}catch(t){alert(t.message)}}}}),c=r.a.extend({name:"top-button",template:'<div><button class="button" v-on:click="top">もう一度遊ぶ</button></div>',data:function(){return{privateState:{},sharedState:u}},methods:{top:function(t){this.$router.push("/")}}}),v=r.a.extend({name:"twitter-button",template:'<div><button class="twitter_link" v-bind:onclick="link">ツイートする</button></div>',data:function(){return{privateState:{},sharedState:u}},computed:{link:function(){return"location.href='"+("https://twitter.com/intent/tweet?text="+this.sharedState.result(this.sharedState.state.property.word).join("%0D%0A")+"&hashtags=発音しないチャレンジ&url=https://ensan-hcl.github.io/NotPronouncingChallenge/")+"'"}}}),m=r.a.extend({name:"text-word",template:'<ul><p class="result_text" v-for="value in results">{{ value }}</p></ul>',data:function(){return{privateState:{},sharedState:u}},computed:{results:function(){return this.sharedState.result(this.sharedState.state.property.word)}}});r.a.component("input-word",h),r.a.component("input-button",p);var f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"top"}},[this._m(0),this._v(" "),e("p",{staticClass:"quote"},[this._v("発音するの、もうやめませんか？")]),this._v(" "),e("input-word"),this._v(" "),e("div",{attrs:{align:"center"}},[e("input-button")],1),this._v(" "),e("footer",[e("router-link",{attrs:{to:"./references",target:"_blank"}},[this._v("参考資料")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",{staticClass:"text"},[this._v("発音しない")]),e("span",{staticClass:"text"},[this._v("チャレンジ")])])}]};var b=n("VU/8")({},f,!1,function(t){n("gSmi")},null,null).exports;r.a.component("text-word",m),r.a.component("button-twitter",v),r.a.component("button-top",c);var w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"result"}},[e("h1",[this._v("チャレンジ結果")]),this._v(" "),e("text-word"),this._v(" "),e("div",{attrs:{align:"center"}},[e("button-twitter"),this._v(" "),e("button-top")],1),this._v(" "),e("footer",[e("router-link",{attrs:{to:"./references",target:"_blank"}},[this._v("参考資料")])],1)],1)},staticRenderFns:[]};var _=n("VU/8")({},w,!1,function(t){n("XdN1")},null,null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"references"}},[n("h1",[t._v("参考資料")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://twitter.com/koloka_/status/1355747999872208896",target:"_blank"}},[t._v("元ネタ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://rattanji78.blogspot.com/",target:"_blank"}},[t._v("Silent Letters in English Words")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.merriam-webster.com/words-at-play/mums-the-letter-when-letters-dont-say-a-thing",target:"_blank"}},[t._v("A - Silent Letters | Merriam-Webster")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://okinawa-repo.lib.u-ryukyu.ac.jp/bitstream/20.500.12001/5858/1/No17p19.pdf",target:"_blank"}},[t._v("英語の黙字－発音の落とし穴－ 沖縄大学紀要")])])])])}]};var k=n("VU/8")({},g,!1,function(t){n("Zvia")},null,null).exports;r.a.use(i.a);var y=new i.a({routes:[{path:"/",name:"Top",component:b},{path:"/result",name:"Result",component:_},{path:"/references",name:"References",component:k}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:y,components:{App:s},template:"<App/>"})},XdN1:function(t,e){},Zvia:function(t,e){},gSmi:function(t,e){},n54G:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7ce0f7dd1de8b76f7fc6.js.map