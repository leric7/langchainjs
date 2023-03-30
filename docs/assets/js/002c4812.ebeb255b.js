"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1087],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(5773),o=(n(7378),n(5318));const a={sidebar_label:"Getting Started",hide_table_of_contents:!0},s="Getting Started: Agent Executors",i={unversionedId:"modules/agents/executor/getting-started",id:"modules/agents/executor/getting-started",title:"Getting Started: Agent Executors",description:"Agents use an LLM to determine which actions to take and in what order. An action can either be using a tool and observing its output, or returning to the user.",source:"@site/docs/modules/agents/executor/getting-started.md",sourceDirName:"modules/agents/executor",slug:"/modules/agents/executor/getting-started",permalink:"/langchainjs/docs/modules/agents/executor/getting-started",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/agents/executor/getting-started.md",tags:[],version:"current",frontMatter:{sidebar_label:"Getting Started",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Agent Executors",permalink:"/langchainjs/docs/modules/agents/executor/"},next:{title:"Personal Assistants",permalink:"/langchainjs/docs/use_cases/personal_assistants"}},l={},c=[],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-agent-executors"},"Getting Started: Agent Executors"),(0,o.kt)("p",null,"Agents use an LLM to determine which actions to take and in what order. An action can either be using a tool and observing its output, or returning to the user."),(0,o.kt)("p",null,"When used correctly agents can be extremely powerful. In this tutorial, we show you how to easily use agents through the simplest, highest level API."),(0,o.kt)("p",null,"In order to load agents, you should understand the following concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tool: A function that performs a specific duty. This can be things like: Google Search, Database lookup, code REPL, other chains. The interface for a tool is currently a function that is expected to have a string as an input, with a string as an output."),(0,o.kt)("li",{parentName:"ul"},"LLM: The language model powering the agent."),(0,o.kt)("li",{parentName:"ul"},"Agent: The agent to use. This should be a string that references a support agent class. Because this notebook focuses on the simplest, highest level API, this only covers using the standard supported agents.")),(0,o.kt)("p",null,"For this example, you'll need to set the SerpAPI environment variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SERPAPI_API_KEY="..."\n')),(0,o.kt)("p",null,"Now we can get started!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain";\nimport { initializeAgentExecutor } from "langchain/agents";\nimport { SerpAPI, Calculator } from "langchain/tools";\n\nconst model = new OpenAI({ temperature: 0 });\nconst tools = [new SerpAPI(), new Calculator()];\n\nconst executor = await initializeAgentExecutor(\n  tools,\n  model,\n  "zero-shot-react-description"\n);\nconsole.log("Loaded agent.");\n\nconst input =\n  "Who is Olivia Wilde\'s boyfriend?" +\n  " What is his current age raised to the 0.23 power?";\nconsole.log(`Executing with input "${input}"...`);\n\nconst result = await executor.call({ input });\n\nconsole.log(`Got output ${result.output}`);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"langchain-examples:start: Executing with input \"Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?\"...\nlangchain-examples:start: Got output Olivia Wilde's boyfriend is Jason Sudeikis, and his current age raised to the 0.23 power is 2.4242784855673896.\n")))}g.isMDXComponent=!0}}]);