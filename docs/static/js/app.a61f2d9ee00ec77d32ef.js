webpackJsonp([1],{NHnr:function(t,e,n){"use strict";function a(t){n("tK4o")}function o(t){n("m31t")}function s(t){n("jtxq")}function i(t){n("cLDQ")}function r(t){n("e5OD")}function c(t){n("tfco")}function l(t){var e=this;this.active=!1,this.pid=t.type+"-"+xt,t.von=t.von||{},t.vbind=t.vbind||{},xt+=1,Ct()(this,t),this.von.close=this.von.close||function(){return e.close()}}function p(t){n("Tmf7")}function u(t){n("zjse")}Object.defineProperty(e,"__esModule",{value:!0});var m=n("7+uW"),d={name:"app",data:function(){return{routers:[{path:"/",text:"Home"},{path:"/modal",text:"Modal"}]}},created:function(){}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ul",{staticClass:"tabs"},t._l(t.routers,function(e,a){return n("li",{key:a,staticClass:"tab-top"},[n("router-link",{attrs:{to:e.path}},[t._v("\n\t\t\t\t"+t._s(e.text)+"\n\t\t\t")])],1)})),t._v(" "),n("router-view",{staticClass:"outside"}),t._v(" "),n("footer",[t._v("varEczn")])],1)},h=[],f={render:v,staticRenderFns:h},g=f,_=n("VU/8"),C=a,y=_(d,g,!1,C,null,null),b=y.exports,x=n("/ocq"),P={name:"popup-alert",data:function(){return{name:"",compoCode:'<template>\n    <div class="alert">\n        <h1>Hello Coder, Nice To Code You.</h1>\n        <ptn @click="confirm" text="Close" />\n    </div>\n</template>\n\n<scrip'+"t>\nexport default {\n    name: 'popup-alert',\n    data(){\n        return {\n            name: ''\n        }\n    },\n    created(){\n        console.log('alert init')\n    },\n    methods: {\n        confirm(){\n            this.$emit('close'); \n        },\n        output_name(){\n            this.$emit('getName', this.name); \n        }\n    }\n}\n<\/script>\n\n<style scoped>\n\n</style>\n"}},created:function(){console.log("alert init")},methods:{confirm:function(){this.$emit("close")},output_name:function(){this.$emit("getName",this.name)}}},N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[n("h1",[t._v("Hello Coder, Nice To Code You.")]),t._v(" "),n("ptn",{attrs:{text:"Close"},on:{click:t.confirm}}),t._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.compoCode,expression:"compoCode"}],staticClass:"code-wrap"},[n("code",{staticClass:"javascript"})])],1)},$=[],w={render:N,staticRenderFns:$},k=w,j=n("VU/8"),F=o,A=j(P,k,!1,F,"data-v-07f8dd7d",null),E=A.exports,I={data:function(){return{name:"",thisCode:'<template>\n    <div class="alert">\n        <h1>What\'s Your Name ?</h1>\n        <div class="area">\n            <input placeholder="input here" type="text" v-model="name" />\n        </div>\n        <ptn @click="output_name" text="submit & close" />\n    </div>\n</template>\n\n<scrip'+"t>\nexport default {\n    data(){\n        return {\n            name: ''\n        }\n    },\n    created(){\n        console.log('alert init')\n    },\n    methods: {\n        output_name(){\n            this.$emit('getName', this.name); \n        }\n    }\n}\n<\/script>\n\n<style scoped>\ninput {\n    padding: 4px 18px; \n    border: 1px solid #BBB; \n    background-color: #EEE; \n}\n\n.area {\n    margin-bottom: 1em; \n}\n</style>\n"}},created:function(){console.log("alert init")},methods:{output_name:function(){this.$emit("getName",this.name)}}},R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[n("h1",[t._v("What's Your Name ?")]),t._v(" "),n("div",{staticClass:"area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"input here",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("ptn",{attrs:{text:"submit & close"},on:{click:t.output_name}}),t._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.thisCode,expression:"thisCode"}],staticClass:"code-wrap"},[n("code",{staticClass:"javascript"})])],1)},T=[],H={render:R,staticRenderFns:T},U=H,V=n("VU/8"),W=s,B=V(I,U,!1,W,"data-v-74f5290c",null),L=B.exports,Y={name:"ppp-alert",created:function(){},methods:{close:function(){this.$emit("close")}}},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[n("div",{staticClass:"alert-inner"},[t._v("\n        I Am An Alert\n\n\n        "),n("div",{staticClass:"btn",on:{click:t.close}},[t._v("Close")])])])},G=[],M={render:D,staticRenderFns:G},O=M,Q=n("VU/8"),q=i,z=Q(Y,O,!1,q,"data-v-cb615c52",null),J=z.exports,K="import GetInput from '@/components/popup/GetInput.vue';\n\nvar input = this.$ppp.create({\n\ttype: 'modal', \n\tcomponent: GetInput,\n\tvbind: {\n\t\tstyle: {\n\t\t\tbackgroundColor: '#FFF'\n\t\t}\n\t},\n\tvon: {\n\t\tgetName: name => {\n\t\t\tconsole.log('your name is', name);\n\t\t\tthis.userInput = name;\n\n\t\t\tinput.close(); \n\t\t}\n\t}\n});\ninput.launch();\n".replace(/(\t)/g,"    "),S="import PPPAlert from '@/components/popup/PPPAlert.vue'; \n\nvar al = this.$ppp.create({\n\ttype: 'modal', \n\tcomponent: PPPAlert, \n\tvbind: {\n\t\tstyle: {\n\t\t\tbackgroundColor: 'rgba(0, 0, 0, .5)',\n\t\t\tcolor: '#fff'\n\t\t}\n\t},\n\ttransitionName: 'alert'\n}); \n\nal.launch();\n".replace(/(\t)/g,"    "),X=".alert-enter-active, .alert-leave-active {\n\ttransition: all .2s; \n}\n\n.alert-enter, .alert-leave-to {\n\ttransform: scale(1.3);\n\topacity: 0; \n}\n".replace(/(\t)/g,"    "),Z={name:"HelloWorld",data:function(){return{userInput:"",simpleConfig:"import HelloPPP from 'a/b/c/d/HelloPPP.vue';\n\nvar hello = this.$ppp.create({\n    type: 'modal', \n    component: HelloPPP,\n    vbind: {\n        style: {\n            backgroundColor: '#FFF'\n        }\n    }\n});\nhello.launch(); \n",getInputCode:K,alertCode:S,cssCode:X}},created:function(){},methods:{sayHello:function(){this.$ppp.create({type:"modal",component:E,vbind:{style:{backgroundColor:"#FFF"}}}).launch()},getInput:function(){var t=this,e=this.$ppp.create({type:"modal",component:L,vbind:{style:{backgroundColor:"#FFF"}},von:{getName:function(n){console.log("your name is",n),t.userInput=n,e.close()}}});e.launch()},modalAlert:function(){this.$ppp.create({type:"modal",component:J,vbind:{style:{backgroundColor:"rgba(0, 0, 0, .5)",color:"#fff"}},transitionName:"alert"}).launch()}}},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"title"},[t._v("Modal")]),t._v(" "),n("p",{staticClass:"para"},[t._v("PPP support present modal by passing a simple config")]),t._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.simpleConfig,expression:"simpleConfig"}],staticClass:"code-wrap"},[n("code",{staticClass:"javascript"})]),t._v(" "),n("ptn",{attrs:{text:"say hello"},on:{click:t.sayHello}}),t._v(" "),n("h2",{staticClass:"sub-title"},[t._v("Get Input In Modal")]),t._v(" "),n("p",{staticClass:"para"},[t._v("What Your Name ?")]),t._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.getInputCode,expression:"getInputCode"}],staticClass:"code-wrap"},[n("code",{staticClass:"javascript"})]),t._v(" "),n("ptn",{attrs:{text:"input name"},on:{click:t.getInput}}),t._v(" "),t.userInput?n("span",{staticClass:"result"},[t._v("\n\t\tName: "+t._s(t.userInput)+"\n\t")]):t._e(),t._v(" "),n("h2",{staticClass:"sub-title"},[t._v("Custom Transition Animate")]),t._v(" "),n("p",{staticClass:"para"},[t._v("transition animate")]),t._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.alertCode,expression:"alertCode"}],staticClass:"code-wrap"},[n("code",{staticClass:"javascript"})]),t._v(" "),n("p",{staticClass:"para"},[t._v("and you should write `alert` transition css class in PPPAlert.vue: ")]),t._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.cssCode,expression:"cssCode"}],staticClass:"code-wrap"},[n("code",{staticClass:"css"})]),t._v(" "),n("ptn",{attrs:{text:"Alert"},on:{click:t.modalAlert}})],1)},et=[],nt={render:tt,staticRenderFns:et},at=nt,ot=n("VU/8"),st=r,it=ot(Z,at,!1,st,null,null),rt=it.exports,ct={name:"home",created:function(){}},lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Home")]),t._v(" "),n("p",[t._v("use vue-ppp to deal with popup-works")])])}],ut={render:lt,staticRenderFns:pt},mt=ut,dt=n("VU/8"),vt=c,ht=dt(ct,mt,!1,vt,null,null),ft=ht.exports;m.a.use(x.a);var gt=new x.a({routes:[{path:"/",name:"Home",component:ft},{path:"/modal",name:"HelloWorld",component:rt}]}),_t=n("woOf"),Ct=n.n(_t),yt={},bt=yt,xt=0,Pt=document.getElementsByTagName("html")[0];l.prototype.launch=function(){var t=this;return setTimeout(function(){t.active=!0,Pt.setAttribute("class","banScroll")}),this},l.prototype.close=function(){var t=this;return setTimeout(function(){t.active=!1,0===Vt.$ppp.activeCount&&Pt.setAttribute("class","")}),this},yt.create=function(t){return new l(t)},yt.__setPrototype=function(t,e){l.prototype[t]=e};var Nt={name:"popup-layout",data:function(){return{list:[]}},created:function(){window.vm=this,console.log("hello")},computed:{activeCount:function(){return this.list.reduce(function(t,e){return t+(e.active?1:0)},0)}},methods:{create:function(t){var e=bt.create(t);return this.list.push(e),e},getLastActive:function(){for(var t=this.list.length-1;t>=0;t--){var e=this.list[t];if(e.active)return e}return null}}},$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popupRoot",staticClass:"popup-layout"},t._l(t.list,function(e,a){return n("div",{key:e.pid,staticClass:"popup-item",class:e.type+"-outter"},[n("transition",{attrs:{name:e.transitionName||e.type}},[e.active?n(e.component,t._g(t._b({tag:"component",class:e.type+"-component"},"component",e[":"]||e.vbind,!1),e["@"]||e.von)):t._e()],1)],1)}))},wt=[],kt={render:$t,staticRenderFns:wt},jt=kt,Ft=n("VU/8"),At=p,Et=Ft(Nt,jt,!1,At,"data-v-f53121ac",null),It=Et.exports;n("bNAQ");var Rt={},Tt=Rt;Rt.createRoot=function(){var t=document.getElementsByTagName("body")[0],e=document.createElement("div");return t.appendChild(e),e};var Ht=function(t,e){function n(e,n,o){clearTimeout(a);var s=t.getLastActive();s?(console.log("[ PPP onRouting ]","next(false)"),s.close(),o&&o(!1)):(console.log("[ PPP onRouting ]","next()"),o&&o())}if(!e)return console.warn("[ vue-ppp ] Router Not Found When Trying To Listen Routing");var a=null;return e.beforeEach(function(t,e,o){clearTimeout(a),a=setTimeout(function(){n(t,e,o)})}),"ok"},Ut={$ppp:null},Vt=Ut;Ut.install=function(t,e){var n=e.router,a=Tt.createRoot();It.el=a;var o=new t(It);t.prototype.$ppp=o,Ut.$ppp=o,Ht(o,n)};var Wt={name:"ptn",props:["text"],methods:{btnPressed:function(t){this.$emit("click",t)}}},Bt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"ptn",on:{click:t.btnPressed}},[t._v("\n    "+t._s(t.text)+"\n")])},Lt=[],Yt={render:Bt,staticRenderFns:Lt},Dt=Yt,Gt=n("VU/8"),Mt=u,Ot=Gt(Wt,Dt,!1,Mt,"data-v-626217d0",null),Qt=Ot.exports,qt=n("5CJf"),zt=n.n(qt);m.a.config.productionTip=!1,m.a.component("ptn",Qt),m.a.use(Vt,{router:gt}),m.a.use(zt.a),new m.a({el:"#app",router:gt,template:"<App/>",components:{App:b}})},Tmf7:function(t,e){},bNAQ:function(t,e){},cLDQ:function(t,e){},e5OD:function(t,e){},jtxq:function(t,e){},m31t:function(t,e){},tK4o:function(t,e){},tfco:function(t,e){},zjse:function(t,e){}},["NHnr"]);