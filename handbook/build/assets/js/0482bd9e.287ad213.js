(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3533],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||l[u]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),o={id:"dbcontext-entitytrigger",title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",sidebar_label:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"},m={unversionedId:"dbcontext-entitytrigger",id:"dbcontext-entitytrigger",isDocsHomePage:!1,title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",description:"9.25.1 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",source:"@site/docs/dbcontext-entitytrigger.mdx",sourceDirName:".",slug:"/dbcontext-entitytrigger",permalink:"/furion/docs/dbcontext-entitytrigger",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-entitytrigger.mdx",version:"current",lastUpdatedBy:"zhoujintao",lastUpdatedAt:1619429356,formattedLastUpdatedAt:"4/26/2021",sidebar_label:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",frontMatter:{id:"dbcontext-entitytrigger",title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",sidebar_label:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"},sidebar:"docs",previous:{title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",permalink:"/furion/docs/dbcontext-Interceptor"},next:{title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",permalink:"/furion/docs/tran"}},s=[{value:"9.25.1 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",id:"9251-\u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",children:[]},{value:"9.25.2 \u6709\u4f55\u4f5c\u7528",id:"9252-\u6709\u4f55\u4f5c\u7528",children:[]},{value:"9.25.3 \u5982\u4f55\u4f7f\u7528",id:"9253-\u5982\u4f55\u4f7f\u7528",children:[{value:"9.25.3.1 \u542f\u7528\u6570\u636e\u76d1\u542c",id:"92531-\u542f\u7528\u6570\u636e\u76d1\u542c",children:[]},{value:"9.25.3.2 \u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e",id:"92532-\u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e",children:[]}]},{value:"9.25.4 <code>IEntityChangedListener</code> \u5b9a\u4e49",id:"9254-ientitychangedlistener-\u5b9a\u4e49",children:[]},{value:"9.25.5 <code>[NotChangedListener]</code> \u8df3\u8fc7\u76d1\u542c",id:"9255-notchangedlistener-\u8df3\u8fc7\u76d1\u542c",children:[]},{value:"9.25.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9256-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"9251-\u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"},"9.25.1 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"),(0,i.kt)("p",null,"\u5728\u6700\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.6+")," \u7248\u672c\u4e2d\uff0c\u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntityChangedListener")," \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u63a5\u53e3\uff0c\u53ef\u4ee5\u76d1\u542c ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore")," \u4efb\u4f55\u5b9e\u4f53\u8868 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u589e\u5220\u6539")," \u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"9252-\u6709\u4f55\u4f5c\u7528"},"9.25.2 \u6709\u4f55\u4f5c\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u6570\u636e\u5e93 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u89e6\u53d1\u5668")," \u529f\u80fd\uff0c\u53ef\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u589e\u5220\u6539")," \u76d1\u542c"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0\u7279\u6b8a\u64cd\u4f5c\uff0c\u6bd4\u5982\u5237\u65b0\u7f13\u5b58\uff0c\u8bb0\u5f55\u65e5\u5fd7\u7b49")),(0,i.kt)("h2",{id:"9253-\u5982\u4f55\u4f7f\u7528"},"9.25.3 \u5982\u4f55\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u4e0d\u542f\u7528\u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668\uff0c\u5982\u60f3\u542f\u7528\uff0c\u53ea\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587")," \u6784\u9020\u51fd\u6570\u4e2d\u542f\u7528\u5373\u53ef\uff1a"),(0,i.kt)("h3",{id:"92531-\u542f\u7528\u6570\u636e\u76d1\u542c"},"9.25.3.1 \u542f\u7528\u6570\u636e\u76d1\u542c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{11}","{11}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n            EnabledEntityChangedListener = true;\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"92532-\u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e"},"9.25.3.2 \u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9,30-41}","{9,30-41}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.Caching.Memory;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Post : Entity, IEntityChangedListener<Post>\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Post()\n        {\n            CreatedTime = DateTimeOffset.UtcNow;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// Person \u96c6\u5408\n        /// </summary>\n        public ICollection<Person> Persons { get; set; }\n\n        /// <summary>\n        /// \u5b9e\u4f53\u66f4\u6539\u540e\u89e6\u53d1\n        /// </summary>\n        /// <param name="entity">\u65b0\u6570\u636e</param>\n        /// <param name="oldEntity">\u65e7\u6570\u636e</param>\n        /// <param name="dbContext">\u6570\u636e\u5e93\u4e0a\u4e0b\u6587</param>\n        /// <param name="dbContextLocator">\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668</param>\n        /// <param name="state">\u5b9e\u4f53\u72b6\u6001</param>\n        public void OnChanged(Post entity, Post oldEntity, DbContext dbContext, Type dbContextLocator, EntityState state)\n        {\n            // \u5237\u65b0\u7f13\u5b58\n            App.GetService<IMemoryCache>().Set("Key", "Value");\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"9254-ientitychangedlistener-\u5b9a\u4e49"},"9.25.4 ",(0,i.kt)("inlineCode",{parentName:"h2"},"IEntityChangedListener")," \u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{25}","{25}":!0},'/// <summary>\n/// \u5b9e\u4f53\u6570\u636e\u6539\u53d8\u76d1\u542c\u4f9d\u8d56\u63a5\u53e3\n/// </summary>\n/// <typeparam name="TEntity"></typeparam>\npublic interface IEntityChangedListener<TEntity>\n    where TEntity : class, IPrivateEntity, new()\n{\n    /// <summary>\n    /// \u76d1\u542c\u6570\u636e\u6539\u53d8\u4e4b\u524d\uff08\u4ec5\u652f\u6301EFCore\u64cd\u4f5c\uff09\n    /// </summary>\n    /// <param name="entity"></param>\n    /// <param name="dbContext"></param>\n    /// <param name="dbContextLocator"></param>\n    /// <param name="state"></param>\n    void OnChanging(TEntity entity, DbContext dbContext, Type dbContextLocator, EntityState state) { }\n\n    /// <summary>\n    /// \u76d1\u542c\u6570\u636e\u6539\u53d8\u4e4b\u540e\uff08\u4ec5\u652f\u6301EFCore\u64cd\u4f5c\uff09\n    /// </summary>\n    /// <param name="newEntity">\u65b0\u503c</param>\n    /// <param name="oldEntity">\u65e7\u503c</param>\n    /// <param name="dbContext"></param>\n    /// <param name="dbContextLocator"></param>\n    /// <param name="state"></param>\n    void OnChanged(TEntity newEntity, TEntity oldEntity, DbContext dbContext, Type dbContextLocator, EntityState state);\n\n    /// <summary>\n    /// \u76d1\u542c\u6570\u636e\u6539\u53d8\u5931\u8d25\uff08\u4ec5\u652f\u6301EFCore\u64cd\u4f5c\uff09\n    /// </summary>\n    /// <param name="entity"></param>\n    /// <param name="dbContext"></param>\n    /// <param name="dbContextLocator"></param>\n    /// <param name="state"></param>\n    void OnChangeFailed(TEntity entity, DbContext dbContext, Type dbContextLocator, EntityState state) { }\n}\n')),(0,i.kt)("h2",{id:"9255-notchangedlistener-\u8df3\u8fc7\u76d1\u542c"},"9.25.5 ",(0,i.kt)("inlineCode",{parentName:"h2"},"[NotChangedListener]")," \u8df3\u8fc7\u76d1\u542c"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u5bf9\u6240\u6709\u65b0\u589e\u3001\u66f4\u65b0\u3001\u7f16\u8f91\u7684\u5b9e\u4f53\u8fdb\u884c\u76d1\u542c\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u65e0\u9700\u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\uff0c\u53ea\u9700\u8981\u5728\u5b9e\u4f53\u4e0a\u8d34 ",(0,i.kt)("inlineCode",{parentName:"p"},"[NotChangedListener]")," \u7279\u6027\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"9256-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.25.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}c.isMDXComponent=!0}}]);