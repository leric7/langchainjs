"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9726],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(5773),o=(n(7378),n(5318));const i={sidebar_position:2},r="Quickstart, using LLMs",l={unversionedId:"getting-started/guide-llm",id:"getting-started/guide-llm",title:"Quickstart, using LLMs",description:"This tutorial gives you a quick walkthrough about building an end-to-end language model application with LangChain.",source:"@site/docs/getting-started/guide-llm.mdx",sourceDirName:"getting-started",slug:"/getting-started/guide-llm",permalink:"/langchainjs/docs/getting-started/guide-llm",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/getting-started/guide-llm.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Setup and Installation",permalink:"/langchainjs/docs/getting-started/install"},next:{title:"Quickstart, using Chat Models",permalink:"/langchainjs/docs/getting-started/guide-chat"}},s={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Picking up a LLM",id:"picking-up-a-llm",level:2},{value:"Building a Language Model Application",id:"building-a-language-model-application",level:2},{value:"LLMs: Get Predictions from a Language Model",id:"llms-get-predictions-from-a-language-model",level:3},{value:"Prompt Templates: Manage Prompts for LLMs",id:"prompt-templates-manage-prompts-for-llms",level:3},{value:"Chains: Combine LLMs and Prompts in Multi-Step Workflows",id:"chains-combine-llms-and-prompts-in-multi-step-workflows",level:3},{value:"Agents: Dynamically Run Chains Based on User Input",id:"agents-dynamically-run-chains-based-on-user-input",level:3},{value:"Memory: Add State to Chains and Agents",id:"memory-add-state-to-chains-and-agents",level:3},{value:"Streaming",id:"streaming",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-using-llms"},"Quickstart, using LLMs"),(0,o.kt)("p",null,"This tutorial gives you a quick walkthrough about building an end-to-end language model application with LangChain."),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"To get started, follow the ",(0,o.kt)("a",{parentName:"p",href:"./install"},"installation instructions")," to install LangChain."),(0,o.kt)("h2",{id:"picking-up-a-llm"},"Picking up a LLM"),(0,o.kt)("p",null,"Using LangChain will usually require integrations with one or more model providers, data stores, apis, etc."),(0,o.kt)("p",null,"For this example, we will be using OpenAI's APIs, so no additional setup is required."),(0,o.kt)("h2",{id:"building-a-language-model-application"},"Building a Language Model Application"),(0,o.kt)("p",null,"Now that we have installed LangChain, we can start building our language model application."),(0,o.kt)("p",null,"LangChain provides many modules that can be used to build language model applications. Modules can be combined to create more complex applications, or be used individually for simple applications."),(0,o.kt)("h3",{id:"llms-get-predictions-from-a-language-model"},"LLMs: Get Predictions from a Language Model"),(0,o.kt)("p",null,"The most basic building block of LangChain is calling an LLM on some input. Let's walk through a simple example of how to do this. For this purpose, let's pretend we are building a service that generates a company name based on what the company makes."),(0,o.kt)("p",null,"In order to do this, we first need to import the LLM wrapper."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain";\n')),(0,o.kt)("p",null,"We will then need to set the environment variable for the OpenAI key. Three options here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We can do this by setting the value in a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file and use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv"},"dotenv")," package to read it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'OPENAI_API_KEY="..."\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Or we can export the environment variable with the following command in your shell:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY=sk-....\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Or we can do it when initializing the wrapper along with other arguments. In this example, we probably want the outputs to be MORE random, so we'll initialize it with a HIGH temperature.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const model = new OpenAI({ openAIApiKey: "sk-...", temperature: 0.9 });\n')),(0,o.kt)("p",null,"Once we have initialized the wrapper, we can now call it on some input!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = await model.call(\n  "What would be a good company name a company that makes colorful socks?"\n);\nconsole.log(res);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{ res: '\\n\\nFantasy Sockery' }\n")),(0,o.kt)("h3",{id:"prompt-templates-manage-prompts-for-llms"},"Prompt Templates: Manage Prompts for LLMs"),(0,o.kt)("p",null,"Calling an LLM is a great first step, but it's just the beginning. Normally when you use an LLM in an application, you are not sending user input directly to the LLM. Instead, you are probably taking user input and constructing a prompt, and then sending that to the LLM."),(0,o.kt)("p",null,"For example, in the previous example, the text we passed in was hardcoded to ask for a name for a company that made colorful socks. In this imaginary service, what we would want to do is take only the user input describing what the company does, and then format the prompt with that information."),(0,o.kt)("p",null,"This is easy to do with LangChain!"),(0,o.kt)("p",null,"First lets define the prompt template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { PromptTemplate } from "langchain/prompts";\n\nconst template = "What is a good name for a company that makes {product}?";\nconst prompt = new PromptTemplate({\n  template: template,\n  inputVariables: ["product"],\n});\n')),(0,o.kt)("p",null,"Let's now see how this works! We can call the ",(0,o.kt)("inlineCode",{parentName:"p"},".format")," method to format it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = await prompt.format({ product: "colorful socks" });\nconsole.log(res);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{ res: 'What is a good name for a company that makes colorful socks?' }\n")),(0,o.kt)("h3",{id:"chains-combine-llms-and-prompts-in-multi-step-workflows"},"Chains: Combine LLMs and Prompts in Multi-Step Workflows"),(0,o.kt)("p",null,"Up until now, we've worked with the PromptTemplate and LLM primitives by themselves. But of course, a real application is not just one primitive, but rather a combination of them."),(0,o.kt)("p",null,"A chain in LangChain is made up of links, which can be either primitives like LLMs or other chains."),(0,o.kt)("p",null,"The most core type of chain is an LLMChain, which consists of a PromptTemplate and an LLM."),(0,o.kt)("p",null,"Extending the previous example, we can construct an LLMChain which takes user input, formats it with a PromptTemplate, and then passes the formatted response to an LLM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain/llms";\nimport { PromptTemplate } from "langchain/prompts";\n\nconst model = new OpenAI({ temperature: 0.9 });\nconst template = "What is a good name for a company that makes {product}?";\nconst prompt = new PromptTemplate({\n  template: template,\n  inputVariables: ["product"],\n});\n')),(0,o.kt)("p",null,"We can now create a very simple chain that will take user input, format the prompt with it, and then send it to the LLM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { LLMChain } from "langchain/chains";\n\nconst chain = new LLMChain({ llm: model, prompt: prompt });\n')),(0,o.kt)("p",null,"Now we can run that chain only specifying the product!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = await chain.call({ product: "colorful socks" });\nconsole.log(res);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{ res: { text: '\\n\\nColorfulCo Sockery.' } }\n")),(0,o.kt)("p",null,"There we go! There's the first chain - an LLM Chain. This is one of the simpler types of chains, but understanding how it works will set you up well for working with more complex chains."),(0,o.kt)("h3",{id:"agents-dynamically-run-chains-based-on-user-input"},"Agents: Dynamically Run Chains Based on User Input"),(0,o.kt)("p",null,"So far the chains we've looked at run in a predetermined order."),(0,o.kt)("p",null,"Agents no longer do: they use an LLM to determine which actions to take and in what order. An action can either be using a tool and observing its output, or returning to the user."),(0,o.kt)("p",null,"When used correctly agents can be extremely powerful. In this tutorial, we show you how to easily use agents through the simplest, highest level API."),(0,o.kt)("p",null,"In order to load agents, you should understand the following concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tool: A function that performs a specific duty. This can be things like: Google Search, Database lookup, code REPL, other chains. The interface for a tool is currently a function that is expected to have a string as an input, with a string as an output."),(0,o.kt)("li",{parentName:"ul"},"LLM: The language model powering the agent."),(0,o.kt)("li",{parentName:"ul"},"Agent: The agent to use. This should be a string that references a support agent class. Because this tutorial focuses on the simplest, highest level API, this only covers using the standard supported agents.")),(0,o.kt)("p",null,"For this example, you'll need to set the SerpAPI environment variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SERPAPI_API_KEY="..."\n')),(0,o.kt)("p",null,"Now we can get started!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain";\nimport { initializeAgentExecutor } from "langchain/agents";\nimport { SerpAPI, Calculator } from "langchain/tools";\n\nconst model = new OpenAI({ temperature: 0 });\nconst tools = [new SerpAPI(), new Calculator()];\n\nconst executor = await initializeAgentExecutor(\n  tools,\n  model,\n  "zero-shot-react-description"\n);\nconsole.log("Loaded agent.");\n\nconst input =\n  "Who is Olivia Wilde\'s boyfriend?" +\n  " What is his current age raised to the 0.23 power?";\nconsole.log(`Executing with input "${input}"...`);\n\nconst result = await executor.call({ input });\n\nconsole.log(`Got output ${result.output}`);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"langchain-examples:start: Executing with input \"Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?\"...\nlangchain-examples:start: Got output Olivia Wilde's boyfriend is Jason Sudeikis, and his current age raised to the 0.23 power is 2.4242784855673896.\n")),(0,o.kt)("h3",{id:"memory-add-state-to-chains-and-agents"},"Memory: Add State to Chains and Agents"),(0,o.kt)("p",null,'So far, all the chains and agents we\'ve gone through have been stateless. But often, you may want a chain or agent to have some concept of "memory" so that it may remember information about its previous interactions. The clearest and simple example of this is when designing a chatbot - you want it to remember previous messages so it can use context from that to have a better conversation. This would be a type of "short-term memory". On the more complex side, you could imagine a chain/agent remembering key pieces of information over time - this would be a form of "long-term memory".'),(0,o.kt)("p",null,"LangChain provides several specially created chains just for this purpose. This section walks through using one of those chains (the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationChain"),")."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationChain")," has a simple type of memory that remembers all previous inputs/outputs and adds them to the context that is passed. Let's take a look at using this chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain/llms";\nimport { BufferMemory } from "langchain/memory";\nimport { ConversationChain } from "langchain/chains";\n\nconst model = new OpenAI({});\nconst memory = new BufferMemory();\nconst chain = new ConversationChain({ llm: model, memory: memory });\nconst res1 = await chain.call({ input: "Hi! I\'m Jim." });\nconsole.log(res1);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{response: " Hi Jim! It\'s nice to meet you. My name is AI. What would you like to talk about?"}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res2 = await chain.call({ input: "What\'s my name?" });\nconsole.log(res2);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{response: ' You said your name is Jim. Is there anything else you would like to talk about?'}\n")),(0,o.kt)("h2",{id:"streaming"},"Streaming"),(0,o.kt)("p",null,"You can also use the streaming API to get words streamed back to you as they are generated. This is useful for eg. chatbots, where you want to show the user what is being generated as it is being generated. Note: OpenAI as of this writing does not support ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenUsage")," reporting while streaming is enabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const chat = new OpenAI({\n  streaming: true,\n  callbackManager: CallbackManager.fromHandlers({\n    async handleLLMNewToken(token: string) {\n      console.log(token);\n    },\n  }),\n});\n\nconst response = await chat.call("Write me a song about sparkling water.");\nconsole.log(response);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Verse 1\n\nOn a hot summer day, I'm looking for a treat\nI'm thirsty for something cool and sweet\nWhen I open up the fridge, what do I see?\nA bottle of sparkling water, it's calling out to me\n\nChorus\n\nSparkling water, it's so refreshing\nIt quenches my thirst, it's the perfect thing\nIt's so light and bubbly, it's like a dream\nAnd I'm loving every sip of sparkling water\n\nVerse 2\n\nI take it out of the fridge and pour some in a glass\nIt's so light and bubbly, I can feel the fizz\nI take a sip and suddenly I'm revived\nThis sparkling water's just what I need to survive\n\nChorus\n\nSparkling water, it's so refreshing\nIt quenches my thirst, it's the perfect thing\nIt's so light and bubbly, it's like a dream\nAnd I'm loving every sip of sparkling water\n\nBridge\n\nIt's like drinking sunshine between my hands\nIt's so light and bubbly, I'm in a trance\nThe summer heat's no match for sparkling water\nIt's my favorite\n")))}m.isMDXComponent=!0}}]);