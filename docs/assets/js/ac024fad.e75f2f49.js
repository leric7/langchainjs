"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6476],{6993:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var o=s(5773),r=(s(7378),s(5318)),n=s(6538);const d='import { UnstructuredLoader } from "langchain/document_loaders";\n\nexport const run = async () => {\n  const loader = new UnstructuredLoader(\n    "http://localhost:8000/general/v0.0.4/general",\n    "langchain/src/document_loaders/tests/example_data/example.txt"\n  );\n  const docs = await loader.load();\n  console.log({ docs });\n};\n',u={hide_table_of_contents:!0},a="Unstructured",l={unversionedId:"modules/indexes/document_loaders/examples/file_loaders/unstructured",id:"modules/indexes/document_loaders/examples/file_loaders/unstructured",title:"Unstructured",description:"This example covers how to use Unstructured to load files of many types. Unstructured currently supports loading of text files, powerpoints, html, pdfs, images, and more.",source:"@site/docs/modules/indexes/document_loaders/examples/file_loaders/unstructured.mdx",sourceDirName:"modules/indexes/document_loaders/examples/file_loaders",slug:"/modules/indexes/document_loaders/examples/file_loaders/unstructured",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/unstructured",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/unstructured.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Text files",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/text"},next:{title:"Web Loaders",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/web_loaders/"}},c={},i=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2}],p={toc:i},m="wrapper";function f(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unstructured"},"Unstructured"),(0,r.kt)("p",null,"This example covers how to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.unstructured.io"},"Unstructured")," to load files of many types. Unstructured currently supports loading of text files, powerpoints, html, pdfs, images, and more."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You can run Unstructured locally in your computer using Docker. To do so, you need to have Docker installed. You can find the instructions to install Docker ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8000:8000 -d --rm --name unstructured-api quay.io/unstructured-io/unstructured-api:latest --port 8000 --host 0.0.0.0\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Once Unstructured is running, you can use it to load files from your computer. You can use the following code to load a file from your computer."),(0,r.kt)(n.Z,{language:"typescript",mdxType:"CodeBlock"},d))}f.isMDXComponent=!0}}]);