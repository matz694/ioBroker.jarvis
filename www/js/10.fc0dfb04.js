(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{a8b8:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return d}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-height"},[s("div",{staticClass:"row no-wrap"},[s("q-toolbar",{staticClass:"paper",staticStyle:{"min-height":"56px"}},[s("q-toolbar-title",{attrs:{shrink:""}},[t._v(t._s(t.$t("Styles")))])],1)],1),s("paper",{style:{height:t.pageHeight-66-16+"px"}},[t.errorMessages?s("alert",{attrs:{title:"CSS Validation Errors"}},[s("ul",t._l(t.errorMessages,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0),s("br"),t._v("\n\t\t\tPlease check your CSS via "),s("a",{attrs:{href:"https://jigsaw.w3.org/css-validator/#validate_by_input",target:"_blank"}},[t._v("https://jigsaw.w3.org/css-validator/#validate_by_input")]),t._v(" and remove errors.\n\t\t")]):t._e(),s("inputs",{staticStyle:{height:"100%"},attrs:{type:"textarea",label:"CSS Editor",value:t.style,"full-height":""},on:{onChange:t.onChange}})],1)],1)},r=[],l=(s("5319"),s("a6f4"));const i=s("63c2");var n=Object(l["c"])({name:"StylesPage",data(){return{errorMessages:null,style:""}},methods:{onChange({id:t,value:e}){this.$store.commit("editor/set",{styles:e})}},computed:{pageHeight(){return this.$store.state.jarvis.pageHeight},rawStyle(){return this.$store.state.editor.styles||""}},created(){let t=null;try{t=i.parse(this.rawStyle,{silent:!0}),this.style=i.stringify(t,{indent:"\t",compress:!1})}catch(e){this.errorMessages=t&&t.stylesheet.parsingErrors.map((t=>t.reason+" (line: "+t.line+", column: "+t.column+")")),this.style=this.rawStyle.replace(/{/g,"{\n").replace(/}/g,"\n}\n\n")}}}),o=n,c=s("2877"),h=s("65c6"),p=s("6ac5"),u=s("eebe"),g=s.n(u),y=Object(c["a"])(o,a,r,!1,null,null,null),d=y.exports;g()(y,"components",{QToolbar:h["a"],QToolbarTitle:p["a"]})}}]);