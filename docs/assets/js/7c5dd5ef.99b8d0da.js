(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3043],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3886:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=r(4034),o=r(9973),a=(r(7294),r(3905)),l={id:"oops",title:"4. Oops \u9759\u6001\u7c7b",sidebar_label:"4. Oops \u9759\u6001\u7c7b"},i={unversionedId:"global/oops",id:"global/oops",isDocsHomePage:!1,title:"4. Oops \u9759\u6001\u7c7b",description:"4.1 \u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38",source:"@site/docs/global/oops.mdx",sourceDirName:"global",slug:"/global/oops",permalink:"/docs/global/oops",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/oops.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,formattedLastUpdatedAt:"2/4/2021",sidebar_label:"4. Oops \u9759\u6001\u7c7b",frontMatter:{id:"oops",title:"4. Oops \u9759\u6001\u7c7b",sidebar_label:"4. Oops \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"3. DataValidator \u9759\u6001\u7c7b",permalink:"/docs/global/datavalidator"},next:{title:"5. LinqExpression \u9759\u6001\u7c7b",permalink:"/docs/global/linqexpression"}},p=[{value:"4.1 \u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38",id:"41-\u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38",children:[]},{value:"4.2 \u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38",id:"42-\u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38",children:[]},{value:"4.3 \u72b6\u6001\u7801\u5f02\u5e38",id:"43-\u72b6\u6001\u7801\u5f02\u5e38",children:[]},{value:"4.4 \u72b6\u6001\u7801\u5f02\u5e38",id:"44-\u72b6\u6001\u7801\u5f02\u5e38",children:[]},{value:"4.5 \u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5",id:"45-\u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5",children:[]}],c={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"41-\u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38"},"4.1 \u629b\u51fa\u5b57\u7b26\u4e32\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'throw Oops.Oh("\u5f02\u5e38\u6d88\u606f");\nthrow Oops.Oh("\u5f02\u5e38\u6d88\u606f\uff1a{0}", "\u51fa\u9519\u4e86");\n')),(0,a.kt)("h2",{id:"42-\u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38"},"4.2 \u6307\u5b9a\u7c7b\u578b\u7684\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'throw Oops.Oh("\u5f02\u5e38\u6d88\u606f", typeof(ArgumentNullException));\nthrow Oops.Oh("\u5f02\u5e38\u6d88\u606f\uff1a{0}", typeof(ArgumentNullException), "\u51fa\u9519\u4e86");\n')),(0,a.kt)("h2",{id:"43-\u72b6\u6001\u7801\u5f02\u5e38"},"4.3 \u72b6\u6001\u7801\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'throw Oops.Oh(1000);\nthrow Oops.Oh(1000, "\u51fa\u9519\u4e86");\n')),(0,a.kt)("h2",{id:"44-\u72b6\u6001\u7801\u5f02\u5e38"},"4.4 \u72b6\u6001\u7801\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'throw Oops.Oh(1000, typeof(ArgumentNullException));\nthrow Oops.Oh(1000, typeof(ArgumentNullException), "\u51fa\u9519\u4e86");\n')),(0,a.kt)("h2",{id:"45-\u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5"},"4.5 \u5f02\u5e38\u65b9\u6cd5\u91cd\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"Oops.Retry(() => {\n    // Do.....\n}, 3, 1000);\n")))}s.isMDXComponent=!0}}]);