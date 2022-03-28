"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[604],{8686:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"v1.0","label":"v1.0","banner":null,"badge":true,"className":"docs-version-v1.0","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"\u5feb\u901f\u5f00\u59cb","collapsed":false,"items":[{"type":"link","label":"OpenKruise \u7b80\u4ecb","href":"/zh/docs/","docId":"introduction"},{"type":"link","label":"\u5b89\u88c5","href":"/zh/docs/installation","docId":"installation"}],"collapsible":true},{"type":"category","label":"\u6838\u5fc3\u6982\u5ff5","collapsed":false,"items":[{"type":"link","label":"\u7cfb\u7edf\u67b6\u6784","href":"/zh/docs/core-concepts/architecture","docId":"core-concepts/architecture"},{"type":"link","label":"\u539f\u5730\u5347\u7ea7","href":"/zh/docs/core-concepts/inplace-update","docId":"core-concepts/inplace-update"}],"collapsible":true},{"type":"category","label":"\u7528\u6237\u624b\u518c","collapsed":true,"items":[{"type":"category","collapsed":true,"collapsible":true,"label":"\u901a\u7528\u5de5\u4f5c\u8d1f\u8f7d","items":[{"type":"link","label":"CloneSet","href":"/zh/docs/user-manuals/cloneset","docId":"user-manuals/cloneset"},{"type":"link","label":"Advanced StatefulSet","href":"/zh/docs/user-manuals/advancedstatefulset","docId":"user-manuals/advancedstatefulset"},{"type":"link","label":"Advanced DaemonSet","href":"/zh/docs/user-manuals/advanceddaemonset","docId":"user-manuals/advanceddaemonset"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u4efb\u52a1\u5de5\u4f5c\u8d1f\u8f7d","items":[{"type":"link","label":"BroadcastJob","href":"/zh/docs/user-manuals/broadcastjob","docId":"user-manuals/broadcastjob"},{"type":"link","label":"AdvancedCronJob","href":"/zh/docs/user-manuals/advancedcronjob","docId":"user-manuals/advancedcronjob"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Sidecar\u5bb9\u5668\u7ba1\u7406","items":[{"type":"link","label":"SidecarSet","href":"/zh/docs/user-manuals/sidecarset","docId":"user-manuals/sidecarset"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u591a\u533a\u57df\u7ba1\u7406","items":[{"type":"link","label":"WorkloadSpread","href":"/zh/docs/user-manuals/workloadspread","docId":"user-manuals/workloadspread"},{"type":"link","label":"UnitedDeployment","href":"/zh/docs/user-manuals/uniteddeployment","docId":"user-manuals/uniteddeployment"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u589e\u5f3a\u8fd0\u7ef4\u80fd\u529b","items":[{"type":"link","label":"Container Restart","href":"/zh/docs/user-manuals/containerrecreaterequest","docId":"user-manuals/containerrecreaterequest"},{"type":"link","label":"ImagePullJob","href":"/zh/docs/user-manuals/imagepulljob","docId":"user-manuals/imagepulljob"},{"type":"link","label":"Container Launch Priority","href":"/zh/docs/user-manuals/containerlaunchpriority","docId":"user-manuals/containerlaunchpriority"},{"type":"link","label":"ResourceDistribution","href":"/zh/docs/user-manuals/resourcedistribution","docId":"user-manuals/resourcedistribution"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u5e94\u7528\u5b89\u5168\u9632\u62a4","items":[{"type":"link","label":"Deletion Protection","href":"/zh/docs/user-manuals/deletionprotection","docId":"user-manuals/deletionprotection"},{"type":"link","label":"PodUnavailableBudget","href":"/zh/docs/user-manuals/podunavailablebudget","docId":"user-manuals/podunavailablebudget"}]}],"collapsible":true},{"type":"category","label":"\u6700\u4f73\u5b9e\u8df5","collapsed":true,"items":[{"type":"link","label":"HPA configuration","href":"/zh/docs/best-practices/hpa-configuration","docId":"best-practices/hpa-configuration"},{"type":"link","label":"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff082\uff09\uff1aGitOps + OpenKruise CloneSet","href":"/zh/docs/best-practices/gitops-with-kruise","docId":"best-practices/gitops-with-kruise"},{"type":"link","label":"\u57fa\u4e8e HPA \u548c WorkloadSpread \u7684\u6781\u81f4\u5f39\u6027\u8c03\u5ea6\u6700\u4f73\u5b9e\u8df5","href":"/zh/docs/best-practices/elastic-deployment","docId":"best-practices/elastic-deployment"},{"type":"link","label":"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff081\uff09\uff1a\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed","href":"/zh/docs/best-practices/ci-pipeline-image-predownload","docId":"best-practices/ci-pipeline-image-predownload"},{"type":"link","label":"\u7ba1\u7406\u65e5\u5fd7\u91c7\u96c6sidecar\u5bb9\u5668\u6700\u4f73\u5b9e\u8df5","href":"/zh/docs/best-practices/log-container-sidecarset","docId":"best-practices/log-container-sidecarset"},{"type":"link","label":"CloneSet Lifecycle\uff1a\u5728 Pod \u751f\u547d\u5468\u671f\u7ba1\u7406\u4e2d\u63d2\u5165\u5b9a\u5236\u5316\u903b\u8f91","href":"/zh/docs/best-practices/cloneset-lifecycle","docId":"best-practices/cloneset-lifecycle"},{"type":"link","label":"BroadcastJob + Advanced CronJob \u5b9a\u671f\u6e05\u7406\u8282\u70b9\u78c1\u76d8","href":"/zh/docs/best-practices/acronjob+broadcastjob","docId":"best-practices/acronjob+broadcastjob"}],"collapsible":true},{"type":"category","label":"\u5f00\u53d1\u8005\u624b\u518c","collapsed":true,"items":[{"type":"link","label":"Golang client","href":"/zh/docs/developer-manuals/go-client","docId":"developer-manuals/go-client"},{"type":"link","label":"Java client","href":"/zh/docs/developer-manuals/java-client","docId":"developer-manuals/java-client"},{"type":"link","label":"Other languages","href":"/zh/docs/developer-manuals/other-languages","docId":"developer-manuals/other-languages"}],"collapsible":true},{"type":"category","label":"\u53c2\u8003","collapsed":true,"items":[{"type":"category","collapsed":true,"collapsible":true,"label":"CLI tools","items":[{"type":"link","label":"Kubectl Plugin","href":"/zh/docs/cli-tool/kubectl-plugin","docId":"cli-tool/kubectl-plugin"}]}],"collapsible":true},{"type":"link","label":"FAQ","href":"/zh/docs/faq","docId":"faq"}]},"docs":{"best-practices/acronjob+broadcastjob":{"id":"best-practices/acronjob+broadcastjob","title":"BroadcastJob + Advanced CronJob \u5b9a\u671f\u6e05\u7406\u8282\u70b9\u78c1\u76d8","description":"\u76f8\u8f83\u4e8e CPU\u3001\u5185\u5b58\u8fd9\u7c7b\u5177\u6709\u8f83\u9ad8\u7075\u6d3b\u6027\u7684\u8d44\u6e90\uff0c\u8282\u70b9\u78c1\u76d8\u5b58\u50a8\u53ef\u7528\u7a7a\u95f4\u5728 Kubernetes \u539f\u751f\u4f53\u7cfb\u4e2d\u57fa\u672c\u4e0a\u5904\u4e8e\u4e00\u79cd\u5355\u8c03\u9012\u51cf\u7684\u5bbf\u547d\uff0c\u78c1\u76d8\u538b\u529b\u68c0\u6d4b\u548c\u63a7\u5236\u6210\u4e3a\u8282\u70b9\u8fd0\u7ef4\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\uff0c\u5426\u5219\u8fc7\u5927\u7684\u78c1\u76d8\u538b\u529b\u53ef\u80fd\u5bfc\u81f4\u8be5\u8282\u70b9\u65e0\u6cd5\u8c03\u5ea6\uff0c\u751a\u81f3\u5bfc\u81f4\u8282\u70b9\u4e0a\u7684 Pod \u88ab\u9a71\u9010\u7b49\u7b49\u4e00\u7cfb\u5217\u526f\u4f5c\u7528\uff0c\u5f71\u54cd\u96c6\u7fa4\u7684\u7a33\u5b9a\u6027\u3002","sidebar":"docs"},"best-practices/ci-pipeline-image-predownload":{"id":"best-practices/ci-pipeline-image-predownload","title":"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff081\uff09\uff1a\u6301\u7eed\u96c6\u6210\uff08CI\uff09+ OpenKruise\u955c\u50cf\u9884\u70ed","description":"\u4ec0\u4e48\u662fDevops\uff1f","sidebar":"docs"},"best-practices/cloneset-lifecycle":{"id":"best-practices/cloneset-lifecycle","title":"CloneSet Lifecycle\uff1a\u5728 Pod \u751f\u547d\u5468\u671f\u7ba1\u7406\u4e2d\u63d2\u5165\u5b9a\u5236\u5316\u903b\u8f91","description":"\u56e0\u4e3a\u5404\u79cd\u5404\u6837\u7684\u5386\u53f2\u539f\u56e0\u548c\u5ba2\u89c2\u56e0\u7d20\uff0c\u6709\u4e9b\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u5c06\u81ea\u5df1\u516c\u53f8\u7684\u6574\u5957\u4f53\u7cfb\u67b6\u6784 Kubernetes \u5316\uff0c\u6bd4\u5982\u6709\u4e9b\u7528\u6237\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528 Kubernetes \u672c\u8eab\u63d0\u4f9b\u7684\u670d\u52a1\u53d1\u73b0\u673a\u5236(Service)\uff0c\u800c\u662f\u4f7f\u7528\u4e86\u72ec\u7acb\u4e8e Kubernetes \u4e4b\u5916\u7684\u53e6\u5916\u4e00\u5957\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\u4f53\u7cfb\u3002\u5728\u8fd9\u79cd\u67b6\u6784\u4e0b\uff0c\u5982\u679c\u7528\u6237\u5bf9\u670d\u52a1\u8fdb\u884c Kubernetes \u5316\u6539\u9020\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8bf8\u591a\u95ee\u9898\u3002","sidebar":"docs"},"best-practices/elastic-deployment":{"id":"best-practices/elastic-deployment","title":"\u57fa\u4e8e HPA \u548c WorkloadSpread \u7684\u6781\u81f4\u5f39\u6027\u8c03\u5ea6\u6700\u4f73\u5b9e\u8df5","description":"\u81ea 0.10.0 \u7248\u672c\u5f00\u59cb\uff0cOpenKruise \u63d0\u51fa\u4e86\u4e00\u79cd\u57fa\u4e8e\u65c1\u8def\uff08by-pass\uff09\u67b6\u6784\u7684\u591a\u57df\u7ba1\u7406\u7ec4\u4ef6 --- WorkloadSpread\u3002\u5b83\u5141\u8bb8\u7528\u6237\u5c06 Workload \u7684\u526f\u672c\u5728\u4e0d\u540c\u8282\u70b9\u3001\u4e0d\u540c\u673a\u623f\u3001\u751a\u81f3\u4e0d\u540c\u4e91\u5382\u5546\u4e2d\u8fdb\u884c\u591a\u57df\u5316\u7f16\u6392\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u5bf9\u4e0d\u540c\u57df\u7684\u526f\u672c\u8fdb\u884c\u5dee\u5f02\u5316\u914d\u7f6e\u3002WorkloadSpread \u53ef\u4ee5\u4ee5\u65e0\u4fb5\u5165\u7684\u65b9\u5f0f\uff0c\u8d4b\u4e88\u5b58\u91cf\u7684/\u589e\u91cf\u7684 Workload \u591a\u57df\u6253\u6563\u3001\u5f39\u6027\u8c03\u5ea6\u3001\u7cbe\u7ec6\u5316\u7ba1\u7406\u7684\u80fd\u529b\u3002","sidebar":"docs"},"best-practices/gitops-with-kruise":{"id":"best-practices/gitops-with-kruise","title":"\u4e91\u539f\u751fDevops\u6700\u4f73\u5b9e\u8df5\uff082\uff09\uff1aGitOps + OpenKruise CloneSet","description":"\u4ec0\u4e48\u662fGitOps\uff1f","sidebar":"docs"},"best-practices/hpa-configuration":{"id":"best-practices/hpa-configuration","title":"HPA configuration","description":"Kruise \u4e2d\u7684 Workload\uff0c\u6bd4\u5982 CloneSet\u3001Advanced StatefulSet\u3001UnitedDeployment\uff0c\u90fd\u5b9e\u73b0\u4e86 scale subresource\u3002","sidebar":"docs"},"best-practices/log-container-sidecarset":{"id":"best-practices/log-container-sidecarset","title":"\u7ba1\u7406\u65e5\u5fd7\u91c7\u96c6sidecar\u5bb9\u5668\u6700\u4f73\u5b9e\u8df5","description":"Kubernetes\u5bb9\u5668\u65e5\u5fd7\u6536\u96c6","sidebar":"docs"},"cli-tool/kubectl-plugin":{"id":"cli-tool/kubectl-plugin","title":"Kubectl Plugin","description":"Kruise-tools \u4e3a Kruise \u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5305\u62ec kubectl-kruise\uff0c\u5b83\u7684\u662f kubectl \u7684\u6807\u51c6\u63d2\u4ef6\u3002","sidebar":"docs"},"core-concepts/architecture":{"id":"core-concepts/architecture","title":"\u7cfb\u7edf\u67b6\u6784","description":"OpenKruise \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:","sidebar":"docs"},"core-concepts/inplace-update":{"id":"core-concepts/inplace-update","title":"\u539f\u5730\u5347\u7ea7","description":"\u539f\u5730\u5347\u7ea7\u662f OpenKruise \u63d0\u4f9b\u7684\u6838\u5fc3\u529f\u80fd\u4e4b\u4e00\u3002","sidebar":"docs"},"developer-manuals/go-client":{"id":"developer-manuals/go-client","title":"Golang client","description":"\u5982\u679c\u8981\u5728\u4e00\u4e2a Golang \u9879\u76ee\u4e2d\u5bf9 OpenKruise \u7684\u8d44\u6e90\u505a create/get/update/delete \u8fd9\u4e9b\u64cd\u4f5c\u3001\u6216\u8005\u901a\u8fc7 informer \u505a list-watch\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u652f\u6301 OpenKruise \u7684 client\u3002","sidebar":"docs"},"developer-manuals/java-client":{"id":"developer-manuals/java-client","title":"Java client","description":"\u76ee\u524d\u6211\u4eec\u6709\u4e00\u4e2a client-java \u4ed3\u5e93\u63d0\u4f9b\u4e86 Kruise \u8d44\u6e90\u7684 schema \u5b9a\u4e49\u3002","sidebar":"docs"},"developer-manuals/other-languages":{"id":"developer-manuals/other-languages","title":"Other languages","description":"\u76ee\u524d\uff0cKruise \u6ca1\u6709\u63d0\u4f9b\u9664\u4e86 Golang \u548c Java \u4e4b\u5916\u8bed\u8a00\u7684 SDK\uff0c\u4e8b\u5b9e\u4e0a\u6211\u4eec\u4e5f\u53ea\u63a8\u8350\u4f60\u4f7f\u7528 Golang Client\uff0c\u5b83\u662f\u4fdd\u8bc1\u4e86\u6700\u65b0\u7248\u672c\u548c\u7a33\u5b9a\u6027\u3002","sidebar":"docs"},"faq":{"id":"faq","title":"FAQ","description":"","sidebar":"docs"},"installation":{"id":"installation","title":"\u5b89\u88c5","description":"\u4ece v1.0.0 (alpha/beta) \u5f00\u59cb\uff0cOpenKruise \u8981\u6c42\u5728 Kubernetes >= 1.16 \u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u4f7f\u7528\u3002","sidebar":"docs"},"introduction":{"id":"introduction","title":"OpenKruise \u7b80\u4ecb","description":"\u6b22\u8fce\u6765\u5230 OpenKruise \u7684\u4e16\u754c\uff01","sidebar":"docs"},"user-manuals/advancedcronjob":{"id":"user-manuals/advancedcronjob","title":"AdvancedCronJob","description":"AdvancedCronJob \u662f\u5bf9\u4e8e\u539f\u751f CronJob \u7684\u6269\u5c55\u7248\u672c\u3002","sidebar":"docs"},"user-manuals/advanceddaemonset":{"id":"user-manuals/advanceddaemonset","title":"Advanced DaemonSet","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f DaemonSet \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 \u7070\u5ea6\u5206\u6279\u3001\u6309 Node label \u9009\u62e9\u3001\u6682\u505c\u3001\u70ed\u5347\u7ea7\u7b49\u3002","sidebar":"docs"},"user-manuals/advancedstatefulset":{"id":"user-manuals/advancedstatefulset","title":"Advanced StatefulSet","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f StatefulSet \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 maxUnavailable \u5e76\u884c\u53d1\u5e03\u3001\u539f\u5730\u5347\u7ea7\u7b49\u3002","sidebar":"docs"},"user-manuals/broadcastjob":{"id":"user-manuals/broadcastjob","title":"BroadcastJob","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u5c06 Pod \u5206\u53d1\u5230\u96c6\u7fa4\u4e2d\u6bcf\u4e2a node \u4e0a\uff0c\u7c7b\u4f3c\u4e8e DaemonSet\uff0c","sidebar":"docs"},"user-manuals/cloneset":{"id":"user-manuals/cloneset","title":"CloneSet","description":"CloneSet \u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u9ad8\u6548\u7ba1\u7406\u65e0\u72b6\u6001\u5e94\u7528\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u5bf9\u6807\u539f\u751f\u7684 Deployment\uff0c\u4f46 CloneSet \u63d0\u4f9b\u4e86\u5f88\u591a\u589e\u5f3a\u529f\u80fd\u3002","sidebar":"docs"},"user-manuals/containerlaunchpriority":{"id":"user-manuals/containerlaunchpriority","title":"Container Launch Priority","description":"FEATURE STATE: Kruise v1.0.0","sidebar":"docs"},"user-manuals/containerrecreaterequest":{"id":"user-manuals/containerrecreaterequest","title":"Container Restart","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"docs"},"user-manuals/deletionprotection":{"id":"user-manuals/deletionprotection","title":"Deletion Protection","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"docs"},"user-manuals/imagepulljob":{"id":"user-manuals/imagepulljob","title":"ImagePullJob","description":"NodeImage \u548c ImagePullJob \u662f\u4ece Kruise v0.8.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u7684 CRD\u3002","sidebar":"docs"},"user-manuals/podunavailablebudget":{"id":"user-manuals/podunavailablebudget","title":"PodUnavailableBudget","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"docs"},"user-manuals/resourcedistribution":{"id":"user-manuals/resourcedistribution","title":"ResourceDistribution","description":"\u5728\u5bf9 Secret\u3001ConfigMap \u7b49 namespace-scoped \u8d44\u6e90\u8fdb\u884c\u8de8 namespace \u5206\u53d1\u53ca\u540c\u6b65\u7684\u573a\u666f\u4e2d\uff0c\u539f\u751f kubernetes \u76ee\u524d\u53ea\u652f\u6301\u7528\u6237 one-by-one \u5730\u8fdb\u884c\u624b\u52a8\u5206\u53d1\u4e0e\u540c\u6b65\uff0c\u5341\u5206\u5730\u4e0d\u65b9\u4fbf\u3002","sidebar":"docs"},"user-manuals/sidecarset":{"id":"user-manuals/sidecarset","title":"SidecarSet","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u652f\u6301\u901a\u8fc7 admission webhook \u6765\u81ea\u52a8\u4e3a\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u7b26\u5408\u6761\u4ef6\u7684 Pod \u6ce8\u5165 sidecar \u5bb9\u5668\u3002","sidebar":"docs"},"user-manuals/uniteddeployment":{"id":"user-manuals/uniteddeployment","title":"UnitedDeployment","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u6a21\u5f0f\u6765\u901a\u8fc7\u591a\u4e2a workload \u7ba1\u7406\u591a\u4e2a\u533a\u57df\u4e0b\u7684 Pod\u3002","sidebar":"docs"},"user-manuals/workloadspread":{"id":"user-manuals/workloadspread","title":"WorkloadSpread","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"docs"}}}')}}]);