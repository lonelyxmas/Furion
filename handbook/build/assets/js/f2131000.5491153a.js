(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7990],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9060:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),o=(n(4996),{id:"deploy-docker",title:"33.2 \u5728 Docker \u90e8\u7f72",sidebar_label:"33.2 \u5728 Docker \u90e8\u7f72"}),l=void 0,p={unversionedId:"deploy-docker",id:"deploy-docker",isDocsHomePage:!1,title:"33.2 \u5728 Docker \u90e8\u7f72",description:"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 .csproj \u5e76\u6dfb\u52a0 en-US\uff0c\u5982\uff1a",source:"@site/docs/deploy-docker.mdx",sourceDirName:".",slug:"/deploy-docker",permalink:"/furion/docs/deploy-docker",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/deploy-docker.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1624870254,formattedLastUpdatedAt:"6/28/2021",frontMatter:{id:"deploy-docker",title:"33.2 \u5728 Docker \u90e8\u7f72",sidebar_label:"33.2 \u5728 Docker \u90e8\u7f72"},sidebar:"docs",previous:{title:"33.1 \u5728 IIS \u90e8\u7f72",permalink:"/furion/docs/deploy-iis"},next:{title:"33.3 \u5728 Nginx \u90e8\u7f72",permalink:"/furion/docs/deploy-nginx"}},c=[{value:"33.2.1 \u5173\u4e8e <code>Docker</code> \u90e8\u7f72",id:"3321-\u5173\u4e8e-docker-\u90e8\u7f72",children:[]},{value:"33.2.2 \u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",id:"3322-\u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",children:[{value:"33.2.2.1 \u53d1\u5e03\u540e\u6784\u5efa",id:"33221-\u53d1\u5e03\u540e\u6784\u5efa",children:[]},{value:"33.2.2.2 \u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03",id:"33222-\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03",children:[]}]},{value:"33.2.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3323-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," \u5e76\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"),"\uff0c\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3}","{3}":!0},"<PropertyGroup>\n  <TargetFramework>net5.0</TargetFramework>\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\n</PropertyGroup>\n")))),(0,i.kt)("h2",{id:"3321-\u5173\u4e8e-docker-\u90e8\u7f72"},"33.2.1 \u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"h2"},"Docker")," \u90e8\u7f72"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker")," \u4e2d\u90e8\u7f72\u7f51\u7ad9\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u53d1\u5e03\u540e\u6784\u5efa"),"\uff1a\u6b64\u65b9\u5f0f\u662f\u5148\u53d1\u5e03\u7f51\u7ad9\u540e\u5728\u518d\u6784\u5efa\u955c\u50cf\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6784\u5efa\u5c42\uff0c\u800c\u4e14\u8fd8\u80fd\u7f29\u51cf\u955c\u50cf\u5927\u5c0f\u3002",(0,i.kt)("strong",{parentName:"li"},"\uff08\u63a8\u8350\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03"),"\uff1a\u4e5f\u5c31\u662f\u8bf4\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u4e2d\u914d\u7f6e\u7f51\u7ad9\u4ece\u6784\u5efa\u5230\u53d1\u5e03\u7684\u5b8c\u6574\u8fc7\u7a0b\uff0c\u6b64\u65b9\u5f0f\u4f1a\u901f\u5ea6\u6162\uff0c\u800c\u4e14\u4f1a\u4ea7\u751f\u5197\u4f59\u5c42\uff0c\u589e\u52a0\u955c\u50cf\u5927\u5c0f\u3002")),(0,i.kt)("h2",{id:"3322-\u4e24\u79cd\u65b9\u5f0f\u6784\u5efa"},"33.2.2 \u4e24\u79cd\u65b9\u5f0f\u6784\u5efa"),(0,i.kt)("h3",{id:"33221-\u53d1\u5e03\u540e\u6784\u5efa"},"33.2.2.1 \u53d1\u5e03\u540e\u6784\u5efa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u53d1\u5e03\u7f51\u7ad9")),(0,i.kt)("p",null,"\u9996\u5148\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet cli")," \u4e2d\u53d1\u5e03\u7f51\u7ad9\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"deploy-iis#2611-%E5%8F%91%E5%B8%83%E7%BD%91%E7%AB%99"},"\u5728 IIS \u90e8\u7f72-\u53d1\u5e03\u7f51\u7ad9")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u7f16\u5199 ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'FROM mcr.microsoft.com/dotnet/aspnet:5.0.7\nWORKDIR /app\nEXPOSE 80\nEXPOSE 443\n\nCOPY . .\nENTRYPOINT ["dotnet", "Furion.Web.Entry.dll"]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u62f7\u8d1d\u5230\u53d1\u5e03\u6839\u76ee\u5f55")),(0,i.kt)("p",null,"\u5c06\u7f16\u5199\u597d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u6587\u4ef6\uff08\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," \u5927\u5199\uff09\u62f7\u8d1d\u5230\u53d1\u5e03\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u6784\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker")," \u955c\u50cf")),(0,i.kt)("p",null,"\u5728\u7f51\u7ad9\u53d1\u5e03\u540e\u7684\u8def\u5f84\u6839\u76ee\u5f55\u4e0b\uff08\u5fc5\u987b\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uff09\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD/PowerShell")," \u53ea\u9700\u6784\u5efa\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7 .\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u540e\u7aef\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".")," \u4e0d\u80fd\u7701\u7565"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u542f\u52a8\u955c\u50cf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name \u5bb9\u5668\u540d\u79f0 -p 5000:80 --restart=always -d \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u53d1\u5e03\u5230 ",(0,i.kt)("inlineCode",{parentName:"h5"},"hub.docker.com"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u5c06\u8be5\u7f51\u7ad9\u7684\u955c\u50cf\u516c\u5f00\u51fa\u53bb\uff0c\u90a3\u4e48\u53ef\u4ee5\u53d1\u5e03\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"hub.docker.com")," \u4e2d\u3002\u53d1\u5e03\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u4e3a\u955c\u50cf\u6253 ",(0,i.kt)("inlineCode",{parentName:"li"},"tag")," \u6807\u7b7e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7 docker\u8d26\u53f7\u540d/\u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n")),(0,i.kt)("p",{parentName:"div"},"\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag furion:v2.10.5 monksoul/furion:v2.10.5\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u767b\u5f55 ",(0,i.kt)("inlineCode",{parentName:"li"},"docker"))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker login\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u63a8\u9001\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"hub.docker.com"))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker push docker\u8d26\u53f7\u540d/\u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n")),(0,i.kt)("p",{parentName:"div"},"\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker push monksoul/furion:v2.10.5\n")))),(0,i.kt)("h3",{id:"33222-\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03"},"33.2.2.2 \u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03"),(0,i.kt)("p",null,"\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5077\u61d2\uff0c\u4f46\u662f\u4e0d\u592a\u63a8\u8350\uff0c\u4e0d\u8fc7\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u975e\u5e38\u6709\u7528\uff0c\u5c31\u662f\u96c6\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"Devops")," \u5de5\u5177\u94fe\u53ef\u4ee5\u505a\u5230\u4e00\u6b65\u5230\u4f4d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u7f16\u5199 ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile"))),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u53ea\u9700\u8981\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u5185\u5bb9\u66ff\u6362\u6210\u4ee5\u4e0b\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6}","{6}":!0},'FROM mcr.microsoft.com/dotnet/sdk:5.0.7 AS build\nWORKDIR /source\n\n# Download Source\nRUN git init\nRUN git remote add -t master -m master origin \u4f60\u7684\u6e90\u7801Git\u5730\u5740\nRUN git config core.sparseCheckout true\nRUN echo samples >> .git/info/sparse-checkout\nRUN git pull --depth 1 origin main\n\n# Restore And Publish\nWORKDIR /source/samples\nRUN dotnet restore\nRUN dotnet publish -c release -o /app --no-restore\n\n# Run\nFROM mcr.microsoft.com/dotnet/aspnet:5.0.7\nWORKDIR /app\nCOPY --from=build /app ./\nEXPOSE 80\nEXPOSE 443\nENTRYPOINT ["dotnet", "Furion.Web.Entry.dll"]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6240\u5728\u8def\u5f84\u6784\u5efa")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u548c\u4e0a\u8ff0\u6b65\u9aa4\u4e00\u81f4\uff0c\u4e0d\u518d\u91cd\u590d\u7f16\u5199"),(0,i.kt)("h2",{id:"3323-\u53cd\u9988\u4e0e\u5efa\u8bae"},"33.2.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);