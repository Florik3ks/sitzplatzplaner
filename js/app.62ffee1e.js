(function(e){function t(t){for(var i,c,l=t[0],a=t[1],o=t[2],b=0,d=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var a=n[l];0!==s[a]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},s={app:0},r=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/sitzplatzplaner/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0189":function(e,t,n){e.exports=n.p+"img/preset2.b5b62594.png"},"18e6":function(e,t,n){"use strict";n("a599")},"3c18":function(e,t,n){},4186:function(e,t,n){e.exports=n.p+"img/preset0.1859f07a.png"},7110:function(e,t,n){"use strict";n("3c18")},"8ae3":function(e,t,n){var i={"./preset0.png":"4186","./preset1.png":"9ecb","./preset2.png":"0189","./preset3.png":"d6ab"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id="8ae3"},"9ecb":function(e,t,n){e.exports=n.p+"img/preset1.52d76fe1.png"},a599:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function s(e,t,n,s,r,c){var l=Object(i["s"])("Planer");return Object(i["n"])(),Object(i["d"])(l)}n("b0c0"),n("d3b7"),n("25f0");var r=function(e){return Object(i["p"])("data-v-0d7b31aa"),e=e(),Object(i["o"])(),e},c={key:0,class:"presetDiv"},l={class:"presetContent"},a=["onClick"],o=["src"],u={class:"sideDiv"},b={class:"sliderDiv"},d={class:"sliderInformationDiv"},f={style:{"line-height":"25px","padding-top":"31px"}},h=r((function(){return Object(i["g"])("br",null,null,-1)})),p={class:"verticalSliderDiv"},O=["max"],j=["max"],g={class:"studentFieldWrap"},v=Object(i["i"])(" Namen der Schüler   "),y={key:0,class:"arrowdown"},m={key:1,class:"arrowup"},k={key:0,class:"studentFieldDiv"},R=r((function(){return Object(i["g"])("button",{class:"fileInputThingy"},[Object(i["g"])("label",{for:"fileInputThingy",style:{width:"100%",height:"100%",display:"block",cursor:"pointer"}},[Object(i["g"])("span",{style:{"line-height":"31px"}}," Datei auswählen ")])],-1)})),x={class:"ruleWrap"},w=Object(i["i"])(" Sitzregeln   "),C={key:0,class:"arrowdown"},V={key:1,class:"arrowup"},S={key:0,class:"ruleDiv"},M=Object(i["i"])(" Dürfen nicht nebeneinander   "),F={key:0,class:"arrowdown"},z={key:1,class:"arrowup"},B={key:0,class:"ruleTypeDiv"},D=["onClick"],I=["onUpdate:modelValue"],N=r((function(){return Object(i["g"])("p",{style:{margin:"0","margin-right":"3%","margin-left":"3%",display:"inline-block",color:"darkred"}},"-",-1)})),P=["onUpdate:modelValue"],E=Object(i["i"])(" Sollen möglichst nebeneinander   "),W={key:0,class:"arrowdown"},T={key:1,class:"arrowup"},_={key:0,class:"ruleTypeDiv"},A=["onClick"],U=["onUpdate:modelValue"],H=r((function(){return Object(i["g"])("p",{style:{margin:"0","margin-right":"3%","margin-left":"3%",display:"inline-block",color:"darkgreen"}},"-",-1)})),G=["onUpdate:modelValue"],L=Object(i["i"])(" Möglichst nach vorne   "),J={key:0,class:"arrowdown"},X={key:1,class:"arrowup"},K={key:0,class:"ruleTypeDiv"},q={class:"firstRowRulesWrap"},Q=["onClick"],Y=r((function(){return Object(i["g"])("option",{value:"0",selected:"",hidden:""},"Schüler auswählen",-1)})),Z=Object(i["i"])(" Nicht nach hinten   "),$={key:0,class:"arrowdown"},ee={key:1,class:"arrowup"},te={key:0,class:"ruleTypeDiv"},ne={class:"firstRowRulesWrap"},ie=["onClick"],se=r((function(){return Object(i["g"])("option",{value:"0",selected:"",hidden:""},"Schüler auswählen",-1)})),re=Object(i["h"])('<span class="credits creditsWrap" data-v-0d7b31aa>\nEntwickelt von: \n <a class="credits creditsA" href="https://github.com/Florik3ks" target="_blank" data-v-0d7b31aa>Florian E.</a> &amp; <a class="credits creditsA" href="https://github.com/1td" target="_blank" data-v-0d7b31aa> Joshua J.</a> \nmit Hilfe von <a class="credits creditsA" href="https://github.com/PlisJan" target="_blank" data-v-0d7b31aa>Jan P.</a> \n \n<a class="credits creditsA" href="https://www.gymnasium-oberstadt.de/" target="_blank" data-v-0d7b31aa>GMO</a> 13 Informatik-LK (2022)\nunter der Leitung von Herrn Meß </span>',1),ce=r((function(){return Object(i["g"])("div",{class:"tafelDivOuter"},[Object(i["g"])("div",{class:"tafelDivInner"},"TAFEL")],-1)})),le={class:"sitzplatzdiv"},ae=r((function(){return Object(i["g"])("option",{value:"0",selected:"",hidden:""},"Schüler auswählen",-1)})),oe=r((function(){return Object(i["g"])("option",null,null,-1)})),ue=["onMousedown","onMouseenter","onContextmenu","textContent"];function be(e,t,s,r,be,de){return Object(i["n"])(),Object(i["f"])(i["a"],null,[e.presetPageOpen?(Object(i["n"])(),Object(i["f"])("div",c,[Object(i["g"])("div",l,[Object(i["g"])("button",{class:"closePresetContent",onClick:t[0]||(t[0]=function(t){return e.presetPageOpen=!1})},"X"),(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(parseInt(e.presetCount),(function(t,s){return Object(i["n"])(),Object(i["f"])("button",{key:s,class:"presetBtn",onClick:function(t){return e.setPreset(s)}},[Object(i["g"])("img",{src:n("8ae3")("./preset".concat(s,".png")),class:"presetImg"},null,8,o)],8,a)})),128))])])):Object(i["e"])("",!0),Object(i["g"])("div",{onMousedown:t[22]||(t[22]=function(t){return e.isMouseDown=!0}),onMouseup:t[23]||(t[23]=function(t){return e.isMouseDown=!1})},[Object(i["g"])("div",u,[Object(i["g"])("div",b,[Object(i["g"])("div",d,[Object(i["g"])("span",f,[Object(i["i"])(Object(i["t"])(e.gridWidth)+" * "+Object(i["t"])(e.gridHeight),1),h,Object(i["i"])(Object(i["t"])(e.getNumberOfFields())+" Sitzplätze",1)])]),Object(i["g"])("div",p,[Object(i["y"])(Object(i["g"])("input",{type:"range",name:"gridHeight","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.gridHeight=t}),min:"5",max:e.maxGridHeight,class:"inpSlider verticalSlider"},null,8,O),[[i["v"],e.gridHeight]])]),Object(i["y"])(Object(i["g"])("input",{type:"range",name:"gridWidth","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.gridWidth=t}),min:"5",max:e.maxGridWidth,class:"inpSlider horizontalSlider"},null,8,j),[[i["v"],e.gridWidth]])]),Object(i["g"])("div",null,[Object(i["g"])("button",{onClick:t[3]||(t[3]=function(t){return e.presetPageOpen=!0}),class:"openPresetBtn"},"Raumvorlagen öffnen")]),Object(i["g"])("div",g,[Object(i["g"])("button",{class:"btn",onClick:t[4]||(t[4]=function(t){return e.studentFieldVisible=e.closeEverythingExcept(e.studentFieldVisible)})},[v,e.studentFieldVisible?Object(i["e"])("",!0):(Object(i["n"])(),Object(i["f"])("i",y)),e.studentFieldVisible?(Object(i["n"])(),Object(i["f"])("i",m)):Object(i["e"])("",!0)]),Object(i["j"])(i["b"],{name:"openTransition"},{default:Object(i["x"])((function(){return[e.studentFieldVisible?(Object(i["n"])(),Object(i["f"])("div",k,[e.studentFieldVisible?Object(i["y"])((Object(i["n"])(),Object(i["f"])("textarea",{key:0,class:"studentField","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.studentFieldValue=t}),placeholder:"Name 1\nName 2\n..."}," ",512)),[[i["v"],e.studentFieldValue]]):Object(i["e"])("",!0),Object(i["g"])("input",{type:"file",accept:"text/csv,application/csv",id:"fileInputThingy",onChange:t[6]||(t[6]=function(t){return e.loadStudentFile(t)})},null,32),R])):Object(i["e"])("",!0)]})),_:1})]),Object(i["g"])("div",x,[Object(i["g"])("button",{class:"btn",onClick:t[7]||(t[7]=function(t){return e.ruleVisible=e.closeEverythingExcept(e.ruleVisible)})},[w,e.ruleVisible?Object(i["e"])("",!0):(Object(i["n"])(),Object(i["f"])("i",C)),e.ruleVisible?(Object(i["n"])(),Object(i["f"])("i",V)):Object(i["e"])("",!0)]),Object(i["j"])(i["b"],{name:"openTransition"},{default:Object(i["x"])((function(){return[e.ruleVisible?(Object(i["n"])(),Object(i["f"])("div",S,[Object(i["g"])("button",{class:"btn subBtn",onClick:t[8]||(t[8]=function(t){return e.avoidRulesVisible=!e.avoidRulesVisible})},[M,e.avoidRulesVisible?Object(i["e"])("",!0):(Object(i["n"])(),Object(i["f"])("i",F)),e.avoidRulesVisible?(Object(i["n"])(),Object(i["f"])("i",z)):Object(i["e"])("",!0)]),Object(i["j"])(i["b"],{name:"openTransition"},{default:Object(i["x"])((function(){return[e.avoidRulesVisible?(Object(i["n"])(),Object(i["f"])("div",B,[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.avoidRules.length,(function(t,n){return Object(i["n"])(),Object(i["f"])("div",{class:"singleRuleDiv",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.avoidRules)}},"X",8,D),Object(i["y"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.avoidRules[parseInt(n)].student1=t},class:"ruleSelect"},[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],8,I),[[i["u"],e.avoidRules[parseInt(n)].student1]]),N,Object(i["y"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.avoidRules[parseInt(n)].student2=t},class:"ruleSelect"},[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],8,P),[[i["u"],e.avoidRules[parseInt(n)].student2]])])})),128)),Object(i["g"])("button",{class:"btn ruleBtn",onClick:t[9]||(t[9]=function(t){return e.addRule(e.avoidRules)})},"Neue Regel")])):Object(i["e"])("",!0)]})),_:1}),Object(i["g"])("button",{class:"btn subBtn",onClick:t[10]||(t[10]=function(t){return e.nearbyRulesVisible=!e.nearbyRulesVisible})},[E,e.nearbyRulesVisible?Object(i["e"])("",!0):(Object(i["n"])(),Object(i["f"])("i",W)),e.nearbyRulesVisible?(Object(i["n"])(),Object(i["f"])("i",T)):Object(i["e"])("",!0)]),Object(i["j"])(i["b"],{name:"openTransition"},{default:Object(i["x"])((function(){return[e.nearbyRulesVisible?(Object(i["n"])(),Object(i["f"])("div",_,[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.nearbyRules.length,(function(t,n){return Object(i["n"])(),Object(i["f"])("div",{class:"singleRuleDiv",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.nearbyRules)}},"X",8,A),Object(i["y"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.nearbyRules[parseInt(n)].student1=t},class:"ruleSelect"},[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],8,U),[[i["u"],e.nearbyRules[parseInt(n)].student1]]),H,Object(i["y"])(Object(i["g"])("select",{"onUpdate:modelValue":function(t){return e.nearbyRules[parseInt(n)].student2=t},class:"ruleSelect"},[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],8,G),[[i["u"],e.nearbyRules[parseInt(n)].student2]])])})),128)),Object(i["g"])("button",{class:"btn ruleBtn",onClick:t[11]||(t[11]=function(t){return e.addRule(e.nearbyRules)})},"Neue Regel")])):Object(i["e"])("",!0)]})),_:1}),Object(i["g"])("button",{class:"btn subBtn",onClick:t[12]||(t[12]=function(t){return e.firstRowRulesVisible=!e.firstRowRulesVisible})},[L,e.firstRowRulesVisible?Object(i["e"])("",!0):(Object(i["n"])(),Object(i["f"])("i",J)),e.firstRowRulesVisible?(Object(i["n"])(),Object(i["f"])("i",X)):Object(i["e"])("",!0)]),Object(i["j"])(i["b"],{name:"openTransition"},{default:Object(i["x"])((function(){return[e.firstRowRulesVisible?(Object(i["n"])(),Object(i["f"])("div",K,[Object(i["g"])("div",q,[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.firstRowRules.length,(function(t,n){return Object(i["n"])(),Object(i["f"])("div",{class:"singleRuleDiv firstRowRule",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.firstRowRules)}},"X",8,Q),Object(i["i"])(" "+Object(i["t"])(e.firstRowRules[n]),1)])})),128))]),Object(i["g"])("select",{class:"ruleSelect",style:{width:"100%",height:"100%","margin-bottom":"2%","padding-bottom":"2%","text-align":"center"},onChange:t[13]||(t[13]=function(t){e.addFirstRow(t.target.value),t.target.value=0})},[Y,(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],32)])):Object(i["e"])("",!0)]})),_:1}),Object(i["g"])("button",{class:"btn subBtn",onClick:t[14]||(t[14]=function(t){return e.notBackRulesVisible=!e.notBackRulesVisible})},[Z,e.notBackRulesVisible?Object(i["e"])("",!0):(Object(i["n"])(),Object(i["f"])("i",$)),e.notBackRulesVisible?(Object(i["n"])(),Object(i["f"])("i",ee)):Object(i["e"])("",!0)]),Object(i["j"])(i["b"],{name:"openTransition"},{default:Object(i["x"])((function(){return[e.notBackRulesVisible?(Object(i["n"])(),Object(i["f"])("div",te,[Object(i["g"])("div",ne,[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.notBackRules.length,(function(t,n){return Object(i["n"])(),Object(i["f"])("div",{class:"singleRuleDiv firstRowRule",key:n},[Object(i["g"])("button",{class:"deleteRule",onClick:function(t){return e.deleteRuleAt(parseInt(n),e.notBackRules)}},"X",8,ie),Object(i["i"])(" "+Object(i["t"])(e.notBackRules[n]),1)])})),128))]),Object(i["g"])("select",{class:"ruleSelect",style:{width:"100%",height:"100%","margin-bottom":"2%","padding-bottom":"2%","text-align":"center"},onChange:t[15]||(t[15]=function(t){e.addNotBackRow(t.target.value),t.target.value=0})},[se,(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],32)])):Object(i["e"])("",!0)]})),_:1})])):Object(i["e"])("",!0)]})),_:1})]),Object(i["g"])("button",{name:"compute",onClick:t[16]||(t[16]=function(){return e.computePlan&&e.computePlan.apply(e,arguments)}),class:"btn submit"},"Plan erstellen"),Object(i["g"])("button",{name:"compute",onClick:t[17]||(t[17]=function(t){return e.resetNamesOnPlan()}),class:"btn submit"},"Namen zurücksetzen"),re]),ce,Object(i["g"])("div",le,[e.fieldBtnContextMenuOpen?(Object(i["n"])(),Object(i["f"])("div",{key:0,class:"fieldBtnContextMenuDiv",onBlur:t[20]||(t[20]=function(t){return e.fieldBtnContextMenuOpen=!1}),style:Object(i["m"])({top:e.contextMenuTop,left:e.contextMenuLeft})},[Object(i["g"])("select",{class:"fieldBtnContextSelect",onChange:t[18]||(t[18]=function(t){e.changeFieldBtnText(t.target.value),e.fieldBtnContextMenuOpen=!1})},[ae,oe,(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(e.getNames(),(function(e){return Object(i["n"])(),Object(i["f"])("option",{key:e},Object(i["t"])(e),1)})),128))],32),Object(i["g"])("button",{class:"closeContextSelect",onClick:t[19]||(t[19]=function(t){return e.fieldBtnContextMenuOpen=!1})},"X")],36)):Object(i["e"])("",!0),Object(i["g"])("table",null,[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(parseInt(e.gridHeight),(function(n,s){return Object(i["n"])(),Object(i["f"])("tr",{key:s},[(Object(i["n"])(!0),Object(i["f"])(i["a"],null,Object(i["r"])(parseInt(e.gridWidth),(function(n,r){return Object(i["n"])(),Object(i["f"])("td",{key:r,class:"t1",onContextmenu:t[21]||(t[21]=Object(i["z"])((function(){}),["prevent"])),style:Object(i["m"])({height:85/parseInt(e.gridHeight)+"vh",border:e.isMarked(r,s)?"black 1px solid":"lightgrey 1px solid","border-bottom":e.isMarked(r,s+1)?"black 1px solid":"lightgrey 1px solid","border-right":e.isMarked(r+1,s)?"black 1px solid":"lightgrey 1px solid","border-top":e.isMarked(r,s)?"black 1px solid":"lightgrey 1px solid","border-left":e.isMarked(r,s)?"black 1px solid":"lightgrey 1px solid"})},[(Object(i["n"])(),Object(i["f"])("button",{key:e.sitzplaetze,class:"fieldBtn",onMousedown:Object(i["z"])((function(t){return e.onFieldClick(r,s)}),["left"]),onMouseenter:function(t){return e.onFieldClickWhenMouseIsDown(r,s)},onContextmenu:Object(i["z"])((function(t){return e.onFieldContextMenu(t,r,s)}),["prevent"]),style:Object(i["m"])({"font-size":"medium","background-color":e.isMarked(r,s)?"lightblue":"white",border:e.isMarked(r,s)?"black 2px solid":"none","border-left":e.isMarked(r,s)?e.isMarked(r-1,s)?"none":"black 1px solid":"none","border-top":e.isMarked(r,s)?e.isMarked(r,s-1)?"none":"black 1px solid":"none"}),textContent:Object(i["t"])(e.sitzplaetze[r.toString()+","+s.toString()].name)},null,44,ue))],36)})),128))])})),128))])])],32)],64)}var de=n("b85c"),fe=(n("159b"),n("caad"),n("2532"),n("a434"),n("4de4"),n("ac1f"),n("1276"),n("5319"),n("498a"),n("b64b"),n("bee2")),he=n("d4ec"),pe=Object(fe["a"])((function e(t,n,i){Object(he["a"])(this,e),this.neighbours=-1,this.x=t,this.y=n,this.marked=i,this.name=""})),Oe=Object(fe["a"])((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object(he["a"])(this,e),this.student1=t,this.student2=n})),je=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(he["a"])(this,e),this.frontRow=!1,this.notBackOfTheRoom=!1,this.affability=0,this.seated=!1,this.name=t,this.avoid=n,this.sitWith=i,this.seat=new pe(-1,-1,!1)}return Object(fe["a"])(e,[{key:"setSeat",value:function(e){this.seat=e,e.name=this.name,this.seated=!0}},{key:"validate",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.seat.marked)return!1;for(var t=0;t<this.avoid.length;t++){var n=this.avoid[t];if(ge(this.seat.x,this.seat.y,n.seat.x,n.seat.y))return!1}for(var i=0;i<this.sitWith.length;i++){var s=this.sitWith[i];if(!ge(this.seat.x,this.seat.y,s.seat.x,s.seat.y)&&e||-1!=s.seat.y)return!1}return!0}},{key:"calculateAffability",value:function(){this.affability=this.sitWith.length-this.avoid.length}}]),e}();function ge(e,t,n,i){return Math.abs(e-n)<=1&&Math.abs(t-i)<=1}n("99af");function ve(e,t){if(e.length<t.length)alert("Es gibt weniger Plätze als Schüler");else{for(var n=0;n<t.length;n++)e[n].name=t[n].name;var i=[];t.forEach((function(e){(e.frontRow||0!=e.avoid.length||0!=e.sitWith.length)&&i.push(e)}));var s=[];t.forEach((function(e){e.frontRow&&s.push(e)}));var r=[];me(e,r),ye(t)}}function ye(e){e.forEach((function(e){e.calculateAffability()})),Re(e)}function me(e,t){var n=0,i=1e5,s=0;e.forEach((function(e){e.x>n&&(n=e.x),e.y>s&&(s=e.y),e.y<i&&(i=e.y)}));for(var r=[],c=0;c<=n;c++){for(var l=[],a=0;a<=s;a++)l.push(-1);r.push(l)}if(e.forEach((function(e){for(var t=xe(e.x-1,0);t<=we(e.x+1,n);t++)for(var i=xe(e.y-1,0);i<=we(e.y+1,n);i++)r[t][i]++})),e.forEach((function(e){e.neighbours=r[e.x][e.y]})),ke(e),void 0!=t){for(var o=0;o<s-i+1;o++)t.push([]);e.forEach((function(e){t[e.y-i].push(e)}))}}function ke(e){if(e.length>1){var t=e.pop(),n=[],i=[];e.forEach((function(e){e.neighbours<=t.neighbours?n.push(e):i.push(e)})),ke(n),ke(i),n.push(t),e=n.concat(i)}}function Re(e){if(e.length>1){var t=e.pop(),n=[],i=[];e.forEach((function(e){e.affability<=t.affability?n.push(e):i.push(e)})),Re(n),Re(i),n.push(t),e=n.concat(i)}}function xe(e,t){return e>=t?e:t}function we(e,t){return e<=t?e:t}var Ce=Object(i["k"])({name:"Sitzplatzplaner",props:{},data:function(){var e=15,t=15;return{maxGridWidth:e,maxGridHeight:t,gridWidth:5,gridHeight:5,sideWidth:25,studentFieldVisible:!0,ruleVisible:!1,avoidRulesVisible:!0,nearbyRulesVisible:!0,firstRowRulesVisible:!0,notBackRulesVisible:!0,studentFieldValue:"",nearbyRules:[],avoidRules:[],firstRowRules:[],notBackRules:[],isMouseDown:!1,presetCount:3,presetPageOpen:!1,fieldBtnContextMenuOpen:!1,contextMenuTop:"0px",contextMenuLeft:"0px",contextMenuOpenedBy:"",sitzplaetze:this.instantiateDict(e,t)}},watch:{avoidRules:{handler:function(){for(var e=0;e<this.avoidRules.length;e++)this.avoidRules[e].student1==this.avoidRules[e].student2&&""!=this.avoidRules[e].student1&&(this.avoidRules[e].student2="")},deep:!0},nearbyRules:{handler:function(){for(var e=0;e<this.nearbyRules.length;e++)this.nearbyRules[e].student1==this.nearbyRules[e].student2&&""!=this.nearbyRules[e].student1&&(this.nearbyRules[e].student2="")},deep:!0},studentFieldValue:function(){var e=this.getNames();for(var t in[this.firstRowRules,this.notBackRules].forEach((function(t){for(var n=t.length-1;n>=0;n--)e.includes(t[n])||t.splice(n,1)})),[this.avoidRules,this.nearbyRules].forEach((function(t){for(var n=t.length-1;n>=0;n--)e.includes(t[n].student1)&&e.includes(t[n].student2)||t.splice(n,1)})),this.sitzplaetze){var n=this.sitzplaetze[t];e.includes(n.name)||(n.name="")}}},methods:{onFieldClick:function(e,t){var n=this.sitzplaetze[e.toString()+","+t.toString()];n.marked=!n.marked,n.marked||""==n.name||(n.name="")},onFieldClickWhenMouseIsDown:function(e,t){this.isMouseDown&&this.onFieldClick(e,t)},onFieldContextMenu:function(e,t,n){this.contextMenuTop=e.y+"px",this.contextMenuLeft=e.x+"px",this.contextMenuOpenedBy=t.toString()+","+n.toString(),this.fieldBtnContextMenuOpen=!0},changeFieldBtnText:function(e){if(""!=e)for(var t in this.sitzplaetze){var n=this.sitzplaetze[t];n.name==e&&(n.name="")}this.sitzplaetze[this.contextMenuOpenedBy].name=e,this.sitzplaetze[this.contextMenuOpenedBy].marked=!0},setPreset:function(e){switch(this.presetPageOpen=!1,this.sitzplaetze=this.instantiateDict(this.maxGridWidth,this.maxGridHeight),e){case 0:this.gridWidth=9,this.gridHeight=7;for(var t=0;t<7;t+=2)for(var n=0;n<9;n++)4!=n&&this.onFieldClick(n,t);break;case 1:this.gridWidth=7,this.gridHeight=7;for(var i=0;i<7;i+=2)for(var s=0;s<7;s++)3!=s&&this.onFieldClick(s,i);for(var r=1;r<6;r+=2)this.onFieldClick(0,r),this.onFieldClick(6,r);break;case 2:this.gridWidth=5,this.gridHeight=5;break;default:break}},addRule:function(e){e.push(new Oe)},deleteRuleAt:function(e,t){t.splice(e,1)},deleteUncompleteRules:function(){[this.avoidRules,this.nearbyRules].forEach((function(e){for(var t=e.length-1;t>=0;t--)""!=e[t].student1&&""!=e[t].student2||e.splice(t,1)}))},closeEverythingExcept:function(e){return this.ruleVisible=!1,this.studentFieldVisible=!1,!e},addFirstRow:function(e){this.firstRowRules.includes(e)||this.firstRowRules.push(e)},addNotBackRow:function(e){this.notBackRules.includes(e)||this.notBackRules.push(e)},computePlan:function(){console.log("cmpPLan"),this.deleteUncompleteRules(),ve(this.getUsedFieldsToComputePlan(),this.createStudentsFromRules())},findStudentInArrayByName:function(e,t){var n,i=Object(de["a"])(t);try{for(i.s();!(n=i.n()).done;){var s=n.value;if(e==s.name)return s}}catch(r){i.e(r)}finally{i.f()}},createStudentsFromRules:function(){var e=this,t=[];return this.getNames().forEach((function(n){var i=!1;e.firstRowRules.forEach((function(e){e!=n||(i=!0)}));var s=!1;e.notBackRules.forEach((function(e){e!=n||(s=!0)}));var r=new je(n,[],[]);r.frontRow=i,r.notBackOfTheRoom=s,t.push(r)})),this.avoidRules.forEach((function(n){var i=e.findStudentInArrayByName(n.student1,t),s=e.findStudentInArrayByName(n.student2,t);i&&s&&(i.avoid.push(s),s.avoid.push(i))})),this.nearbyRules.forEach((function(n){var i=e.findStudentInArrayByName(n.student1,t),s=e.findStudentInArrayByName(n.student2,t);i&&s&&(i.sitWith.push(s),s.sitWith.push(i))})),t},loadStudentFile:function(e){var t,n=this,i=e.target.files[0],s=new FileReader;i.name.includes(".csv")?(s.onload=function(e){var i;t=null===e||void 0===e||null===(i=e.target)||void 0===i?void 0:i.result,t&&n.loadNamesFromFile(t.toString())},s.readAsText(i,"ISO-8859-1")):alert("Diese Datei ist keine CSV-Datei")},loadNamesFromFile:function(e){var t=e.split("\n").filter((function(e){return null!==e&&""!==e}));this.studentFieldValue="";for(var n=0;n<t.length;n++)if(0==n)t[n].split(";").filter((function(e){return null!==e&&""!==e}))[0];else if(n>1){var i=void 0;i=t[n].split(";")[2].replace(/"/g,"")+" ",i+=t[n].split(";")[1].replace(/"/g,"")+"\n",i.trim().length>0&&(this.studentFieldValue+=i)}},resetNamesOnPlan:function(){for(var e=0;e<this.maxGridWidth;e++)for(var t=0;t<this.maxGridHeight;t++){var n=this.sitzplaetze[e.toString()+","+t.toString()];n.name=""}},isMarked:function(e,t){return!!Object.keys(this.sitzplaetze).includes(e.toString()+","+t.toString())&&this.sitzplaetze[e.toString()+","+t.toString()].marked},instantiateDict:function(e,t){for(var n={},i=0;i<e;i++)for(var s=0;s<t;s++)n[i.toString()+","+s.toString()]=new pe(i,s,!1);return n},getUsedFieldsToComputePlan:function(){for(var e=[],t=0;t<this.gridWidth;t++)for(var n=0;n<this.gridHeight;n++){var i=this.sitzplaetze[t.toString()+","+n.toString()];i.marked&&e.push(i)}return e},getNames:function(){return this.studentFieldValue.split("\n").filter((function(e){return null!==e&&""!==e}))},getNumberOfFields:function(){return this.getUsedFieldsToComputePlan().length},log:function(e){console.log(e)},alert:function(e){this.alert(e)}}}),Ve=(n("7110"),n("6b0d")),Se=n.n(Ve);const Me=Se()(Ce,[["render",be],["__scopeId","data-v-0d7b31aa"]]);var Fe=Me,ze=Object(i["k"])({name:"App",components:{Planer:Fe}});n("18e6");const Be=Se()(ze,[["render",s]]);var De=Be,Ie=n("5502"),Ne=Object(Ie["a"])({state:{},mutations:{},actions:{},modules:{}});Object(i["c"])(De).use(Ne).mount("#app")},d6ab:function(e,t,n){e.exports=n.p+"img/preset3.5a6fd1eb.png"}});
//# sourceMappingURL=app.62ffee1e.js.map