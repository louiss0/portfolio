import{j as x,c as i,p as c,k as u,q as s,x as p,l as g,y as h,r as j,f as k,F as f,z as m,A as C}from"./runtime-core.esm-bundler.7b7397f2.js";import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";const P=["Web App","Landing Page","Web Site"],S=x({__name:"ProjectCard",props:{title:{type:String,required:!0},url:{type:String,required:!0},slug:{type:String,required:!0},description:{type:String,required:!0},imageMetadata:{type:Object,required:!0}},setup(_,{expose:n}){n();const e={Link:(l,d)=>{const{href:t}=l,{slots:o}=d;return i("a",{class:"rounded-md px-3 py-1 inline-block shadow-sm shadow-slate-600 ",href:t},[o.default()])}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),w={"data-ring-box":"",class:"shadow-lg shadow-slate-200"},q={"data-content":"",class:"grid sm:grid-cols-[40%_auto]"},F={id:"image-wrapper"},A=["src","width","height","alt"],B={class:"flex flex-col justify-evenly gap-2 p-4"},L={class:"grid gap-2 md:gap-8 py-2 px-6"},M=["textContent"],N=["textContent"],O={id:"project-links",class:"text-xs capitalize px-4 py-2"},T={"data-content":"",class:"flex gap-4"};function V(_,n,r,e,l,d){return c(),u("figure",null,[s("div",w,[s("div",q,[s("div",F,[s("img",{class:"object-fill h-full",src:r.imageMetadata.src,width:r.imageMetadata.width,height:r.imageMetadata.height,alt:r.title},null,8,A)]),s("div",B,[s("div",L,[s("span",{class:"text-xl",textContent:p(r.title)},null,8,M),s("p",{class:"text-sm",textContent:p(r.description)},null,8,N)]),s("div",O,[s("div",T,[i(e.Link,{href:r.url},{default:g(()=>[h("Project")]),_:1},8,["href"]),i(e.Link,{href:`/project/${r.slug}`},{default:g(()=>[h("article  →")]),_:1},8,["href"])])])])])])])}const z=y(S,[["render",V]]),E=x({__name:"ProjectFilter",props:{projects:{type:Array,required:!0}},setup(_,{expose:n}){n();const{projects:r}=_,e=["All",...P],l=j("All"),d=k(()=>l.value==="All"?r:r.filter(a=>a.type===l.value)),t=({filterChoice:a},{emit:v})=>{return i("button",{class:["group relative","focus:outline-none hover:border-none","[&:is(:hover,:focus)]:text-slate-900 dark:[&:is(:hover,:focus)]:bg-slate-50  "],onClick:()=>v("filter-choice-sent",a)},[i("div",{"data-content":!0,class:"min-w-[9rem] py-2 px-6 md:py-3 md:px-9"},[i("span",null,[a])]),i(b,null,null)]);function b(){return i("div",{"data-position-box":!0,class:"absolute bottom-0 left-0 h-px w-full"},[i("div",{class:["bg-current h-full","transition-transform duration-200 ease-in","scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 "]},null)])}};t.props={filterChoice:{type:String,required:!0}},t.emits={"filter-choice-sent"(a){return typeof a=="string"}};const o={filterChoices:e,filter:l,filteredProjects:d,FilterButton:t,ProjectCard:z};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),W={class:"grid sm:grid-cols-2 lg:grid-cols-4"},D={class:"grid gap-2 lg:gap-2 lg:grid-cols-2"},G={key:1};function H(_,n,r,e,l,d){return c(),u(f,null,[s("div",W,[(c(),u(f,null,m(e.filterChoices,t=>i(e.FilterButton,{"filter-choice":t,onFilterChoiceSent:n[0]||(n[0]=o=>e.filter=o)},null,8,["filter-choice"])),64))]),s("div",D,[e.filteredProjects.length!==0?(c(!0),u(f,{key:0},m(e.filteredProjects,t=>(c(),C(e.ProjectCard,{description:t.description,key:t.title,slug:t.slug,title:t.title,url:t.url,"image-metadata":t.image},null,8,["description","slug","title","url","image-metadata"]))),128)):(c(),u("div",G," There are no "+p(e.filter)+"'s yet ",1))])],64)}const K=y(E,[["render",H]]);export{K as default};