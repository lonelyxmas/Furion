"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8980],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(v,i(i({ref:n},u),{},{components:t})):a.createElement(v,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),r=t(7294),o=t(2389),i=t(5979),l=t(6010),s="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.lx)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,C=(0,r.useState)(h),w=C[0],x=C[1],O=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&x(E)}var D=function(e){var n=e.currentTarget,t=O.indexOf(n),a=k[t].value;a!==w&&(T(n),x(a),null!=m&&y(m,a))},U=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},v)},k.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return O.push(e)},onKeyDown:U,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function u(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},4390:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=(t(4996),t(9877)),l=t(8215),s=["components"],c={id:"tran",title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",sidebar_label:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143 (UnitOfWork)"},u=void 0,p={unversionedId:"tran",id:"tran",title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",description:"",source:"@site/docs/tran.mdx",sourceDirName:".",slug:"/tran",permalink:"/furion/docs/tran",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/tran.mdx",tags:[],version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1624502128,formattedLastUpdatedAt:"6/24/2021",frontMatter:{id:"tran",title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",sidebar_label:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143 (UnitOfWork)"},sidebar:"docs",previous:{title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",permalink:"/furion/docs/dbcontext-entitytrigger"},next:{title:"9.27 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",permalink:"/furion/docs/dbcontext-read-write"}},d={},m=[{value:"9.26.1 \u4e8b\u52a1",id:"9261-\u4e8b\u52a1",level:2},{value:"9.26.2 \u5de5\u4f5c\u5355\u5143",id:"9262-\u5de5\u4f5c\u5355\u5143",level:2},{value:"9.26.3 \u5982\u4f55\u4f7f\u7528",id:"9263-\u5982\u4f55\u4f7f\u7528",level:2},{value:"9.26.3.1 \u81ea\u52a8\u7ba1\u7406",id:"92631-\u81ea\u52a8\u7ba1\u7406",level:3},{value:"9.26.3.2 <code>EnsureTransaction()</code> \u65b9\u6cd5 \u2728",id:"92632-ensuretransaction-\u65b9\u6cd5-",level:3},{value:"9.26.3.2 \u624b\u52a8\u7ba1\u7406",id:"92632-\u624b\u52a8\u7ba1\u7406",level:3},{value:"9.26.4 \u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e",id:"9264-\u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e",level:2},{value:"9.26.4.1 <code>[UnitOfWork]</code> \u7279\u6027",id:"92641-unitofwork-\u7279\u6027",level:3},{value:"9.26.4.2 <code>[ManualCommit]</code> \u7279\u6027",id:"92642-manualcommit-\u7279\u6027",level:3},{value:"9.26.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9265-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],v={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"9261-\u4e8b\u52a1"},"9.26.1 \u4e8b\u52a1"),(0,o.kt)("p",null,"\u4e8b\u52a1\u6307\u4f5c\u4e3a\u5355\u4e2a\u903b\u8f91\u5de5\u4f5c\u5355\u5143\u6267\u884c\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u8981\u4e48",(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u5730\u6267\u884c\uff0c\u8981\u4e48\u5b8c\u5168\u5730\u4e0d\u6267\u884c"),"\u3002"),(0,o.kt)("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u4e8b\u52a1\u5c31\u662f\u5e76\u53d1\u63a7\u5236\u7684\u5355\u4f4d\uff0c\u662f\u7528\u6237\u5b9a\u4e49\u7684\u4e00\u4e2a\u64cd\u4f5c\u5e8f\u5217\u3002 \u800c\u4e00\u4e2a\u903b\u8f91\u5de5\u4f5c\u5355\u5143\u8981\u6210\u4e3a\u4e8b\u52a1\uff0c\u5c31\u5fc5\u987b\u6ee1\u8db3 ",(0,o.kt)("inlineCode",{parentName:"p"},"ACID")," \u5c5e\u6027\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A"),"\uff1a\u539f\u5b50\u6027\uff08Atomicity\uff09\uff1a\u4e8b\u52a1\u4e2d\u7684\u64cd\u4f5c\u8981\u4e48\u90fd\u4e0d\u505a\uff0c\u8981\u4e48\u5c31\u5168\u505a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"C"),"\uff1a\u4e00\u81f4\u6027\uff08Consistency\uff09\uff1a\u4e8b\u52a1\u6267\u884c\u7684\u7ed3\u679c\u5fc5\u987b\u662f\u4ece\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001\u8f6c\u6362\u5230\u53e6\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"I"),"\uff1a\u9694\u79bb\u6027\uff08Isolation\uff09\uff1a\u4e00\u4e2a\u4e8b\u52a1\u7684\u6267\u884c\u4e0d\u80fd\u88ab\u5176\u4ed6\u4e8b\u52a1\u5e72\u6270"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"D"),"\uff1a\u6301\u4e45\u6027\uff08Durability\uff09\uff1a\u4e00\u4e2a\u4e8b\u52a1\u4e00\u65e6\u63d0\u4ea4\uff0c\u5b83\u5bf9\u6570\u636e\u5e93\u4e2d\u6570\u636e\u7684\u6539\u53d8\u5c31\u5e94\u8be5\u662f\u6c38\u4e45\u6027\u7684")),(0,o.kt)("h2",{id:"9262-\u5de5\u4f5c\u5355\u5143"},"9.26.2 \u5de5\u4f5c\u5355\u5143"),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u4e3a\u4e86\u4fdd\u8bc1\u4e00\u6b21\u5b8c\u6574\u7684\u529f\u80fd\u64cd\u4f5c\u6240\u4ea7\u751f\u7684\u4e00\u4e9b\u5217\u63d0\u4ea4\u6570\u636e\u7684\u5b8c\u6574\u6027\uff0c\u8d77\u7740\u4e8b\u52a1\u7684\u4f5c\u7528\u3002\u5728\u8ba1\u7b97\u673a\u9886\u57df\u4e2d\uff0c\u5de5\u4f5c\u5355\u5143\u901a\u5e38\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," \u540d\u79f0\u8868\u793a\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4fdd\u8bc1\u7528\u6237\u7684\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u5904\u4e8e\u5728\u4e00\u4e2a\u529f\u80fd\u5355\u5143\u4e2d\uff0c\u4e5f\u5c31\u662f\u5de5\u4f5c\u5355\u5143\u3002"),(0,o.kt)("h2",{id:"9263-\u5982\u4f55\u4f7f\u7528"},"9.26.3 \u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"92631-\u81ea\u52a8\u7ba1\u7406"},"9.26.3.1 \u81ea\u52a8\u7ba1\u7406"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u63a7\u5236\u5668 Action \u4e2d\u8d34 ",(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u5373\u53ef\u5f00\u542f\u5de5\u4f5c\u5355\u5143\u6a21\u5f0f\uff0c\u4fdd\u8bc1\u4e86\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u5355\u5143"),"\uff0c\u8981\u4e48\u540c\u65f6\u6210\u529f\uff0c\u8981\u4e48\u540c\u65f6\u5931\u8d25\u3002"),(0,o.kt)("h3",{id:"92632-ensuretransaction-\u65b9\u6cd5-"},"9.26.3.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"EnsureTransaction()")," \u65b9\u6cd5 \u2728"),(0,o.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u901a\u8fc7\u9759\u6001\u7c7b\u6216\u8005\u5176\u4ed6\u65b9\u5f0f\u4e0d\u5c0f\u5fc3\u521b\u5efa\u4e86\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," \u5b9e\u4f8b\uff0c\u8fd9\u65f6\u5019\u8d34\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u4e5f\u4e0d\u89c1\u8d77\u6548\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u6765\u786e\u8ba4\u4e8b\u52a1\u662f\u5426\u6709\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"repository.EnsureTransaction();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u559c\u6b22\u624b\u52a8\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"strong"},"[UnitOfWork(true)]")," \u5f00\u542f\u6b64\u529f\u80fd\u3002")),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u5c06\u5f53\u524d\u4ed3\u50a8\u6dfb\u52a0\u5230\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6c60\u4e2d\uff0c\u5e76\u786e\u4fdd\u4e8b\u52a1\u53ef\u7528\u3002"),(0,o.kt)("h3",{id:"92632-\u624b\u52a8\u7ba1\u7406"},"9.26.3.2 \u624b\u52a8\u7ba1\u7406"),(0,o.kt)(i.Z,{defaultValue:"one",values:[{label:"\u793a\u4f8b\u4e00",value:"one"},{label:"\u793a\u4f8b\u4e8c",value:"two"},{label:"\u793a\u4f8b\u4e09\uff08\u5206\u5e03\u5f0f\uff09",value:"three"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"one",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'// \u5f00\u542f\u4e8b\u52a1\nusing (var transaction = _testRepository.Database.BeginTransaction())\n{\n    try\n    {\n        _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n        _testRepository.SaveNow();\n\n        _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/visualstudio" });\n        _testRepository.SaveNow();\n\n        var blogs = _testRepository.Entity\n                .OrderBy(b => b.Url)\n                .ToList();\n\n        // \u63d0\u4ea4\u4e8b\u52a1\n        transaction.Commit();\n     }\n     catch (Exception)\n     {\n        // \u56de\u6eda\u4e8b\u52a1\n        // transaction.RollBack(); // \u65b0\u7248\u672c\u81ea\u52a8\u56de\u6eda\u4e86\n     }\n}\n'))),(0,o.kt)(l.Z,{value:"two",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var options = new DbContextOptionsBuilder<DefaultDbContext>()\n    .UseSqlServer(new SqlConnection(connectionString))\n    .Options;\n\n// \u521b\u5efa\u8fde\u63a5\u5b57\u7b26\u4e32\nusing (var context1 = new DefaultDbContext(options))\n{\n    // \u5f00\u542f\u4e8b\u52a1\n    using (var transaction = context1.Database.BeginTransaction())\n    {\n        try\n        {\n            _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            _testRepository.SaveNow();\n\n            context1.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            context1.SaveChanges();\n\n            // \u521b\u5efa\u65b0\u7684\u8fde\u63a5\u5bf9\u8c61\n            using (var context2 = new DefaultDbContext(options))\n            {\n                // \u5171\u4eab\u8fde\u63a5\u4e8b\u52a1\n                context2.Database.UseTransaction(transaction.GetDbTransaction());\n\n                var blogs = context2.Blogs\n                    .OrderBy(b => b.Url)\n                    .ToList();\n            }\n\n            // \u63d0\u4ea4\u4e8b\u52a1\n            transaction.Commit();\n        }\n        catch (Exception)\n        {\n            // \u56de\u6eda\u4e8b\u52a1\n            // transaction.RollBack(); // \u65b0\u7248\u672c\u81ea\u52a8\u56de\u6eda\u4e86\n        }\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"three",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1-2}","{1-2}":!0},'// \u5f00\u542f\u5206\u5e03\u5f0f\u4e8b\u52a1\nusing (var scope = new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted }))\n{\n    using (var connection = new SqlConnection(connectionString))\n    {\n        connection.Open();\n\n        try\n        {\n            // \u8fd9\u91cc\u662f Ado.NET \u64cd\u4f5c\n            var command = connection.CreateCommand();\n            command.CommandText = "DELETE FROM dbo.Blogs";\n            command.ExecuteNonQuery();\n\n            // \u521b\u5efaEF Core \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n            var options = new DbContextOptionsBuilder<BloggingContext>()\n                .UseSqlServer(connection)\n                .Options;\n            using (var context = new BloggingContext(options))\n            {\n                context.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n                context.SaveChanges();\n            }\n\n            // \u6846\u67b6\u5c01\u88c5\u7684\u4ed3\u50a8\n            _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            _testRepository.SaveChanges();\n\n           // \u63d0\u4ea4\u4e8b\u52a1\n            scope.Complete();\n        }\n        catch (System.Exception)\n        {\n            // \u81ea\u52a8\u56de\u6eda\n        }\n    }\n}\n')))),(0,o.kt)("h2",{id:"9264-\u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e"},"9.26.4 \u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e"),(0,o.kt)("h3",{id:"92641-unitofwork-\u7279\u6027"},"9.26.4.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"[UnitOfWork]")," \u7279\u6027"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u53ea\u80fd\u7528\u4e8e\u63a7\u5236\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," \u4e2d\uff0c\u4e00\u65e6\u8d34\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u540e\uff0c\u90a3\u4e48\u8be5\u8bf7\u6c42\u81ea\u52a8\u542f\u7528\u5de5\u4f5c\u5355\u5143\u6a21\u5f0f\uff0c\u8981\u4e48\u6210\u529f\uff0c\u8981\u4e48\u5931\u8d25\u3002"),(0,o.kt)("h3",{id:"92642-manualcommit-\u7279\u6027"},"9.26.4.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"[ManualCommit]")," \u7279\u6027"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u5728\u4e00\u6b21\u6210\u529f\u8bf7\u6c42\u4e4b\u540e\u81ea\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges()")," \u65b9\u6cd5\uff0c\u5982\u679c\u9009\u62e9\u624b\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges()")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," \u4e2d\u8d34 ",(0,o.kt)("inlineCode",{parentName:"p"},"[ManualCommit]")," \u7279\u6027\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"9265-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.26.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e8b\u52a1")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/saving/transactions"},"EF Core - \u4f7f\u7528\u4e8b\u52a1")," \u7ae0\u8282\u3002"))))}f.isMDXComponent=!0}}]);