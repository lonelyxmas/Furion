"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1689],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5169:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var t=r(3117),o=r(102),i=(r(7294),r(3905)),s=["components"],a={id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},p=void 0,l={unversionedId:"global/linqexpression",id:"global/linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",description:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",source:"@site/docs/global/linqexpression.mdx",sourceDirName:"global",slug:"/global/linqexpression",permalink:"/furion/docs/global/linqexpression",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/global/linqexpression.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/furion/docs/global/oops"},next:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/furion/docs/global/shttp"}},u={},c=[{value:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",level:2},{value:"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",level:2}],f={toc:c};function d(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"},"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var expression = LinqExpression.Create<T>(u => u.Id == 1);\nvar expression2 = LinqExpression.Create<T>((u,i) => u.Id == 1 && i > 0);\n")),(0,i.kt)("h2",{id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"},"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u5316\u7684\u8868\u8fbe\u5f0f\nvar expression = LinqExpression.And();\nvar expression2 = LinqExpression.IndexAnd();\nvar expression3 = LinqExpression.Or();\nvar expression4 = LinqExpression.IndexOr();\n\n// \u62fc\u63a5\u8868\u8fbe\u5f0f\nvar expression5 = expression.And(expression2);\nvar expression6 = expression.AndIf(age > 18, expression2);\nvar expression7 = expression.Or(expression2);\nvar expression8 = expression.OrIf(age > 18, expression2);\n\n// \u83b7\u53d6\u8868\u8fbe\u5f0f\u5c5e\u6027\u540d\nvar properyName = expression.GetExpressionPropertyName(u => u.Name);    // Name\n")))}d.isMDXComponent=!0}}]);