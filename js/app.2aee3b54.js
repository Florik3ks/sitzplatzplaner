(function(e){function t(t){for(var i,c,r=t[0],u=t[1],a=t[2],b=0,d=[];b<r.length;b++)c=r[b],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&d.push(l[c][0]),l[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);o&&o(t);while(d.length)d.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==l[u]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},l={app:0},s=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/sitzplatzplaner/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var o=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5edf":function(e,t,n){},"7cc3":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function l(e,t,n,l,s,c){var r=Object(i["r"])("HelloWorld");return Object(i["m"])(),Object(i["d"])(r,{msg:"Welcome to Your Vue.js + TypeScript App"})}n("b0c0"),n("d3b7"),n("25f0");var s=function(e){return Object(i["o"])("data-v-2515b5bb"),e=e(),Object(i["n"])(),e},c={class:"sideDiv"},r={class:"sliderDiv"},u=["max"],a=s((function(){return Object(i["g"])("br",null,null,-1)})),o={class:"sliderInformationDiv"},b={style:{"line-height":"109px"}},d=["max"],O={class:"studentFieldWrap"},j=Object(i["h"])(" Namen der Schüler   "),f={key:0,class:"arrowdown"},p={key:1,class:"arrowup"},g={key:0,class:"studentFieldDiv"},h=s((function(){return Object(i["g"])("input",{type:"file",accept:"text/csv,application/csv",id:"fileInputThingy"},null,-1)})),m=s((function(){return Object(i["g"])("button",{class:"fileInputThingy"},[Object(i["g"])("label",{for:"fileInputThingy",style:{width:"100%",height:"100%",display:"block",cursor:"pointer"}},[Object(i["g"])("span",{style:{"line-height":"31px"}}," Datei auswählen ")])],-1)})),v={class:"ruleWrap"},R=Object(i["h"])(" Sitzregeln   "),y={key:0,class:"arrowdown"},k={key:1,class:"arrowup"},w={key:0,class:"ruleDiv"},V=Object(i["h"])(" Dürfen nicht nebeneinander   "),x={key:0,class:"arrowdown"},S={key:1,class:"arrowup"},z={key:0,class:"ruleTypeDiv"},C=["onClick"],F=["onUpdate:modelValue"],I=s((function(){return Object(i["g"])("p",{style:{margin:"0","margin-right":"3%","margin-left":"3%",display:"inline-block",color:"darkred"}},"-",-1)})),D=["onUpdate:modelValue"],W=Object(i["h"])(" Sollen möglichst nebeneinander   "),T={key:0,class:"arrowdown"},P={key:1,class:"arrowup"},N={key:0,class:"ruleTypeDiv"},U=["onClick"],H=["onUpdate:modelValue"],_=s((function(){return Object(i["g"])("p",{style:{margin:"0","margin-right":"3%","margin-left":"3%",display:"inline-block",color:"darkred"}},"-",-1)})),M=["onUpdate:modelValue"],q=Object(i["h"])(" möglichst nach vorne   "),E={key:0,class:"arrowdown"},A={key:1,class:"arrowup"},B={key:0,class:"ruleTypeDiv"},G={class:"firstRowRulesWrap"},L=["onClick"],X=s((function(){return Object(i["g"])("div",{class:"tafelDivOuter"},[Object(i["g"])("div",{class:"tafelDivInner"},[Object(i["g"])("p",null,"TAFEL")])],-1)})),J={class:"sitzplatzdiv"},Y={class:"t1"},K=["onClick","textContent"];function Q(e,t,n,l,s,Q){return Object(i["m"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("div",c,[Object(i["g"])("div",r,[Object(i["x"])(Object(i["g"])("input",{type:"range",name:"gridHeight","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.gridHeight=t}),min:"5",max:e.maxGridHeight,class:"inpSlider verticalSlider"},null,8,u),[[i["u"],e.gridHeight]]),a,Object(i["g"])("div",o,[Object(i["g"])("span",b,Object(i["s"])(e.gridWidth)+" * "+Object(i["s"])(e.gridHeight),1)]),Object(i["x"])(Object(i["g"])("input",{type:"range",name:"gridWidth","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.gridWidth=t}),min:"5",max:e.maxGridWidth,class:"inpSlider horizontalSlider"},null,8,d),[[i["u"],e.gridWidth]])]),Object(i["g"])("div",O,[Object(i["g"])("button",{class:"btn",onClick:t[2]||(t[2]=function(t){return e.studentFieldVisible=e.closeEverythingExcept(e.studentFieldVisible)})},[j,e.studentFieldVisible?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("i",f)),e.studentFieldVisible?(Object(i["m"])(),Object(i["f"])("i",p)):Object(i["e"])("",!0)]),Object(i["i"])(i["b"],{name:"openTransition"},{default:Object(i["w"])((function(){return[e.studentFieldVisible?(Object(i["m"])(),Object(i["f"])("div",g,[e.studentFieldVisible?Object(i["x"])((Object(i["m"])(),Object(i["f"])("textarea",{key:0,class:"studentField","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.studentFieldValue=t}),placeholder:"Name 1\nName 2\n..."}," ",512)),[[i["u"],e.studentFieldValue]]):Object(i["e"])("",!0),h,m])):Object(i["e"])("",!0)]})),_:1})]),Object(i["g"])("div",v,[Object(i["g"])("button",{class:"btn",onClick:t[4]||(t[4]=function(t){e.ruleVisible=e.closeEverythingExcept(e.ruleVisible),e.avoidRulesVisible=!0})},[R,e.ruleVisible?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("i",y)),e.ruleVisible?(Object(i["m"])(),Object(i["f"])("i",k)):Object(i["e"])("",!0)]),Object(i["i"])(i["b"],{name:"openTransition"},{default:Object(i["w"])((function(){return[e.ruleVisible?(Object(i["m"])(),Object(i["f"])("div",w,[Object(i["g"])("button",{class:"btn subBtn",onClick:t[5]||(t[5]=function(t){return e.avoidRulesVisible=!e.avoidRulesVisible})},[V,e.avoidRulesVisible?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("i",x)),e.avoidRulesVisible?(Object(i["m"])(),Object(i["f"])("i",S)):Object(i["e"])("",!0)]),Object(i["i"])(i["b"],{name:"openTransition"},{default:Object(i["w"])((function(){return[e.avoidRulesVisible?(Object(i["m"])(),Object(i["f"])("div",z,[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.avoidRules.length,(function(t,n){return Object(i["m"])(),Object(i["f"])("div",{class:"singleRuleDiv",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.avoidRules)}},"X",8,C),Object(i["x"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.avoidRules[parseInt(n)].student1=t},class:"ruleSelect"},[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.getNames(),(function(e){return Object(i["m"])(),Object(i["f"])("option",{key:e},Object(i["s"])(e),1)})),128))],8,F),[[i["t"],e.avoidRules[parseInt(n)].student1]]),I,Object(i["x"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.avoidRules[parseInt(n)].student2=t},class:"ruleSelect"},[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.getNames(),(function(e){return Object(i["m"])(),Object(i["f"])("option",{key:e},Object(i["s"])(e),1)})),128))],8,D),[[i["t"],e.avoidRules[parseInt(n)].student2]])])})),128)),Object(i["g"])("button",{class:"btn ruleBtn",onClick:t[6]||(t[6]=function(t){return e.addRule(e.avoidRules)})},"Neue Regel")])):Object(i["e"])("",!0)]})),_:1}),Object(i["g"])("button",{class:"btn subBtn",onClick:t[7]||(t[7]=function(t){return e.nearbyRulesVisible=!e.nearbyRulesVisible})},[W,e.nearbyRulesVisible?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("i",T)),e.nearbyRulesVisible?(Object(i["m"])(),Object(i["f"])("i",P)):Object(i["e"])("",!0)]),Object(i["i"])(i["b"],{name:"openTransition"},{default:Object(i["w"])((function(){return[e.nearbyRulesVisible?(Object(i["m"])(),Object(i["f"])("div",N,[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.nearbyRules.length,(function(t,n){return Object(i["m"])(),Object(i["f"])("div",{class:"singleRuleDiv",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.nearbyRules)}},"X",8,U),Object(i["x"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.nearbyRules[parseInt(n)].student1=t},class:"ruleSelect"},[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.getNames(),(function(e){return Object(i["m"])(),Object(i["f"])("option",{key:e},Object(i["s"])(e),1)})),128))],8,H),[[i["t"],e.nearbyRules[parseInt(n)].student1]]),_,Object(i["x"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.nearbyRules[parseInt(n)].student2=t},class:"ruleSelect"},[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.getNames(),(function(e){return Object(i["m"])(),Object(i["f"])("option",{key:e},Object(i["s"])(e),1)})),128))],8,M),[[i["t"],e.nearbyRules[parseInt(n)].student2]])])})),128)),Object(i["g"])("button",{class:"btn ruleBtn",onClick:t[8]||(t[8]=function(t){return e.addRule(e.nearbyRules)})},"Neue Regel")])):Object(i["e"])("",!0)]})),_:1}),Object(i["g"])("button",{class:"btn subBtn",onClick:t[9]||(t[9]=function(t){return e.firstRowRulesVisible=!e.firstRowRulesVisible})},[q,e.firstRowRulesVisible?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("i",E)),e.firstRowRulesVisible?(Object(i["m"])(),Object(i["f"])("i",A)):Object(i["e"])("",!0)]),Object(i["i"])(i["b"],{name:"openTransition"},{default:Object(i["w"])((function(){return[e.firstRowRulesVisible?(Object(i["m"])(),Object(i["f"])("div",B,[Object(i["g"])("div",G,[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.firstRowRules.length,(function(t,n){return Object(i["m"])(),Object(i["f"])("div",{class:"singleRuleDiv firstRowRule",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.firstRowRules)}},"X",8,L),Object(i["h"])(" "+Object(i["s"])(e.firstRowRules[n]),1)])})),128))]),Object(i["g"])("select",{class:"ruleSelect",style:{width:"90%"},onChange:t[10]||(t[10]=function(t){e.addFirstRow(t.target.value),t.target.value=null})},[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(e.getNames(),(function(e){return Object(i["m"])(),Object(i["f"])("option",{key:e},Object(i["s"])(e),1)})),128))],32)])):Object(i["e"])("",!0)]})),_:1})])):Object(i["e"])("",!0)]})),_:1})]),Object(i["g"])("button",{name:"compute",onClick:t[11]||(t[11]=function(){return e.computePlan&&e.computePlan.apply(e,arguments)}),class:"btn submit"},"Plan erstellen")]),X,Object(i["g"])("div",J,[Object(i["g"])("table",Y,[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(parseInt(e.gridHeight),(function(t,n){return Object(i["m"])(),Object(i["f"])("tr",{key:n},[(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(parseInt(e.gridWidth),(function(t,l){return Object(i["m"])(),Object(i["f"])("td",{key:l,class:"t1",style:Object(i["l"])({height:90/parseInt(e.gridHeight)+"vh",border:e.isMarked(l,n)?"none":"lightgrey 2px solid"})},[(Object(i["m"])(),Object(i["f"])("button",{key:e.sitzplaetze,class:"fieldBtn",onClick:function(t){return e.onFieldClick(l,n)},style:Object(i["l"])({background:e.isMarked(l,n)?"lightblue":"white",border:e.isMarked(l,n)?"black 2px solid":"none","border-left":e.isMarked(l,n)?e.isMarked(l-1,n)?"none":"black 2px solid":"none","border-top":e.isMarked(l,n)?e.isMarked(l,n-1)?"none":"black 2px solid":"none"}),textContent:Object(i["s"])(e.sitzplaetze[l.toString()+","+n.toString()].name)},null,12,K))],4)})),128))])})),128))])])],64)}n("caad"),n("2532"),n("a434"),n("159b"),n("b64b"),n("4de4"),n("ac1f"),n("1276");var Z=n("bee2"),$=n("d4ec"),ee=Object(Z["a"])((function e(t,n,i){Object($["a"])(this,e),this.neighbours=-1,this.x=t,this.y=n,this.marked=i,this.name=""})),te=Object(Z["a"])((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object($["a"])(this,e),this.student1=t,this.student2=n})),ne=Object(i["j"])({name:"Sitzplatzplaner",props:{},data:function(){var e=15,t=15;return{maxGridWidth:e,maxGridHeight:t,gridWidth:5,gridHeight:5,sideWidth:25,studentFieldVisible:!0,ruleVisible:!1,avoidRulesVisible:!0,nearbyRulesVisible:!1,firstRowRulesVisible:!1,studentFieldValue:"",nearbyRules:[],avoidRules:[],firstRowRules:[],sitzplaetze2:this.instantiateList(e,t),sitzplaetze:this.instantiateDict(e,t)}},watch:{avoidRules:{handler:function(){for(var e=0;e<this.avoidRules.length;e++)this.avoidRules[e].student1==this.avoidRules[e].student2&&""!=this.avoidRules[e].student1&&(this.avoidRules[e].student2="")},deep:!0},studentFieldValue:function(){for(var e=this.getNames(),t=this.firstRowRules.length-1;t>=0;t--)e.includes(this.firstRowRules[t])||this.firstRowRules.splice(t,1);[this.avoidRules,this.nearbyRules].forEach((function(t){for(var n=t.length-1;n>=0;n--)e.includes(t[n].student1)&&e.includes(t[n].student2)||t.splice(n,1)}))}},methods:{onFieldClick:function(e,t){var n=this.sitzplaetze[e.toString()+","+t.toString()];n.marked=!n.marked},addRule:function(e){e.push(new te)},deleteRuleAt:function(e,t){t.splice(e,1)},deleteUncompleteavoidRules:function(){[this.avoidRules,this.nearbyRules].forEach((function(e){for(var t=e.length-1;t>=0;t--)""!=e[t].student1&&""!=e[t].student2||e.splice(t,1)}))},closeEverythingExcept:function(e){return this.ruleVisible=!1,this.studentFieldVisible=!1,!e},addFirstRow:function(e){this.firstRowRules.includes(e)||this.firstRowRules.push(e)},computePlan:function(){console.log("cmpPLan"),console.log(this.avoidRules),this.deleteUncompleteavoidRules(),this.resetNamesOnPlan()},resetNamesOnPlan:function(){for(var e=0;e<this.maxGridWidth;e++)for(var t=0;t<this.maxGridHeight;t++){var n=this.sitzplaetze[e.toString()+","+t.toString()];n.name=""}},isMarked:function(e,t){return!!Object.keys(this.sitzplaetze).includes(e.toString()+","+t.toString())&&this.sitzplaetze[e.toString()+","+t.toString()].marked},instantiateList:function(e,t){for(var n=[],i=0;i<e;i++)for(var l=0;l<t;l++)n.push(new ee(i,l,!1));return n},instantiateDict:function(e,t){for(var n={},i=0;i<e;i++)for(var l=0;l<t;l++)n[i.toString()+","+l.toString()]=new ee(i,l,!1);return n},getUsedFieldsToComputePlan:function(){for(var e=[],t=0;t<this.gridWidth;t++)for(var n=0;n<this.gridHeight;n++){var i=this.sitzplaetze[t.toString()+","+n.toString()];i.marked&&e.push(i)}return e},getNames:function(){return this.studentFieldValue.split("\n").filter((function(e){return null!==e&&""!==e}))}}}),ie=(n("eb8a"),n("6b0d")),le=n.n(ie);const se=le()(ne,[["render",Q],["__scopeId","data-v-2515b5bb"]]);var ce=se,re=Object(i["j"])({name:"App",components:{HelloWorld:ce}});n("d38a");const ue=le()(re,[["render",l]]);var ae=ue,oe=n("5502"),be=Object(oe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(i["c"])(ae).use(be).mount("#app")},d38a:function(e,t,n){"use strict";n("5edf")},eb8a:function(e,t,n){"use strict";n("7cc3")}});
//# sourceMappingURL=app.2aee3b54.js.map