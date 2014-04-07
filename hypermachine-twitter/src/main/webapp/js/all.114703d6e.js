window.Modernizr=function(window,document,undefined){var version="2.6.2",Modernizr={},enableClasses=true,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement("input"),smile=":)",toString={}.toString,prefixes=" -webkit- -moz- -o- -ms- ".split(" "),omPrefixes="Webkit Moz O ms",cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),ns={svg:"http://www.w3.org/2000/svg"},tests={},inputs={},attrs={},classes=[],slice=classes.slice,featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10)){while(nodes--){node=document.createElement("div");node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node)}}style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join("");div.id=mod;(body?div:fakeBody).innerHTML+=style;fakeBody.appendChild(div);if(!body){fakeBody.style.background="";fakeBody.style.overflow="hidden";docOverflow=docElement.style.overflow;docElement.style.overflow="hidden";docElement.appendChild(fakeBody)}ret=callback(div,rule);if(!body){fakeBody.parentNode.removeChild(fakeBody);docElement.style.overflow=docOverflow}else{div.parentNode.removeChild(div)}return!!ret},testMediaQuery=function(mq){var matchMedia=window.matchMedia||window.msMatchMedia;if(matchMedia){return matchMedia(mq).matches}var bool;injectElementWithStyles("@media "+mq+" { #"+mod+" { position: absolute; } }",function(node){bool=(window.getComputedStyle?getComputedStyle(node,null):node.currentStyle)["position"]=="absolute"});return bool},isEventSupported=function(){var TAGNAMES={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};function isEventSupported(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||"div");eventName="on"+eventName;var isSupported=eventName in element;if(!isSupported){if(!element.setAttribute){element=document.createElement("div")}if(element.setAttribute&&element.removeAttribute){element.setAttribute(eventName,"");isSupported=is(element[eventName],"function");if(!is(element[eventName],"undefined")){element[eventName]=undefined}element.removeAttribute(eventName)}}element=null;return isSupported}return isEventSupported}(),_hasOwnProperty={}.hasOwnProperty,hasOwnProp;if(!is(_hasOwnProperty,"undefined")&&!is(_hasOwnProperty.call,"undefined")){hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property)}}else{hasOwnProp=function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function"){throw new TypeError}var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F;var result=target.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result){return result}return self}else{return target.apply(that,args.concat(slice.call(arguments)))}};return bound}}function setCss(str){mStyle.cssText=str}function setCssAll(str1,str2){return setCss(prefixes.join(str1+";")+(str2||""))}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined){return prefixed=="pfx"?prop:true}}return false}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined){if(elem===false)return props[i];if(is(item,"function")){return item.bind(elem||obj)}return item}}return false}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");if(is(prefixed,"string")||is(prefixed,"undefined")){return testProps(props,prefixed)}else{props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" ");return testDOMProps(props,prefixed,elem)}}tests["flexbox"]=function(){return testPropsAll("flexWrap")};tests["flexboxlegacy"]=function(){return testPropsAll("boxDirection")};tests["canvas"]=function(){var elem=document.createElement("canvas");return!!(elem.getContext&&elem.getContext("2d"))};tests["canvastext"]=function(){return!!(Modernizr["canvas"]&&is(document.createElement("canvas").getContext("2d").fillText,"function"))};tests["webgl"]=function(){return!!window.WebGLRenderingContext};tests["touch"]=function(){var bool;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch){bool=true}else{injectElementWithStyles(["@media (",prefixes.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){bool=node.offsetTop===9})}return bool};tests["geolocation"]=function(){return"geolocation"in navigator};tests["postmessage"]=function(){return!!window.postMessage};tests["websqldatabase"]=function(){return!!window.openDatabase};tests["indexedDB"]=function(){return!!testPropsAll("indexedDB",window)};tests["hashchange"]=function(){return isEventSupported("hashchange",window)&&(document.documentMode===undefined||document.documentMode>7)};tests["history"]=function(){return!!(window.history&&history.pushState)};tests["draganddrop"]=function(){var div=document.createElement("div");return"draggable"in div||"ondragstart"in div&&"ondrop"in div};tests["websockets"]=function(){return"WebSocket"in window||"MozWebSocket"in window};tests["rgba"]=function(){setCss("background-color:rgba(150,255,150,.5)");return contains(mStyle.backgroundColor,"rgba")};tests["hsla"]=function(){setCss("background-color:hsla(120,40%,100%,.5)");return contains(mStyle.backgroundColor,"rgba")||contains(mStyle.backgroundColor,"hsla")};tests["multiplebgs"]=function(){setCss("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(mStyle.background)};tests["backgroundsize"]=function(){return testPropsAll("backgroundSize")};tests["borderimage"]=function(){return testPropsAll("borderImage")};tests["borderradius"]=function(){return testPropsAll("borderRadius")};tests["boxshadow"]=function(){return testPropsAll("boxShadow")};tests["textshadow"]=function(){return document.createElement("div").style.textShadow===""};tests["opacity"]=function(){setCssAll("opacity:.55");return/^0.55$/.test(mStyle.opacity)};tests["cssanimations"]=function(){return testPropsAll("animationName")};tests["csscolumns"]=function(){return testPropsAll("columnCount")};tests["cssgradients"]=function(){var str1="background-image:",str2="gradient(linear,left top,right bottom,from(#9f9),to(white));",str3="linear-gradient(left top,#9f9, white);";setCss((str1+"-webkit- ".split(" ").join(str2+str1)+prefixes.join(str3+str1)).slice(0,-str1.length));return contains(mStyle.backgroundImage,"gradient")};tests["cssreflections"]=function(){return testPropsAll("boxReflect")};tests["csstransforms"]=function(){return!!testPropsAll("transform")};tests["csstransforms3d"]=function(){var ret=!!testPropsAll("perspective");if(ret&&"webkitPerspective"in docElement.style){injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(node,rule){ret=node.offsetLeft===9&&node.offsetHeight===3})}return ret};tests["csstransitions"]=function(){return testPropsAll("transition")};tests["fontface"]=function(){var bool;injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById("smodernizr"),sheet=style.sheet||style.styleSheet,cssText=sheet?sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||"":"";bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(" ")[0])===0});return bool};tests["generatedcontent"]=function(){var bool;injectElementWithStyles(["#",mod,"{font:0/0 a}#",mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(""),function(node){bool=node.offsetHeight>=3});return bool};tests["video"]=function(){var elem=document.createElement("video"),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(e){}return bool};tests["audio"]=function(){var elem=document.createElement("audio"),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");bool.mp3=elem.canPlayType("audio/mpeg;").replace(/^no$/,"");bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");bool.m4a=(elem.canPlayType("audio/x-m4a;")||elem.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return bool};tests["localstorage"]=function(){try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return true}catch(e){return false}};tests["sessionstorage"]=function(){try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return true}catch(e){return false}};tests["webworkers"]=function(){return!!window.Worker};tests["applicationcache"]=function(){return!!window.applicationCache};tests["svg"]=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,"svg").createSVGRect};tests["inlinesvg"]=function(){var div=document.createElement("div");div.innerHTML="<svg/>";return(div.firstChild&&div.firstChild.namespaceURI)==ns.svg};tests["smil"]=function(){return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns.svg,"animate")))};tests["svgclippaths"]=function(){return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns.svg,"clipPath")))};function webforms(){Modernizr["input"]=function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem)}if(attrs.list){attrs.list=!!(document.createElement("datalist")&&window.HTMLDataListElement)}return attrs}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));Modernizr["inputtypes"]=function(props){for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){inputElem.setAttribute("type",inputElemType=props[i]);bool=inputElem.type!=="text";if(bool){inputElem.value=smile;inputElem.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=="textfield"&&inputElem.offsetHeight!==0;docElement.removeChild(inputElem)}else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){bool=inputElem.checkValidity&&inputElem.checkValidity()===false}else{bool=inputElem.value!=smile}}inputs[props[i]]=!!bool}return inputs}("search tel url email datetime date month week time datetime-local number range color".split(" "))}for(var feature in tests){if(hasOwnProp(tests,feature)){featureName=feature.toLowerCase();Modernizr[featureName]=tests[feature]();classes.push((Modernizr[featureName]?"":"no-")+featureName)}}Modernizr.input||webforms();Modernizr.addTest=function(feature,test){if(typeof feature=="object"){for(var key in feature){if(hasOwnProp(feature,key)){Modernizr.addTest(key,feature[key])}}}else{feature=feature.toLowerCase();if(Modernizr[feature]!==undefined){return Modernizr}test=typeof test=="function"?test():test;if(typeof enableClasses!=="undefined"&&enableClasses){docElement.className+=" "+(test?"":"no-")+feature}Modernizr[feature]=test}return Modernizr};setCss("");modElem=inputElem=null;(function(window,document){var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando="_html5shiv";var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>";supportsHtml5Styles="hidden"in a;supportsUnknownElements=a.childNodes.length==1||function(){document.createElement("a");var frag=document.createDocumentFragment();return typeof frag.cloneNode=="undefined"||typeof frag.createDocumentFragment=="undefined"||typeof frag.createElement=="undefined"}()}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true}})();function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;p.innerHTML="x<style>"+cssText+"</style>";return parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return typeof elements=="string"?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data}return data}function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document}if(supportsUnknownElements){return ownerDocument.createElement(nodeName)}if(!data){data=getExpandoData(ownerDocument)}var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode()}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode()}else{node=data.createElem(nodeName)}return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node}function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document}if(supportsUnknownElements){return ownerDocument.createDocumentFragment()}data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i])}return clone}function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()}ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName)}return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+getElements().join().replace(/\w+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document}var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}"+"mark{background:#FF0;color:#000}")}if(!supportsUnknownElements){shivMethods(ownerDocument,data)}return ownerDocument}var html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:options.shivCSS!==false,supportsUnknownElements:supportsUnknownElements,shivMethods:options.shivMethods!==false,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document)})(this,document);Modernizr._version=version;Modernizr._prefixes=prefixes;Modernizr._domPrefixes=domPrefixes;Modernizr._cssomPrefixes=cssomPrefixes;Modernizr.mq=testMediaQuery;Modernizr.hasEvent=isEventSupported;Modernizr.testProp=function(prop){return testProps([prop])};Modernizr.testAllProps=testPropsAll;Modernizr.testStyles=injectElementWithStyles;Modernizr.prefixed=function(prop,obj,elem){if(!obj){return testPropsAll(prop,"pfx")}else{return testPropsAll(prop,obj,elem)}};docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):"");return Modernizr}(this,this.document);

(function(window,doc,undef){var docElement=doc.documentElement,sTimeout=window.setTimeout,firstScript=doc.getElementsByTagName("script")[0],toString={}.toString,execStack=[],started=0,noop=function(){},isGecko="MozAppearance"in docElement.style,isGeckoLTE18=isGecko&&!!doc.createRange().compareNode,insBeforeObj=isGeckoLTE18?docElement:firstScript.parentNode,isOpera=window.opera&&toString.call(window.opera)=="[object Opera]",isIE=!!doc.attachEvent&&!isOpera,strJsElem=isGecko?"object":isIE?"script":"img",strCssElem=isIE?"script":strJsElem,isArray=Array.isArray||function(obj){return toString.call(obj)=="[object Array]"},isObject=function(obj){return Object(obj)===obj},isString=function(s){return typeof s=="string"},isFunction=function(fn){return toString.call(fn)=="[object Function]"},globalFilters=[],scriptCache={},prefixes={timeout:function(resourceObj,prefix_parts){if(prefix_parts.length){resourceObj["timeout"]=prefix_parts[0]}return resourceObj}},handler,yepnope;function isFileReady(readyState){return!readyState||readyState=="loaded"||readyState=="complete"||readyState=="uninitialized"}function injectJs(src,cb,attrs,timeout,err,internal){var script=doc.createElement("script"),done,i;timeout=timeout||yepnope["errorTimeout"];script.src=src;for(i in attrs){script.setAttribute(i,attrs[i])}cb=internal?executeStack:cb||noop;script.onreadystatechange=script.onload=function(){if(!done&&isFileReady(script.readyState)){done=1;cb();script.onload=script.onreadystatechange=null}};sTimeout(function(){if(!done){done=1;cb(1)}},timeout);err?script.onload():firstScript.parentNode.insertBefore(script,firstScript)}function injectCss(href,cb,attrs,timeout,err,internal){var link=doc.createElement("link"),done,i;timeout=timeout||yepnope["errorTimeout"];cb=internal?executeStack:cb||noop;link.href=href;link.rel="stylesheet";link.type="text/css";for(i in attrs){link.setAttribute(i,attrs[i])}if(!err){firstScript.parentNode.insertBefore(link,firstScript);sTimeout(cb,0)}}function executeStack(){var i=execStack.shift();started=1;if(i){if(i["t"]){sTimeout(function(){(i["t"]=="c"?yepnope["injectCss"]:yepnope["injectJs"])(i["s"],0,i["a"],i["x"],i["e"],1)},0)}else{i();executeStack()}}else{started=0}}function preloadFile(elem,url,type,splicePoint,dontExec,attrObj,timeout){timeout=timeout||yepnope["errorTimeout"];var preloadElem=doc.createElement(elem),done=0,firstFlag=0,stackObject={t:type,s:url,e:dontExec,a:attrObj,x:timeout};if(scriptCache[url]===1){firstFlag=1;scriptCache[url]=[]}function onload(first){if(!done&&isFileReady(preloadElem.readyState)){stackObject["r"]=done=1;!started&&executeStack();preloadElem.onload=preloadElem.onreadystatechange=null;if(first){if(elem!="img"){sTimeout(function(){insBeforeObj.removeChild(preloadElem)},50)}for(var i in scriptCache[url]){if(scriptCache[url].hasOwnProperty(i)){scriptCache[url][i].onload()}}}}}if(elem=="object"){preloadElem.data=url}else{preloadElem.src=url;preloadElem.type=elem}preloadElem.width=preloadElem.height="0";preloadElem.onerror=preloadElem.onload=preloadElem.onreadystatechange=function(){onload.call(this,firstFlag)};execStack.splice(splicePoint,0,stackObject);if(elem!="img"){if(firstFlag||scriptCache[url]===2){insBeforeObj.insertBefore(preloadElem,isGeckoLTE18?null:firstScript);sTimeout(onload,timeout)}else{scriptCache[url].push(preloadElem)}}}function load(resource,type,dontExec,attrObj,timeout){started=0;type=type||"j";if(isString(resource)){preloadFile(type=="c"?strCssElem:strJsElem,resource,type,this["i"]++,dontExec,attrObj,timeout)}else{execStack.splice(this["i"]++,0,resource);execStack.length==1&&executeStack()}return this}function getYepnope(){var y=yepnope;y["loader"]={load:load,i:0};return y}yepnope=function(needs){var i,need,chain=this["yepnope"]["loader"];function satisfyPrefixes(url){var parts=url.split("!"),gLen=globalFilters.length,origUrl=parts.pop(),pLen=parts.length,res={url:origUrl,origUrl:origUrl,prefixes:parts},mFunc,j,prefix_parts;for(j=0;j<pLen;j++){prefix_parts=parts[j].split("=");mFunc=prefixes[prefix_parts.shift()];if(mFunc){res=mFunc(res,prefix_parts)}}for(j=0;j<gLen;j++){res=globalFilters[j](res)}return res}function getExtension(url){return url.split(".").pop().split("?").shift()}function loadScriptOrStyle(input,callback,chain,index,testResult){var resource=satisfyPrefixes(input),autoCallback=resource["autoCallback"],extension=getExtension(resource["url"]);if(resource["bypass"]){return}if(callback){callback=isFunction(callback)?callback:callback[input]||callback[index]||callback[input.split("/").pop().split("?")[0]]}if(resource["instead"]){return resource["instead"](input,callback,chain,index,testResult)}else{if(scriptCache[resource["url"]]){resource["noexec"]=true}else{scriptCache[resource["url"]]=1}chain.load(resource["url"],resource["forceCSS"]||!resource["forceJS"]&&"css"==getExtension(resource["url"])?"c":undef,resource["noexec"],resource["attrs"],resource["timeout"]);if(isFunction(callback)||isFunction(autoCallback)){chain["load"](function(){getYepnope();callback&&callback(resource["origUrl"],testResult,index);autoCallback&&autoCallback(resource["origUrl"],testResult,index);scriptCache[resource["url"]]=2})}}}function loadFromTestObject(testObject,chain){var testResult=!!testObject["test"],group=testResult?testObject["yep"]:testObject["nope"],always=testObject["load"]||testObject["both"],callback=testObject["callback"]||noop,cbRef=callback,complete=testObject["complete"]||noop,needGroupSize,callbackKey;function handleGroup(needGroup,moreToCome){if(!needGroup){!moreToCome&&complete()}else if(isString(needGroup)){if(!moreToCome){callback=function(){var args=[].slice.call(arguments);cbRef.apply(this,args);complete()}}loadScriptOrStyle(needGroup,callback,chain,0,testResult)}else if(isObject(needGroup)){needGroupSize=function(){var count=0,i;for(i in needGroup){if(needGroup.hasOwnProperty(i)){count++}}return count}();for(callbackKey in needGroup){if(needGroup.hasOwnProperty(callbackKey)){if(!moreToCome&&!--needGroupSize){if(!isFunction(callback)){callback[callbackKey]=function(innerCb){return function(){var args=[].slice.call(arguments);innerCb&&innerCb.apply(this,args);complete()}}(cbRef[callbackKey])}else{callback=function(){var args=[].slice.call(arguments);cbRef.apply(this,args);complete()}}}loadScriptOrStyle(needGroup[callbackKey],callback,chain,callbackKey,testResult)}}}}handleGroup(group,!!always);always&&handleGroup(always)}if(isString(needs)){loadScriptOrStyle(needs,0,chain,0)}else if(isArray(needs)){for(i=0;i<needs.length;i++){need=needs[i];if(isString(need)){loadScriptOrStyle(need,0,chain,0)}else if(isArray(need)){yepnope(need)}else if(isObject(need)){loadFromTestObject(need,chain)}}}else if(isObject(needs)){loadFromTestObject(needs,chain)}};yepnope["addPrefix"]=function(prefix,callback){prefixes[prefix]=callback};yepnope["addFilter"]=function(filter){globalFilters.push(filter)};yepnope["errorTimeout"]=1e4;if(doc.readyState==null&&doc.addEventListener){doc.readyState="loading";doc.addEventListener("DOMContentLoaded",handler=function(){doc.removeEventListener("DOMContentLoaded",handler,0);doc.readyState="complete"},0)}window["yepnope"]=getYepnope();window["yepnope"]["executeStack"]=executeStack;window["yepnope"]["injectJs"]=injectJs;window["yepnope"]["injectCss"]=injectCss})(this,document);

(function(window,undefined){var readyList,rootjQuery,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="1.10.2",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery)},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()},completed=function(event){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready()}},detach=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false)}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed)}};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem;if(!selector){return this}if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null]}else{match=rquickExpr.exec(selector)}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])}else{this.attr(match,context[match])}}}return this}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector)}this.length=1;this[0]=elem}this.context=document;this.selector=selector;return this}}else if(!context||context.jquery){return(context||rootjQuery).find(selector)}else{return this.constructor(context).find(selector)}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector)}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context}return jQuery.makeArray(selector,this)},selector:"",length:0,toArray:function(){return core_slice.call(this)},get:function(num){return num==null?this.toArray():num<0?this[this.length+num]:this[num]},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret},each:function(callback,args){return jQuery.each(this,callback,args)},ready:function(fn){jQuery.ready.promise().done(fn);return this},slice:function(){return this.pushStack(core_slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[])},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},end:function(){return this.prevObject||this.constructor(null)},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}}if(length===i){target=this;--i}for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[]}else{clone=src&&jQuery.isPlainObject(src)?src:{}}target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined){target[name]=copy}}}}return target};jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict:function(deep){if(window.$===jQuery){window.$=_$}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}return jQuery},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++}else{jQuery.ready(true)}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return}if(!document.body){return setTimeout(jQuery.ready)}jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return}readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready")}},isFunction:function(obj){return jQuery.type(obj)==="function"},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array"},isWindow:function(obj){return obj!=null&&obj==obj.window},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj)},type:function(obj){if(obj==null){return String(obj)}return typeof obj==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false}try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}if(jQuery.support.ownLast){for(key in obj){return core_hasOwn.call(obj,key)}}for(key in obj){}return key===undefined||core_hasOwn.call(obj,key)},isEmptyObject:function(obj){var name;for(name in obj){return false}return true},error:function(msg){throw new Error(msg)},parseHTML:function(data,context,keepScripts){if(!data||typeof data!=="string"){return null}if(typeof context==="boolean"){keepScripts=context;context=false}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])]}parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove()}return jQuery.merge([],parsed.childNodes)},parseJSON:function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data)}if(data===null){return data}if(typeof data==="string"){data=jQuery.trim(data);if(data){if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)()}}}jQuery.error("Invalid JSON: "+data)},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null}try{if(window.DOMParser){tmp=new DOMParser;xml=tmp.parseFromString(data,"text/xml")}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data)}}catch(e){xml=undefined}if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)}return xml},noop:function(){},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data)})(data)}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}}}return obj},trim:core_trim&&!core_trim.call("﻿ ")?function(text){return text==null?"":core_trim.call(text)}:function(text){return text==null?"":(text+"").replace(rtrim,"")},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)}else{core_push.call(ret,arr)}}return ret},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i)}len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i}}}return-1},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j]}}else{while(second[j]!==undefined){first[i++]=second[j++]}}first.length=i;return first},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i])}}return ret},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value}}}return core_concat.apply([],ret)},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp}if(!jQuery.isFunction(fn)){return undefined}args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(core_slice.call(arguments)))};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy},access:function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true}if(bulk){if(raw){fn.call(elems,value);fn=null}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value)}}}if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))}}}return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet},now:function(){return(new Date).getTime()},swap:function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name]}ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name]}return ret}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false)}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement}catch(e){}if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left")}catch(e){return setTimeout(doScrollCheck,50)}detach();jQuery.ready()}})()}}}return readyList.promise(obj)};jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false}if(obj.nodeType===1&&length){return true}return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&length-1 in obj)}rootjQuery=jQuery(document);(function(window,undefined){var i,support,cachedruns,Expr,getText,isXML,compile,outermostContext,sortInput,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-new Date,preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),hasDuplicate=false,sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0}return 0},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i}}return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rsibling=new RegExp(whitespace+"*[+~]"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+characterEncoding+")"),CLASS:new RegExp("^\\.("+characterEncoding+")"),TAG:new RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320)};try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))}:function(target,els){var j=target.length,i=0;while(target[j++]=els[i++]){}target.length=j-1}}}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)}context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results}if((nodeType=context.nodeType)!==1&&nodeType!==9){return[]}if(documentIsHTML&&!seed){if(match=rquickExpr.exec(selector)){if(m=match[1]){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results}}else{return results}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results}}if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if(old=context.getAttribute("id")){nid=old.replace(rescape,"\\$&")}else{context.setAttribute("id",nid)}nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i])}newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",")}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results}catch(qsaError){}finally{if(!old){context.removeAttribute("id")}}}}}return select(selector.replace(rtrim,"$1"),context,results,seed)}function createCache(){var keys=[];function cache(key,value){if(keys.push(key+=" ")>Expr.cacheLength){delete cache[keys.shift()]}return cache[key]=value}return cache}function markFunction(fn){fn[expando]=true;return fn}function assert(fn){var div=document.createElement("div");try{return!!fn(div)}catch(e){return false}finally{if(div.parentNode){div.parentNode.removeChild(div)}div=null}}function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler}}function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff}if(cur){while(cur=cur.nextSibling){if(cur===b){return-1}}}return a?1:-1}function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type}}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type}}function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j])}}})})}isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false};support=Sizzle.support={};setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document}document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(doc);if(parent&&parent.attachEvent&&parent!==parent.top){parent.attachEvent("onbeforeunload",function(){setDocument()})}support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className")});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length});support.getElementsByClassName=assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";div.firstChild.className="i";return div.getElementsByClassName("i").length===2});support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[]}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}}}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId}}}Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag)}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem)}}return tmp}return results};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className)}};rbuggyMatches=[];rbuggyQSA=[];if(support.qsa=rnative.test(doc.querySelectorAll)){assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("t","");if(div.querySelectorAll("[t^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")}if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")}div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:")})}if(support.matchesSelector=rnative.test(matches=docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos)})}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));contains=rnative.test(docElem.contains)||docElem.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true}}}return false};sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0}var compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);if(compare){if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){if(a===doc||contains(preferredDoc,a)){return-1}if(b===doc||contains(preferredDoc,b)){return 1}return sortInput?indexOf.call(sortInput,a)-indexOf.call(sortInput,b):0}return compare&4?-1:1}return a.compareDocumentPosition?-1:1}:function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){hasDuplicate=true;return 0}else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?indexOf.call(sortInput,a)-indexOf.call(sortInput,b):0}else if(aup===bup){return siblingCheck(a,b)}cur=a;while(cur=cur.parentNode){ap.unshift(cur)}cur=b;while(cur=cur.parentNode){bp.unshift(cur)}while(ap[i]===bp[i]){i++}return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0};return doc};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)}expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)}return contains(context,elem)};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)}var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val===undefined?support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null:val};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i)}}while(j--){results.splice(duplicates[j],1)}}return results};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;node=elem[i];i++){ret+=getText(node)}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem)}}}else if(nodeType===3||nodeType===4){return elem.nodeValue}return ret};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" "}return match.slice(0,4)},CHILD:function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])}match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd")}else if(match[3]){Sizzle.error(match[0])}return match},PSEUDO:function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null}if(match[3]&&match[4]!==undefined){match[2]=match[4]}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess)}return match.slice(0,3)}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},CLASS:function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"")})},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!="}if(!operator){return true}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false}},CHILD:function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false}}start=dir=type==="only"&&!start&&"nextSibling"}return true}start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]}else{while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]}if(node===elem){break}}}}diff-=last;return diff===first||diff%first===0&&diff/first>=0}}},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument)}if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):function(elem){return fn(elem,0,args)}}return fn}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem)}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop()}}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),contains:markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),lang:markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0}}while((elem=elem.parentNode)&&elem.nodeType===1);return false}}),target:function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},root:function(elem){return elem===docElem},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},enabled:function(elem){return elem.disabled===false},disabled:function(elem){return elem.disabled===true},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}return elem.selected===true},empty:function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false}}return true},parent:function(elem){return!Expr.pseudos["empty"](elem)},header:function(elem){return rheader.test(elem.nodeName)},input:function(elem){return rinputs.test(elem.nodeName)},button:function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button"},text:function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type)},first:createPositionalPseudo(function(){return[0]}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i)}return matchIndexes}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i)}return matchIndexes}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i)}return matchIndexes}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i)}return matchIndexes})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i)
}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)}function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters;function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0)}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar}groups.push(tokens=[])}matched=false;if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length)}for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length)}}if(!matched){break}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)}function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value}return selector}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)}}}:function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName;if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true}}else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true}}}}}}}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false}}return true}:matchers[0]}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i)}}}}return newUnmatched}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml)}if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){temp.push(matcherIn[i]=elem)}}postFinder(null,matcherOut=[],temp,xml)}i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml)}else{push.apply(results,matcherOut)}}})}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1},implicitRelative,true),matchers=[function(elem,context,xml){return!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml))}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)]}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens))}matchers.push(matcher)}}return elementMatcher(matchers)}function matcherFromGroupMatchers(elementMatchers,setMatchers){var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||.1;if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns}for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while(matcher=elementMatchers[j++]){if(matcher(elem,context,xml)){results.push(elem);break}}if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns}}if(bySet){if(elem=!matcher&&elem){matchedCount--}if(seed){unmatched.push(elem)}}}matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml)}if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}setMatched=condense(setMatched)}push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results)}}if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup}return unmatched};return bySet?markFunction(superMatcher):superMatcher}compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector)}i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached)}else{elementMatchers.push(cached)}}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers))}return cached};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results)}return results}function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results}selector=selector.slice(tokens.shift().value.length)}i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[type=token.type]){break}if(find=Expr.find[type]){if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context)){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results}break}}}}}compile(selector,match)(seed,context,!documentIsHTML,results,rsibling.test(selector));return results}support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#"})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)}})}if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")===""})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue}})}if(!assert(function(div){return div.getAttribute("disabled")==null})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return(val=elem.getAttributeNode(name))&&val.specified?val.value:elem[name]===true?name.toLowerCase():null}})}jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains})(window);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[],function(_,flag){object[flag]=true});return object}jQuery.Callbacks=function(options){options=typeof options==="string"?optionsCache[options]||createOptions(options):jQuery.extend({},options);var firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break}}firing=false;if(list){if(stack){if(stack.length){fire(stack.shift())}}else if(memory){list=[]}else{self.disable()}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)}}else if(arg&&arg.length&&type!=="string"){add(arg)}})})(arguments);if(firing){firingLength=list.length}else if(memory){firingStart=start;fire(memory)}}return this},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--}if(index<=firingIndex){firingIndex--}}}})}return this},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)},empty:function(){list=[];firingLength=0;return this},disable:function(){list=stack=memory=undefined;return this},disabled:function(){return!list},lock:function(){stack=undefined;if(!memory){self.disable()}return this},locked:function(){return!stack},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args)}else{fire(args)}}return this},fire:function(){self.fireWith(this,arguments);return this},fired:function(){return!!fired}};return self};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state},always:function(){deferred.done(arguments).fail(arguments);return this},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)}else{newDefer[action+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)}})});fns=null}).promise()},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString},tuples[i^1][2].disable,tuples[2][2].lock)}deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this};deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred);if(func){func.call(deferred,deferred)}return deferred},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values)}else if(!--remaining){deferred.resolveWith(contexts,values)}}},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))}else{--remaining}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)}return deferred.promise()}});jQuery.support=function(support){var all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*")||[];a=div.getElementsByTagName("a")[0];if(!a||!a.style||!all.length){return support}select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support.getSetAttribute=div.className!=="t";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.opacity=/^0.5/.test(a.style.opacity);support.cssFloat=!!a.style.cssFloat;support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";support.inlineBlockNeedsLayout=false;support.shrinkWrapBlocks=false;support.pixelPosition=false;support.deleteExpando=true;support.noCloneEvent=true;support.reliableMarginRight=true;support.boxSizingReliable=true;input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test}catch(e){support.deleteExpando=false}input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input);support.appendChecked=input.checked;support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false});div.cloneNode(true).click()}for(i in{submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false}div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";for(i in jQuery(support)){break}support.ownLast=i!=="0";jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){return}container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=tds[0].offsetHeight===0;tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&tds[0].offsetHeight===0;div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";jQuery.swap(body,body.style.zoom!=null?{zoom:1}:{},function(){support.boxSizing=div.offsetWidth===4});if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight)}if(typeof div.style.zoom!==core_strundefined){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=div.offsetWidth===3;div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=div.offsetWidth!==3;if(support.inlineBlockNeedsLayout){body.style.zoom=1}}body.removeChild(container);container=div=tds=marginDiv=null});all=select=fragment=opt=a=input=null;return support}({});var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return}var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||!pvt&&!cache[id].data)&&data===undefined&&typeof name==="string"){return}if(!id){if(isNode){id=elem[internalKey]=core_deletedIds.pop()||jQuery.guid++}else{id=internalKey}}if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop}}if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name)}else{cache[id].data=jQuery.extend(cache[id].data,name)}}thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={}}thisCache=thisCache.data}if(data!==undefined){thisCache[jQuery.camelCase(name)]=data}if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)]}}else{ret=thisCache}return ret}function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return}var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return}if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name]}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name]}else{name=name.split(" ")}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase))}i=name.length;while(i--){delete thisCache[name[i]]}if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return}}}if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return}}if(isNode){jQuery.cleanData([elem],true)}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id]}else{cache[id]=null}}jQuery.extend({cache:{},noData:{applet:true,embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem)},data:function(elem,name,data){return internalData(elem,name,data)},removeData:function(elem,name){return internalRemoveData(elem,name)},_data:function(elem,name,data){return internalData(elem,name,data,true)},_removeData:function(elem,name){return internalRemoveData(elem,name,true)},acceptData:function(elem){if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false}var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData}});jQuery.fn.extend({data:function(key,value){var attrs,name,data=null,i=0,elem=this[0];if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name])}}jQuery._data(elem,"parsedAttrs",true)}}return data}if(typeof key==="object"){return this.each(function(){jQuery.data(this,key)})}return arguments.length>1?this.each(function(){jQuery.data(this,key,value)}):elem?dataAttr(elem,key,jQuery.data(elem,key)):null},removeData:function(key){return this.each(function(){jQuery.removeData(this,key)})}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data}catch(e){}jQuery.data(elem,key,data)}else{data=undefined}}return data}function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue}if(name!=="toJSON"){return false}}return true}jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data))}else{queue.push(data)}}return queue||[]}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};if(fn==="inprogress"){fn=queue.shift();startLength--}if(fn){if(type==="fx"){queue.unshift("inprogress")}delete hooks.stop;fn.call(elem,next,hooks)}if(!startLength&&hooks){hooks.empty.fire()}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key)})})}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--}if(arguments.length<setter){return jQuery.queue(this[0],type)}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout)}})},clearQueue:function(type){return this.queue(type||"fx",[])},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!--count){defer.resolveWith(elements,[elements])}};if(typeof type!=="string"){obj=type;type=undefined}type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve)}}resolve();return defer.promise(obj)}});var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name]}catch(e){}})},addClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))})}if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "}}elem.className=jQuery.trim(cur)}}}return this},removeClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))})}if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while(clazz=classes[j++]){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")}}elem.className=value?jQuery.trim(cur):""}}}return this},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)})}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(core_rnotwhite)||[];while(className=classNames[i++]){if(self.hasClass(className)){self.removeClass(className)}else{self.addClass(className)}}}else if(type===core_strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className)}this.className=this.className||value===false?"":jQuery._data(this,"__className__")||""}})},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true}}return false},val:function(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret}ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret}return}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return}if(isFunction){val=value.call(this,i,jQuery(this).val())}else{val=value}if(val==null){val=""}else if(typeof val==="number"){val+=""}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""})}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:elem.text}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value}values.push(value)}}return values},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery(option).val(),values)>=0){optionSet=true}}if(!optionSet){elem.selectedIndex=-1}return values}}},attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}if(typeof elem.getAttribute===core_strundefined){return jQuery.prop(elem,name,value)}if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret}else{elem.setAttribute(name,value+"");return value}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false}}else{jQuery.attr(elem,name,"")}elem.removeAttribute(getSetAttribute?name:propName)}}},attrHooks:{type:{set:function(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}return value}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:elem[name]=value}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name)}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name)}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true}return name}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=jQuery.expr.attrHandle[name]||jQuery.find.attr;jQuery.expr.attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var fn=jQuery.expr.attrHandle[name],ret=isXML?undefined:(jQuery.expr.attrHandle[name]=undefined)!=getter(elem,name,isXML)?name.toLowerCase():null;jQuery.expr.attrHandle[name]=fn;return ret}:function(elem,name,isXML){return isXML?undefined:elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null}});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value}else{return nodeHook&&nodeHook.set(elem,value,name)}}}}if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode(ret=elem.ownerDocument.createAttribute(name))}ret.value=value+="";return name==="value"||value===elem.getAttribute(name)?value:undefined
}};jQuery.expr.attrHandle.id=jQuery.expr.attrHandle.name=jQuery.expr.attrHandle.coords=function(elem,name,isXML){var ret;return isXML?undefined:(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);return ret&&ret.specified?ret.value:undefined},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name)}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value}}}})}if(!jQuery.support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4)}}})}if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined},set:function(elem,value){return elem.style.cssText=value+""}}}if(!jQuery.support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex}}return null}}}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this});if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding"}jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0}}};if(!jQuery.support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value}}});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true}function returnFalse(){return false}function safeActiveElement(){try{return document.activeElement}catch(err){}}jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return}if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector}if(!handler.guid){handler.guid=jQuery.guid++}if(!(events=elemData.events)){events=elemData.events={}}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined};eventHandle.elem=elem}types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle)}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)}else{handlers.push(handleObj)}jQuery.event.global[type]=true}elem=null},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return}types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)}continue}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--}if(special.remove){special.remove.call(elem,handleObj)}}}if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)}delete events[type]}}if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events")}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return}if(rfocusMorph.test(type+jQuery.event.triggered)){return}if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem}data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur}if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)}}i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data)}handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault()}}event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null}jQuery.event.triggered=type;try{elem[type]()}catch(e){}jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp}}}}return event.result},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return}handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation()}}}}}if(special.postDispatch){special.postDispatch.call(this,event)}return event.result},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length}if(matches[sel]){matches.push(handleObj)}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches})}}}}if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})}return handlerQueue},fix:function(event){if(event[jQuery.expando]){return event}var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop]}if(!event.target){event.target=originalEvent.srcElement||document}if(event.target.nodeType===3){event.target=event.target.parentNode}event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode}return event}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)}if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement}if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0}return event}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false}},_default:function(event){return jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch:function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event,event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem)}else{jQuery.event.dispatch.call(elem,e)}if(e.isDefaultPrevented()){event.preventDefault()}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===core_strundefined){elem[name]=null}elem.detachEvent(name,handle)}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)}if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault()?returnTrue:returnFalse}else{this.type=src}if(props){jQuery.extend(this,props)}this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation()}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix}return ret}}});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false}jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true});jQuery._data(form,"submitBubbles",true)}})},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true)}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false}jQuery.event.remove(this,"._submit")}}}if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false}jQuery.event.simulate("change",this,event,true)})}return false}jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true)}});jQuery._data(elem,"changeBubbles",true)}})},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||elem.type!=="radio"&&elem.type!=="checkbox"){return event.handleObj.handler.apply(this,arguments)}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName)}}}if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true)}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true)}}}})}jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined}for(type in types){this.on(type,selector,data,types[type],one)}return this}if(data==null&&fn==null){fn=selector;data=selector=undefined}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined}else{fn=data;data=selector;selector=undefined}}if(fn===false){fn=returnFalse}else if(!fn){return this}if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)})},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])}return this}if(selector===false||typeof selector==="function"){fn=selector;selector=undefined}if(fn===false){fn=returnFalse}return this.each(function(){jQuery.event.remove(this,types,fn,selector)})},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true)}}});var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true}}}))}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret)}ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true}}})},not:function(selector){return this.pushStack(winnow(this,selector||[],true))},filter:function(selector){return this.pushStack(winnow(this,selector||[],false))},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){cur=ret.push(cur);break}}}return this.pushStack(ret.length>1?jQuery.unique(ret):ret)},index:function(elem){if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem))}return jQuery.inArray(elem.jquery?elem[0]:elem,this)},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all))},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}});function sibling(cur,dir){do{cur=cur[dir]}while(cur&&cur.nodeType!==1);return cur}jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null},parents:function(elem){return jQuery.dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)},children:function(elem){return jQuery.sibling(elem.firstChild)},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until}if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret)}if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret)}if(rparentsprev.test(name)){ret=ret.reverse()}}return this.pushStack(ret)}});jQuery.extend({filter:function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")"}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1}))},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur)}cur=cur[dir]}return matched},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n)}}return r}});function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not})}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not})}if(typeof qualifier==="string"){if(isSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)}qualifier=jQuery.filter(qualifier,elements)}return jQuery.grep(elements,function(elem){return jQuery.inArray(elem,qualifier)>=0!==not})}function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop())}}return safeFrag}var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value))},null,value,arguments.length)},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)}})},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)}})},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))}if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))}elem.parentNode.removeChild(elem)}}return this},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false))}while(elem.firstChild){elem.removeChild(elem.firstChild)}if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0}}return this},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value}}elem=0}catch(e){}}if(elem){this.empty().append(value)}},null,value,arguments.length)},replaceWith:function(){var args=jQuery.map(this,function(elem){return[elem.nextSibling,elem.parentNode]}),i=0;this.domManip(arguments,function(elem){var next=args[i++],parent=args[i++];if(parent){if(next&&next.parentNode!==parent){next=this.nextSibling}jQuery(this).remove();parent.insertBefore(elem,next)}},true);return i?this:this.remove()},detach:function(selector){return this.remove(selector,true)},domManip:function(args,callback,allowIntersection){args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html())}self.domManip(args,callback,allowIntersection)})}if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,!allowIntersection&&this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first}if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))}}callback.call(this[i],node,i)}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){jQuery._evalUrl(node.src)}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""))}}}}fragment=first=null}}return this}});function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType===1?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem}function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1]}else{elem.removeAttribute("type")}return elem}function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"))}}function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return}var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i])}}}if(curData.data){curData.data=jQuery.extend({},curData.data)}}function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return}nodeName=dest.nodeName.toLowerCase();if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle)}dest.removeAttribute(jQuery.expando)}if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest)}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML}if(jQuery.support.html5Clone&&src.innerHTML&&!jQuery.trim(dest.innerHTML)){dest.innerHTML=src.innerHTML}}else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue}}jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);core_push.apply(ret,elems.get())}return this.pushStack(ret)}});function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==core_strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem)}else{jQuery.merge(found,getAll(elem,tag))}}}return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found}function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true)}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild)}if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i])}}}if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i])}}else{cloneCopyEvent(elem,clone)}}destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))}destElements=srcElements=node=null;return clone},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;
for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild}if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))}if(!jQuery.support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName(tbody=elem.childNodes[j],"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody)}}}jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild)}tmp=safe.lastChild}}}if(tmp){safe.removeChild(tmp)}if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked)}i=0;while(elem=nodes[i++]){if(selection&&jQuery.inArray(elem,selection)!==-1){continue}contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp)}if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem)}}}}tmp=null;return safe},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)}else{jQuery.removeEvent(elem,type,data.handle)}}}if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey]}else if(typeof elem.removeAttribute!==core_strundefined){elem.removeAttribute(internalKey)}else{elem[internalKey]=null}core_deletedIds.push(id)}}}}},_evalUrl:function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true})}});jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))})}if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0])}wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild}return elem}).append(this)}return this},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html)}else{self.append(html)}})},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)}}).end()}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name}var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name}}return origName}function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue}values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display=""}if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName))}}else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))}}}}for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"}}return elements}jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles)}return map}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)},show:function(){return showHide(this,true)},hide:function(){return showHide(this)},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()}return this.each(function(){if(isHidden(this)){jQuery(this).show()}else{jQuery(this).hide()}})}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return}var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number"}if(value==null||type==="number"&&isNaN(value)){return}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"}if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"}if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret}return style[name]}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra)}if(val===undefined){val=curCSS(elem,name,styles)}if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]}if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val}return val}});if(window.getComputedStyle){getStyles=function(elem){return window.getComputedStyle(elem,null)};curCSS=function(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)}if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth}}return ret}}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle};curCSS=function(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style;if(ret==null&&style&&style[name]){ret=style[name]}if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left}style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft}}return ret===""?"auto":ret}}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles)}if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles)}if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}}}return val}function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name]}if(rnumnonpx.test(val)){return val}valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0}return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px"}function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach()}elemdisplay[nodeName]=display}return display}function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display}jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)}):getWidthOrHeight(elem,name,extra)}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0)}}});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":computed?"1":""},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return}}style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity}}}jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){if(computed){return jQuery.swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"])}}}}if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed}}}})}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||!jQuery.support.reliableHiddenOffsets&&(elem.style&&elem.style.display||jQuery.css(elem,"display"))==="none"};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem)}}jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]}return expanded}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional}if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){jQuery.each(a,function(){add(this.name,this.value)})}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)}}return s.join("&").replace(r20,"+")};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)}})}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}}else{add(prefix,obj)}}jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)},bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)}});var ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*"}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){while(dataType=dataTypes[i++]){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func)}else{(structure[dataType]=structure[dataType]||[]).push(func)}}}}}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false}else if(seekingTransport){return!(selected=dataTypeOrTransport)}});return selected}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key]}}if(deep){jQuery.extend(true,target,deep)}return target}jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)}var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off)}if(jQuery.isFunction(params)){callback=params;params=undefined}else if(params&&typeof params==="object"){type="POST"}if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])})}return this};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}});jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined}options=options||{};var parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2]}}match=responseHeaders[key.toLowerCase()]}return match==null?null:match},getAllResponseHeaders:function(){return state===2?responseHeadersString:null},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value}return this},overrideMimeType:function(type){if(!state){s.mimeType=type}return this},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]}}else{jqXHR.always(map[jqXHR.status])}}return this},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText)}done(0,finalText);return this}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR}fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")}s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data;delete s.data}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()}strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i])}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport")}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}try{state=1;transport.send(requestHeaders,done)}catch(e){if(state<2){done(-1,e)}else{throw e}}}function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return}state=2;if(timeoutTimer){clearTimeout(timeoutTimer)}transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified}}if(status===204||s.type==="HEAD"){statusText="nocontent"}else if(status===304){statusText="notmodified"}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0}}}jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])}jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!--jQuery.active){jQuery.event.trigger("ajaxStop")}}}return jqXHR},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})}});function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}}}if(dataTypes[0]in responses){finalDataType=dataTypes[0]}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}if(!firstDataType){firstDataType=type}}finalDataType=finalDataType||firstDataType}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)}return responses[finalDataType]}}function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response}if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)}prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2]}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1])}break}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)}else{try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}}}}}return{state:"success",data:response}}jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false}if(s.crossDomain){s.type="GET";s.global=false}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset}script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script)}script=null;if(!isAbort){callback(200,"success")}}};head.insertBefore(script,head.firstChild)},abort:function(){if(script){script.onload(undefined,true)}}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+ajax_nonce++;this[callback]=true;return callback}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)}else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")}return responseContainer[0]};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName)}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])}responseContainer=overwritten=undefined});return"script"}});var xhrCallbacks,xhrSupported,xhrId=0,xhrOnUnloadAbort=window.ActiveXObject&&function(){var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true)}};function createStandardXHR(){try{return new window.XMLHttpRequest}catch(e){}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR()}:createStandardXHR;xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;xhrSupported=jQuery.support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password)}else{xhr.open(s.type,s.url,s.async)}if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i]}}if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType)}if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"}try{for(i in headers){xhr.setRequestHeader(i,headers[i])}}catch(err){}xhr.send(s.hasContent&&s.data||null);callback=function(_,isAbort){var status,responseHeaders,statusText,responses;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle]}}if(isAbort){if(xhr.readyState!==4){xhr.abort()}}else{responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();if(typeof xhr.responseText==="string"){responses.text=xhr.responseText}try{statusText=xhr.statusText}catch(e){statusText=""}if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404}else if(status===1223){status=204}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException)}}if(responses){complete(status,statusText,responses,responseHeaders)}};if(!s.async){callback()}else if(xhr.readyState===4){setTimeout(callback)}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort)}xhrCallbacks[handle]=callback}xhr.onreadystatechange=callback}},abort:function(){if(callback){callback(undefined,true)}}}}})}var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;
if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit)}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)}if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]}return tween}]};function createFxNow(){setTimeout(function(){fxNow=undefined});return fxNow=jQuery.now()}function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){return tween}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem}),tick=function(){if(stopped){return false}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent)}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining}else{deferred.resolveWith(elem,[animation]);return false}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this}stopped=true;for(;index<length;index++){animation.tweens[index].run(1)}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])}else{deferred.rejectWith(elem,[animation,gotoEnd])}return this}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0]}if(index!==name){props[name]=value;delete props[index]}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing}}}else{specialEasing[name]=easing}}}jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"]}else{props=props.split(" ")}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback)}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)}else{animationPrefilters.push(callback)}}});function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()}}}hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()}})})}if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block"}else{style.zoom=1}}}if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}}for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden}}else{dataShow=jQuery._data(elem,"fxshow",{})}if(toggle){dataShow.hidden=!hidden}if(hidden){jQuery(elem).show()}else{anim.done(function(){jQuery(elem).hide()})}anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop])}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0}}}}}function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)}else{this.pos=eased=percent}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(hooks&&hooks.set){hooks.set(this)}else{Tween.propHooks._default.set(this)}return this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]}result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}else{tween.elem[tween.prop]=tween.now}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)}});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true)}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd)};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}if(clearQueue&&type!==false){this.queue(type||"fx",[])}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index])}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1)}}if(dequeue||!gotoEnd){jQuery.dequeue(this,type)}})},finish:function(type){if(type!==false){type=type||"fx"}return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true)}for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1)}}for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)}}delete data.finish})}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type}if(includeWidth){attrs.opacity=attrs.width=type}return attrs}jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx"}opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)}if(opt.queue){jQuery.dequeue(this,opt.queue)}};return opt};jQuery.easing={linear:function(p){return p},swing:function(p){return.5-Math.cos(p*Math.PI)/2}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1)}}if(!timers.length){jQuery.fx.stop()}fxNow=undefined};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start()}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length}}jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)})}var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return}docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box}if(typeof elem.getBoundingClientRect!==core_strundefined){box=elem.getBoundingClientRect()}win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)}};jQuery.offset={setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative"}var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)}if(options.top!=null){props.top=options.top-curOffset.top+curTop}if(options.left!=null){props.left=options.left-curOffset.left+curLeft}if("using"in options){options.using.call(elem,props)}else{curElem.css(props)}}};jQuery.fn.extend({position:function(){if(!this[0]){return}var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()}parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)}return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent}return offsetParent||docElem})}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?prop in win?win[prop]:win.document.documentElement[method]:elem[method]}if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop())}else{elem[method]=val}},method,val,arguments.length,null)}});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false}jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]}if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])}return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:undefined,chainable,null)}})});jQuery.fn.size=function(){return this.length};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery}else{window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery})}}})(window);

;(function ($, w, undefined) {
	'use strict';

	var pluginName = 'sly';
	var className  = 'Sly';
	var namespace  = pluginName;

	// Local WindowAnimationTiming interface
	var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;
	var rAF = w.requestAnimationFrame;

	// Support indicators
	var transform, gpuAcceleration;

	// Other global values
	var $doc = $(document);
	var dragInitEvents = 'touchstart.' + namespace + ' mousedown.' + namespace;
	var dragMouseEvents = 'mousemove.' + namespace + ' mouseup.' + namespace;
	var dragTouchEvents = 'touchmove.' + namespace + ' touchend.' + namespace;
	var clickEvent = 'click.' + namespace;
	var mouseDownEvent = 'mousedown.' + namespace;

	/**
	 * Sly.
	 *
	 * @class
	 *
	 * @param {Element} frame       DOM element of sly container.
	 * @param {Object}  options     Object with options.
	 * @param {Object}  callbackMap Callbacks map.
	 */
	function Sly(frame, options, callbackMap) {
		// Extend options
		var o = $.extend({}, Sly.defaults, options);

		// Private variables
		var self = this;
		var initialized = 0;
		var parallax = isNumber(frame);

		// Frame
		var $frame = $(frame);
		var $slidee = $frame.children().eq(0);
		var frameSize = 0;
		var slideeSize = 0;
		var pos = {
			start: 0,
			center: 0,
			end: 0,
			cur: 0,
			dest: 0
		};

		// Scrollbar
		var $sb = $(o.scrollBar).eq(0);
		var $handle = $sb.children().eq(0);
		var sbSize = 0;
		var handleSize = 0;
		var hPos = {
			start: 0,
			end: 0,
			cur: 0
		};

		// Pagesbar
		var $pb = $(o.pagesBar);
		var $pages = 0;
		var pages = [];

		// Items
		var $items = 0;
		var items = [];
		var rel = {
			firstItem: 0,
			lastItem: 0,
			centerItem: 0,
			activeItem: -1,
			activePage: 0
		};

		// Navigation type booleans
		var basicNav = o.itemNav === 'basic';
		var forceCenteredNav = o.itemNav === 'forceCentered';
		var centeredNav = o.itemNav === 'centered' || forceCenteredNav;
		var itemNav = !parallax && (basicNav || centeredNav || forceCenteredNav);

		// Miscellaneous
		var $scrollSource = o.scrollSource ? $(o.scrollSource) : $frame;
		var $dragSource = o.dragSource ? $(o.dragSource) : $frame;
		var $forwardButton = $(o.forward);
		var $backwardButton = $(o.backward);
		var $prevButton = $(o.prev);
		var $nextButton = $(o.next);
		var $prevPageButton = $(o.prevPage);
		var $nextPageButton = $(o.nextPage);
		var callbacks = {};
		var last = {};
		var animation = {};
		var move = {};
		var dragging = { released: 1 };
		var renderID = 0;
		var historyID = 0;
		var cycleID = 0;
		var continuousID = 0;
		var i, l;

		// Normalizing frame
		if (!parallax) {
			frame = $frame[0];
		}

		// Expose properties
		self.frame = frame;
		self.slidee = $slidee[0];
		self.pos = pos;
		self.rel = rel;
		self.items = items;
		self.pages = pages;
		self.isPaused = 0;
		self.options = o;

		/**
		 * (Re)Loading function.
		 *
		 * Populate arrays, set sizes, bind events, ...
		 *
		 * @return {Void}
		 */
		function load() {
			// Local variables
			var ignoredMargin = 0;

			// Save old position
			pos.old = $.extend({}, pos);

			// Reset global variables
			frameSize = parallax ? 0 : $frame[o.horizontal ? 'width' : 'height']();
			sbSize = $sb[o.horizontal ? 'width' : 'height']();
			slideeSize = parallax ? frame : $slidee[o.horizontal ? 'outerWidth' : 'outerHeight']();
			pages.length = 0;

			// Set position limits & relatives
			pos.start = 0;
			pos.end = Math.max(slideeSize - frameSize, 0);
			last = {};

			// Sizes & offsets for item based navigations
			if (itemNav) {
				// Save the number of current items
				var lastItemsCount = items.length;

				// Reset itemNav related variables
				$items = $slidee.children(o.itemSelector);
				items.length = 0;

				// Needed variables
				var paddingStart = getPx($slidee, o.horizontal ? 'paddingLeft' : 'paddingTop');
				var paddingEnd = getPx($slidee, o.horizontal ? 'paddingRight' : 'paddingBottom');
				var marginStart = getPx($items, o.horizontal ? 'marginLeft' : 'marginTop');
				var marginEnd = getPx($items.slice(-1), o.horizontal ? 'marginRight' : 'marginBottom');
				var centerOffset = 0;
				var areFloated = $items.css('float') !== 'none';

				// Update ignored margin
				ignoredMargin = marginStart ? 0 : marginEnd;

				// Reset slideeSize
				slideeSize = 0;

				// Iterate through items
				$items.each(function (i, element) {
					// Item
					var $item = $(element);
					var itemSize = $item[o.horizontal ? 'outerWidth' : 'outerHeight'](true);
					var itemMarginStart = getPx($item, o.horizontal ? 'marginLeft' : 'marginTop');
					var itemMarginEnd = getPx($item, o.horizontal ? 'marginRight' : 'marginBottom');
					var itemData = {
						el: element,
						size: itemSize,
						half: itemSize / 2,
						start: slideeSize - (!i || o.horizontal ? 0 : itemMarginStart),
						center: slideeSize - Math.round(frameSize / 2 - itemSize / 2),
						end: slideeSize - frameSize + itemSize - (marginStart ? 0 : itemMarginEnd)
					};

					// Account for centerOffset & slidee padding
					if (!i) {
						centerOffset = -(forceCenteredNav ? Math.round(frameSize / 2 - itemSize / 2) : 0) + paddingStart;
						slideeSize += paddingStart;
					}

					// Increment slidee size for size of the active element
					slideeSize += itemSize;

					// Try to account for vertical margin collapsing in vertical mode
					// It's not bulletproof, but should work in 99% of cases
					if (!o.horizontal && !areFloated) {
						// Subtract smaller margin, but only when top margin is not 0, and this is not the first element
						if (itemMarginEnd && itemMarginStart && i > 0) {
							slideeSize -= Math.min(itemMarginStart, itemMarginEnd);
						}
					}

					// Things to be done on last item
					if (i === $items.length - 1) {
						slideeSize += paddingEnd;
					}

					// Add item object to items array
					items.push(itemData);
				});

				// Resize SLIDEE to fit all items
				$slidee[0].style[o.horizontal ? 'width' : 'height'] = slideeSize + 'px';

				// Adjust internal SLIDEE size for last margin
				slideeSize -= ignoredMargin;

				// Set limits
				pos.start = centerOffset;
				pos.end = forceCenteredNav ? (items.length ? items[items.length - 1].center : centerOffset) : Math.max(slideeSize - frameSize, 0);

				// Activate last item if previous active has been removed, or first item
				// when there were no items before, and new got appended.
				if (rel.activeItem >= items.length || lastItemsCount === 0 && items.length > 0) {
					activate(items.length > 0 ? items.length - 1 : 0);
				}
			}

			// Calculate SLIDEE center position
			pos.center = Math.round(pos.end / 2 + pos.start / 2);

			// Update relative positions
			updateRelatives();

			// Scrollbar
			if ($handle.length && sbSize > 0) {
				// Stretch scrollbar handle to represent the visible area
				if (o.dynamicHandle) {
					// ForceCentered navigation edge case
					if (forceCenteredNav) {
						handleSize = items.length ? sbSize * frameSize / (frameSize + items[items.length-1].center - items[0].center) : sbSize;
					} else {
						handleSize = sbSize * frameSize / slideeSize;
					}
					handleSize = within(Math.round(handleSize), o.minHandleSize, sbSize);
					$handle[0].style[o.horizontal ? 'width' : 'height'] = handleSize + 'px';
				} else {
					handleSize = $handle[o.horizontal ? 'outerWidth' : 'outerHeight']();
				}

				hPos.end = sbSize - handleSize;

				if (!renderID) {
					syncScrollbar();
				}
			}

			// Pages
			if (!parallax && frameSize > 0) {
				var tempPagePos = pos.start;
				var pagesHtml = '';

				// Populate pages array
				if (itemNav) {
					$.each(items, function (i, item) {
						if (forceCenteredNav || item.start + item.size > tempPagePos) {
							tempPagePos = item[forceCenteredNav ? 'center' : 'start'];
							pages.push(tempPagePos);
							tempPagePos += frameSize;
						}
					});
				} else {
					while (tempPagePos - frameSize < pos.end) {
						pages.push(tempPagePos);
						tempPagePos += frameSize;
					}
				}

				// Pages bar
				if ($pb[0]) {
					for (var i = 0; i < pages.length; i++) {
						pagesHtml += o.pageBuilder.call(self, i);
					}
					$pages = $pb.html(pagesHtml).children();
				}
			}

			// Fix possible overflowing
			slideTo(within(pos.dest, pos.start, pos.end));

			// Extend relative variables object with some useful info
			rel.slideeSize = slideeSize;
			rel.frameSize = frameSize;
			rel.sbSize = sbSize;
			rel.handleSize = handleSize;

			// Trigger load event
			trigger('load');
		}
		self.reload = load;

		/**
		 * Animate to a position.
		 *
		 * @param {Int}  newPos    New position.
		 * @param {Bool} immediate Reposition immediately without an animation.
		 * @param {Bool} dontAlign Do not align items, use the raw position passed in first argument.
		 *
		 * @return {Void}
		 */
		function slideTo(newPos, immediate, dontAlign) {
			// Align items
			if (itemNav && dragging.released && !dontAlign) {
				var tempRel = getRelatives(newPos);
				var isNotBordering = newPos > pos.start && newPos < pos.end;

				if (centeredNav) {
					if (isNotBordering) {
						newPos = items[tempRel.centerItem].center;
					}
					if (forceCenteredNav && o.activateMiddle) {
						activate(tempRel.centerItem);
					}
				} else if (isNotBordering) {
					newPos = items[tempRel.firstItem].start;
				}
			}

			// Handle overflowing position limits
			if (dragging.init && dragging.slidee && o.elasticBounds) {
				if (newPos > pos.end) {
					newPos = pos.end + (newPos - pos.end) / 6;
				} else if (newPos < pos.start) {
					newPos = pos.start + (newPos - pos.start) / 6;
				}
			} else {
				newPos = within(newPos, pos.start, pos.end);
			}

			// Update the animation object
			animation.start = +new Date();
			animation.time = 0;
			animation.from = pos.cur;
			animation.to = newPos;
			animation.delta = newPos - pos.cur;
			animation.tweesing = dragging.tweese || dragging.init && !dragging.slidee;
			animation.immediate = immediate || dragging.init && dragging.slidee && !dragging.tweese;

			// Reset dragging tweesing request
			dragging.tweese = 0;

			// Start animation rendering
			if (newPos !== pos.dest) {
				pos.dest = newPos;
				trigger('change');
				if (!renderID) {
					render();
				}
			}

			// Reset next cycle timeout
			resetCycle();

			// Synchronize states
			updateRelatives();
			updateButtonsState();
			syncPagesbar();
		}

		/**
		 * Render animation frame.
		 *
		 * @return {Void}
		 */
		function render() {
			// If first render call, wait for next animationFrame
			if (!renderID) {
				renderID = rAF(render);
				if (dragging.released) {
					trigger('moveStart');
				}
				return;
			}

			// If immediate repositioning is requested, don't animate.
			if (animation.immediate) {
				pos.cur = animation.to;
			}
			// Use tweesing for animations without known end point
			else if (animation.tweesing) {
				animation.tweeseDelta = animation.to - pos.cur;
				// Fuck Zeno's paradox
				if (Math.abs(animation.tweeseDelta) < 0.1) {
					pos.cur = animation.to;
				} else {
					pos.cur += animation.tweeseDelta * (dragging.released ? o.swingSpeed : o.syncSpeed);
				}
			}
			// Use tweening for basic animations with known end point
			else {
				animation.time = Math.min(+new Date() - animation.start, o.speed);
				pos.cur = animation.from + animation.delta * jQuery.easing[o.easing](animation.time/o.speed, animation.time, 0, 1, o.speed);
			}

			// If there is nothing more to render break the rendering loop, otherwise request new animation frame.
			if (animation.to === pos.cur) {
				pos.cur = animation.to;
				dragging.tweese = renderID = 0;
			} else {
				renderID = rAF(render);
			}

			trigger('move');

			// Update SLIDEE position
			if (!parallax) {
				if (transform) {
					$slidee[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + (-pos.cur) + 'px)';
				} else {
					$slidee[0].style[o.horizontal ? 'left' : 'top'] = -Math.round(pos.cur) + 'px';
				}
			}

			// When animation reached the end, and dragging is not active, trigger moveEnd
			if (!renderID && dragging.released) {
				trigger('moveEnd');
			}

			syncScrollbar();
		}

		/**
		 * Synchronizes scrollbar with the SLIDEE.
		 *
		 * @return {Void}
		 */
		function syncScrollbar() {
			if ($handle.length) {
				hPos.cur = pos.start === pos.end ? 0 : (((dragging.init && !dragging.slidee) ? pos.dest : pos.cur) - pos.start) / (pos.end - pos.start) * hPos.end;
				hPos.cur = within(Math.round(hPos.cur), hPos.start, hPos.end);
				if (last.hPos !== hPos.cur) {
					last.hPos = hPos.cur;
					if (transform) {
						$handle[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + hPos.cur + 'px)';
					} else {
						$handle[0].style[o.horizontal ? 'left' : 'top'] = hPos.cur + 'px';
					}
				}
			}
		}

		/**
		 * Synchronizes pagesbar with SLIDEE.
		 *
		 * @return {Void}
		 */
		function syncPagesbar() {
			if ($pages[0] && last.page !== rel.activePage) {
				last.page = rel.activePage;
				$pages.removeClass(o.activeClass).eq(rel.activePage).addClass(o.activeClass);
				trigger('activePage', last.page);
			}
		}

		/**
		 * Returns the position object.
		 *
		 * @param {Mixed} item
		 *
		 * @return {Object}
		 */
		self.getPos = function (item) {
			if (itemNav) {
				var index = getIndex(item);
				return index !== -1 ? items[index] : false;
			} else {
				var $item = $slidee.find(item).eq(0);

				if ($item[0]) {
					var offset = o.horizontal ? $item.offset().left - $slidee.offset().left : $item.offset().top - $slidee.offset().top;
					var size = $item[o.horizontal ? 'outerWidth' : 'outerHeight']();

					return {
						start: offset,
						center: offset - frameSize / 2 + size / 2,
						end: offset - frameSize + size,
						size: size
					};
				} else {
					return false;
				}
			}
		};

		/**
		 * Continuous move in a specified direction.
		 *
		 * @param  {Bool} forward True for forward movement, otherwise it'll go backwards.
		 * @param  {Int}  speed   Movement speed in pixels per frame. Overrides options.moveBy value.
		 *
		 * @return {Void}
		 */
		self.moveBy = function (speed) {
			move.speed = speed;
			// If already initiated, or there is nowhere to move, abort
			if (dragging.init || !move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {
				return;
			}
			// Initiate move object
			move.lastTime = +new Date();
			move.startPos = pos.cur;
			// Set dragging as initiated
			continuousInit('button');
			dragging.init = 1;
			// Start movement
			trigger('moveStart');
			cAF(continuousID);
			moveLoop();
		};

		/**
		 * Continuous movement loop.
		 *
		 * @return {Void}
		 */
		function moveLoop() {
			// If there is nowhere to move anymore, stop
			if (!move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {
				self.stop();
			}
			// Request new move loop if it hasn't been stopped
			continuousID = dragging.init ? rAF(moveLoop) : 0;
			// Update move object
			move.now = +new Date();
			move.pos = pos.cur + (move.now - move.lastTime) / 1000 * move.speed;
			// Slide
			slideTo(dragging.init ? move.pos : Math.round(move.pos));
			// Normally, this is triggered in render(), but if there
			// is nothing to render, we have to do it manually here.
			if (!dragging.init && pos.cur === pos.dest) {
				trigger('moveEnd');
			}
			// Update times for future iteration
			move.lastTime = move.now;
		}

		/**
		 * Stops continuous movement.
		 *
		 * @return {Void}
		 */
		self.stop = function () {
			if (dragging.source === 'button') {
				dragging.init = 0;
				dragging.released = 1;
			}
		};

		/**
		 * Activate previous item.
		 *
		 * @return {Void}
		 */
		self.prev = function () {
			self.activate(rel.activeItem - 1);
		};

		/**
		 * Activate next item.
		 *
		 * @return {Void}
		 */
		self.next = function () {
			self.activate(rel.activeItem + 1);
		};

		/**
		 * Activate previous page.
		 *
		 * @return {Void}
		 */
		self.prevPage = function () {
			self.activatePage(rel.activePage - 1);
		};

		/**
		 * Activate next page.
		 *
		 * @return {Void}
		 */
		self.nextPage = function () {
			self.activatePage(rel.activePage + 1);
		};

		/**
		 * Slide SLIDEE by amount of pixels.
		 *
		 * @param {Int}  delta     Difference in position. Positive means forward, negative means backward.
		 * @param {Bool} immediate Reposition immediately without an animation.
		 *
		 * @return {Void}
		 */
		self.slideBy = function (delta, immediate) {
			slideTo(pos.dest + delta, immediate);
		};

		/**
		 * Animate SLIDEE to a specific position.
		 *
		 * @param {Int}  pos       New position.
		 * @param {Bool} immediate Reposition immediately without an animation.
		 *
		 * @return {Void}
		 */
		self.slideTo = function (pos, immediate) {
			slideTo(pos, immediate);
		};

		/**
		 * Core method for handling `toLocation` methods.
		 *
		 * @param  {String} location
		 * @param  {Mixed}  item
		 * @param  {Bool}   immediate
		 *
		 * @return {Void}
		 */
		function to(location, item, immediate) {
			// Optional arguments logic
			if (type(item) === 'boolean') {
				immediate = item;
				item = undefined;
			}

			if (item === undefined) {
				slideTo(pos[location], immediate);
			} else {
				// You can't align items to sides of the frame
				// when centered navigation type is enabled
				if (centeredNav && location !== 'center') {
					return;
				}

				var itemPos = self.getPos(item);
				if (itemPos) {
					slideTo(itemPos[location], immediate, !centeredNav);
				}
			}
		}

		/**
		 * Animate element or the whole SLIDEE to the start of the frame.
		 *
		 * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.
		 * @param {Bool}  immediate Reposition immediately without an animation.
		 *
		 * @return {Void}
		 */
		self.toStart = function (item, immediate) {
			to('start', item, immediate);
		};

		/**
		 * Animate element or the whole SLIDEE to the end of the frame.
		 *
		 * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.
		 * @param {Bool}  immediate Reposition immediately without an animation.
		 *
		 * @return {Void}
		 */
		self.toEnd = function (item, immediate) {
			to('end', item, immediate);
		};

		/**
		 * Animate element or the whole SLIDEE to the center of the frame.
		 *
		 * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.
		 * @param {Bool}  immediate Reposition immediately without an animation.
		 *
		 * @return {Void}
		 */
		self.toCenter = function (item, immediate) {
			to('center', item, immediate);
		};

		/**
		 * Get the index of an item in SLIDEE.
		 *
		 * @param {Mixed} item     Item DOM element.
		 *
		 * @return {Int}  Item index, or -1 if not found.
		 */
		function getIndex(item) {
			return type(item) !== 'undefined' ?
					isNumber(item) ?
						item >= 0 && item < items.length ? item : -1 :
						$items.index(item) :
					-1;
		}
		// Expose getIndex without lowering the compressibility of it,
		// as it is used quite often throughout Sly.
		self.getIndex = getIndex;

		/**
		 * Get index of an item in SLIDEE based on a variety of input types.
		 *
		 * @param  {Mixed} item DOM element, positive or negative integer.
		 *
		 * @return {Int}   Item index, or -1 if not found.
		 */
		function getRelativeIndex(item) {
			return getIndex(isNumber(item) && item < 0 ? item + items.length : item);
		}

		/**
		 * Activates an item.
		 *
		 * @param  {Mixed} item Item DOM element, or index starting at 0.
		 *
		 * @return {Mixed} Activated item index or false on fail.
		 */
		function activate(item) {
			var index = getIndex(item);

			if (!itemNav || index < 0) {
				return false;
			}

			// Update classes, last active index, and trigger active event only when there
			// has been a change. Otherwise just return the current active index.
			if (last.active !== index) {
				// Update classes
				$items.eq(rel.activeItem).removeClass(o.activeClass);
				$items.eq(index).addClass(o.activeClass);

				last.active = rel.activeItem = index;

				updateButtonsState();
				trigger('active', index);
			}

			return index;
		}

		/**
		 * Activates an item and helps with further navigation when o.smart is enabled.
		 *
		 * @param {Mixed} item      Item DOM element, or index starting at 0.
		 * @param {Bool}  immediate Whether to reposition immediately in smart navigation.
		 *
		 * @return {Void}
		 */
		self.activate = function (item, immediate) {
			var index = activate(item);

			// Smart navigation
			if (o.smart && index !== false) {
				// When centeredNav is enabled, center the element.
				// Otherwise, determine where to position the element based on its current position.
				// If the element is currently on the far end side of the frame, assume that user is
				// moving forward and animate it to the start of the visible frame, and vice versa.
				if (centeredNav) {
					self.toCenter(index, immediate);
				} else if (index >= rel.lastItem) {
					self.toStart(index, immediate);
				} else if (index <= rel.firstItem) {
					self.toEnd(index, immediate);
				} else {
					resetCycle();
				}
			}
		};

		/**
		 * Activates a page.
		 *
		 * @param {Int}  index     Page index, starting from 0.
		 * @param {Bool} immediate Whether to reposition immediately without animation.
		 *
		 * @return {Void}
		 */
		self.activatePage = function (index, immediate) {
			if (isNumber(index)) {
				slideTo(pages[within(index, 0, pages.length - 1)], immediate);
			}
		};

		/**
		 * Return relative positions of items based on their visibility within FRAME.
		 *
		 * @param {Int} slideePos Position of SLIDEE.
		 *
		 * @return {Void}
		 */
		function getRelatives(slideePos) {
			slideePos = within(isNumber(slideePos) ? slideePos : pos.dest, pos.start, pos.end);

			var relatives = {};
			var centerOffset = forceCenteredNav ? 0 : frameSize / 2;

			// Determine active page
			if (!parallax) {
				for (var p = 0, pl = pages.length; p < pl; p++) {
					if (slideePos >= pos.end || p === pages.length - 1) {
						relatives.activePage = pages.length - 1;
						break;
					}

					if (slideePos <= pages[p] + centerOffset) {
						relatives.activePage = p;
						break;
					}
				}
			}

			// Relative item indexes
			if (itemNav) {
				var first = false;
				var last = false;
				var center = false;

				// From start
				for (var i = 0, il = items.length; i < il; i++) {
					// First item
					if (first === false && slideePos <= items[i].start + items[i].half) {
						first = i;
					}

					// Center item
					if (center === false && slideePos <= items[i].center + items[i].half) {
						center = i;
					}

					// Last item
					if (i === il - 1 || slideePos <= items[i].end + items[i].half) {
						last = i;
						break;
					}
				}

				// Safe assignment, just to be sure the false won't be returned
				relatives.firstItem = isNumber(first) ? first : 0;
				relatives.centerItem = isNumber(center) ? center : relatives.firstItem;
				relatives.lastItem = isNumber(last) ? last : relatives.centerItem;
			}

			return relatives;
		}

		/**
		 * Update object with relative positions.
		 *
		 * @param {Int} newPos
		 *
		 * @return {Void}
		 */
		function updateRelatives(newPos) {
			$.extend(rel, getRelatives(newPos));
		}

		/**
		 * Disable navigation buttons when needed.
		 *
		 * Adds disabledClass, and when the button is <button> or <input>, activates :disabled state.
		 *
		 * @return {Void}
		 */
		function updateButtonsState() {
			var isStart = pos.dest <= pos.start;
			var isEnd = pos.dest >= pos.end;
			var slideePosState = isStart ? 1 : isEnd ? 2 : 3;

			// Update paging buttons only if there has been a change in SLIDEE position
			if (last.slideePosState !== slideePosState) {
				last.slideePosState = slideePosState;

				if ($prevPageButton.is('button,input')) {
					$prevPageButton.prop('disabled', isStart);
				}

				if ($nextPageButton.is('button,input')) {
					$nextPageButton.prop('disabled', isEnd);
				}

				$prevPageButton.add($backwardButton)[isStart ? 'addClass' : 'removeClass'](o.disabledClass);
				$nextPageButton.add($forwardButton)[isEnd ? 'addClass' : 'removeClass'](o.disabledClass);
			}

			// Forward & Backward buttons need a separate state caching because we cannot "property disable"
			// them while they are being used, as disabled buttons stop emitting mouse events.
			if (last.fwdbwdState !== slideePosState && dragging.released) {
				last.fwdbwdState = slideePosState;

				if ($backwardButton.is('button,input')) {
					$backwardButton.prop('disabled', isStart);
				}

				if ($forwardButton.is('button,input')) {
					$forwardButton.prop('disabled', isEnd);
				}
			}

			// Item navigation
			if (itemNav) {
				var isFirst = rel.activeItem === 0;
				var isLast = rel.activeItem >= items.length - 1;
				var itemsButtonState = isFirst ? 1 : isLast ? 2 : 3;

				if (last.itemsButtonState !== itemsButtonState) {
					last.itemsButtonState = itemsButtonState;

					if ($prevButton.is('button,input')) {
						$prevButton.prop('disabled', isFirst);
					}

					if ($nextButton.is('button,input')) {
						$nextButton.prop('disabled', isLast);
					}

					$prevButton[isFirst ? 'addClass' : 'removeClass'](o.disabledClass);
					$nextButton[isLast ? 'addClass' : 'removeClass'](o.disabledClass);
				}
			}
		}

		/**
		 * Resume cycling.
		 *
		 * @param {Int} priority Resume pause with priority lower or equal than this. Used internally for pauseOnHover.
		 *
		 * @return {Void}
		 */
		self.resume = function (priority) {
			if (!o.cycleBy || !o.cycleInterval || o.cycleBy === 'items' && !items[0] || priority < self.isPaused) {
				return;
			}

			self.isPaused = 0;

			if (cycleID) {
				cycleID = clearTimeout(cycleID);
			} else {
				trigger('resume');
			}

			cycleID = setTimeout(function () {
				trigger('cycle');
				switch (o.cycleBy) {
					case 'items':
						self.activate(rel.activeItem >= items.length - 1 ? 0 : rel.activeItem + 1);
						break;

					case 'pages':
						self.activatePage(rel.activePage >= pages.length - 1 ? 0 : rel.activePage + 1);
						break;
				}
			}, o.cycleInterval);
		};

		/**
		 * Pause cycling.
		 *
		 * @param {Int} priority Pause priority. 100 is default. Used internally for pauseOnHover.
		 *
		 * @return {Void}
		 */
		self.pause = function (priority) {
			if (priority < self.isPaused) {
				return;
			}

			self.isPaused = priority || 100;

			if (cycleID) {
				cycleID = clearTimeout(cycleID);
				trigger('pause');
			}
		};

		/**
		 * Toggle cycling.
		 *
		 * @return {Void}
		 */
		self.toggle = function () {
			self[cycleID ? 'pause' : 'resume']();
		};

		/**
		 * Updates a signle or multiple option values.
		 *
		 * @param {Mixed} name  Name of the option that should be updated, or object that will extend the options.
		 * @param {Mixed} value New option value.
		 *
		 * @return {Void}
		 */
		self.set = function (name, value) {
			if ($.isPlainObject(name)) {
				$.extend(o, name);
			} else if (o.hasOwnProperty(name)) {
				o[name] = value;
			}
		};

		/**
		 * Add one or multiple items to the SLIDEE end, or a specified position index.
		 *
		 * @param {Mixed} element Node element, or HTML string.
		 * @param {Int}   index   Index of a new item position. By default item is appended at the end.
		 *
		 * @return {Void}
		 */
		self.add = function (element, index) {
			var $element = $(element);

			if (itemNav) {
				// Insert the element(s)
				if (type(index) === 'undefined' || !items[0]) {
					$element.appendTo($slidee);
				} else if (items.length) {
					$element.insertBefore(items[index].el);
				}

				// Adjust the activeItem index
				if (index <= rel.activeItem) {
					last.active = rel.activeItem += $element.length;
				}
			} else {
				$slidee.append($element);
			}

			// Reload
			load();
		};

		/**
		 * Remove an item from SLIDEE.
		 *
		 * @param {Mixed} element Item index, or DOM element.
		 * @param {Int}   index   Index of a new item position. By default item is appended at the end.
		 *
		 * @return {Void}
		 */
		self.remove = function (element) {
			if (itemNav) {
				var index = getRelativeIndex(element);

				if (index > -1) {
					// Remove the element
					$items.eq(index).remove();

					// If the current item is being removed, activate new one after reload
					var reactivate = index === rel.activeItem && !(forceCenteredNav && o.activateMiddle);

					// Adjust the activeItem index
					if (index < rel.activeItem || rel.activeItem >= items.length - 1) {
						last.active = --rel.activeItem;
					}

					// Reload
					load();

					// Activate new item at the removed position if the current active got removed
					if (reactivate) {
						self.activate(rel.activeItem);
					}
				}
			} else {
				$(element).remove();
				load();
			}
		};

		/**
		 * Helps re-arranging items.
		 *
		 * @param  {Mixed} item     Item DOM element, or index starting at 0. Use negative numbers to select items from the end.
		 * @param  {Mixed} position Item insertion anchor. Accepts same input types as item argument.
		 * @param  {Bool}  after    Insert after instead of before the anchor.
		 *
		 * @return {Void}
		 */
		function moveItem(item, position, after) {
			item = getRelativeIndex(item);
			position = getRelativeIndex(position);

			// Move only if there is an actual change requested
			if (item > -1 && position > -1 && item !== position && (!after || position !== item - 1) && (after || position !== item + 1)) {
				$items.eq(item)[after ? 'insertAfter' : 'insertBefore'](items[position].el);

				var shiftStart = item < position ? item : (after ? position : position - 1);
				var shiftEnd = item > position ? item : (after ? position + 1 : position);
				var shiftsUp = item > position;

				// Update activeItem index
				if (item === rel.activeItem) {
					last.active = rel.activeItem = after ? (shiftsUp ? position + 1 : position) : (shiftsUp ? position : position - 1);
				} else if (rel.activeItem > shiftStart && rel.activeItem < shiftEnd) {
					last.active = rel.activeItem += shiftsUp ? 1 : -1;
				}

				// Reload
				load();
			}
		}

		/**
		 * Move item after the target anchor.
		 *
		 * @param  {Mixed} item     Item to be moved. Can be DOM element or item index.
		 * @param  {Mixed} position Target position anchor. Can be DOM element or item index.
		 *
		 * @return {Void}
		 */
		self.moveAfter = function (item, position) {
			moveItem(item, position, 1);
		};

		/**
		 * Move item before the target anchor.
		 *
		 * @param  {Mixed} item     Item to be moved. Can be DOM element or item index.
		 * @param  {Mixed} position Target position anchor. Can be DOM element or item index.
		 *
		 * @return {Void}
		 */
		self.moveBefore = function (item, position) {
			moveItem(item, position);
		};

		/**
		 * Registers callbacks.
		 *
		 * @param  {Mixed} name  Event name, or callbacks map.
		 * @param  {Mixed} fn    Callback, or an array of callback functions.
		 *
		 * @return {Void}
		 */
		self.on = function (name, fn) {
			// Callbacks map
			if (type(name) === 'object') {
				for (var key in name) {
					if (name.hasOwnProperty(key)) {
						self.on(key, name[key]);
					}
				}
			// Callback
			} else if (type(fn) === 'function') {
				var names = name.split(' ');
				for (var n = 0, nl = names.length; n < nl; n++) {
					callbacks[names[n]] = callbacks[names[n]] || [];
					if (callbackIndex(names[n], fn) === -1) {
						callbacks[names[n]].push(fn);
					}
				}
			// Callbacks array
			} else if (type(fn) === 'array') {
				for (var f = 0, fl = fn.length; f < fl; f++) {
					self.on(name, fn[f]);
				}
			}
		};

		/**
		 * Remove one or all callbacks.
		 *
		 * @param  {String} name Event name.
		 * @param  {Mixed}  fn   Callback, or an array of callback functions. Omit to remove all callbacks.
		 *
		 * @return {Void}
		 */
		self.off = function (name, fn) {
			if (fn instanceof Array) {
				for (var f = 0, fl = fn.length; f < fl; f++) {
					self.off(name, fn[f]);
				}
			} else {
				var names = name.split(' ');
				for (var n = 0, nl = names.length; n < nl; n++) {
					callbacks[names[n]] = callbacks[names[n]] || [];
					if (type(fn) === 'undefined') {
						callbacks[names[n]].length = 0;
					} else {
						var index = callbackIndex(names[n], fn);
						if (index !== -1) {
							callbacks[names[n]].splice(index, 1);
						}
					}
				}
			}
		};

		/**
		 * Returns callback array index.
		 *
		 * @param  {String}   name Event name.
		 * @param  {Function} fn   Function
		 *
		 * @return {Int} Callback array index, or -1 if isn't registered.
		 */
		function callbackIndex(name, fn) {
			for (var i = 0, l = callbacks[name].length; i < l; i++) {
				if (callbacks[name][i] === fn) {
					return i;
				}
			}
			return -1;
		}

		/**
		 * Reset next cycle timeout.
		 *
		 * @return {Void}
		 */
		function resetCycle() {
			if (dragging.released && !self.isPaused) {
				self.resume();
			}
		}

		/**
		 * Calculate SLIDEE representation of handle position.
		 *
		 * @param  {Int} handlePos
		 *
		 * @return {Int}
		 */
		function handleToSlidee(handlePos) {
			return Math.round(within(handlePos, hPos.start, hPos.end) / hPos.end * (pos.end - pos.start)) + pos.start;
		}

		/**
		 * Keeps track of a dragging delta history.
		 *
		 * @return {Void}
		 */
		function draggingHistoryTick() {
			// Looking at this, I know what you're thinking :) But as we need only 4 history states, doing it this way
			// as opposed to a proper loop is ~25 bytes smaller (when minified with GCC), a lot faster, and doesn't
			// generate garbage. The loop version would create 2 new variables on every tick. Unexaptable!
			dragging.history[0] = dragging.history[1];
			dragging.history[1] = dragging.history[2];
			dragging.history[2] = dragging.history[3];
			dragging.history[3] = dragging.delta;
		}

		/**
		 * Initialize continuous movement.
		 *
		 * @return {Void}
		 */
		function continuousInit(source) {
			dragging.released = 0;
			dragging.source = source;
			dragging.slidee = source === 'slidee';
		}

		/**
		 * Dragging initiator.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function dragInit(event) {
			// Ignore when already in progress
			if (dragging.init) {
				return;
			}

			var isTouch = event.type === 'touchstart';
			var source = event.data.source;
			var isSlidee = source === 'slidee';

			// Handle dragging conditions
			if (source === 'handle' && (!o.dragHandle || hPos.start === hPos.end)) {
				return;
			}

			// SLIDEE dragging conditions
			if (isSlidee && !(isTouch ? o.touchDragging : o.mouseDragging && event.which < 2)) {
				return;
			}

			if (!isTouch) {
				stopDefault(event, 1);
			}

			// Reset dragging object
			continuousInit(source);

			// Properties used in dragHandler
			dragging.$source = $(event.target);
			dragging.init = 0;
			dragging.touch = isTouch;
			dragging.pointer = isTouch ? event.originalEvent.touches[0] : event;
			dragging.initX = dragging.pointer.pageX;
			dragging.initY = dragging.pointer.pageY;

			dragging.initPos = isSlidee ? pos.cur : hPos.cur;
			dragging.start = +new Date();
			dragging.time = 0;
			dragging.path = 0;
			dragging.pathToInit = isSlidee ? isTouch ? 50 : 10 : 0;
			dragging.history = [0, 0, 0, 0];
			dragging.initLoc = dragging[o.horizontal ? 'initX' : 'initY'];
			dragging.deltaMin = isSlidee ? -dragging.initLoc : -hPos.cur;
			dragging.deltaMax = isSlidee ? document[o.horizontal ? 'width' : 'height'] - dragging.initLoc : hPos.end - hPos.cur;

			// Add dragging class
			(isSlidee ? $slidee : $handle).addClass(o.draggedClass);

			// Bind dragging events
			$doc.on(isTouch ? dragTouchEvents : dragMouseEvents, dragHandler);

			// Keep track of a dragging path history. This is later used in the
			// dragging release swing calculation when dragging SLIDEE.
			if (isSlidee) {
				historyID = setInterval(draggingHistoryTick, 10);
			}
		}

		/**
		 * Handler for dragging scrollbar handle or SLIDEE.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function dragHandler(event) {
			dragging.released = event.type === 'mouseup' || event.type === 'touchend';
			dragging.pointer = dragging.touch ? event.originalEvent[dragging.released ? 'changedTouches' : 'touches'][0] : event;
			dragging.pathX = dragging.pointer.pageX - dragging.initX;
			dragging.pathY = dragging.pointer.pageY - dragging.initY;
			dragging.pathTotal = Math.sqrt(Math.pow(dragging.pathX, 2) + Math.pow(dragging.pathY, 2));
			dragging.delta = within(o.horizontal ? dragging.pathX : dragging.pathY, dragging.deltaMin, dragging.deltaMax);

			// Initialization
			if (!dragging.init && dragging.pathTotal > dragging.pathToInit) {
				if (dragging.slidee) {
					// If path has reached the pathToInit value, but in a wrong direction, cancel dragging
					if (o.horizontal ? Math.abs(dragging.pathX) < Math.abs(dragging.pathY) : Math.abs(dragging.pathX) > Math.abs(dragging.pathY)) {
						dragEnd();
						return;
					}
					// Disable click on a source element, as it is unwelcome when dragging SLIDEE
					dragging.$source.on(clickEvent, disableOneEvent);
				}
				// Mark dragging as initiated
				dragging.init = 1;
				// Pause ongoing cycle
				self.pause(1);
				// Trigger moveStart event
				trigger('moveStart');
			}

			// Proceed when initialized
			if (dragging.init) {
				if (dragging.released) {
					if (!dragging.touch) {
						stopDefault(event);
					}

					dragging.init = 0;

					// Adjust path with a swing on mouse release
					if (o.releaseSwing && dragging.slidee) {
						dragging.swing = (dragging.delta - dragging.history[0]) / 40 * 300;
						dragging.delta += dragging.swing;
						dragging.tweese = Math.abs(dragging.swing) > 10;
					}
				} else {
					stopDefault(event);
				}

				slideTo(dragging.slidee ? Math.round(dragging.initPos - dragging.delta) : handleToSlidee(dragging.initPos + dragging.delta));
			}

			// Stop and cleanup after dragging
			if (dragging.released) {
				dragEnd();
			}
		}

		/**
		 * Stops dragging and cleans up after it.
		 *
		 * @return {Void}
		 */
		function dragEnd() {
			clearInterval(historyID);
			$doc.off(dragging.touch ? dragTouchEvents : dragMouseEvents, dragHandler);
			(dragging.slidee ? $slidee : $handle).removeClass(o.draggedClass);

			// Resume ongoing cycle
			self.resume(1);

			// Normally, this is triggered in render(), but if there
			// is nothing to render, we have to do it manually here.
			if (dragging.init && pos.cur === pos.dest) {
				trigger('moveEnd');
			}
		}

		/**
		 * Continuous movement cleanup on mouseup.
		 *
		 * @return {Void}
		 */
		function movementReleaseHandler() {
			self.stop();
			$doc.off('mouseup', movementReleaseHandler);
		}

		/**
		 * Buttons navigation handler.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function buttonsHandler(event) {
			/*jshint validthis:true */
			stopDefault(event);
			switch (this) {
				case $forwardButton[0]:
				case $backwardButton[0]:
					self.moveBy($forwardButton.is(this) ? o.moveBy : -o.moveBy);
					$doc.on('mouseup', movementReleaseHandler);
					break;

				case $prevButton[0]:
					self.prev();
					break;

				case $nextButton[0]:
					self.next();
					break;

				case $prevPageButton[0]:
					self.prevPage();
					break;

				case $nextPageButton[0]:
					self.nextPage();
					break;
			}
		}

		/**
		 * Mouse wheel delta normalization.
		 *
		 * @param  {Event} event
		 *
		 * @return {Int}
		 */
		function normalizeWheelDelta(event) {
			return within(-event.wheelDelta || event.detail, -1, 1);
		}

		/**
		 * Mouse scrolling handler.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function scrollHandler(event) {
			// Ignore if there is no scrolling to be done
			if (!o.scrollBy || pos.start === pos.end) {
				return;
			}

			stopDefault(event, 1);

			var delta = normalizeWheelDelta(event.originalEvent);
			if (itemNav) {
				self[centeredNav ? 'toCenter' : 'toStart'](
					within((centeredNav ? rel.centerItem : rel.firstItem) + o.scrollBy * delta, 0, items.length)
				);
			} else {
				self.slideBy(o.scrollBy * delta);
			}
		}

		/**
		 * Scrollbar click handler.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function scrollbarHandler(event) {
			// Only clicks on scroll bar. Ignore the handle.
			if (o.clickBar && event.target === $sb[0]) {
				stopDefault(event);
				// Calculate new handle position and sync SLIDEE to it
				slideTo(handleToSlidee((o.horizontal ? event.pageX - $sb.offset().left : event.pageY - $sb.offset().top) - handleSize / 2));
			}
		}

		/**
		 * Keyboard input handler.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function keyboardHandler(event) {
			if (!o.keyboardNavBy) {
				return;
			}

			switch (event.which) {
				// Left or Up
				case o.horizontal ? 37 : 38:
					stopDefault(event);
					self[o.keyboardNavBy === 'pages' ? 'prevPage' : 'prev']();
					break;

				// Right or Down
				case o.horizontal ? 39 : 40:
					stopDefault(event);
					self[o.keyboardNavBy === 'pages' ? 'nextPage' : 'next']();
					break;
			}
		}

		/**
		 * Click on item activation handler.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function activateHandler() {
			/*jshint validthis:true */
			// Accept only events from direct SLIDEE children.
			if (this.parentNode === $slidee[0]) {
				self.activate(this);
			}
		}

		/**
		 * Click on page button handler.
		 *
		 * @param {Event} event
		 *
		 * @return {Void}
		 */
		function activatePageHandler() {
			/*jshint validthis:true */
			// Accept only events from direct pages bar children.
			if (this.parentNode === $pb[0]) {
				self.activatePage($pages.index(this));
			}
		}

		/**
		 * Pause on hover handler.
		 *
		 * @param  {Event} event
		 *
		 * @return {Void}
		 */
		function pauseOnHoverHandler(event) {
			if (o.pauseOnHover) {
				self[event.type === 'mouseenter' ? 'pause' : 'resume'](2);
			}
		}

		/**
		 * Trigger callbacks for event.
		 *
		 * @param  {String} name Event name.
		 * @param  {Mixed}  argX Arguments passed to callbacks.
		 *
		 * @return {Void}
		 */
		function trigger(name, arg1) {
			if (callbacks[name]) {
				for (i = 0, l = callbacks[name].length; i < l; i++) {
					callbacks[name][i].call(self, name, arg1);
				}
			}
		}

		/**
		 * Destroys instance and everything it created.
		 *
		 * @return {Void}
		 */
		self.destroy = function () {
			// Unbind all events
			$doc
				.add($scrollSource)
				.add($handle)
				.add($sb)
				.add($pb)
				.add($forwardButton)
				.add($backwardButton)
				.add($prevButton)
				.add($nextButton)
				.add($prevPageButton)
				.add($nextPageButton)
				.unbind('.' + namespace);

			// Remove classes
			$prevButton
				.add($nextButton)
				.add($prevPageButton)
				.add($nextPageButton)
				.removeClass(o.disabledClass);

			if ($items) {
				$items.eq(rel.activeItem).removeClass(o.activeClass);
			}

			// Remove page items
			$pb.empty();

			if (!parallax) {
				// Unbind events from frame
				$frame.unbind('.' + namespace);
				// Reset SLIDEE and handle positions
				$slidee.add($handle).css(transform || (o.horizontal ? 'left' : 'top'), transform ? 'none' : 0);
				// Remove the instance from element data storage
				$.removeData(frame, namespace);
			}

			// Reset initialized status and return the instance
			initialized = 0;
			return self;
		};

		/**
		 * Initialize.
		 *
		 * @return {Object}
		 */
		self.init = function () {
			if (initialized) {
				return;
			}

			// Register callbacks map
			self.on(callbackMap);

			// Set required styles
			var $movables = $handle;
			if (!parallax) {
				$movables = $movables.add($slidee);
				$frame.css('overflow', 'hidden');
				if (!transform && $frame.css('position') === 'static') {
					$frame.css('position', 'relative');
				}
			}
			if (transform) {
				if (gpuAcceleration) {
					$movables.css(transform, gpuAcceleration);
				}
			} else {
				if ($sb.css('position') === 'static') {
					$sb.css('position', 'relative');
				}
				$movables.css({ position: 'absolute' });
			}

			// Navigation buttons
			if (o.forward) {
				$forwardButton.on(mouseDownEvent, buttonsHandler);
			}
			if (o.backward) {
				$backwardButton.on(mouseDownEvent, buttonsHandler);
			}
			if (o.prev) {
				$prevButton.on(clickEvent, buttonsHandler);
			}
			if (o.next) {
				$nextButton.on(clickEvent, buttonsHandler);
			}
			if (o.prevPage) {
				$prevPageButton.on(clickEvent, buttonsHandler);
			}
			if (o.nextPage) {
				$nextPageButton.on(clickEvent, buttonsHandler);
			}

			// Scrolling navigation
			$scrollSource.on('DOMMouseScroll.' + namespace + ' mousewheel.' + namespace, scrollHandler);

			// Clicking on scrollbar navigation
			if ($sb[0]) {
				$sb.on(clickEvent, scrollbarHandler);
			}

			// Click on items navigation
			if (itemNav && o.activateOn) {
				$frame.on(o.activateOn + '.' + namespace, '*', activateHandler);
			}

			// Pages navigation
			if ($pb[0] && o.activatePageOn) {
				$pb.on(o.activatePageOn + '.' + namespace, '*', activatePageHandler);
			}

			// Dragging navigation
			$dragSource.on(dragInitEvents, { source: 'slidee' }, dragInit);

			// Scrollbar dragging navigation
			if ($handle) {
				$handle.on(dragInitEvents, { source: 'handle' }, dragInit);
			}

			// Keyboard navigation
			$doc.bind('keydown.' + namespace, keyboardHandler);

			if (!parallax) {
				// Pause on hover
				$frame.on('mouseenter.' + namespace + ' mouseleave.' + namespace, pauseOnHoverHandler);
				// Reset native FRAME element scroll
				$frame.on('scroll.' + namespace, resetScroll);
			}

			// Load
			load();

			// Activate requested position
			if (itemNav) {
				activate(o.startAt);
				self[centeredNav ? 'toCenter' : 'toStart'](o.startAt);
			} else {
				slideTo(o.startAt, 1);
			}

			// Initiate automatic cycling
			if (o.cycleBy && !parallax) {
				self[o.startPaused ? 'pause' : 'resume']();
			}

			// Mark instance as initialized
			initialized = 1;

			// Return instance
			return self;
		};
	}

	/**
	 * Return type of the value.
	 *
	 * @param  {Mixed} value
	 *
	 * @return {String}
	 */
	function type(value) {
		if (value == null) {
			return String(value);
		}

		if (typeof value === 'object' || typeof value === 'function') {
			return Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || 'object';
		}

		return typeof value;
	}

	/**
	 * Event preventDefault & stopPropagation helper.
	 *
	 * @param {Event} event     Event object.
	 * @param {Bool}  noBubbles Cancel event bubbling.
	 *
	 * @return {Void}
	 */
	function stopDefault(event, noBubbles) {
		event.preventDefault();
		if (noBubbles) {
			event.stopPropagation();
		}
	}

	/**
	 * Disables an event it was triggered on and unbinds itself.
	 *
	 * @param  {Event} event
	 *
	 * @return {Void}
	 */
	function disableOneEvent(event) {
		/*jshint validthis:true */
		stopDefault(event, 1);
		$(this).off(event.type, disableOneEvent);
	}

	/**
	 * Resets native element scroll values to 0.
	 *
	 * @return {Void}
	 */
	function resetScroll() {
		/*jshint validthis:true */
		this.scrollLeft = 0;
		this.scrollTop = 0;
	}

	/**
	 * Check if variable is a number.
	 *
	 * @param {Mixed} value
	 *
	 * @return {Boolean}
	 */
	function isNumber(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	}

	/**
	 * Parse style to pixels.
	 *
	 * @param {Object}   $item    jQuery object with element.
	 * @param {Property} property CSS property to get the pixels from.
	 *
	 * @return {Int}
	 */
	function getPx($item, property) {
		return parseInt($item.css(property), 10) || 0;
	}

	/**
	 * Make sure that number is within the limits.
	 *
	 * @param {Number} number
	 * @param {Number} min
	 * @param {Number} max
	 *
	 * @return {Number}
	 */
	function within(number, min, max) {
		return number < min ? min : number > max ? max : number;
	}

	// Local WindowAnimationTiming interface polyfill
	(function (w) {
		var vendors = ['moz', 'webkit', 'o'];
		var lastTime = 0;

		// For a more accurate WindowAnimationTiming interface implementation, ditch the native
		// requestAnimationFrame when cancelAnimationFrame is not present (older versions of Firefox)
		for(var i = 0, l = vendors.length; i < l && !cAF; ++i) {
			cAF = w[vendors[i]+'CancelAnimationFrame'] || w[vendors[i]+'CancelRequestAnimationFrame'];
			rAF = cAF && w[vendors[i]+'RequestAnimationFrame'];
		}

		if (!cAF) {
			rAF = function (callback) {
				var currTime = +new Date();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				lastTime = currTime + timeToCall;
				return w.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
			};

			cAF = function (id) {
				clearTimeout(id);
			};
		}
	}(window));

	// Feature detects
	(function () {
		var prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
		var el = document.createElement('div');

		function testProp(prop) {
			for (var p = 0, pl = prefixes.length; p < pl; p++) {
				var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
				if (el.style[prefixedProp] !== undefined) {
					return prefixedProp;
				}
			}
		}

		// Global support indicators
		transform = testProp('transform');
		gpuAcceleration = testProp('perspective') ? 'translateZ(0) ' : '';
	}());

	// Expose class globally
	w[className] = Sly;

	// jQuery proxy
	$.fn[pluginName] = function (options, callbackMap) {
		var method, methodArgs;

		// Attributes logic
		if (!$.isPlainObject(options)) {
			if (type(options) === 'string' || options === false) {
				method = options === false ? 'destroy' : options;
				methodArgs = Array.prototype.slice.call(arguments, 1);
			}
			options = {};
		}

		// Apply to all elements
		return this.each(function (i, element) {
			// Call with prevention against multiple instantiations
			var plugin = $.data(element, namespace);

			if (!plugin && !method) {
				// Create a new object if it doesn't exist yet
				plugin = $.data(element, namespace, new Sly(element, options, callbackMap).init());
			} else if (plugin && method) {
				// Call method
				if (plugin[method]) {
					plugin[method].apply(plugin, methodArgs);
				}
			}
		});
	};

	// Default options
	Sly.defaults = {
		horizontal: 0, // Switch to horizontal mode.

		// Item based navigation
		itemNav:      null, // Item navigation type. Can be: 'basic', 'centered', 'forceCentered'.
		itemSelector: null, // Select only items that match this selector.
		smart:        0,    // Repositions the activated item to help with further navigation.
		activateOn:   null, // Activate an item on this event. Can be: 'click', 'mouseenter', ...
		activateMiddle: 0,  // Always activate the item in the middle of the FRAME. forceCentered only.

		// Scrolling
		scrollSource: null, // Element for catching the mouse wheel scrolling. Default is FRAME.
		scrollBy:     0,    // Pixels or items to move per one mouse scroll. 0 to disable scrolling.

		// Dragging
		dragSource:    null, // Selector or DOM element for catching dragging events. Default is FRAME.
		mouseDragging: 0,    // Enable navigation by dragging the SLIDEE with mouse cursor.
		touchDragging: 0,    // Enable navigation by dragging the SLIDEE with touch events.
		releaseSwing:  0,    // Ease out on dragging swing release.
		swingSpeed:    0.2,  // Swing synchronization speed, where: 1 = instant, 0 = infinite.
		elasticBounds: 0,    // Stretch SLIDEE position limits when dragging past FRAME boundaries.

		// Scrollbar
		scrollBar:     null, // Selector or DOM element for scrollbar container.
		dragHandle:    0,    // Whether the scrollbar handle should be draggable.
		dynamicHandle: 0,    // Scrollbar handle represents the ratio between hidden and visible content.
		minHandleSize: 50,   // Minimal height or width (depends on sly direction) of a handle in pixels.
		clickBar:      0,    // Enable navigation by clicking on scrollbar.
		syncSpeed:     0.5,  // Handle => SLIDEE synchronization speed, where: 1 = instant, 0 = infinite.

		// Pagesbar
		pagesBar:       null, // Selector or DOM element for pages bar container.
		activatePageOn: null, // Event used to activate page. Can be: click, mouseenter, ...
		pageBuilder:          // Page item generator.
			function (index) {
				return '<li>' + (index + 1) + '</li>';
			},

		// Navigation buttons
		forward:  null, // Selector or DOM element for "forward movement" button.
		backward: null, // Selector or DOM element for "backward movement" button.
		prev:     null, // Selector or DOM element for "previous item" button.
		next:     null, // Selector or DOM element for "next item" button.
		prevPage: null, // Selector or DOM element for "previous page" button.
		nextPage: null, // Selector or DOM element for "next page" button.

		// Automated cycling
		cycleBy:       null, // Enable automatic cycling by 'items' or 'pages'.
		cycleInterval: 5000, // Delay between cycles in milliseconds.
		pauseOnHover:  0,    // Pause cycling when mouse hovers over the FRAME.
		startPaused:   0,    // Whether to start in paused sate.

		// Mixed options
		moveBy:        300,     // Speed in pixels per second used by forward and backward buttons.
		speed:         0,       // Animations speed in milliseconds. 0 to disable animations.
		easing:        'swing', // Easing for duration based (tweening) animations.
		startAt:       0,       // Starting offset in pixels or items.
		keyboardNavBy: null,    // Enable keyboard navigation by 'items' or 'pages'.

		// Classes
		draggedClass:  'dragged',  // Class for dragged elements (like SLIDEE or scrollbar handle).
		activeClass:   'active',   // Class for active items and pages.
		disabledClass: 'disabled'  // Class for disabled navigation elements.
	};
}(jQuery, window));

/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */

;(function($){

	var plugin = {};
	
	var defaults = {
		
		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,
		
		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,
		
		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,
		
		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		
		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,
		
		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {}
	}

	$.fn.bxSlider = function(options){
		
		if(this.length == 0) return this;
		
		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}
		
		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		
		
		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */
		
		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				if($(this).is('img')) $(this).attr('src', $(this).attr('src') + '?timestamp=' + new Date().getTime());
				$(this).load(function(){
					setTimeout(function(){
						if(++count == total) callback();
					}, 0)
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true, start the show
			if (slider.settings.auto && slider.settings.autoStart) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}
		
		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}
			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}
		
		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}
		
		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width();
					slidesShowing = Math.floor(slider.viewport.width() / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}
		
		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = slider.children.length / getMoveBy();
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}
		
		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}
		
		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}
		
		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int) 
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int) 
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}
		
		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}
		
		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.delegate('a', 'click', clickPagerBind);
		}
		
		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}
		
		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
			slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}
		
		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}
		
		/**
		 * Click next binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}
		
		/**
		 * Click prev binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}
		
		/**
		 * Click start binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}
		
		/**
		 * Click stop binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
			// if clicked pager link is not active, continue with the goToSlide call
			if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
			e.preventDefault();
		}
		
		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int) 
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}
		
		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
				else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}
		
		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state 
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control 
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}
		
		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}
		
		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}
		
		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}
		
		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}
		
		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}
		
		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}
		
		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}
		
		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event) 
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
			}
		}
		
		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */
		
		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int) 
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string) 
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', 50);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}
				
				/* If the position doesn't exist 
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}
		
		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}
		
		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}
		
		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean) 
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}
		
		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean) 
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}
		
		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}
		
		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}
		
		init();
		
		// returns the current jQuery object
		return this;
	}

})(jQuery);

/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2013 Happyworm Ltd
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Mark J Panaghiston
 * Version: 2.4.0
 * Date: 5th June 2013
 */

/* Code verified using http://www.jshint.com/ */
/*jshint asi:false, bitwise:false, boss:false, browser:true, curly:true, debug:false, eqeqeq:true, eqnull:false, evil:false, forin:false, immed:false, jquery:true, laxbreak:false, newcap:true, noarg:true, noempty:true, nonew:true, onevar:false, passfail:false, plusplus:false, regexp:false, undef:true, sub:false, strict:false, white:false, smarttabs:true */
/*global define:false, ActiveXObject:false, alert:false */

/* Support for Zepto 1.0 compiled with optional data module.
 * For AMD support, you will need to manually switch the 2 lines in the code below.
 * Search terms: "jQuery Switch" and "Zepto Switch"
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory); // jQuery Switch
		// define(['zepto'], factory); // Zepto Switch
	} else {
		// Browser globals
		if(root.jQuery) { // Use jQuery if available
			factory(root.jQuery);
		} else { // Otherwise, use Zepto
			factory(root.Zepto);
		}
	}
}(this, function ($, undefined) {

	// Adapted from jquery.ui.widget.js (1.8.7): $.widget.bridge - Tweaked $.data(this,XYZ) to $(this).data(XYZ) for Zepto
	$.fn.jPlayer = function( options ) {
		var name = "jPlayer";
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $(this).data( name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $(this).data( name );
				if ( instance ) {
					// instance.option( options || {} )._init(); // Orig jquery.ui.widget.js code: Not recommend for jPlayer. ie., Applying new options to an existing instance (via the jPlayer constructor) and performing the _init(). The _init() is what concerns me. It would leave a lot of event handlers acting on jPlayer instance and the interface.
					instance.option( options || {} ); // The new constructor only changes the options. Changing options only has basic support atm.
				} else {
					$(this).data( name, new $.jPlayer( options, this ) );
				}
			});
		}

		return returnValue;
	};

	$.jPlayer = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this.element = $(element);
			this.options = $.extend(true, {},
				this.options,
				options
			);
			var self = this;
			this.element.bind( "remove.jPlayer", function() {
				self.destroy();
			});
			this._init();
		}
	};
	// End of: (Adapted from jquery.ui.widget.js (1.8.7))

	// Zepto is missing one of the animation methods.
	if(typeof $.fn.stop !== 'function') {
		$.fn.stop = function() {};
	}

	// Emulated HTML5 methods and properties
	$.jPlayer.emulateMethods = "load play pause";
	$.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
	$.jPlayer.emulateOptions = "muted volume";

	// Reserved event names generated by jPlayer that are not part of the HTML5 Media element spec
	$.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";

	// Events generated by jPlayer
	$.jPlayer.event = {};
	$.each(
		[
			'ready',
			'flashreset', // Similar to the ready event if the Flash solution is set to display:none and then shown again or if it's reloaded for another reason by the browser. For example, using CSS position:fixed on Firefox for the full screen feature.
			'resize', // Occurs when the size changes through a full/restore screen operation or if the size/sizeFull options are changed.
			'repeat', // Occurs when the repeat status changes. Usually through clicks on the repeat button of the interface.
			'click', // Occurs when the user clicks on one of the following: poster image, html video, flash video.
			'error', // Event error code in event.jPlayer.error.type. See $.jPlayer.error
			'warning', // Event warning code in event.jPlayer.warning.type. See $.jPlayer.warning

			// Other events match HTML5 spec.
			'loadstart',
			'progress',
			'suspend',
			'abort',
			'emptied',
			'stalled',
			'play',
			'pause',
			'loadedmetadata',
			'loadeddata',
			'waiting',
			'playing',
			'canplay',
			'canplaythrough',
			'seeking',
			'seeked',
			'timeupdate',
			'ended',
			'ratechange',
			'durationchange',
			'volumechange'
		],
		function() {
			$.jPlayer.event[ this ] = 'jPlayer_' + this;
		}
	);

	$.jPlayer.htmlEvent = [ // These HTML events are bubbled through to the jPlayer event, without any internal action.
		"loadstart",
		// "progress", // jPlayer uses internally before bubbling.
		// "suspend", // jPlayer uses internally before bubbling.
		"abort",
		// "error", // jPlayer uses internally before bubbling.
		"emptied",
		"stalled",
		// "play", // jPlayer uses internally before bubbling.
		// "pause", // jPlayer uses internally before bubbling.
		"loadedmetadata",
		"loadeddata",
		// "waiting", // jPlayer uses internally before bubbling.
		// "playing", // jPlayer uses internally before bubbling.
		"canplay",
		"canplaythrough",
		// "seeking", // jPlayer uses internally before bubbling.
		// "seeked", // jPlayer uses internally before bubbling.
		// "timeupdate", // jPlayer uses internally before bubbling.
		// "ended", // jPlayer uses internally before bubbling.
		"ratechange"
		// "durationchange" // jPlayer uses internally before bubbling.
		// "volumechange" // jPlayer uses internally before bubbling.
	];

	$.jPlayer.pause = function() {
		$.each($.jPlayer.prototype.instances, function(i, element) {
			if(element.data("jPlayer").status.srcSet) { // Check that media is set otherwise would cause error event.
				element.jPlayer("pause");
			}
		});
	};

	// Default for jPlayer option.timeFormat
	$.jPlayer.timeFormat = {
		showHour: false,
		showMin: true,
		showSec: true,
		padHour: false,
		padMin: true,
		padSec: true,
		sepHour: ":",
		sepMin: ":",
		sepSec: ""
	};
	var ConvertTime = function() {
		this.init();
	};
	ConvertTime.prototype = {
		init: function() {
			this.options = {
				timeFormat: $.jPlayer.timeFormat
			};
		},
		time: function(s) { // function used on jPlayer.prototype._convertTime to enable per instance options.
			s = (s && typeof s === 'number') ? s : 0;

			var myTime = new Date(s * 1000),
				hour = myTime.getUTCHours(),
				min = this.options.timeFormat.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
				sec = this.options.timeFormat.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
				strHour = (this.options.timeFormat.padHour && hour < 10) ? "0" + hour : hour,
				strMin = (this.options.timeFormat.padMin && min < 10) ? "0" + min : min,
				strSec = (this.options.timeFormat.padSec && sec < 10) ? "0" + sec : sec,
				strTime = "";

			strTime += this.options.timeFormat.showHour ? strHour + this.options.timeFormat.sepHour : "";
			strTime += this.options.timeFormat.showMin ? strMin + this.options.timeFormat.sepMin : "";
			strTime += this.options.timeFormat.showSec ? strSec + this.options.timeFormat.sepSec : "";

			return strTime;
		}
	};
	var myConvertTime = new ConvertTime();
	$.jPlayer.convertTime = function(s) {
		return myConvertTime.time(s);
	};

	// Adapting jQuery 1.4.4 code for jQuery.browser. Required since jQuery 1.3.2 does not detect Chrome as webkit.
	$.jPlayer.uaBrowser = function( userAgent ) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rwebkit = /(webkit)[ \/]([\w.]+)/;
		var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
		var rmsie = /(msie) ([\w.]+)/;
		var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	};

	// Platform sniffer for detecting mobile devices
	$.jPlayer.uaPlatform = function( userAgent ) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
		var rtablet = /(ipad|playbook)/;
		var randroid = /(android)/;
		var rmobile = /(mobile)/;

		var platform = rplatform.exec( ua ) || [];
		var tablet = rtablet.exec( ua ) ||
			!rmobile.exec( ua ) && randroid.exec( ua ) ||
			[];

		if(platform[1]) {
			platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
		}

		return { platform: platform[1] || "", tablet: tablet[1] || "" };
	};

	$.jPlayer.browser = {
	};
	$.jPlayer.platform = {
	};

	var browserMatch = $.jPlayer.uaBrowser(navigator.userAgent);
	if ( browserMatch.browser ) {
		$.jPlayer.browser[ browserMatch.browser ] = true;
		$.jPlayer.browser.version = browserMatch.version;
	}
	var platformMatch = $.jPlayer.uaPlatform(navigator.userAgent);
	if ( platformMatch.platform ) {
		$.jPlayer.platform[ platformMatch.platform ] = true;
		$.jPlayer.platform.mobile = !platformMatch.tablet;
		$.jPlayer.platform.tablet = !!platformMatch.tablet;
	}

	// Internet Explorer (IE) Browser Document Mode Sniffer. Based on code at:
	// http://msdn.microsoft.com/en-us/library/cc288325%28v=vs.85%29.aspx#GetMode
	$.jPlayer.getDocMode = function() {
		var docMode;
		if ($.jPlayer.browser.msie) {
			if (document.documentMode) { // IE8 or later
				docMode = document.documentMode;
			} else { // IE 5-7
				docMode = 5; // Assume quirks mode unless proven otherwise
				if (document.compatMode) {
					if (document.compatMode === "CSS1Compat") {
						docMode = 7; // standards mode
					}
				}
			}
		}
		return docMode;
	};
	$.jPlayer.browser.documentMode = $.jPlayer.getDocMode();

	$.jPlayer.nativeFeatures = {
		init: function() {

			/* Fullscreen function naming influenced by W3C naming.
			 * No support for: Mozilla Proposal: https://wiki.mozilla.org/Gecko:FullScreenAPI
			 */

			var d = document,
				v = d.createElement('video'),
				spec = {
					// http://www.w3.org/TR/fullscreen/
					w3c: [
						'fullscreenEnabled',
						'fullscreenElement',
						'requestFullscreen',
						'exitFullscreen',
						'fullscreenchange',
						'fullscreenerror'
					],
					// https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
					moz: [
						'mozFullScreenEnabled',
						'mozFullScreenElement',
						'mozRequestFullScreen',
						'mozCancelFullScreen',
						'mozfullscreenchange',
						'mozfullscreenerror'
					],
					// http://developer.apple.com/library/safari/#documentation/WebKit/Reference/ElementClassRef/Element/Element.html
					// http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/DocumentAdditionsReference/DocumentAdditions/DocumentAdditions.html
					webkit: [
						'',
						'webkitCurrentFullScreenElement',
						'webkitRequestFullScreen',
						'webkitCancelFullScreen',
						'webkitfullscreenchange',
						''
					],
					// http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
					webkitVideo: [
						'webkitSupportsFullscreen',
						'webkitDisplayingFullscreen',
						'webkitEnterFullscreen',
						'webkitExitFullscreen',
						'',
						''
					]
				},
				specOrder = [
					'w3c',
					'moz',
					'webkit',
					'webkitVideo'
				],
				fs, i, il;

			this.fullscreen = fs = {
				support: {
					w3c: !!d[spec.w3c[0]],
					moz: !!d[spec.moz[0]],
					webkit: typeof d[spec.webkit[3]] === 'function',
					webkitVideo: typeof v[spec.webkitVideo[2]] === 'function'
				},
				used: {}
			};

			// Store the name of the spec being used and as a handy boolean.
			for(i = 0, il = specOrder.length; i < il; i++) {
				var n = specOrder[i];
				if(fs.support[n]) {
					fs.spec = n;
					fs.used[n] = true;
					break;
				}
			}

			if(fs.spec) {
				var s = spec[fs.spec];
				fs.api = {
					fullscreenEnabled: true,
					fullscreenElement: function(elem) {
						elem = elem ? elem : d; // Video element required for webkitVideo
						return elem[s[1]];
					},
					requestFullscreen: function(elem) {
						return elem[s[2]]();
					},
					exitFullscreen: function(elem) {
						elem = elem ? elem : d; // Video element required for webkitVideo
						return elem[s[3]]();
					}
				};
				fs.event = {
					fullscreenchange: s[4],
					fullscreenerror: s[5]
				};
			} else {
				fs.api = {
					fullscreenEnabled: false,
					fullscreenElement: function() {
						return null;
					},
					requestFullscreen: function() {},
					exitFullscreen: function() {}
				};
				fs.event = {};
			}
		}
	};
	$.jPlayer.nativeFeatures.init();

	// The keyboard control system.

	// The current jPlayer instance in focus.
	$.jPlayer.focus = null;

	// The list of element node names to ignore with key controls.
	$.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";

	// The function that deals with key presses.
	var keyBindings = function(event) {

		var f = $.jPlayer.focus,
			ignoreKey;

		// A jPlayer instance must be in focus. ie., keyEnabled and the last one played.
		if(f) {
			// What generated the key press?
			$.each( $.jPlayer.keyIgnoreElementNames.split(/\s+/g), function(i, name) {
				// The strings should already be uppercase.
				if(event.target.nodeName.toUpperCase() === name.toUpperCase()) {
					ignoreKey = true;
					return false; // exit each.
				}
			});
			if(!ignoreKey) {
				// See if the key pressed matches any of the bindings.
				$.each(f.options.keyBindings, function(action, binding) {
					// The binding could be a null when the default has been disabled. ie., 1st clause in if()
					if(binding && event.which === binding.key && $.isFunction(binding.fn)) {
						event.preventDefault(); // Key being used by jPlayer, so prevent default operation.
						binding.fn(f);
						return false; // exit each.
					}
				});
			}
		}
	};

	$.jPlayer.keys = function(en) {
		var event = "keydown.jPlayer";
		// Remove any binding, just in case enabled more than once.
		$(document.documentElement).unbind(event);
		if(en) {
			$(document.documentElement).bind(event, keyBindings);
		}
	};

	// Enable the global key control handler ready for any jPlayer instance with the keyEnabled option enabled.
	$.jPlayer.keys(true);

	$.jPlayer.prototype = {
		count: 0, // Static Variable: Change it via prototype.
		version: { // Static Object
			script: "2.4.0",
			needFlash: "2.4.0",
			flash: "unknown"
		},
		options: { // Instanced in $.jPlayer() constructor
			swfPath: "js", // Path to Jplayer.swf. Can be relative, absolute or server root relative.
			solution: "html, flash", // Valid solutions: html, flash. Order defines priority. 1st is highest,
			supplied: "mp3", // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
			preload: 'metadata',  // HTML5 Spec values: none, metadata, auto.
			volume: 0.8, // The volume. Number 0 to 1.
			muted: false,
			wmode: "opaque", // Valid wmode: window, transparent, opaque, direct, gpu. 
			backgroundColor: "#000000", // To define the jPlayer div and Flash background color.
			cssSelectorAncestor: "#jp_container_1",
			cssSelector: { // * denotes properties that should only be required when video media type required. _cssSelector() would require changes to enable splitting these into Audio and Video defaults.
				videoPlay: ".jp-video-play", // *
				play: ".jp-play",
				pause: ".jp-pause",
				stop: ".jp-stop",
				seekBar: ".jp-seek-bar",
				playBar: ".jp-play-bar",
				mute: ".jp-mute",
				unmute: ".jp-unmute",
				volumeBar: ".jp-volume-bar",
				volumeBarValue: ".jp-volume-bar-value",
				volumeMax: ".jp-volume-max",
				currentTime: ".jp-current-time",
				duration: ".jp-duration",
				fullScreen: ".jp-full-screen", // *
				restoreScreen: ".jp-restore-screen", // *
				repeat: ".jp-repeat",
				repeatOff: ".jp-repeat-off",
				gui: ".jp-gui", // The interface used with autohide feature.
				noSolution: ".jp-no-solution" // For error feedback when jPlayer cannot find a solution.
			},
			smoothPlayBar: false, // Smooths the play bar transitions, which affects clicks and short media with big changes per second.
			fullScreen: false, // Native Full Screen
			fullWindow: false,
			autohide: {
				restored: false, // Controls the interface autohide feature.
				full: true, // Controls the interface autohide feature.
				fadeIn: 200, // Milliseconds. The period of the fadeIn anim.
				fadeOut: 600, // Milliseconds. The period of the fadeOut anim.
				hold: 1000 // Milliseconds. The period of the pause before autohide beings.
			},
			loop: false,
			repeat: function(event) { // The default jPlayer repeat event handler
				if(event.jPlayer.options.loop) {
					$(this).unbind(".jPlayerRepeat").bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
						$(this).jPlayer("play");
					});
				} else {
					$(this).unbind(".jPlayerRepeat");
				}
			},
			nativeVideoControls: {
				// Works well on standard browsers.
				// Phone and tablet browsers can have problems with the controls disappearing.
			},
			noFullWindow: {
				msie: /msie [0-6]\./,
				ipad: /ipad.*?os [0-4]\./,
				iphone: /iphone/,
				ipod: /ipod/,
				android_pad: /android [0-3]\.(?!.*?mobile)/,
				android_phone: /android.*?mobile/,
				blackberry: /blackberry/,
				windows_ce: /windows ce/,
				iemobile: /iemobile/,
				webos: /webos/
			},
			noVolume: {
				ipad: /ipad/,
				iphone: /iphone/,
				ipod: /ipod/,
				android_pad: /android(?!.*?mobile)/,
				android_phone: /android.*?mobile/,
				blackberry: /blackberry/,
				windows_ce: /windows ce/,
				iemobile: /iemobile/,
				webos: /webos/,
				playbook: /playbook/
			},
			timeFormat: {
				// Specific time format for this instance. The supported options are defined in $.jPlayer.timeFormat
				// For the undefined options we use the default from $.jPlayer.timeFormat
			},
			keyEnabled: false, // Enables keyboard controls.
			audioFullScreen: false, // Enables keyboard controls to enter full screen with audio media.
			keyBindings: { // The key control object, defining the key codes and the functions to execute.
				// The parameter, f = $.jPlayer.focus, will be checked truethy before attempting to call any of these functions.
				// Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
				play: {
					key: 32, // space
					fn: function(f) {
						if(f.status.paused) {
							f.play();
						} else {
							f.pause();
						}
					}
				},
				fullScreen: {
					key: 13, // enter
					fn: function(f) {
						if(f.status.video || f.options.audioFullScreen) {
							f._setOption("fullScreen", !f.options.fullScreen);
						}
					}
				},
				muted: {
					key: 8, // backspace
					fn: function(f) {
						f._muted(!f.options.muted);
					}
				},
				volumeUp: {
					key: 38, // UP
					fn: function(f) {
						f.volume(f.options.volume + 0.1);
					}
				},
				volumeDown: {
					key: 40, // DOWN
					fn: function(f) {
						f.volume(f.options.volume - 0.1);
					}
				}
			},
			verticalVolume: false, // Calculate volume from the bottom of the volume bar. Default is from the left. Also volume affects either width or height.
			// globalVolume: false, // Not implemented: Set to make volume changes affect all jPlayer instances
			// globalMute: false, // Not implemented: Set to make mute changes affect all jPlayer instances
			idPrefix: "jp", // Prefix for the ids of html elements created by jPlayer. For flash, this must not include characters: . - + * / \
			noConflict: "jQuery",
			emulateHtml: false, // Emulates the HTML5 Media element on the jPlayer element.
			errorAlerts: false,
			warningAlerts: false
		},
		optionsAudio: {
			size: {
				width: "0px",
				height: "0px",
				cssClass: ""
			},
			sizeFull: {
				width: "0px",
				height: "0px",
				cssClass: ""
			}
		},
		optionsVideo: {
			size: {
				width: "480px",
				height: "270px",
				cssClass: "jp-video-270p"
			},
			sizeFull: {
				width: "100%",
				height: "100%",
				cssClass: "jp-video-full"
			}
		},
		instances: {}, // Static Object
		status: { // Instanced in _init()
			src: "",
			media: {},
			paused: true,
			format: {},
			formatType: "",
			waitForPlay: true, // Same as waitForLoad except in case where preloading.
			waitForLoad: true,
			srcSet: false,
			video: false, // True if playing a video
			seekPercent: 0,
			currentPercentRelative: 0,
			currentPercentAbsolute: 0,
			currentTime: 0,
			duration: 0,
			videoWidth: 0, // Intrinsic width of the video in pixels.
			videoHeight: 0, // Intrinsic height of the video in pixels.
			readyState: 0,
			networkState: 0,
			playbackRate: 1,
			ended: 0

/*		Persistant status properties created dynamically at _init():
			width
			height
			cssClass
			nativeVideoControls
			noFullWindow
			noVolume
*/
		},

		internal: { // Instanced in _init()
			ready: false
			// instance: undefined
			// domNode: undefined
			// htmlDlyCmdId: undefined
			// autohideId: undefined
			// cmdsIgnored
		},
		solution: { // Static Object: Defines the solutions built in jPlayer.
			html: true,
			flash: true
		},
		// 'MPEG-4 support' : canPlayType('video/mp4; codecs="mp4v.20.8"')
		format: { // Static Object
			mp3: {
				codec: 'audio/mpeg; codecs="mp3"',
				flashCanPlay: true,
				media: 'audio'
			},
			m4a: { // AAC / MP4
				codec: 'audio/mp4; codecs="mp4a.40.2"',
				flashCanPlay: true,
				media: 'audio'
			},
			oga: { // OGG
				codec: 'audio/ogg; codecs="vorbis"',
				flashCanPlay: false,
				media: 'audio'
			},
			wav: { // PCM
				codec: 'audio/wav; codecs="1"',
				flashCanPlay: false,
				media: 'audio'
			},
			webma: { // WEBM
				codec: 'audio/webm; codecs="vorbis"',
				flashCanPlay: false,
				media: 'audio'
			},
			fla: { // FLV / F4A
				codec: 'audio/x-flv',
				flashCanPlay: true,
				media: 'audio'
			},
			rtmpa: { // RTMP AUDIO
				codec: 'audio/rtmp; codecs="rtmp"',
				flashCanPlay: true,
				media: 'audio'
			},
			m4v: { // H.264 / MP4
				codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
				flashCanPlay: true,
				media: 'video'
			},
			ogv: { // OGG
				codec: 'video/ogg; codecs="theora, vorbis"',
				flashCanPlay: false,
				media: 'video'
			},
			webmv: { // WEBM
				codec: 'video/webm; codecs="vorbis, vp8"',
				flashCanPlay: false,
				media: 'video'
			},
			flv: { // FLV / F4V
				codec: 'video/x-flv',
				flashCanPlay: true,
				media: 'video'
			},
			rtmpv: { // RTMP VIDEO
				codec: 'video/rtmp; codecs="rtmp"',
				flashCanPlay: true,
				media: 'video'
			}
		},
		_init: function() {
			var self = this;
			
			this.element.empty();
			
			this.status = $.extend({}, this.status); // Copy static to unique instance.
			this.internal = $.extend({}, this.internal); // Copy static to unique instance.

			// Initialize the time format
			this.options.timeFormat = $.extend({}, $.jPlayer.timeFormat, this.options.timeFormat);

			// On iOS, assume commands will be ignored before user initiates them.
			this.internal.cmdsIgnored = $.jPlayer.platform.ipad || $.jPlayer.platform.iphone || $.jPlayer.platform.ipod;

			this.internal.domNode = this.element.get(0);

			// Add key bindings focus to 1st jPlayer instanced with key control enabled.
			if(this.options.keyEnabled && !$.jPlayer.focus) {
				$.jPlayer.focus = this;
			}

			this.formats = []; // Array based on supplied string option. Order defines priority.
			this.solutions = []; // Array based on solution string option. Order defines priority.
			this.require = {}; // Which media types are required: video, audio.
			
			this.htmlElement = {}; // DOM elements created by jPlayer
			this.html = {}; // In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
			this.html.audio = {};
			this.html.video = {};
			this.flash = {}; // In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
			
			this.css = {};
			this.css.cs = {}; // Holds the css selector strings
			this.css.jq = {}; // Holds jQuery selectors. ie., $(css.cs.method)

			this.ancestorJq = []; // Holds jQuery selector of cssSelectorAncestor. Init would use $() instead of [], but it is only 1.4+

			this.options.volume = this._limitValue(this.options.volume, 0, 1); // Limit volume value's bounds.

			// Create the formats array, with prority based on the order of the supplied formats string
			$.each(this.options.supplied.toLowerCase().split(","), function(index1, value1) {
				var format = value1.replace(/^\s+|\s+$/g, ""); //trim
				if(self.format[format]) { // Check format is valid.
					var dupFound = false;
					$.each(self.formats, function(index2, value2) { // Check for duplicates
						if(format === value2) {
							dupFound = true;
							return false;
						}
					});
					if(!dupFound) {
						self.formats.push(format);
					}
				}
			});

			// Create the solutions array, with prority based on the order of the solution string
			$.each(this.options.solution.toLowerCase().split(","), function(index1, value1) {
				var solution = value1.replace(/^\s+|\s+$/g, ""); //trim
				if(self.solution[solution]) { // Check solution is valid.
					var dupFound = false;
					$.each(self.solutions, function(index2, value2) { // Check for duplicates
						if(solution === value2) {
							dupFound = true;
							return false;
						}
					});
					if(!dupFound) {
						self.solutions.push(solution);
					}
				}
			});

			this.internal.instance = "jp_" + this.count;
			this.instances[this.internal.instance] = this.element;

			// Check the jPlayer div has an id and create one if required. Important for Flash to know the unique id for comms.
			if(!this.element.attr("id")) {
				this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
			}

			this.internal.self = $.extend({}, {
				id: this.element.attr("id"),
				jq: this.element
			});
			this.internal.audio = $.extend({}, {
				id: this.options.idPrefix + "_audio_" + this.count,
				jq: undefined
			});
			this.internal.video = $.extend({}, {
				id: this.options.idPrefix + "_video_" + this.count,
				jq: undefined
			});
			this.internal.flash = $.extend({}, {
				id: this.options.idPrefix + "_flash_" + this.count,
				jq: undefined,
				swf: this.options.swfPath + (this.options.swfPath.toLowerCase().slice(-4) !== ".swf" ? (this.options.swfPath && this.options.swfPath.slice(-1) !== "/" ? "/" : "") + "Jplayer.swf" : "")
			});
			this.internal.poster = $.extend({}, {
				id: this.options.idPrefix + "_poster_" + this.count,
				jq: undefined
			});

			// Register listeners defined in the constructor
			$.each($.jPlayer.event, function(eventName,eventType) {
				if(self.options[eventName] !== undefined) {
					self.element.bind(eventType + ".jPlayer", self.options[eventName]); // With .jPlayer namespace.
					self.options[eventName] = undefined; // Destroy the handler pointer copy on the options. Reason, events can be added/removed in other ways so this could be obsolete and misleading.
				}
			});

			// Determine if we require solutions for audio, video or both media types.
			this.require.audio = false;
			this.require.video = false;
			$.each(this.formats, function(priority, format) {
				self.require[self.format[format].media] = true;
			});

			// Now required types are known, finish the options default settings.
			if(this.require.video) {
				this.options = $.extend(true, {},
					this.optionsVideo,
					this.options
				);
			} else {
				this.options = $.extend(true, {},
					this.optionsAudio,
					this.options
				);
			}
			this._setSize(); // update status and jPlayer element size

			// Determine the status for Blocklisted options.
			this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
			this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
			this.status.noVolume = this._uaBlocklist(this.options.noVolume);

			// Create event handlers if native fullscreen is supported
			if($.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled) {
				this._fullscreenAddEventListeners();
			}

			// The native controls are only for video and are disabled when audio is also used.
			this._restrictNativeVideoControls();

			// Create the poster image.
			this.htmlElement.poster = document.createElement('img');
			this.htmlElement.poster.id = this.internal.poster.id;
			this.htmlElement.poster.onload = function() { // Note that this did not work on Firefox 3.6: poster.addEventListener("onload", function() {}, false); Did not investigate x-browser.
				if(!self.status.video || self.status.waitForPlay) {
					self.internal.poster.jq.show();
				}
			};
			this.element.append(this.htmlElement.poster);
			this.internal.poster.jq = $("#" + this.internal.poster.id);
			this.internal.poster.jq.css({'width': this.status.width, 'height': this.status.height});
			this.internal.poster.jq.hide();
			this.internal.poster.jq.bind("click.jPlayer", function() {
				self._trigger($.jPlayer.event.click);
			});
			
			// Generate the required media elements
			this.html.audio.available = false;
			if(this.require.audio) { // If a supplied format is audio
				this.htmlElement.audio = document.createElement('audio');
				this.htmlElement.audio.id = this.internal.audio.id;
				this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio); // Test is for IE9 on Win Server 2008.
			}
			this.html.video.available = false;
			if(this.require.video) { // If a supplied format is video
				this.htmlElement.video = document.createElement('video');
				this.htmlElement.video.id = this.internal.video.id;
				this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video); // Test is for IE9 on Win Server 2008.
			}

			this.flash.available = this._checkForFlash(10.1);

			this.html.canPlay = {};
			this.flash.canPlay = {};
			$.each(this.formats, function(priority, format) {
				self.html.canPlay[format] = self.html[self.format[format].media].available && "" !== self.htmlElement[self.format[format].media].canPlayType(self.format[format].codec);
				self.flash.canPlay[format] = self.format[format].flashCanPlay && self.flash.available;
			});
			this.html.desired = false;
			this.flash.desired = false;
			$.each(this.solutions, function(solutionPriority, solution) {
				if(solutionPriority === 0) {
					self[solution].desired = true;
				} else {
					var audioCanPlay = false;
					var videoCanPlay = false;
					$.each(self.formats, function(formatPriority, format) {
						if(self[self.solutions[0]].canPlay[format]) { // The other solution can play
							if(self.format[format].media === 'video') {
								videoCanPlay = true;
							} else {
								audioCanPlay = true;
							}
						}
					});
					self[solution].desired = (self.require.audio && !audioCanPlay) || (self.require.video && !videoCanPlay);
				}
			});
			// This is what jPlayer will support, based on solution and supplied.
			this.html.support = {};
			this.flash.support = {};
			$.each(this.formats, function(priority, format) {
				self.html.support[format] = self.html.canPlay[format] && self.html.desired;
				self.flash.support[format] = self.flash.canPlay[format] && self.flash.desired;
			});
			// If jPlayer is supporting any format in a solution, then the solution is used.
			this.html.used = false;
			this.flash.used = false;
			$.each(this.solutions, function(solutionPriority, solution) {
				$.each(self.formats, function(formatPriority, format) {
					if(self[solution].support[format]) {
						self[solution].used = true;
						return false;
					}
				});
			});

			// Init solution active state and the event gates to false.
			this._resetActive();
			this._resetGate();

			// Set up the css selectors for the control and feedback entities.
			this._cssSelectorAncestor(this.options.cssSelectorAncestor);
			
			// If neither html nor flash are being used by this browser, then media playback is not possible. Trigger an error event.
			if(!(this.html.used || this.flash.used)) {
				this._error( {
					type: $.jPlayer.error.NO_SOLUTION, 
					context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
					message: $.jPlayer.errorMsg.NO_SOLUTION,
					hint: $.jPlayer.errorHint.NO_SOLUTION
				});
				if(this.css.jq.noSolution.length) {
					this.css.jq.noSolution.show();
				}
			} else {
				if(this.css.jq.noSolution.length) {
					this.css.jq.noSolution.hide();
				}
			}

			// Add the flash solution if it is being used.
			if(this.flash.used) {
				var htmlObj,
				flashVars = 'jQuery=' + encodeURI(this.options.noConflict) + '&id=' + encodeURI(this.internal.self.id) + '&vol=' + this.options.volume + '&muted=' + this.options.muted;

				// Code influenced by SWFObject 2.2: http://code.google.com/p/swfobject/
				// Non IE browsers have an initial Flash size of 1 by 1 otherwise the wmode affected the Flash ready event. 

				if($.jPlayer.browser.msie && (Number($.jPlayer.browser.version) < 9 || $.jPlayer.browser.documentMode < 9)) {
					var objStr = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>';

					var paramStr = [
						'<param name="movie" value="' + this.internal.flash.swf + '" />',
						'<param name="FlashVars" value="' + flashVars + '" />',
						'<param name="allowScriptAccess" value="always" />',
						'<param name="bgcolor" value="' + this.options.backgroundColor + '" />',
						'<param name="wmode" value="' + this.options.wmode + '" />'
					];

					htmlObj = document.createElement(objStr);
					for(var i=0; i < paramStr.length; i++) {
						htmlObj.appendChild(document.createElement(paramStr[i]));
					}
				} else {
					var createParam = function(el, n, v) {
						var p = document.createElement("param");
						p.setAttribute("name", n);	
						p.setAttribute("value", v);
						el.appendChild(p);
					};

					htmlObj = document.createElement("object");
					htmlObj.setAttribute("id", this.internal.flash.id);
					htmlObj.setAttribute("name", this.internal.flash.id);
					htmlObj.setAttribute("data", this.internal.flash.swf);
					htmlObj.setAttribute("type", "application/x-shockwave-flash");
					htmlObj.setAttribute("width", "1"); // Non-zero
					htmlObj.setAttribute("height", "1"); // Non-zero
					htmlObj.setAttribute("tabindex", "-1");
					createParam(htmlObj, "flashvars", flashVars);
					createParam(htmlObj, "allowscriptaccess", "always");
					createParam(htmlObj, "bgcolor", this.options.backgroundColor);
					createParam(htmlObj, "wmode", this.options.wmode);
				}

				this.element.append(htmlObj);
				this.internal.flash.jq = $(htmlObj);
			}
			
			// Add the HTML solution if being used.
			if(this.html.used) {

				// The HTML Audio handlers
				if(this.html.audio.available) {
					this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio);
					this.element.append(this.htmlElement.audio);
					this.internal.audio.jq = $("#" + this.internal.audio.id);
				}

				// The HTML Video handlers
				if(this.html.video.available) {
					this._addHtmlEventListeners(this.htmlElement.video, this.html.video);
					this.element.append(this.htmlElement.video);
					this.internal.video.jq = $("#" + this.internal.video.id);
					if(this.status.nativeVideoControls) {
						this.internal.video.jq.css({'width': this.status.width, 'height': this.status.height});
					} else {
						this.internal.video.jq.css({'width':'0px', 'height':'0px'}); // Using size 0x0 since a .hide() causes issues in iOS
					}
					this.internal.video.jq.bind("click.jPlayer", function() {
						self._trigger($.jPlayer.event.click);
					});
				}
			}

			// Create the bridge that emulates the HTML Media element on the jPlayer DIV
			if( this.options.emulateHtml ) {
				this._emulateHtmlBridge();
			}

			if(this.html.used && !this.flash.used) { // If only HTML, then emulate flash ready() call after 100ms.
				setTimeout( function() {
					self.internal.ready = true;
					self.version.flash = "n/a";
					self._trigger($.jPlayer.event.repeat); // Trigger the repeat event so its handler can initialize itself with the loop option.
					self._trigger($.jPlayer.event.ready);
				}, 100);
			}

			// Initialize the interface components with the options.
			this._updateNativeVideoControls();
			// The other controls are now setup in _cssSelectorAncestor()
			if(this.css.jq.videoPlay.length) {
				this.css.jq.videoPlay.hide();
			}

			$.jPlayer.prototype.count++; // Change static variable via prototype.
		},
		destroy: function() {
			// MJP: The background change remains. Would need to store the original to restore it correctly.
			// MJP: The jPlayer element's size change remains.

			// Clear the media to reset the GUI and stop any downloads. Streams on some browsers had persited. (Chrome)
			this.clearMedia();
			// Remove the size/sizeFull cssClass from the cssSelectorAncestor
			this._removeUiClass();
			// Remove the times from the GUI
			if(this.css.jq.currentTime.length) {
				this.css.jq.currentTime.text("");
			}
			if(this.css.jq.duration.length) {
				this.css.jq.duration.text("");
			}
			// Remove any bindings from the interface controls.
			$.each(this.css.jq, function(fn, jq) {
				// Check selector is valid before trying to execute method.
				if(jq.length) {
					jq.unbind(".jPlayer");
				}
			});
			// Remove the click handlers for $.jPlayer.event.click
			this.internal.poster.jq.unbind(".jPlayer");
			if(this.internal.video.jq) {
				this.internal.video.jq.unbind(".jPlayer");
			}
			// Remove the fullscreen event handlers
			this._fullscreenRemoveEventListeners();
			// Remove key bindings
			if(this === $.jPlayer.focus) {
				$.jPlayer.focus = null;
			}
			// Destroy the HTML bridge.
			if(this.options.emulateHtml) {
				this._destroyHtmlBridge();
			}
			this.element.removeData("jPlayer"); // Remove jPlayer data
			this.element.unbind(".jPlayer"); // Remove all event handlers created by the jPlayer constructor
			this.element.empty(); // Remove the inserted child elements
			
			delete this.instances[this.internal.instance]; // Clear the instance on the static instance object
		},
		enable: function() { // Plan to implement
			// options.disabled = false
		},
		disable: function () { // Plan to implement
			// options.disabled = true
		},
		_testCanPlayType: function(elem) {
			// IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
			try {
				elem.canPlayType(this.format.mp3.codec); // The type is irrelevant.
				return true;
			} catch(err) {
				return false;
			}
		},
		_uaBlocklist: function(list) {
			// list : object with properties that are all regular expressions. Property names are irrelevant.
			// Returns true if the user agent is matched in list.
			var	ua = navigator.userAgent.toLowerCase(),
				block = false;

			$.each(list, function(p, re) {
				if(re && re.test(ua)) {
					block = true;
					return false; // exit $.each.
				}
			});
			return block;
		},
		_restrictNativeVideoControls: function() {
			// Fallback to noFullWindow when nativeVideoControls is true and audio media is being used. Affects when both media types are used.
			if(this.require.audio) {
				if(this.status.nativeVideoControls) {
					this.status.nativeVideoControls = false;
					this.status.noFullWindow = true;
				}
			}
		},
		_updateNativeVideoControls: function() {
			if(this.html.video.available && this.html.used) {
				// Turn the HTML Video controls on/off
				this.htmlElement.video.controls = this.status.nativeVideoControls;
				// Show/hide the jPlayer GUI.
				this._updateAutohide();
				// For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
				if(this.status.nativeVideoControls && this.require.video) {
					this.internal.poster.jq.hide();
					this.internal.video.jq.css({'width': this.status.width, 'height': this.status.height});
				} else if(this.status.waitForPlay && this.status.video) {
					this.internal.poster.jq.show();
					this.internal.video.jq.css({'width': '0px', 'height': '0px'});
				}
			}
		},
		_addHtmlEventListeners: function(mediaElement, entity) {
			var self = this;
			mediaElement.preload = this.options.preload;
			mediaElement.muted = this.options.muted;
			mediaElement.volume = this.options.volume;

			// Create the event listeners
			// Only want the active entity to affect jPlayer and bubble events.
			// Using entity.gate so that object is referenced and gate property always current
			
			mediaElement.addEventListener("progress", function() {
				if(entity.gate) {
					if(self.internal.cmdsIgnored && this.readyState > 0) { // Detect iOS executed the command
						self.internal.cmdsIgnored = false;
					}
					self._getHtmlStatus(mediaElement);
					self._updateInterface();
					self._trigger($.jPlayer.event.progress);
				}
			}, false);
			mediaElement.addEventListener("timeupdate", function() {
				if(entity.gate) {
					self._getHtmlStatus(mediaElement);
					self._updateInterface();
					self._trigger($.jPlayer.event.timeupdate);
				}
			}, false);
			mediaElement.addEventListener("durationchange", function() {
				if(entity.gate) {
					self._getHtmlStatus(mediaElement);
					self._updateInterface();
					self._trigger($.jPlayer.event.durationchange);
				}
			}, false);
			mediaElement.addEventListener("play", function() {
				if(entity.gate) {
					self._updateButtons(true);
					self._html_checkWaitForPlay(); // So the native controls update this variable and puts the hidden interface in the correct state. Affects toggling native controls.
					self._trigger($.jPlayer.event.play);
				}
			}, false);
			mediaElement.addEventListener("playing", function() {
				if(entity.gate) {
					self._updateButtons(true);
					self._seeked();
					self._trigger($.jPlayer.event.playing);
				}
			}, false);
			mediaElement.addEventListener("pause", function() {
				if(entity.gate) {
					self._updateButtons(false);
					self._trigger($.jPlayer.event.pause);
				}
			}, false);
			mediaElement.addEventListener("waiting", function() {
				if(entity.gate) {
					self._seeking();
					self._trigger($.jPlayer.event.waiting);
				}
			}, false);
			mediaElement.addEventListener("seeking", function() {
				if(entity.gate) {
					self._seeking();
					self._trigger($.jPlayer.event.seeking);
				}
			}, false);
			mediaElement.addEventListener("seeked", function() {
				if(entity.gate) {
					self._seeked();
					self._trigger($.jPlayer.event.seeked);
				}
			}, false);
			mediaElement.addEventListener("volumechange", function() {
				if(entity.gate) {
					// Read the values back from the element as the Blackberry PlayBook shares the volume with the physical buttons master volume control.
					// However, when tested 6th July 2011, those buttons do not generate an event. The physical play/pause button does though.
					self.options.volume = mediaElement.volume;
					self.options.muted = mediaElement.muted;
					self._updateMute();
					self._updateVolume();
					self._trigger($.jPlayer.event.volumechange);
				}
			}, false);
			mediaElement.addEventListener("suspend", function() { // Seems to be the only way of capturing that the iOS4 browser did not actually play the media from the page code. ie., It needs a user gesture.
				if(entity.gate) {
					self._seeked();
					self._trigger($.jPlayer.event.suspend);
				}
			}, false);
			mediaElement.addEventListener("ended", function() {
				if(entity.gate) {
					// Order of the next few commands are important. Change the time and then pause.
					// Solves a bug in Firefox, where issuing pause 1st causes the media to play from the start. ie., The pause is ignored.
					if(!$.jPlayer.browser.webkit) { // Chrome crashes if you do this in conjunction with a setMedia command in an ended event handler. ie., The playlist demo.
						self.htmlElement.media.currentTime = 0; // Safari does not care about this command. ie., It works with or without this line. (Both Safari and Chrome are Webkit.)
					}
					self.htmlElement.media.pause(); // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
					self._updateButtons(false);
					self._getHtmlStatus(mediaElement, true); // With override true. Otherwise Chrome leaves progress at full.
					self._updateInterface();
					self._trigger($.jPlayer.event.ended);
				}
			}, false);
			mediaElement.addEventListener("error", function() {
				if(entity.gate) {
					self._updateButtons(false);
					self._seeked();
					if(self.status.srcSet) { // Deals with case of clearMedia() causing an error event.
						clearTimeout(self.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution.
						self.status.waitForLoad = true; // Allows the load operation to try again.
						self.status.waitForPlay = true; // Reset since a play was captured.
						if(self.status.video && !self.status.nativeVideoControls) {
							self.internal.video.jq.css({'width':'0px', 'height':'0px'});
						}
						if(self._validString(self.status.media.poster) && !self.status.nativeVideoControls) {
							self.internal.poster.jq.show();
						}
						if(self.css.jq.videoPlay.length) {
							self.css.jq.videoPlay.show();
						}
						self._error( {
							type: $.jPlayer.error.URL,
							context: self.status.src, // this.src shows absolute urls. Want context to show the url given.
							message: $.jPlayer.errorMsg.URL,
							hint: $.jPlayer.errorHint.URL
						});
					}
				}
			}, false);
			// Create all the other event listeners that bubble up to a jPlayer event from html, without being used by jPlayer.
			$.each($.jPlayer.htmlEvent, function(i, eventType) {
				mediaElement.addEventListener(this, function() {
					if(entity.gate) {
						self._trigger($.jPlayer.event[eventType]);
					}
				}, false);
			});
		},
		_getHtmlStatus: function(media, override) {
			var ct = 0, cpa = 0, sp = 0, cpr = 0;

			// Fixes the duration bug in iOS, where the durationchange event occurs when media.duration is not always correct.
			// Fixes the initial duration bug in BB OS7, where the media.duration is infinity and displays as NaN:NaN due to Date() using inifity.
			if(isFinite(media.duration)) {
				this.status.duration = media.duration;
			}

			ct = media.currentTime;
			cpa = (this.status.duration > 0) ? 100 * ct / this.status.duration : 0;
			if((typeof media.seekable === "object") && (media.seekable.length > 0)) {
				sp = (this.status.duration > 0) ? 100 * media.seekable.end(media.seekable.length-1) / this.status.duration : 100;
				cpr = (this.status.duration > 0) ? 100 * media.currentTime / media.seekable.end(media.seekable.length-1) : 0; // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
			} else {
				sp = 100;
				cpr = cpa;
			}
			
			if(override) {
				ct = 0;
				cpr = 0;
				cpa = 0;
			}

			this.status.seekPercent = sp;
			this.status.currentPercentRelative = cpr;
			this.status.currentPercentAbsolute = cpa;
			this.status.currentTime = ct;

			this.status.videoWidth = media.videoWidth;
			this.status.videoHeight = media.videoHeight;

			this.status.readyState = media.readyState;
			this.status.networkState = media.networkState;
			this.status.playbackRate = media.playbackRate;
			this.status.ended = media.ended;
		},
		_resetStatus: function() {
			this.status = $.extend({}, this.status, $.jPlayer.prototype.status); // Maintains the status properties that persist through a reset.
		},
		_trigger: function(eventType, error, warning) { // eventType always valid as called using $.jPlayer.event.eventType
			var event = $.Event(eventType);
			event.jPlayer = {};
			event.jPlayer.version = $.extend({}, this.version);
			event.jPlayer.options = $.extend(true, {}, this.options); // Deep copy
			event.jPlayer.status = $.extend(true, {}, this.status); // Deep copy
			event.jPlayer.html = $.extend(true, {}, this.html); // Deep copy
			event.jPlayer.flash = $.extend(true, {}, this.flash); // Deep copy
			if(error) {
				event.jPlayer.error = $.extend({}, error);
			}
			if(warning) {
				event.jPlayer.warning = $.extend({}, warning);
			}
			this.element.trigger(event);
		},
		jPlayerFlashEvent: function(eventType, status) { // Called from Flash
			if(eventType === $.jPlayer.event.ready) {
				if(!this.internal.ready) {
					this.internal.ready = true;
					this.internal.flash.jq.css({'width':'0px', 'height':'0px'}); // Once Flash generates the ready event, minimise to zero as it is not affected by wmode anymore.

					this.version.flash = status.version;
					if(this.version.needFlash !== this.version.flash) {
						this._error( {
							type: $.jPlayer.error.VERSION,
							context: this.version.flash,
							message: $.jPlayer.errorMsg.VERSION + this.version.flash,
							hint: $.jPlayer.errorHint.VERSION
						});
					}
					this._trigger($.jPlayer.event.repeat); // Trigger the repeat event so its handler can initialize itself with the loop option.
					this._trigger(eventType);
				} else {
					// This condition occurs if the Flash is hidden and then shown again.
					// Firefox also reloads the Flash if the CSS position changes. position:fixed is used for full screen.

					// Only do this if the Flash is the solution being used at the moment. Affects Media players where both solution may be being used.
					if(this.flash.gate) {

						// Send the current status to the Flash now that it is ready (available) again.
						if(this.status.srcSet) {

							// Need to read original status before issuing the setMedia command.
							var	currentTime = this.status.currentTime,
								paused = this.status.paused; 

							this.setMedia(this.status.media);
							if(currentTime > 0) {
								if(paused) {
									this.pause(currentTime);
								} else {
									this.play(currentTime);
								}
							}
						}
						this._trigger($.jPlayer.event.flashreset);
					}
				}
			}
			if(this.flash.gate) {
				switch(eventType) {
					case $.jPlayer.event.progress:
						this._getFlashStatus(status);
						this._updateInterface();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.timeupdate:
						this._getFlashStatus(status);
						this._updateInterface();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.play:
						this._seeked();
						this._updateButtons(true);
						this._trigger(eventType);
						break;
					case $.jPlayer.event.pause:
						this._updateButtons(false);
						this._trigger(eventType);
						break;
					case $.jPlayer.event.ended:
						this._updateButtons(false);
						this._trigger(eventType);
						break;
					case $.jPlayer.event.click:
						this._trigger(eventType); // This could be dealt with by the default
						break;
					case $.jPlayer.event.error:
						this.status.waitForLoad = true; // Allows the load operation to try again.
						this.status.waitForPlay = true; // Reset since a play was captured.
						if(this.status.video) {
							this.internal.flash.jq.css({'width':'0px', 'height':'0px'});
						}
						if(this._validString(this.status.media.poster)) {
							this.internal.poster.jq.show();
						}
						if(this.css.jq.videoPlay.length && this.status.video) {
							this.css.jq.videoPlay.show();
						}
						if(this.status.video) { // Set up for another try. Execute before error event.
							this._flash_setVideo(this.status.media);
						} else {
							this._flash_setAudio(this.status.media);
						}
						this._updateButtons(false);
						this._error( {
							type: $.jPlayer.error.URL,
							context:status.src,
							message: $.jPlayer.errorMsg.URL,
							hint: $.jPlayer.errorHint.URL
						});
						break;
					case $.jPlayer.event.seeking:
						this._seeking();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.seeked:
						this._seeked();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.ready:
						// The ready event is handled outside the switch statement.
						// Captured here otherwise 2 ready events would be generated if the ready event handler used setMedia.
						break;
					default:
						this._trigger(eventType);
				}
			}
			return false;
		},
		_getFlashStatus: function(status) {
			this.status.seekPercent = status.seekPercent;
			this.status.currentPercentRelative = status.currentPercentRelative;
			this.status.currentPercentAbsolute = status.currentPercentAbsolute;
			this.status.currentTime = status.currentTime;
			this.status.duration = status.duration;

			this.status.videoWidth = status.videoWidth;
			this.status.videoHeight = status.videoHeight;

			// The Flash does not generate this information in this release
			this.status.readyState = 4; // status.readyState;
			this.status.networkState = 0; // status.networkState;
			this.status.playbackRate = 1; // status.playbackRate;
			this.status.ended = false; // status.ended;
		},
		_updateButtons: function(playing) {
			if(playing === undefined) {
				playing = !this.status.paused;
			} else {
				this.status.paused = !playing;
			}
			if(this.css.jq.play.length && this.css.jq.pause.length) {
				if(playing) {
					this.css.jq.play.hide();
					this.css.jq.pause.show();
				} else {
					this.css.jq.play.show();
					this.css.jq.pause.hide();
				}
			}
			if(this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length) {
				if(this.status.noFullWindow) {
					this.css.jq.fullScreen.hide();
					this.css.jq.restoreScreen.hide();
				} else if(this.options.fullWindow) {
					this.css.jq.fullScreen.hide();
					this.css.jq.restoreScreen.show();
				} else {
					this.css.jq.fullScreen.show();
					this.css.jq.restoreScreen.hide();
				}
			}
			if(this.css.jq.repeat.length && this.css.jq.repeatOff.length) {
				if(this.options.loop) {
					this.css.jq.repeat.hide();
					this.css.jq.repeatOff.show();
				} else {
					this.css.jq.repeat.show();
					this.css.jq.repeatOff.hide();
				}
			}
		},
		_updateInterface: function() {
			if(this.css.jq.seekBar.length) {
				this.css.jq.seekBar.width(this.status.seekPercent+"%");
			}
			if(this.css.jq.playBar.length) {
				if(this.options.smoothPlayBar) {
					this.css.jq.playBar.stop().animate({
						width: this.status.currentPercentAbsolute+"%"
					}, 250, "linear");
				} else {
					this.css.jq.playBar.width(this.status.currentPercentRelative+"%");
				}
			}
			if(this.css.jq.currentTime.length) {
				this.css.jq.currentTime.text(this._convertTime(this.status.currentTime));
			}
			if(this.css.jq.duration.length) {
				this.css.jq.duration.text(this._convertTime(this.status.duration));
			}
		},
		_convertTime: ConvertTime.prototype.time,
		_seeking: function() {
			if(this.css.jq.seekBar.length) {
				this.css.jq.seekBar.addClass("jp-seeking-bg");
			}
		},
		_seeked: function() {
			if(this.css.jq.seekBar.length) {
				this.css.jq.seekBar.removeClass("jp-seeking-bg");
			}
		},
		_resetGate: function() {
			this.html.audio.gate = false;
			this.html.video.gate = false;
			this.flash.gate = false;
		},
		_resetActive: function() {
			this.html.active = false;
			this.flash.active = false;
		},
		setMedia: function(media) {
		
			/*	media[format] = String: URL of format. Must contain all of the supplied option's video or audio formats.
			 *	media.poster = String: Video poster URL.
			 *	media.subtitles = String: * NOT IMPLEMENTED * URL of subtitles SRT file
			 *	media.chapters = String: * NOT IMPLEMENTED * URL of chapters SRT file
			 *	media.stream = Boolean: * NOT IMPLEMENTED * Designating actual media streams. ie., "false/undefined" for files. Plan to refresh the flash every so often.
			 */

			var	self = this,
				supported = false,
				posterChanged = this.status.media.poster !== media.poster; // Compare before reset. Important for OSX Safari as this.htmlElement.poster.src is absolute, even if original poster URL was relative.

			this._resetMedia();
			this._resetGate();
			this._resetActive();

			$.each(this.formats, function(formatPriority, format) {
				var isVideo = self.format[format].media === 'video';
				$.each(self.solutions, function(solutionPriority, solution) {
					if(self[solution].support[format] && self._validString(media[format])) { // Format supported in solution and url given for format.
						var isHtml = solution === 'html';

						if(isVideo) {
							if(isHtml) {
								self.html.video.gate = true;
								self._html_setVideo(media);
								self.html.active = true;
							} else {
								self.flash.gate = true;
								self._flash_setVideo(media);
								self.flash.active = true;
							}
							if(self.css.jq.videoPlay.length) {
								self.css.jq.videoPlay.show();
							}
							self.status.video = true;
						} else {
							if(isHtml) {
								self.html.audio.gate = true;
								self._html_setAudio(media);
								self.html.active = true;
							} else {
								self.flash.gate = true;
								self._flash_setAudio(media);
								self.flash.active = true;
							}
							if(self.css.jq.videoPlay.length) {
								self.css.jq.videoPlay.hide();
							}
							self.status.video = false;
						}
						
						supported = true;
						return false; // Exit $.each
					}
				});
				if(supported) {
					return false; // Exit $.each
				}
			});

			if(supported) {
				if(!(this.status.nativeVideoControls && this.html.video.gate)) {
					// Set poster IMG if native video controls are not being used
					// Note: With IE the IMG onload event occurs immediately when cached.
					// Note: Poster hidden by default in _resetMedia()
					if(this._validString(media.poster)) {
						if(posterChanged) { // Since some browsers do not generate img onload event.
							this.htmlElement.poster.src = media.poster;
						} else {
							this.internal.poster.jq.show();
						}
					}
				}
				this.status.srcSet = true;
				this.status.media = $.extend({}, media);
				this._updateButtons(false);
				this._updateInterface();
			} else { // jPlayer cannot support any formats provided in this browser
				// Send an error event
				this._error( {
					type: $.jPlayer.error.NO_SUPPORT,
					context: "{supplied:'" + this.options.supplied + "'}",
					message: $.jPlayer.errorMsg.NO_SUPPORT,
					hint: $.jPlayer.errorHint.NO_SUPPORT
				});
			}
		},
		_resetMedia: function() {
			this._resetStatus();
			this._updateButtons(false);
			this._updateInterface();
			this._seeked();
			this.internal.poster.jq.hide();

			clearTimeout(this.internal.htmlDlyCmdId);

			if(this.html.active) {
				this._html_resetMedia();
			} else if(this.flash.active) {
				this._flash_resetMedia();
			}
		},
		clearMedia: function() {
			this._resetMedia();

			if(this.html.active) {
				this._html_clearMedia();
			} else if(this.flash.active) {
				this._flash_clearMedia();
			}

			this._resetGate();
			this._resetActive();
		},
		load: function() {
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_load();
				} else if(this.flash.active) {
					this._flash_load();
				}
			} else {
				this._urlNotSetError("load");
			}
		},
		focus: function() {
			if(this.options.keyEnabled) {
				$.jPlayer.focus = this;
			}
		},
		play: function(time) {
			time = (typeof time === "number") ? time : NaN; // Remove jQuery event from click handler
			if(this.status.srcSet) {
				this.focus();
				if(this.html.active) {
					this._html_play(time);
				} else if(this.flash.active) {
					this._flash_play(time);
				}
			} else {
				this._urlNotSetError("play");
			}
		},
		videoPlay: function() { // Handles clicks on the play button over the video poster
			this.play();
		},
		pause: function(time) {
			time = (typeof time === "number") ? time : NaN; // Remove jQuery event from click handler
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_pause(time);
				} else if(this.flash.active) {
					this._flash_pause(time);
				}
			} else {
				this._urlNotSetError("pause");
			}
		},
		pauseOthers: function() {
			var self = this;
			$.each(this.instances, function(i, element) {
				if(self.element !== element) { // Do not this instance.
					if(element.data("jPlayer").status.srcSet) { // Check that media is set otherwise would cause error event.
						element.jPlayer("pause");
					}
				}
			});
		},
		stop: function() {
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_pause(0);
				} else if(this.flash.active) {
					this._flash_pause(0);
				}
			} else {
				this._urlNotSetError("stop");
			}
		},
		playHead: function(p) {
			p = this._limitValue(p, 0, 100);
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_playHead(p);
				} else if(this.flash.active) {
					this._flash_playHead(p);
				}
			} else {
				this._urlNotSetError("playHead");
			}
		},
		_muted: function(muted) {
			this.options.muted = muted;
			if(this.html.used) {
				this._html_mute(muted);
			}
			if(this.flash.used) {
				this._flash_mute(muted);
			}

			// The HTML solution generates this event from the media element itself.
			if(!this.html.video.gate && !this.html.audio.gate) {
				this._updateMute(muted);
				this._updateVolume(this.options.volume);
				this._trigger($.jPlayer.event.volumechange);
			}
		},
		mute: function(mute) { // mute is either: undefined (true), an event object (true) or a boolean (muted).
			mute = mute === undefined ? true : !!mute;
			this._muted(mute);
		},
		unmute: function(unmute) { // unmute is either: undefined (true), an event object (true) or a boolean (!muted).
			unmute = unmute === undefined ? true : !!unmute;
			this._muted(!unmute);
		},
		_updateMute: function(mute) {
			if(mute === undefined) {
				mute = this.options.muted;
			}
			if(this.css.jq.mute.length && this.css.jq.unmute.length) {
				if(this.status.noVolume) {
					this.css.jq.mute.hide();
					this.css.jq.unmute.hide();
				} else if(mute) {
					this.css.jq.mute.hide();
					this.css.jq.unmute.show();
				} else {
					this.css.jq.mute.show();
					this.css.jq.unmute.hide();
				}
			}
		},
		volume: function(v) {
			v = this._limitValue(v, 0, 1);
			this.options.volume = v;

			if(this.html.used) {
				this._html_volume(v);
			}
			if(this.flash.used) {
				this._flash_volume(v);
			}

			// The HTML solution generates this event from the media element itself.
			if(!this.html.video.gate && !this.html.audio.gate) {
				this._updateVolume(v);
				this._trigger($.jPlayer.event.volumechange);
			}
		},
		volumeBar: function(e) { // Handles clicks on the volumeBar
			if(this.css.jq.volumeBar.length) {
				// Using $(e.currentTarget) to enable multiple volume bars
				var $bar = $(e.currentTarget),
					offset = $bar.offset(),
					x = e.pageX - offset.left,
					w = $bar.width(),
					y = $bar.height() - e.pageY + offset.top,
					h = $bar.height();
				if(this.options.verticalVolume) {
					this.volume(y/h);
				} else {
					this.volume(x/w);
				}
			}
			if(this.options.muted) {
				this._muted(false);
			}
		},
		volumeBarValue: function() { // Handles clicks on the volumeBarValue
			// The volumeBar handles this event as the event propagates up the DOM.
		},
		_updateVolume: function(v) {
			if(v === undefined) {
				v = this.options.volume;
			}
			v = this.options.muted ? 0 : v;

			if(this.status.noVolume) {
				if(this.css.jq.volumeBar.length) {
					this.css.jq.volumeBar.hide();
				}
				if(this.css.jq.volumeBarValue.length) {
					this.css.jq.volumeBarValue.hide();
				}
				if(this.css.jq.volumeMax.length) {
					this.css.jq.volumeMax.hide();
				}
			} else {
				if(this.css.jq.volumeBar.length) {
					this.css.jq.volumeBar.show();
				}
				if(this.css.jq.volumeBarValue.length) {
					this.css.jq.volumeBarValue.show();
					this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"]((v*100)+"%");
				}
				if(this.css.jq.volumeMax.length) {
					this.css.jq.volumeMax.show();
				}
			}
		},
		volumeMax: function() { // Handles clicks on the volume max
			this.volume(1);
			if(this.options.muted) {
				this._muted(false);
			}
		},
		_cssSelectorAncestor: function(ancestor) {
			var self = this;
			this.options.cssSelectorAncestor = ancestor;
			this._removeUiClass();
			this.ancestorJq = ancestor ? $(ancestor) : []; // Would use $() instead of [], but it is only 1.4+
			if(ancestor && this.ancestorJq.length !== 1) { // So empty strings do not generate the warning.
				this._warning( {
					type: $.jPlayer.warning.CSS_SELECTOR_COUNT,
					context: ancestor,
					message: $.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
					hint: $.jPlayer.warningHint.CSS_SELECTOR_COUNT
				});
			}
			this._addUiClass();
			$.each(this.options.cssSelector, function(fn, cssSel) {
				self._cssSelector(fn, cssSel);
			});

			// Set the GUI to the current state.
			this._updateInterface();
			this._updateButtons();
			this._updateAutohide();
			this._updateVolume();
			this._updateMute();
		},
		_cssSelector: function(fn, cssSel) {
			var self = this;
			if(typeof cssSel === 'string') {
				if($.jPlayer.prototype.options.cssSelector[fn]) {
					if(this.css.jq[fn] && this.css.jq[fn].length) {
						this.css.jq[fn].unbind(".jPlayer");
					}
					this.options.cssSelector[fn] = cssSel;
					this.css.cs[fn] = this.options.cssSelectorAncestor + " " + cssSel;

					if(cssSel) { // Checks for empty string
						this.css.jq[fn] = $(this.css.cs[fn]);
					} else {
						this.css.jq[fn] = []; // To comply with the css.jq[fn].length check before its use. As of jQuery 1.4 could have used $() for an empty set. 
					}

					if(this.css.jq[fn].length) {
						var handler = function(e) {
							e.preventDefault();
							self[fn](e);
							$(this).blur();
						};
						this.css.jq[fn].bind("click.jPlayer", handler); // Using jPlayer namespace
					}

					if(cssSel && this.css.jq[fn].length !== 1) { // So empty strings do not generate the warning. ie., they just remove the old one.
						this._warning( {
							type: $.jPlayer.warning.CSS_SELECTOR_COUNT,
							context: this.css.cs[fn],
							message: $.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[fn].length + " found for " + fn + " method.",
							hint: $.jPlayer.warningHint.CSS_SELECTOR_COUNT
						});
					}
				} else {
					this._warning( {
						type: $.jPlayer.warning.CSS_SELECTOR_METHOD,
						context: fn,
						message: $.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
						hint: $.jPlayer.warningHint.CSS_SELECTOR_METHOD
					});
				}
			} else {
				this._warning( {
					type: $.jPlayer.warning.CSS_SELECTOR_STRING,
					context: cssSel,
					message: $.jPlayer.warningMsg.CSS_SELECTOR_STRING,
					hint: $.jPlayer.warningHint.CSS_SELECTOR_STRING
				});
			}
		},
		seekBar: function(e) { // Handles clicks on the seekBar
			if(this.css.jq.seekBar.length) {
				// Using $(e.currentTarget) to enable multiple seek bars
				var $bar = $(e.currentTarget),
					offset = $bar.offset(),
					x = e.pageX - offset.left,
					w = $bar.width(),
					p = 100 * x / w;
				this.playHead(p);
			}
		},
		playBar: function() { // Handles clicks on the playBar
			// The seekBar handles this event as the event propagates up the DOM.
		},
		repeat: function() { // Handle clicks on the repeat button
			this._loop(true);
		},
		repeatOff: function() { // Handle clicks on the repeatOff button
			this._loop(false);
		},
		_loop: function(loop) {
			if(this.options.loop !== loop) {
				this.options.loop = loop;
				this._updateButtons();
				this._trigger($.jPlayer.event.repeat);
			}
		},

		// Plan to review the cssSelector method to cope with missing associated functions accordingly.

		currentTime: function() { // Handles clicks on the text
			// Added to avoid errors using cssSelector system for the text
		},
		duration: function() { // Handles clicks on the text
			// Added to avoid errors using cssSelector system for the text
		},
		gui: function() { // Handles clicks on the gui
			// Added to avoid errors using cssSelector system for the gui
		},
		noSolution: function() { // Handles clicks on the error message
			// Added to avoid errors using cssSelector system for no-solution
		},

		// Options code adapted from ui.widget.js (1.8.7).  Made changes so the key can use dot notation. To match previous getData solution in jPlayer 1.
		option: function(key, value) {
			var options = key;

			 // Enables use: options().  Returns a copy of options object
			if ( arguments.length === 0 ) {
				return $.extend( true, {}, this.options );
			}

			if(typeof key === "string") {
				var keys = key.split(".");

				 // Enables use: options("someOption")  Returns a copy of the option. Supports dot notation.
				if(value === undefined) {

					var opt = $.extend(true, {}, this.options);
					for(var i = 0; i < keys.length; i++) {
						if(opt[keys[i]] !== undefined) {
							opt = opt[keys[i]];
						} else {
							this._warning( {
								type: $.jPlayer.warning.OPTION_KEY,
								context: key,
								message: $.jPlayer.warningMsg.OPTION_KEY,
								hint: $.jPlayer.warningHint.OPTION_KEY
							});
							return undefined;
						}
					}
					return opt;
				}

				 // Enables use: options("someOptionObject", someObject}).  Creates: {someOptionObject:someObject}
				 // Enables use: options("someOption", someValue).  Creates: {someOption:someValue}
				 // Enables use: options("someOptionObject.someOption", someValue).  Creates: {someOptionObject:{someOption:someValue}}

				options = {};
				var opts = options;

				for(var j = 0; j < keys.length; j++) {
					if(j < keys.length - 1) {
						opts[keys[j]] = {};
						opts = opts[keys[j]];
					} else {
						opts[keys[j]] = value;
					}
				}
			}

			 // Otherwise enables use: options(optionObject).  Uses original object (the key)

			this._setOptions(options);

			return this;
		},
		_setOptions: function(options) {
			var self = this;
			$.each(options, function(key, value) { // This supports the 2 level depth that the options of jPlayer has. Would review if we ever need more depth.
				self._setOption(key, value);
			});

			return this;
		},
		_setOption: function(key, value) {
			var self = this;

			// The ability to set options is limited at this time.

			switch(key) {
				case "volume" :
					this.volume(value);
					break;
				case "muted" :
					this._muted(value);
					break;
				case "cssSelectorAncestor" :
					this._cssSelectorAncestor(value); // Set and refresh all associations for the new ancestor.
					break;
				case "cssSelector" :
					$.each(value, function(fn, cssSel) {
						self._cssSelector(fn, cssSel); // NB: The option is set inside this function, after further validity checks.
					});
					break;
				case "fullScreen" :
					if(this.options[key] !== value) { // if changed
						var wkv = $.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
						if(!wkv || wkv && !this.status.waitForPlay) {
							if(!wkv) { // No sensible way to unset option on these devices.
								this.options[key] = value;
							}
							if(value) {
								this._requestFullscreen();
							} else {
								this._exitFullscreen();
							}
							if(!wkv) {
								this._setOption("fullWindow", value);
							}
						}
					}
					break;
				case "fullWindow" :
					if(this.options[key] !== value) { // if changed
						this._removeUiClass();
						this.options[key] = value;
						this._refreshSize();
					}
					break;
				case "size" :
					if(!this.options.fullWindow && this.options[key].cssClass !== value.cssClass) {
						this._removeUiClass();
					}
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this._refreshSize();
					break;
				case "sizeFull" :
					if(this.options.fullWindow && this.options[key].cssClass !== value.cssClass) {
						this._removeUiClass();
					}
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this._refreshSize();
					break;
				case "autohide" :
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this._updateAutohide();
					break;
				case "loop" :
					this._loop(value);
					break;
				case "nativeVideoControls" :
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
					this._restrictNativeVideoControls();
					this._updateNativeVideoControls();
					break;
				case "noFullWindow" :
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls); // Need to check again as noFullWindow can depend on this flag and the restrict() can override it.
					this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
					this._restrictNativeVideoControls();
					this._updateButtons();
					break;
				case "noVolume" :
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this.status.noVolume = this._uaBlocklist(this.options.noVolume);
					this._updateVolume();
					this._updateMute();
					break;
				case "emulateHtml" :
					if(this.options[key] !== value) { // To avoid multiple event handlers being created, if true already.
						this.options[key] = value;
						if(value) {
							this._emulateHtmlBridge();
						} else {
							this._destroyHtmlBridge();
						}
					}
					break;
				case "timeFormat" :
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					break;
				case "keyEnabled" :
					this.options[key] = value;
					if(!value && this === $.jPlayer.focus) {
						$.jPlayer.focus = null;
					}
					break;
				case "keyBindings" :
					this.options[key] = $.extend(true, {}, this.options[key], value); // store a merged DEEP copy of it, incase not all properties changed.
					break;
				case "audioFullScreen" :
					this.options[key] = value;
					break;
			}

			return this;
		},
		// End of: (Options code adapted from ui.widget.js)

		_refreshSize: function() {
			this._setSize(); // update status and jPlayer element size
			this._addUiClass(); // update the ui class
			this._updateSize(); // update internal sizes
			this._updateButtons();
			this._updateAutohide();
			this._trigger($.jPlayer.event.resize);
		},
		_setSize: function() {
			// Determine the current size from the options
			if(this.options.fullWindow) {
				this.status.width = this.options.sizeFull.width;
				this.status.height = this.options.sizeFull.height;
				this.status.cssClass = this.options.sizeFull.cssClass;
			} else {
				this.status.width = this.options.size.width;
				this.status.height = this.options.size.height;
				this.status.cssClass = this.options.size.cssClass;
			}

			// Set the size of the jPlayer area.
			this.element.css({'width': this.status.width, 'height': this.status.height});
		},
		_addUiClass: function() {
			if(this.ancestorJq.length) {
				this.ancestorJq.addClass(this.status.cssClass);
			}
		},
		_removeUiClass: function() {
			if(this.ancestorJq.length) {
				this.ancestorJq.removeClass(this.status.cssClass);
			}
		},
		_updateSize: function() {
			// The poster uses show/hide so can simply resize it.
			this.internal.poster.jq.css({'width': this.status.width, 'height': this.status.height});

			// Video html or flash resized if necessary at this time, or if native video controls being used.
			if(!this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls) {
				this.internal.video.jq.css({'width': this.status.width, 'height': this.status.height});
			}
			else if(!this.status.waitForPlay && this.flash.active && this.status.video) {
				this.internal.flash.jq.css({'width': this.status.width, 'height': this.status.height});
			}
		},
		_updateAutohide: function() {
			var	self = this,
				event = "mousemove.jPlayer",
				namespace = ".jPlayerAutohide",
				eventType = event + namespace,
				handler = function() {
					self.css.jq.gui.fadeIn(self.options.autohide.fadeIn, function() {
						clearTimeout(self.internal.autohideId);
						self.internal.autohideId = setTimeout( function() {
							self.css.jq.gui.fadeOut(self.options.autohide.fadeOut);
						}, self.options.autohide.hold);
					});
				};

			if(this.css.jq.gui.length) {

				// End animations first so that its callback is executed now.
				// Otherwise an in progress fadeIn animation still has the callback to fadeOut again.
				this.css.jq.gui.stop(true, true);

				// Removes the fadeOut operation from the fadeIn callback.
				clearTimeout(this.internal.autohideId);

				this.element.unbind(namespace);
				this.css.jq.gui.unbind(namespace);

				if(!this.status.nativeVideoControls) {
					if(this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored) {
						this.element.bind(eventType, handler);
						this.css.jq.gui.bind(eventType, handler);
						this.css.jq.gui.hide();
					} else {
						this.css.jq.gui.show();
					}
				} else {
					this.css.jq.gui.hide();
				}
			}
		},
		fullScreen: function() {
			this._setOption("fullScreen", true);
		},
		restoreScreen: function() {
			this._setOption("fullScreen", false);
		},
		_fullscreenAddEventListeners: function() {
			var self = this,
				fs = $.jPlayer.nativeFeatures.fullscreen;

			if(fs.api.fullscreenEnabled) {
				if(fs.event.fullscreenchange) {
					// Create the event handler function and store it for removal.
					if(typeof this.internal.fullscreenchangeHandler !== 'function') {
						this.internal.fullscreenchangeHandler = function() {
							self._fullscreenchange();
						};
					}
					document.addEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
				}
				// No point creating handler for fullscreenerror.
				// Either logic avoids fullscreen occurring (w3c/moz), or their is no event on the browser (webkit).
			}
		},
		_fullscreenRemoveEventListeners: function() {
			var fs = $.jPlayer.nativeFeatures.fullscreen;
			if(this.internal.fullscreenchangeHandler) {
				document.addEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
			}
		},
		_fullscreenchange: function() {
			// If nothing is fullscreen, then we cannot be in fullscreen mode.
			if(this.options.fullScreen && !$.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()) {
				this._setOption("fullScreen", false);
			}
		},
		_requestFullscreen: function() {
			// Either the container or the jPlayer div
			var e = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
				fs = $.jPlayer.nativeFeatures.fullscreen;

			// This method needs the video element. For iOS and Android.
			if(fs.used.webkitVideo) {
				e = this.htmlElement.video;
			}

			if(fs.api.fullscreenEnabled) {
				fs.api.requestFullscreen(e);
			}
		},
		_exitFullscreen: function() {

			var fs = $.jPlayer.nativeFeatures.fullscreen,
				e;

			// This method needs the video element. For iOS and Android.
			if(fs.used.webkitVideo) {
				e = this.htmlElement.video;
			}

			if(fs.api.fullscreenEnabled) {
				fs.api.exitFullscreen(e);
			}
		},
		_html_initMedia: function(media) {
			// Remove any existing track elements
			var $media = $(this.htmlElement.media).empty();

			// Create any track elements given with the media, as an Array of track Objects.
			$.each(media.track || [], function(i,v) {
				var track = document.createElement('track');
				track.setAttribute("kind", v.kind ? v.kind : "");
				track.setAttribute("src", v.src ? v.src : "");
				track.setAttribute("srclang", v.srclang ? v.srclang : "");
				track.setAttribute("label", v.label ? v.label : "");
				if(v.def) {
					track.setAttribute("default", v.def);
				}
				$media.append(track);
			});

			this.htmlElement.media.src = this.status.src;

			if(this.options.preload !== 'none') {
				this._html_load(); // See function for comments
			}
			this._trigger($.jPlayer.event.timeupdate); // The flash generates this event for its solution.
		},
		_html_setFormat: function(media) {
			var self = this;
			// Always finds a format due to checks in setMedia()
			$.each(this.formats, function(priority, format) {
				if(self.html.support[format] && media[format]) {
					self.status.src = media[format];
					self.status.format[format] = true;
					self.status.formatType = format;
					return false;
				}
			});
		},
		_html_setAudio: function(media) {
			this._html_setFormat(media);
			this.htmlElement.media = this.htmlElement.audio;
			this._html_initMedia(media);
		},
		_html_setVideo: function(media) {
			this._html_setFormat(media);
			if(this.status.nativeVideoControls) {
				this.htmlElement.video.poster = this._validString(media.poster) ? media.poster : "";
			}
			this.htmlElement.media = this.htmlElement.video;
			this._html_initMedia(media);
		},
		_html_resetMedia: function() {
			if(this.htmlElement.media) {
				if(this.htmlElement.media.id === this.internal.video.id && !this.status.nativeVideoControls) {
					this.internal.video.jq.css({'width':'0px', 'height':'0px'});
				}
				this.htmlElement.media.pause();
			}
		},
		_html_clearMedia: function() {
			if(this.htmlElement.media) {
				this.htmlElement.media.src = "about:blank";
				// The following load() is only required for Firefox 3.6 (PowerMacs).
				// Recent HTMl5 browsers only require the src change. Due to changes in W3C spec and load() effect.
				this.htmlElement.media.load(); // Stops an old, "in progress" download from continuing the download. Triggers the loadstart, error and emptied events, due to the empty src. Also an abort event if a download was in progress.
			}
		},
		_html_load: function() {
			// This function remains to allow the early HTML5 browsers to work, such as Firefox 3.6
			// A change in the W3C spec for the media.load() command means that this is no longer necessary.
			// This command should be removed and actually causes minor undesirable effects on some browsers. Such as loading the whole file and not only the metadata.
			if(this.status.waitForLoad) {
				this.status.waitForLoad = false;
				this.htmlElement.media.load();
			}
			clearTimeout(this.internal.htmlDlyCmdId);
		},
		_html_play: function(time) {
			var self = this,
				media = this.htmlElement.media;

			this._html_load(); // Loads if required and clears any delayed commands.

			if(!isNaN(time)) {

				// Attempt to play it, since iOS has been ignoring commands
				if(this.internal.cmdsIgnored) {
					media.play();
				}

				try {
					// !media.seekable is for old HTML5 browsers, like Firefox 3.6.
					// Checking seekable.length is important for iOS6 to work with setMedia().play(time)
					if(!media.seekable || typeof media.seekable === "object" && media.seekable.length > 0) {
						media.currentTime = time;
						media.play();
					} else {
						throw 1;
					}
				} catch(err) {
					this.internal.htmlDlyCmdId = setTimeout(function() {
						self.play(time);
					}, 250);
					return; // Cancel execution and wait for the delayed command.
				}
			} else {
				media.play();
			}
			this._html_checkWaitForPlay();
		},
		_html_pause: function(time) {
			var self = this,
				media = this.htmlElement.media;
			
			if(time > 0) { // We do not want the stop() command, which does pause(0), causing a load operation.
				this._html_load(); // Loads if required and clears any delayed commands.
			} else {
				clearTimeout(this.internal.htmlDlyCmdId);
			}

			// Order of these commands is important for Safari (Win) and IE9. Pause then change currentTime.
			media.pause();

			if(!isNaN(time)) {
				try {
					if(!media.seekable || typeof media.seekable === "object" && media.seekable.length > 0) {
						media.currentTime = time;
					} else {
						throw 1;
					}
				} catch(err) {
					this.internal.htmlDlyCmdId = setTimeout(function() {
						self.pause(time);
					}, 250);
					return; // Cancel execution and wait for the delayed command.
				}
			}
			if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
				this._html_checkWaitForPlay();
			}
		},
		_html_playHead: function(percent) {
			var self = this,
				media = this.htmlElement.media;

			this._html_load(); // Loads if required and clears any delayed commands.

			try {
				if(typeof media.seekable === "object" && media.seekable.length > 0) {
					media.currentTime = percent * media.seekable.end(media.seekable.length-1) / 100;
				} else if(media.duration > 0 && !isNaN(media.duration)) {
					media.currentTime = percent * media.duration / 100;
				} else {
					throw "e";
				}
			} catch(err) {
				this.internal.htmlDlyCmdId = setTimeout(function() {
					self.playHead(percent);
				}, 250);
				return; // Cancel execution and wait for the delayed command.
			}
			if(!this.status.waitForLoad) {
				this._html_checkWaitForPlay();
			}
		},
		_html_checkWaitForPlay: function() {
			if(this.status.waitForPlay) {
				this.status.waitForPlay = false;
				if(this.css.jq.videoPlay.length) {
					this.css.jq.videoPlay.hide();
				}
				if(this.status.video) {
					this.internal.poster.jq.hide();
					this.internal.video.jq.css({'width': this.status.width, 'height': this.status.height});
				}
			}
		},
		_html_volume: function(v) {
			if(this.html.audio.available) {
				this.htmlElement.audio.volume = v;
			}
			if(this.html.video.available) {
				this.htmlElement.video.volume = v;
			}
		},
		_html_mute: function(m) {
			if(this.html.audio.available) {
				this.htmlElement.audio.muted = m;
			}
			if(this.html.video.available) {
				this.htmlElement.video.muted = m;
			}
		},
		_flash_setAudio: function(media) {
			var self = this;
			try {
				// Always finds a format due to checks in setMedia()
				$.each(this.formats, function(priority, format) {
					if(self.flash.support[format] && media[format]) {
						switch (format) {
							case "m4a" :
							case "fla" :
								self._getMovie().fl_setAudio_m4a(media[format]);
								break;
							case "mp3" :
								self._getMovie().fl_setAudio_mp3(media[format]);
								break;
							case "rtmpa":
								self._getMovie().fl_setAudio_rtmp(media[format]);
								break;
						}
						self.status.src = media[format];
						self.status.format[format] = true;
						self.status.formatType = format;
						return false;
					}
				});

				if(this.options.preload === 'auto') {
					this._flash_load();
					this.status.waitForLoad = false;
				}
			} catch(err) { this._flashError(err); }
		},
		_flash_setVideo: function(media) {
			var self = this;
			try {
				// Always finds a format due to checks in setMedia()
				$.each(this.formats, function(priority, format) {
					if(self.flash.support[format] && media[format]) {
						switch (format) {
							case "m4v" :
							case "flv" :
								self._getMovie().fl_setVideo_m4v(media[format]);
								break;
							case "rtmpv":
								self._getMovie().fl_setVideo_rtmp(media[format]);
								break;		
						}
						self.status.src = media[format];
						self.status.format[format] = true;
						self.status.formatType = format;
						return false;
					}
				});

				if(this.options.preload === 'auto') {
					this._flash_load();
					this.status.waitForLoad = false;
				}
			} catch(err) { this._flashError(err); }
		},
		_flash_resetMedia: function() {
			this.internal.flash.jq.css({'width':'0px', 'height':'0px'}); // Must do via CSS as setting attr() to zero causes a jQuery error in IE.
			this._flash_pause(NaN);
		},
		_flash_clearMedia: function() {
			try {
				this._getMovie().fl_clearMedia();
			} catch(err) { this._flashError(err); }
		},
		_flash_load: function() {
			try {
				this._getMovie().fl_load();
			} catch(err) { this._flashError(err); }
			this.status.waitForLoad = false;
		},
		_flash_play: function(time) {
			try {
				this._getMovie().fl_play(time);
			} catch(err) { this._flashError(err); }
			this.status.waitForLoad = false;
			this._flash_checkWaitForPlay();
		},
		_flash_pause: function(time) {
			try {
				this._getMovie().fl_pause(time);
			} catch(err) { this._flashError(err); }
			if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
				this.status.waitForLoad = false;
				this._flash_checkWaitForPlay();
			}
		},
		_flash_playHead: function(p) {
			try {
				this._getMovie().fl_play_head(p);
			} catch(err) { this._flashError(err); }
			if(!this.status.waitForLoad) {
				this._flash_checkWaitForPlay();
			}
		},
		_flash_checkWaitForPlay: function() {
			if(this.status.waitForPlay) {
				this.status.waitForPlay = false;
				if(this.css.jq.videoPlay.length) {
					this.css.jq.videoPlay.hide();
				}
				if(this.status.video) {
					this.internal.poster.jq.hide();
					this.internal.flash.jq.css({'width': this.status.width, 'height': this.status.height});
				}
			}
		},
		_flash_volume: function(v) {
			try {
				this._getMovie().fl_volume(v);
			} catch(err) { this._flashError(err); }
		},
		_flash_mute: function(m) {
			try {
				this._getMovie().fl_mute(m);
			} catch(err) { this._flashError(err); }
		},
		_getMovie: function() {
			return document[this.internal.flash.id];
		},
		_getFlashPluginVersion: function() {

			// _getFlashPluginVersion() code influenced by:
			// - FlashReplace 1.01: http://code.google.com/p/flashreplace/
			// - SWFObject 2.2: http://code.google.com/p/swfobject/

			var version = 0,
				flash;
			if(window.ActiveXObject) {
				try {
					flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					if (flash) { // flash will return null when ActiveX is disabled
						var v = flash.GetVariable("$version");
						if(v) {
							v = v.split(" ")[1].split(",");
							version = parseInt(v[0], 10) + "." + parseInt(v[1], 10);
						}
					}
				} catch(e) {}
			}
			else if(navigator.plugins && navigator.mimeTypes.length > 0) {
				flash = navigator.plugins["Shockwave Flash"];
				if(flash) {
					version = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1");
				}
			}
			return version * 1; // Converts to a number
		},
		_checkForFlash: function (version) {
			var flashOk = false;
			if(this._getFlashPluginVersion() >= version) {
				flashOk = true;
			}
			return flashOk;
		},
		_validString: function(url) {
			return (url && typeof url === "string"); // Empty strings return false
		},
		_limitValue: function(value, min, max) {
			return (value < min) ? min : ((value > max) ? max : value);
		},
		_urlNotSetError: function(context) {
			this._error( {
				type: $.jPlayer.error.URL_NOT_SET,
				context: context,
				message: $.jPlayer.errorMsg.URL_NOT_SET,
				hint: $.jPlayer.errorHint.URL_NOT_SET
			});
		},
		_flashError: function(error) {
			var errorType;
			if(!this.internal.ready) {
				errorType = "FLASH";
			} else {
				errorType = "FLASH_DISABLED";
			}
			this._error( {
				type: $.jPlayer.error[errorType],
				context: this.internal.flash.swf,
				message: $.jPlayer.errorMsg[errorType] + error.message,
				hint: $.jPlayer.errorHint[errorType]
			});
			// Allow the audio player to recover if display:none and then shown again, or with position:fixed on Firefox.
			// This really only affects audio in a media player, as an audio player could easily move the jPlayer element away from such issues.
			this.internal.flash.jq.css({'width':'1px', 'height':'1px'});
		},
		_error: function(error) {
			this._trigger($.jPlayer.event.error, error);
			if(this.options.errorAlerts) {
				this._alert("Error!" + (error.message ? "\n\n" + error.message : "") + (error.hint ? "\n\n" + error.hint : "") + "\n\nContext: " + error.context);
			}
		},
		_warning: function(warning) {
			this._trigger($.jPlayer.event.warning, undefined, warning);
			if(this.options.warningAlerts) {
				this._alert("Warning!" + (warning.message ? "\n\n" + warning.message : "") + (warning.hint ? "\n\n" + warning.hint : "") + "\n\nContext: " + warning.context);
			}
		},
		_alert: function(message) {
			alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id +"' : " + message);
		},
		_emulateHtmlBridge: function() {
			var self = this;

			// Emulate methods on jPlayer's DOM element.
			$.each( $.jPlayer.emulateMethods.split(/\s+/g), function(i, name) {
				self.internal.domNode[name] = function(arg) {
					self[name](arg);
				};

			});

			// Bubble jPlayer events to its DOM element.
			$.each($.jPlayer.event, function(eventName,eventType) {
				var nativeEvent = true;
				$.each( $.jPlayer.reservedEvent.split(/\s+/g), function(i, name) {
					if(name === eventName) {
						nativeEvent = false;
						return false;
					}
				});
				if(nativeEvent) {
					self.element.bind(eventType + ".jPlayer.jPlayerHtml", function() { // With .jPlayer & .jPlayerHtml namespaces.
						self._emulateHtmlUpdate();
						var domEvent = document.createEvent("Event");
						domEvent.initEvent(eventName, false, true);
						self.internal.domNode.dispatchEvent(domEvent);
					});
				}
				// The error event would require a special case
			});

			// IE9 has a readyState property on all elements. The document should have it, but all (except media) elements inherit it in IE9. This conflicts with Popcorn, which polls the readyState.
		},
		_emulateHtmlUpdate: function() {
			var self = this;

			$.each( $.jPlayer.emulateStatus.split(/\s+/g), function(i, name) {
				self.internal.domNode[name] = self.status[name];
			});
			$.each( $.jPlayer.emulateOptions.split(/\s+/g), function(i, name) {
				self.internal.domNode[name] = self.options[name];
			});
		},
		_destroyHtmlBridge: function() {
			var self = this;

			// Bridge event handlers are also removed by destroy() through .jPlayer namespace.
			this.element.unbind(".jPlayerHtml"); // Remove all event handlers created by the jPlayer bridge. So you can change the emulateHtml option.

			// Remove the methods and properties
			var emulated = $.jPlayer.emulateMethods + " " + $.jPlayer.emulateStatus + " " + $.jPlayer.emulateOptions;
			$.each( emulated.split(/\s+/g), function(i, name) {
				delete self.internal.domNode[name];
			});
		}
	};

	$.jPlayer.error = {
		FLASH: "e_flash",
		FLASH_DISABLED: "e_flash_disabled",
		NO_SOLUTION: "e_no_solution",
		NO_SUPPORT: "e_no_support",
		URL: "e_url",
		URL_NOT_SET: "e_url_not_set",
		VERSION: "e_version"
	};

	$.jPlayer.errorMsg = {
		FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ", // Used in: _flashError()
		FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ", // Used in: _flashError()
		NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.", // Used in: _init()
		NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", // Used in: setMedia()
		URL: "Media URL could not be loaded.", // Used in: jPlayerFlashEvent() and _addHtmlEventListeners()
		URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.", // Used in: load(), play(), pause(), stop() and playHead()
		VERSION: "jPlayer " + $.jPlayer.prototype.version.script + " needs Jplayer.swf version " + $.jPlayer.prototype.version.needFlash + " but found " // Used in: jPlayerReady()
	};

	$.jPlayer.errorHint = {
		FLASH: "Check your swfPath option and that Jplayer.swf is there.",
		FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
		NO_SOLUTION: "Review the jPlayer options: support and supplied.",
		NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
		URL: "Check media URL is valid.",
		URL_NOT_SET: "Use setMedia() to set the media URL.",
		VERSION: "Update jPlayer files."
	};

	$.jPlayer.warning = {
		CSS_SELECTOR_COUNT: "e_css_selector_count",
		CSS_SELECTOR_METHOD: "e_css_selector_method",
		CSS_SELECTOR_STRING: "e_css_selector_string",
		OPTION_KEY: "e_option_key"
	};

	$.jPlayer.warningMsg = {
		CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
		CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
		CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
		OPTION_KEY: "The option requested in jPlayer('option') is undefined."
	};

	$.jPlayer.warningHint = {
		CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
		CSS_SELECTOR_METHOD: "Check your method name.",
		CSS_SELECTOR_STRING: "Check your css selector is a string.",
		OPTION_KEY: "Check your option name."
	};
}));


/*!
 * Chart.js
 * http://chartjs.org/
 *
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

//Define the global Chart Variable as a class.
window.Chart = function(context){

	var chart = this;
	
	
	//Easing functions adapted from Robert Penner's easing equations
	//http://www.robertpenner.com/easing/
	
	var animationOptions = {
		linear : function (t){
			return t;
		},
		easeInQuad: function (t) {
			return t*t;
		},
		easeOutQuad: function (t) {
			return -1 *t*(t-2);
		},
		easeInOutQuad: function (t) {
			if ((t/=1/2) < 1) return 1/2*t*t;
			return -1/2 * ((--t)*(t-2) - 1);
		},
		easeInCubic: function (t) {
			return t*t*t;
		},
		easeOutCubic: function (t) {
			return 1*((t=t/1-1)*t*t + 1);
		},
		easeInOutCubic: function (t) {
			if ((t/=1/2) < 1) return 1/2*t*t*t;
			return 1/2*((t-=2)*t*t + 2);
		},
		easeInQuart: function (t) {
			return t*t*t*t;
		},
		easeOutQuart: function (t) {
			return -1 * ((t=t/1-1)*t*t*t - 1);
		},
		easeInOutQuart: function (t) {
			if ((t/=1/2) < 1) return 1/2*t*t*t*t;
			return -1/2 * ((t-=2)*t*t*t - 2);
		},
		easeInQuint: function (t) {
			return 1*(t/=1)*t*t*t*t;
		},
		easeOutQuint: function (t) {
			return 1*((t=t/1-1)*t*t*t*t + 1);
		},
		easeInOutQuint: function (t) {
			if ((t/=1/2) < 1) return 1/2*t*t*t*t*t;
			return 1/2*((t-=2)*t*t*t*t + 2);
		},
		easeInSine: function (t) {
			return -1 * Math.cos(t/1 * (Math.PI/2)) + 1;
		},
		easeOutSine: function (t) {
			return 1 * Math.sin(t/1 * (Math.PI/2));
		},
		easeInOutSine: function (t) {
			return -1/2 * (Math.cos(Math.PI*t/1) - 1);
		},
		easeInExpo: function (t) {
			return (t==0) ? 1 : 1 * Math.pow(2, 10 * (t/1 - 1));
		},
		easeOutExpo: function (t) {
			return (t==1) ? 1 : 1 * (-Math.pow(2, -10 * t/1) + 1);
		},
		easeInOutExpo: function (t) {
			if (t==0) return 0;
			if (t==1) return 1;
			if ((t/=1/2) < 1) return 1/2 * Math.pow(2, 10 * (t - 1));
			return 1/2 * (-Math.pow(2, -10 * --t) + 2);
			},
		easeInCirc: function (t) {
			if (t>=1) return t;
			return -1 * (Math.sqrt(1 - (t/=1)*t) - 1);
		},
		easeOutCirc: function (t) {
			return 1 * Math.sqrt(1 - (t=t/1-1)*t);
		},
		easeInOutCirc: function (t) {
			if ((t/=1/2) < 1) return -1/2 * (Math.sqrt(1 - t*t) - 1);
			return 1/2 * (Math.sqrt(1 - (t-=2)*t) + 1);
		},
		easeInElastic: function (t) {
			var s=1.70158;var p=0;var a=1;
			if (t==0) return 0;  if ((t/=1)==1) return 1;  if (!p) p=1*.3;
			if (a < Math.abs(1)) { a=1; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (1/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*1-s)*(2*Math.PI)/p ));
		},
		easeOutElastic: function (t) {
			var s=1.70158;var p=0;var a=1;
			if (t==0) return 0;  if ((t/=1)==1) return 1;  if (!p) p=1*.3;
			if (a < Math.abs(1)) { a=1; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (1/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*1-s)*(2*Math.PI)/p ) + 1;
		},
		easeInOutElastic: function (t) {
			var s=1.70158;var p=0;var a=1;
			if (t==0) return 0;  if ((t/=1/2)==2) return 1;  if (!p) p=1*(.3*1.5);
			if (a < Math.abs(1)) { a=1; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (1/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*1-s)*(2*Math.PI)/p ));
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*1-s)*(2*Math.PI)/p )*.5 + 1;
		},
		easeInBack: function (t) {
			var s = 1.70158;
			return 1*(t/=1)*t*((s+1)*t - s);
		},
		easeOutBack: function (t) {
			var s = 1.70158;
			return 1*((t=t/1-1)*t*((s+1)*t + s) + 1);
		},
		easeInOutBack: function (t) {
			var s = 1.70158; 
			if ((t/=1/2) < 1) return 1/2*(t*t*(((s*=(1.525))+1)*t - s));
			return 1/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2);
		},
		easeInBounce: function (t) {
			return 1 - animationOptions.easeOutBounce (1-t);
		},
		easeOutBounce: function (t) {
			if ((t/=1) < (1/2.75)) {
				return 1*(7.5625*t*t);
			} else if (t < (2/2.75)) {
				return 1*(7.5625*(t-=(1.5/2.75))*t + .75);
			} else if (t < (2.5/2.75)) {
				return 1*(7.5625*(t-=(2.25/2.75))*t + .9375);
			} else {
				return 1*(7.5625*(t-=(2.625/2.75))*t + .984375);
			}
		},
		easeInOutBounce: function (t) {
			if (t < 1/2) return animationOptions.easeInBounce (t*2) * .5;
			return animationOptions.easeOutBounce (t*2-1) * .5 + 1*.5;
		}
	};

	//Variables global to the chart
	var width = context.canvas.width;
	var height = context.canvas.height;


	//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
	if (window.devicePixelRatio) {
		context.canvas.style.width = width + "px";
		context.canvas.style.height = height + "px";
		context.canvas.height = height * window.devicePixelRatio;
		context.canvas.width = width * window.devicePixelRatio;
		context.scale(window.devicePixelRatio, window.devicePixelRatio);
	}

	this.PolarArea = function(data,options){
	
		chart.PolarArea.defaults = {
			scaleOverlay : true,
			scaleOverride : false,
			scaleSteps : null,
			scaleStepWidth : null,
			scaleStartValue : null,
			scaleShowLine : true,
			scaleLineColor : "rgba(0,0,0,.1)",
			scaleLineWidth : 1,
			scaleShowLabels : true,
			scaleLabel : "<%=value%>",
			scaleFontFamily : "'Arial'",
			scaleFontSize : 12,
			scaleFontStyle : "normal",
			scaleFontColor : "#666",
			scaleShowLabelBackdrop : true,
			scaleBackdropColor : "rgba(255,255,255,0.75)",
			scaleBackdropPaddingY : 2,
			scaleBackdropPaddingX : 2,
			segmentShowStroke : true,
			segmentStrokeColor : "#fff",
			segmentStrokeWidth : 2,
			animation : true,
			animationSteps : 100,
			animationEasing : "easeOutBounce",
			animateRotate : true,
			animateScale : false,
			onAnimationComplete : null
		};
		
		var config = (options)? mergeChartConfig(chart.PolarArea.defaults,options) : chart.PolarArea.defaults;
		
		return new PolarArea(data,config,context);
	};

	this.Radar = function(data,options){
	
		chart.Radar.defaults = {
			scaleOverlay : false,
			scaleOverride : false,
			scaleSteps : null,
			scaleStepWidth : null,
			scaleStartValue : null,
			scaleShowLine : true,
			scaleLineColor : "rgba(0,0,0,.1)",
			scaleLineWidth : 1,
			scaleShowLabels : false,
			scaleLabel : "<%=value%>",
			scaleFontFamily : "'Arial'",
			scaleFontSize : 12,
			scaleFontStyle : "normal",
			scaleFontColor : "#666",
			scaleShowLabelBackdrop : true,
			scaleBackdropColor : "rgba(255,255,255,0.75)",
			scaleBackdropPaddingY : 2,
			scaleBackdropPaddingX : 2,
			angleShowLineOut : true,
			angleLineColor : "rgba(0,0,0,.1)",
			angleLineWidth : 1,			
			pointLabelFontFamily : "'Arial'",
			pointLabelFontStyle : "normal",
			pointLabelFontSize : 12,
			pointLabelFontColor : "#666",
			pointDot : true,
			pointDotRadius : 3,
			pointDotStrokeWidth : 1,
			datasetStroke : true,
			datasetStrokeWidth : 2,
			datasetFill : true,
			animation : true,
			animationSteps : 60,
			animationEasing : "easeOutQuart",
			onAnimationComplete : null
		};
		
		var config = (options)? mergeChartConfig(chart.Radar.defaults,options) : chart.Radar.defaults;

		return new Radar(data,config,context);
	};
	
	this.Pie = function(data,options){
		chart.Pie.defaults = {
			segmentShowStroke : true,
			segmentStrokeColor : "#fff",
			segmentStrokeWidth : 2,
			animation : true,
			animationSteps : 100,
			animationEasing : "easeOutBounce",
			animateRotate : true,
			animateScale : false,
			onAnimationComplete : null
		};		

		var config = (options)? mergeChartConfig(chart.Pie.defaults,options) : chart.Pie.defaults;
		
		return new Pie(data,config,context);				
	};
	
	this.Doughnut = function(data,options){
	
		chart.Doughnut.defaults = {
			segmentShowStroke : true,
			segmentStrokeColor : "#fff",
			segmentStrokeWidth : 2,
			percentageInnerCutout : 50,
			animation : true,
			animationSteps : 100,
			animationEasing : "easeOutBounce",
			animateRotate : true,
			animateScale : false,
			onAnimationComplete : null
		};		

		var config = (options)? mergeChartConfig(chart.Doughnut.defaults,options) : chart.Doughnut.defaults;
		
		return new Doughnut(data,config,context);			
		
	};

	this.Line = function(data,options){
	
		chart.Line.defaults = {
			scaleOverlay : false,
			scaleOverride : false,
			scaleSteps : null,
			scaleStepWidth : null,
			scaleStartValue : null,
			scaleLineColor : "rgba(0,0,0,.1)",
			scaleLineWidth : 1,
			scaleShowLabels : true,
			scaleLabel : "<%=value%>",
			scaleFontFamily : "'Arial'",
			scaleFontSize : 12,
			scaleFontStyle : "normal",
			scaleFontColor : "#666",
			scaleShowGridLines : true,
			scaleGridLineColor : "rgba(0,0,0,.05)",
			scaleGridLineWidth : 1,
			bezierCurve : true,
			pointDot : true,
			pointDotRadius : 4,
			pointDotStrokeWidth : 2,
			datasetStroke : true,
			datasetStrokeWidth : 2,
			datasetFill : true,
			animation : true,
			animationSteps : 60,
			animationEasing : "easeOutQuart",
			onAnimationComplete : null
		};		
		var config = (options) ? mergeChartConfig(chart.Line.defaults,options) : chart.Line.defaults;
		
		return new Line(data,config,context);
	}
	
	this.Bar = function(data,options){
		chart.Bar.defaults = {
			scaleOverlay : false,
			scaleOverride : false,
			scaleSteps : null,
			scaleStepWidth : null,
			scaleStartValue : null,
			scaleLineColor : "rgba(0,0,0,.1)",
			scaleLineWidth : 1,
			scaleShowLabels : true,
			scaleLabel : "<%=value%>",
			scaleFontFamily : "'Arial'",
			scaleFontSize : 12,
			scaleFontStyle : "normal",
			scaleFontColor : "#666",
			scaleShowGridLines : true,
			scaleGridLineColor : "rgba(0,0,0,.05)",
			scaleGridLineWidth : 1,
			barShowStroke : true,
			barStrokeWidth : 2,
			barValueSpacing : 5,
			barDatasetSpacing : 1,
			animation : true,
			animationSteps : 60,
			animationEasing : "easeOutQuart",
			onAnimationComplete : null
		};		
		var config = (options) ? mergeChartConfig(chart.Bar.defaults,options) : chart.Bar.defaults;
		
		return new Bar(data,config,context);		
	}
	
	var clear = function(c){
		c.clearRect(0, 0, width, height);
	};

	var PolarArea = function(data,config,ctx){
		var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString;		
		
		
		calculateDrawingSizes();
		
		valueBounds = getValueBounds();

		labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : null;

		//Check and set the scale
		if (!config.scaleOverride){
			
			calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
		}
		else {
			calculatedScale = {
				steps : config.scaleSteps,
				stepValue : config.scaleStepWidth,
				graphMin : config.scaleStartValue,
				labels : []
			}
			populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
		}
		
		scaleHop = maxSize/(calculatedScale.steps);

		//Wrap in an animation loop wrapper
		animationLoop(config,drawScale,drawAllSegments,ctx);

		function calculateDrawingSizes(){
			maxSize = (Min([width,height])/2);
			//Remove whatever is larger - the font size or line width.
			
			maxSize -= Max([config.scaleFontSize*0.5,config.scaleLineWidth*0.5]);
			
			labelHeight = config.scaleFontSize*2;
			//If we're drawing the backdrop - add the Y padding to the label height and remove from drawing region.
			if (config.scaleShowLabelBackdrop){
				labelHeight += (2 * config.scaleBackdropPaddingY);
				maxSize -= config.scaleBackdropPaddingY*1.5;
			}
			
			scaleHeight = maxSize;
			//If the label height is less than 5, set it to 5 so we don't have lines on top of each other.
			labelHeight = Default(labelHeight,5);
		}
		function drawScale(){
			for (var i=0; i<calculatedScale.steps; i++){
				//If the line object is there
				if (config.scaleShowLine){
					ctx.beginPath();
					ctx.arc(width/2, height/2, scaleHop * (i + 1), 0, (Math.PI * 2), true);
					ctx.strokeStyle = config.scaleLineColor;
					ctx.lineWidth = config.scaleLineWidth;
					ctx.stroke();
				}

				if (config.scaleShowLabels){
					ctx.textAlign = "center";
					ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
 					var label =  calculatedScale.labels[i];
					//If the backdrop object is within the font object
					if (config.scaleShowLabelBackdrop){
						var textWidth = ctx.measureText(label).width;
						ctx.fillStyle = config.scaleBackdropColor;
						ctx.beginPath();
						ctx.rect(
							Math.round(width/2 - textWidth/2 - config.scaleBackdropPaddingX),     //X
							Math.round(height/2 - (scaleHop * (i + 1)) - config.scaleFontSize*0.5 - config.scaleBackdropPaddingY),//Y
							Math.round(textWidth + (config.scaleBackdropPaddingX*2)), //Width
							Math.round(config.scaleFontSize + (config.scaleBackdropPaddingY*2)) //Height
						);
						ctx.fill();
					}
					ctx.textBaseline = "middle";
					ctx.fillStyle = config.scaleFontColor;
					ctx.fillText(label,width/2,height/2 - (scaleHop * (i + 1)));
				}
			}
		}
		function drawAllSegments(animationDecimal){
			var startAngle = -Math.PI/2,
			angleStep = (Math.PI*2)/data.length,
			scaleAnimation = 1,
			rotateAnimation = 1;
			if (config.animation) {
				if (config.animateScale) {
					scaleAnimation = animationDecimal;
				}
				if (config.animateRotate){
					rotateAnimation = animationDecimal;
				}
			}

			for (var i=0; i<data.length; i++){

				ctx.beginPath();
				ctx.arc(width/2,height/2,scaleAnimation * calculateOffset(data[i].value,calculatedScale,scaleHop),startAngle, startAngle + rotateAnimation*angleStep, false);
				ctx.lineTo(width/2,height/2);
				ctx.closePath();
				ctx.fillStyle = data[i].color;
				ctx.fill();

				if(config.segmentShowStroke){
					ctx.strokeStyle = config.segmentStrokeColor;
					ctx.lineWidth = config.segmentStrokeWidth;
					ctx.stroke();
				}
				startAngle += rotateAnimation*angleStep;
			}
		}
		function getValueBounds() {
			var upperValue = Number.MIN_VALUE;
			var lowerValue = Number.MAX_VALUE;
			for (var i=0; i<data.length; i++){
				if (data[i].value > upperValue) {upperValue = data[i].value;}
				if (data[i].value < lowerValue) {lowerValue = data[i].value;}
			};

			var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
			var minSteps = Math.floor((scaleHeight / labelHeight*0.5));
			
			return {
				maxValue : upperValue,
				minValue : lowerValue,
				maxSteps : maxSteps,
				minSteps : minSteps
			};
			

		}
	}

	var Radar = function (data,config,ctx) {
		var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString;	
			
		//If no labels are defined set to an empty array, so referencing length for looping doesn't blow up.
		if (!data.labels) data.labels = [];
		
		calculateDrawingSizes();

		var valueBounds = getValueBounds();

		labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : null;

		//Check and set the scale
		if (!config.scaleOverride){
			
			calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
		}
		else {
			calculatedScale = {
				steps : config.scaleSteps,
				stepValue : config.scaleStepWidth,
				graphMin : config.scaleStartValue,
				labels : []
			}
			populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
		}
		
		scaleHop = maxSize/(calculatedScale.steps);
		
		animationLoop(config,drawScale,drawAllDataPoints,ctx);
		
		//Radar specific functions.
		function drawAllDataPoints(animationDecimal){
			var rotationDegree = (2*Math.PI)/data.datasets[0].data.length;

			ctx.save();
			//translate to the centre of the canvas.
			ctx.translate(width/2,height/2);
			
			//We accept multiple data sets for radar charts, so show loop through each set
			for (var i=0; i<data.datasets.length; i++){
				ctx.beginPath();

				ctx.moveTo(0,animationDecimal*(-1*calculateOffset(data.datasets[i].data[0],calculatedScale,scaleHop)));
				for (var j=1; j<data.datasets[i].data.length; j++){
					ctx.rotate(rotationDegree);	
					ctx.lineTo(0,animationDecimal*(-1*calculateOffset(data.datasets[i].data[j],calculatedScale,scaleHop)));
			
				}
				ctx.closePath();
				
				
				ctx.fillStyle = data.datasets[i].fillColor;
				ctx.strokeStyle = data.datasets[i].strokeColor;
				ctx.lineWidth = config.datasetStrokeWidth;
				ctx.fill();
				ctx.stroke();
				
								
				if (config.pointDot){
					ctx.fillStyle = data.datasets[i].pointColor;
					ctx.strokeStyle = data.datasets[i].pointStrokeColor;
					ctx.lineWidth = config.pointDotStrokeWidth;
					for (var k=0; k<data.datasets[i].data.length; k++){
						ctx.rotate(rotationDegree);
						ctx.beginPath();
						ctx.arc(0,animationDecimal*(-1*calculateOffset(data.datasets[i].data[k],calculatedScale,scaleHop)),config.pointDotRadius,2*Math.PI,false);
						ctx.fill();
						ctx.stroke();
					}					
					
				}
				ctx.rotate(rotationDegree);
				
			}
			ctx.restore();
			
			
		}
		function drawScale(){
			var rotationDegree = (2*Math.PI)/data.datasets[0].data.length;
			ctx.save();
		    ctx.translate(width / 2, height / 2);	
			
			if (config.angleShowLineOut){
				ctx.strokeStyle = config.angleLineColor;		    	    
				ctx.lineWidth = config.angleLineWidth;
				for (var h=0; h<data.datasets[0].data.length; h++){
					
				    ctx.rotate(rotationDegree);
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(0,-maxSize);
					ctx.stroke();
				}
			}

			for (var i=0; i<calculatedScale.steps; i++){
				ctx.beginPath();
				
				if(config.scaleShowLine){
					ctx.strokeStyle = config.scaleLineColor;
					ctx.lineWidth = config.scaleLineWidth;
					ctx.moveTo(0,-scaleHop * (i+1));					
					for (var j=0; j<data.datasets[0].data.length; j++){
					    ctx.rotate(rotationDegree);
						ctx.lineTo(0,-scaleHop * (i+1));
					}
					ctx.closePath();
					ctx.stroke();			
							
				}
				
				if (config.scaleShowLabels){				
					ctx.textAlign = 'center';
					ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily; 
					ctx.textBaseline = "middle";
					
					if (config.scaleShowLabelBackdrop){
						var textWidth = ctx.measureText(calculatedScale.labels[i]).width;
						ctx.fillStyle = config.scaleBackdropColor;
						ctx.beginPath();
						ctx.rect(
							Math.round(- textWidth/2 - config.scaleBackdropPaddingX),     //X
							Math.round((-scaleHop * (i + 1)) - config.scaleFontSize*0.5 - config.scaleBackdropPaddingY),//Y
							Math.round(textWidth + (config.scaleBackdropPaddingX*2)), //Width
							Math.round(config.scaleFontSize + (config.scaleBackdropPaddingY*2)) //Height
						);
						ctx.fill();
					}						
					ctx.fillStyle = config.scaleFontColor;
					ctx.fillText(calculatedScale.labels[i],0,-scaleHop*(i+1));
				}

			}
			for (var k=0; k<data.labels.length; k++){				
			ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize+"px " + config.pointLabelFontFamily;
			ctx.fillStyle = config.pointLabelFontColor;
				var opposite = Math.sin(rotationDegree*k) * (maxSize + config.pointLabelFontSize);
				var adjacent = Math.cos(rotationDegree*k) * (maxSize + config.pointLabelFontSize);
				
				if(rotationDegree*k == Math.PI || rotationDegree*k == 0){
					ctx.textAlign = "center";
				}
				else if(rotationDegree*k > Math.PI){
					ctx.textAlign = "right";
				}
				else{
					ctx.textAlign = "left";
				}
				
				ctx.textBaseline = "middle";
				
				ctx.fillText(data.labels[k],opposite,-adjacent);
				
			}
			ctx.restore();
		};
		function calculateDrawingSizes(){
			maxSize = (Min([width,height])/2);

			labelHeight = config.scaleFontSize*2;
			
			var labelLength = 0;
			for (var i=0; i<data.labels.length; i++){
				ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize+"px " + config.pointLabelFontFamily;
				var textMeasurement = ctx.measureText(data.labels[i]).width;
				if(textMeasurement>labelLength) labelLength = textMeasurement;
			}
			
			//Figure out whats the largest - the height of the text or the width of what's there, and minus it from the maximum usable size.
			maxSize -= Max([labelLength,((config.pointLabelFontSize/2)*1.5)]);				
			
			maxSize -= config.pointLabelFontSize;
			maxSize = CapValue(maxSize, null, 0);
			scaleHeight = maxSize;
			//If the label height is less than 5, set it to 5 so we don't have lines on top of each other.
			labelHeight = Default(labelHeight,5);
		};
		function getValueBounds() {
			var upperValue = Number.MIN_VALUE;
			var lowerValue = Number.MAX_VALUE;
			
			for (var i=0; i<data.datasets.length; i++){
				for (var j=0; j<data.datasets[i].data.length; j++){
					if (data.datasets[i].data[j] > upperValue){upperValue = data.datasets[i].data[j]}
					if (data.datasets[i].data[j] < lowerValue){lowerValue = data.datasets[i].data[j]}
				}
			}

			var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
			var minSteps = Math.floor((scaleHeight / labelHeight*0.5));
			
			return {
				maxValue : upperValue,
				minValue : lowerValue,
				maxSteps : maxSteps,
				minSteps : minSteps
			};
			

		}
	}

	var Pie = function(data,config,ctx){
		var segmentTotal = 0;
		
		//In case we have a canvas that is not a square. Minus 5 pixels as padding round the edge.
		var pieRadius = Min([height/2,width/2]) - 5;
		
		for (var i=0; i<data.length; i++){
			segmentTotal += data[i].value;
		}
		
		
		animationLoop(config,null,drawPieSegments,ctx);
				
		function drawPieSegments (animationDecimal){
			var cumulativeAngle = -Math.PI/2,
			scaleAnimation = 1,
			rotateAnimation = 1;
			if (config.animation) {
				if (config.animateScale) {
					scaleAnimation = animationDecimal;
				}
				if (config.animateRotate){
					rotateAnimation = animationDecimal;
				}
			}
			for (var i=0; i<data.length; i++){
				var segmentAngle = rotateAnimation * ((data[i].value/segmentTotal) * (Math.PI*2));
				ctx.beginPath();
				ctx.arc(width/2,height/2,scaleAnimation * pieRadius,cumulativeAngle,cumulativeAngle + segmentAngle);
				ctx.lineTo(width/2,height/2);
				ctx.closePath();
				ctx.fillStyle = data[i].color;
				ctx.fill();
				
				if(config.segmentShowStroke){
					ctx.lineWidth = config.segmentStrokeWidth;
					ctx.strokeStyle = config.segmentStrokeColor;
					ctx.stroke();
				}
				cumulativeAngle += segmentAngle;
			}			
		}		
	}

	var Doughnut = function(data,config,ctx){
		var segmentTotal = 0;
		
		//In case we have a canvas that is not a square. Minus 5 pixels as padding round the edge.
		var doughnutRadius = Min([height/2,width/2]) - 5;
		
		var cutoutRadius = doughnutRadius * (config.percentageInnerCutout/100);
		
		for (var i=0; i<data.length; i++){
			segmentTotal += data[i].value;
		}
		
		
		animationLoop(config,null,drawPieSegments,ctx);
		
		
		function drawPieSegments (animationDecimal){
			var cumulativeAngle = -Math.PI/2,
			scaleAnimation = 1,
			rotateAnimation = 1;
			if (config.animation) {
				if (config.animateScale) {
					scaleAnimation = animationDecimal;
				}
				if (config.animateRotate){
					rotateAnimation = animationDecimal;
				}
			}
			for (var i=0; i<data.length; i++){
				var segmentAngle = rotateAnimation * ((data[i].value/segmentTotal) * (Math.PI*2));
				ctx.beginPath();
				ctx.arc(width/2,height/2,scaleAnimation * doughnutRadius,cumulativeAngle,cumulativeAngle + segmentAngle,false);
				ctx.arc(width/2,height/2,scaleAnimation * cutoutRadius,cumulativeAngle + segmentAngle,cumulativeAngle,true);
				ctx.closePath();
				ctx.fillStyle = data[i].color;
				ctx.fill();
				
				if(config.segmentShowStroke){
					ctx.lineWidth = config.segmentStrokeWidth;
					ctx.strokeStyle = config.segmentStrokeColor;
					ctx.stroke();
				}
				cumulativeAngle += segmentAngle;
			}			
		}			
		
		
		
	}

	var Line = function(data,config,ctx){
		var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString, valueHop,widestXLabel, xAxisLength,yAxisPosX,xAxisPosY, rotateLabels = 0;
			
		calculateDrawingSizes();
		
		valueBounds = getValueBounds();
		//Check and set the scale
		labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : "";
		if (!config.scaleOverride){
			
			calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
		}
		else {
			calculatedScale = {
				steps : config.scaleSteps,
				stepValue : config.scaleStepWidth,
				graphMin : config.scaleStartValue,
				labels : []
			}
			populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
		}
		
		scaleHop = Math.floor(scaleHeight/calculatedScale.steps);
		calculateXAxisSize();
		animationLoop(config,drawScale,drawLines,ctx);		
		
		function drawLines(animPc){
			for (var i=0; i<data.datasets.length; i++){
				ctx.strokeStyle = data.datasets[i].strokeColor;
				ctx.lineWidth = config.datasetStrokeWidth;
				ctx.beginPath();
				ctx.moveTo(yAxisPosX, xAxisPosY - animPc*(calculateOffset(data.datasets[i].data[0],calculatedScale,scaleHop)))

				for (var j=1; j<data.datasets[i].data.length; j++){
					if (config.bezierCurve){
						ctx.bezierCurveTo(xPos(j-0.5),yPos(i,j-1),xPos(j-0.5),yPos(i,j),xPos(j),yPos(i,j));
					}
					else{
						ctx.lineTo(xPos(j),yPos(i,j));
					}
				}
				ctx.stroke();
				if (config.datasetFill){
					ctx.lineTo(yAxisPosX + (valueHop*(data.datasets[i].data.length-1)),xAxisPosY);
					ctx.lineTo(yAxisPosX,xAxisPosY);
					ctx.closePath();
					ctx.fillStyle = data.datasets[i].fillColor;
					ctx.fill();
				}
				else{
					ctx.closePath();
				}
				if(config.pointDot){
					ctx.fillStyle = data.datasets[i].pointColor;
					ctx.strokeStyle = data.datasets[i].pointStrokeColor;
					ctx.lineWidth = config.pointDotStrokeWidth;
					for (var k=0; k<data.datasets[i].data.length; k++){
						ctx.beginPath();
						ctx.arc(yAxisPosX + (valueHop *k),xAxisPosY - animPc*(calculateOffset(data.datasets[i].data[k],calculatedScale,scaleHop)),config.pointDotRadius,0,Math.PI*2,true);
						ctx.fill();
						ctx.stroke();
					}
				}
			}
			
			function yPos(dataSet,iteration){
				return xAxisPosY - animPc*(calculateOffset(data.datasets[dataSet].data[iteration],calculatedScale,scaleHop));			
			}
			function xPos(iteration){
				return yAxisPosX + (valueHop * iteration);
			}
		}
		function drawScale(){
			//X axis line
			ctx.lineWidth = config.scaleLineWidth;
			ctx.strokeStyle = config.scaleLineColor;
			ctx.beginPath();
			ctx.moveTo(width-widestXLabel/2+5,xAxisPosY);
			ctx.lineTo(width-(widestXLabel/2)-xAxisLength-5,xAxisPosY);
			ctx.stroke();
			
			
			if (rotateLabels > 0){
				ctx.save();
				ctx.textAlign = "right";
			}
			else{
				ctx.textAlign = "center";
			}
			ctx.fillStyle = config.scaleFontColor;
			for (var i=0; i<data.labels.length; i++){
				ctx.save();
				if (rotateLabels > 0){
					ctx.translate(yAxisPosX + i*valueHop,xAxisPosY + config.scaleFontSize);
					ctx.rotate(-(rotateLabels * (Math.PI/180)));
					ctx.fillText(data.labels[i], 0,0);
					ctx.restore();
				}
				
				else{
					ctx.fillText(data.labels[i], yAxisPosX + i*valueHop,xAxisPosY + config.scaleFontSize+3);					
				}

				ctx.beginPath();
				ctx.moveTo(yAxisPosX + i * valueHop, xAxisPosY+3);
				
				//Check i isnt 0, so we dont go over the Y axis twice.
				if(config.scaleShowGridLines && i>0){
					ctx.lineWidth = config.scaleGridLineWidth;
					ctx.strokeStyle = config.scaleGridLineColor;					
					ctx.lineTo(yAxisPosX + i * valueHop, 5);
				}
				else{
					ctx.lineTo(yAxisPosX + i * valueHop, xAxisPosY+3);				
				}
				ctx.stroke();
			}
			
			//Y axis
			ctx.lineWidth = config.scaleLineWidth;
			ctx.strokeStyle = config.scaleLineColor;
			ctx.beginPath();
			ctx.moveTo(yAxisPosX,xAxisPosY+5);
			ctx.lineTo(yAxisPosX,5);
			ctx.stroke();
			
			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			for (var j=0; j<calculatedScale.steps; j++){
				ctx.beginPath();
				ctx.moveTo(yAxisPosX-3,xAxisPosY - ((j+1) * scaleHop));
				if (config.scaleShowGridLines){
					ctx.lineWidth = config.scaleGridLineWidth;
					ctx.strokeStyle = config.scaleGridLineColor;
					ctx.lineTo(yAxisPosX + xAxisLength + 5,xAxisPosY - ((j+1) * scaleHop));					
				}
				else{
					ctx.lineTo(yAxisPosX-0.5,xAxisPosY - ((j+1) * scaleHop));
				}
				
				ctx.stroke();
				
				if (config.scaleShowLabels){
					ctx.fillText(calculatedScale.labels[j],yAxisPosX-8,xAxisPosY - ((j+1) * scaleHop));
				}
			}
			
			
		}
		function calculateXAxisSize(){
			var longestText = 1;
			//if we are showing the labels
			if (config.scaleShowLabels){
				ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
				for (var i=0; i<calculatedScale.labels.length; i++){
					var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
					longestText = (measuredText > longestText)? measuredText : longestText;
				}
				//Add a little extra padding from the y axis
				longestText +=10;
			}
			xAxisLength = width - longestText - widestXLabel;
			valueHop = Math.floor(xAxisLength/(data.labels.length-1));	
				
			yAxisPosX = width-widestXLabel/2-xAxisLength;
			xAxisPosY = scaleHeight + config.scaleFontSize/2;				
		}		
		function calculateDrawingSizes(){
			maxSize = height;

			//Need to check the X axis first - measure the length of each text metric, and figure out if we need to rotate by 45 degrees.
			ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
			widestXLabel = 1;
			for (var i=0; i<data.labels.length; i++){
				var textLength = ctx.measureText(data.labels[i]).width;
				//If the text length is longer - make that equal to longest text!
				widestXLabel = (textLength > widestXLabel)? textLength : widestXLabel;
			}
			if (width/data.labels.length < widestXLabel){
				rotateLabels = 45;
				if (width/data.labels.length < Math.cos(rotateLabels) * widestXLabel){
					rotateLabels = 90;
					maxSize -= widestXLabel; 
				}
				else{
					maxSize -= Math.sin(rotateLabels) * widestXLabel;
				}
			}
			else{
				maxSize -= config.scaleFontSize;
			}
			
			//Add a little padding between the x line and the text
			maxSize -= 5;
			
			
			labelHeight = config.scaleFontSize;
			
			maxSize -= labelHeight;
			//Set 5 pixels greater than the font size to allow for a little padding from the X axis.
			
			scaleHeight = maxSize;
			
			//Then get the area above we can safely draw on.
			
		}		
		function getValueBounds() {
			var upperValue = Number.MIN_VALUE;
			var lowerValue = Number.MAX_VALUE;
			for (var i=0; i<data.datasets.length; i++){
				for (var j=0; j<data.datasets[i].data.length; j++){
					if ( data.datasets[i].data[j] > upperValue) { upperValue = data.datasets[i].data[j] };
					if ( data.datasets[i].data[j] < lowerValue) { lowerValue = data.datasets[i].data[j] };
				}
			};
	
			var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
			var minSteps = Math.floor((scaleHeight / labelHeight*0.5));
			
			return {
				maxValue : upperValue,
				minValue : lowerValue,
				maxSteps : maxSteps,
				minSteps : minSteps
			};
			
	
		}

		
	}
	
	var Bar = function(data,config,ctx){
		var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString, valueHop,widestXLabel, xAxisLength,yAxisPosX,xAxisPosY,barWidth, rotateLabels = 0;
			
		calculateDrawingSizes();
		
		valueBounds = getValueBounds();
		//Check and set the scale
		labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : "";
		if (!config.scaleOverride){
			
			calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
		}
		else {
			calculatedScale = {
				steps : config.scaleSteps,
				stepValue : config.scaleStepWidth,
				graphMin : config.scaleStartValue,
				labels : []
			}
			populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
		}
		
		scaleHop = Math.floor(scaleHeight/calculatedScale.steps);
		calculateXAxisSize();
		animationLoop(config,drawScale,drawBars,ctx);		
		
		function drawBars(animPc){
			ctx.lineWidth = config.barStrokeWidth;
			for (var i=0; i<data.datasets.length; i++){
					ctx.fillStyle = data.datasets[i].fillColor;
					ctx.strokeStyle = data.datasets[i].strokeColor;
				for (var j=0; j<data.datasets[i].data.length; j++){
					var barOffset = yAxisPosX + config.barValueSpacing + valueHop*j + barWidth*i + config.barDatasetSpacing*i + config.barStrokeWidth*i;
					
					ctx.beginPath();
					ctx.moveTo(barOffset, xAxisPosY);
					ctx.lineTo(barOffset, xAxisPosY - animPc*calculateOffset(data.datasets[i].data[j],calculatedScale,scaleHop)+(config.barStrokeWidth/2));
					ctx.lineTo(barOffset + barWidth, xAxisPosY - animPc*calculateOffset(data.datasets[i].data[j],calculatedScale,scaleHop)+(config.barStrokeWidth/2));
					ctx.lineTo(barOffset + barWidth, xAxisPosY);
					if(config.barShowStroke){
						ctx.stroke();
					}
					ctx.closePath();
					ctx.fill();
				}
			}
			
		}
		function drawScale(){
			//X axis line
			ctx.lineWidth = config.scaleLineWidth;
			ctx.strokeStyle = config.scaleLineColor;
			ctx.beginPath();
			ctx.moveTo(width-widestXLabel/2+5,xAxisPosY);
			ctx.lineTo(width-(widestXLabel/2)-xAxisLength-5,xAxisPosY);
			ctx.stroke();
			
			
			if (rotateLabels > 0){
				ctx.save();
				ctx.textAlign = "right";
			}
			else{
				ctx.textAlign = "center";
			}
			ctx.fillStyle = config.scaleFontColor;
			for (var i=0; i<data.labels.length; i++){
				ctx.save();
				if (rotateLabels > 0){
					ctx.translate(yAxisPosX + i*valueHop,xAxisPosY + config.scaleFontSize);
					ctx.rotate(-(rotateLabels * (Math.PI/180)));
					ctx.fillText(data.labels[i], 0,0);
					ctx.restore();
				}
				
				else{
					ctx.fillText(data.labels[i], yAxisPosX + i*valueHop + valueHop/2,xAxisPosY + config.scaleFontSize+3);					
				}

				ctx.beginPath();
				ctx.moveTo(yAxisPosX + (i+1) * valueHop, xAxisPosY+3);
				
				//Check i isnt 0, so we dont go over the Y axis twice.
					ctx.lineWidth = config.scaleGridLineWidth;
					ctx.strokeStyle = config.scaleGridLineColor;					
					ctx.lineTo(yAxisPosX + (i+1) * valueHop, 5);
				ctx.stroke();
			}
			
			//Y axis
			ctx.lineWidth = config.scaleLineWidth;
			ctx.strokeStyle = config.scaleLineColor;
			ctx.beginPath();
			ctx.moveTo(yAxisPosX,xAxisPosY+5);
			ctx.lineTo(yAxisPosX,5);
			ctx.stroke();
			
			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			for (var j=0; j<calculatedScale.steps; j++){
				ctx.beginPath();
				ctx.moveTo(yAxisPosX-3,xAxisPosY - ((j+1) * scaleHop));
				if (config.scaleShowGridLines){
					ctx.lineWidth = config.scaleGridLineWidth;
					ctx.strokeStyle = config.scaleGridLineColor;
					ctx.lineTo(yAxisPosX + xAxisLength + 5,xAxisPosY - ((j+1) * scaleHop));					
				}
				else{
					ctx.lineTo(yAxisPosX-0.5,xAxisPosY - ((j+1) * scaleHop));
				}
				
				ctx.stroke();
				if (config.scaleShowLabels){
					ctx.fillText(calculatedScale.labels[j],yAxisPosX-8,xAxisPosY - ((j+1) * scaleHop));
				}
			}
			
			
		}
		function calculateXAxisSize(){
			var longestText = 1;
			//if we are showing the labels
			if (config.scaleShowLabels){
				ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
				for (var i=0; i<calculatedScale.labels.length; i++){
					var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
					longestText = (measuredText > longestText)? measuredText : longestText;
				}
				//Add a little extra padding from the y axis
				longestText +=10;
			}
			xAxisLength = width - longestText - widestXLabel;
			valueHop = Math.floor(xAxisLength/(data.labels.length));	
			
			barWidth = (valueHop - config.scaleGridLineWidth*2 - (config.barValueSpacing*2) - (config.barDatasetSpacing*data.datasets.length-1) - ((config.barStrokeWidth/2)*data.datasets.length-1))/data.datasets.length;
			
			yAxisPosX = width-widestXLabel/2-xAxisLength;
			xAxisPosY = scaleHeight + config.scaleFontSize/2;				
		}		
		function calculateDrawingSizes(){
			maxSize = height;

			//Need to check the X axis first - measure the length of each text metric, and figure out if we need to rotate by 45 degrees.
			ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
			widestXLabel = 1;
			for (var i=0; i<data.labels.length; i++){
				var textLength = ctx.measureText(data.labels[i]).width;
				//If the text length is longer - make that equal to longest text!
				widestXLabel = (textLength > widestXLabel)? textLength : widestXLabel;
			}
			if (width/data.labels.length < widestXLabel){
				rotateLabels = 45;
				if (width/data.labels.length < Math.cos(rotateLabels) * widestXLabel){
					rotateLabels = 90;
					maxSize -= widestXLabel; 
				}
				else{
					maxSize -= Math.sin(rotateLabels) * widestXLabel;
				}
			}
			else{
				maxSize -= config.scaleFontSize;
			}
			
			//Add a little padding between the x line and the text
			maxSize -= 5;
			
			
			labelHeight = config.scaleFontSize;
			
			maxSize -= labelHeight;
			//Set 5 pixels greater than the font size to allow for a little padding from the X axis.
			
			scaleHeight = maxSize;
			
			//Then get the area above we can safely draw on.
			
		}		
		function getValueBounds() {
			var upperValue = Number.MIN_VALUE;
			var lowerValue = Number.MAX_VALUE;
			for (var i=0; i<data.datasets.length; i++){
				for (var j=0; j<data.datasets[i].data.length; j++){
					if ( data.datasets[i].data[j] > upperValue) { upperValue = data.datasets[i].data[j] };
					if ( data.datasets[i].data[j] < lowerValue) { lowerValue = data.datasets[i].data[j] };
				}
			};
	
			var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
			var minSteps = Math.floor((scaleHeight / labelHeight*0.5));
			
			return {
				maxValue : upperValue,
				minValue : lowerValue,
				maxSteps : maxSteps,
				minSteps : minSteps
			};
			
	
		}
	}
	
	function calculateOffset(val,calculatedScale,scaleHop){
		var outerValue = calculatedScale.steps * calculatedScale.stepValue;
		var adjustedValue = val - calculatedScale.graphMin;
		var scalingFactor = CapValue(adjustedValue/outerValue,1,0);
		return (scaleHop*calculatedScale.steps) * scalingFactor;
	}
	
	function animationLoop(config,drawScale,drawData,ctx){
		var animFrameAmount = (config.animation)? 1/CapValue(config.animationSteps,Number.MAX_VALUE,1) : 1,
			easingFunction = animationOptions[config.animationEasing],
			percentAnimComplete =(config.animation)? 0 : 1;
		
	
		
		if (typeof drawScale !== "function") drawScale = function(){};
		
		requestAnimFrame(animLoop);
		
		function animateFrame(){
			var easeAdjustedAnimationPercent =(config.animation)? CapValue(easingFunction(percentAnimComplete),null,0) : 1;
			clear(ctx);
			if(config.scaleOverlay){
				drawData(easeAdjustedAnimationPercent);
				drawScale();
			} else {
				drawScale();
				drawData(easeAdjustedAnimationPercent);
			}				
		}
		function animLoop(){
			//We need to check if the animation is incomplete (less than 1), or complete (1).
				percentAnimComplete += animFrameAmount;
				animateFrame();	
				//Stop the loop continuing forever
				if (percentAnimComplete <= 1){
					requestAnimFrame(animLoop);
				}
				else{
					if (typeof config.onAnimationComplete == "function") config.onAnimationComplete();
				}
			
		}		
		
	}

	//Declare global functions to be called within this namespace here.
	
	
	// shim layer with setTimeout fallback
	var requestAnimFrame = (function(){
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	function calculateScale(drawingHeight,maxSteps,minSteps,maxValue,minValue,labelTemplateString){
			var graphMin,graphMax,graphRange,stepValue,numberOfSteps,valueRange,rangeOrderOfMagnitude,decimalNum;
			
			valueRange = maxValue - minValue;
			
			rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange);

        	graphMin = Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
            
            graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
            
            graphRange = graphMax - graphMin;
            
            stepValue = Math.pow(10, rangeOrderOfMagnitude);
            
	        numberOfSteps = Math.round(graphRange / stepValue);
	        
	        //Compare number of steps to the max and min for that size graph, and add in half steps if need be.	        
	        while(numberOfSteps < minSteps || numberOfSteps > maxSteps) {
	        	if (numberOfSteps < minSteps){
			        stepValue /= 2;
			        numberOfSteps = Math.round(graphRange/stepValue);
		        }
		        else{
			        stepValue *=2;
			        numberOfSteps = Math.round(graphRange/stepValue);
		        }
	        };

	        var labels = [];
	        populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue);
		
	        return {
		        steps : numberOfSteps,
				stepValue : stepValue,
				graphMin : graphMin,
				labels : labels		        
		        
	        }
		
			function calculateOrderOfMagnitude(val){
			  return Math.floor(Math.log(val) / Math.LN10);
			}		


	}

    //Populate an array of all the labels by interpolating the string.
    function populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue) {
        if (labelTemplateString) {
            //Fix floating point errors by setting to fixed the on the same decimal as the stepValue.
            for (var i = 1; i < numberOfSteps + 1; i++) {
                labels.push(tmpl(labelTemplateString, {value: (graphMin + (stepValue * i)).toFixed(getDecimalPlaces(stepValue))}));
            }
        }
    }
	
	//Max value from array
	function Max( array ){
		return Math.max.apply( Math, array );
	};
	//Min value from array
	function Min( array ){
		return Math.min.apply( Math, array );
	};
	//Default if undefined
	function Default(userDeclared,valueIfFalse){
		if(!userDeclared){
			return valueIfFalse;
		} else {
			return userDeclared;
		}
	};
	//Is a number function
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	//Apply cap a value at a high or low number
	function CapValue(valueToCap, maxValue, minValue){
		if(isNumber(maxValue)) {
			if( valueToCap > maxValue ) {
				return maxValue;
			}
		}
		if(isNumber(minValue)){
			if ( valueToCap < minValue ){
				return minValue;
			}
		}
		return valueToCap;
	}
	function getDecimalPlaces (num){
		var numberOfDecimalPlaces;
		if (num%1!=0){
			return num.toString().split(".")[1].length
		}
		else{
			return 0;
		}
		
	} 
	
	function mergeChartConfig(defaults,userDefined){
		var returnObj = {};
	    for (var attrname in defaults) { returnObj[attrname] = defaults[attrname]; }
	    for (var attrname in userDefined) { returnObj[attrname] = userDefined[attrname]; }
	    return returnObj;
	}
	
	//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
	  var cache = {};
	 
	  function tmpl(str, data){
	    // Figure out if we're getting a template, or if we need to
	    // load the template - and be sure to cache the result.
	    var fn = !/\W/.test(str) ?
	      cache[str] = cache[str] ||
	        tmpl(document.getElementById(str).innerHTML) :
	     
	      // Generate a reusable function that will serve as a template
	      // generator (and which will be cached).
	      new Function("obj",
	        "var p=[],print=function(){p.push.apply(p,arguments);};" +
	       
	        // Introduce the data as local variables using with(){}
	        "with(obj){p.push('" +
	       
	        // Convert the template into pure JavaScript
	        str
	          .replace(/[\r\t\n]/g, " ")
	          .split("<%").join("\t")
	          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	          .replace(/\t=(.*?)%>/g, "',$1,'")
	          .split("\t").join("');")
	          .split("%>").join("p.push('")
	          .split("\r").join("\\'")
	      + "');}return p.join('');");
	   
	    // Provide some basic currying to the user
	    return data ? fn( data ) : fn;
	  };
}




/*! Magnific Popup - v0.8.9 - 2013-06-04
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
;(function($) {

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_body,
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_setFocus = function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose = function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					return true;
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_body = $(document.body);
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		mfp.ev = data.mainEl || _document;

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
		
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(_checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		// Close button
		if(!mfp.st.closeBtnInside) {
			mfp.wrap.append( _getCloseBtn() );
		} else {
			_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
				values.close_replaceWith = _getCloseBtn(item.type);
			});
			_wrapClasses += ' mfp-close-btn-in';
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		// Close on ESC key
		_document.on('keyup' + EVENT_NS, function(e) {
			if(e.keyCode === 27) {
				mfp.close();
			}
		});

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var bodyStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    bodyStyles.paddingRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				bodyStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');


		// remove scrollbar, add padding e.t.c
		_body.css(bodyStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( document.body );



		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				_setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, function (e) {
				if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
					_setFocus();
					return false;
				}
			});

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE)  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var bodyStyles = {paddingRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				bodyStyles.overflow = '';
			}
			_body.css(bodyStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true ) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type = item.type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
		if( midClick || e.which !== 2 ) {
			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if(disableOn) {
				if($.isFunction(disableOn)) {
					if( !disableOn.call(mfp) ) {
						return true;
					}
				} else { // else it's number
					if( _window.width() < disableOn ) {
						return true;
					}
				}
			}
			
			if(e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if(mfp.isOpen) {
					e.stopPropagation();
				}
			}
				

			options.el = $(e.mfpEl);
			if(options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		}
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').click(function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) )
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.id = "mfp-sbm";
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) 
			options = {};

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		alignTop: false,
	
		removalDelay: 0,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...'

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {

		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			_body.removeClass(_ajaxCur);
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, function() {
				_removeAjaxCursor();
				if(mfp.req) {
					mfp.req.abort();
				}
			});
		},

		getAjax: function(item) {

			if(_ajaxCur)
				_body.addClass(_ajaxCur);

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					_setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<div class="mfp-img"></div>'+
					'<div class="mfp-bottom-bar">'+
						'<div class="mfp-title"></div>'+
						'<div class="mfp-counter"></div>'+
					'</div>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					_body.addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					_body.removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;
							
						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = new Image();
				img.className = 'mfp-img';
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});



/*>>image*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace('%curr%', curr + 1).replace('%total%', total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace('%title%', gSt.tPrev).replace('%dir%', 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace('%title%', gSt.tNext).replace('%dir%', 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/

/*>>fastclick*/
/**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 * 
 * 
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 * 
 */

(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();

/*>>fastclick*/
})(window.jQuery || window.Zepto);

/*!
 * iCheck v0.9.1, http://git.io/uhUPMA
 * =================================
 * Powerful jQuery plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Foy, http://damirfoy.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire) {

    // Walker
    var handle = ':' + _checkbox + ', :' + _radio,
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          };
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        if (options == 'destroy') {
          tidy(this, 'ifDestroyed');
        } else {
          operate($(this), true, options);
        };

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        };
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = ':' + selector;
      };

      // Clickable area limit
      if (area < -50) {
        area = -50;
      };

      // Walk around the selector
      walker(this);

      return stack.each(function() {

        // If already customized
        tidy(this);

        var self = $(this),
          node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = _mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)),

          // Wrap input
          parent = self.wrap('<div class="' + className + '"/>')[_callback]('ifCreated').parent().append(settings.insert),

          // Layer addition
          helper = $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className);
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, _update);

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseenter.i mouseleave.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {

                // mouseleave|touchend
                if (/ve|nd/.test(type)) {
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                };
              };

              if (_mobile) {
                event.stopPropagation();
              } else {
                return false;
              };
            };
          });
        };

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              };
            };

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          };
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {

                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              };

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              };
            };

            if (_mobile) {
              event.stopPropagation();
            } else {
              return false;
            };
          };
        });
      });
    } else {
      return this;
    };
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0];
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var state in active) {
        if (active[state]) {
          on(input, state, true);
        } else {
          off(input, state, true);
        };
      };

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      };

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        };
      } else {
        on(input, state);
      };
    };
  };

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(node, callback + capitalize(node[_type])),
      specific = option(node, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $.data(this, _iCheck)) {
            off($(this), state);
          };
        });
      };

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        };

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        };

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        };
      };

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    };

    // Add proper cursor
    if (node[_disabled] && !!option(node, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    };

    // Add state class
    parent[_add](specific || option(node, state));

    // Remove regular state class
    parent[_remove](regular || option(node, callback) || '');
  };

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(node, callback + capitalize(node[_type])),
      specific = option(node, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      };

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    };

    // Add proper cursor
    if (!node[_disabled] && !!option(node, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    };

    // Remove state class
    parent[_remove](specific || option(node, state) || '');

    // Add regular state class
    parent[_add](regular || option(node, callback));
  };

  // Remove all traces
  function tidy(node, callback) {
    if ($.data(node, _iCheck)) {
      var input = $(node);

      // Remove everything except input
      input.parent().html(input.attr('style', $.data(node, _iCheck).s || '')[_callback](callback || ''));

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + node.id + '"]').add(input.closest(_label)).off('.i');
    };
  };

  // Get some option
  function option(node, state, regular) {
    if ($.data(node, _iCheck)) {
      return $.data(node, _iCheck).o[state + (regular ? '' : 'Class')];
    };
  };

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      };

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    };
  };
})(jQuery);

/*
Copyright 2012 Igor Vaynberg

Version: 3.4.0 Timestamp: Tue May 14 08:27:33 PDT 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
 (function ($) {
 	if(typeof $.fn.each2 == "undefined"){
 		$.fn.extend({
 			/*
			* 4-10 times faster .each replacement
			* use it carefully, as it overrides jQuery context of element on each iteration
			*/
			each2 : function (c) {
				var j = $([0]), i = -1, l = this.length;
				while (
					++i < l
					&& (j.context = j[0] = this[i])
					&& c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
				);
				return this;
			}
 		});
 	}
})(jQuery);

(function ($, undefined) {
    "use strict";
    /*global document, window, jQuery, console */

    if (window.Select2 !== undefined) {
        return;
    }

    var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition, $document, scrollBarDimensions,

    KEY = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (k) {
            k = k.which ? k.which : k;
            switch (k) {
            case KEY.LEFT:
            case KEY.RIGHT:
            case KEY.UP:
            case KEY.DOWN:
                return true;
            }
            return false;
        },
        isControl: function (e) {
            var k = e.which;
            switch (k) {
            case KEY.SHIFT:
            case KEY.CTRL:
            case KEY.ALT:
                return true;
            }

            if (e.metaKey) return true;

            return false;
        },
        isFunctionKey: function (k) {
            k = k.which ? k.which : k;
            return k >= 112 && k <= 123;
        }
    },
    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>";

    $document = $(document);

    nextUid=(function() { var counter=1; return function() { return counter++; }; }());

    function indexOf(value, array) {
        var i = 0, l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar () {
        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
        $template.appendTo('body');

        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();

        return dim;
    }

    /**
     * Compares equality of a and b
     * @param a
     * @param b
     */
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        if (a.constructor === String) return a+'' === b+''; // IE requires a+'' instead of just a
        if (b.constructor === String) return b+'' === a+''; // IE requires b+'' instead of just b
        return false;
    }

    /**
     * Splits the string into an array of values, trimming each value. An empty array is returned for nulls or empty
     * strings
     * @param string
     * @param separator
     */
    function splitVal(string, separator) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = $.trim(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key="keyup-change-value";
        element.on("keydown", function () {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function () {
            var val= $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }

    $document.on("mousemove", function (e) {
        lastMousePosition = {x: e.pageX, y: e.pageY};
    });

    /**
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    function installFilteredMouseMove(element) {
	    element.on("mousemove", function (e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    /**
     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
     * within the last quietMillis milliseconds.
     *
     * @param quietMillis number of milliseconds to wait before invoking fn
     * @param fn function to be debounced
     * @param ctx object to be used as this reference within fn
     * @return debounced version of fn
     */
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function () {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    /**
     * A simple implementation of a thunk
     * @param formula function used to lazily initialize the thunk
     * @return {Function}
     */
    function thunk(formula) {
        var evaluated = false,
            value;
        return function() {
            if (evaluated === false) { value = formula(); evaluated = true; }
            return value;
        };
    };

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
        element.on("scroll", function (e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;

        /* set the focus in a 0 timeout - that way the focus is set after the processing
            of the current event has finished - which seems like the only reliable way
            to set focus */
        window.setTimeout(function() {
            var el=$el[0], pos=$el.val().length, range;

            $el.focus();

            /* make sure el received focus so we do not error out when trying to manipulate the caret.
                sometimes modals or others listeners may steal it after its set */
            if ($el.is(":visible") && el === document.activeElement) {

                /* after the focus is set move the caret to the end, necessary when we val()
                    just before setting focus */
                if(el.setSelectionRange)
                {
                    el.setSelectionRange(pos, pos);
                }
                else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return { offset: offset, length: length };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer){
        	var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
        	sizer = $(document.createElement("div")).css({
	            position: "absolute",
	            left: "-10000px",
	            top: "-10000px",
	            display: "none",
	            fontSize: style.fontSize,
	            fontFamily: style.fontFamily,
	            fontStyle: style.fontStyle,
	            fontWeight: style.fontWeight,
	            letterSpacing: style.letterSpacing,
	            textTransform: style.textTransform,
	            whiteSpace: "nowrap"
	        });
            sizer.attr("class","select2-sizer");
        	$("body").append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [], adapted;

        classes = dest.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }
        classes = src.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);
                    if (adapted) {
                        replacements.push(this);
                    }
                }
            });
        }
        dest.attr("class", replacements.join(" "));
    }


    function markMatch(text, term, markup, escapeMarkup) {
        var match=text.toUpperCase().indexOf(term.toUpperCase()),
            tl=term.length;

        if (match<0) {
            markup.push(escapeMarkup(text));
            return;
        }

        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration paramters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout, // current scheduled but not yet executed request
            requestSequence = 0, // sequence used to drop out-of-order responses
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;

        return function (query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                requestSequence += 1; // increment the sequence
                var requestNumber = requestSequence, // this request's sequence number
                    data = options.data, // ajax data function
                    url = ajaxUrl, // ajax url string or function
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                    // deprecated - to be removed in 4.0  - use params instead
                    deprecated = {
                        type: options.type || 'GET', // set type of request (GET or POST)
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback||undefined,
                        dataType: options.dataType||"json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

                if( null !== handler) { handler.abort(); }

                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }

                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function (data) {
                        if (requestNumber < requestSequence) {
                            return;
                        }
                        // TODO - replace query.page with query so users have access to term, page, etc.
                        var results = options.results(data, query.page);
                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }

    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used ti is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options, // data elements
            dataText,
            tmp,
            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

		 if ($.isArray(data)) {
            tmp = data;
            data = { results: tmp };
        }

		 if ($.isFunction(data) === false) {
            tmp = data;
            data = function() { return tmp; };
        }

        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            // if text is not a function we assume it to be a key name
            if (!$.isFunction(text)) {
                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
                text = function (item) { return item[dataText]; };
            }
        }

        return function (query) {
            var t = query.term, filtered = { results: [] }, process;
            if (t === "") {
                query.callback(data());
                return;
            }

            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
                    }
                    group.children=[];
                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };

            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
            query.callback(filtered);
        };
    }

    // TODO javadoc
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function (query) {
            var t = query.term, filtered = {results: []};
            $(isFunc ? data() : data).each(function () {
                var isObject = this.text !== undefined,
                    text = isObject ? this.text : this;
                if (t === "" || query.matcher(t, text)) {
                    filtered.results.push(isObject ? this : {id: this, text: this});
                }
            });
            query.callback(filtered);
        };
    }

    /**
     * Checks if the formatter function should be used.
     *
     * Throws an error if it is not a function. Returns true if it should be used,
     * false if no formatting should be performed.
     *
     * @param formatter
     */
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        throw new Error("formatterName must be a function or a falsy value");
    }

    function evaluate(val) {
        return $.isFunction(val) ? val() : val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }

    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
            token, // token
            index, // position at which the separator was found
            i, l, // looping variables
            separator; // the matched separator

        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

        while (true) {
            index = -1;

            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }

            if (index < 0) break; // did not find any token separator in the input string, bail

            token = input.substring(0, index);
            input = input.substring(index + separator.length);

            if (token.length > 0) {
                token = opts.createSearchChoice(token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true; break;
                        }
                    }

                    if (!dupe) selectCallback(token);
                }
            }
        }

        if (original!==input) return input;
    }

    /**
     * Creates a new class
     *
     * @param superClass
     * @param methods
     */
    function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    AbstractSelect2 = clazz(Object, {

        // abstract
        bind: function (func) {
            var self = this;
            return function () {
                func.apply(self, arguments);
            };
        },

        // abstract
        init: function (opts) {
            var results, search, resultsSelector = ".select2-results", disabled, readonly;

            // prepare options
            this.opts = opts = this.prepareOpts(opts);

            this.id=opts.id;

            // destroy if called on an existing component
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                this.destroy();
            }

            this.container = this.createContainer();

            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
            this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);

            // cache the body so future lookups are cheap
            this.body = thunk(function() { return opts.element.closest("body"); });

            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

            this.container.css(evaluate(opts.containerCss));
            this.container.addClass(evaluate(opts.containerCssClass));

            this.elementTabIndex = this.opts.element.attr("tabindex");

            // swap container for the element
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container);
            this.container.data("select2", this);

            this.dropdown = this.container.find(".select2-drop");
            this.dropdown.addClass(evaluate(opts.dropdownCssClass));
            this.dropdown.data("select2", this);

            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");

            this.resultsPage = 0;
            this.context = null;

            // initialize the container
            this.initContainer();

            installFilteredMouseMove(this.results);
            this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this.bind(this.highlightUnderEvent));

            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

            // do not propagate change event from the search field out of the component
            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
            if ($.fn.mousewheel) {
                results.mousewheel(function (e, delta, deltaX, deltaY) {
                    var top = results.scrollTop(), height;
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }

            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function () { search.addClass("select2-focused"); });
            search.on("blur", function () { search.removeClass("select2-focused");});

            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));

            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
            // dom it will trigger the popup close, which is not what we want
            this.dropdown.on("click mouseup mousedown", function (e) { e.stopPropagation(); });

            if ($.isFunction(this.opts.initSelection)) {
                // initialize selection based on the current value of the source element
                this.initSelection();

                // if the user has provided a function that can set selection based on the value of the source element
                // we monitor the change event on the element and trigger it, allowing for two way synchronization
                this.monitorSource();
            }

            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }

            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);

            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);

            // Calculate size of scrollbar
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

            this.autofocus = opts.element.prop("autofocus")
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();
        },

        // abstract
        destroy: function () {
            var select2 = this.opts.element.data("select2");

            if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }

            if (select2 !== undefined) {

                select2.container.remove();
                select2.dropdown.remove();
                select2.opts.element
                    .removeClass("select2-offscreen")
                    .removeData("select2")
                    .off(".select2")
                    .attr({"tabindex": this.elementTabIndex})
                    .prop("autofocus", this.autofocus||false)
                    .show();
            }
        },

        // abstract
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id:element.prop("value"),
                    text:element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked")
                };
            } else if (element.is("optgroup")) {
                return {
                    text:element.attr("label"),
                    children:[],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },

        // abstract
        prepareOpts: function (opts) {
            var element, select, idKey, ajaxUrl, self = this;

            element = opts.element;

            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }

            if (select) {
                // these options are not allowed when attached to a select because they are picked up off the element itself
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }

            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate,  data, result, children, id=this.opts.id;

                    populate=function(results, container, depth) {

                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

                        results = opts.sortResults(results, container, query);

                        for (i = 0, l = results.length; i < l; i = i + 1) {

                            result=results[i];

                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);

                            compound=result.children && result.children.length > 0;

                            node=$("<li></li>");
                            node.addClass("select2-results-dept-"+depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) { node.addClass("select2-disabled"); }
                            if (compound) { node.addClass("select2-result-with-children"); }
                            node.addClass(self.opts.formatResultCssClass(result));

                            label=$(document.createElement("div"));
                            label.addClass("select2-result-label");

                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted!==undefined) {
                                label.html(formatted);
                            }

                            node.append(label);

                            if (compound) {

                                innerContainer=$("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth+1);
                                node.append(innerContainer);
                            }

                            node.data("select2-data", result);
                            container.append(node);
                        }
                    };

                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);

            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function (e) { return e[idKey]; };
            }

            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags=opts.element.data("select2Tags");
            }

            if (select) {
                opts.query = this.bind(function (query) {
                    var data = { results: [], more: false },
                        term = query.term,
                        children, firstChild, process;

                    process=function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group=self.optionToData(element);
                            element.children().each2(function(i, elm) { process(elm, group.children); });
                            if (group.children.length>0) {
                                collection.push(group);
                            }
                        }
                    };

                    children=element.children();

                    // ignore the placeholder option if there is one
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        firstChild = children[0];
                        if ($(firstChild).text() === "") {
                            children=children.not(firstChild);
                        }
                    }

                    children.each2(function(i, elm) { process(elm, data.results); });

                    query.callback(data);
                });
                // this is needed because inside val() we construct choices from options and there id is hardcoded
                opts.id=function(e) { return e.id; };
                opts.formatResultCssClass = function(data) { return data.css; };
            } else {
                if (!("query" in opts)) {

                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function (term) { return {id: term, text: term}; };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function (element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function () {
                                    var id = this, text = this, tags=opts.tags;
                                    if ($.isFunction(tags)) tags=tags();
                                    $(tags).each(function() { if (equal(this.id, id)) { text = this.text; return false; } });
                                    data.push({id: id, text: text});
                                });

                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }

            return opts;
        },

        /**
         * Monitor the original element for changes and update select2 accordingly
         */
        // abstract
        monitorSource: function () {
            var el = this.opts.element, sync;

            el.on("change.select2", this.bind(function (e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));

            sync = this.bind(function () {

                var enabled, readonly, self = this;

                // sync enabled state

                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);

                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);

                syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.addClass(evaluate(this.opts.containerCssClass));

                syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(evaluate(this.opts.dropdownCssClass));

            });

            // mozilla and IE
            el.on("propertychange.select2 DOMAttrModified.select2", sync);


            // hold onto a reference of the callback to work around a chromium bug
            if (this.mutationCallback === undefined) {
                this.mutationCallback = function (mutations) {
                    mutations.forEach(sync);
                }
            }

            // safari and chrome
            if (typeof WebKitMutationObserver !== "undefined") {
                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
                this.propertyObserver = new WebKitMutationObserver(this.mutationCallback);
                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
            }
        },

        // abstract
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", { val: this.id(data), object: data });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },

        /**
         * Triggers the change event on the source element
         */
        // abstract
        triggerChange: function (details) {

            details = details || {};
            details= $.extend({}, details, { type: "change", val: this.val() });
            // prevents recursive triggering
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);

            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
            // so here we trigger the click event manually
            this.opts.element.click();

            // ValidationEngine ignorea the change event and listens instead to blur
            // so here we trigger the blur event manually if so desired
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },

        //abstract
        isInterfaceEnabled: function()
        {
            return this.enabledInterface === true;
        },

        // abstract
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;

            if (enabled === this.enabledInterface) return false;

            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;

            return true;
        },

        // abstract
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return false;
            this._enabled = enabled;

            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
            return true;
        },

        // abstract
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return false;
            this._readonly = enabled;

            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
            return true;
        },

        // abstract
        opened: function () {
            return this.container.hasClass("select2-dropdown-open");
        },

        // abstract
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                offset = this.container.offset(),
                height = this.container.outerHeight(false),
                width = this.container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
	            viewPortRight = $(window).scrollLeft() + $(window).width(),
                viewportBottom = $(window).scrollTop() + $(window).height(),
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= this.body().scrollTop(),
	            dropWidth = $dropdown.outerWidth(false),
	            enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                css,
                resultsListNode;

            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                // Add scrollbar width to dropdown if vertical scrollbar is present
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
            }
            else {
                this.container.removeClass('select2-drop-auto-width');
            }

            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body().scrollTop(), "enough?", enoughRoomAbove);

            // fix positioning when body has an offset and is not position: static

            if (this.body().css('position') !== 'static') {
                bodyOffset = this.body().offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }

            // always prefer the current above/below alignment, unless there is not enough room

            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) above = false;
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) above = true;
            }

            if (!enoughRoomOnRight) {
               dropLeft = offset.left + width - dropWidth;
            }

            if (above) {
                dropTop = offset.top - dropHeight;
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            }
            else {
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }

            css = $.extend({
                top: dropTop,
                left: dropLeft,
                width: width
            }, evaluate(this.opts.dropdownCss));

            $dropdown.css(css);
        },

        // abstract
        shouldOpen: function() {
            var event;

            if (this.opened()) return false;

            if (this._enabled === false || this._readonly === true) return false;

            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },

        // abstract
        clearDropdownAlignmentPreference: function() {
            // clear the classes used to figure out the preference of where the dropdown should be opened
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },

        /**
         * Opens the dropdown
         *
         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
         */
        // abstract
        open: function () {

            if (!this.shouldOpen()) return false;

            this.opening();

            return true;
        },

        /**
         * Performs the opening of the dropdown
         */
        // abstract
        opening: function() {
            var cid = this.containerId,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid,
                mask;

            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

            this.clearDropdownAlignmentPreference();

            if(this.dropdown[0] !== this.body().children().last()[0]) {
                this.dropdown.detach().appendTo(this.body());
            }

            // create the dropdown mask if doesnt already exist
            mask = $("#select2-drop-mask");
            if (mask.length == 0) {
                mask = $(document.createElement("div"));
                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body());
                mask.on("mousedown touchstart", function (e) {
                    var dropdown = $("#select2-drop"), self;
                    if (dropdown.length > 0) {
                        self=dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({noFocus: true});
                        }
                        self.close();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }

            // ensure the mask is always right before the dropdown
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }

            // move the global id to the correct dropdown
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");

            // show the elements
            mask.css(_makeMaskCss());
            mask.show();
            this.dropdown.show();
            this.positionDropdown();

            this.dropdown.addClass("select2-drop-active");
            this.ensureHighlightVisible();

            // attach listeners to events that can change the position of the container and thus require
            // the position of the dropdown to be updated as well so it does not come unglued from the container
            var that = this;
            this.container.parents().add(window).each(function () {
                $(this).on(resize+" "+scroll+" "+orient, function (e) {
                    $("#select2-drop-mask").css(_makeMaskCss());
                    that.positionDropdown();
                });
            });

            function _makeMaskCss() {
                return {
                    width  : Math.max(document.documentElement.scrollWidth,  $(window).width()),
                    height : Math.max(document.documentElement.scrollHeight, $(window).height())
                }
            }
        },

        // abstract
        close: function () {
            if (!this.opened()) return;

            var cid = this.containerId,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid;

            // unbind event listeners
            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

            this.clearDropdownAlignmentPreference();

            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open");
            this.results.empty();


            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },

        // abstract
        clearSearch: function () {

        },

        //abstract
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize);
        },

        // abstract
        ensureHighlightVisible: function () {
            var results = this.results, children, index, child, hb, rb, y, more;

            index = this.highlight();

            if (index < 0) return;

            if (index == 0) {

                // if the first element is highlighted scroll all the way to the top,
                // that way any unselectable headers above it will also be scrolled
                // into view

                results.scrollTop(0);
                return;
            }

            children = this.findHighlightableChoices().find('.select2-result-label');

            child = $(children[index]);

            hb = child.offset().top + child.outerHeight(true);

            // if this is the last child lets also make sure select2-more-results is visible
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }

            rb = results.offset().top + results.outerHeight(true);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = child.offset().top - results.offset().top;

            // make sure the top of the element is visible
            if (y < 0 && child.css('display') != 'none' ) {
                results.scrollTop(results.scrollTop() + y); // y is negative
            }
        },

        // abstract
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)");
        },

        // abstract
        moveHighlight: function (delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();

            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },

        // abstract
        highlight: function (index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;

            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }

            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;

            this.results.find(".select2-highlighted").removeClass("select2-highlighted");

            choice = $(choices[index]);
            choice.addClass("select2-highlighted");

            this.ensureHighlightVisible();

            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
            }
        },

        // abstract
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },

        // abstract
        highlightUnderEvent: function (event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
        		var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                // if we are over an unselectable item remove al highlights
                this.results.find(".select2-highlighted").removeClass("select2-highlighted");
            }
        },

        // abstract
        loadMoreIfNeeded: function () {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
                offset = -1, // index of first element without data
                page = this.resultsPage + 1,
                self=this,
                term=this.search.val(),
                context=this.context;

            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();

            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                        element: this.opts.element,
                        term: term,
                        page: page,
                        context: context,
                        matcher: this.opts.matcher,
                        callback: this.bind(function (data) {

                    // ignore a response if the select2 has been closed before it was received
                    if (!self.opened()) return;


                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
                    self.postprocessResults(data, false, false);

                    if (data.more===true) {
                        more.detach().appendTo(results).text(self.opts.formatLoadMore(page+1));
                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                    } else {
                        more.remove();
                    }
                    self.positionDropdown();
                    self.resultsPage = page;
                    self.context = data.context;
                })});
            }
        },

        /**
         * Default tokenizer function which does nothing
         */
        tokenize: function() {

        },

        /**
         * @param initial whether or not this is the call to this method right after the dropdown has been opened
         */
        // abstract
        updateResults: function (initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm=$.data(this.container, "select2-last-term");

            // prevent duplicate queries against the same term
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

            $.data(this.container, "select2-last-term", term);

            // if the search is currently hidden we do not alter the results
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                results.scrollTop(0);
                search.removeClass("select2-active");
                self.positionDropdown();
            }

            function render(html) {
                results.html(html);
                postRender();
            }

            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >=1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
            	    render("<li class='select2-selection-limit'>" + opts.formatSelectionTooBig(maxSelSize) + "</li>");
            	    return;
                }
            }

            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + opts.formatInputTooShort(search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial) this.showSearch(true);
                return;
            }

            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + opts.formatInputTooLong(search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }

            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + opts.formatSearching() + "</li>");
            }

            search.addClass("select2-active");

            // give the tokenizer a chance to pre-process the input
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }

            this.resultsPage = 1;

            opts.query({
                element: opts.element,
                    term: search.val(),
                    page: this.resultsPage,
                    context: null,
                    matcher: opts.matcher,
                    callback: this.bind(function (data) {
                var def; // default choice

                // ignore a response if the select2 has been closed before it was received
                if (!this.opened()) {
                    this.search.removeClass("select2-active");
                    return;
                }

                // save context, if any
                this.context = (data.context===undefined) ? null : data.context;
                // create a default choice and prepend it to the list
                if (this.opts.createSearchChoice && search.val() !== "") {
                    def = this.opts.createSearchChoice.call(null, search.val(), data.results);
                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                        if ($(data.results).filter(
                            function () {
                                return equal(self.id(this), self.id(def));
                            }).length === 0) {
                            data.results.unshift(def);
                        }
                    }
                }

                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                    render("<li class='select2-no-results'>" + opts.formatNoMatches(search.val()) + "</li>");
                    return;
                }

                results.empty();
                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                    results.append("<li class='select2-more-results'>" + self.opts.escapeMarkup(opts.formatLoadMore(this.resultsPage)) + "</li>");
                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                }

                this.postprocessResults(data, initial);

                postRender();

                this.opts.element.trigger({ type: "select2-loaded", data:data });
            })});
        },

        // abstract
        cancel: function () {
            this.close();
        },

        // abstract
        blur: function () {
            // if selectOnBlur == true, select the currently highlighted option
            if (this.opts.selectOnBlur)
                this.selectHighlighted({noFocus: true});

            this.close();
            this.container.removeClass("select2-container-active");
            // synonymous to .is(':focus'), which is available in jquery >= 1.6
            if (this.search[0] === document.activeElement) { this.search.blur(); }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },

        // abstract
        focusSearch: function () {
            focus(this.search);
        },

        // abstract
        selectHighlighted: function (options) {
            var index=this.highlight(),
                highlighted=this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");

            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            }
        },

        // abstract
        getPlaceholder: function () {
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
                this.opts.element.data("placeholder") ||
                this.opts.placeholder;
        },

        /**
         * Get the desired width for the container element.  This is
         * derived first from option `width` passed to select2, then
         * the inline 'style' on the original element, and finally
         * falls back to the jQuery calculated element width.
         */
        // abstract
        initContainerWidth: function () {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l;

                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element"){
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    // check if there is inline style on the element that contains width
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            matches = attrs[i].replace(/\s/g, '')
                                .match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }

                    // next check if css('width') can resolve a width that is percent based, this is sometimes possible
                    // when attached to input type=hidden or elements hidden via css
                    style = this.opts.element.css('width');
                    if (style && style.length > 0) return style;

                    if (this.opts.width === "resolve") {
                        // finally, fallback on the calculated width of the element
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }

                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
               }
            };

            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });

    SingleSelect2 = clazz(AbstractSelect2, {

        // single

		createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                "<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>",
                "   <span>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>",
                "   <div><b></b></div>" ,
                "</a>",
                "<input class='select2-focusser select2-offscreen' type='text'/>",
                "<div class='select2-drop select2-display-none'>" ,
                "   <div class='select2-search'>" ,
                "       <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'/>" ,
                "   </div>" ,
                "   <ul class='select2-results'>" ,
                "   </ul>" ,
                "</div>"].join(""));
            return container;
        },

        // single
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // single
        opening: function () {
            var el, range;
            this.parent.opening.apply(this, arguments);
            if (this.showSearchInput !== false) {
                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
                // all other browsers handle this just fine

                this.search.val(this.focusser.val());
            }
            this.search.focus();
            // in IE we have to move the cursor to the end after focussing, otherwise it will be at the beginning and
            // new text will appear *before* focusser.val()
            el = this.search.get(0);
            if (el.createTextRange) {
                range = el.createTextRange();
                range.collapse(false);
                range.select();
            }

            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },

        // single
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
            this.focusser.removeAttr("disabled");
            this.focusser.focus();
        },

        // single
        focus: function () {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.removeAttr("disabled");
                this.focusser.focus();
            }
        },

        // single
        isFocused: function () {
            return this.container.hasClass("select2-container-active");
        },

        // single
        cancel: function () {
            this.parent.cancel.apply(this, arguments);
            this.focusser.removeAttr("disabled");
            this.focusser.focus();
        },

        // single
        initContainer: function () {

            var selection,
                container = this.container,
                dropdown = this.dropdown;

            this.showSearch(false);

            this.selection = selection = container.find(".select2-choice");

            this.focusser = container.find(".select2-focusser");

            // rewrite labels from original element to focusser
            this.focusser.attr("id", "s2id_autogen"+nextUid());

            $("label[for='" + this.opts.element.attr("id") + "']")
                .attr('for', this.focusser.attr('id'));

            this.focusser.attr("tabindex", this.elementTabIndex);

            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                    return;
                }

                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus: true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));

            this.search.on("blur", this.bind(function(e) {
                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
                // without this the search field loses focus which is annoying
                if (document.activeElement === this.body().get(0)) {
                    window.setTimeout(this.bind(function() {
                        this.search.focus();
                    }), 0);
                }
            }));

            this.focusser.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }

                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DOWN || e.which == KEY.UP
                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {
                    this.open();
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));


            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                e.stopPropagation();
                if (this.opened()) return;
                this.open();
            }));

            selection.on("mousedown", "abbr", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                this.clear();
                killEventImmediately(e);
                this.close();
                this.selection.focus();
            }));

            selection.on("mousedown", this.bind(function (e) {

                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }

                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }

                killEvent(e);
            }));

            dropdown.on("mousedown", this.bind(function() { this.search.focus(); }));

            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));

            this.focusser.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.setPlaceholder();

        },

        // single
        clear: function(triggerChange) {
            var data=this.selection.data("select2-data");
            if (data) { // guard against queued quick consecutive clicks
                this.opts.element.val("");
                this.selection.find("span").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();

                if (triggerChange !== false){
                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
                    this.triggerChange({removed:data});
                }
            }
        },

        /**
         * Sets selection based on source element's value
         */
        // single
        initSelection: function () {
            var selected;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected){
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                    }
                });
            }
        },

        // single
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {
                    var selected = element.find(":selected");
                    // a single select box always has a value, no need to null check 'selected'
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var id = element.val();
                    //search in data by id, storing the actual matching item
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }

            return opts;
        },

        // single
        getPlaceholder: function() {
            // if a placeholder is specified on a single select without the first empty option ignore it
            if (this.select) {
                if (this.select.find("option").first().text() !== "") {
                    return undefined;
                }
            }

            return this.parent.getPlaceholder.apply(this, arguments);
        },

        // single
        setPlaceholder: function () {
            var placeholder = this.getPlaceholder();

            if (this.opts.element.val() === "" && placeholder !== undefined) {

                // check for a first blank option if attached to a select
                if (this.select && this.select.find("option:first").text() !== "") return;

                this.selection.find("span").html(this.opts.escapeMarkup(placeholder));

                this.selection.addClass("select2-default");

                this.container.removeClass("select2-allowclear");
            }
        },

        // single
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var selected = 0, self = this, showSearchInput = true;

            // find the selected element in the result list

            this.findHighlightableChoices().each2(function (i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });

            // and highlight it
            if (noHighlightUpdate !== false) {
                this.highlight(selected);
            }

            // show the search box if this is the first we got the results and there are enough of them for search

            if (initial === true && this.showSearchInput === false) {
                var min=this.opts.minimumResultsForSearch;
                if (min>=0) {
                    this.showSearch(countResults(data.results)>=min);
                }
            }

        },

        // single
        showSearch: function(showSearchInput) {
            this.showSearchInput = showSearchInput;

            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            //add "select2-with-searchbox" to the container if search box is shown
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },

        // single
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            var old = this.opts.element.val(),
                oldData = this.data();

            this.opts.element.val(this.id(data));
            this.updateSelection(data);

            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

            this.close();

            if (!options || !options.noFocus)
                this.selection.focus();

            if (!equal(old, this.id(data))) { this.triggerChange({added:data,removed:oldData}); }
        },

        // single
        updateSelection: function (data) {

            var container=this.selection.find("span"), formatted;

            this.selection.data("select2-data", data);

            container.empty();
            formatted=this.opts.formatSelection(data, container);
            if (formatted !== undefined) {
                container.append(this.opts.escapeMarkup(formatted));
            }

            this.selection.removeClass("select2-default");

            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },

        // single
        val: function () {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();

            if (arguments.length === 0) {
                return this.opts.element.val();
            }

            val = arguments[0];

            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }

            if (this.select) {
                this.select
                    .val(val)
                    .find(":selected").each2(function (i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({added: data, removed:oldData});
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data){
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({added: data, removed:oldData});
                    }
                });
            }
        },

        // single
        clearSearch: function () {
            this.search.val("");
            this.focusser.val("");
        },

        // single
        data: function(value, triggerChange) {
            var data;

            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (!value || value === "") {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({added: value, removed:data});
                    }
                }
            }
        }
    });

    MultiSelect2 = clazz(AbstractSelect2, {

        // multi
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                "    <ul class='select2-choices'>",
                //"<li class='select2-search-choice'><span>California</span><a href="javascript:void(0)" class="select2-search-choice-close"></a></li>" ,
                "  <li class='select2-search-field'>" ,
                "    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>" ,
                "  </li>" ,
                "</ul>" ,
                "<div class='select2-drop select2-drop-multi select2-display-none'>" ,
                "   <ul class='select2-results'>" ,
                "   </ul>" ,
                "</div>"].join(""));
			return container;
        },

        // multi
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            // TODO validate placeholder is a string if specified

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install sthe selection initializer
                opts.initSelection = function (element, callback) {

                    var data = [];

                    element.find(":selected").each2(function (i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var ids = splitVal(element.val(), opts.separator);
                    //search in data by array of ids, storing matching items in a list
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            // reorder matches based on the order they appear in the ids array because right now
                            // they are in the order in which they appear in data array
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }

            return opts;
        },

        selectChoice: function (choice) {

            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {

            } else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },

        // multi
        initContainer: function () {

            var selector = ".select2-choices", selection;

            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);

            var _this = this;
            this.selection.on("mousedown", ".select2-search-choice", function (e) {
                //killEvent(e);
                _this.search[0].focus();
                _this.selectChoice($(this));
            })
            //.sortable({
            //    items: " > li",
            //    tolerance: "pointer",
            //    revert: 100
            //});

            // rewrite labels from original element to focusser
            this.search.attr("id", "s2id_autogen"+nextUid());
            $("label[for='" + this.opts.element.attr("id") + "']")
                .attr('for', this.search.attr('id'));

            this.search.on("input paste", this.bind(function() {
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));

            this.search.attr("tabindex", this.elementTabIndex);

            this.keydowns = 0;
            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);

                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    }
                    else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    }
                    else if (e.which === KEY.BACKSPACE) {
                        this.unselect(selected.first());
                        this.search.width(10);
                        selectedChoice = prev.length ? prev : next;
                    } else if (e.which == KEY.DELETE) {
                        this.unselect(selected.first());
                        this.search.width(10);
                        selectedChoice = next.length ? next : null;
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }

                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }

                if (this.opened()) {
                    switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus:true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                    }
                }

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }

                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }

                this.open();

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                }

                if (e.which === KEY.ENTER) {
                    // prevent form from being submitted
                    killEvent(e);
                }

            }));

            this.search.on("keyup", this.bind(function (e) {
                this.keydowns = 0;
                this.resizeSearch();
            })
            );

            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));

            this.container.on("mousedown", selector, this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    // clicked inside a select2 search choice, do not open
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));

            this.container.on("focus", selector, this.bind(function () {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");

            // set the placeholder if necessary
            this.clearSearch();
        },

        // multi
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // multi
        initSelection: function () {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                // set the placeholder if necessary
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data){
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        // set the placeholder if necessary
                        self.clearSearch();
                    }
                });
            }
        },

        // multi
        clearSearch: function () {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();

            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },

        // multi
        clearPlaceholder: function () {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },

        // multi
        opening: function () {
            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
            this.resizeSearch();

            this.parent.opening.apply(this, arguments);

            this.focusSearch();

            this.updateResults(true);
            this.search.focus();
            this.opts.element.trigger($.Event("select2-open"));
        },

        // multi
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },

        // multi
        focus: function () {
            this.close();
            this.search.focus();
            //this.opts.element.triggerHandler("focus");
        },

        // multi
        isFocused: function () {
            return this.search.hasClass("select2-focused");
        },

        // multi
        updateSelection: function (data) {
            var ids = [], filtered = [], self = this;

            // filter out duplicates
            $(data).each(function () {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;

            this.selection.find(".select2-search-choice").remove();
            $(data).each(function () {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },

        // multi
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer(input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }

        },

        // multi
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            this.addSelectedChoice(data);

            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

            if (this.select || !this.opts.closeOnSelect) this.postprocessResults();

            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults()>0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        // if we reached max selection size repaint the results so choices
                        // are replaced with the max selection reached message
                        this.updateResults(true);
                    }
                    this.positionDropdown();
                } else {
                    // if nothing left to select close
                    this.close();
                    this.search.width(10);
                }
            }

            // since its not possible to select an element that has already been
            // added we do not need to check if this is a new element before firing change
            this.triggerChange({ added: data });

            if (!options || !options.noFocus)
                this.focusSearch();
        },

        // multi
        cancel: function () {
            this.close();
            this.focusSearch();
        },

        addSelectedChoice: function (data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                    "    <div></div>" +
                    "    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>" +
                    "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                    "<div></div>" +
                    "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted;

            formatted=this.opts.formatSelection(data, choice.find("div"));
            if (formatted != undefined) {
                choice.find("div").replaceWith("<div title='"+this.opts.escapeMarkup(formatted)+"'>"+this.opts.escapeMarkup(formatted)+"</div>");
            }

            if(enableChoice){
              choice.find(".select2-search-choice-close")
                  .on("mousedown", killEvent)
                  .on("click dblclick", this.bind(function (e) {
                  if (!this.isInterfaceEnabled()) return;

                  $(e.target).closest(".select2-search-choice").fadeOut('fast', this.bind(function(){
                      this.unselect($(e.target));
                      this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                      this.close();
                      this.focusSearch();
                  })).dequeue();
                  killEvent(e);
              })).on("focus", this.bind(function () {
                  if (!this.isInterfaceEnabled()) return;
                  this.container.addClass("select2-container-active");
                  this.dropdown.addClass("select2-drop-active");
              }));
            }

            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);

            val.push(id);
            this.setVal(val);
        },

        // multi
        unselect: function (selected) {
            var val = this.getVal(),
                data,
                index;

            selected = selected.closest(".select2-search-choice");

            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }

            data = selected.data("select2-data");

            if (!data) {
                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
                // and invoked on an element already removed
                return;
            }

            index = indexOf(this.id(data), val);

            if (index >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }
            selected.remove();

            this.opts.element.trigger({ type: "removed", val: this.id(data), choice: data });
            this.triggerChange({ removed: data });
        },

        // multi
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;

            choices.each2(function (i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    // mark all children of the selected parent as selected
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });

            compound.each2(function(i, choice) {
                // hide an optgroup if it doesnt have any selectable children
                if (!choice.is('.select2-result-selectable')
                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });

            if (this.highlight() == -1 && noHighlightUpdate !== false){
                self.highlight(0);
            }

            //If all results are chosen render formatNoMAtches
            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
                this.results.append("<li class='select2-no-results'>" + self.opts.formatNoMatches(self.search.val()) + "</li>");
            }

        },

        // multi
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },

        // multi
        resizeSearch: function () {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
            	sideBorderPadding = getSideBorderPadding(this.search);

            minimumWidth = measureTextWidth(this.search) + 10;

            left = this.search.offset().left;

            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;

            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth <= 0) {
              searchWidth = minimumWidth;
            }

            this.search.width(searchWidth);
        },

        // multi
        getVal: function () {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator);
            }
        },

        // multi
        setVal: function (val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                // filter out duplicates
                $(val).each(function () {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },

        // multi
        buildChangeDetails: function (old, current) {
            var current = current.slice(0),
                old = old.slice(0);

            // remove intersection from each array
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        i--;
                        old.splice(j, 1);
                        j--;
                    }
                }
            }

            return {added: current, removed: old};
        },


        // multi
        val: function (val, triggerChange) {
            var oldData, self=this, changeDetails;

            if (arguments.length === 0) {
                return this.getVal();
            }

            oldData=this.data();
            if (!oldData.length) oldData=[];

            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({added: this.data(), removed: oldData});
                }
                return;
            }

            // val is a list of ids
            this.setVal(val);

            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }

                this.opts.initSelection(this.opts.element, function(data){
                    var ids=$(data).map(self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(this.buildChangeDetails(oldData, this.data()));
                    }
                });
            }
            this.clearSearch();
        },

        // multi
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }

            // collapse search field into 0 width so its container can be collapsed as well
            this.search.width(0);
            // hide the container
            this.searchContainer.hide();
        },

        // multi
        onSortEnd:function() {

            var val=[], self=this;

            // show search and move it to the end of the list
            this.searchContainer.show();
            // make sure the search container is the last item in the list
            this.searchContainer.appendTo(this.searchContainer.parent());
            // since we collapsed the width in dragStarted, we resize it here
            this.resizeSearch();

            // update selection

            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },

        // multi
        data: function(values, triggerChange) {
            var self=this, ids, old;
            if (arguments.length === 0) {
                 return this.selection
                     .find(".select2-search-choice")
                     .map(function() { return $(this).data("select2-data"); })
                     .get();
            } else {
                old = this.data();
                if (!values) { values = []; }
                ids = $.map(values, function(e) { return self.opts.id(e); });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });

    $.fn.select2 = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "onSortStart", "onSortEnd", "enable", "readonly", "positionDropdown", "data"],
            valueMethods = ["val", "opened", "isFocused", "container", "data"];

        this.each(function () {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);

                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {opts.multiple = multiple = true;}
                }

                select2 = multiple ? new MultiSelect2() : new SingleSelect2();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {

                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }

                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;
                if (args[0] === "container") {
                    value=select2.container;
                } else {
                    value = select2[args[0]].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0) {
                    return false;
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };

    // plugin defaults, accessible to users
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup=[];
            markMatch(result.text, query.term, markup, escapeMarkup);
            return markup.join("");
        },
        formatSelection: function (data, container) {
            return data ? data.text : undefined;
        },
        sortResults: function (results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {return undefined;},
        formatNoMatches: function () { return "No matches found"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " more character" + (n == 1? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Loading more results..."; },
        formatSearching: function () { return "Searching..."; },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) { return e.id; },
        matcher: function(term, text) {
            return (''+text).toUpperCase().indexOf((''+term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: function (markup) {
            var replace_map = {
                '\\': '&#92;',
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                "/": '&#47;'
            };

            return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
                    return replace_map[match];
            });
        },
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) { return c; },
        adaptDropdownCssClass: function(c) { return null; }
    };

    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };

    // exports
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        }, util: {
            debounce: debounce,
            markMatch: markMatch
        }, "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };

}(jQuery));


/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    if ($parent) {
      $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);


/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')
    }

    $this.focus()

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) { 
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================


  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);


/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);


/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active.one($.support.transition.end, next) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);


/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element).delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function () {
    return this[!this.isShown ? 'show' : 'hide']()
  }

  Modal.prototype.show = function () {
    var that = this
    var e    = $.Event('show.bs.modal')

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      transition ?
        that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown.bs.modal') }) :
        that.$element.focus().trigger('shown.bs.modal')
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)

    $.support.transition && this.$element.hasClass('fade') ?
      this.hideWithTransition() :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideWithTransition = function () {
    var that    = this
    var timeout = setTimeout(function () {
      that.$element.off($.support.transition.end)
      that.hideModal()
    }, 500)

    this.$element.one($.support.transition.end, function () {
      clearTimeout(timeout)
      that.hideModal()
    })
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$backdrop.click(
        this.options.backdrop == 'static' ?
          $.proxy(this.$element[0].focus, this.$element[0])
        : $.proxy(this.hide, this)
      )

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
    })

    var $body = $(document.body)
      .on('bs.modal.shown',  '.modal', function () { $body.addClass('modal-open') })
      .on('bs.modal.hidden', '.modal', function () { $body.removeClass('modal-open') })

}(window.jQuery);


// Underscore.js 1.1.7
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},i=Array.prototype,n=Object.prototype,f=i.slice,D=i.unshift,E=n.toString,l=n.hasOwnProperty,s=i.forEach,t=i.map,u=i.reduce,v=i.reduceRight,w=i.filter,x=i.every,y=i.some,o=i.indexOf,z=i.lastIndexOf;n=Array.isArray;var F=Object.keys,q=Function.prototype.bind,b=function(a){return new j(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):p._=b;b.VERSION="1.1.7";var h=b.each=b.forEach=function(a,c,b){if(a!=null)if(s&&a.forEach===s)a.forEach(c,b);else if(a.length===
+a.length)for(var e=0,k=a.length;e<k;e++){if(e in a&&c.call(b,a[e],e,a)===m)break}else for(e in a)if(l.call(a,e)&&c.call(b,a[e],e,a)===m)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(c,b);h(a,function(a,g,G){e[e.length]=c.call(b,a,g,G)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(u&&a.reduce===u)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);h(a,function(a,b,f){k?d=c.call(e,d,a,b,f):(d=a,k=!0)});if(!k)throw new TypeError("Reduce of empty array with no initial value");
return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(v&&a.reduceRight===v)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;A(a,function(a,g,f){if(c.call(b,a,g,f))return e=a,!0});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(c,b);h(a,function(a,g,f){c.call(b,a,g,f)&&(e[e.length]=a)});return e};
b.reject=function(a,c,b){var e=[];if(a==null)return e;h(a,function(a,g,f){c.call(b,a,g,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=!0;if(a==null)return e;if(x&&a.every===x)return a.every(c,b);h(a,function(a,g,f){if(!(e=e&&c.call(b,a,g,f)))return m});return e};var A=b.some=b.any=function(a,c,d){c=c||b.identity;var e=!1;if(a==null)return e;if(y&&a.some===y)return a.some(c,d);h(a,function(a,b,f){if(e|=c.call(d,a,b,f))return m});return!!e};b.include=b.contains=function(a,c){var b=
!1;if(a==null)return b;if(o&&a.indexOf===o)return a.indexOf(c)!=-1;A(a,function(a){if(b=a===c)return!0});return b};b.invoke=function(a,c){var d=f.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,
c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,b){var d={};h(a,function(a,f){var g=b(a,f);(d[g]||(d[g]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||
(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return f.call(a);if(b.isArguments(a))return f.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?f.call(a,0,b):a[0]};b.rest=b.tail=function(a,b,d){return f.call(a,b==null||d?1:b)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,
function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));a[a.length]=d;return a},[])};b.without=function(a){return b.difference(a,f.call(arguments,1))};b.uniq=b.unique=function(a,c){return b.reduce(a,function(a,e,f){if(0==f||(c===!0?b.last(a)!=e:!b.include(a,e)))a[a.length]=e;return a},[])};b.union=function(){return b.uniq(b.flatten(arguments))};b.intersection=b.intersect=function(a){var c=f.call(arguments,1);return b.filter(b.uniq(a),
function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=f.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(o&&a.indexOf===o)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,
b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);d=arguments[2]||1;for(var e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===q&&q)return q.apply(a,f.call(arguments,1));var d=f.call(arguments,2);return function(){return a.apply(b,d.concat(f.call(arguments)))}};b.bindAll=function(a){var c=f.call(arguments,1);
c.length==0&&(c=b.functions(a));h(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return l.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=function(a,b){var d=f.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(f.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;
a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=function(a,b){return B(a,b,!1)};b.debounce=function(a,b){return B(a,b,!0)};b.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(f.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=
function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=F||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)l.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){h(f.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){h(f.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,c){if(a===c)return!0;var d=typeof a;if(d!=typeof c)return!1;if(a==c)return!0;if(!a&&c||a&&!c)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(c.isEqual)return c.isEqual(a);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;
if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return!1;for(var f in a)if(!(f in c)||!b.isEqual(a[f],c[f]))return!1;return!0};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(l.call(a,c))return!1;return!0};b.isElement=function(a){return!!(a&&a.nodeType==
1)};b.isArray=n||function(a){return E.call(a)==="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return!(!a||!l.call(a,"callee"))};b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===!0||a===!1};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||
!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===!1))};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){p._=C;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.mixin=function(a){h(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};
b.template=function(a,c){var d=b.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return c?d(c):d};
var j=function(a){this._wrapped=a};b.prototype=j.prototype;var r=function(a,c){return c?b(a).chain():a},H=function(a,c){j.prototype[a]=function(){var a=f.call(arguments);D.call(a,this._wrapped);return r(c.apply(b,a),this._chain)}};b.mixin(b);h(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=i[a];j.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});h(["concat","join","slice"],function(a){var b=i[a];j.prototype[a]=function(){return r(b.apply(this._wrapped,
arguments),this._chain)}});j.prototype.chain=function(){this._chain=!0;return this};j.prototype.value=function(){return this._wrapped}})();


// jquery.jsonp 2.3.0 (c)2012 Julian Aubourg | MIT License
// http://code.google.com/p/jquery-jsonp/
(function(a){function b(){}function c(a){B=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function E(l){function Y(a){R++||(S(),L&&(z[N]={s:[a]}),H&&(a=H.apply(l,[a])),d(E,l,[a,t]),d(G,l,[l,t]))}function Z(a){R++||(S(),L&&a!=u&&(z[N]=a),d(F,l,[l,a]),d(G,l,[l,a]))}l=a.extend({},C,l);var E=l.success,F=l.error,G=l.complete,H=l.dataFilter,I=l.callbackParameter,J=l.callback,K=l.cache,L=l.pageCache,M=l.charset,N=l.url,O=l.data,P=l.timeout,Q,R=0,S=b,T,U,V,W,X;return w&&w(function(a){a.done(E).fail(F),E=a.resolve,F=a.reject}).promise(l),l.abort=function(){!(R++)&&S()},d(l.beforeSend,l,[l])===!1||R?l:(N=N||h,O=O?typeof O=="string"?O:a.param(O,l.traditional):h,N+=O?e(N)+O:h,I&&(N+=e(N)+encodeURIComponent(I)+"=?"),!K&&!L&&(N+=e(N)+"_"+(new Date).getTime()+"="),N=N.replace(/=\?(&|$)/,"="+J+"$1"),L&&(Q=z[N])?Q.s?Y(Q.s[0]):Z(Q):(v[J]=c,V=a(s)[0],V.id=k+A++,M&&(V[g]=M),D&&D.version()<11.6?(W=a(s)[0]).text="document.getElementById('"+V.id+"')."+n+"()":V[f]=f,p in V&&(V.htmlFor=V.id,V.event=m),V[o]=V[n]=V[p]=function(a){if(!V[q]||!/i/.test(V[q])){try{V[m]&&V[m]()}catch(b){}a=B,B=0,a?Y(a[0]):Z(i)}},V.src=N,S=function(a){X&&clearTimeout(X),V[p]=V[o]=V[n]=null,x[r](V),W&&x[r](W)},x[j](V,y),W&&x[j](W,y),X=P>0&&setTimeout(function(){Z(u)},P)),l)}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a.Deferred,x=a("head")[0]||document.documentElement,y=x.firstChild,z={},A=0,B,C={callback:k,url:location.href},D=v.opera;E.setup=function(b){a.extend(C,b)},a.jsonp=E})(jQuery);

/*!
 * Rails 3 Client Side Validations - v3.0.13
 * https://github.com/bcardarlela/client_side_validations
 *
 * Copyright (c) 2011 Brian Cardarella
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
  $.fn.validate = function () {
    return this.filter('form[data-validate]').each(function () {
      var form = $(this),
          settings = window[form.attr('id')],
          addError = function (element, message) {
            clientSideValidations.formBuilders[settings.type].add(element, settings, message);
          },
          removeError = function (element) {
            clientSideValidations.formBuilders[settings.type].remove(element, settings);
          };

      // Set up the events for the form
      form
        .submit(function (ev) { 
          if (!form.isValid(settings.validators, ev)) { 
            ev.preventDefault();
            ev.stopImmediatePropagation();
          } 
        })
        .bind('ajax:beforeSend',      function ()          { return form.isValid(settings.validators); } )
        // Callbacks
        .bind('form:validate:after',  function (eventData) { clientSideValidations.callbacks.form.after( form, eventData); } )
        .bind('form:validate:before', function (eventData) { clientSideValidations.callbacks.form.before(form, eventData); } )
        .bind('form:validate:fail',   function (eventData) { clientSideValidations.callbacks.form.fail(  form, eventData); } )
        .bind('form:validate:pass',   function (eventData) { clientSideValidations.callbacks.form.pass(  form, eventData); } )

        // Set up the events for each validatable form element
        .find('[data-validate]:input:not(:radio)')
          .on('focusout',                function (ev)        { $(this).isValid(settings.validators, ev); })
          .on('change',                  function ()          { $(this).data('changed', true); })
          // Callbacks
          .on('element:validate:after',  function (eventData) { clientSideValidations.callbacks.element.after( $(this), eventData); })
          .on('element:validate:before', function (eventData) { clientSideValidations.callbacks.element.before($(this), eventData); })
          .on('element:validate:fail',   function (eventData, message) {
            var element = $(this);
            clientSideValidations.callbacks.element.fail(element, message, function () {
              addError(element, message);
            }, eventData); })
          .on('element:validate:pass',   function (eventData) {
            var element = $(this);
            clientSideValidations.callbacks.element.pass(element, function () {
              removeError(element);
            }, eventData); })
        // Checkboxes - Live events don't support filter
        .end().find('[data-validate]:checkbox')
          .on('click', function () { $(this).isValid(settings.validators); })
          .on('ifToggled', function () { $(this).data('changed', true); $(this).isValid(settings.validators); })
        // Inputs for confirmations
        .end().find('[id*=_confirmation]').each(function () {
          var confirmationElement = $(this),
              element = form.find('#' + this.id.match(/(.+)_confirmation/)[1] + '[data-validate]:input');

          if (element[0]) {
            $('#' + confirmationElement.attr('id'))
              .on('focusout', function () {
                element.data('changed', true).isValid(settings.validators);
              })
              // Disable validations on 'keyup' events to give time to the user
              // to fill the field before being bothered with validation problems. 
              /*.on('keyup', function () {
                element.data('changed', true).isValid(settings.validators);
              });*/
          }
        });

    });
  };

  $.fn.isValid = function (validators, ev) {
    if ($(this[0]).is('form')) {
      return validateForm($(this[0]), validators, ev);
    } else {
      return validateElement($(this[0]), validators[this[0].name], ev);
    }
  };

  var validateForm = function (form, validators, ev) {
    var valid = true;

    form.trigger('form:validate:before').find('[data-validate]:input').each(function() {
      if (!$(this).isValid(validators, ev)) { valid = false; }
    });

    if (valid) {
      form.trigger('form:validate:pass');
    } else {
      form.trigger('form:validate:fail');
    }

    form.trigger('form:validate:after');
    return valid;
  },
    validateElement = function (element, validators, ev) {
      if (!element.parent().is(":visible"))
        return true;
      // #33378: don't check presence of focusout events for empty fields
      if (ev && ev.type == "focusout" && element.val() == "" && !element.data('changed'))
        return;

      element.trigger('element:validate:before');

      if (element.data('changed') !== false) {
        var valid = true;
        element.data('changed', false);

        // #29565: allow multiple validatons of same type
        var all_validators = clientSideValidations.validators.all();
        var vkinds = [];
        for(var vk in validators)
          vkinds.push(vk);
        vkinds.sort();

        for (i in vkinds) {
          var vkind = vkinds[i];
          var kind = vkind.split("-")[0]; 
          if (all_validators[kind]) {
            var message = all_validators[kind](element, validators[vkind]);
            if (message) {
              element.trigger('element:validate:fail', message).data('valid', false);
              valid = false;
              break;
            }
          }
        }

        if (valid) { element.data('valid', null); element.trigger('element:validate:pass'); }
      }

      element.trigger('element:validate:after');
      return element.data('valid') === false ? false : true;
    };

  // Main hook
  // If new forms are dynamically introduced into the DOM the .validate() method
  // must be invoked on that form
  $(function () { $('form[data-validate]').validate(); });
})(jQuery);

var clientSideValidations = {
  validators: {
    all: function() { return jQuery.extend({}, clientSideValidations.validators.local, clientSideValidations.validators.remote); },
    local: {
      presence: function (element, options) {
        if (/^\s*$/.test(element.val() || "")) {
          return options.message;
        }
      },
      acceptance: function (element, options) {
        switch (element.attr('type')) {
          case 'checkbox':
            if (!element.is(':checked')) {
              return options.message;
            }
            break;
          case 'text':
            if (element.val() != (options.accept || '1')) {
              return options.message;
            }
            break;
        }
      },
      format: function (element, options) {
        if ((message = this.presence(element, options)) && options.allow_blank === true) {
          return;
        } else if (message) {
          return message;
        } else {
          if (options['with'] && !options['with'].test(element.val())) {
            return options.message;
          } else if (options['without'] && options['without'].test(element.val())) {
            return options.message;
          }
        }
      },
      numericality: function (element, options) {
        if (!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?$/.test(element.val())) {
          return options.messages.numericality;
        }

        if (options.only_integer && !/^\d+$/.test(element.val())) {
          return options.messages.only_integer;
        }

        var CHECKS = { greater_than: '>', greater_than_or_equal_to: '>=',
          equal_to: '==', less_than: '<', less_than_or_equal_to: '<=' };

        for (check in CHECKS) {
          if (options[check] !== undefined && !(new Function("return " + element.val() + CHECKS[check] + options[check])())) {
            return options.messages[check];
          }
        }

        if (options.odd && !(parseInt(element.val(), 10) % 2)) {
          return options.messages.odd;
        }

        if (options.even && (parseInt(element.val(), 10) % 2)) {
          return options.messages.even;
        }
      },
      length: function (element, options) {
        var blankOptions = {},
            CHECKS = { is: '==', minimum: '>=', maximum: '<=' },
            tokenizer = options.js_tokenizer || "split('')",
            tokenized_length = new Function("element", "return (element.val()." + tokenizer + " || '').length;")(element);
        if (options.is) {
          blankOptions.message = options.messages.is;
        } else if (options.minimum) {
          blankOptions.message = options.messages.minimum;
        }
        if ((message = this.presence(element, blankOptions)) && options.allow_blank === true) {
          return;
        } else if (message) {
          return message;
        } else {
          for (check in CHECKS) {
            if (options[check] && !(new Function("return " + tokenized_length + CHECKS[check] + options[check])())) {
              return options.messages[check];
            }
          }
        }
      },
      exclusion: function (element, options) {
        var lower = null, upper = null;
        if ((message = this.presence(element, options)) && options.allow_blank === true) {
          return;
        } else if (message) {
          return message;
        } else {
          if (options['in']) {
            for (i = 0; i < options['in'].length; i = i + 1) {
              if (options['in'][i] == element.val()) {
                return options.message;
              }
            }
          } else if (options.range) {
            lower = options.range[0];
            upper = options.range[1];
            if (element.val() >= lower && element.val() <= upper) {
              return options.message;
            }
          }
        }
      },
      inclusion: function (element, options) {
        var lower = null, upper = null;
        if ((message = this.presence(element, options)) && options.allow_blank === true) {
          return;
        } else if (message) {
          return message;
        } else {
          if (options['in']) {
            for (i = 0; i < options['in'].length; i = i + 1) {
              if (options['in'][i] == element.val()) {
                return;
              }
            }
            return options.message;
          } else if (options.range) {
            lower = options.range[0];
            upper = options.range[1];

            if (element.val() >= lower && element.val() <= upper) {
              return;
            } else {
              return options.message;
            }
          }
        }
      },
      confirmation: function (element, options) {
        // Check confirmation only if confirmation is filled 
        //if (element.val() !== jQuery('#' + element.attr('id') + '_confirmation').val()) {
        var confirmationFieldValue = jQuery('#' + element.attr('id') + '_confirmation').val();
        if (confirmationFieldValue && element.val() !== confirmationFieldValue) {
          return options.message;
        }
      }
    },
    remote: {
      uniqueness: function (element, options) {
        var data = {},
            name = null;
        data.case_sensitive = !!options.case_sensitive;
        if (options.id) {
          data.id = options.id;
        }

        if (options.scope) {
          data.scope = {};
          for (key in options.scope) {
            var scoped_element = jQuery('[name="' + element.attr('name').replace(/\[\w+\]$/, '[' + key + ']' + '"]'));
            if (scoped_element[0] && scoped_element.val() !== options.scope[key]) {
              data.scope[key] = scoped_element.val();
              scoped_element.unbind('change.' + element.id).bind('change.' + element.id, function() { element.trigger('change'); element.trigger('focusout'); });
            } else {
              data.scope[key] = options.scope[key];
            }
          }
        }

        // Kind of a hack but this will isolate the resource name and attribute.
        // e.g. user[records_attributes][0][title] => records[title]
        // e.g. user[record_attributes][title] => record[title]
        // Server side handles classifying the resource properly
        if (/_attributes\]/.test(element.attr('name'))) {
          name = element.attr('name').match(/\[\w+_attributes\]/g).pop().match(/\[(\w+)_attributes\]/).pop();
          name += /(\[\w+\])$/.exec(element.attr('name'))[1];
        } else {
          name = element.attr('name');
        }

        // Override the name if a nested module class is passed
        if (options['class']) {
          name = options['class'] + '[' + name.split('[')[1];
        }
        data[name] = element.val();

        if (jQuery.ajax({
          url: '/validators/uniqueness.json',
          data: data,
          async: false
        }).status === 200) {
          return options.message;
        }
      }
    }
  },
  formBuilders: {
    'ActionView::Helpers::FormBuilder': {
      add: function (element, settings, message) {
        if (element.data('valid') !== false && jQuery('label.message[for="' + element.attr('id') + '"]')[0] === undefined) {
          var inputErrorField = jQuery(settings.input_tag),
              labelErrorField = jQuery(settings.label_tag),
              label = jQuery('label[for="' + element.attr('id') + '"]:not(.message)');

          if (element.attr('autofocus')) { element.attr('autofocus', false); }
          element.before(inputErrorField);
          inputErrorField.find('span#input_tag').replaceWith(element);
          inputErrorField.find('label.message').attr('for', element.attr('id'));
          labelErrorField.find('label.message').attr('for', element.attr('id'));
          label.replaceWith(labelErrorField);
          labelErrorField.find('label#label_tag').replaceWith(label);
        }
        jQuery('label.message[for="' + element.attr('id') + '"]').text(message);
      },
      remove: function (element, settings) {
        var errorFieldClass = jQuery(settings.input_tag).attr('class'),
            inputErrorField = element.closest('.' + errorFieldClass),
            label = jQuery('label[for="' + element.attr('id') + '"]:not(.message)'),
            labelErrorField = label.closest('.' + errorFieldClass);

        if (inputErrorField[0]) {
          inputErrorField.find('#' + element.attr('id')).detach();
          inputErrorField.replaceWith(element);
          label.detach();
          labelErrorField.replaceWith(label);
        }
      }
    },
    'SimpleForm::FormBuilder': {
      add: function (element, settings, message) {
        if (element.data('valid') !== false) {
          var wrapper = element.closest(settings.wrapper_tag),
              errorElement = $('<' + settings.error_tag + ' class="' + settings.error_class + '">' + message + '</' + settings.error_tag + '>');
          wrapper.addClass(settings.wrapper_error_class);
          wrapper.append(errorElement);
        } else {
          element.parent().find(settings.error_tag + '.' + settings.error_class).text(message);
        }
      },
      remove: function (element, settings) {
        var wrapper = element.closest(settings.wrapper_tag + '.' + settings.wrapper_error_class),
            errorElement = wrapper.find(settings.error_tag + '.' + settings.error_class);
        wrapper.removeClass(settings.wrapper_error_class);
        errorElement.remove();
      }

    },
    'Formtastic::SemanticFormBuilder': {
      add: function (element, settings, message) {
        if (element.data('valid') !== false) {
          var wrapper = element.closest('li'),
              errorElement = jQuery('<p class="' + settings.inline_error_class + '">' + message + '</p>');
          wrapper.addClass('error');
          wrapper.append(errorElement);
        } else {
          element.parent().find('p.' + settings.inline_error_class).text(message);
        }
      },
      remove: function (element, settings) {
        var wrapper = element.closest('li.error'),
            errorElement = wrapper.find('p.' + settings.inline_error_class);
        wrapper.removeClass('error');
        errorElement.remove();
      }
    },
    'NestedForm::Builder': {
      add: function (element, settings, message) {
        clientSideValidations.formBuilders['ActionView::Helpers::FormBuilder'].add(element, settings, message);
      },
      remove: function (element, settings, message) {
        clientSideValidations.formBuilders['ActionView::Helpers::FormBuilder'].remove(element, settings, message);
      }
    }
  },
  callbacks: {
    element: {
      after:  function (element, eventData)                    { },
      before: function (element, eventData)                    { },
      fail:   function (element, message, addError, eventData) { addError(); },
      pass:   function (element, removeError, eventData)       { removeError(); }
    },
    form: {
      after:  function (form, eventData) { },
      before: function (form, eventData) { },
      fail:   function (form, eventData) { },
      pass:   function (form, eventData) { }
    }
  }
};


/* Custom errors (check PagesHelper#render_field_error) */

window.clientSideValidations.formBuilders["ActionView::Helpers::FormBuilder"] = {
  add: function(element, settings, message) {
    var existing = element.parents(".control-group").find(".help-inline");
    if (existing.length) {
      existing.html(message);
    } else {
      var span_error = $("<span>").addClass("help-inline").html(message);
      if (element.is(":checkbox") && element.next().is("label")) {
        element.next().after(span_error);
      } else if (element.is(":checkbox") && element.next().is("ins")) {
        element.parents("label").after(span_error);
      } else {
        element.after(span_error);
      }
    }
    element.parents(".control-group").first().removeClass("success").addClass("error");
  },

  remove: function(element, settings) {
    element.parents(".control-group").find(".help-inline").remove();
    element.parents(".control-group").first().removeClass("error").addClass("success");
  }
};


window.clientSideValidations.validators.local['date'] = function(element, options) {
  var seconds = $(element).val();
  if (options.past) {
    if (!seconds || new Date(parseInt(seconds)) > new Date) {
      return options.message;
    }
  }
};

$(function() {
  /* Birthdate */
  var selector = 
    "[name='user[birthdate(1i)]'], [name='user[birthdate(2i)]'], [name='user[birthdate(3i)]']";
  $(selector).change(function(ev) {
    var el = $(ev.target);
    var sorted = _.sortBy(el.parent().find(selector), function(x) { return x.id });
    var values = _.map(sorted, function(x) { return parseInt(x.value) });
    var year = values[0], month = values[1] - 1, day = values[2];
    var date = new Date(year, month, day);
    
    var hidden = $('[id=user_birthdate]');
    hidden.val(date.getTime());
    hidden.data('changed', true);
    hidden.trigger('focusout');    
  });
  
  /* Country/zipcode */
  var country = $("#user_country");
  var zipcode = $("#user_zipcode[data-validate]");
  
  if (country.length > 0 && zipcode.length > 0) {
    country.change(function(ev) {
      var field = zipcode.parents(".control-group").first();
      existing_span = field.find("label span.required_field");
      if (existing_span.length == 0) {
        var span = $("<span>").addClass("required_field").text(" * ");
        field.find("label").append(span);
      } else {
        var span = existing_span; 
      }
      
      if (country.val() == "ESP") {
        // Country = Spain -> show the zipcode field
        span.show();
        field.find("input").val("");
        field.show("fold");
      } else {
        span.hide();
        field.find("input").val("");
        field.hide("fold");
      }
      zipcode.data("changed", true);
      var form_id = zipcode.parents("form").first().attr("id");
      zipcode.isValid(window[form_id].validators);
    });
  }
});


/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

/*
Author: Rude Mortensen
Info: see /humans.txt
*/

var $browser =
{
  init: function ()
  {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },

  searchString: function (data)
  {
    for (var i=0 ; i < data.length ; i++)
    {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1)
      {
        return data[i].identity;
      }
    }
  },

  searchVersion: function (dataString)
  {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) { return; }
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },

  dataBrowser:
  [
    { string: navigator.userAgent, subString: "Chrome",  identity: "Chrome" },
    { string: navigator.userAgent, subString: "MSIE",    identity: "Explorer" },
    { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
    { string: navigator.userAgent, subString: "Safari",  identity: "Safari" },
    { string: navigator.userAgent, subString: "Opera",   identity: "Opera" }
  ]

};
$browser.init();

var $isIE8 = ($browser.browser === 'Explorer' && $browser.version < 9),
    $falseOnIE = $isIE8 ? false : true,
    $RTL = $('html').attr('dir') === 'rtl' ? true : false;

// Mantener la posición del scroll en las galerías de Partit y Jugador
/*!
 * Scroll Sneak
 * http://mrcoles.com/scroll-sneak/
 *
 * Copyright 2010, Peter Coles
 * Licensed under the MIT licenses.
 * http://mrcoles.com/media/mit-license.txt
 *
 * Date: Mon Mar 8 10:00:00 2010 -0500
 */
var ScrollSneak = function(prefix, wait) {

  // clean up arguments (allows prefix to be optional - a bit of overkill)
  if (typeof(wait) === 'undefined' && prefix.length) {
    prefix = null;
  }

  wait = false;
  prefix = (typeof(prefix) === 'string' ? prefix : window.location.host).split('_').join('');

  var pre_name;

  // scroll function, if window.name matches, then scroll to that position and clean up window.name
  this.scroll = function() {

    if (window.name.search('^'+prefix+'_(\\d+)_(\\d+)_') === 0) {

      var name = window.name.split('_'),
          $valueX = parseInt(name[1],10),
          $valueY = parseInt(name[2],10);

      window.name = name.slice(3).join('_');

      $(window).load(function(){ $('body').scrollTop($valueY); });

    }

  };

  // if not wait, scroll immediately
  if (wait === false) {

    this.scroll();

  }

  this.sneak = function() {

    // prevent multiple clicks from getting stored on window.name
    if (typeof(pre_name) === 'undefined') { pre_name = window.name; }

      // get the scroll positions
      var top = 0,
          left = 0;

      if (typeof(window.pageYOffset) === 'number') {
        top = window.pageYOffset,
        left = window.pageXOffset;
      } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        top = document.body.scrollTop,
        left = document.body.scrollLeft;
      } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        top = document.documentElement.scrollTop,
        left = document.documentElement.scrollLeft;
      }

      // store the scroll
      if (top || left) {

        window.name = prefix + '_' + left + '_' + top + '_' + pre_name;

        return true;

      }
  };
};

// Comportamiento del menú móvil
function initToggleNavOffCanvas() {

  // Versión OffCanvas
  $('#nav-toggle').on('click',function(){
    $(this).toggleClass('active');
    $('#main-container').toggleClass('nav-toggled');
  });

  $('.has-submenu > a').append('<span class="toggle-submenu"><span class="caret"/></span>');

  $('.toggle-submenu').on('click',function(){
    $(this).parent().parent().toggleClass('active');
    return false;
  });

}

// Comportamiento en smartphones de la barra d'accesos directes
function initAccessBar() {

  if($('#access-bar').length) {
    var $accessBar = $('#access-bar');

    var $accessBarSly = new Sly($accessBar, {
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 0,
      speed: 200,
      elasticBounds: 1,
      prev: $accessBar.find('.direct-access-nav-prev'),
      next: $accessBar.find('.direct-access-nav-next')
    },{
      load: function() {
        $accessBar.addClass('sly');
      }
    });

    $accessBarSly.init();

    // RTL Fix
    if ($RTL) {
      $accessBar.find('ul').css('margin-right','-' + ($accessBarSly.rel.slideeSize - $accessBarSly.rel.frameSize) + 'px');
    }

    $accessBarSly.on('moveEnd', function(){
      if($accessBarSly.pos.cur === $accessBarSly.pos.end) {
        $accessBar.addClass('end');
        $accessBar.removeClass('start');
      } else if($accessBarSly.pos.cur === $accessBarSly.pos.start) {
        $accessBar.addClass('start');
        $accessBar.removeClass('end');
      } else {
        $accessBar.removeClass('end');
        $accessBar.removeClass('start');
      }
    });

    // Recarlcular al rotar el terminal
    $(window).bind('orientationchange', function () {
      $accessBarSly.reload();
    });

  }

}

// Comportamiento en smartphones del menú principal
function initMainMenu() {

  $('.has-submenu.open').siblings('li').hide();

  if(Modernizr.mq('(max-width: 767px)')) {

    if($('.mobile-main-navigation').length) {
      var $mainNav = $('.mobile-main-navigation'),
          $mainNavCurrent = $mainNav.find('.current').index();

      var $mainNavSly = new Sly($mainNav, {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: $mainNavCurrent,
        scrollBy: 0,
        speed: 200,
        elasticBounds: 1
      },{
        load: function() {
          $mainNav.addClass('sly');
        }
      });

      if (!$RTL) { $mainNavSly.init(); }

      $mainNavSly.on('moveEnd', function(){
        if($mainNavSly.pos.cur === $mainNavSly.pos.end) {
          $mainNav.addClass('end');
          $mainNav.removeClass('start');
        } else if($mainNavSly.pos.cur === $mainNavSly.pos.start) {
          $mainNav.addClass('start');
          $mainNav.removeClass('end');
        } else {
          $mainNav.removeClass('end');
          $mainNav.removeClass('start');
        }
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $mainNavSly.reload();
      });

    }

    if($('.desktop-main-navigation').length) {
      var $secondNav = $('.has-submenu.current.open').find('ul');

      $secondNav.css({
        width: $secondNav.parents('ul').width() - $secondNav.siblings('a').outerWidth()
      });
    }

  }

}

// Comportamiento de los listados de enlaces
function initLinksList() {

  if($('.widget-link-list').length) {

    $('.widget-link-list').each(function(){

      if ($(this).find('.box-col').length > 1) {

        var $widget = $(this),
            $list = $widget.find('.box-content'),
            $listItem = $list.find('.box-col'),
            $listItemFocusable = $listItem.find('.box-item a'),
            $listControlMob = $widget.find('.pager-steps');

        // Adaptar alturas si estamos usando el formato móvil
        var $adaptiveHeight = Modernizr.mq('(max-width: 767px)') ? true : false,
            $minSlides = (Modernizr.mq('(max-width: 767px)') || ($widget.width() < 321)) ? 1 : 2,
            $mode = $RTL === true ? 'fade' : 'horizontal';

        var $listSlider = $list.bxSlider({
          mode: $mode,
          adaptiveHeight: $adaptiveHeight,
          minSlides: $minSlides,
          maxSlides: 2,
          moveSlides: 2,
          infiniteLoop: false,
          pager: true,
          buildPager: function (slideIndex) {
            return '<i aria-hidden="true" class="icon-dot"></i><span class="visuallyhidden">Pàgina d\'enllaços ' + (slideIndex + 1) + '</span>';
          },
          controls: false,
          auto: false,
          slideWidth: 320,
          slideMargin: 10,
          speed: 1
        });

        $listControlMob.find('.pager-steps-next').on('click', function () {
          $listSlider.goToNextSlide();
        });

        $listControlMob.find('.pager-steps-prev').on('click', function () {
          $listSlider.goToPrevSlide();
        });

        // Mover el paginador al lado del titular del widget
        $widget.find('.bx-pager').insertAfter($widget.find('.box-title'));

        // Recalcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $listSlider.reloadSlider();
        });

        // Comportamiento del tabulador
        if ($minSlides === 2) {

          $listItemFocusable.on('focus',function(){

            $(this).parents('.box-content').css('left','-' + $(this).parents('.box-col').position().left + 'px');

          });

        }

      }

    });

  }

}

// Comportamiento del módulo de Destacados múltiples
function initMultipleFeatured() {

  $('.widget-featured-multiple').each(function(){

    var $multiFeatured = $(this).find('.box');
    var $multiFeaturedItem = $multiFeatured.find('.box-destacat');
    var $multiFeaturedParent = $multiFeatured.parent();

    // Si es un smartphone, el paginador sólo indica posición, no es activo.
    var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

    if($isIE8) {
      $activatePageOn = 'click';
    }

    // Cada ítem ha de tener el mismo tamaño del contenedor.
    $multiFeaturedItem.css('width', 320);

    var $multiFeaturedSly = new Sly($multiFeatured, {
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBy: 0,
      speed: 200,
      elasticBounds: 1,
      pagesBar: $multiFeaturedParent.find('.pager'),
      next: $multiFeatured.siblings('.fallback-nav').find('.next-item'),
      prev: $multiFeatured.siblings('.fallback-nav').find('.prev-item'),
      pageBuilder: function (index) {
        return '<li id="pager-' + (index + 1) + '"><button class="btn btn-unstyled" tabindex="-1" aria-hidden="true"><i class="icon-dot"></i></button></li>';
      },
      activatePageOn: $activatePageOn
    },{
      load: function() {
        $multiFeatured.addClass('sly');
      }
    });

    $multiFeaturedSly.on('moveStart', function(){
      $multiFeatured.addClass('moving');
    });

    $multiFeaturedSly.on('moveEnd', function(){
      $multiFeatured.removeClass('moving');
    });

    $multiFeaturedSly.init();

    // RTL Fix
    if ($RTL) {
      $multiFeatured.find('.box-content').css('margin-right','-' + ($multiFeaturedSly.rel.slideeSize - $multiFeaturedSly.rel.frameSize) + 'px');
    }

    // Recarlcular al rotar el terminal
    $(window).bind('orientationchange', function () {
      $multiFeaturedSly.reload();
    });

    // Comportamiento del tabulador
    $multiFeaturedItem.find('a').on('focus',function(){

      $(this).parents('.box-content').css('left','-' + $(this).parents('.box-destacat').position().left + 'px');

    });

  });

}

// Comportamiento del módulo de Destacados (con cabecera) múltiples
function initMultipleFeaturedNew() {

  if($('.widget-destacat-capcalera').find('li').length > 1) {

    $('.widget-destacat-capcalera').each(function(){

      var $widget = $(this),
          $botiga = $widget.find('.box-content'),
          $botigaItem = $botiga.find('li'),
          $widgetWidth = $isIE8 ? 320 : $widget.width();

      var $mode = $RTL === true ? 'fade' : 'horizontal';

      if ( $botigaItem.length > 1 ) {

        var $botigaSlide = $botiga.bxSlider({
          mode: $mode,
          maxSlides: 1,
          pager: true,
          buildPager: function (slideIndex) {
            return '<i aria-hidden="true" class="icon-dot"></i><span class="visuallyhidden">Pàgina ' + (slideIndex + 1) + '</span>';
          },
          infiniteLoop: true,
          controls: false,
          pause: 4000,
          autoHover: true,
          slideWidth: $widgetWidth,
          speed: 500,
          onSliderLoad: function(currentIndex) {

            $widget.find('.box-title').text($botigaItem.eq(currentIndex).find('.category').text());

            // Mover el paginador al lado del titular del widget
            if ($RTL) {
              $widget.find('.bx-pager').css({
                right: $widget.find('.box-title').outerWidth()+10
              });
              $widget.find('.bx-controls-auto').css({
                right: $widget.find('.box-title').outerWidth()+$widget.find('.bx-pager').outerWidth()+15
              });
            } else {
              $widget.find('.bx-pager').css({
                left: $widget.find('.box-title').outerWidth()+10
              });
              $widget.find('.bx-controls-auto').css({
                left: $widget.find('.box-title').outerWidth()+$widget.find('.bx-pager').outerWidth()+15
              });
            }

          },
          onSlideBefore: function($slideElement, oldIndex, newIndex) {

            $widget.find('.box-title').text($botigaItem.eq(newIndex).find('.category').text());

            // Mover el paginador al lado del titular del widget
            if ($RTL) {
              $widget.find('.bx-pager').css({
                right: $widget.find('.box-title').outerWidth()+10
              });
              $widget.find('.bx-controls-auto').css({
                right: $widget.find('.box-title').outerWidth()+$widget.find('.bx-pager').outerWidth()+15
              });
            } else {
              $widget.find('.bx-pager').css({
                left: $widget.find('.box-title').outerWidth()+10
              });
              $widget.find('.bx-controls-auto').css({
                left: $widget.find('.box-title').outerWidth()+$widget.find('.bx-pager').outerWidth()+15
              });
            }

          }
        });

        // Recarlcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $botigaSlide.reloadSlider();
        });

      }

    });

  }

}

function initTicker($ticker, $pause) {

  // Opciones desde Ubiquo
  $ticker = $ticker || '.widget-ticker';
  $pause = $pause || 4000;

  if($($ticker).length) {

    $($ticker).each(function(){

      var $tickerWrap = $(this);
      var $tickerParent = $tickerWrap.find('.ticker');
      var $ticker = $tickerParent.find('ul');
      var $tickerItems = $ticker.find('li');
      var $tickerNav = $tickerWrap.find('.widget-ticker-nav');

      var $ltr = $tickerWrap.hasClass('ltr') ? 'prev' : 'next';

      var $mode = $RTL ? 'fade' : 'horizontal';

      if (Modernizr.mq('(min-width: 768px)') || $isIE8) {

        $ticker.bxSlider({
          mode: $mode,
          maxSlides: 1,
          infiniteLoop: $falseOnIE,
          pager: false,
          controls: false,
          auto: true,
          pause: $pause,
          autoHover: true,
          autoDirection: $ltr,
          slideWidth: $tickerParent.width(),
          speed: 800,
          onSliderLoad: function() {
            $tickerParent.addClass('in');
          }
        });

        // Play / Pause en escritorio
        $tickerWrap.find('.ticker-pause').on('click', function(){
          $ticker.stopAuto();
          $tickerNav.addClass('paused');
        });

        $tickerWrap.find('.ticker-play').on('click', function(){
          $ticker.startAuto();
          $tickerNav.removeClass('paused');
        });

        // Siguiente / Anterior en escritorio
        $tickerWrap.find('.ticker-fastforward').on('click', function(){
          $ticker.goToNextSlide();
        });

        $tickerWrap.find('.ticker-rewind').on('click', function(){
          $ticker.goToPrevSlide();
        });

        // Comportamiento del tabulador
        $tickerItems.find('a').on('focus', function(){
          $tickerWrap.find('.ticker-pause').click();
        });

      } else if (Modernizr.mq('(max-width: 767px)')) {

        var $tickerSly = new Sly($tickerParent, {
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBy: 0,
          speed: 100,
          elasticBounds: 1,
          pauseOnHover: 1
        },{
          load: function() {
            $tickerParent.addClass('sly');
            $tickerParent.addClass('in');
          }
        });

        $tickerSly.init();

        // Iniciar el movimiento continuo, al llegar al final
        // se desvanece y vuelve a comenzar
        setInterval(function() {

          if($tickerSly.pos.cur === $tickerSly.pos.end) {
            $tickerParent.removeClass('in');
            setTimeout(function(){
              $tickerSly.toStart();
            },500);
            setTimeout(function(){
              $tickerParent.addClass('in');
            },1000);
          }

          $tickerSly.moveBy(50);

        }, 3000);

        // Recarlcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $tickerSly.reload();
        });

      }

    });

  }

}

// Comportamiento del módulo de Element per pestanyes
function initElementFeatured() {

  if($('.widget-element-multiple').length) {
    $('.widget-element-multiple').each(function(){

      var $multiElem = $(this).find('.box-content'),
          $multiElemItem = $multiElem.find('.box-article'),
          $multiElemParent = $multiElem.parents('.widget');

      // Si es un smartphone, el paginador sólo indica posición, no es activo.
      var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

      if($isIE8) {
        $activatePageOn = 'click';
      }

      // Cada ítem ha de tener el mismo tamaño del contenedor.
      $multiElemItem.css('width', $multiElemParent.width());

      if($isIE8) {
        $multiElemItem.css('width', 650);
      }

      var $multiElemSly = new Sly($multiElem, {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 0,
        speed: 300,
        elasticBounds: 1,
        pagesBar: $multiElemParent.find('.pager-dots'),
        pageBuilder: function (index) {
          return '<li id="pager-' + (index + 1) + '"><button tabindex="-1" aria-hidden="true" class="btn btn-unstyled"><i class="icon-dot"></i><span class="visuallyhidden">Mostrar notícia ' + (index + 1) + '</span></button></li>';
        },
        activatePageOn: $activatePageOn
      },{
        load: function() {
          $multiElem.addClass('sly');
        },
        change: function() {
          $multiElemItem.each(function(){
            var $iframes = $(this).find('iframe')[0];
            if ($iframes) {
              var $video = $iframes.contentWindow;
              $video.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            }
          });
        }
      });


      $multiElemSly.init();

      // RTL Fix
      if ($RTL) {
        $multiElem.find('.box-articles').css('margin-right','-' + (($multiElemSly.rel.slideeSize/2) + ($multiElemSly.items[1].size/2)) + 'px');
      }

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $multiElemSly.reload();
      });

      // Comportamiento del tabulador
      $multiElemItem.on('focus', 'a,button', function(){

        if ($multiElemSly.pos.cur === 0) {
          $(this).parents('.box-articles').css('left','-' + $(this).parents('.box-article').position().left + 'px');
        }

      });

    });
  }

}

// Plugin para colapsados
function initPluginCollapse() {

  if($('[data-collapse]').length) {

    $('[data-collapse]').each(function(){

      var $this =  $(this),
          $rels = $this.attr('rel') ? $('[rel="' + $this.attr('rel') + '"]') : $this,
          $block = $this.parents('.widget').find('.collapse'),
          $collapsed = $this.data('collapse') === 1 ? false : true;

      $this.on('click', function () {
        $block.toggleClass('in');
        $rels.toggleClass('expanded');

        if($collapsed === true) {
          $rels.find('span').text($this.data('collapsed-text'));
          $collapsed = false;

          if ($inter.length) {
            $inter.reloadSlider();
          }

        } else {
          $rels.find('span').text($this.data('text'));
          $collapsed = true;

          if ($inter.length) {
            console.log($inter.length);
            $inter.reloadSlider();
          }

        }

      });

    });

  }

}

// Comportamiento de la barra de thumbnails o categorías en los Interactius
function initInteractiveThumbsNav() {

  if($('.widget-interactiu-thumbs-nav-wrap').length) {

    $('.widget-interactiu-thumbs-nav-wrap').each(function(){

      var $interThumbParent = $(this),
          $interThumb = $interThumbParent.find('.widget-interactiu-thumbs-nav'),
          $interThumbItem = $interThumb.find('.widget-interactiu-toggle'),
          $interThumbControl = $interThumbParent.find('.widget-interactiu-thumbs-nav-controller');

      // Si es un smartphone, el paginador sólo indica posición, no es activo.
      var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

      if ($isIE8) {
        $activatePageOn = 'click';
      }

      var $interThumbSly = new Sly($interThumb, {
        horizontal: 1,
        itemNav: 'basic',
        activateOn: 'click',
        smart: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 0,
        speed: 300,
        elasticBounds: 1,
        cycleBy: 'items',
        cycleInterval: 5000,
        pauseOnHover: 1,
        startPaused: 1,
        pagesBar: $interThumbParent.find('.widget-interactiu-thumbs-nav-controller').find('.pager-dots'),
        pageBuilder: function (index) {
          return '<li id="pager-' + (index + 1) + '"><button class="btn btn-unstyled"><i class="icon-dot"></i></button></li>';
        },
        activatePageOn: $activatePageOn,
        prevPage: $interThumbParent.find('.pager-steps-prev'),
        nextPage: $interThumbParent.find('.pager-steps-next')
      },{
        load: function() {
          $interThumb.addClass('sly');
          $interThumbControl.removeClass('hidden');
        }
      });

      $interThumbSly.init();

      // RTL Fix
      if ($RTL) {
        $interThumb.find('ul').css('margin-right','-' + ($interThumbSly.rel.slideeSize - $interThumbSly.rel.frameSize) + 'px');
      }

      $interThumbControl.find('.btn-pause').on('click', function(){
        $interThumbSly.pause();
        $interThumbControl.addClass('paused');
      });

      $interThumbControl.find('.btn-play').on('click', function(){
        $interThumbSly.resume();
        $interThumbControl.removeClass('paused');
      });

      if(!$interThumbParent.hasClass('category-thumbs')) {
        $interThumbSly.on('active', function(eventName,itemIndex) {
          $inter.goToSlide(itemIndex);
        });
      }

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $interThumbSly.reload();
      });

      // Comportamiento del tabulador
      $interThumbItem.find('a').on('focus', function(){
        $interThumbSly.activate($(this).parent().index());
      });

    });

  }

}

// Comportamiento de los slides superiores en los Interactius
$inter = '';
function initInteractiveSlides() {

  if($('.widget-interactiu').find('.widget-interactiu-slide').length > 1) {

    $('.widget-interactiu').each(function(){

      var $widget = $(this);
      var $interParent = $widget.find('.widget-interactiu-slides-wrap');
      $inter = $interParent.find('.widget-interactiu-slides');
      var $interItem = $inter.find('.widget-interactiu-slide');
      var $interControlBullets = $('#interactiu-cats-pager');
      var $interControlThumbs = $('.widget-interactiu-toggles');
      var $interControlMob = $interParent.siblings('.mobile-slides-controller');

      // Si es un smartphone, el paginador sólo indica posición, no es activo.
      var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

      // Adaptar alturas si estamos usando el formato móvil
      var $adaptiveHeight = Modernizr.mq('(max-width: 767px)') ? true : false;

      // Si es el Interactiu Nou, usar los thumbnails como paginador, en caso contrario, usar bullets
      var $interPager = $widget.hasClass('widget-interactiu-nou') ? $interControlThumbs : null;
      var $interPagerBullets = $interPager === $interControlBullets ? function (slideIndex) { return '<li id="pager-' + (slideIndex + 1) + '"><button class="btn btn-unstyled"><i class="icon-dot"></i></button></li>'; } : null;

      if(Modernizr.mq('(max-width: 767px)')) {
        $interItem.find('.collapse').removeClass('in');
      }

      var $interSlider = $inter.bxSlider({
        mode: 'fade',
        adaptiveHeight: $adaptiveHeight,
        maxSlides: 1,
        infiniteLoop: true,
        pager: true,
        pagerCustom: $interPager,
        buildPager: function (slideIndex) {
          return '<i class="icon-dot"></i>';
        },
        controls: false,
        auto: false,
        pause: 2000,
        autoHover: true,
        autoDirection: 'next',
        speed: 800,
        onSlideBefore: function() {
          $interItem.each(function(){
            var $iframes = $(this).find('iframe')[0];
            if ($iframes) {
              var $video = $iframes.contentWindow;
              $video.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            }
          });
        },
        onSliderLoad: function() {
          $interParent.find('.bx-pager').prependTo($interParent);
        }
      });

      $interControlMob.find('.pager-steps-next').on('click', function () {
        $interSlider.goToNextSlide();
      });

      $interControlMob.find('.pager-steps-prev').on('click', function () {
        $interSlider.goToPrevSlide();
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $interSlider.reloadSlider();
      });

    });

  }

}

// Comportamiento de la cajas que tienen barra de scroll en los Interactius
function initInteractiveScrollbar() {

  if($('.widget-interactiu').length) {

    $('.widget-interactiu-slide').each(function(){

      var $this = $(this),
          $interElemItem = $this,
          $interElem = $this.find('.widget-interactiu-body-wrap'),
          $interElemScrollbar = $interElem.find('.scrollbar'),
          $interElemHeadHeight = $interElem.siblings('.widget-interactiu-header').outerHeight();

      if ($interElem.outerHeight() + $interElemHeadHeight > 360) {

        $interElem.css('height', 350 - $interElemHeadHeight).attr('tabindex','0');

        if ($isIE8) {
          $interElem.css('height', 260);
        }

        var $interElemSly = new Sly($interElem, {
          smart: 0,
          startAt: 0,
          scrollBy: 15,
          scrollBar: $interElemScrollbar,
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,
          speed: 300,
          elasticBounds: 0
        });

        if (!$isIE8) {
          $interElemSly.init();
        }

        // Recarlcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $interElemSly.reload();
        });

        // Hacer scroll con el teclado
        var $pos = 0;
        $interElem.on('keydown',function(e){
          var $key = e.keyCode || e.which;

          if ($pos < 0) {
            $pos = 0;
          }

          if ($key === 40) {

            $interElemSly.slideTo($pos + 10, true);
            $pos = $pos + 10;

            e.preventDefault();

          } else if ($key === 38) {

            $interElemSly.slideTo($pos - 10, true);
            $pos = $pos - 10;

            e.preventDefault();

          }
        });

      } else {

        $interElemScrollbar.hide();

      }

    });

  }

}

// Marcador de Partit: Comportamiento de los jugadores que han marcado.
function initMatchScorers() {

  if($('.widget-marcador-de-partits').length) {
    $('.team-score-players-wrap').each(function(){

      var $this = $(this);
      var $matchScorers = $this.find('.team-score-players');
      var $matchScorersNav = $this.find('.team-score-players-nav');

      var $matchScorersSly = new Sly($matchScorers, {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        touchDragging: 0,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 0,
        speed: 200,
        elasticBounds: 1,
        nextPage: $matchScorersNav.find('.next'),
        prevPage: $matchScorersNav.find('.prev')
      },{
        load: function() {
          $this.addClass('sly');
        }
      });

      $matchScorersSly.init();

      // RTL Fix
      if ($RTL) {
        $matchScorers.find('.players').css('margin-right','-' + ($matchScorersSly.rel.slideeSize - $matchScorersSly.rel.frameSize) + 'px');
      }

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $matchScorersSly.reload();
      });

      // Recarlcular el slider al finalizar una llamada AJAX
      $(document).ajaxComplete(function() {
        $matchScorersSly.reload();
      });

    });
  }

}

// Comportamiento del módulo de Llistat de Galeries
function initGalleryList() {

  if($('.widget-galeries-multiple').length) {
    $('.widget-galeries-multiple').each(function(){

      var $galleryList = $(this).find('.widget-galeries-slides-wrap'),
          $galleryListItem = $galleryList.find('.widget-galeries-slide'),
          $galleryListParent = $galleryList.parents('.widget'),
          $galleryListControlMob = $galleryListParent.find('.mobile-slides-controller');

      // Si es un smartphone, el paginador sólo indica posición, no es activo.
      var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

      if($isIE8) {
        $activatePageOn = 'click';
      }

      if($galleryListItem.length > 1) {

        // Cada ítem ha de tener el mismo tamaño del contenedor.
        $galleryListItem.css('width', $galleryList.width());

        if($isIE8) {
          if($galleryList.siblings('.video-preview').length) {
            $galleryListItem.css('width', 276);
          } else {
            $galleryListItem.css('width', 630);
          }
        }

        var $galleryListSly = new Sly($galleryList, {
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBy: 0,
          speed: 300,
          elasticBounds: 1,
          pagesBar: $galleryListParent.find('.pager-dots'),
          pageBuilder: function (index) {
            return '<li id="pager-' + (index + 1) + '"><button class="btn btn-unstyled" tabindex="-1" aria-hidden="true"><i class="icon-dot"></i></button></li>';
          },
          next: $galleryListControlMob.find('.pager-steps-next'),
          prev: $galleryListControlMob.find('.pager-steps-prev'),
          activatePageOn: $activatePageOn
        },{
          load: function() {
            $galleryList.addClass('sly');
          }
        });

        $galleryListSly.init();

        // RTL Fix
        if ($RTL) {
          $galleryList.find('.widget-galeries-slides').css('margin-right','-' + ($galleryListSly.rel.slideeSize - $galleryListSly.rel.frameSize) + 'px');
        }

        // Recarlcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $galleryListSly.reload();
        });

        // Comportamiento del tabulador
        $galleryListItem.find('a').on('focus', function(){
          $galleryListSly.activate($(this).parents('.widget-galeries-slide').index());
        });

      }

    });
  }

}

// Comportamiento de las galerías relacionadas cuando hay más de una página
function initGalleriesNav() {

  if($('.widget-galeria-relacionades').length) {
    $('.widget-galeria-relacionades').each(function(){

      var $galleryNav = $(this).find('.widget-galeria-relacionades-nav');
      var $galleryNavItem = $galleryNav.find('.widget-galeria-relacionades-nav-slide');
      var $galleryNavParent = $galleryNav.parents('.widget-galeria-relacionades-nav-wrap');

      // Si es un smartphone, el paginador sólo indica posición, no es activo.
      var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

      if($galleryNavItem.length > 1) {

        // Cada ítem ha de tener el mismo tamaño del contenedor.
        $galleryNavItem.css('width', $galleryNav.width());

        if($isIE8) {
          $galleryNavItem.css('width', 323);
        }

        var $galleryNavSly = new Sly($galleryNavParent, {
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBy: 0,
          speed: 300,
          elasticBounds: 1,
          pagesBar: $galleryNavParent.find('.pager-dots'),
          next: $galleryNav.siblings('.fallback-nav').find('.next-item'),
          prev: $galleryNav.siblings('.fallback-nav').find('.prev-item'),
          pageBuilder: function (index) {
            return '<li id="pager-' + (index + 1) + '"><button class="btn btn-unstyled" tabindex="-1" aria-hidden="true"><i class="icon-dot"></i></button></li>';
          },
          activatePageOn: $activatePageOn
        },{
          load: function() {
            $galleryNav.addClass('sly');
          }
        });

        $galleryNavSly.init();

        // RTL Fix
        if ($RTL) {
          $galleryNavParent.find('.widget-galeria-relacionades-nav').css('margin-right','-' + ($galleryNavSly.rel.slideeSize - $galleryNavSly.rel.frameSize) + 'px');
        }

        // Recarlcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $galleryNavSly.reload();
        });

        // Comportamiento del tabulador
        $galleryNavItem.find('a').on('focus', function(){
          $galleryNavSly.activate($(this).parents('.widget-galeria-relacionades-nav-slide').index());
        });

      }

    });
  }

}

function initYoutubeGalleries() {
  var item = $('.widget-galeries-youtube, .widget-galeries-multiple');
  if(item.length > 0) {
    item.each(function(i) {

      if ($(this).find('.video-preview').length) {

        var preview_wrap = $(this).find('.video-preview.video-wrap'),
            video_thumbs = $(this).find('.list-videos');

        video_thumbs.children().each(function(j) {

          var list_item = $(this);
          if (j === 0) {
            list_item.addClass('active');
          }
          list_item.children('a').on('click', function(ev) {
            if (ev) { ev.preventDefault(); }

            video_thumbs.children('.active').removeClass('active');
            list_item.addClass('active');

            var img_url = $(this).find('img').attr('src'),
                index1 = img_url.lastIndexOf('/'),
                index2 = img_url.lastIndexOf('.'),
                final_img_url = img_url.substr(0, index1) + '/0' +
  img_url.substr(index2),
                video_name = $(this).find('.caption span').text();

            preview_wrap.find('.preview').removeClass('hidden').children('img').attr('src',
  final_img_url);
            preview_wrap.find('.embed-container').addClass('hidden').attr('data-video-name',
  video_name).children('iframe').attr('src',
  $(this).attr('href'));
            return false;
          });

        });

      }

    });
  }
}


// Equal heights: Bloques con el mismo alto
function equalHeight() {

  $('[data-equal-height]').each(function() {

    var $ehSons = $(this).find('.' + $(this).data('equal-height'));
    var $tallest = 0;

    $ehSons.each(function(){
      var $thisHeight = $(this).height();

      if($thisHeight > $tallest) {
        $tallest = $thisHeight;
      } else if($thisHeight === 0) {
        $(this).remove();
      }
    });

    $ehSons.height($tallest);

  });

}

// Plugin de Tablas responsive
function setCellHeights(original, copy) {
  var tr = original.find('tr'),
      tr_copy = copy.find('tr'),
      heights = [];

  tr.each(function (index) {
    var self = $(this),
        tx = self.find('th, td');

    tx.each(function () {
      var height = $(this).height();
      heights[index] = heights[index] || 0;
      if (height > heights[index]) { heights[index] = height; }
    });

  });

  tr_copy.each(function (index) {
    $(this).height(heights[index]);
  });
}
function splitTable(original)
{
  original.wrap('<div class="table-wrapper" />');

  var copy = original.clone();
  // copy.find('td:not(:first-child), th:not(:first-child)').css('display', 'none');
  copy.removeClass('responsive');

  original.closest('.table-wrapper').append(copy);
  copy.wrap('<div class="pinned" />');
  original.wrap('<div class="scrollable" />');

  setCellHeights(original, copy);
}
function responsiveTables() {
  $('table.responsive').each(function(i, element) {
    splitTable($(element));
  });
  return true;
}

function scrollableTables() {
  $('table.scrollable').each(function() {
    $(this).wrap('<div class="table-scrollable-wrap" />');
  });
}

// Comportamiento del Marcador de Seccions
function initMatchSlides() {

  if($('.widget-marcador-de-seccions').find('.match-slide').length > 1) {

    $('.widget-marcador-de-seccions').each(function(){

      var $widget = $(this);
      var $matches = $widget.find('.match-slides');
      var $matchesItem = $matches.find('.match-slide');
      var $widgetWidth = $isIE8 ? 320 : $widget.width();

      var $matchesSlide = $matches.bxSlider({
        slideSelector: 'li.match-slide',
        mode: 'fade',
        maxSlides: 1,
        pager: false,
        infiniteLoop: true,
        controls: false,
        auto: false,
        autoHover: true,
        slideWidth: $widgetWidth,
        speed: 500
      });

      $widget.find('.pager-steps-next').on('click', function () {
        $matchesSlide.goToNextSlide();
      });

      $widget.find('.pager-steps-prev').on('click', function () {
        $matchesSlide.goToPrevSlide();
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $matchesSlide.reloadSlider();
      });

    });

  }

}

// Comportamiento del Marcador de Seccions
function initTopApps() {

  if($('.widget-top-apps').find('.app').length > 1) {

    $('.widget-top-apps').each(function(){

      var $widget = $(this);
      var $apps = $widget.find('.app-list');

      var $mode = $RTL ? 'fade' : 'horizontal';

      var $appsSlider = $apps.bxSlider({
        mode: $mode,
        maxSlides: 1,
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextText: '<i class="icon-major"></i>',
        prevText: '<i class="icon-minor"></i>',
        buildPager: function (slideIndex) {
          return '<i class="icon-dot"></i>';
        },
        speed: 500
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $appsSlider.reloadSlider();
      });

    });

  }

}

// Comportamiento de las galerías en Detall genèric
function initArticleGallery() {

  if($('.box-article-gallery').find('li').length > 1) {

    $('.box-article-gallery').each(function(){

      var $galleryParent = $(this);
      var $gallery = $galleryParent.find('.gallery-slides');

      var $mode = $RTL ? 'fade' : 'horizontal';

      var $gallerySlider = $gallery.bxSlider({
        mode: $mode,
        maxSlides: 1,
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextText: '<i class="icon-major"></i>',
        prevText: '<i class="icon-minor"></i>',
        buildPager: function (slideIndex) {
          return '<i class="icon-dot"></i>';
        },
        speed: 500
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $gallerySlider.reloadSlider();
      });

    });

  }

}

// Comportamiento de la barra de thumbnails o categorías en los Interactius
function initActualitatNav() {

  if(($('.widget-actualitat').find('.box-articles').not('.box-articles-grid').length > 0 && $('.widget-actualitat').find('.box-article').length > 1) || ($('.widget-actualitat').find('.box-articles').hasClass('box-articles-grid') && $('.widget-actualitat').find('.box-articles-grid-slide').length  > 1)) {

    $('.widget-actualitat').each(function(){

      var $actNavParent = $(this),
          $act = $actNavParent.find('.box-articles'),
          $actItem = $actNavParent.find('.box-article'),
          $actNav = $actNavParent.find('.box-articles-pager-wrap'),
          $actNavItem = $actNav.find('.box-articles-pager-item'),
          $actNavControl = $actNavParent.find('.widget-actualitat-nav-controller');

      // Adaptar alturas si estamos usando el formato móvil
      var $adaptiveHeight = Modernizr.mq('(max-width: 767px)') ? true : false;

      // Usar un paginador en caso de visualización en móviles o en carrusel comercial
      var $mobilePager = Modernizr.mq('(max-width: 767px)') || $act.hasClass('box-articles-grid') ? true : false;

      // Velocidad en escritorio y en móvil
      var $actSpeed = Modernizr.mq('(max-width: 767px)') || $act.hasClass('box-articles-grid') ? 500 : 1;

      // Si es Carrusel comercial incluir el control de Start/Stop
      var $actAuto = $act.hasClass('box-articles-grid') ? true : false;

      // Si es móvil, pausar el automático
      var $startPaused = Modernizr.mq('(max-width: 767px)') ? 1 : 0;

      var $mode = $RTL ? 'fade' : 'horizontal';

      var $actSlider = $act.bxSlider({
        mode: $mode,
        adaptiveHeight: $adaptiveHeight,
        maxSlides: 1,
        infiniteLoop: false,
        pager: $mobilePager,
        buildPager: function (slideIndex) {
          return '<i class="icon-dot"></i>';
        },
        auto: $actAuto,
        autoStart: false,
        autoControls: true,
        startText: '<i class="icon-caret-right"></i>',
        stopText: '<i class="icon-pause"></i>',
        autoControlsCombine: true,
        controls: false,
        speed: $actSpeed
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $actSlider.reloadSlider();
      });

      // Comportamiento del tabulador
      if ($act.hasClass('box-articles-grid')) {

        $actItem.find('a').on('focus',function(){

          var $slideIndex = $(this).parents('.box-articles-grid-slide').index();

          if ($(this).parents('.box-articles-grid-slide')) {
            $actSlider.goToSlide($slideIndex);
          }

        });

      } else {

        $actItem.find('a').on('focus',function(){

          $actNavControl.find('.btn-pause').click();

          $actItem.each(function(){
            var $iframes = $(this).find('iframe')[0];
            if ($iframes) {
              var $video = $iframes.contentWindow;
              $video.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            }
          });

          if (!$RTL && $(this).parents('.box-article:first-child')) {

            $actSlider.goToSlide(0);

          }

        });

      }

      // Si se inicia un vídeo, pausar el carrusel
      $act.on('click','.btn-play-video, .preview > img', function(){

        $actNavControl.find('.btn-pause').click();

      });

      if($actNav.length) {
        // Si es un smartphone, el paginador sólo indica posición, no es activo.
        var $activatePageOn = Modernizr.mq('(min-width: 768px)') ? 'click' : null;

        if ($isIE8) {
          $activatePageOn = 'click';
        }

        var $actNavSly = new Sly($actNav, {
          horizontal: 1,
          itemNav: 'basic',
          activateOn: 'mouseenter',
          smart: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBy: 0,
          speed: 500,
          elasticBounds: 1,
          cycleBy: 'items',
          cycleInterval: 5000,
          pauseOnHover: 1,
          startPaused: $startPaused,
          pagesBar: $actNavControl.find('.pager-dots'),
          pageBuilder: function (index) {
            return '<li id="pager-' + (index + 1) + '"><button class="btn btn-unstyled" tabindex="-1" aria-hidden="true"><i class="icon-dot"></i><span class="visuallyhidden">Pàgina ' + (index + 1) + ' de notícies</span></button></li>';
          },
          activatePageOn: $activatePageOn
        },{
          load: function() {
            $actNav.addClass('sly');
          },
          cycle: function() {
            $actItem.each(function(){
              var $iframes = $(this).find('iframe')[0];
              if ($iframes) {
                var $video = $iframes.contentWindow;
                $video.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
              }
            });
          }
        });

        // Cada ítem ha de medir un 25% del contenedor.
        $actNavItem.css('width', $actNavItem.outerWidth()-1);

        if ($isIE8) {
          $actNavItem.css('width',162);
        }

        $actNavSly.init();

        var $mou = false;

        $actNavControl.find('li').mousedown(function(){
          $mou = true;
        });

        $actNavSly.on('activePage',function(){
          $mou = false;
          if($actNavSly.rel.activePage === 0) {
            // RTL Fix
            if ($RTL) {
              $actNav.find('.box-articles-pager').css('margin-right',0);
            }
          }
          if($actNavSly.rel.activePage === 1) {
            // RTL Fix
            if ($RTL) {
              $actNav.find('.box-articles-pager').css('margin-right','-' + ($actNavSly.items[1].size * 8) + 'px');
            }
          }
          if($actNavSly.rel.activePage === 2) {
            // RTL Fix
            if ($RTL) {
              $actNav.find('.box-articles-pager').css('margin-right','-' + ($actNavSly.items[1].size * 12) + 'px');
            }
          }
        });

        $actNavSly.on('change',function(){
          if($actNavSly.rel.activeItem === 3 && $actNavSly.rel.activePage === 0) {
            if($mou === false) {
              $actNavSly.activatePage(0,true);
            }
          }
          if($actNavSly.rel.activeItem === 4 && $actNavSly.rel.activePage === 1) {
            if($mou === false) {
              $actNavSly.activatePage(1,true);
            }
          }
          if($actNavSly.rel.activeItem === 7 && $actNavSly.rel.activePage === 1) {
            if($mou === false) {
              $actNavSly.activatePage(1,true);
            }
          }
          if($actNavSly.rel.activeItem === 8 && $actNavSly.rel.activePage === 2) {
            if($mou === false) {
              $actNavSly.activatePage(2,true);
            }
          }
        });

        $actNavControl.find('.btn-pause').on('click', function(){
          $actNavSly.pause();
          $actNavControl.addClass('paused');
        });

        $actNavControl.find('.btn-play').on('click', function(){
          $actNavSly.resume();
          $actNavControl.removeClass('paused');
        });

        $actNavSly.on('active', function(eventName,itemIndex) {
          $actSlider.goToSlide(itemIndex);
        });

        // Recarlcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $actNavSly.reload();
        });

      }

    });

  }

}

// Tooltips para la Taula d'eliminatories
function initEliminatories(){
  var $elim = $('.eliminatories');

  if($elim.length > 0){
    var $matches = $elim.find('> table > tbody > tr > td');

    $matches.each(function(i){
      var $match = $(this);
      var $results = $match.find('.results');

      if ($results.length > 0){

        if(Modernizr.mq('(min-width: 768px)') || $isIE8) {

          // Comportamiento en escritorio
          $match.css('cursor','pointer');
          $results.css('visibility','visible');
          $results.hide();

          $match.mousemove(function(ev){
            var pos = [ev.pageX - $elim.offset().left + 10, ev.pageY - $elim.offset().top];
            if (((pos[0] + $results.width()) > 634) && !$RTL){
              pos[0] -= ($results.width() + 35);
            }

            // RTL Fix
            if ($RTL) {
              $results.width(300);
              $results.css('right','auto');
              pos[0] = ev.pageX - 700;
            }

            $results.css('left',pos[0]);
            $results.css('top',pos[1]);
          });

          $match.hover(
            function(ev){
              $results.show();
            },
            function(ev){
              $results.hide();
            }
          );

        } else {

          // Comportamiento en móviles
          $results.hide();

          $match.on('click', function(){
            var $inHeight = 0;
            var $outHeight = $results.parent().outerHeight();
            var $matchHead = $results.parents('.table-eliminatories').find('th:eq('+$(this).index()+')');

            $('.results').hide();

            $results.show();

            $results.find('li').each(function(){
              $inHeight = $inHeight + $(this).height();
            });

            $results.css({
              minWidth: '100%',
              minHeight: '100%',
              paddingTop: ($outHeight - $inHeight)/2
            });

            $('.table-eliminatories').find('th').css({
              width: 150
            });

            $matchHead.css({
              width: 300
            });

          });

          $('.results').on('click', function(e){
            $('.results').hide();
            $('.table-eliminatories').find('th').css({
              width: 150
            });
            e.stopPropagation();
          });

        }
      }
    });
  }
}

// Plugin para tablas con scroll en móvil
function initTableScroll() {

  if($('.table-scroll').length) {
    $('.table-scroll').each(function(){

      var $table = $(this);
      var $tableParent = $(this).parent();
      $table.wrap('<div class="table-scroll-wrap" />').wrap('<div class="table-scroll-slide" />');

      var $tableWrap = $table.parents('.table-scroll-wrap');

      $tableWrap.find('.table-scroll-slide').css('width',$tableParent.width()*2);

      var $tableNav = $table.siblings('.pager-dots');

      $tableWrap.after('<div class="scrollbar"><div class="scroller"><i class="icon-caret-left"></i> <i class="icon-caret-right"></i></div></div>');

      var $tableScroll = $tableWrap.siblings('.scrollbar');

      var $tableSly = new Sly($tableWrap, {
        horizontal: 1,
        smart: 0,
        startAt: 0,
        scrollBy: 20,
        scrollBar: $tableScroll,
        dragHandle: 1,
        dynamicHandle: 0,
        clickBar: 1,
        speed: 300,
        elasticBounds: 0
      });

      $tableSly.init();

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $tableSly.reload();
      });

    });
  }

}

// Comportamiento de las galerías en Jugador y Partit
function initFullGallery() {

  if($('.widget-full-gallery-thumbs').find('li').length > 1) {

    $('.widget-full-gallery-thumbs').each(function(){

      // Si es móvil, mostrar 3 thumbnails
      var $thumbMob = Modernizr.mq('(max-width: 767px)') ? 3 : 7;

      var $galleryFull = $(this);
      var $galleryFullItem = $galleryFull.find('li');
      var $galleryFullItemActive = $galleryFull.find('.active').index();
      var $galleryFullSlideActive = parseInt($galleryFullItemActive/$thumbMob,10);

      var $galleryFullSlide = $galleryFull.bxSlider({
        minSlides: $thumbMob,
        maxSlides: 10,
        infiniteLoop: false,
        hideControlOnEnd: true,
        startSlide: $galleryFullSlideActive,
        nextText: '<i class="icon-major"></i>',
        prevText: '<i class="icon-minor"></i>',
        buildPager: function (slideIndex) {
          return '<i class="icon-dot"></i>';
        },
        slideWidth: $galleryFullItem.width(),
        speed: 500
      });

    });

    // Mantener la posición del scroll en las galerías
    var sneaky = new ScrollSneak(location.hostname);

    $('.widget-full-gallery-thumbs').on('click', 'a', sneaky.sneak);

    $('.widget-full-gallery-prev').on('click', sneaky.sneak);
    $('.widget-full-gallery-next').on('click', sneaky.sneak);

  }

}

// Comportamiento de las galerías de capturas de Apps
function initAppGallery() {

  if($('.widget-top-app-images').find('li').length > 1) {

    $('.widget-top-app-images').each(function(){

      var $appGalleryFull = $(this);
      var $appGalleryFullItem = $appGalleryFull.find('li');

      // Si es móvil, mostrar 1 captura
      var $galThumbMob = Modernizr.mq('(max-width: 767px)') ? 1 : 3;

      var $mode = $RTL ? 'fade' : 'horizontal';

      var $appGalleryFullSlide = $appGalleryFull.bxSlider({
        mode: $mode,
        minSlides: $galThumbMob,
        maxSlides: 10,
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextText: '<i class="icon-major"></i>',
        prevText: '<i class="icon-minor"></i>',
        buildPager: function (slideIndex) {
          return '<i class="icon-dot"></i>';
        },
        slideWidth: $appGalleryFullItem.width(),
        speed: 500
      });

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $appGalleryFullSlide.reloadSlider();
      });

    });

  }

}

// Scroll en minut a minut
function initMinuteScrollbar() {

  if($('.widget-partit-minut').length) {
    $('.widget-partit').each(function(){

      var $this = $(this);
      var $minutItem = $this;
      var $minut = $this.find('.widget-partit-minut-list-wrap');
      var $minutScrollbar = $minut.find('.scrollbar');
      var $tallestLineUp = $this.find('.widget-partit-lineup.local').height() >= $this.find('.widget-partit-lineup.away').height() ? $this.find('.widget-partit-lineup.local').height() : $this.find('.widget-partit-lineup.away').height();

      $minut.css( 'height', parseInt($tallestLineUp,10) - $minut.siblings('.box-header').outerHeight() - 10 );

      var $minutSly = new Sly($minut, {
        itemNav: 'basic',
        smart: 1,
        startAt: 0,
        scrollBy: 15,
        scrollBar: $minutScrollbar,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
        speed: 300,
        elasticBounds: 0,
        keyboardNavBy: 'items'
      });

      $minutSly.init();

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $minutSly.reload();
      });

    });
  }

}

function cardTooltips() {

  if ($('.event-yellow-card').length > 1 || $('.event-red-card').length > 1) {

    $('.table-lineup, .widget-partit-minut-list').find('.event-yellow-card, .event-red-card').attr('tabindex', '0');

    $('.event-yellow-card, .event-red-card').each(function() {

      var $this = $(this),
          $alt = $this.attr('alt');

      $this.tooltip({
        'container': 'body',
        'title': $alt
      });

    });

    $('.widget-partit-timeline').on('focus', 'li', function() {
      $(this).find('.event-yellow-card, .event-red-card').tooltip('show');
    });

    $('.widget-partit-timeline').on('blur', 'li', function() {
      $(this).find('.event-yellow-card, .event-red-card').tooltip('hide');
    });

  }

}


// Comportamiento de las estadísticas del Partit (Directe)
function initMatchStats() {
  // Posession chart
  if ($('#matchPossessio').length) {

    var $local = $('#matchPossessio').siblings('.local').find('.number').text();
    var $away = $('#matchPossessio').siblings('.away').find('.number').text();

    var $matchPossessioData = [
      {
        value : parseInt($away,10),
        color : '#568CCA'
      },
      {
        value: parseInt($local,10),
        color: '#c41930'
      }
    ];

    var $matchPossessioContext = $("#matchPossessio").get(0).getContext("2d");
    var $matchPossessio = new Chart($matchPossessioContext).Doughnut($matchPossessioData,{
      segmentShowStroke : false,
      segmentStrokeColor : "#d9d9d9",
      segmentStrokeWidth : 1,
      percentageInnerCutout : 50,
      animationEasing : "easeInOutQuint",
      animateScale : true
    });
  }

  // Team slides
  if($('.widget-partit-stats').length) {
    $('.widget-partit-stats').find('.stat').each(function(){
      var $stat = $(this);
      var $local = $stat.find('.local');
      var $localN = parseInt($local.find('.number').text(),10);
      var $away = $stat.find('.away');
      var $awayN = parseInt($away.find('.number').text(),10);
      var $total = $localN + $awayN;

      $local.find('.progress-bar').css({
        width: ($localN * 100) / $total + '%'
      });

      $away.find('.progress-bar').css({
        width: ($awayN * 100) / $total + '%'
      });
    });
  }
}


// Iniciar los popups (Partit)
function initPopups() {

  if($('[data-popup]').length) {

    $('[data-popup]').each(function(){
      var $this = $(this);
      var $popupType = $this.data('popup');

      if($popupType === 'ajax') {

        $this.magnificPopup({
          type: 'iframe',
          iframe: {

            patterns: {
              fcbarcelona: {
                index: 'www.fcbarcelona.cat',
                src: '%id%?height=500'
              }

            }

          }
        });

      }

    });

  }

}

// Iniciar los elementos de formularios personalizados
function initFormElements() {

  // Radios & Checkboxes
  if($('input[type=checkbox]').length || $('input[type=radio]').length) {
    $('input').iCheck({
      checkboxClass: 'icheckbox_minimal',
      radioClass: 'iradio_minimal',
      increaseArea: '20%'
    });
  }

  // Selects
  if($('select').length && !$RTL) {

    $('select').each(function(){
      var $select = $(this);

      if($select.hasClass('no-search')) {
        $select.select2({ minimumResultsForSearch: -1 });
      } else {
        $select.select2({ minimumResultsForSearch: 10 });
      }

    });

  }

}

// Plugin para intercambio de imágenes en :hover
function hoverImgs() {

  if($('[data-hover-img]').length) {

    $('[data-hover-img]').each(function() {
      var $img = $(this);
      var $imgLink = $img.parents('a');
      var $src = $img.attr('src');
      var $hover = $img.data('hover-img');

      $imgLink.hover(function() {
        $img.attr('src',$hover);
      }, function() {
        $img.attr('src',$src);
      });
    });

  }

}

// Comportamiento del slideshow para el Módul Botiga manual
function initBotigaSlides() {

  if($('.widget-botiga-manual').find('.botiga-slide').length > 1) {

    $('.widget-botiga-manual').each(function(){

      var $widget = $(this);
      var $botiga = $widget.find('.botiga-slides');
      var $botigaItem = $botiga.find('.botiga-slide');
      var $widgetWidth = $isIE8 ? 320 : $widget.width();

      var $mode = $RTL === true ? 'fade' : 'horizontal';

      $auto = Modernizr.mq('(max-width: 767px)') ? false : true;

      var $botigaSlide = $botiga.bxSlider({
        mode: $mode,
        maxSlides: 1,
        pager: true,
        buildPager: function (slideIndex) {
          return '<i aria-hidden="true" class="icon-dot"></i><span class="visuallyhidden">Pàgina ' + (slideIndex + 1) + '</span>';
        },
        infiniteLoop: true,
        controls: false,
        auto: $auto,
        autoControls: $auto,
        startText: '<i class="icon-caret-right"></i>',
        stopText: '<i class="icon-pause"></i>',
        autoControlsCombine: $auto,
        pause: 4000,
        autoHover: true,
        slideWidth: $widgetWidth,
        speed: 500
      });

      // Mover el paginador al lado del titular del widget
      if ($RTL) {
        $widget.find('.bx-pager').css({
          right: $widget.find('.box-title').outerWidth()+10
        });
        $widget.find('.bx-controls-auto').css({
          right: $widget.find('.box-title').outerWidth()+$widget.find('.bx-pager').outerWidth()+15
        });
      } else {
        $widget.find('.bx-pager').css({
          left: $widget.find('.box-title').outerWidth()+10
        });
        $widget.find('.bx-controls-auto').css({
          left: $widget.find('.box-title').outerWidth()+$widget.find('.bx-pager').outerWidth()+15
        });
      }

      // Recarlcular al rotar el terminal
      $(window).bind('orientationchange', function () {
        $botigaSlide.reloadSlider();
      });

    });

  }

}

// Iniciar vídeos con preview
function playVideo($selector) {

  var iframe = $selector.find('iframe'),
      embed = $selector.find('.embed-container'),
      videoURL = iframe.attr('src');

  if (videoURL.indexOf('?') < 0) {
    videoURL += '?';
  }

  iframe.attr('src', videoURL + '&autoplay=1&enablejsapi=1');

  embed.removeClass('hidden');
  $selector.find('.preview').addClass('visuallyhidden');

}

function responsiveVideo() {

  if($('.video-wrap').find('.preview').length) {

    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $('.video-wrap').find('.preview').each(function() {

      var $container = $(this).parent(),
          $videoEmbed = $container.find('.embed-container'),
          $videoContainer = $container.find('iframe')[0],
          $video = $videoContainer.contentWindow,
          $videoURL = $container.find('iframe').attr('src'),
          $videoID = $videoURL.split('/').pop(),
          $videoID = $videoID.lastIndexOf('?') > 0 ? $videoID.substring(0,$videoID.lastIndexOf('?')) : $videoID,
          $videoPublicURL = $videoURL.replace('embed/', 'watch?v=');

      $container.find('iframe').attr('tabindex','-1');

      // Obtener el título del vídeo
      // $.get('https://gdata.youtube.com/feeds/api/videos/' + $videoID + '?v=2&alt=jsonc', function(data) {
      //   var $title = data.data.title;
      //   $container.attr('name', $title);
      //   $container.find('.btn-play-video > img').attr('alt', $container.find('.btn-play-video > img').attr('alt') + ' ' + $title);
      // });

      $container.find('.btn-play-video > img').attr('alt', $container.find('.btn-play-video > img').attr('alt') + ' ' + $videoEmbed.data('video-name'));

      // Iniciar el video normalmente al hacer clic en el play
      // o en la imagen de previsualización
      // $container.on('click', '.btn-play-video, img', function(e) {
      //   e.preventDefault();
      //   playVideo($container);
      // });

      // Iniciar el video y el reproductor accesible cuando
      // se activa usando el teclado
      $container.on('keydown click', '.btn-play-video, img', function(e) {

        var keyCode = e.keyCode || e.which,
            $eventType = e.type,
            $videoName = $videoEmbed.data('video-name');

        if (keyCode === 13 || keyCode === 32 || $eventType === 'click') {
          e.preventDefault();
          e.stopPropagation();

          $container.find('.btn-play-video').attr('tabindex', '-1');

          $('.video-controller-btn').find('button,a').on('focus', function () { $(this).parents('.video-controller').removeClass('visuallyhidden'); });
          $('.video-controller-btn').find('button,a').on('blur', function () { $(this).parents('.video-controller').addClass('visuallyhidden'); });

          $container.prepend(
            $('<a href="#" class="jump-flash visuallyhidden">Saltar el flash ' + $videoName + '</a>')
          );

          $container.append(
            $('<ul class="video-controller list-unstyled" />')
              .append(
                $('<li class="video-controller-btn"/>')
                  .append(
                    $('<button type="button" tabindex="0" class="btn btn-primary btn-small btn-play"><span class="video-action">Pausar</span><span class="visuallyhidden"> el video ' + $videoName + '</span></button>')
                  )
                )
              .append(
                $('<li class="video-controller-btn"/>')
                  .append(
                    $('<button type="button" tabindex="0" class="btn btn-primary btn-small btn-volume-up">Màxim volum<span class="visuallyhidden"> del vídeo ' + $videoName + '</span></button>')
                  )
                )
              .append(
                $('<li class="video-controller-btn"/>')
                  .append(
                    $('<button type="button" tabindex="0" class="btn btn-primary btn-small btn-volume-down">Volum mig<span class="visuallyhidden"> del vídeo ' + $videoName + '</span></button>')
                  )
                )
              .append(
                $('<li class="video-controller-btn"/>')
                  .append(
                    $('<button type="button" tabindex="0" class="btn btn-primary btn-small btn-mute"><span class="video-action">Desactivar</span> so<span class="visuallyhidden"> del vídeo ' + $videoName + '</span></button>')
                  )
                )
              .append(
                $('<li class="video-controller-btn"/>')
                  .append(
                    $('<a target="_blank" href="' + $videoPublicURL + '" tabindex="0" class="btn btn-primary btn-small btn-yt">Veure a YouTube<span class="visuallyhidden"> ' + $videoName + ' (Obre una nova pestanya)</span></a>')
                  )
                )
          );

          var $controller = $container.find('.video-controller'),
              $playBtn = $controller.find('.btn-play'),
              $volumeDownBtn = $controller.find('.btn-volume-down'),
              $volumeUpBtn = $controller.find('.btn-volume-up'),
              $muteBtn = $controller.find('.btn-mute'),
              $jumpBtn = $container.find('.jump-flash'),
              $ytBtn = $controller.find('.btn-yt');

          playVideo($container);

          // Acciones de los botones
          $container.on('click','.jump-flash',function(e){
            e.preventDefault();
            $container.find('.btn-play').focus();
          });

          $container.on('click','.btn-play',function(){

            if ($playBtn.hasClass('pause')) {
              $playBtn.find('.video-action').text('Pausar');
              $playBtn.removeClass('pause');
              $video.postMessage('{"event":"command","func":"playVideo","args":""}','*');
            } else {
              $playBtn.find('.video-action').text('Reanudar');
              $playBtn.addClass('pause');
              $video.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            }

          });

          $container.on('click','.btn-volume-down',function(){

            $video.postMessage('{"event":"command","func":"setVolume","args":[50]}','*');

          });

          $container.on('click','.btn-volume-up',function(){

            $video.postMessage('{"event":"command","func":"setVolume","args":[100]}','*');

          });

          $container.on('click','.btn-mute',function(){

            if ($muteBtn.hasClass('mute')) {
              $muteBtn.find('.video-action').text('Desactivar');
              $muteBtn.removeClass('mute');
              $video.postMessage('{"event":"command","func":"unMute","args":""}','*');
            } else {
              $muteBtn.find('.video-action').text('Activar');
              $muteBtn.addClass('mute');
              $video.postMessage('{"event":"command","func":"mute","args":""}','*');
            }

          });

          $jumpBtn.on('focus', function() {
            $controller.addClass('visuallyhidden');
          });

          $ytBtn.on('blur', function() {
            $controller.addClass('visuallyhidden');
          });

          $controller.on('focus', 'button, a', function() {
            $controller.removeClass('visuallyhidden');
          });

          $jumpBtn.focus();

        }

      });

    });

  }

}

// Iniciar continguts Accessible per a Deficients Auditius
function initAda() {

  if($('#ada').length) {

    $('.btn-ada').magnificPopup({
      type:'inline',
      midClick: true
    });

  }

}

// Interpretar URLs y modificar el estado de las pestañas en caso de que existan
function tabRouter() {

  var $url = location.hash.slice(1);

  if ($('.nav-tabs').length && $url) {

    var $tabs = $('.nav-tabs'),
        $tabsContent = $tabs.siblings('.tab-content'),
        $activeTab = $('a[href=#' + $url + ']'),
        $activeTabWrap = $activeTab.parent(),
        $activeTabText = $activeTab.html();

    $activeTabWrap.addClass('active').siblings('li').removeClass('active');
    $tabs.find('.dropdown-toggle .current').html($activeTabText);

    $tabsContent.find('[id=' + $url + ']').addClass('active').siblings('.tab-pane').removeClass('active');

  }

}

// Comportamiento de los carruseles de notícias
function initNewsCarousel() {

  if($('.widget-carrusel-noticies').length) {

    $('.widget-carrusel-noticies').each(function(){

      if ($(this).find('.box-item').length > 4) {

        var $widget = $(this),
            $list = $widget.find('.box-articles-row'),
            $listItem = $list.find('.box-item'),
            $listItemFocusable = $listItem.find('.box-item a'),
            $listControlMob = $widget.find('.pager-steps');

        // Adaptar alturas si estamos usando el formato móvil
        var $adaptiveHeight = Modernizr.mq('(max-width: 767px)') ? true : false,
            $slideNumber,
            $mode = $RTL === true ? 'fade' : 'horizontal';

        if (Modernizr.mq('(max-width: 767px)')) {
          $slideNumber = 2;
        } else if($widget.parents('.bloc2').length) {
          $slideNumber = 3;
        } else {
          $slideNumber = 4;
        }

        var $listSlider = $list.bxSlider({
          mode: $mode,
          minSlides: $slideNumber,
          maxSlides: $slideNumber,
          infiniteLoop: false,
          hideControlOnEnd: true,
          nextText: '<i class="icon-major"></i>',
          prevText: '<i class="icon-minor"></i>',
          buildPager: function (slideIndex) {
            return '<i class="icon-dot"></i>';
          },
          slideWidth: 220,
          slideMargin: 10,
          speed: 500
        });

        $listControlMob.find('.pager-steps-next').on('click', function () {
          $listSlider.goToNextSlide();
        });

        $listControlMob.find('.pager-steps-prev').on('click', function () {
          $listSlider.goToPrevSlide();
        });

        // Mover el paginador al lado del titular del widget
        $widget.find('.bx-pager').insertAfter($widget.find('.box-title'));

        // Recalcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $listSlider.reloadSlider();
        });

      }

    });

  }

}

// Comportamiento de Actualitat (Noves apertures)
function initActualitatNew() {

  if($('.widget-actualitat-noves-apertures').length) {

    $('.widget-actualitat-noves-apertures').each(function(){

      var $widget = $(this);

      // Si es el slider de fondo transparente, asignar una clase en el body
      if ($widget.hasClass('transparent-content')) {
        $('body').addClass('transparent-content');
      }

      if ($widget.find('.actualitat-slide').length > 1) {

        var $list = $widget.find('.actualitat-slides'),
            $listItem = $list.find('.actualitat-slide'),
            $listItemFocusable = $listItem.find('.actualitat-slide-title a');

        // Adaptar alturas si estamos usando el formato móvil
        var $adaptiveHeight = Modernizr.mq('(max-width: 767px)') ? true : false,
            $mode = $RTL === true || $widget.hasClass('transparent-content') ? 'fade' : 'horizontal',
            $auto = $list.hasClass('auto') && Modernizr.mq('(min-width: 767px)');

        var $listSlider = $list.bxSlider({
          mode: $mode,
          minSlides: 1,
          maxSlides: 1,
          infiniteLoop: false,
          hideControlOnEnd: true,
          adaptiveHeight: true,
          auto: $auto,
          autoControls: $auto,
          startText: '<i class="icon-caret-right"></i>',
          stopText: '<i class="icon-pause"></i>',
          autoControlsCombine: $auto,
          nextText: '<i class="icon-major"></i>',
          prevText: '<i class="icon-minor"></i>',
          buildPager: function (slideIndex) {
            return '<i class="icon-dot"></i>';
          },
          slideWidth: $listItem.width(),
          speed: 500
        });

        // Mover el paginador al lado del titular del widget
        $widget.find('.bx-pager').insertAfter($widget.find('.widget-actualitat-noves-apertures-title'));
        $widget.find('.bx-controls-auto').insertAfter($widget.find('.widget-actualitat-noves-apertures-title'));

        // Recalcular al rotar el terminal
        $(window).bind('orientationchange', function () {
          $listSlider.reloadSlider();
        });

      }

    });

  }

}

// Comportamiento del aviso del uso de cookies
function initCookieAdvice() {

  if ($('#notificacio-cookies').length) {

    var $alert = $('#notificacio-cookies'),
        $closeAlert = $alert.find('.close');

    $closeAlert.on('click', function(){
      $alert.remove();
    });

  }

}

// Comportamiento del aviso del uso de cookies
function initMarcadorScoresNew() {

  if ($('.widget-marcador-nav').length) {

    $('.widget-marcador-nav').each(function(){

      if ( $(this).find('.nav > li').length > 1 ) {

        var $this = $(this),
            $toggleNext = $this.find('.widget-marcador-nav-next'),
            $togglePrev = $this.find('.widget-marcador-nav-prev'),
            $nav = $this.find('.nav');

        $togglePrev.removeClass('hidden');
        $toggleNext.removeClass('hidden');

        $toggleNext.on('click',function(){

          if ($nav.find('.active').next().next().length === 0 && !$toggleNext.hasClass('disabled')) {
            $toggleNext.toggleClass('disabled');
          }

          $togglePrev.removeClass('disabled');

          $nav.find('.active').next().find('a').tab('show');

        });

        $togglePrev.on('click',function(){

          if ($nav.find('.active').prev().prev().length === 0 && !$togglePrev.hasClass('disabled')) {
            $togglePrev.toggleClass('disabled');
          }

          $toggleNext.removeClass('disabled');

          $nav.find('.active').prev().find('a').tab('show');

        });

        $nav.find('a').on('click', function(){
          window.location = $(this).attr('href');
        });

      }

    });

  }

}

// Iniciar comportamientos cuando la página esté lista
$(function(){

  // Si el layout se considera móvil, iniciar el comportamiento para smartphones
  if(Modernizr.mq('(max-width: 767px)')) {
    // initToggleNav();
    initAccessBar();
    responsiveTables();
    scrollableTables();
    initTopApps();
    initTableScroll();
  }

  // Si el layout se considera escritório, iniciar el comportamiento exclusivo de escritorio
  if(Modernizr.mq('(min-width: 768px)') || $isIE8) {
    initInteractiveScrollbar();
    initMatchScorers();
    // initMinuteScrollbar();
    cardTooltips();
  }

  // Iniciar los comportamientos válidos para cualquier soporte
  initMainMenu();
  initLinksList();
  initMultipleFeatured();
  initElementFeatured();
  initPluginCollapse();
  initInteractiveSlides();
  initInteractiveThumbsNav();
  initGalleryList();
  // initGalleriesNav(); // Ahora se inicia en el propio widget
  initYoutubeGalleries();
  initMatchSlides();
  initArticleGallery();
  initActualitatNav();
  initEliminatories();
  initFullGallery();
  initPopups();
  initAppGallery();
  initMatchStats();
  // initFormElements();
  hoverImgs();
  initBotigaSlides();
  responsiveVideo();
  initAda();
  initNewsCarousel();
  initCookieAdvice();
  initActualitatNew();
  initMarcadorScoresNew();
  initMultipleFeaturedNew();

  //
  // COMPORTAMIENTOS MENORES
  //

  if($('.widget-proper-partit').find('.extend-info').length) {
    $('.widget-proper-partit').find('.extend-info').parents('.box-match-data').css('padding-top',0);
  }

  // Correcciones en base a tamaño de la tipografía (Accesibilidad)
  if ($('.desktop-main-navigation > li.current > ul').height() > 50) {
    $('.desktop-main-navigation').css('margin-bottom',$('.desktop-main-navigation > li.current > ul').height() - 1);
  }
  if ($('.desktop-main-navigation').height() > 50) {
    $('.desktop-main-navigation > li.current > ul').css('top',$('.desktop-main-navigation').height());
  }

  // Poner el foco del cursor en el primer campo erróneo en formularios (Accesibilidad)
  if (!Modernizr.input.autofocus) {
    $('.control-group.error').eq(0).find('input').focus();
  }

  // Posicionar el botón de facebook en FCBFans
  if ($('.widget-form-2col').find('.facebook-link-container').length) {

    var $parentFB = $('.widget-form-2col'),
        $formHeight = $parentFB.siblings('.fieldset').height(),
        $fbBtn = $parentFB.find('.facebook-link-container');

    $fbBtn.css('bottom','-' + $formHeight-1 + 'px');
  }

  // En las barras de pestañas actualizar el nombre de la pestaña actual en smartphones
  if ($('.nav-tabs').find('.dropdown').length && Modernizr.mq('(max-width: 767px)')) {

    $('.nav-tabs').find('.dropdown').each(function(){

      $dropdown = $(this);
      $dropdownCurrent = $dropdown.find('.current');
      $dropdownMenu = $dropdown.find('.dropdown-menu');

      $dropdownMenu.on('click','a',function(){
        $dropdownCurrent.text($(this).text());
      });

    });

  }

});

$(window).load(function () {
  if(Modernizr.mq('(min-width: 768px)') || $isIE8) {

    equalHeight();

    //Fix para Proper partit (Noves apertures) cuando no hay venta de entradas
    $('.widget-proper-partit-noves-apertures').each( function(){
      if ($(this).find('.widget-proper-partit-actions').length !== 0) {
        $(this).find('.widget-proper-partit-teams').css({
          width: '47%',
          paddingRight: 0
        });
      }
    });

  }

  if ($isIE8) {
    // CSS3 PIE para Internet Explorer 8
    var $piElementsList = new Array(
      '.fcb-sites-wrap',
      '.logo-fcb-mini',
      '.btn',
      '.settings-wrap'
    );
    var $piElements = $piElementsList.join();

    $($piElements).each(function() {
      PIE.attach(this);
    });
  }

  // Enlazar a la pestaña correspondiente según la url
  tabRouter();

  // Marcar el bloc1 como alternativo si algunos de los nuevos módulos está dentro
  if ($('.bloc1').has('.widget-proper-partit-noves-apertures').length || $('.bloc1').has('.widget-destacat-capcalera').length || $('.bloc1').has('.widget-carrusel-noticies').length) {
    $('.bloc1').addClass('alt');
  }

  // Correcciones de accesibilidad
  $('.bx-pager-link').attr('tabindex','-1').attr('aria-hidden','true');
  $('.widget-interactiu-slides-wrap .bx-pager-link').attr('tabindex',0);
  // Todos los elementos con tabindex="-1" no deben aparecer en lectores de pantalla
  $('[tabindex="-1"]').attr('aria-hidden','true');

  // Eliminar de la capa de accesibilidad los banners en flash
  $('object').attr('tabindex','-1').attr('aria-hidden','true');
  $('[id^="sas_"]').attr('tabindex','-1').attr('aria-hidden','true');
});

var config = {
  TC_TODAY: null, //thumbnail carousel reference for the Today version
  TC_INTCAR: null //thumbnail carousel reference for the other version
};
var dom_lang_relations = {
  cat: 'ca',
  es: 'es',
  com: 'en',
  id: 'id'
}
var selected_lang = 'ca';
var domext = getURLDomainExtension(document.URL);
if (document.URL.indexOf('localhost') == -1){
  selected_lang = dom_lang_relations[domext];
}
var ga_codes = {
  cat: '26518457',
  es: '26520913',
  com: '26522102'
}

var locale = {
  ERRORPAGE_LEAD: {
    'error-404': {
      ca: 'La pàgina sol·licitada no s\'ha trobat al servidor.',
      es: 'La página solicitada no está disponible en el servidor.',
      en: 'This page is not available on the server.',
      id: 'Halaman ini tidak aktif di server'
    },
    'error-422': {
      ca: 'Hi ha hagut un error al intentar mostrar la pàgina.',
      es: 'Ha ocurrido un error al intentar mostrar la página solicitada.',
      en: 'An error has ocurred when loading this page.',
      id: 'Error terjadi ketika Anda mendonload halaman ini'
    },
    'error-500': {
      ca: 'Hi ha hagut un error al intentar mostrar la pàgina.',
      es: 'Ha ocurrido un error al intentar mostrar la página solicitada.',
      en: 'An error has ocurred when loading this page.',
      id: 'Error terjadi ketika Anda mendonload halaman ini'
    }
  },
  ERRORPAGE_EXIT: {
    'error-404': {
      ca: 'Pot anar a la <a href="http://www.fcbarcelona.cat">pàgina principal</a> de FCBarcelona.',
      es: 'Puede ir a la <a href="http://www.fcbarcelona.es">página principal</a> de FCBarcelona.',
      en: 'You may go to the FCBarcelona <a href="http://www.fcbarcelona.com">homepage</a>.',
      id: 'Anda dapat mengklik FC Barcelona <a href="http://www.fcbarcelona.co.id">homepage</a>'
    },
    'error-422': {
      ca: 'Pot anar a la <a href="http://www.fcbarcelona.cat">pàgina principal</a> de FCBarcelona.',
      es: 'Puede ir a la <a href="http://www.fcbarcelona.es">página principal</a> de FCBarcelona.',
      en: 'You may go to the FCBarcelona <a href="http://www.fcbarcelona.com">homepage</a>.',
      id: 'Anda dapat mengklik FC Barcelona <a href="http://www.fcbarcelona.co.id">homepage</a>'
    },
    'error-500': {
      ca: 'Pot anar a la <a href="http://www.fcbarcelona.cat">pàgina principal</a> de FCBarcelona.',
      es: 'Puede ir a la <a href="http://www.fcbarcelona.es">página principal</a> de FCBarcelona.',
      en: 'You may go to the FCBarcelona <a href="http://www.fcbarcelona.com">homepage</a>.',
      id: 'Anda dapat mengklik FC Barcelona <a href="http://www.fcbarcelona.co.id">homepage</a>'
    }
  }
}

function sanitize_url_from_analytics_params(url) {
  url = typeof url !== 'undefined' ? url : window.location.href;
  var params_to_remove = new Array("__utma", "__utmb", "__utmc", "__utmk", "__utmv", "__utmx", "__utmz");

  for(var i in params_to_remove) {
    var regex = new RegExp("(" + params_to_remove[i] + "(=[^&]+)?&?)", "g")
    url = url.replace(regex, "");
  }

  return url;
}

/*--------------------- returns a URL's domain extension (com, cat...) ---------------------*/
function getURLDomainExtension(url){
  var domext = url.substring(url.indexOf('http://')+7);
  domext = domext.substring(0,domext.indexOf('/'));
  domext = domext.substring(domext.lastIndexOf('.')+1);
  return domext;
}

/* -------------------- START NAVIGATION MENU -------------------- */
//advanced menu (multi-level)
function initAdvancedMenu(){
  prepareIEhover();
  highlight_main_menu();

  $('ul.desktop-main-navigation').each(function(i){
    var menu = $(this);
    menu.removeClass('basic-menu');
    menu.addClass('advanced-menu');
    menu.find('> li > ul li.has-submenu > a').each(function(j){
      if ($(this).attr('href') != '#'){
        $(this).wrapInner('<span class="title" />');
        $(this).prepend('<i aria-hidden="true" class="icon-caret-left"></i>');
        $(this).find('.icon-caret-left').bind('click',onClickParentLevel);
        //$(this).bind('click',onClickItemsSublevels);
        if ($(this).parent().hasClass('current')){
          openSubmenu($(this).parent());
        }
      }
    });
  });

}

//menus li.hover for IE
function prepareIEhover(){
  $('ul.desktop-main-navigation li.has-submenu').hover(
    function(){
      $(this).addClass('hover');
    },
    function(){
      $(this).removeClass('hover');
    }
  );
}

function onClickParentLevel(ev){
  var btn = $(this).parent();
  closeSubmenu(btn.parent());
  return false;
}

function onClickItemsSublevels(ev){
  var btn = $(this);
  if(btn.next('ul').length > 0){
    openSubmenu(btn.parent());
  }
}

function openSubmenu(item){
  item.addClass('open');
  item.siblings().hide();
  item.parent().removeClass('deployed');
  item.find('ul').eq(0).addClass('deployed');
}

function closeSubmenu(item){
  item.removeClass('open');
  item.siblings().show();
  item.parent().addClass('deployed');
  item.find('ul').eq(0).removeClass('deployed');
}

function highlight_main_menu() {
  main_menu        = $.merge($("ul.desktop-main-navigation"), $("ul.desktop-main-navigation ul"));
  var item_found   = false;
  var splitted_url = window.location.href.split('/');

  while (!item_found && splitted_url.length > 3) {
    $.each(main_menu, function(index, element) {
      li_list = $(element).find(">li")
      var i   = 0;

      while (i < li_list.size() && !item_found) {
        item_found = check_and_highlight_menu_item(li_list[i], splitted_url.join('/'));
        i++;
      }
    });
    splitted_url.pop();
  }
  //If we didn't find any match, we highlight the first item
  if (!item_found) highlight_menu_item($(main_menu[0]).find(">li")[0]);
}

function check_and_highlight_menu_item(item, url) {
  if ($(item).find(">a").size() > 0) {
    var link = $(item).find(">a").first()[0].href;

    if (link == url || link == url + "/") {
      highlight_menu_item(item);
      return true;
    }
    else {
      if ($(item).find(">ul").size() > 0) {
        var li_list    = $(item).find(">ul>li");
        var item_found = false;
        var i          = 0;

        while (i < li_list.size() && !item_found) {
          item_found = check_and_highlight_menu_item(li_list[i]);
          i++;
        }
        return item_found;
      }
      else {
        return false;
      }
    }
  }
}

function highlight_menu_item(item) {
  $(item).addClass("current");
  $(item).parents("li").addClass("current");
}
/* -------------------- END NAVIGATION MENU -------------------- */

/*--------------- thumbs_list widget ---------------*/
function paginate_thumbs_list(id, page) {
  var params = { widget: id, pg: page };
  var dom_id = '#widget_thumbs_list_' + id;
  var url    = sanitize_url_from_analytics_params();

  $.get(url, params, function(data){
    $(dom_id).replaceWith(data);
  });
}

/*--------------- tabbed_nodeable widget ---------------*/
function changeTabbedWidgetTab(widget_id, widget_dom_id, selected_tab, callbacks_array){
  var params = { widget : widget_id, index : selected_tab };
  var url    = sanitize_url_from_analytics_params();

  $.get(url,
        params,
        function(data){
          $("#" + widget_dom_id).replaceWith(data);

          // Execute callbacks after the AJAX call
          $.each(callbacks_array, function(index, value) {
            value.call();
          });
        });
}

/*--------------- highlighted_list widget ---------------*/
function paginate_highlight_list(id, page) {
  var params = { widget: id, pg: page };
  var dom_id = '#widget_highlighted_list_' + id;
  var url    = sanitize_url_from_analytics_params();

  $.get(url, params, function(data){
    $(dom_id).replaceWith(data);
  });
}

/*--------------- interactive widget ---------------*/
function initInteractiveTabsPagination() {

  $(".widget-interactiu").on('click', '[data-change-tab]', function (e) {
    e.preventDefault();

    var $elem = $(this)
      , url = sanitize_url_from_analytics_params()
      , data = $elem.data()
      , custom_data = { widget: data["widgetId"], card_tab_id: data["cardTabId"] };


    $.get(url, custom_data).done(function(data) {
      var $widget = $elem.closest(".widget-interactiu")
        , $articles_div = $widget.find(".widget-interactiu-slides-wrap")
        , $old_dot_pagination = $widget.find(".bx-controls.bx-has-pager");

      $old_dot_pagination.remove();

      $articles_div.html(data);

      if(Modernizr.mq('(min-width: 768px)') || $isIE8) {
        initInteractiveScrollbar();
      }

      initInteractiveSlides();
      initPluginCollapse();
    });

  });
}

function getUrlVars(){
  var vars = [], hash;
  var url  = window.location.href;

  if (url.charAt(url.length - 1) == '#') {
      url = url.substr(0, url.length - 1);
  }

  var hashes = url.slice(url.indexOf('?') + 1).split('&');

  for(var i = 0; i < hashes.length; i++)  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = decodeURIComponent(hash[1]);
  }

  return vars;
}

/*
 *  Initialize full gallery. It loads the main image getting it from the thumbnails
 *  by gallery_index param
 */
function initFullGalleryMedia(param_key, paginator_url) {
  var $widget = $(".widget-full-gallery")
    , $thumbnails = $(".widget-full-gallery-thumbs li")
    , total_assets = $thumbnails.length
    , index = getQueryStringParam(param_key, 1, total_assets)
    , $main_image_div = $widget.find(".main-image")
    , is_video_gallery = $main_image_div.hasClass('video-wrap')
    , $caption_span = $main_image_div.find(".caption")
    , $thumb_elem = $($thumbnails[index - 1])
    , $thumb = $thumb_elem.find("img")
    , thumb_img_src = $thumb.attr("src")
    , show_vertically = $thumb.data("showVertically")
    , caption = $thumb_elem.find("a span.hidden").text()
    , alt = $thumb_elem.find("a img").attr("alt")
    , main_img_src;

  // Create image html tag
  var $img_html = $(document.createElement('img'));
  $img_html.attr('alt', alt);
  $img_html.addClass('gallery-media');

  if (show_vertically) {
    main_img_src = thumb_img_src.replace("size_128x72", "size_480x562");
  } else {
    main_img_src = thumb_img_src.replace("size_128x72", "size_1000x562");
  }

  $img_html.attr('src', main_img_src);

  if (is_video_gallery) {
    var $video_object = $thumb_elem.find('.hidden > iframe')
      , $play_button = $widget.find('.hidden > button.btn-play-video')
      , $embed_container_html = $(document.createElement('div'))
      , $preview_html = $(document.createElement('div'));

    if ($video_object) {
      $embed_container_html.addClass('embed-container hidden');
      $embed_container_html.attr('data-video-name', caption);
      $preview_html.addClass('preview');

      $embed_container_html.append($video_object);
      $preview_html.append($img_html);
      $preview_html.append($play_button);

      $main_image_div.prepend($preview_html);
      $main_image_div.prepend($embed_container_html);
    }
  } else {
    $main_image_div.prepend($img_html);
  }

  $caption_span.text(caption);

  // Set paginator index (current/total)
  $("span.pager-steps-actual").each(function() {
    $(this).text(index);
  });

  $("span.pager-steps-total").each(function() {
    $(this).text(total_assets);
  });

  // Highlight current thumb image
  $thumb_elem.addClass("active");

  // Show/hide prev/next links in number paginator and bind click event
  var set = function(elems, i) {
    elems.each(function(){
      var $elem = $(this)
        , url = paginator_url.replace("__index", i);

      if (i) {
        $elem.removeClass("disabled");

        if ($elem.is("a")) {
          $elem.attr("href", url);
        } else if ($elem.is("button")) {
          $elem.on("click", function() {
            window.location = url;
          });
        }

      } else {
        $elem.addClass("disabled");
      }
    });
  };

  set($widget.find(".widget-full-gallery-prev"), index > 1 ? index - 1 : null);
  set($widget.find(".widget-full-gallery-next"), index < total_assets ? index + 1 : null);
  set($widget.find(".pager-steps-prev"), index > 1 ? index - 1 : null);
  set($widget.find(".pager-steps-next"), index < total_assets ? index + 1 : null);
}

function getQueryStringParam(param_key, default_value, max_value) {
  var param = parseInt(getUrlVars()[param_key]) || default_value;

  if (max_value) {
    param = (param >= default_value && param <= max_value) ? param : 1
  }

  return param;
}

/*
 *  Attach the onContentUpdated event (scorers) triggered for the watcher
 *  plugin and call any function that is needed
 */
function updateScoreboardScorers() {
  $('.widget-marcador-de-partits .team ul.players').on('onContentUpdated', function() {
    initMatchScorers();
  });
}

function initializeDoughnutStats(stat_group, with_opacity) {
  var id = '#' + stat_group
    , $titular = $(id).siblings('.titular').find('.number').text()
    , $suplent = $(id).siblings('.suplent').find('.number').text()
    , $faders = $(id).siblings('.fade')
    , $statGroupPlayedContext = $(id).get(0).getContext("2d")
    , $statGroupPlayedData = [
        {
          value : parseInt($suplent),
          color : '#35628d'
        },
        {
          value: parseInt($titular),
          color: '#c41930'
        }
      ];

    if (with_opacity) {
      $faders.css({ opacity: 0 });
    } else {
      $faders.removeClass('in');
    }

    var $statGroupPlayed = new Chart($statGroupPlayedContext).Doughnut($statGroupPlayedData,{
      segmentShowStroke : false,
      segmentStrokeColor : "#d9d9d9",
      segmentStrokeWidth : 1,
      percentageInnerCutout : 70,
      animationEasing : "easeInOutQuint",
      animateScale : true,
      onAnimationComplete : function(){
        if (with_opacity) {
          $faders.css({ opacity: 1 });
        } else {
          $faders.addClass('in');
        }
      }
    });;
}

/* This function is called when a JSONP get has been successful.
   options: key: watcher key (status | summary | ...).

   See PagesHelper#register_js_watcher */
function on_watcher_success(options) {
  options = options || {};
  if (options.key == "stats") {
    initMatchStats();
  }
}

function localize_errorpage() {
  var $item = $('body#error-page')
    , setErrorMsg = function(selector, key, current_error) {
                  var obj = locale[key][current_error]
                    , text = obj[selected_lang] || obj["en"];
                  $(selector).html(text);
                };


  if ($item.length) {
    var currentError = $('body').attr('class');
    setErrorMsg('#error-page-message h1', 'ERRORPAGE_LEAD', currentError);
    setErrorMsg('#error-page-message p', 'ERRORPAGE_EXIT', currentError);
  }
}

/* Return a random element from array xs */
function choice(xs) {
  return xs[Math.floor(Math.random() * xs.length)];
}

// Set a random background image to body[style]
function set_random_background_image(styles) {
  var style = choice(styles);
  $(function() { $(document.body).attr("style", style); });
}

$(function() {
  initInteractiveTabsPagination();
  updateScoreboardScorers();
  localize_errorpage();
});


/* Watcher.js:
 *
 * jQuery plugin to attach to a DOM element an object that
 * watch for changes on a jsonp file. The jsonp file has the information
 * about watch has been changed and how should be rendered.
 *
 * The jsonp file is declared with a resource with the form:
 * >  {
 * >    url:      'http://jsonserver.com/data.json', // the url for the json
 * >    callback: 'script1234', // the jsonp callback (padding)
 * >    time:     5000 // polling time. optional
 * >  }
 *
 * The jsonp file should have the form:
 * >  {
 * >    'active': true || false,
 * >    'data': {
 * >      'field': {
 * >        'template': '<%= field %>',
 * >        'values': { 'field': 'example' }
 * >      },
 * >      'field2': {
 * >        'template': '<li><%= field %></li>',
 * >        'values': [ { 'field': 'el1' }, { 'field': 'el2' } ]
 * >      }
 * >    }
 * >  }
 *
 * When reads a jsonp file, It tries to render the values for each data
 * attribute inside of the DOM elements with the class:
 * >  '.js-data-bind' + jsonpCallback + '-' + data.field_name
 * >  // OR
 * >  '.js-data-bind-script1234-field'
 *
 * How the data will be displayed depends on the template attribute for
 * each field.
 *
 * Considerations:
 *  - The system only registers a resource for a given callback one time.
 *  - It will use the minor time given for the same resource registered
 *    multiple times.
 *  - If the json file doesn't exists, It tries to get it 2 more times,
 *    then stops.
 *  - When the json has the option 'config.active' setted to false,
 *    the system stops watching.
 *
 * Usage:
 * >  $( '#watchzone' ).watcher().register({
 * >    url:      'http://exp.co/d.json',
 * >    callback: 'exp1234',
 * >    time:     2000
 * >  })
 *
 * The jQuery.ready function is called inside the plugin, so is not
 * necesary to call it when the watcher is used.
 *
 * Dependencies:
 *  - Underscore.js       => Utilities and template system.
 *  - jQuery >= 1.6       => DOM manipulation and more.
 *  - jQuery.jsonp plugin => jsonp ajax request.
 * ------------------------------------------------------------------------ */
;( function( $ ) {
  var core = {

    /* Default values
     * -------------------------------------------------------------------- */
    root: document,

    defaults: {
      time:      60000,
      timestamp: Math.floor( ( new Date().getTime() ) / 1000 ),
      url:       '',
      callback:  '',
      success:   null
    },

    /* Resources management
     * -------------------------------------------------------------------- */

    /* Database of resources
     *
     * params:
     *   - resources: if given, saves it to the watcher store.
     *                else, obtains the stored db.
     * -------------------------------------------------------------------- */
    db: function( resources ) {
      resources || ( resources = $( this.root ).data( 'watcher' ) );
      resources || ( resources = new Array );

      $( this.root ).data( 'watcher', resources );

      return resources;
    },

    /* Checks if the resource exists without an ID
     *
     * params:
     *   - data: The data given to the register method.
     * -------------------------------------------------------------------- */
    exists: function( data ) {
      return _.any( this.db(), function( resource ) {
        return _.isEqual( resource.callback, data.callback );
      });
    },

    /* Adds a new resource to the db
     *
     * params:
     *   - new_resource: The data given to the register method
     *                   that will be used as a resource.
     * -------------------------------------------------------------------- */
    add: function( new_resource ) {
      if ( !new_resource ) { return false; };

      var resources = this.db();
      _.extend( new_resource, {
        id:       _.uniqueId(),
        invoked:  false,
        active:   true,
        errors:   0
      });
      resources.push( new_resource );
      this.db( resources );

      return true;
    },

    /* Updates the given resource and saves it to the db
     *
     * params:
     *   - resource: The resource to update.
     *   - attributes: The new resource attributes.
     * -------------------------------------------------------------------- */
    update: function( resource, attributes ) {
      if ( !resource ) { return false; };

      _.extend( resource, attributes );
      var resources = this.db();

      _.map( resources, function( old ) {
        if ( _.isEqual( old.id, resource.id ) ) {
          return resource;
        };
        return old;
      });

      this.db( resources );

      return resource;
    },

    /* Removes the given resource from the db
     *
     * params:
     *   - resource: The resource to remove.
     * -------------------------------------------------------------------- */
    remove: function( resource ) {
      if ( !resource ) { return false; };

      var resources = this.db();

      resources = _.reject( resources, function( old ) {
        return _.isEqual( old.id, resource.id )
      });

      this.db( resources );

      return true;
    },

    /* Finds the given resource in the db
     *
     * params:
     *   - id: The resource id or callback.
     * -------------------------------------------------------------------- */
    find: function( id ) {
      return _.detect( this.db(), function( r ) {
        return _.isEqual( r.id, id ) || _.isEqual( r.callback, id );
      });
    },

    /* Initializes the polling with the resources that are not invoked
     * -------------------------------------------------------------------- */
    init: function() {
      var to_invoke = _.reject( this.db(), function( r ) { return r.invoked; } );
      _.map( to_invoke, this.get );

      return true;
    },

    /* Gets the json data for the given resource.
     *
     *  It also mark the resource as invoked and stop the polling if the
     *  resource is not active when gets the json
     *
     * params:
     *   - resource: The resource to watch
     * -------------------------------------------------------------------- */
    get: function( resource ) {
      resource = this.find( resource.id );

      if ( !resource || !resource.active ) {
        return this.remove( resource );
      }
      if ( !resource.invoked ) {
        resource = this.update( resource, { invoked: true } );
      };

      var getter   = _.bind( this.get, this, resource );
      // defer this.get method to call if after the delay,
      // when the UI thread is clear.
      var deferred = _.bind( _.defer, this, getter );

      $.jsonp({
        url:            resource.url,
        cache:          false,
        callback:       resource.callback,
        context:        this,
        success:        function( json ) {
          // Disabling timestamp checking by now (#33426)
          // if (json.timestamp > resource.timestamp ) {
            resource = this.update( resource, {
              active:     json.active,
              time:       json.time,
              timestamp:  json.timestamp
            });

            var renderer = _.bind( this.render, this, resource.callback, json.data );

            // only render when the DOM is ready.
            if ( jQuery.isReady ) {
              renderer();
              if (resource.success)
                resource.success(json);
            };
          // };

          if ( resource.active ) {
            _.delay( deferred, resource.time );
            return true;
          } else {
            return this.remove( resource );
          };
        },
        error: function() {
          if ( _.isEqual( resource.errors, 3 ) ) {
            return this.remove( resource );
          } else {
            resource = this.update( resource, { errors: resource.errors + 1 } );
            _.delay( deferred, resource.time );
            return true;
          };
        }
      });

    },

    /* Renders the json data for the given resource.
     *
     * params:
     *   - bindId: The resource id to bind the views.
     *   - data:   The new data to show up.
     * -------------------------------------------------------------------- */
    render: function( bindId, data ) {
      var prefix = '.js-data-bind-' + bindId + '-';
      _.each( data, function( v, k ) {
        var values = v.values;

        if ( values ) {
          var identifier = prefix + k;

          var view = '';
          var t    = v.template;
          if ( _.isArray( values ) ) {
            view  = _.reduce( values, function( o, vs ) { return o + _.template( t, vs ) }, '' );
          } else {
            view = _.template( t, values );
          };

          // use jQuery to convert view to correct html
          view = $( '<div>' ).append( view ).remove().html();

          // Could be more than one field to bind the new value.
          $( identifier ).each( function() {
            var elm = $( this );
            var old = $.trim( elm.html() );

            // only update if the value has changed
            if ( !_.isEqual( old, view ) ) {
              elm.html( view );

              // trigger default event to make other scripts
              // perform changes in the DOM.
              elm.trigger( $.Event( 'onContentUpdated' ) );
            };
          });
        };
      });

      return true;
    },

    /* Registers a resource to watch it.
     *
     *  If the resource exists, it updates the time.
     *  If not, it saves it and call init to launch the resources that
     *  were not invoked.
     *
     * params:
     *   - options: The options for the resource to watch
     * -------------------------------------------------------------------- */
    register: function( options ) {
      options || ( options = {} );
      _.defaults( options, this.defaults );

      if ( _.isEmpty( options.url ) || _.isEmpty( options.callback ) ) {
        return false;
      };

      if ( this.exists( options ) ) {
        var resource = this.find( options.callback );
        if ( resource.time > options.time ) {
          this.update( resource, { time: options.time } );
        };
      } else {
        this.add( options );
      };

      var initializer = _.bind( this.init, this );
      return _.delay( initializer, 500 ); // wait for previous calls
    }
  };

  // With this method all the 'this' calls inside core methods are
  // calling to core itself. More in the Underscore.js documentation.
  _.bindAll( core );

  /* Uses the watcher as a jQuery plugin.
   * -------------------------------------------------------------------- */
  $.fn.watcher = function() {
    core.root   = this;

    return {
      register: core.register,
      el:       core.root // Call to 'el' to chain jQuery methods.
    };
  };
} )( jQuery );


/* Reloader.js
 * Just reload the page after 7 minutes
 *
 * Dependencies:
 *  - Underscore.js => Utilities.
 *  - jQuery
 * ------------------------------------------------------------------------ */
;( function( $ ) {
  core = {
    reload: function() {
      location.reload();
    },

    init: function () {
      var reloader = _.bind( this.reload, this );
      _.delay( reloader, 420000 );
    }
  };

  _.bindAll( core );

  $.pageReloader = {
    doIt: _.once( core.init ) // call the reload method only once
  };
} )( jQuery );


// Constants
var facebook_params_cookie_name = 'facebook_params';

// Populate a form from an object containing input_name/value.
$.fn.populate = function(data) {
  var els = $(this).find(':input').get();

  $.each(els, function() {
    if (this.name && data[this.name]) {
      var value = data[this.name];
      if (this.type == 'checkbox' || this.type == 'radio') {
        $(this).prop("checked", (value == $(this).val())).change().focusout();
      } else {
        $(this).val(value).change().focusout();
      }
    }
  });
  return $(this);
};

// Displays a (re)captcha in #captcha-img
function show_captcha(){
  first_captcha = typeof(first_captcha) == 'undefined'
  Recaptcha.create("6LeiXtgSAAAAAFDPEdGvgqsui19ZIehDKCkRwbvP",
    "captcha-img",
    {
      theme: "white",
      lang: selected_lang,
      callback: captcha_callback
    }
  );
}

// Called when the captcha image has been painted
function captcha_callback(){
  // Hide the Recaptcha logo TD (clean theme)
  //$('#recaptcha_table').find('tr').first().find('td').last().hide()
  // Hide the "less spam" blabla TD
  //$('#recaptcha_table').find('tr').last().find('td').last().hide()

  $('.control-group.capcha').show()
  // Avoid focusing to allow the browser to scroll to the message
  //if (!first_captcha) Recaptcha.focus_response_field()
  setup_views();
}

/**
 * See if there is a logged user by looking for the cookie, and act accordingly,
 * displaying or not user-dependent stuff
 */
function load_user_from_cookie(){
  var logged_in = false
  var user_name = ''
  var data = getCookie('fcb_sso_fan');
  if (data) {
    var user_data = parseQuery(data);
    logged_in = user_name = (user_data.name); // if there is data, assume logged in
  }
  render_user_buttons_header(logged_in, user_name)
}

/**
 * Returns true if the user is currently logged in
 */
function user_logged(){
  var val = getCookie('fcb_sso_token')
  return val
}

function render_user_buttons_header(logged_in, name){
  if (logged_in) {
    $('#login_button').hide();
    $('#register_button').hide();
    $('#account_button').show();
    $('#logout_button').show();
    $('#user-status').text(name);
    $('#btn-group-user').removeClass('out').addClass('in');
  } else {
    $('#account_button').hide();
    $('#logout_button').hide();
    $('#login_button').show();
    $('#register_button').show();
  }
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Performs a user logout and redirects to the home page
function logout(options){
  options = options || {}
  deleteCookie('fcb_sso_token');
  deleteCookie('fcb_sso_fan');
  if (options.avoid_redirect) {
    load_user_from_cookie()
  } else {
    redirect_to_home()
  }
}

// Performs a redirect to the home page
function redirect_to_home(){
  var home_url = window["_home_page"] || '/';
  window.location.replace(home_url);
}

function deleteCookie(name) {
    var domain = window.location.host.replace(/.*\.fcbarcelona\./, '.fcbarcelona.')
    var delete_value = name+'=;-1; path=/'
    if (domain != 'localhost') {
      delete_value += ';Domain='+domain;
    }
    document.cookie = delete_value
}


function base64_decode (data) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Thunder.m
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
  // *     returns 1: 'Kevin van Zonneveld'
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof this.window['atob'] == 'function') {
  //    return atob(data);
  //}
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
  ac = 0,
  dec = "",
  tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');

  return dec;
}

// Converts a string like "aa=VV&bb=543" into an array
function parseQuery(query) {
  var queryAsAssoc = new Array();
  var queryString = decodeURI(query);
  var keyValues = queryString.split(/&/);
  for (var i in keyValues) {
    if (keyValues.hasOwnProperty(i)) {
      var key = keyValues[i].split(/=/);
      queryAsAssoc[key[0]] = key[1];
    }
  }
  return queryAsAssoc;
}

/*
 * Possible options:
 *  load: function with code that will be executed if the form_id is present on load
 *  error: function that will be executed when the submit results in an error
 *  success: function that will be executed when the submit results in a success (200)
 *  event: event type that will trigger the ajax call (default "form:validate:pass")
*/
function bind_auth_api_form(form_id, options){
  options = options || {}
  var form_el = $(form_id)

  // Do nothing if this form does not exist
  if (form_el.length == 0) {
    return;
  }

  request_authenticity_token(form_id)

  // Execute onLoad tasks if defined
  if (options.load) {
    options.load()
  }

  // Bind the form to a validated submit
  form_el.each(function() {
    var bindable_event = options.event || "form:validate:pass"
    $(this).bind(bindable_event, function(pass_event) {

      try{
        event.preventDefault();  // should already be a return false, but anyway
        // Note: I have no idea where event is set... but it is. And it's not = pass_event
        // Given this cargo cult I surround this in a try...
      } catch (e) {}

      disable_submit_button(form_el)
      show_spinner(form_el)

      $.ajax( {
        url : this.action,
        type: "POST",
        data: $(this).serialize(),
        error : function(xhr, textStatus, thrownError) {
          enable_submit_button(form_el)
          hide_spinner()
          var json = parse_json_response(xhr);
          if (json && json.errors && json.errors.authenticity_token) {
            window.location.reload();
          } else if (options.error) {
            options.error(xhr);
          }
        },
        success : function(data, textStatus) {
          clear_error_messages()
          enable_submit_button(form_el)
          hide_spinner()
          if (options.success) options.success(data)
        }
      });

    })
  })
}

function disable_submit_button(form_el){
  form_el.find('input[type=submit]').attr('disabled', 'disabled')
}

function enable_submit_button(form_el){
  form_el.find('input[type=submit]').removeAttr('disabled')
}

function show_spinner(form_el){
  var spinner = $('.spinner-image')
  // is guessing that the correct submit button is the first, too much guessing?
  form_el.find('input[type=submit]').first().before(spinner)
  spinner.show()
}

function hide_spinner(){
  $('.spinner-image').hide()
}

// This method asks the server for an authenticity_token, needed to send the form
function request_authenticity_token(form_id) {
  var proto = location.protocol;
  var slashes = proto.concat("//");
  var host = slashes.concat(window.location.hostname);

  $.ajax( {
    url : host.concat("/authenticity_token"),
    type: "POST",
    error: function() {
      alert_message('server_error')
    },
    success: function(data) {
      $(form_id).find('input[name=authenticity_token]').val(data)
    }
  })
}

function log(message) {
  if (typeof(console) != 'undefined') {
    console.log(message)
  }
}

// Returns a parsed JSON but with error handling
function parse_json_response(xhr){
  try{
    var json = $.parseJSON(xhr.responseText)
  } catch(err) {
    alert_message('server_error')
    log('Unexpected error: expected JSON response was not JSON')
  }
  return json
}

function alert_message(message, title){
  feedback_message('alert', message, title)
}

function feedback_message(type, message, title){
  var area = $('#feedback-message')
  var info_by_type = {
    alert: {box_class: "alert-danger", icon_class: "icon-warning-sign"},
    success: {box_class: "alert-success", icon_class: "icon-success-sign"}
  };
  var info = info_by_type[type];
  if (!info)
    return;

  area.attr('class', "alert alert-block " + info.box_class);
  area.find('.icon').attr('class', "icon " + info.icon_class);
  area.find('.title').text(auth_feedback[title] || title)
  area.find('.description').html(auth_feedback[message] || message)
  area.show()
  scrollTo('#feedback-message')
}

function scrollTo(element_id){
  if ($(element_id).length) {
    $('html,body').animate({ scrollTop: $(element_id).offset().top }, 'slow');
  }
}

function clear_error_messages(){
  // clear the "first time?" box
  $('#rails-feedback-messages').hide()
  $('#feedback-message').hide()
}

if (!Array.prototype.indexOf) {
   Array.prototype.indexOf = function(item) {
      var i = this.length;
      while (i--) {
         if (this[i] === item) return i;
      }
      return -1;
   }
}

// Google Analytics track event
function ga_track_event(category, action, opt_label, opt_value, opt_noninteraction) {
  var args = [].splice.call(arguments, 0);
  var all_args = ['_trackEvent'].concat(args);
  return _gaq.push(all_args);
}

// Google Analytics set custom var (normal and rollup).
function ga_set_custom_var(index, name, value, opt_scope) {
  var args = [].splice.call(arguments, 0);
  _gaq.push(["_setCustomVar"].concat(args), ["rollup._setCustomVar"].concat(args))
}

function ga_auth_track_event(action, opt_label) {
  return ga_track_event("registre-unic", action, opt_label || "", 1, false);
}

function bind_auth_api_forms(){

  bind_auth_api_form('#login-form', {
    load: function(){
      // when the user is confirmed, it is redirected here with a "message" GET param
      var get_params = getUrlVars()
      if(get_params['message'] == 'confirmed') {
        clear_error_messages()
        feedback_message('success', 'confirmed')
      }
      if(get_params['message'] == 'invalid_token') {
        clear_error_messages()
        alert_message('invalid_token')
      } else if(get_params['message'] == 'expired_error') {
        clear_error_messages()
        alert_message('expired_error')
      }
    },
    error: function(xhr){
      var json = parse_json_response(xhr)
      if (json) {
          if (json['require_captcha']) {
            show_captcha()
          }
          if (json['errors']['captcha']) {
            alert_message('captcha_error')

          } else if (json['errors']['credentials']) {
            alert_message('credentials_error')

          } else if (json['errors']['not_active']) {
              if ('ws_error' == json['errors']['not_active']) {
                alert_message('activation_error')

              } else if('expired' == json['errors']['not_active']) {
                alert_message('expired_error')

              } else {
                alert_message('credentials_error')
              }

          } else {
            alert_message('server_error')
          }
      } else {
        alert_message('server_error')
      }
    },
    success: function(data){
      if (data && data['errors'] && data['errors']['not_active'] == 'incomplete') {
        var edit_url = $('#account_button').find('a').attr('href')
        window.location.replace(edit_url.concat('?message=incomplete'))
      } else {
        var form = $('#login-form')
        show_spinner(form)
        disable_submit_button(form)
        ga_auth_track_event("login");
        redirect_to_home()
      }
    }
  })

  // Logout click handler.
  $('#logout_button').find('a').click(function(event){
    event.preventDefault()
    logout()
  })

  bind_auth_api_form('#forgotten-password-form', {
    load: function(){ show_captcha() },
    error: function(xhr){
      var json = parse_json_response(xhr)
      show_captcha() // in any case, or a new request will fail
      if (json) {
        if (json['errors']['captcha']) {
          alert_message('captcha_error')
        } else if (json['errors']['user_not_found']) {
          alert_message('user_not_found')
        } else if (json['errors']['server_error']) {
          alert_message('server_error')
        }
      }
    },
    success: function(){
      clear_error_messages();
      switch_areas('#forgotten-password-form-area', '#forgotten-password-confirmation-area');
      ga_auth_track_event("recordar-contrasenya");
    }
  })

  bind_auth_api_form('#register-form', {
    event: "form:validate:pass:all",
    load: function() {
      show_captcha();

      var url_query = parseQuery(window.location.search.slice(1));
      if (url_query.facebook) {
        // URL has ?facebook=1, populate form from cookie
        var data = parseQuery(getCookie(facebook_params_cookie_name));
        data["user[email_confirmation]"] = data["user[email]"];
        $("#register-form").populate(data);
      }
    },
    error: function(xhr){
      show_captcha() // in any case, or a new request will fail
      var json = parse_json_response(xhr)
      if (json) {
        if (json['errors']['captcha']) {
          alert_message('captcha_error')

        } else if (json['errors']['existing_email']) {
          alert_message('existing_email')
        } else if (json['errors']['ws_active']) {
          alert_message('existing_email');
        }
        // show full form
        $(".user_info").slideDown();
        $('#register-form-back-button').hide()
        $('#register-form-cancel-button').show()
      }
    },
    success: function(){
      var url = $("#register-form").attr("data-url-ok");
      window.location.replace(url);
    }
  })

  // Click on submit button
  $('#register-form #user_submit').click(function(event){
    ga_auth_track_event("enviar-alta");
  });

  $('#register-form-back-button').click(function(event){
    // when clicking "back", show the part 1 form, hide the part 2, and switch buttons too
    $(".parent_info").slideUp();
    $(".user_info").slideDown();
    $('#register-form-back-button').hide()
    $('#register-form-cancel-button').show()
  })

  $('#register-form-cancel-button').click(function(event){
    redirect_to_home()
  })

  $('#registration-close-button').click(function(event){
    redirect_to_home()
  })

  $('#new-password-back-button').click(function(event){
    redirect_to_home()
  })

  $('#forgotten-password-back-button').click(function(event){
    redirect_to_home();
  })

  bind_auth_api_form('#user-edit-form', {
    load: function(){
      var get_params = getUrlVars()
      if(get_params['message'] == 'incomplete') {
        alert_message('incomplete')
      }
    },
    error: function(xhr){
      alert_message('server_error')
    },
    success: function(){
      switch_areas('#user-edit-form-area', '#user-edit-confirmation-area')
      ga_auth_track_event("modificar-dades-personals");
    }
  })

  $('#user-edit-back-button').click(function(event){
    event.preventDefault()
    switch_areas('#user-edit-confirmation-area', '#user-edit-form-area')
  })

  bind_auth_api_form('#change-password-form', {
    load: function(){
      if (!user_logged()) {
        redirect_to_home()
      }
    },
    error: function(xhr){
      var json = parse_json_response(xhr)
      if (json) {
        if (json['errors']['current_password']) {
          alert_message('current_pw_not_valid')
        } else {
          log('unhandled json error')
          alert_message('server_error')
        }
      } else {
        alert_message('server_error')
      }
    },
    success: function(){
      switch_areas('#change-password-form-area', '#change-password-confirmation-area');
      ga_auth_track_event("canviar-contrasenya");
    }
  })

  bind_auth_api_form('#delete-user-form', {
    load: function(){
      if (!user_logged()) {
        redirect_to_home()
      }
    },
    error: function(xhr){
      alert_message('server_error')
    },
    success: function(){
      ga_auth_track_event("demanar-baixa");
      switch_areas('#delete-user-form-area', '#delete-user-confirmation-area')
      logout({avoid_redirect: true})
    }
  })

  $('#delete-user-close-button').click(function(event){
    redirect_to_home()
  })

bind_auth_api_form('#reset-password-form', {
    load: function(){
      // we have to place the GET params into the hidden fields
      var get_params = getUrlVars()
      $('#user_reset_password_token').val(get_params['reset_password_token'])
      $('#user_email').val(get_params['email'])

      show_captcha()
    },
    error: function(xhr){
      show_captcha() // in any case, or a new request will fail
      var json = parse_json_response(xhr)
      if (json) {
        if (json['errors']['captcha']) {
          alert_message('captcha_error')

        } else if (json['errors']['token']) {
          alert_message('invalid_token')

        } else if (json['errors']['not_logged']) {
          log('Server responded not logged. Missing required parameters?')
        }
      }
    },
    success: function(){
      switch_areas('#reset-password-form-area', '#reset-password-confirmation-area')
    }
  })

}

function switch_areas(hide, show){
  $(show).show()
  $(hide).hide()
  scrollTo(show)
}

function getUrlVars(){
  var vars = [], hash;
  var url = window.location.href;
  if (url.charAt(url.length - 1) == '#') {
      url = url.substr(0, url.length - 1);
  }
  var hashes = url.slice(url.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = decodeURIComponent(hash[1]);
  }
  return vars;
}

function register_post_init_authorization(minor_timestamp) {
  $("#register-form").bind("form:validate:pass", function(form, eventData) {
    var completely_valid = true // will be false if additional sections are needed
    if (!$("#parent_info_form").is(":visible")) {
      var year = $("#user_birthdate_1i").val();
      var month = $("#user_birthdate_2i").val();
      var day = $("#user_birthdate_3i").val();
      var date = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
      if (date.getTime() / 1000 > minor_timestamp) {
        $(".user_info").slideUp();
        $(".parent_info").slideDown();
        $("body").animate({scrollTop: 0}, "slow");
        // replace cancel button with back button
        $('#register-form-cancel-button').hide()
        $('#register-form-back-button').show()
        completely_valid = false
      }
    }
    if (completely_valid) $(this).trigger('form:validate:pass:all')
  });
}

/* Add custom client-side validations to attributes in form */
function add_client_validation(form_id, attributes) {
  var form = window[form_id];
  if (!form) {
    console.error("No form with id " + form_id);
    return;
  }
  var validators = form.validators;
  if (!validators) {
    console.error("No validators found for form with id " + form_id);
    return;
  }
  for (k in attributes) {
    if (!validators[k])
      validators[k] = {};
    jQuery.extend(validators[k], attributes[k]);
  }
}

/* Disable event 'paste' on elements with attribute 'data-disable-paste' */
function set_disable_paste() {
  $("*[data-disable-paste]").bind("paste", function(ev) {
    ev.preventDefault();
  });
}

function init_facebook_auth(anchor_selector) {
  $(anchor_selector).click(function(ev) {
    ev.preventDefault();

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        facebook_auth_login(response);
      } else {
        FB.login(function(response) {
          facebook_auth_login(response);
        }, {scope: 'email,user_birthday'});
	    }
	  });
  });
}

function facebook_auth_login(response) {
  var auth = response.authResponse;

  if (response.authResponse) {
    show_spinner($("#login-form"));
    $.ajax({
      url: '/fb_login',
      type: "POST",
      dataType: 'json',
      data: {auth: auth.accessToken, uid: auth.userID},
      error: function(xhr, textStatus, thrownError) {
        hide_spinner();
        alert_message('server_error');
      },
      success: function(response) {
        if (response.success) {
          redirect_to_home();
        } else if (response.error == "register_pending") {
          document.cookie = facebook_params_cookie_name + "=" + response.register_params;
          window.location.replace(response.register_url);
        } else if (response.error == "token_expired") {
          window.location.reload();
        } else {
          hide_spinner();
          alert_message('server_error');
        }
      }
    });
  }
}

function setup_views() {
  // Setup facebook button position
  if ($('.widget-form-2col').find('.facebook-link-container').length) {
    var $parentFB = $('.widget-form-2col'),
        $formHeight = $parentFB.siblings('.fieldset').height(),
        $fbBtn = $parentFB.find('.facebook-link-container');

    $fbBtn.css('bottom','-' + $formHeight-1 + 'px');
  }
}

$(function() {
  bind_auth_api_forms();
  load_user_from_cookie();
  setup_views();
});
