"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2232],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=n(4996),l=["components"],s={id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"34.1 \u5728 IIS \u90e8\u7f72"},d=void 0,p={unversionedId:"deploy-iis",id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",description:"",source:"@site/docs/deploy-iis.mdx",sourceDirName:".",slug:"/deploy-iis",permalink:"/furion/docs/deploy-iis",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/deploy-iis.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1657085665,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"34.1 \u5728 IIS \u90e8\u7f72"},sidebar:"docs",previous:{title:"33. IPC \u8fdb\u7a0b\u901a\u4fe1",permalink:"/furion/docs/ipc"},next:{title:"34.2 \u5728 Docker \u90e8\u7f72",permalink:"/furion/docs/deploy-docker"}},c={},m=[{value:"34.1.1 \u53d1\u5e03\u7f51\u7ad9",id:"3411-\u53d1\u5e03\u7f51\u7ad9",level:2},{value:"34.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",id:"34111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",level:3},{value:"34.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",id:"34112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",level:3},{value:"34.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",id:"34113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",level:3},{value:"34.1.1.4 \u70b9\u51fb\u53d1\u5e03",id:"34114-\u70b9\u51fb\u53d1\u5e03",level:3},{value:"34.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",id:"3412-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",level:2},{value:"34.1.2.1 \u7b2c\u4e00\u6b65",id:"34121-\u7b2c\u4e00\u6b65",level:3},{value:"34.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",id:"34122-\u7b2c\u4e8c\u6b65\u547d\u4ee4",level:3},{value:"34.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",id:"34123-\u7b2c\u4e09\u6b65\u547d\u4ee4",level:3},{value:"34.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",id:"34124-\u7b2c\u56db\u6b65\u547d\u4ee4",level:3},{value:"34.1.3 \u90e8\u7f72\u5230 IIS",id:"3413-\u90e8\u7f72\u5230-iis",level:2},{value:"34.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9",id:"34131-\u6dfb\u52a0\u65b0\u7f51\u7ad9",level:3},{value:"34.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",id:"34132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",level:3},{value:"34.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",id:"34133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",level:3},{value:"34.1.3.4 \u8bbe\u7f6e\u4e3a <code>\u975e\u6258\u7ba1</code>",id:"34134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1",level:3},{value:"34.1.3.5 \u91cd\u542f\u7f51\u7ad9",id:"34135-\u91cd\u542f\u7f51\u7ad9",level:3},{value:"34.1.4 \u5e38\u89c1\u95ee\u9898",id:"3414-\u5e38\u89c1\u95ee\u9898",level:2},{value:"34.1.4.1 405 \u72b6\u6001\u7801\uff0c\u4e0d\u652f\u6301 <code>PUT\uff0cDELETE</code> \u8bf7\u6c42",id:"34141-405-\u72b6\u6001\u7801\u4e0d\u652f\u6301-putdelete-\u8bf7\u6c42",level:3},{value:"34.1.4.2 <code>WebSocket</code>/ <code>SignalR</code> \u8fde\u63a5\u62a5\u9519",id:"34142-websocket-signalr-\u8fde\u63a5\u62a5\u9519",level:3},{value:"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2},{value:"34.1.4.3 \u90e8\u7f72\u4e4b\u540e\u7f3a\u5931 <code>api-ms-win.xxxx.dll</code> \u95ee\u9898",id:"34143-\u90e8\u7f72\u4e4b\u540e\u7f3a\u5931-api-ms-winxxxxdll-\u95ee\u9898",level:3},{value:"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae-1",level:2}],u={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj")," \u5e76\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"),"\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"<PropertyGroup>\n  <TargetFramework>net5.0</TargetFramework>\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\n</PropertyGroup>\n")))),(0,r.kt)("h2",{id:"3411-\u53d1\u5e03\u7f51\u7ad9"},"34.1.1 \u53d1\u5e03\u7f51\u7ad9"),(0,r.kt)("h3",{id:"34111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"},"34.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"),(0,r.kt)("img",{src:(0,o.Z)("img/dp1.png")}),(0,r.kt)("h3",{id:"34112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"},"34.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"),(0,r.kt)("img",{src:(0,o.Z)("img/dy2.png")}),(0,r.kt)("h3",{id:"34113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"},"34.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"),(0,r.kt)("img",{src:(0,o.Z)("img/dp3.png")}),(0,r.kt)("h3",{id:"34114-\u70b9\u51fb\u53d1\u5e03"},"34.1.1.4 \u70b9\u51fb\u53d1\u5e03"),(0,r.kt)("img",{src:(0,o.Z)("img/dp4.png")}),(0,r.kt)("h2",{id:"3412-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"},"34.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"),(0,r.kt)("h3",{id:"34121-\u7b2c\u4e00\u6b65"},"34.1.2.1 \u7b2c\u4e00\u6b65"),(0,r.kt)("p",null,"\u5b89\u88c5.NET Core \u8fd0\u884c\u65f6\u6346\u7ed1\u5305\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer"},"\u70b9\u51fb\u4e0b\u8f7d")),(0,r.kt)("h3",{id:"34122-\u7b2c\u4e8c\u6b65\u547d\u4ee4"},"34.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"net stop was /y\n")),(0,r.kt)("h3",{id:"34123-\u7b2c\u4e09\u6b65\u547d\u4ee4"},"34.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"net start w3svc\n")),(0,r.kt)("h3",{id:"34124-\u7b2c\u56db\u6b65\u547d\u4ee4"},"34.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"set ASPNETCORE_ENVIRONMENT=Production\n")),(0,r.kt)("h2",{id:"3413-\u90e8\u7f72\u5230-iis"},"34.1.3 \u90e8\u7f72\u5230 IIS"),(0,r.kt)("h3",{id:"34131-\u6dfb\u52a0\u65b0\u7f51\u7ad9"},"34.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9"),(0,r.kt)("img",{src:(0,o.Z)("img/ds1.png")}),(0,r.kt)("h3",{id:"34132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"},"34.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"),(0,r.kt)("img",{src:(0,o.Z)("img/ds2.png")}),(0,r.kt)("h3",{id:"34133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"},"34.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"),(0,r.kt)("img",{src:(0,o.Z)("img/ds3.png")}),(0,r.kt)("h3",{id:"34134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1"},"34.1.3.4 \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"h3"},"\u975e\u6258\u7ba1")),(0,r.kt)("img",{src:(0,o.Z)("img/ds4.png")}),(0,r.kt)("h3",{id:"34135-\u91cd\u542f\u7f51\u7ad9"},"34.1.3.5 \u91cd\u542f\u7f51\u7ad9"),(0,r.kt)("p",null,"\u53ea\u9700\u91cd\u542f\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u6c60\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"3414-\u5e38\u89c1\u95ee\u9898"},"34.1.4 \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"34141-405-\u72b6\u6001\u7801\u4e0d\u652f\u6301-putdelete-\u8bf7\u6c42"},"34.1.4.1 405 \u72b6\u6001\u7801\uff0c\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"h3"},"PUT\uff0cDELETE")," \u8bf7\u6c42"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"IIS"),"\u62d2\u7edd ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," \u8bf7\u6c42\uff0c\u539f\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u9ed8\u8ba4\u6ce8\u518c\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebDAVModule")," \u7684\u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpModule")," \u5bfc\u81f4\u7684\u3002"),(0,r.kt)("p",null,"\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"web.config")," \u79fb\u9664\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{2-6}","{2-6}":!0},'<configuration>\n <system.webServer>\n   <modules runAllManagedModulesForAllRequests="true">\n     <remove name="webDAVModule"/>\n   </modules>\n </system.webServer>\n</configuration>\n')),(0,r.kt)("h3",{id:"34142-websocket-signalr-\u8fde\u63a5\u62a5\u9519"},"34.1.4.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"WebSocket"),"/ ",(0,r.kt)("inlineCode",{parentName:"h3"},"SignalR")," \u8fde\u63a5\u62a5\u9519"),(0,r.kt)("p",null,"\u5982\u679c\u9879\u76ee\u90e8\u7f72\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u4e2d\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSoket"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u4e0d\u80fd\u8fde\u63a5\u6216\u8fde\u63a5\u5931\u8d25\u7b49\u95ee\u9898\uff0c\u8bf7\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," \u670d\u52a1\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket \u534f\u8bae")," \u662f\u52fe\u9009\u72b6\u6001"),(0,r.kt)("img",{src:(0,o.Z)("img/iis2.png")}),(0,r.kt)("h2",{id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,r.kt)("h3",{id:"34143-\u90e8\u7f72\u4e4b\u540e\u7f3a\u5931-api-ms-winxxxxdll-\u95ee\u9898"},"34.1.4.3 \u90e8\u7f72\u4e4b\u540e\u7f3a\u5931 ",(0,r.kt)("inlineCode",{parentName:"h3"},"api-ms-win.xxxx.dll")," \u95ee\u9898"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u5c06\u53d1\u5e03\u6587\u4ef6\u53d1\u5e03\u5230\u670d\u52a1\u5668\u540e\uff0c\u51fa\u73b0\u4e22\u5931 ",(0,r.kt)("inlineCode",{parentName:"p"},"api.ms-win.xxxx.dll")," \u6587\u4ef6\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u91cd\u65b0\u53d1\u5e03\u5e76\u9009\u62e9\u670d\u52a1\u5668\u7279\u5b9a\u7684\u67b6\u6784\u5373\u53ef\u3002"),(0,r.kt)("img",{src:(0,o.Z)("img/iis4.jpg")}),(0,r.kt)("img",{src:(0,o.Z)("img/iis3.png")}),(0,r.kt)("h2",{id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae-1"},"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}k.isMDXComponent=!0}}]);