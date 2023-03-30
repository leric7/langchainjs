"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6572],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,h=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(5773),n=(a(7378),a(5318));const i={id:"vectorstores.SupabaseVectorStore",title:"Class: SupabaseVectorStore",sidebar_label:"vectorstores.SupabaseVectorStore",custom_edit_url:null},s=void 0,l={unversionedId:"api/classes/vectorstores.SupabaseVectorStore",id:"api/classes/vectorstores.SupabaseVectorStore",title:"Class: SupabaseVectorStore",description:"vectorstores.SupabaseVectorStore",source:"@site/docs/api/classes/vectorstores.SupabaseVectorStore.md",sourceDirName:"api/classes",slug:"/api/classes/vectorstores.SupabaseVectorStore",permalink:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vectorstores.SupabaseVectorStore",title:"Class: SupabaseVectorStore",sidebar_label:"vectorstores.SupabaseVectorStore",custom_edit_url:null},sidebar:"sidebar",previous:{title:"vectorstores.SaveableVectorStore",permalink:"/langchainjs/docs/api/classes/vectorstores.SaveableVectorStore"},next:{title:"vectorstores.VectorStore",permalink:"/langchainjs/docs/api/classes/vectorstores.VectorStore"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"embeddings",id:"embeddings",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"queryName",id:"queryname",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"tableName",id:"tablename",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"addDocuments",id:"adddocuments",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"addVectors",id:"addvectors",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"asRetriever",id:"asretriever",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"similaritySearch",id:"similaritysearch",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"similaritySearchVectorWithScore",id:"similaritysearchvectorwithscore",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"similaritySearchWithScore",id:"similaritysearchwithscore",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"fromDocuments",id:"fromdocuments",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"fromExistingIndex",id:"fromexistingindex",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"fromTexts",id:"fromtexts",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-13",level:4}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/vectorstores"},"vectorstores"),".SupabaseVectorStore"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"VectorStore"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"SupabaseVectorStore"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new SupabaseVectorStore"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"embeddings"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"args"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"embeddings")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/embeddings.Embeddings"},(0,n.kt)("inlineCode",{parentName:"a"},"Embeddings")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseLibArgs")))))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L31"},"langchain/src/vectorstores/supabase.ts:31")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"client"},"client"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"client"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"default"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"public"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L25"},"langchain/src/vectorstores/supabase.ts:25")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"embeddings"},"embeddings"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"embeddings"),": ",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/embeddings.Embeddings"},(0,n.kt)("inlineCode",{parentName:"a"},"Embeddings"))),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#embeddings"},"embeddings")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/base.ts#L23"},"langchain/src/vectorstores/base.ts:23")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"queryname"},"queryName"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"queryName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L29"},"langchain/src/vectorstores/supabase.ts:29")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tablename"},"tableName"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"tableName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L27"},"langchain/src/vectorstores/supabase.ts:27")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"adddocuments"},"addDocuments"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addDocuments"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"documents"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"documents")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),"[]")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#adddocuments"},"addDocuments")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L39"},"langchain/src/vectorstores/supabase.ts:39")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"addvectors"},"addVectors"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addVectors"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"vectors"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"documents"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"vectors")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"),"[][]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"documents")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),"[]")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#addvectors"},"addVectors")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L47"},"langchain/src/vectorstores/supabase.ts:47")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"asretriever"},"asRetriever"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"asRetriever"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"k?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseRetriever"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRetriever"))),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"k?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseRetriever"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRetriever"))),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#asretriever"},"asRetriever")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/base.ts#L92"},"langchain/src/vectorstores/base.ts:92")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"similaritysearch"},"similaritySearch"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"similaritySearch"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"k?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"filter?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"query")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"k")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"filter")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#similaritysearch"},"similaritySearch")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/base.ts#L43"},"langchain/src/vectorstores/base.ts:43")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"similaritysearchvectorwithscore"},"similaritySearchVectorWithScore"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"similaritySearchVectorWithScore"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"k"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),"][]",">"),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"query")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"),"[]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"k")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),"][]",">"),(0,n.kt)("h4",{id:"overrides-3"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#similaritysearchvectorwithscore"},"similaritySearchVectorWithScore")),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L69"},"langchain/src/vectorstores/supabase.ts:69")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"similaritysearchwithscore"},"similaritySearchWithScore"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"similaritySearchWithScore"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"k?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"filter?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,n.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),"][]",">"),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"query")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"k")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"filter")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,n.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),"][]",">"),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#similaritysearchwithscore"},"similaritySearchWithScore")),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/base.ts#L57"},"langchain/src/vectorstores/base.ts:57")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fromdocuments"},"fromDocuments"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"fromDocuments"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"docs"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"embeddings"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dbConfig"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseVectorStore")),">"),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docs")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/document.Document"},(0,n.kt)("inlineCode",{parentName:"a"},"Document")),"[]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"embeddings")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/embeddings.Embeddings"},(0,n.kt)("inlineCode",{parentName:"a"},"Embeddings")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dbConfig")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseLibArgs")))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseVectorStore")),">"),(0,n.kt)("h4",{id:"overrides-4"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#fromdocuments"},"fromDocuments")),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L118"},"langchain/src/vectorstores/supabase.ts:118")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fromexistingindex"},"fromExistingIndex"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"fromExistingIndex"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"embeddings"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dbConfig"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseVectorStore")),">"),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"embeddings")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/embeddings.Embeddings"},(0,n.kt)("inlineCode",{parentName:"a"},"Embeddings")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dbConfig")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseLibArgs")))))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseVectorStore")),">"),(0,n.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L128"},"langchain/src/vectorstores/supabase.ts:128")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fromtexts"},"fromTexts"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"fromTexts"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"texts"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"metadatas"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"embeddings"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dbConfig"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseVectorStore")),">"),(0,n.kt)("h4",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"texts")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"metadatas")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"object"),"[]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"embeddings")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/embeddings.Embeddings"},(0,n.kt)("inlineCode",{parentName:"a"},"Embeddings")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dbConfig")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseLibArgs")))))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.SupabaseVectorStore"},(0,n.kt)("inlineCode",{parentName:"a"},"SupabaseVectorStore")),">"),(0,n.kt)("h4",{id:"overrides-5"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},"VectorStore"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore#fromtexts"},"fromTexts")),(0,n.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L100"},"langchain/src/vectorstores/supabase.ts:100")))}c.isMDXComponent=!0}}]);