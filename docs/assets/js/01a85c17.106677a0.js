(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4013,6068],{5601:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(7294),l=r(6010),n=r(6742),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",o="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},a.createElement("h3",{className:c},t.title),a.createElement("ul",{className:i},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:o},a.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},94:function(e,t,r){"use strict";r.r(t);var a=r(7294),l=r(9045),n=r(6742),s=r(5601),c=r(4973),i=r(6700);t.default=function(e){var t=e.tags,r=e.sidebar,o={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));var m=Object.entries(o).sort((function(e,t){var r=e[0],a=t[0];return r===a?0:r>a?1:-1})).map((function(e){var r=e[0],l=e[1];return a.createElement("div",{key:r},a.createElement("h3",null,r),l.map((function(e){return a.createElement(n.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),a.createElement("hr",null))})).filter((function(e){return null!=e}));return a.createElement(l.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--3"},a.createElement(s.Z,{sidebar:r})),a.createElement("main",{className:"col col--7"},a.createElement("h1",null,a.createElement(c.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),a.createElement("div",{className:"margin-vert--lg"},m)))))}},546:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(4034),l=r(9973),n=r(7294),s=r(6010),c=r(6742),i=r(6700),o=r(4996),m="footerLogoLink_qW4Z";function u(e){var t=e.to,r=e.href,s=e.label,i=e.prependBaseUrlToHref,m=(0,l.Z)(e,["to","href","label","prependBaseUrlToHref"]),u=(0,o.Z)(t),f=(0,o.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:i?f:r}:{to:u},m),s)}var f=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t,style:{background:"#fff",padding:"5px 10px"}})};var d=function(){var e=(0,i.LU)().footer,t=e||{},r=t.copyright,a=t.links,l=void 0===a?[]:a,c=t.logo,d=void 0===c?{}:c,g=(0,o.Z)(d.src);return e?n.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(u,e))}))):null)}))),(d||r)&&n.createElement("div",{className:"footer__bottom text--center"},d&&d.src&&n.createElement("div",{className:"margin-bottom--sm"},d.href?n.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:m},n.createElement(f,{alt:d.alt,url:g})):n.createElement(f,{alt:d.alt,url:g})),r?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);