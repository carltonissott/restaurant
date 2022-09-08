(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),r=t.n(i),a=t(645),o=t.n(a)()(r());o.push([e.id,"body{\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    background-color: aliceblue;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.content{\n    margin: 0;\n    padding: 0;\n}\nheader{\n    height: 60px;\n    background-color: white;\n    padding-top: 0;\n    margin-top: 0;\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n}\n.logo {\n    flex-basis: 10%;\n    padding-left: 10px;\n}\nheader ul{\n    width: 500px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    flex-basis: 90%;\n    margin-left: -70px;\n}\nheader li:hover{\n    color: rgb(0, 0, 61);\n    cursor: pointer;\n}\nheader li{\n    padding: 20px;\n    list-style-type: none;\n}\n.maincontent{\n    border-top: .7px solid rgb(0, 0, 61);\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 500px;\n}\n\n.maincontent img{\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n}\n\n.pageloadtext{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    align-content: flex-end ;\n    color: rgb(0, 0, 61);\n    font-size: 60px;\n    font-weight: thin;\n    padding-left: 40px;\n}\n\n.pageloadmenu{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    justify-content: center;\n    align-items: center;\n}\n\n.pageloadmenu li{\n    list-style-type: none;\n    font-size: 20px;\n}\n.pageloadabout{\n    display: flex;\n    align-items: center;\n    align-content: flex-end ;\n    color: rgb(0, 0, 61);\n    font-size: 15px;\n    font-weight: thin;\n    padding-left: 40px;\n    flex-direction: column;\n    justify-content: center;\n}\n.pageloadabout h3{\n    font-size: 40px;\n}\n\nfooter{\n    height: 80px;\n    background-color:#f9c7c3;\n    padding-top: 0;\n    margin-top: 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.p1{\n    align-self: center;\n    justify-content: center;\n    display: flex;\n    font-size: 14px;\n    margin: 0;\n}\n.p2{\n    display: flex;\n    font-size: 14px;\n}\n.p2 ul{\n    display: flex;\n    flex-direction: row;\n    list-style-type: none;\n    justify-content: center;\n    align-items: center;\n}\n.p2 li{\n    padding: 5px;\n}",""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},o=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var p=t(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,i);i.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=t(a[o]);n[s].references--}for(var l=i(e,r),c=0;c<a.length;c++){var u=t(a[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),r=t.n(i),a=t(569),o=t.n(a),s=t(565),l=t.n(s),c=t(216),u=t.n(c),d=t(589),p=t.n(d),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"7bafbf3b632ad9be26ca.svg";function v(){const e=document.querySelector(".text");e.innerHTML="<h3>Your new favorite place to drink coffee...</h3>",e.classList.add("pageloadtext"),e.classList.remove("pageloadmenu"),e.classList.remove("pageloadabout")}v(),document.querySelector(".home").addEventListener("click",(()=>{v()}));document.querySelector(".menu").addEventListener("click",(()=>{!function(){const e=document.querySelector(".text");e.innerHTML='<div class="menuitems">\n        <ul>\n            <li>ESPRESSO</li>\n            <li>SHORT BLACK</li>\n            <li>LONG BLACK</li>\n            <li>MACCHIATO</li>\n            <li>FLAT WHITE</li>\n            <li>CAPPUCCINO</li>\n            <li>LATTE</li>\n        </ul>\n    </div>\n    <div class="prices">\n        <ul>\n            <li>$2.00</li>\n            <li>$2.50</li>\n            <li>$2.50</li>\n            <li>$3.00</li>\n            <li>$3.00</li>\n            <li>$3.00</li>\n            <li>$3.00</li>\n\n        </ul>\n    </div>',e.classList.remove("pageloadtext"),e.classList.remove("pageloadabout"),e.classList.add("pageloadmenu")}()}));document.querySelector(".aboutus").addEventListener("click",(()=>{!function(){const e=document.querySelector(".text");e.innerHTML="<h3>ABOUT US</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida urna vitae tellus fermentum, vitae tincidunt sem varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec luctus leo ut varius efficitur. Nam varius turpis ac condimentum imperdiet. Duis a orci sed ligula tempor finibus quis eget ligula. Morbi eget arcu faucibus, scelerisque leo nec, maximus nibh. Vestibulum ut dolor congue, facilisis neque vitae, feugiat est. Etiam vel ullamcorper odio. Aenean ut ipsum pharetra, facilisis mi tincidunt, maximus nisi. <br>\n    \n    Praesent condimentum varius lacus, vel feugiat ligula tristique ut. Mauris et lorem nunc. Mauris suscipit mauris est, vitae pulvinar nisl viverra egestas.\n<br>\n\n    Pellentesque eu dapibus nulla. Sed fermentum vitae justo id maximus. In at felis a enim sollicitudin interdum. Praesent et nulla ac leo vehicula fermentum. Nullam fringilla efficitur iaculis. Proin id augue scelerisque est aliquet fermentum eget non augue. Sed tempus dictum posuere. Cras tempor arcu ac lectus pharetra volutpat. Suspendisse maximus laoreet enim, eu bibendum urna cursus vel. Aenean eu feugiat urna, a rhoncus mi.</p>",e.classList.remove("pageloadtext"),e.classList.remove("pageloadmenu"),e.classList.add("pageloadabout")}()})),console.log("hello world");const h=document.createElement("img");h.src=g,document.querySelector(".maincontent").prepend(h)})()})();