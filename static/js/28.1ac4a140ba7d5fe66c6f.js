webpackJsonp([28],{178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(222),s=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);var r=n(262),i=n(2),a=Object(i.a)(s.a,r.a,r.b,!1,null,null,null);e.default=a.exports},222:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),s=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"comments",data:function(){return{rec:{hotComments:[],comments:[],total:0},id:0,loaded:!1,offset:0,busy:!0}},beforeRouteEnter:function(t,e,n){n(function(e){parseInt(t.params.id)!==parseInt(e.id)&&(e.loaded=!1,e.cover="",e.offset=0,e.rec={hotComments:[],comments:[],total:0},e.comments(!1))})},methods:{comments:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];arguments[1];if("comment"==this.$route.name&&(this.busy=!0,this.id=this.$route.params.id,!e||this.rec.more)){var n=this.$route.query.ctype;n=n||null,s.default.comments(this.id,this.offset,n).then(function(n){var o=n.data;e&&(o.hotComments=t.rec.hotComments,o.comments=t.rec.comments.concat(o.comments)),t.loaded=!0,t.rec=o,t.offset=o.comments?o.comments.length:0,t.busy=!1})}}}}},262:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.comments,expression:"comments"}],staticClass:"page_t",attrs:{"infinite-scroll-disabled":"busy"}},[n("mt-header",{attrs:{fixed:"",title:"评论("+t.rec.total+")"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(e){return t.$router.go(-1)}},slot:"left"})],1),t._v(" "),t.rec.hotComments.length?n("div",[n("div",{staticClass:"sm_title"},[t._v("热门评论")]),t._v(" "),n("cmt",{attrs:{list:t.rec.hotComments}}),t._v(" "),t.rec.moreHot1?n("div",{staticClass:"cntloading"},[t._v("查看更多热门评论")]):t._e()],1):t._e(),t._v(" "),t.rec.comments.length?n("div",[n("div",{staticClass:"sm_title"},[t._v("精彩评论("+t._s(t.rec.total)+")")]),t._v(" "),n("cmt",{attrs:{list:t.rec.comments}})],1):t._e(),t._v(" "),t.loaded&&!t.rec.comments.length?n("div",{staticClass:"cntloading"},[t._v("暂无评论")]):t._e(),t._v(" "),t.rec.more||!t.loaded?n("loading"):t._e()],1)},s=[]}});