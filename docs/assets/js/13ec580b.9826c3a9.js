"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3633],{5318:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),h=d(a),k=r,g=h["".concat(p,".").concat(k)]||h[k]||m[k]||l;return a?n.createElement(g,i(i({ref:t},o),{},{components:a})):n.createElement(g,i({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(5773),r=(a(7378),a(5318));const l={id:"agents.ZeroShotAgent",title:"Class: ZeroShotAgent",sidebar_label:"agents.ZeroShotAgent",custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/agents.ZeroShotAgent",id:"api/classes/agents.ZeroShotAgent",title:"Class: ZeroShotAgent",description:"agents.ZeroShotAgent",source:"@site/docs/api/classes/agents.ZeroShotAgent.md",sourceDirName:"api/classes",slug:"/api/classes/agents.ZeroShotAgent",permalink:"/langchainjs/docs/api/classes/agents.ZeroShotAgent",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"agents.ZeroShotAgent",title:"Class: ZeroShotAgent",sidebar_label:"agents.ZeroShotAgent",custom_edit_url:null},sidebar:"sidebar",previous:{title:"agents.ZapierToolKit",permalink:"/langchainjs/docs/api/classes/agents.ZapierToolKit"},next:{title:"agents/tools.AIPluginTool",permalink:"/langchainjs/docs/api/classes/agents_tools.AIPluginTool"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"allowedTools",id:"allowedtools",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"llmChain",id:"llmchain",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"returnValues",id:"returnvalues",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors",level:2},{value:"inputKeys",id:"inputkeys",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"_agentType",id:"_agenttype",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"_stop",id:"_stop",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"constructScratchPad",id:"constructscratchpad",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"extractToolAndInput",id:"extracttoolandinput",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"finishToolName",id:"finishtoolname",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"llmPrefix",id:"llmprefix",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"observationPrefix",id:"observationprefix",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"plan",id:"plan",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"prepareForNewCall",id:"preparefornewcall",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"prepareForOutput",id:"prepareforoutput",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"returnStoppedResponse",id:"returnstoppedresponse",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"createPrompt",id:"createprompt",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"deserialize",id:"deserialize",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"fromLLMAndTools",id:"fromllmandtools",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"validateTools",id:"validatetools",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-19",level:4}],o={toc:d},h="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents"},"agents"),".ZeroShotAgent"),(0,r.kt)("p",null,"Agent for the MRKL chain."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},(0,r.kt)("inlineCode",{parentName:"a"},"Agent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZeroShotAgent"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ZeroShotAgent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/agents.AgentInput"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentInput")))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L32"},"langchain/src/agents/mrkl/index.ts:32")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"allowedtools"},"allowedTools"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"allowedTools"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#allowedtools"},"allowedTools")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L33"},"langchain/src/agents/agent.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"llmchain"},"llmChain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"llmChain"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.LLMChain"},(0,r.kt)("inlineCode",{parentName:"a"},"LLMChain"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#llmchain"},"llmChain")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L31"},"langchain/src/agents/agent.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"returnvalues"},"returnValues"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"returnValues"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#returnvalues"},"returnValues")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L35"},"langchain/src/agents/agent.ts:35")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"inputkeys"},"inputKeys"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"inputKeys"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,"Agent.inputKeys"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L37"},"langchain/src/agents/agent.ts:37")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_agenttype"},"_","agentType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_agentType"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},'"zero-shot-react-description"')),(0,r.kt)("p",null,"Return the string type key uniquely identifying this class of agent."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"zero-shot-react-description"')),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#_agenttype"},"_agentType")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L36"},"langchain/src/agents/mrkl/index.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_stop"},"_","stop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_stop"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#_stop"},"_stop")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L116"},"langchain/src/agents/agent.ts:116")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"constructscratchpad"},"constructScratchPad"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"constructScratchPad"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseChatMessage")),"[]"),(0,r.kt)("p",null,"Construct a scratchpad to let the agent continue its thought process"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseChatMessage")),"[]"),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#constructscratchpad"},"constructScratchPad")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L130"},"langchain/src/agents/agent.ts:130")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extracttoolandinput"},"extractToolAndInput"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"extractToolAndInput"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"tool"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("p",null,"Extract tool and tool input from LLM output."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"tool"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#extracttoolandinput"},"extractToolAndInput")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L100"},"langchain/src/agents/mrkl/index.ts:100")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"finishtoolname"},"finishToolName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"finishToolName"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name of tool to use to terminate the chain."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#finishtoolname"},"finishToolName")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L123"},"langchain/src/agents/agent.ts:123")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"llmprefix"},"llmPrefix"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"llmPrefix"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Prefix to append the LLM call with."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#llmprefix"},"llmPrefix")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L44"},"langchain/src/agents/mrkl/index.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"observationprefix"},"observationPrefix"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"observationPrefix"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Prefix to append the observation with."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#observationprefix"},"observationPrefix")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L40"},"langchain/src/agents/mrkl/index.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"plan"},"plan"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"plan"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentAction"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("p",null,"Decide what to do given some input."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Steps the LLM has taken so far, along with observations from each.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"ChainValues"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"User inputs.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentAction"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("p",null,"Action specifying what tool to use."),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#plan"},"plan")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L182"},"langchain/src/agents/agent.ts:182")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preparefornewcall"},"prepareForNewCall"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"prepareForNewCall"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Prepare the agent for a new call, if needed"),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#preparefornewcall"},"prepareForNewCall")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L73"},"langchain/src/agents/agent.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepareforoutput"},"prepareForOutput"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"prepareForOutput"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_returnValues"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_steps"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("p",null,"Prepare the agent for output, if needed"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_returnValues")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#prepareforoutput"},"prepareForOutput")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L78"},"langchain/src/agents/agent.ts:78")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"returnstoppedresponse"},"returnStoppedResponse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"returnStoppedResponse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"earlyStoppingMethod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("p",null,"Return response when agent has been stopped due to max iterations"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"earlyStoppingMethod")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/agents#stoppingmethod"},(0,r.kt)("inlineCode",{parentName:"a"},"StoppingMethod")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"ChainValues")))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#returnstoppedresponse"},"returnStoppedResponse")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L192"},"langchain/src/agents/agent.ts:192")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createprompt"},"createPrompt"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"createPrompt"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tools"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"args?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},(0,r.kt)("inlineCode",{parentName:"a"},"PromptTemplate"))),(0,r.kt)("p",null,"Create prompt in the style of the zero shot agent."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of tools the agent will have access to, used to format the prompt.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/agents.internal#createpromptargs"},(0,r.kt)("inlineCode",{parentName:"a"},"CreatePromptArgs"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Arguments to create the prompt with.")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},(0,r.kt)("inlineCode",{parentName:"a"},"PromptTemplate"))),(0,r.kt)("h4",{id:"overrides-5"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#createprompt"},"createPrompt")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L67"},"langchain/src/agents/mrkl/index.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deserialize"},"deserialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ZeroShotAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ZeroShotAgent")),">"),(0,r.kt)("p",null,"Load an agent from a json-like object describing it."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ZeroShotAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ZeroShotAgent")),">"),(0,r.kt)("h4",{id:"overrides-6"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#deserialize"},"deserialize")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L120"},"langchain/src/agents/mrkl/index.ts:120")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromllmandtools"},"fromLLMAndTools"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromLLMAndTools"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"llm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tools"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"args?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ZeroShotAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ZeroShotAgent"))),(0,r.kt)("p",null,"Construct an agent from an LLM and a list of tools"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"llm")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/agents.internal#createpromptargs"},(0,r.kt)("inlineCode",{parentName:"a"},"CreatePromptArgs")))))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ZeroShotAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ZeroShotAgent"))),(0,r.kt)("h4",{id:"overrides-7"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#fromllmandtools"},"fromLLMAndTools")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L86"},"langchain/src/agents/mrkl/index.ts:86")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatetools"},"validateTools"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"validateTools"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tools"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Validate that appropriate tools are passed in"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool")),"[]")))),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-8"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},"Agent"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent#validatetools"},"validateTools")),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/mrkl/index.ts#L48"},"langchain/src/agents/mrkl/index.ts:48")))}m.isMDXComponent=!0}}]);