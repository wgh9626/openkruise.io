"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9330],{3905:function(e,o,t){t.d(o,{Zo:function(){return p},kt:function(){return k}});var l=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,l,n=function(e,o){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=l.createContext({}),i=function(e){var o=l.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},p=function(e){var o=i(e.components);return l.createElement(d.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return l.createElement(l.Fragment,{},o)}},c=l.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(t),k=n,m=c["".concat(d,".").concat(k)]||c[k]||u[k]||a;return t?l.createElement(m,r(r({ref:o},p),{},{components:t})):l.createElement(m,r({ref:o},p))}));function k(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,r=new Array(a);r[0]=c;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var i=2;i<a;i++)r[i]=t[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8954:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return i},assets:function(){return p},toc:function(){return u},default:function(){return k}});var l=t(3117),n=t(102),a=(t(7294),t(3905)),r=["components"],s={slug:"workloadspread",title:"OpenKruise v0.10.0 \u65b0\u7279\u6027WorkloadSpread\u89e3\u8bfb",authors:["BoltsLei"],tags:["workload","workloadspread","multi-domain"]},d=void 0,i={permalink:"/zh/blog/workloadspread",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-09-22-workloadspread.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-09-22-workloadspread.md",title:"OpenKruise v0.10.0 \u65b0\u7279\u6027WorkloadSpread\u89e3\u8bfb",description:"\u80cc\u666f",date:"2021-09-22T00:00:00.000Z",formattedDate:"2021\u5e749\u670822\u65e5",tags:[{label:"workload",permalink:"/zh/blog/tags/workload"},{label:"workloadspread",permalink:"/zh/blog/tags/workloadspread"},{label:"multi-domain",permalink:"/zh/blog/tags/multi-domain"}],readingTime:16.885,truncated:!1,authors:[{name:"GuangLei Cao",title:"Contributor of OpenKruise",url:"https://github.com/BoltsLei",imageURL:"https://github.com/BoltsLei.png",key:"BoltsLei"}],prevItem:{title:"OpenKruise v1.0\uff1a\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u8fbe\u5230\u65b0\u7684\u9ad8\u5cf0",permalink:"/zh/blog/openkruise-1.0"},nextItem:{title:"OpenKruise 0.10.0\uff1a\u65b0\u589e\u5e94\u7528\u5f39\u6027\u62d3\u6251\u7ba1\u7406\u3001\u5e94\u7528\u9632\u62a4\u7b49\u80fd\u529b",permalink:"/zh/blog/openkruise-0.10.0"}},p={authorsImageUrls:[void 0]},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"WorkloadSpread \u4ecb\u7ecd",id:"workloadspread-\u4ecb\u7ecd",children:[],level:2},{value:"\u73b0\u6709\u65b9\u6848\u5bf9\u6bd4",id:"\u73b0\u6709\u65b9\u6848\u5bf9\u6bd4",children:[{value:"Pod Topology Spread Constrains",id:"pod-topology-spread-constrains",children:[{value:"UnitedDeployment",id:"uniteddeployment",children:[],level:4}],level:3}],level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",children:[{value:"1. \u57fa\u7840\u8282\u70b9\u6c60\u81f3\u591a\u90e8\u7f72100\u4e2a\u526f\u672c\uff0c\u5269\u4f59\u7684\u90e8\u7f72\u5230\u5f39\u6027\u8282\u70b9\u6c60\u3002",id:"1-\u57fa\u7840\u8282\u70b9\u6c60\u81f3\u591a\u90e8\u7f72100\u4e2a\u526f\u672c\u5269\u4f59\u7684\u90e8\u7f72\u5230\u5f39\u6027\u8282\u70b9\u6c60",children:[],level:3},{value:"2. \u4f18\u5148\u90e8\u7f72\u5230\u57fa\u7840\u8282\u70b9\u6c60\uff0c\u8d44\u6e90\u4e0d\u8db3\u518d\u90e8\u7f72\u5230\u5f39\u6027\u8d44\u6e90\u6c60\u3002",id:"2-\u4f18\u5148\u90e8\u7f72\u5230\u57fa\u7840\u8282\u70b9\u6c60\u8d44\u6e90\u4e0d\u8db3\u518d\u90e8\u7f72\u5230\u5f39\u6027\u8d44\u6e90\u6c60",children:[],level:3},{value:"3. \u6253\u6563\u52303\u4e2azone\uff0c\u6bd4\u4f8b\u5206\u522b\u4e3a1:1:3",id:"3-\u6253\u6563\u52303\u4e2azone\u6bd4\u4f8b\u5206\u522b\u4e3a113",children:[],level:3},{value:"4. workload\u5728\u4e0d\u540cCPU Arch\u4e0a\u914d\u7f6e\u4e0d\u540c\u7684\u8d44\u6e90\u914d\u989d",id:"4-workload\u5728\u4e0d\u540ccpu-arch\u4e0a\u914d\u7f6e\u4e0d\u540c\u7684\u8d44\u6e90\u914d\u989d",children:[],level:3}],level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[{value:"1. subset\u4f18\u5148\u7ea7\u4e0e\u526f\u672c\u6570\u91cf\u63a7\u5236",id:"1-subset\u4f18\u5148\u7ea7\u4e0e\u526f\u672c\u6570\u91cf\u63a7\u5236",children:[],level:3},{value:"2. \u5982\u4f55\u63a7\u5236\u7f29\u5bb9\u4f18\u5148\u7ea7\uff1f",id:"2-\u5982\u4f55\u63a7\u5236\u7f29\u5bb9\u4f18\u5148\u7ea7",children:[],level:3},{value:"3. \u6570\u91cf\u63a7\u5236",id:"3-\u6570\u91cf\u63a7\u5236",children:[{value:"3.1 \u89e3\u51b3\u5e76\u53d1\u4e00\u81f4\u6027\u95ee\u9898",id:"31-\u89e3\u51b3\u5e76\u53d1\u4e00\u81f4\u6027\u95ee\u9898",children:[],level:4},{value:"3.2 \u89e3\u51b3\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898",id:"32-\u89e3\u51b3\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898",children:[],level:4}],level:3},{value:"4. \u81ea\u9002\u5e94\u8c03\u5ea6\u80fd\u529b",id:"4-\u81ea\u9002\u5e94\u8c03\u5ea6\u80fd\u529b",children:[],level:3}],level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[],level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[],level:2}],c={toc:u};function k(e){var o=e.components,s=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},c,s,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"Workload\u5206\u5e03\u5728\u4e0d\u540czone\uff0c\u4e0d\u540c\u7684\u786c\u4ef6\u7c7b\u578b\uff0c\u751a\u81f3\u662f\u4e0d\u540c\u7684\u96c6\u7fa4\u548c\u4e91\u5382\u5546\u5df2\u7ecf\u662f\u4e00\u4e2a\u975e\u5e38\u666e\u904d\u7684\u9700\u6c42\u3002\u8fc7\u53bb\u4e00\u822c\u53ea\u80fd\u5c06\u4e00\u4e2a\u5e94\u7528\u62c6\u5206\u4e3a\u591a\u4e2a workload\uff08\u6bd4\u5982 Deployment\uff09\u6765\u90e8\u7f72\uff0c\u7531SRE\u56e2\u961f\u624b\u5de5\u7ba1\u7406\u6216\u8005\u5bf9PaaS \u5c42\u6df1\u5ea6\u5b9a\u5236\uff0c\u6765\u652f\u6301\u5bf9\u4e00\u4e2a\u5e94\u7528\u591a\u4e2a workload \u7684\u7cbe\u7ec6\u5316\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u8fdb\u4e00\u6b65\u6765\u8bf4\uff0c\u5728\u5e94\u7528\u90e8\u7f72\u7684\u573a\u666f\u4e0b\u6709\u7740\u591a\u79cd\u591a\u6837\u7684\u62d3\u6251\u6253\u6563\u4ee5\u53ca\u5f39\u6027\u7684\u8bc9\u6c42\u3002\u5176\u4e2d\u6700\u5e38\u89c1\u5c31\u662f\u6309\u67d0\u79cd\u6216\u591a\u79cd\u62d3\u6251\u7ef4\u5ea6\u6253\u6563\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u90e8\u7f72\u9700\u8981\u6309 node \u7ef4\u5ea6\u6253\u6563\uff0c\u907f\u514d\u5806\u53e0\uff08\u63d0\u9ad8\u5bb9\u707e\u80fd\u529b\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u90e8\u7f72\u9700\u8981\u6309 AZ\uff08available zone\uff09\u7ef4\u5ea6\u6253\u6563\uff08\u63d0\u9ad8\u5bb9\u707e\u80fd\u529b\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6309 zone \u6253\u6563\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u5728\u4e0d\u540c zone \u4e2d\u90e8\u7f72\u7684\u6bd4\u4f8b\u6570\u3002")),(0,a.kt)("p",null,"\u968f\u7740\u4e91\u539f\u751f\u5728\u56fd\u5185\u5916\u7684\u8fc5\u901f\u666e\u53ca\u843d\u5730\uff0c\u5e94\u7528\u5bf9\u4e8e\u5f39\u6027\u7684\u9700\u6c42\u4e5f\u8d8a\u6765\u8d8a\u591a\u3002\u5404\u516c\u6709\u4e91\u5382\u5546\u9646\u7eed\u63a8\u51fa\u4e86Serverless\u5bb9\u5668\u670d\u52a1\u6765\u652f\u6491\u5f39\u6027\u90e8\u7f72\u573a\u666f\uff0c\u5982\u963f\u91cc\u4e91\u7684\u5f39\u6027\u5bb9\u5668\u670d\u52a1ECI\uff0cAWS\u7684Fragate\u5bb9\u5668\u670d\u52a1\u7b49\u3002\u4ee5ECI\u4e3a\u4f8b\uff0cECI\u53ef\u4ee5\u901a\u8fc7Virtual Kubelet\u5bf9\u63a5Kubernetes\u7cfb\u7edf\uff0c\u7ed9\u4e88Pod\u4e00\u5b9a\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u8c03\u5ea6\u5230virtual-node\u80cc\u540e\u7684ECI\u96c6\u7fa4\u3002\u603b\u7ed3\u4e00\u4e9b\u5e38\u89c1\u7684\u5f39\u6027\u8bc9\u6c42\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4f18\u5148\u90e8\u7f72\u5230\u81ea\u6709\u96c6\u7fa4\uff0c\u8d44\u6e90\u4e0d\u8db3\u65f6\u518d\u90e8\u7f72\u5230\u5f39\u6027\u96c6\u7fa4\u3002\u7f29\u5bb9\u65f6\uff0c\u4f18\u5148\u4ece\u5f39\u6027\u8282\u70b9\u7f29\u5bb9\u4ee5\u8282\u7701\u6210\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u81ea\u5df1\u89c4\u5212\u57fa\u7840\u8282\u70b9\u6c60\u548c\u5f39\u6027\u8282\u70b9\u6c60\u3002\u5e94\u7528\u90e8\u7f72\u65f6\u9700\u8981\u56fa\u5b9a\u6570\u91cf\u6216\u6bd4\u4f8b\u7684 Pod \u90e8\u7f72\u5728\u57fa\u7840\u8282\u70b9\u6c60\uff0c\u5176\u4f59\u7684\u90fd\u6269\u5230\u5f39\u6027\u8282\u70b9\u6c60\u3002")),(0,a.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e9b\u9700\u6c42\uff0cOpenKruise\u5728 v0.10.0 \u7248\u672c\u4e2d\u65b0\u589e\u4e86 WorkloadSpread \u7279\u6027\u3002\u76ee\u524d\u5b83\u652f\u6301\u914d\u5408 Deployment\u3001ReplicaSet\u3001CloneSet \u8fd9\u4e9b workload \uff0c\u6765\u7ba1\u7406\u5b83\u4eec\u4e0b\u5c5e Pod \u7684\u5206\u533a\u90e8\u7f72\u4e0e\u5f39\u6027\u4f38\u7f29\u3002\u4e0b\u6587\u4f1a\u6df1\u5165\u4ecb\u7ecdWorkloadSpread\u7684\u5e94\u7528\u573a\u666f\u548c\u5b9e\u73b0\u539f\u7406\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4e86\u89e3\u8be5\u7279\u6027\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"workloadspread-\u4ecb\u7ecd"},"WorkloadSpread \u4ecb\u7ecd"),(0,a.kt)("p",null,"\u8be6\u7ec6\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/workloadspread"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cWorkloadSpread\u80fd\u591f\u5c06workload\u6240\u5c5e\u7684Pod\u6309\u4e00\u5b9a\u89c4\u5219\u5206\u5e03\u5230\u4e0d\u540c\u7c7b\u578b\u7684Node\u8282\u70b9\u4e0a\uff0c\u80fd\u591f\u540c\u65f6\u6ee1\u8db3\u4e0a\u8ff0\u7684\u6253\u6563\u4e0e\u5f39\u6027\u573a\u666f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u73b0\u6709\u65b9\u6848\u5bf9\u6bd4"},"\u73b0\u6709\u65b9\u6848\u5bf9\u6bd4"),(0,a.kt)("p",null,"\u7b80\u5355\u5bf9\u6bd4\u4e00\u4e9b\u793e\u533a\u5df2\u6709\u7684\u65b9\u6848\u3002"),(0,a.kt)("h3",{id:"pod-topology-spread-constrains"},"Pod Topology Spread Constrains"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"Pod topology spread constraints")," \u662fKubernetes\u793e\u533a\u63d0\u4f9b\u7684\u65b9\u6848\uff0c\u53ef\u4ee5\u5b9a\u4e49\u6309 topology key \u7684\u6c34\u5e73\u6253\u6563\u3002\u7528\u6237\u5728\u5b9a\u4e49\u5b8c\u540e\uff0c\u8c03\u5ea6\u5668\u4f1a\u4f9d\u636e\u914d\u7f6e\u9009\u62e9\u7b26\u5408\u5206\u5e03\u6761\u4ef6\u7684node\u3002"),(0,a.kt)("p",null,"\u7531\u4e8ePodTopologySpread\u66f4\u591a\u7684\u662f\u5747\u5300\u6253\u6563\uff0c\u65e0\u6cd5\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u5206\u533a\u6570\u91cf\u4ee5\u53ca\u6bd4\u4f8b\u914d\u7f6e\uff0c\u4e14\u7f29\u5bb9\u65f6\u4f1a\u7834\u574f\u5206\u5e03\u3002WorkloadSpread\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5404\u4e2a\u5206\u533a\u7684\u6570\u91cf\uff0c\u5e76\u4e14\u7ba1\u7406\u7740\u7f29\u5bb9\u7684\u987a\u5e8f\u3002\u56e0\u6b64\u5728\u4e00\u4e9b\u573a\u666f\u4e0b\u53ef\u4ee5\u907f\u514dPodTopologySpread\u7684\u4e0d\u8db3\u3002"),(0,a.kt)("h4",{id:"uniteddeployment"},"UnitedDeployment"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/uniteddeployment"},"UnitedDeployment")," \u662fKruise\u793e\u533a\u63d0\u4f9b\u7684\u65b9\u6848\uff0c\u901a\u8fc7\u521b\u5efa\u548c\u7ba1\u7406\u591a\u4e2a workload \u7ba1\u7406\u591a\u4e2a\u533a\u57df\u4e0b\u7684 Pod\u3002"),(0,a.kt)("p",null,"UnitedDeployment\u975e\u5e38\u597d\u7684\u652f\u6301\u4e86\u6253\u6563\u4e0e\u5f39\u6027\u7684\u9700\u6c42\uff0c\u4e0d\u8fc7\u5b83\u662f\u4e00\u4e2a\u5168\u65b0\u7684workload\uff0c\u7528\u6237\u7684\u4f7f\u7528\u548c\u8fc1\u79fb\u6210\u672c\u4f1a\u6bd4\u8f83\u9ad8\u3002\u800cWorkloadSpread\u662f\u4e00\u79cd\u8f7b\u91cf\u5316\u7684\u65b9\u6848\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5e76\u5173\u8054\u5230workload\u5373\u53ef\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4f1a\u5217\u4e3e\u4e00\u4e9bWorkloadSpread\u7684\u5e94\u7528\u573a\u666f\uff0c\u7ed9\u51fa\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u5e2e\u52a9\u5927\u5bb6\u5feb\u901f\u4e86\u89e3WorkloadSpread\u7684\u80fd\u529b\u3002"),(0,a.kt)("h3",{id:"1-\u57fa\u7840\u8282\u70b9\u6c60\u81f3\u591a\u90e8\u7f72100\u4e2a\u526f\u672c\u5269\u4f59\u7684\u90e8\u7f72\u5230\u5f39\u6027\u8282\u70b9\u6c60"},"1. \u57fa\u7840\u8282\u70b9\u6c60\u81f3\u591a\u90e8\u7f72100\u4e2a\u526f\u672c\uff0c\u5269\u4f59\u7684\u90e8\u7f72\u5230\u5f39\u6027\u8282\u70b9\u6c60\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"case-1",src:t(4495).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"subsets:\n- name: subset-normal\n  maxReplicas: 100\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - normal\n- name: subset-elastic #\u526f\u672c\u6570\u91cf\u4e0d\u9650\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - elastic\n")),(0,a.kt)("p",null,"\u5f53workload\u5c11\u4e8e100\u526f\u672c\u65f6\uff0c\u5168\u90e8\u90e8\u7f72\u5230normal\u8282\u70b9\u6c60\uff0c\u8d85\u8fc7100\u4e2a\u90e8\u7f72\u5230elastic\u8282\u70b9\u6c60\u3002\u7f29\u5bb9\u65f6\u4f1a\u4f18\u5148\u5220\u9664elastic\u8282\u70b9\u4e0a\u7684Pod\u3002"),(0,a.kt)("p",null,"\u7531\u4e8eWorkloadSpread\u4e0d\u4fb5\u5165workload\uff0c\u53ea\u662f\u9650\u5236\u4f4f\u4e86workload\u7684\u5206\u5e03\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u7ed3\u5408HPA\u6839\u636e\u8d44\u6e90\u8d1f\u8f7d\u52a8\u6001\u8c03\u6574\u526f\u672c\u6570\uff0c\u8fd9\u6837\u5f53\u4e1a\u52a1\u9ad8\u5cf0\u65f6\u4f1a\u81ea\u52a8\u8c03\u5ea6\u5230elastic\u8282\u70b9\u4e0a\u53bb\uff0c\u4e1a\u52a1\u4f4e\u5cf0\u65f6\u4f1a\u4f18\u5148\u91ca\u653eelastic\u8282\u70b9\u6c60\u4e0a\u7684\u8d44\u6e90\u3002"),(0,a.kt)("h3",{id:"2-\u4f18\u5148\u90e8\u7f72\u5230\u57fa\u7840\u8282\u70b9\u6c60\u8d44\u6e90\u4e0d\u8db3\u518d\u90e8\u7f72\u5230\u5f39\u6027\u8d44\u6e90\u6c60"},"2. \u4f18\u5148\u90e8\u7f72\u5230\u57fa\u7840\u8282\u70b9\u6c60\uff0c\u8d44\u6e90\u4e0d\u8db3\u518d\u90e8\u7f72\u5230\u5f39\u6027\u8d44\u6e90\u6c60\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"case-2",src:t(688).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scheduleStrategy:\n  type: Adaptive\n  adaptive:\n    rescheduleCriticalSeconds: 30\n    disableSimulationSchedule: false\nsubsets:\n- name: subset-normal #\u526f\u672c\u6570\u91cf\u4e0d\u9650\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - normal\n- name: subset-elastic #\u526f\u672c\u6570\u91cf\u4e0d\u9650\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: app.deploy/zone\n      operator: In\n      values:\n      - elastic\n")),(0,a.kt)("p",null,"\u4e24\u4e2asubset\u90fd\u6ca1\u6709\u526f\u672c\u6570\u91cf\u9650\u5236\uff0c\u4e14\u542f\u7528Adptive\u8c03\u5ea6\u7b56\u7565\u7684\u6a21\u62df\u8c03\u5ea6\u548cReschedule\u80fd\u529b\u3002\u90e8\u7f72\u6548\u679c\u662f\u4f18\u5148\u90e8\u7f72\u5230normal\u8282\u70b9\u6c60\uff0cnormal\u8d44\u6e90\u4e0d\u8db3\u65f6\uff0cwebhook\u4f1a\u901a\u8fc7\u6a21\u62df\u8c03\u5ea6\u9009\u62e9elastic\u8282\u70b9\u3002\u5f53normal\u8282\u70b9\u6c60\u4e2d\u7684Pod\u5904\u4e8epending\u72b6\u6001\u8d85\u8fc730s\u9608\u503c, WorkloadSpread controller\u4f1a\u5220\u9664\u8be5Pod\u4ee5\u89e6\u53d1\u91cd\u5efa\uff0c\u65b0\u7684Pod\u4f1a\u88ab\u8c03\u5ea6\u5230elastic\u8282\u70b9\u6c60\u3002\u7f29\u5bb9\u65f6\u8fd8\u662f\u4f18\u5148\u7f29\u5bb9elastic\u8282\u70b9\u4e0a\u7684Pod\uff0c\u4e3a\u7528\u6237\u8282\u7701\u6210\u672c\u3002"),(0,a.kt)("h3",{id:"3-\u6253\u6563\u52303\u4e2azone\u6bd4\u4f8b\u5206\u522b\u4e3a113"},"3. \u6253\u6563\u52303\u4e2azone\uff0c\u6bd4\u4f8b\u5206\u522b\u4e3a1:1:3"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"case-3",src:t(1522).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"subsets:\n- name: subset-a\n  maxReplicas: 20%\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: topology.kubernetes.io/zone\n      operator: In\n      values:\n      - zone-a\n- name: subset-b\n  maxReplicas: 20%\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: topology.kubernetes.io/zone\n      operator: In\n      values:\n      - zone-b\n- name: subset-c\n  maxReplicas: 60%\n  requiredNodeSelectorTerm:\n    matchExpressions:\n    - key: topology.kubernetes.io/zone\n      operator: In\n      values:\n      - zone-c      \n")),(0,a.kt)("p",null,"\u6309\u7167\u4e0d\u540czone\u7684\u5b9e\u9645\u60c5\u51b5\uff0c\u5c06workload\u6309\u71671:1:3\u7684\u6bd4\u4f8b\u6253\u6563\u3002WorkloadSpread\u4f1a\u786e\u4fddworkload\u6269\u7f29\u5bb9\u65f6\u6309\u7167\u5b9a\u4e49\u7684\u6bd4\u4f8b\u5206\u5e03\u3002"),(0,a.kt)("h3",{id:"4-workload\u5728\u4e0d\u540ccpu-arch\u4e0a\u914d\u7f6e\u4e0d\u540c\u7684\u8d44\u6e90\u914d\u989d"},"4. workload\u5728\u4e0d\u540cCPU Arch\u4e0a\u914d\u7f6e\u4e0d\u540c\u7684\u8d44\u6e90\u914d\u989d"),(0,a.kt)("p",null,"workload\u5206\u5e03\u7684Node\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u786c\u4ef6\u914d\u7f6e\uff0cCPU\u67b6\u6784\u7b49\uff0c\u8fd9\u5c31\u53ef\u80fd\u9700\u8981\u4e3a\u4e0d\u540c\u7684subset\u5206\u522b\u5236\u5b9aPod\u914d\u7f6e\u3002\u8fd9\u4e9b\u914d\u7f6e\u53ef\u4ee5\u662flabel\u548cannotation\u7b49\u5143\u6570\u636e\u4e5f\u53ef\u4ee5\u662fPod\u5185\u90e8\u5bb9\u5668\u7684\u8d44\u6e90\u914d\u989d\uff0c\u73af\u5883\u53d8\u91cf\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"case-4",src:t(9945).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'subsets:\n- name: subset-x86-arch\n  # maxReplicas...\n  # requiredNodeSelectorTerm...\n  patch:\n    metadata:\n      labels:\n        resource.cpu/arch: x86\n    spec: \n      containers:\n      - name: main\n        resources:\n          limits:\n            cpu: "500m"\n            memory: "800Mi"\n- name: subset-arm-arch\n  # maxReplicas...\n  # requiredNodeSelectorTerm...\n  patch:\n    metadata:\n      labels:\n        resource.cpu/arch: arm\n    spec: \n      containers:\n      - name: main\n        resources:\n          limits:\n            cpu: "300m"\n            memory: "600Mi"\n')),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u6837\u4f8b\u4e2d\u6211\u4eec\u4e3a\u4e24\u4e2asubset\u7684Pod\u5206\u522bpatch\u4e86\u4e0d\u540c\u7684label, container resources\uff0c\u65b9\u4fbf\u6211\u4eec\u5bf9Pod\u505a\u66f4\u7cbe\u7ec6\u5316\u7684\u7ba1\u7406\u3002\u5f53workload\u7684Pod\u5206\u5e03\u5728\u4e0d\u540c\u7684CPU\u67b6\u6784\u7684\u8282\u70b9\u4e0a\uff0c\u914d\u7f6e\u4e0d\u540c\u7684\u8d44\u6e90\u914d\u989d\u4ee5\u66f4\u597d\u7684\u5229\u7528\u786c\u4ef6\u8d44\u6e90\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("p",null,"WorkloadSpread\u662f\u4e00\u4e2a\u7eaf\u65c1\u8def\u7684\u5f39\u6027/\u62d3\u6251\u7ba1\u63a7\u65b9\u6848\u3002\u7528\u6237\u53ea\u9700\u8981\u9488\u5bf9\u81ea\u5df1\u7684 Deployment/CloneSet/Job \u5bf9\u8c61\u521b\u5efa\u5bf9\u5e94\u7684 WorkloadSpread \u5373\u53ef\uff0c\u65e0\u9700\u5bf9 workload \u505a\u6539\u52a8\uff0c\u4e5f\u4e0d\u4f1a\u5bf9\u7528\u6237\u4f7f\u7528 workload \u9020\u6210\u989d\u5916\u6210\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"arch",src:t(7763).Z})),(0,a.kt)("h3",{id:"1-subset\u4f18\u5148\u7ea7\u4e0e\u526f\u672c\u6570\u91cf\u63a7\u5236"},"1. subset\u4f18\u5148\u7ea7\u4e0e\u526f\u672c\u6570\u91cf\u63a7\u5236"),(0,a.kt)("p",null,"WorkloadSpread \u4e2d\u5b9a\u4e49\u4e86\u591a\u4e2a subset\uff0c\u6bcf\u4e2asubset\u4ee3\u8868\u4e00\u4e2a\u903b\u8f91\u57df\u3002\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u7684\u6839\u636e\u8282\u70b9\u914d\u7f6e\uff0c\u786c\u4ef6\u7c7b\u578b\uff0czone\u7b49\u6765\u5212\u5206subset\u3002\u7279\u522b\u7684\uff0c\u6211\u4eec\u89c4\u5b9a\u4e86subset\u7684\u4f18\u5148\u7ea7\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6309\u5b9a\u4e49\u4ece\u524d\u5f80\u540e\u7684\u987a\u5e8f\uff0c\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u8d8a\u5148\u6269\u5bb9\uff1b\u4f18\u5148\u7ea7\u8d8a\u4f4e\uff0c\u8d8a\u5148\u7f29\u5bb9\u3002")),(0,a.kt)("h3",{id:"2-\u5982\u4f55\u63a7\u5236\u7f29\u5bb9\u4f18\u5148\u7ea7"},"2. \u5982\u4f55\u63a7\u5236\u7f29\u5bb9\u4f18\u5148\u7ea7\uff1f"),(0,a.kt)("p",null,"\u7406\u8bba\u4e0a\uff0cWorkloadSpread \u8fd9\u79cd\u65c1\u8def\u65b9\u6848\u662f\u65e0\u6cd5\u5e72\u6d89\u5230 workload \u63a7\u5236\u5668\u91cc\u7684\u7f29\u5bb9\u987a\u5e8f\u903b\u8f91\u7684\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u8fd9\u4e2a\u95ee\u9898\u5728\u8fd1\u671f\u5f97\u4ee5\u89e3\u51b3\u2014\u2014 \u7ecf\u8fc7\u4e00\u4ee3\u4ee3\u7528\u6237\u7684\u4e0d\u61c8\u52aa\u529b\uff08\u53cd\u9988\uff09\uff0ck8s \u4ece 1.21 \u7248\u672c\u5f00\u59cb\u4e3a ReplicaSet\uff08Deployment\uff09\u652f\u6301\u4e86\u901a\u8fc7\u8bbe\u7f6e controller.kubernetes.io/pod-deletion-cost \u8fd9\u4e2a annotation \u6765\u6307\u5b9a Pod \u7684 \u201c\u5220\u9664\u4ee3\u4ef7\u201d\uff1adeletion-cost \u8d8a\u9ad8\u7684 Pod\uff0c\u5220\u9664\u7684\u4f18\u5148\u7ea7\u8d8a\u4f4e\u3002"),(0,a.kt)("p",null,"\u800c Kruise \u4ece v0.9.0 \u7248\u672c\u5f00\u59cb\uff0c\u5c31\u5728 CloneSet \u4e2d\u652f\u6301\u4e86 deletion-cost \u7279\u6027\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0cWorkloadSpread controller\u901a\u8fc7\u8c03\u6574\u5404\u4e2a subset \u4e0b\u5c5e Pod \u7684 deletion-cost\uff0c\u6765\u63a7\u5236workload\u7684\u7f29\u5bb9\u987a\u5e8f\u3002"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u5bf9\u4e8e\u4ee5\u4e0b WorkloadSpread\uff0c\u4ee5\u53ca\u5b83\u5173\u8054\u7684 CloneSet \u6709 10 \u4e2a\u526f\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  subsets:\n  - name: subset-a\n    maxReplicas: 8\n  - name: subset-b # \u526f\u672c\u6570\u91cf\u4e0d\u9650\n")),(0,a.kt)("p",null,"\u5219 deletion-cost \u6570\u503c\u4ee5\u53ca\u5220\u9664\u987a\u5e8f\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 \u4e2a\u5728 subset-b\u4e0a\u7684 Pod\uff0cdeletion-cost \u4e3a 100\uff08\u4f18\u5148\u7f29\u5bb9\uff09 "),(0,a.kt)("li",{parentName:"ul"},"8 \u4e2a\u5728 subset-a\u4e0a\u7684 Pod\uff0cdeletion-cost \u4e3a 200\uff08\u6700\u540e\u7f29\u5bb9\uff09 ")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5982\u679c\u7528\u6237\u4fee\u6539\u4e86 WorkloadSpread \u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  subsets:\n  - name: subset-a\n    maxReplicas: 5 # 8-3, \n  - name: subset-b\n")),(0,a.kt)("p",null,"\u5219 workloadspread controller \u4f1a\u5c06\u5176\u4e2d 3 \u4e2a\u5728 susbet-a \u4e0a Pod \u7684 deletion-cost\u503c\u7531 200 \u6539\u4e3a -100\uff0c\u5219:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3 \u4e2a\u5728 subset-a \u4e0a\u7684 Pod\uff0cdeletion-cost \u4e3a -100\uff08\u4f18\u5148\u7f29\u5bb9\uff09 "),(0,a.kt)("li",{parentName:"ul"},"2 \u4e2a\u5728 subset-b \u4e0a\u7684 Pod\uff0cdeletion-cost \u4e3a 100\uff08\u5176\u6b21\u7f29\u5bb9\uff09 "),(0,a.kt)("li",{parentName:"ul"},"5 \u4e2a\u5728 subset-a \u4e0a\u7684 Pod\uff0cdeletion-cost \u4e3a 200\uff08\u6700\u540e\u7f29\u5bb9\uff09 ")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u80fd\u591f\u4f18\u5148\u7f29\u5bb9\u90a3\u4e9b\u8d85\u8fc7subset\u526f\u672c\u9650\u5236\u7684Pod\u4e86\uff0c\u5f53\u7136\u603b\u4f53\u8fd8\u662f\u6309\u7167subset\u5b9a\u4e49\u7684\u987a\u5e8f\u4ece\u540e\u5411\u524d\u7f29\u5bb9\u3002"),(0,a.kt)("h3",{id:"3-\u6570\u91cf\u63a7\u5236"},"3. \u6570\u91cf\u63a7\u5236"),(0,a.kt)("p",null,"\u5982\u4f55\u786e\u4fdd webhook \u4e25\u683c\u6309\u7167 subset \u4f18\u5148\u7ea7\u987a\u5e8f\u3001maxReplicas \u6570\u91cf\u6765\u6ce8\u5165Pod \u89c4\u5219\u662f WorkloadSpread \u5b9e\u73b0\u5c42\u9762\u7684\u91cd\u70b9\u96be\u9898\u3002"),(0,a.kt)("h4",{id:"31-\u89e3\u51b3\u5e76\u53d1\u4e00\u81f4\u6027\u95ee\u9898"},"3.1 \u89e3\u51b3\u5e76\u53d1\u4e00\u81f4\u6027\u95ee\u9898"),(0,a.kt)("p",null,"\u5728 workloadspread\u7684status \u4e2d\u6709\u5bf9\u5e94\u6bcf\u4e2a subset \u7684 status\uff0c\u5176\u4e2d missingReplicas \u5b57\u6bb5\u8868\u793a\u4e86\u8fd9\u4e2a subset \u9700\u8981\u7684 Pod \u6570\u91cf\uff0c-1 \u8868\u793a\u6ca1\u6709\u6570\u91cf\u9650\u5236\uff08subset \u6ca1\u6709\u914d\u7f6e maxReplicas\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  subsets:\n  - name: subset-a\n    maxReplicas: 1\n  - name: subset-b\n  # ...\nstatus:\n  subsetStatuses:\n  - name: subset-a\n    missingReplicas: 1\n  - name: subset-b\n    missingReplicas: -1\n  # ...\n")),(0,a.kt)("p",null,"\u5f53 webhook \u6536\u5230 Pod create\u8bf7\u6c42\u65f6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e subsetStatuses \u987a\u5e8f\u4f9d\u6b21\u627e missingReplicas \u5927\u4e8e 0 \u6216\u4e3a -1 \u7684 suitable subset\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230suitable subset\u540e\uff0c\u5982\u679c missingReplicas \u5927\u4e8e 0\uff0c\u5219\u5148\u51cf 1 \u5e76\u5c1d\u8bd5\u66f4\u65b0 workloadspread status\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u66f4\u65b0\u6210\u529f\uff0c\u5219\u5c06\u8be5 subset\u5b9a\u4e49\u7684\u89c4\u5219\u6ce8\u5165\u5230 pod \u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u66f4\u65b0\u5931\u8d25\uff0c\u5219\u91cd\u65b0 get \u8fd9\u4e2a workloadspread\u4ee5\u83b7\u53d6\u6700\u65b0\u7684status\uff0c\u5e76\u56de\u5230\u6b65\u9aa4 1\uff08\u6709\u4e00\u5b9a\u91cd\u8bd5\u6b21\u6570\u9650\u5236\uff09\u3002")),(0,a.kt)("p",null,"\u540c\u6837\uff0c\u5f53 webhook \u6536\u5230 Pod delete/eviction \u8bf7\u6c42\u65f6\uff0c\u5219\u5c06 missingReplicas \u52a0 1 \u5e76\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u6beb\u65e0\u7591\u95ee\uff0c\u6211\u4eec\u5728\u4f7f\u7528\u4e50\u89c2\u9501\u6765\u89e3\u51b3\u66f4\u65b0\u51b2\u7a81\u3002\u4f46\u662f\u4ec5\u4f7f\u7528\u4e50\u89c2\u9501\u662f\u4e0d\u5408\u9002\u7684\uff0c\u56e0\u4e3aworkload\u5728\u521b\u5efaPod\u65f6\u4f1a\u5e76\u884c\u521b\u5efa\u5927\u91cf\u7684Pod\uff0capiserver\u4f1a\u5728\u4e00\u77ac\u95f4\u53d1\u9001\u5f88\u591aPod create\u8bf7\u6c42\u5230webhook\uff0c\u5e76\u884c\u5904\u7406\u4f1a\u4ea7\u751f\u975e\u5e38\u591a\u7684\u51b2\u7a81\u3002\u5927\u5bb6\u90fd\u77e5\u9053\uff0c\u51b2\u7a81\u592a\u591a\u5c31\u4e0d\u9002\u5408\u4f7f\u7528\u4e50\u89c2\u9501\u4e86\uff0c\u56e0\u4e3a\u5b83\u89e3\u51b3\u51b2\u7a81\u7684\u91cd\u8bd5\u6210\u672c\u975e\u5e38\u9ad8\u3002\u4e3a\u6b64\u6211\u4eec\u8fd8\u52a0\u5165\u4e86workloadspread\u7ea7\u522b\u7684\u4e92\u65a5\u9501\uff0c\u5c06\u5e76\u884c\u5904\u7406\u9650\u5236\u4e3a\u4e32\u884c\u5904\u7406\u3002\u52a0\u5165\u4e92\u65a5\u9501\u8fd8\u6709\u65b0\u7684\u95ee\u9898\uff0c\u5373\u5f53\u524dgroutine\u83b7\u53d6\u9501\u540e\uff0c\u6781\u6709\u53ef\u80fd\u4eceinfromer\u4e2d\u62ff\u7684workloadspread\u4e0d\u662f\u6700\u65b0\u7684\uff0c\u8fd8\u662f\u4f1a\u51b2\u7a81\u3002\u6240\u4ee5groutine\u5728\u66f4\u65b0\u5b8cworkloadspread\u4e4b\u540e\uff0c\u5148\u5c06\u6700\u65b0\u7684workloadspread\u5bf9\u8c61\u7f13\u5b58\u8d77\u6765\u518d\u91ca\u653e\u9501\uff0c\u8fd9\u6837\u65b0\u7684groutine\u83b7\u53d6\u9501\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u62ff\u5230\u6700\u65b0\u7684workloadspread\u3002\u5f53\u7136\uff0c\u591a\u4e2awebhook\u7684\u60c5\u51b5\u4e0b\u8fd8\u662f\u9700\u8981\u7ed3\u5408\u4e50\u89c2\u9501\u673a\u5236\u6765\u89e3\u51b3\u51b2\u7a81\u3002"),(0,a.kt)("h4",{id:"32-\u89e3\u51b3\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898"},"3.2 \u89e3\u51b3\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0cmissingReplicas \u6570\u503c\u662f\u5426\u4ea4\u7531 webhook \u63a7\u5236\u5373\u53ef\u5462\uff1f\u7b54\u6848\u662f\u4e0d\u884c\uff0c\u56e0\u4e3a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"webhook \u6536\u5230\u7684 Pod create \u8bf7\u6c42\uff0c\u6700\u7ec8\u4e0d\u4e00\u5b9a\u771f\u7684\u80fd\u6210\u529f\uff08\u6bd4\u5982 Pod \u4e0d\u5408\u6cd5\uff0c\u6216\u5728\u540e\u7eed quota \u7b49\u6821\u9a8c\u73af\u8282\u5931\u8d25\u4e86\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"webhook \u6536\u5230\u7684 Pod delete/eviction \u8bf7\u6c42\uff0c\u6700\u7ec8\u4e5f\u4e0d\u4e00\u5b9a\u771f\u7684\u80fd\u6210\u529f\uff08\u6bd4\u5982\u540e\u7eed\u88ab PDB\u3001PUB \u7b49\u62e6\u622a\u4e86\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"K8s \u91cc\u603b\u6709\u79cd\u79cd\u7684\u53ef\u80fd\u6027\uff0c\u5bfc\u81f4 Pod \u6ca1\u6709\u7ecf\u8fc7 webhook \u5c31\u7ed3\u675f\u6216\u6ca1\u4e86\uff08\u6bd4\u5982 phase \u8fdb\u5165 Succeeded/Failed\uff0c\u6216\u662f etcd \u6570\u636e\u4e22\u4e86\u7b49\u7b49\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u540c\u65f6\uff0c\u8fd9\u4e5f\u4e0d\u7b26\u5408\u9762\u5411\u7ec8\u6001\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0cworkloadspread status \u662f\u7531 webhook \u4e0e controller \u534f\u4f5c\u6765\u63a7\u5236\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"webhook \u5728 Pod create/delete/eviction \u8bf7\u6c42\u94fe\u8def\u62e6\u622a\uff0c\u4fee\u6539 missingReplicas \u6570\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6 controller \u7684 reconcile \u4e2d\u4e5f\u4f1a\u62ff\u5230\u5f53\u524d workload \u4e0b\u7684\u6240\u6709 Pod\uff0c\u6839\u636e subset \u5206\u7c7b\uff0c\u5e76\u5c06 missingReplicas \u66f4\u65b0\u4e3a\u5f53\u524d\u5b9e\u9645\u7f3a\u5c11\u7684\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u4e0a\u9762\u7684\u5206\u6790\u4e2d\uff0ccontroller\u4eceinformer\u4e2d\u83b7\u53d6Pod\u5f88\u53ef\u80fd\u5b58\u5728\u5ef6\u65f6\uff0c\u6240\u4ee5\u6211\u4eec\u8fd8\u5728status\u4e2d\u589e\u52a0\u4e86creatingPods map, webook\u6ce8\u5165\u7684\u65f6\u5019\u4f1a\u8bb0\u5f55key\u4e3apod.name, value\u4e3a\u65f6\u95f4\u6233\u7684\u4e00\u6761entry\u5230map\uff0ccontroller\u518d\u7ed3\u5408map\u7ef4\u62a4\u771f\u5b9e\u7684missingReplicas\u3002\u540c\u7406\u8fd8\u6709\u4e00\u4e2adeletingPods map\u6765\u8bb0\u5f55Pod\u7684delete/eviction\u4e8b\u4ef6\u3002")),(0,a.kt)("h3",{id:"4-\u81ea\u9002\u5e94\u8c03\u5ea6\u80fd\u529b"},"4. \u81ea\u9002\u5e94\u8c03\u5ea6\u80fd\u529b"),(0,a.kt)("p",null,"\u5728 WorkloadSpread \u4e2d\u652f\u6301\u914d\u7f6e scheduleStrategy\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ctype \u4e3a Fixed\uff0c\u5373\u56fa\u5b9a\u6309\u7167\u5404\u4e2a subset \u7684\u524d\u540e\u987a\u5e8f\u3001maxReplicas \u9650\u5236\u6765\u5c06 Pod \u8c03\u5ea6\u5230\u5bf9\u5e94\u7684 subset \u4e2d\u3002\n\u4f46\u771f\u5b9e\u7684\u573a\u666f\u4e0b\uff0c\u5f88\u591a\u65f6\u5019 subset \u5206\u533a\u6216\u62d3\u6251\u7684\u8d44\u6e90\uff0c\u4e0d\u4e00\u5b9a\u80fd\u5b8c\u5168\u6ee1\u8db3 maxReplicas \u6570\u91cf\u3002\u7528\u6237\u9700\u8981\u6309\u7167\u5b9e\u9645\u7684\u8d44\u6e90\u60c5\u51b5\uff0c\u6765\u4e3a Pod \u9009\u62e9\u6709\u8d44\u6e90\u7684\u5206\u533a\u6269\u5bb9\u3002\u8fd9\u5c31\u9700\u8981\u7528 Adaptive \u8fd9\u79cd\u81ea\u9002\u5e94\u7684\u8c03\u5ea6\u5206\u914d\u3002"),(0,a.kt)("p",null,"WorkloadSpread \u63d0\u4f9b\u7684 Adaptive \u80fd\u529b\uff0c\u903b\u8f91\u4e0a\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SimulationSchedule\uff1a\u5728 Kruise webhook \u4e2d\u6839\u636e informer \u91cc\u5df2\u6709\u7684 nodes/pods \u6570\u636e\uff0c\u7ec4\u88c5\u51fa\u8c03\u5ea6\u8d26\u672c\uff0c\u5bf9 Pod \u8fdb\u884c\u6a21\u62df\u8c03\u5ea6\u3002\u5373\u901a\u8fc7 nodeSelector/affinity\u3001tolerations\u3001\u4ee5\u53ca\u57fa\u672c\u7684 resources \u8d44\u6e90\uff0c\u505a\u4e00\u6b21\u7b80\u5355\u7684\u8fc7\u6ee4\u3002\uff08\u5bf9\u4e8e vk \u8fd9\u79cd\u8282\u70b9\u4e0d\u592a\u9002\u7528\uff09"),(0,a.kt)("li",{parentName:"ol"},"Reschedule\uff1a\u5728\u5c06 Pod \u8c03\u5ea6\u5230\u4e00\u4e2a subset \u540e\uff0c\u5982\u679c\u8c03\u5ea6\u5931\u8d25\u8d85\u8fc7 rescheduleCriticalSeconds \u65f6\u95f4\uff0c\u5219\u5c06\u8be5 subset \u6682\u65f6\u6807\u8bb0\u4e3a unschedulable\uff0c\u5e76\u5220\u9664 Pod \u89e6\u53d1\u91cd\u5efa\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cunschedulable \u4f1a\u4fdd\u7559 5min\uff0c\u5373\u5728 5min \u5185\u7684 Pod \u521b\u5efa\u4f1a\u8df3\u8fc7\u8fd9\u4e2a subset\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"WorkloadSpread\u901a\u8fc7\u7ed3\u5408\u4e00\u4e9bkubernetes\u73b0\u6709\u7684\u7279\u6027\u4ee5\u4e00\u79cd\u65c1\u8def\u7684\u5f62\u5f0f\u8d4b\u4e88workload\u5f39\u6027\u90e8\u7f72\u4e0e\u591a\u57df\u90e8\u7f72\u7684\u80fd\u529b\u3002\u6211\u4eec\u5e0c\u671b\u7528\u6237\u901a\u8fc7\u4f7f\u7528WorkloadSpread\u964d\u4f4eworkload\u90e8\u7f72\u590d\u6742\u5ea6\uff0c\u5229\u7528\u5176\u5f39\u6027\u4f38\u7f29\u80fd\u529b\u5207\u5b9e\u964d\u4f4e\u6210\u672c\u3002\n\u76ee\u524d\u963f\u91cc\u4e91\u5185\u90e8\u6b63\u5728\u79ef\u6781\u7684\u843d\u5730\uff0c\u843d\u5730\u8fc7\u7a0b\u4e2d\u7684\u8c03\u6574\u4f1a\u53ca\u65f6\u53cd\u9988\u793e\u533a\u3002\u672a\u6765WorkloadSpread\u8fd8\u6709\u4e00\u4e9b\u65b0\u80fd\u529b\u8ba1\u5212\uff0c\u6bd4\u5982\u8ba9WorkloadSpread\u652f\u6301workload\u7684\u5b58\u91cfPod\u63a5\u7ba1\uff0c\u652f\u6301\u6279\u91cf\u7684workload\u7ea6\u675f\uff0c\u751a\u81f3\u662f\u8de8\u8fc7workload\u5c42\u7ea7\u4f7f\u7528label\u6765\u5339\u914dPod\u3002\u5176\u4e2d\u4e00\u4e9b\u80fd\u529b\u9700\u8981\u5b9e\u9645\u8003\u91cf\u793e\u533a\u7528\u6237\u7684\u9700\u6c42\u573a\u666f\u3002\u5e0c\u671b\u5927\u5bb6\u591a\u591a\u53c2\u4e0e\u5230Kruise\u793e\u533a\uff0c\u591a\u63d0issue\u548cpr\uff0c\u5e2e\u52a9\u7528\u6237\u89e3\u51b3\u66f4\u591a\u4e91\u539f\u751f\u90e8\u7f72\u65b9\u9762\u7684\u96be\u9898\uff0c\u6784\u5efa\u4e00\u4e2a\u66f4\u597d\u7684\u793e\u533a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WorkloadSpread: ",(0,a.kt)("a",{parentName:"li",href:"https://openkruise.io/docs/user-manuals/workloadspread"},"https://openkruise.io/docs/user-manuals/workloadspread")),(0,a.kt)("li",{parentName:"ul"},"Pod Topology Spread Constrains: ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/")),(0,a.kt)("li",{parentName:"ul"},"UnitedDeployment: https:/")))}k.isMDXComponent=!0},7763:function(e,o,t){o.Z=t.p+"assets/images/arch-71cac149618fd28aae6c14d5dee1555f.jpg"},4495:function(e,o,t){o.Z=t.p+"assets/images/case-1-8545e73ad27cbea3f342f0502db2d123.jpg"},688:function(e,o,t){o.Z=t.p+"assets/images/case-2-4314e252508aedb388ff524d792b1bda.jpg"},1522:function(e,o,t){o.Z=t.p+"assets/images/case-3-2d2b48de4fda0972263202b26e504f2e.jpg"},9945:function(e,o,t){o.Z=t.p+"assets/images/case-4-b5a9c883d4656b9cb2928df4bd14fc33.jpg"}}]);