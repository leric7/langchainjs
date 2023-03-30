"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8046],{5318:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(7378);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return r?t.createElement(d,s(s({ref:n},c),{},{components:r})):t.createElement(d,s({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m[u]="string"==typeof e?e:o,s[1]=m;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9821:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var t=r(5773),o=(r(7378),r(5318));const a={},s="Buffer Window Memory",m={unversionedId:"modules/memory/examples/buffer_window_memory",id:"modules/memory/examples/buffer_window_memory",title:"Buffer Window Memory",description:"BufferWindowMemory keeps track of the back-and-forths in conversation, and then uses a window of size k to surface the last k back-and-forths to use as memory.",source:"@site/docs/modules/memory/examples/buffer_window_memory.md",sourceDirName:"modules/memory/examples",slug:"/modules/memory/examples/buffer_window_memory",permalink:"/langchainjs/docs/modules/memory/examples/buffer_window_memory",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/memory/examples/buffer_window_memory.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Memory",permalink:"/langchainjs/docs/modules/memory/examples/buffer_memory_chat"},next:{title:"Chains",permalink:"/langchainjs/docs/modules/chains/"}},i={},l=[],c={toc:l},u="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buffer-window-memory"},"Buffer Window Memory"),(0,o.kt)("p",null,"BufferWindowMemory keeps track of the back-and-forths in conversation, and then uses a window of size ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," to surface the last ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," back-and-forths to use as memory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain/llms";\nimport { BufferWindowMemory } from "langchain/memory";\nimport { ConversationChain } from "langchain/chains";\n\nconst model = new OpenAI({});\nconst memory = new BufferWindowMemory({ k: 1 });\nconst chain = new ConversationChain({ llm: model, memory: memory });\nconst res1 = await chain.call({ input: "Hi! I\'m Jim." });\nconsole.log({ res1 });\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{response: " Hi Jim! It\'s nice to meet you. My name is AI. What would you like to talk about?"}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res2 = await chain.call({ input: "What\'s my name?" });\nconsole.log({ res2 });\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{response: ' You said your name is Jim. Is there anything else you would like to talk about?'}\n")))}p.isMDXComponent=!0}}]);