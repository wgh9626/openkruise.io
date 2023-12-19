"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[930],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6069:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Extensible Traffic Routing Based on Lua Script",u={unversionedId:"developer-manuals/custom-network-provider",id:"developer-manuals/custom-network-provider",title:"Extensible Traffic Routing Based on Lua Script",description:"FEATURE STATE: Kruise Rollout v0.5.0",source:"@site/rollouts/developer-manuals/custom-network-provider.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/custom-network-provider",permalink:"/zh/rollouts/developer-manuals/custom-network-provider",draft:!1,tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1702954801,formattedLastUpdatedAt:"2023/12/19",frontMatter:{},sidebar:"rollouts",previous:{title:"A/B \u6d4b\u8bd5",permalink:"/zh/rollouts/user-manuals/strategy-ab-testing"},next:{title:"Traffic Routing with Istio",permalink:"/zh/rollouts/best-practices/traffic-routing-istio-api"}},c={},p=[{value:"How it Works",id:"how-it-works",level:2},{value:"Define Your Custom Traffic Routing Lua Script",id:"define-your-custom-traffic-routing-lua-script",level:2},{value:"Way1: Contribute a Custom Traffic Routing",id:"way1-contribute-a-custom-traffic-routing",level:3},{value:"Recommanded Test Case Designation",id:"recommanded-test-case-designation",level:4},{value:"Way2: Define in ConfigMap",id:"way2-define-in-configmap",level:3},{value:"Write Your Custom Traffic Routing Lua Script",id:"write-your-custom-traffic-routing-lua-script",level:2},{value:"Lua Syntax",id:"lua-syntax",level:3},{value:"Lua Data Types",id:"lua-data-types",level:4},{value:"Lua Table",id:"lua-table",level:4},{value:"Common functions",id:"common-functions",level:4},{value:"Handle the Resource",id:"handle-the-resource",level:3},{value:"Debug Your Lua Script",id:"debug-your-lua-script",level:3}],d={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extensible-traffic-routing-based-on-lua-script"},"Extensible Traffic Routing Based on Lua Script"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise Rollout v0.5.0"),(0,i.kt)("p",null,"Kruise Rollout utilizes a Lua-script-based customization approach for ",(0,i.kt)("strong",{parentName:"p"},"API Gateway resources (Istio VirtualService, Apisix ApisixRoute, Kuma TrafficRoute and etc.)"),". Kruise Rollout involves invoking Lua scripts to retrieve and update the desired configurations of resources based on ",(0,i.kt)("strong",{parentName:"p"},"release strategies and the original configurations of API Gateway resources (including spec, labels, and annotations)"),". It enables users to easily adapt and integrate various types of API Gateway resources without modifying existing code and configurations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"By using Kruise Rollout, users can:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Customize Lua scripts for handling API Gateway resources, allowing for flexible implementation of resource processing and providing support for a wider range of resources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Utilize a common Rollout configuration template to configure different resources, reducing configuration complexity and facilitating user configuration."))),(0,i.kt)("h2",{id:"how-it-works"},"How it Works"),(0,i.kt)("img",{src:a(664).Z}),(0,i.kt)("p",null,"The entire process of can be described as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Users define Rollout traffic canary rules and the resources that need modification, initiating the canary deployment."),(0,i.kt)("li",{parentName:"ol"},"Obtain specified API Gateway resources based on Rollout configurations."),(0,i.kt)("li",{parentName:"ol"},"Get the Lua scripts corresponding to the API Gateway resources."),(0,i.kt)("li",{parentName:"ol"},"When release started, first convert the current configurations of the resources into a string and store it in the resource annotation",(0,i.kt)("inlineCode",{parentName:"li"},"rollouts.kruise.io/original-spec-configuration"),"."),(0,i.kt)("li",{parentName:"ol"},"Feed the API Gateway configuration along with the Rollout configurations to the Lua script. Then utilize the Lua script to process the current resource configurations and Rollout configurations to get the new configurations and update the resources accordingly."),(0,i.kt)("li",{parentName:"ol"},"After the release is completed, retrieve the original configurations of the resources from the ",(0,i.kt)("inlineCode",{parentName:"li"},"rollouts.kruise.io/original-spec-configuration")," annotation and restore them.")),(0,i.kt)("p",null,"Custom traffic routing can be configured in Rollout as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\n...\nspec:\n  ...\n      trafficRoutings:\n      - service: <stable-service>\n        customNetworkRefs:\n        - apiVersion: <your-resource-apiVersion>\n          kind: <your-resource-kind>\n          name: <your-resource-name>\n")),(0,i.kt)("p",null,"The api details are shown as below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customNetworkRefs")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"nil"),(0,i.kt)("td",{parentName:"tr",align:null},"Definitions of API Gateway resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customNetworkRefs.apiVersion")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"ApiVersion of a API Gateway resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customNetworkRefs.kind")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"Kind of a API Gateway resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customNetworkRefs.name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"Name of a API Gateway resource")))),(0,i.kt)("h2",{id:"define-your-custom-traffic-routing-lua-script"},"Define Your Custom Traffic Routing Lua Script"),(0,i.kt)("p",null,"There are two ways to define and use your custom traffic routing Lua script to handle the API Gateway resources, the next two sections describe those ways."),(0,i.kt)("h3",{id:"way1-contribute-a-custom-traffic-routing"},"Way1: Contribute a Custom Traffic Routing"),(0,i.kt)("p",null,"You can contribute Lua scripts for custom resources and the scripts can be bundled into Kruise Rollout after passing the tests. These Lua scripts can then be directly invoked within the Rollout."),(0,i.kt)("p",null,"Kruise Rollout by default invoke Lua scripts in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rollouts/lua_configuration")," directory. The bundled Lua scripts should follow the following directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"rollouts\n|-- lua_configuration\n|    |-- your.crd.group.io                    # CRD group\n|    |    |-- MyKind                          # Resource kind\n|    |    |    |-- trafficRouting.lua         # Custom traffic routing Lua script\n|    |    |    |-- testdata                   # Directory with test resource YAML definitions\n|        |      |        |      |-- test_case1.yaml       # Lua script test case\n|        |      |        |      |-- test_case2.yaml       # Lua script test case\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trafficRouting.lua")," defines how to process API Gateway resources."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"testdata")," directory contains test cases, and the structure of test cases is as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rollout:\n    # rollout configuration\ntrafficRouting:\n  # trafficRouting configuration\noriginal:\n    # original resource configuration\nexpected:\n    # expected resource configurations in every step of release plan\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Custom traffic routing Lua script must pass the tests to prove it can work as expected"),". The following example demonstrates a custom traffic routing test for ",(0,i.kt)("inlineCode",{parentName:"p"},"networking.istio.io/VirtualService"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'rollout:\n  apiVersion: rollouts.kruise.io/v1beta1\n  kind: Rollout\n  metadata:\n    name: rollouts-demo\n  spec:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: deploy-demo\n    strategy:\n      canary:\n        enableExtraWorkloadForCanary: true\n        steps:\n        - matches:\n          - headers:\n            - type: Exact\n              name: user-agent\n              value: pc\n            - type: RegularExpression\n              name: name\n              value: ".*demo"\n        - matches:\n          - headers:\n            - type: Exact\n              name: user-agent\n              value: pc\n          - headers:\n            - type: RegularExpression\n              name: name\n              value: ".*demo"\n        - traffic: 50%\n          replicas: 50%\n        trafficRoutings:\n        - service: svc-demo\n          customNetworkRefs:\n          - apiVersion: networking.istio.io/v1alpha3\n            kind: VirtualService\n            name: vs-demo\noriginal:\n  apiVersion: networking.istio.io/v1alpha3\n  kind: VirtualService\n  metadata:\n    name: vs-demo\n  spec:\n    hosts:\n    - "*"\n    gateways:\n    - nginx-gateway\n    http:\n    - route:\n      - destination:\n          host: svc-demo\nexpected:\n  - apiVersion: networking.istio.io/v1alpha3\n    kind: VirtualService\n    metadata:\n      name: vs-demo\n    spec:\n      hosts:\n      - "*"\n      gateways:\n      - nginx-gateway\n      http:\n      - match:\n        - headers:\n            user-agent:\n              exact: pc\n            name:\n              regex: .*demo\n        route:\n        - destination:\n            host: svc-demo-canary\n      - route:\n        - destination:\n            host: svc-demo\n  - apiVersion: networking.istio.io/v1alpha3\n    kind: VirtualService\n    metadata:\n      name: vs-demo\n    spec:\n      hosts:\n      - "*"\n      gateways:\n      - nginx-gateway\n      http:\n      - match:\n        - headers:\n            name:\n              regex: .*demo\n        route:\n        - destination:\n            host: svc-demo-canary\n      - match:\n        - headers:\n            user-agent:\n              exact: pc\n        route:\n        - destination:\n            host: svc-demo-canary\n      - route:\n        - destination:\n            host: svc-demo\n  - apiVersion: networking.istio.io/v1alpha3\n    kind: VirtualService\n    metadata:\n      name: vs-demo\n    spec:\n      hosts:\n      - "*"\n      gateways:\n      - nginx-gateway\n      http:\n      - route:\n        - destination:\n            host: svc-demo\n          weight: 50\n        - destination:\n            host: svc-demo-canary\n          weight: 50\n')),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"go test -v ./pkg/trafficrouting/network/customNetworkProvider/")," to test if the Lua scripts are working as expected. Kruise Rollout will walk the ",(0,i.kt)("inlineCode",{parentName:"p"},"./lua_configuration")," directory to retrieve all Lua scripts and test cases. Kruise Rollout will then perform tests based on the defined release strategies in the Rollout to check if the original configuration of the resource, after being processed by the Lua script, matches the expected configuration."),(0,i.kt)("img",{src:a(8526).Z}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/rollouts/pull/178"},"PR#178"),"is an example for Istio VirtualService."),(0,i.kt)("h4",{id:"recommanded-test-case-designation"},"Recommanded Test Case Designation"),(0,i.kt)("p",null,"When designing test cases, at least the release strategies listed below are supposed to be considered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release strategy with header matches, and the rules are defined in one ",(0,i.kt)("inlineCode",{parentName:"li"},"headers")," filed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# spec.strategy.canary.steps:\n- matches:\n  - headers:\n    - type: Exact\n      name: user-agent\n      value: pc\n    - type: RegularExpression\n      name: name\n      value: ".*demo"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release strategy with header matches, and the rules are defined in different ",(0,i.kt)("inlineCode",{parentName:"li"},"headers")," filed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# spec.strategy.canary.steps:\n- matches:\n  - headers:\n    - type: Exact\n      name: user-agent\n      value: pc\n  - headers:\n    - type: RegularExpression\n      name: name\n      value: ".*demo"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please visit")," ",(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io/zh/rollouts/user-manuals/api-specifications"},"API Specifications | OpenKruise")," ",(0,i.kt)("strong",{parentName:"p"},"for more information about the difference of the above mentioned two release strategies.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release strategy without header matches, and the traffic is routed to canary service with a certain weight.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# spec.strategy.canary.steps:\n- traffic: 20%\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Special Note:")," By default, traffic routing strategies defined in Rollout will create a new canary for new pods, while TrafficRouting will not.")),(0,i.kt)("h3",{id:"way2-define-in-configmap"},"Way2: Define in ConfigMap"),(0,i.kt)("p",null,"When the expected traffic routing Lua scripts are not bundled in Kruise Rollout, users could utilize ConfigMap to define and use Lua script to handle API Gateway resources. Custom traffic routing lua script can be defined in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"<lua.traffic.routing.Kind.CRDGroup>: |\n# define your lua script below\n")),(0,i.kt)("p",null,"field of ConfigMap ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-rollout/kruise-rollout-configuration"),"."),(0,i.kt)("p",null,"The following example demonstrates a traffic routing for ",(0,i.kt)("inlineCode",{parentName:"p"},"networking.istio.io/DestinationRule"),", you can also define your own Lua script for API Gateway resources of other groups for example Apisix and Kuma in the ConfigMap."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'data:\n  "lua.traffic.routing.DestinationRule.networking.istio.io": |\n    local spec = obj.data.spec\n    local canary = {}\n    canary.labels = {}\n    canary.name = "canary"\n    local podLabelKey = "istio.service.tag"\n    canary.labels[podLabelKey] = "gray\n    table.insert(spec.subsets, canary)\n    return obj.data\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Then if the expected Lua script is not existed locally, Kruise Rollout will get the script from ConfigMap.")),(0,i.kt)("h2",{id:"write-your-custom-traffic-routing-lua-script"},"Write Your Custom Traffic Routing Lua Script"),(0,i.kt)("p",null,"Designing a Lua script is the key of custom traffic routing. In the following sections, we will introduce some syntax of Lua as well as writing and debugging a custom traffic routing Lua script."),(0,i.kt)("h3",{id:"lua-syntax"},"Lua Syntax"),(0,i.kt)("h4",{id:"lua-data-types"},"Lua Data Types"),(0,i.kt)("p",null,"In Lua, data can be represented using different data types. Here are the common data types in Lua:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),": Represents true or false values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Number"),": Represents integers or floating-point numbers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String"),": Represents textual data and can be enclosed in single or double quotes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Table"),": The most important data structure in Lua, used to represent associative arrays, lists, sets, and other complex data structures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Function"),": Represents executable code blocks that can be called and passed parameters.")),(0,i.kt)("h4",{id:"lua-table"},"Lua Table"),(0,i.kt)("p",null,"As mentioned above, table is the most import data structure in Lua. In Lua, a table is used to store and organize data. It can store values of different types, such as numbers, strings, and other tables. Lua tables are associative arrays that allow access and manipulation of values using keys. Here are some features and common operations of tables in Lua:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creating a table:"))),(0,i.kt)("p",null,"Create an empty table using curly braces: ",(0,i.kt)("inlineCode",{parentName:"p"},"myTable = {}")),(0,i.kt)("p",null,"Create an empty table using the table.create() constructor: ",(0,i.kt)("inlineCode",{parentName:"p"},"myTable = table.create()")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Adding and accessing elements:"))),(0,i.kt)("p",null,"Add elements using keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"myTable[key] = value")),(0,i.kt)("p",null,"Access elements using keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"myTable[key]")),(0,i.kt)("p",null,"Access elements using dot notation: ",(0,i.kt)("inlineCode",{parentName:"p"},"myTable.key")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Iterating over a table:"))),(0,i.kt)("p",null,"Iterate over all key-value pairs using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pairs()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"for key, value in pairs(myTable) do ... end\n")),(0,i.kt)("p",null,"Iterate over the array part of the table using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ipairs()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"for index, value in ipairs(myTable) do ... end\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deleting elements:"))),(0,i.kt)("p",null,"Delete an element using keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"myTable[key] = nil")),(0,i.kt)("h4",{id:"common-functions"},"Common functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table.insert()"),": Inserts a value into a table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table.remove()"),": Removes a value from a table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table.concat()"),": Concatenates the strings in a table into a new string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ipairs()"),": Iterator for looping through the array part of a table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pairs()"),": Iterator for looping through all key-value pairs of a table.")),(0,i.kt)("h3",{id:"handle-the-resource"},"Handle the Resource"),(0,i.kt)("p",null,"The resource status and release strategy in Kruise Rollout are defined using the LuaData structure and converted into a Lua table. This Lua table is then passed as a global variable ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," into the Lua script for further processing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type LuaData struct {\n    Data             Data\n    CanaryWeight     int32\n    StableWeight     int32\n    Matches          []rolloutv1alpha1.HttpRouteMatch\n    CanaryService    string\n    StableService    string\n}\n// Data struct contains current configurations of a resource\ntype Data struct {\n    Spec        interface{}       `json:"spec,omitempty"`\n    Labels      map[string]string `json:"labels,omitempty"`\n    Annotations map[string]string `json:"annotations,omitempty"`\n}\n')),(0,i.kt)("p",null,"You should handle ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," in Lua script and ",(0,i.kt)("strong",{parentName:"p"},"must retrun an object contains expected spec, labels and annotations")," of the API Gateway resource, a simple way is to return ",(0,i.kt)("inlineCode",{parentName:"p"},"obj.data"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua variables are assigned by reference,\n-- so updates to 'spec' can be synchronized to 'obj.data.spec'.\nspec = obj.data.spec -- get resource 'spec'\nhosts = spec.hosts\ncanaryService = obj.canaryService\n-- traverse header 'matches' defined in Rollout strategy\nfor _, match in ipairs(obj.matches) do\n    ... -- define how to handle matches\nend\n-- return 'obj.data' and Kruise Rollout will update the resource\nreturn obj.data\n")),(0,i.kt)("p",null,"Or you can define your own variable as return value as long as it ",(0,i.kt)("strong",{parentName:"p"},"contains expected spec, labels and annotations"),", an example is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"...\n-- define the return variable\nret = {}\n-- set annotations, labels and spec of ret\nret.annotations = annotations\nret.labels = labels\nret.spec = spec\nreturn ret\n")),(0,i.kt)("h3",{id:"debug-your-lua-script"},"Debug Your Lua Script"),(0,i.kt)("p",null,"If you need to debug Lua scripts, you can achieve this by installing the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=actboy168.lua-debug"},"Lua Debug")," extension in VSCode. Once installed, you can execute Lua scripts in a step-by-step debugging mode and view variable values by selecting ",(0,i.kt)("strong",{parentName:"p"},"Lua Debug -> Debug Current File")," from the Run and Debug menu."),(0,i.kt)("img",{src:a(3132).Z,width:"50%"}),(0,i.kt)("p",null,"Afterwards, define the global variable ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," in the Lua script to enable step-by-step debugging and test if the Lua script is working as expected."),(0,i.kt)("p",null,"You can generate and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," for debugging by running ",(0,i.kt)("inlineCode",{parentName:"p"},"go run ./lua_configuration/convert_test_case_to_lua_object.go"),". This program will automatically retrieve the test cases from the ",(0,i.kt)("inlineCode",{parentName:"p"},"testdata")," directory of all custom API Gateway resources in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lua_configuration")," folder, convert them into the form of the global variable ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," that passes to Lua script, and save them in ",(0,i.kt)("inlineCode",{parentName:"p"},"test_case_obj.lua"),". This makes it convenient for users to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," to their Lua scripts and execute step-by-step debugging."),(0,i.kt)("p",null,"An example of ",(0,i.kt)("inlineCode",{parentName:"p"},"test_case_obj.lua")," is shown as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'steps = {\n    -- obj of release step_0\n    step_0 = { canaryWeight = -1, stableWeight = 101,\n        matches = { { headers = { { value = "demo", type = "Exact", name = "destination", }, }, }, },\n        canaryService = "mocka", stableService = "mocka",\n        data = {\n            spec = { subsets = { { labels = { version = "base", }, name = "version-base", }, },\n                trafficPolicy = { loadBalancer = { simple = "ROUND_ROBIN", }, }, host = "svc-a", }, }, }, }\n')),(0,i.kt)("p",null,"Pass the Lua table defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"test_case_obj.lua")," as global variable ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," in your Lua script then you can start debugging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- define obj in your Lua script, copied from test_case_obj.lua\nobj = { canaryWeight = -1, stableWeight = 101,\n        matches = { { headers = { { value = "demo", type = "Exact", name = "destination", }, }, }, },\n        canaryService = "mocka", stableService = "mocka", },\n        data = {\n            spec = { subsets = { { labels = { version = "base", }, name = "version-base", }, },\n                trafficPolicy = { loadBalancer = { simple = "ROUND_ROBIN", }, }, host = "svc-a", }, }, }\nspec = obj.data.spec\n--- define your lua script below\n')),(0,i.kt)("img",{src:a(3257).Z}),"### Add RBAC Permissions for API Gateway Resources In order to enable Kruise Rollout to access and update the API gateway resources, you need to add the RBAC permissions of the API gateway resources for Kruise Rollout.",(0,i.kt)("p",null,"You can achieve this by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl edit role kruise-rollout-leader-election-role -n kruise-rollout")," and adding ",(0,i.kt)("inlineCode",{parentName:"p"},"get, list, patch, update, watch")," permissions for API gateway resource in the RBAC role. An example for Istio VirtualService and DestinationRule is shown as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: kruise-rollout-leader-election-role\n  namespace: kruise-rollout\nrules:\n  - apiGroups:\n    - networking.istio.io\n    resources:\n    - destinationrules\n    - virtualservices\n    verbs:\n    - get\n    - list\n    - patch\n    - update\n    - watch\n  ...\n")))}m.isMDXComponent=!0},664:function(e,t,a){t.Z=a.p+"assets/images/custom-workflow-50d262e1c57f2046adddd81b26f0b827.png"},3257:function(e,t,a){t.Z=a.p+"assets/images/debug-lua-941e65f925603f43ed7c241c7615cf40.gif"},8526:function(e,t,a){t.Z=a.p+"assets/images/test-lua-886b3c9ee4711a35e7bea651128e31fb.gif"},3132:function(e,t,a){t.Z=a.p+"assets/images/vscode-conf-402152c12f5ad907063732b4f52941d3.png"}}]);