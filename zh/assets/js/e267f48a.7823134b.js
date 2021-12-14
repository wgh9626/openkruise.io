"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8278],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(t),m=l,k=c["".concat(o,".").concat(m)]||c[m]||s[m]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4393:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),i=["components"],p={title:"Advanced StatefulSet"},o=void 0,d={unversionedId:"user-manuals/advancedstatefulset",id:"version-v1.0/user-manuals/advancedstatefulset",title:"Advanced StatefulSet",description:"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f StatefulSet \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 maxUnavailable \u5e76\u884c\u53d1\u5e03\u3001\u539f\u5730\u5347\u7ea7\u7b49\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/user-manuals/advancedstatefulset.md",sourceDirName:"user-manuals",slug:"/user-manuals/advancedstatefulset",permalink:"/zh/docs/user-manuals/advancedstatefulset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advancedstatefulset.md",tags:[],version:"v1.0",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1639452598,formattedLastUpdatedAt:"2021/12/14",frontMatter:{title:"Advanced StatefulSet"},sidebar:"docs",previous:{title:"CloneSet",permalink:"/zh/docs/user-manuals/cloneset"},next:{title:"Advanced DaemonSet",permalink:"/zh/docs/user-manuals/advanceddaemonset"}},u=[{value:"MaxUnavailable \u6700\u5927\u4e0d\u53ef\u7528",id:"maxunavailable-\u6700\u5927\u4e0d\u53ef\u7528",children:[],level:2},{value:"\u539f\u5730\u5347\u7ea7",id:"\u539f\u5730\u5347\u7ea7",children:[],level:2},{value:"\u5347\u7ea7\u987a\u5e8f",id:"\u5347\u7ea7\u987a\u5e8f",children:[{value:"\u4f18\u5148\u7ea7\u7b56\u7565",id:"\u4f18\u5148\u7ea7\u7b56\u7565",children:[],level:3}],level:2},{value:"\u53d1\u5e03\u6682\u505c",id:"\u53d1\u5e03\u6682\u505c",children:[],level:2},{value:"\u539f\u5730\u5347\u7ea7\u81ea\u52a8\u9884\u70ed",id:"\u539f\u5730\u5347\u7ea7\u81ea\u52a8\u9884\u70ed",children:[],level:2},{value:"\u5e8f\u53f7\u4fdd\u7559\uff08\u8df3\u8fc7\uff09",id:"\u5e8f\u53f7\u4fdd\u7559\u8df3\u8fc7",children:[],level:2},{value:"\u6d41\u5f0f\u6269\u5bb9",id:"\u6d41\u5f0f\u6269\u5bb9",children:[],level:2}],s={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet")," \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 maxUnavailable \u5e76\u884c\u53d1\u5e03\u3001\u539f\u5730\u5347\u7ea7\u7b49\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced StatefulSet")," \u662f\u4e00\u4e2a CRD\uff0ckind \u540d\u5b57\u4e5f\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet"),"\uff0c\u4f46\u662f apiVersion \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/v1beta1"),"\u3002\n\u8fd9\u4e2a CRD \u7684\u6240\u6709\u9ed8\u8ba4\u5b57\u6bb5\u3001\u9ed8\u8ba4\u884c\u4e3a\u4e0e\u539f\u751f StatefulSet \u5b8c\u5168\u4e00\u81f4\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b optional \u5b57\u6bb5\u6765\u6269\u5c55\u589e\u5f3a\u7684\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u7528\u6237\u4ece\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet")," \u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced StatefulSet"),"\uff0c\u53ea\u9700\u8981\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," \u4fee\u6539\u540e\u63d0\u4ea4\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"-  apiVersion: apps/v1\n+  apiVersion: apps.kruise.io/v1beta1\n   kind: StatefulSet\n   metadata:\n     name: sample\n   spec:\n     #...\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u4ece Kruise 0.7.0 \u5f00\u59cb\uff0cAdvanced StatefulSet \u7248\u672c\u5347\u7ea7\u5230\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"v1beta1"),"\uff0c\u5e76\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1")," \u517c\u5bb9\u3002\u5bf9\u4e8e\u4f4e\u4e8e v0.7.0 \u7248\u672c\u7684 Kruise\uff0c\u53ea\u80fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1"),"\u3002"),(0,r.kt)("h2",{id:"maxunavailable-\u6700\u5927\u4e0d\u53ef\u7528"},"MaxUnavailable \u6700\u5927\u4e0d\u53ef\u7528"),(0,r.kt)("p",null,"Advanced StatefulSet \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"RollingUpdateStatefulSetStrategy")," \u4e2d\u65b0\u589e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," \u7b56\u7565\u6765\u652f\u6301\u5e76\u884c Pod \u53d1\u5e03\uff0c\u5b83\u4f1a\u4fdd\u8bc1\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u6700\u591a\u6709\u591a\u5c11\u4e2a Pod \u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\u3002\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," \u53ea\u80fd\u914d\u5408 podManagementPolicy \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Parallel")," \u6765\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7b56\u7565\u7684\u6548\u679c\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u4e2d\u7684\u7c7b\u4f3c\uff0c\u4f46\u662f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u7684 order \u987a\u5e8f\u4e0d\u80fd\u4e25\u683c\u4fdd\u8bc1\u3002\n\u5982\u679c\u4e0d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable"),"\uff0c\u5b83\u7684\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u4e5f\u5c31\u662f\u548c\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet")," \u4e00\u6837\u53ea\u80fd one by one \u4e32\u884c\u53d1\u5e03 Pod\uff0c\u5373\u4f7f\u628a podManagementPolicy \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Parallel")," \u4e5f\u662f\u8fd9\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  podManagementPolicy: Parallel\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 20%\n")),(0,r.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u4e00\u4e2a Advanced StatefulSet \u4e0b\u9762\u6709 P0 \u5230 P4 \u4e94\u4e2a Pod\uff0c\u5e76\u4e14\u5e94\u7528\u80fd\u5bb9\u5fcd 3 \u4e2a\u526f\u672c\u4e0d\u53ef\u7528\u3002\n\u5f53\u6211\u4eec\u628a StatefulSet \u91cc\u7684 Pod \u5347\u7ea7\u7248\u672c\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6765\u505a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"maxUnavailable=3")),(0,r.kt)("li",{parentName:"ol"},"(\u53ef\u9009) \u5982\u679c\u9700\u8981\u7070\u5ea6\u5347\u7ea7\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"partition=4"),"\u3002Partition \u9ed8\u8ba4\u7684\u610f\u601d\u662f order \u5927\u4e8e\u7b49\u4e8e\u8fd9\u4e2a\u6570\u503c\u7684 Pod \u624d\u4f1a\u66f4\u65b0\uff0c\u5728\u8fd9\u91cc\u5c31\u53ea\u4f1a\u66f4\u65b0 P4\uff0c\u5373\u4f7f\u6211\u4eec\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"maxUnavailable=3"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 P4 \u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"partition")," \u8c03\u6574\u4e3a 0\u3002\u6b64\u65f6\uff0c\u63a7\u5236\u5668\u4f1a\u540c\u65f6\u5347\u7ea7 P1\u3001P2\u3001P3 \u4e09\u4e2a Pod\u3002\u6ce8\u610f\uff0c\u5982\u679c\u662f\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"li"},"StatefulSet"),"\uff0c\u53ea\u80fd\u4e32\u884c\u5347\u7ea7 P3\u3001P2\u3001P1\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u8fd9\u4e09\u4e2a Pod \u4e2d\u6709\u4e00\u4e2a\u5347\u7ea7\u5b8c\u6210\u4e86\uff0c\u63a7\u5236\u5668\u4f1a\u7acb\u5373\u5f00\u59cb\u5347\u7ea7 P0\u3002")),(0,r.kt)("h2",{id:"\u539f\u5730\u5347\u7ea7"},"\u539f\u5730\u5347\u7ea7"),(0,r.kt)("p",null,"Advanced StatefulSet \u589e\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"podUpdatePolicy")," \u6765\u5141\u8bb8\u7528\u6237\u6307\u5b9a\u91cd\u5efa\u5347\u7ea7\u8fd8\u662f\u539f\u5730\u5347\u7ea7\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReCreate"),": \u63a7\u5236\u5668\u4f1a\u5220\u9664\u65e7 Pod \u548c\u5b83\u7684 PVC\uff0c\u7136\u540e\u7528\u65b0\u7248\u672c\u91cd\u65b0\u521b\u5efa\u51fa\u6765\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InPlaceIfPossible"),": \u63a7\u5236\u5668\u4f1a\u4f18\u5148\u5c1d\u8bd5\u539f\u5730\u5347\u7ea7 Pod\uff0c\u5982\u679c\u4e0d\u884c\u518d\u91c7\u7528\u91cd\u5efa\u5347\u7ea7\u3002\u5177\u4f53\u53c2\u8003\u4e0b\u65b9\u9605\u8bfb\u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InPlaceOnly"),": \u63a7\u5236\u5668\u53ea\u5141\u8bb8\u91c7\u7528\u539f\u5730\u5347\u7ea7\u3002\u56e0\u6b64\uff0c\u7528\u6237\u53ea\u80fd\u4fee\u6539\u4e0a\u4e00\u6761\u4e2d\u7684\u9650\u5236\u5b57\u6bb5\uff0c\u5982\u679c\u5c1d\u8bd5\u4fee\u6539\u5176\u4ed6\u5b57\u6bb5\u4f1a\u88ab Kruise \u62d2\u7edd\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"strong",href:"../core-concepts/inplace-update"},"\u8be5\u6587\u6863"),"\u4e86\u89e3\u66f4\u591a\u539f\u5730\u5347\u7ea7\u7684\u7ec6\u8282\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u5728\u539f\u5730\u5347\u7ea7\u4e2d\u63d0\u4f9b\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"graceful period")," \u9009\u9879\uff0c\u4f5c\u4e3a\u4f18\u96c5\u539f\u5730\u5347\u7ea7\u7684\u7b56\u7565\u3002\u7528\u6237\u5982\u679c\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"gracePeriodSeconds")," \u8fd9\u4e2a\u5b57\u6bb5\uff0c\u63a7\u5236\u5668\u5728\u539f\u5730\u5347\u7ea7\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u5148\u628a Pod status \u6539\u4e3a not-ready\uff0c\u7136\u540e\u7b49\u4e00\u6bb5\u65f6\u95f4\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"gracePeriodSeconds"),"\uff09\uff0c\u6700\u540e\u518d\u53bb\u4fee\u6539 Pod spec \u4e2d\u7684\u955c\u50cf\u7248\u672c\u3002\n\u8fd9\u6837\uff0c\u5c31\u4e3a endpoints-controller \u8fd9\u4e9b\u63a7\u5236\u5668\u7559\u51fa\u4e86\u5145\u8db3\u7684\u65f6\u95f4\u6765\u5c06 Pod \u4ece endpoints \u7aef\u70b9\u5217\u8868\u4e2d\u53bb\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  podManagementPolicy: Parallel\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n      inPlaceUpdateStrategy:\n        gracePeriodSeconds: 10\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u66f4\u91cd\u8981\u7684\u662f"),"\uff0c\u5982\u679c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"InPlaceOnly")," \u7b56\u7565\uff0c\u5fc5\u987b\u8981\u589e\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"InPlaceUpdateReady")," readinessGate\uff0c\u7528\u6765\u5728\u539f\u5730\u5347\u7ea7\u7684\u65f6\u5019\u63a7\u5236\u5668\u5c06 Pod \u8bbe\u7f6e\u4e3a NotReady\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684\u539f\u5730\u5347\u7ea7 StatefulSet \u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nmetadata:\n  name: sample\nspec:\n  replicas: 3\n  serviceName: fake-service\n  selector:\n    matchLabels:\n      app: sample\n  template:\n    metadata:\n      labels:\n        app: sample\n    spec:\n      readinessGates:\n         # A new condition that ensures the pod remains at NotReady state while the in-place update is happening\n      - conditionType: InPlaceUpdateReady\n      containers:\n      - name: main\n        image: nginx:alpine\n  podManagementPolicy: Parallel # allow parallel updates, works together with maxUnavailable\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      # Do in-place update if possible, currently only image update is supported for in-place update\n      podUpdatePolicy: InPlaceIfPossible\n      # Allow parallel updates with max number of unavailable instances equals to 2\n      maxUnavailable: 2\n")),(0,r.kt)("h2",{id:"\u5347\u7ea7\u987a\u5e8f"},"\u5347\u7ea7\u987a\u5e8f"),(0,r.kt)("p",null,"Advanced StatefulSet \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.rollingUpdate")," \u4e0b\u9762\u65b0\u589e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," \u7ed3\u6784\uff0c\u63d0\u4f9b\u7ed9\u4e0d\u6309 order \u987a\u5e8f\u7684\u5347\u7ea7\u7b56\u7565\u3002\n\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," \u4e0d\u4e3a\u7a7a\uff0c\u6240\u6709 Pod \u7684\u53d1\u5e03\u987a\u5e8f\u5c31\u4e0d\u4e00\u5b9a\u4f1a\u6309\u7167 order \u987a\u5e8f\u4e86\u3002\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," \u53ea\u80fd\u914d\u5408 Parallel podManagementPolicy \u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"unorderedUpdate")," \u4e0b\u9762\u53ea\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"priorityStrategy")," \u4e00\u4e2a\u4f18\u5148\u7ea7\u7b56\u7565\u3002"),(0,r.kt)("h3",{id:"\u4f18\u5148\u7ea7\u7b56\u7565"},"\u4f18\u5148\u7ea7\u7b56\u7565"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7b56\u7565\u5b9a\u4e49\u4e86\u63a7\u5236\u5668\u8ba1\u7b97 Pod \u53d1\u5e03\u4f18\u5148\u7ea7\u7684\u89c4\u5219\uff0c\u6240\u6709\u9700\u8981\u66f4\u65b0\u7684 Pod \u90fd\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u4f18\u5148\u7ea7\u89c4\u5219\u8ba1\u7b97\u540e\u6392\u5e8f\u3002\n\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," \u53ef\u4ee5\u901a\u8fc7 weight(\u6743\u91cd) \u548c order(\u5e8f\u53f7) \u4e24\u79cd\u65b9\u5f0f\u6765\u6307\u5b9a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight"),": Pod \u4f18\u5148\u7ea7\u662f\u7531\u6240\u6709 weights \u5217\u8868\u4e2d\u7684 term \u6765\u8ba1\u7b97 match selector \u5f97\u51fa\u3002\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      unorderedUpdate:\n        priorityStrategy:\n          weightPriority:\n          - weight: 50\n            matchSelector:\n              matchLabels:\n                test-key: foo\n          - weight: 30\n            matchSelector:\n              matchLabels:\n                test-key: bar\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order"),': Pod \u4f18\u5148\u7ea7\u662f\u7531 orderKey \u7684 value \u51b3\u5b9a\uff0c\u8fd9\u91cc\u8981\u6c42\u5bf9\u5e94\u7684 value \u7684\u7ed3\u5c3e\u80fd\u89e3\u6790\u4e3a int \u503c\u3002\u6bd4\u5982 value "5" \u7684\u4f18\u5148\u7ea7\u662f 5\uff0cvalue "sts-10" \u7684\u4f18\u5148\u7ea7\u662f 10\u3002')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      unorderedUpdate:\n        priorityStrategy:\n          orderPriority:\n            - orderedKey: some-label-key\n")),(0,r.kt)("h2",{id:"\u53d1\u5e03\u6682\u505c"},"\u53d1\u5e03\u6682\u505c"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e paused \u4e3a true \u6682\u505c\u53d1\u5e03\uff0c\u4e0d\u8fc7\u63a7\u5236\u5668\u8fd8\u662f\u4f1a\u505a replicas \u6570\u91cf\u7ba1\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      paused: true\n")),(0,r.kt)("h2",{id:"\u539f\u5730\u5347\u7ea7\u81ea\u52a8\u9884\u70ed"},"\u539f\u5730\u5347\u7ea7\u81ea\u52a8\u9884\u70ed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728",(0,r.kt)("a",{parentName:"p",href:"../installation##optional-feature-gate"},"\u5b89\u88c5\u6216\u5347\u7ea7 Kruise")," \u7684\u65f6\u5019\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForInPlaceUpdate")," feature-gate\uff0c\nAdvanced StatefulSet \u63a7\u5236\u5668\u4f1a\u81ea\u52a8\u5728\u6240\u6709\u65e7\u7248\u672c pod \u6240\u5728 node \u8282\u70b9\u4e0a\u9884\u70ed\u4f60\u6b63\u5728\u7070\u5ea6\u53d1\u5e03\u7684\u65b0\u7248\u672c\u955c\u50cf\u3002 \u8fd9\u5bf9\u4e8e\u5e94\u7528\u53d1\u5e03\u52a0\u901f\u5f88\u6709\u5e2e\u52a9\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b Advanced StatefulSet \u6bcf\u4e2a\u65b0\u955c\u50cf\u9884\u70ed\u65f6\u7684\u5e76\u53d1\u5ea6\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u4e2a\u8282\u70b9\u62c9\u955c\u50cf\u3002\n\u5982\u679c\u9700\u8981\u8c03\u6574\uff0c\u4f60\u53ef\u4ee5\u5728 annotation \u4e0a\u8bbe\u7f6e\u5e76\u53d1\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "5"\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u4e3a\u4e86\u907f\u514d\u5927\u90e8\u5206\u4e0d\u5fc5\u8981\u7684\u955c\u50cf\u62c9\u53d6\uff0c\u76ee\u524d\u53ea\u9488\u5bf9 replicas > 3 \u7684 Advanced StatefulSet \u505a\u81ea\u52a8\u9884\u70ed\u3002"),(0,r.kt)("h2",{id:"\u5e8f\u53f7\u4fdd\u7559\u8df3\u8fc7"},"\u5e8f\u53f7\u4fdd\u7559\uff08\u8df3\u8fc7\uff09"),(0,r.kt)("p",null,"\u4ece Advanced StatefulSet \u7684 v1beta1 \u7248\u672c\u5f00\u59cb\uff08Kruise >= v0.7.0\uff09\uff0c\u652f\u6301\u5e8f\u53f7\u4fdd\u7559\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"reserveOrdinals")," \u5b57\u6bb5\u4e2d\u5199\u5165\u9700\u8981\u4fdd\u7559\u7684\u5e8f\u53f7\uff0cAdvanced StatefulSet \u4f1a\u81ea\u52a8\u8df3\u8fc7\u521b\u5efa\u8fd9\u4e9b\u5e8f\u53f7\u7684 Pod\u3002\u5982\u679c Pod \u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4f1a\u88ab\u5220\u9664\u3002\n\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"spec.replicas")," \u662f\u671f\u671b\u8fd0\u884c\u7684 Pod \u6570\u91cf\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"spec.reserveOrdinals")," \u662f\u8981\u8df3\u8fc7\u7684\u5e8f\u53f7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  replicas: 4\n  reserveOrdinals:\n  - 1\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"replicas=4, reserveOrdinals=[1]")," \u7684 Advanced StatefulSet\uff0c\u5b9e\u9645\u8fd0\u884c\u7684 Pod \u5e8f\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[0,2,3,4]"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u628a Pod-3 \u505a\u8fc1\u79fb\u5e76\u4fdd\u7559\u5e8f\u53f7\uff0c\u5219\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," \u8ffd\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"reserveOrdinals")," \u5217\u8868\u4e2d\u3002\u63a7\u5236\u5668\u4f1a\u628a Pod-3 \u5220\u9664\u5e76\u521b\u5efa Pod-5\uff08\u6b64\u65f6\u8fd0\u884c\u4e2d Pod \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"[0,2,4,5]"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u60f3\u5220\u9664 Pod-3\uff0c\u5219\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," \u8ffd\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"reserveOrdinals")," \u5217\u8868\u5e76\u540c\u65f6\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas")," \u51cf\u4e00\u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"\u3002\u63a7\u5236\u5668\u4f1a\u628a Pod-3 \u5220\u9664\uff08\u6b64\u65f6\u8fd0\u884c\u4e2d Pod \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"[0,2,4]"),"\uff09\u3002")),(0,r.kt)("h2",{id:"\u6d41\u5f0f\u6269\u5bb9"},"\u6d41\u5f0f\u6269\u5bb9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,r.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u5728\u4e00\u4e2a\u65b0 Advanced StatefulSet \u521b\u5efa\u540e\u6709\u5927\u91cf\u5931\u8d25\u7684 pod \u88ab\u521b\u5efa\u51fa\u6765\uff0c\u4ece Kruise ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.10.0")," \u7248\u672c\u5f00\u59cb\u5f15\u5165\u4e86\u5728 scale strategy \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," \u7b56\u7565\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1beta1\nkind: StatefulSet\nspec:\n  # ...\n  replicas: 100\n  scaleStrategy:\n    maxUnavailable: 10% # percentage or absolute number\n")),(0,r.kt)("p",null,"\u5f53\u8fd9\u4e2a\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u4e4b\u540e\uff0cAdvanced StatefulSet \u4f1a\u4fdd\u8bc1\u521b\u5efa pod \u4e4b\u540e\u4e0d\u53ef\u7528 pod \u6570\u91cf\u4e0d\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u503c\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u4e0a\u9762\u8fd9\u4e2a StatefulSet \u4e00\u5f00\u59cb\u53ea\u4f1a\u4e00\u6b21\u6027\u521b\u5efa 10 \u4e2a pod\u3002\u5728\u6b64\u4e4b\u540e\uff0c\u6bcf\u5f53\u4e00\u4e2a pod \u53d8\u4e3a running\u3001ready \u72b6\u6001\u540e\uff0c\u624d\u4f1a\u518d\u521b\u5efa\u4e00\u4e2a\u65b0 pod \u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u4e2a\u529f\u80fd\u53ea\u5141\u8bb8\u5728 podManagementPolicy \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Parallel")," \u7684 StatefulSet \u4e2d\u4f7f\u7528\u3002"))}c.isMDXComponent=!0}}]);