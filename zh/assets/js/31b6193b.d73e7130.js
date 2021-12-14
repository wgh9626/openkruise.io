"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[18],{5139:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"v0.10","label":"v0.10","banner":"unmaintained","badge":true,"className":"docs-version-v0.10","isLast":false,"docsSidebars":{"version-v0.10/docs":[{"type":"category","label":"\u5feb\u901f\u5f00\u59cb","collapsed":false,"items":[{"type":"link","label":"OpenKruise \u7b80\u4ecb","href":"/zh/docs/v0.10/","docId":"introduction"},{"type":"link","label":"\u5b89\u88c5","href":"/zh/docs/v0.10/installation","docId":"installation"}],"collapsible":true},{"type":"category","label":"\u6838\u5fc3\u6982\u5ff5","collapsed":false,"items":[{"type":"link","label":"\u7cfb\u7edf\u67b6\u6784","href":"/zh/docs/v0.10/core-concepts/architecture","docId":"core-concepts/architecture"}],"collapsible":true},{"type":"category","label":"\u7528\u6237\u624b\u518c","collapsed":true,"items":[{"type":"category","collapsed":true,"collapsible":true,"label":"\u901a\u7528\u5de5\u4f5c\u8d1f\u8f7d","items":[{"type":"link","label":"CloneSet","href":"/zh/docs/v0.10/user-manuals/cloneset","docId":"user-manuals/cloneset"},{"type":"link","label":"Advanced StatefulSet","href":"/zh/docs/v0.10/user-manuals/advancedstatefulset","docId":"user-manuals/advancedstatefulset"},{"type":"link","label":"Advanced DaemonSet","href":"/zh/docs/v0.10/user-manuals/advanceddaemonset","docId":"user-manuals/advanceddaemonset"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u4efb\u52a1\u5de5\u4f5c\u8d1f\u8f7d","items":[{"type":"link","label":"BroadcastJob","href":"/zh/docs/v0.10/user-manuals/broadcastjob","docId":"user-manuals/broadcastjob"},{"type":"link","label":"AdvancedCronJob","href":"/zh/docs/v0.10/user-manuals/advancedcronjob","docId":"user-manuals/advancedcronjob"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Sidecar\u5bb9\u5668\u7ba1\u7406","items":[{"type":"link","label":"SidecarSet","href":"/zh/docs/v0.10/user-manuals/sidecarset","docId":"user-manuals/sidecarset"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u591a\u533a\u57df\u7ba1\u7406","items":[{"type":"link","label":"WorkloadSpread","href":"/zh/docs/v0.10/user-manuals/workloadspread","docId":"user-manuals/workloadspread"},{"type":"link","label":"UnitedDeployment","href":"/zh/docs/v0.10/user-manuals/uniteddeployment","docId":"user-manuals/uniteddeployment"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u589e\u5f3a\u8fd0\u7ef4\u80fd\u529b","items":[{"type":"link","label":"Container Restart","href":"/zh/docs/v0.10/user-manuals/containerrecreaterequest","docId":"user-manuals/containerrecreaterequest"},{"type":"link","label":"ImagePullJob","href":"/zh/docs/v0.10/user-manuals/imagepulljob","docId":"user-manuals/imagepulljob"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"\u5e94\u7528\u5b89\u5168\u9632\u62a4","items":[{"type":"link","label":"Deletion Protection","href":"/zh/docs/v0.10/user-manuals/deletionprotection","docId":"user-manuals/deletionprotection"},{"type":"link","label":"PodUnavailableBudget","href":"/zh/docs/v0.10/user-manuals/podunavailablebudget","docId":"user-manuals/podunavailablebudget"}]}],"collapsible":true},{"type":"category","label":"Best Practices","collapsed":true,"items":[{"type":"link","label":"HPA configuration","href":"/zh/docs/v0.10/best-practices/hpa-configuration","docId":"best-practices/hpa-configuration"}],"collapsible":true},{"type":"category","label":"\u5f00\u53d1\u8005\u624b\u518c","collapsed":true,"items":[{"type":"link","label":"Golang client","href":"/zh/docs/v0.10/developer-manuals/go-client","docId":"developer-manuals/go-client"},{"type":"link","label":"Java client","href":"/zh/docs/v0.10/developer-manuals/java-client","docId":"developer-manuals/java-client"},{"type":"link","label":"Other languages","href":"/zh/docs/v0.10/developer-manuals/other-languages","docId":"developer-manuals/other-languages"}],"collapsible":true},{"type":"link","label":"FAQ","href":"/zh/docs/v0.10/faq","docId":"faq"}]},"docs":{"best-practices/hpa-configuration":{"id":"best-practices/hpa-configuration","title":"HPA configuration","description":"Kruise \u4e2d\u7684 Workload\uff0c\u6bd4\u5982 CloneSet\u3001Advanced StatefulSet\u3001UnitedDeployment\uff0c\u90fd\u5b9e\u73b0\u4e86 scale subresource\u3002","sidebar":"version-v0.10/docs"},"core-concepts/architecture":{"id":"core-concepts/architecture","title":"\u7cfb\u7edf\u67b6\u6784","description":"OpenKruise \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:","sidebar":"version-v0.10/docs"},"developer-manuals/go-client":{"id":"developer-manuals/go-client","title":"Golang client","description":"\u5982\u679c\u8981\u5728\u4e00\u4e2a Golang \u9879\u76ee\u4e2d\u5bf9 OpenKruise \u7684\u8d44\u6e90\u505a create/get/update/delete \u8fd9\u4e9b\u64cd\u4f5c\u3001\u6216\u8005\u901a\u8fc7 informer \u505a list-watch\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u652f\u6301 OpenKruise \u7684 client\u3002","sidebar":"version-v0.10/docs"},"developer-manuals/java-client":{"id":"developer-manuals/java-client","title":"Java client","description":"\u76ee\u524d\u6211\u4eec\u6709\u4e00\u4e2a client-java \u4ed3\u5e93\u63d0\u4f9b\u4e86 Kruise \u8d44\u6e90\u7684 schema \u5b9a\u4e49\u3002","sidebar":"version-v0.10/docs"},"developer-manuals/other-languages":{"id":"developer-manuals/other-languages","title":"Other languages","description":"\u76ee\u524d\uff0cKruise \u6ca1\u6709\u63d0\u4f9b\u9664\u4e86 Golang \u548c Java \u4e4b\u5916\u8bed\u8a00\u7684 SDK\uff0c\u4e8b\u5b9e\u4e0a\u6211\u4eec\u4e5f\u53ea\u63a8\u8350\u4f60\u4f7f\u7528 Golang Client\uff0c\u5b83\u662f\u4fdd\u8bc1\u4e86\u6700\u65b0\u7248\u672c\u548c\u7a33\u5b9a\u6027\u3002","sidebar":"version-v0.10/docs"},"faq":{"id":"faq","title":"FAQ","description":"","sidebar":"version-v0.10/docs"},"installation":{"id":"installation","title":"\u5b89\u88c5","description":"\u5c3d\u7ba1\u76ee\u524d OpenKruise \u80fd\u591f\u517c\u5bb9 Kubernetes >= 1.13 \u7248\u672c\u7684\u96c6\u7fa4\uff0c\u4f46\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u5728 Kubernetes >= 1.16 \u4ee5\u4e0a\u7248\u672c\u7684\u96c6\u7fa4\u4e2d\u4f7f\u7528\u3002","sidebar":"version-v0.10/docs"},"introduction":{"id":"introduction","title":"OpenKruise \u7b80\u4ecb","description":"\u6b22\u8fce\u6765\u5230 OpenKruise \u7684\u4e16\u754c\uff01","sidebar":"version-v0.10/docs"},"user-manuals/advancedcronjob":{"id":"user-manuals/advancedcronjob","title":"AdvancedCronJob","description":"AdvancedCronJob \u662f\u5bf9\u4e8e\u539f\u751f CronJob \u7684\u6269\u5c55\u7248\u672c\u3002","sidebar":"version-v0.10/docs"},"user-manuals/advanceddaemonset":{"id":"user-manuals/advanceddaemonset","title":"Advanced DaemonSet","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f DaemonSet \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 \u7070\u5ea6\u5206\u6279\u3001\u6309 Node label \u9009\u62e9\u3001\u6682\u505c\u3001\u70ed\u5347\u7ea7\u7b49\u3002","sidebar":"version-v0.10/docs"},"user-manuals/advancedstatefulset":{"id":"user-manuals/advancedstatefulset","title":"Advanced StatefulSet","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f StatefulSet \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 maxUnavailable \u5e76\u884c\u53d1\u5e03\u3001\u539f\u5730\u5347\u7ea7\u7b49\u3002","sidebar":"version-v0.10/docs"},"user-manuals/broadcastjob":{"id":"user-manuals/broadcastjob","title":"BroadcastJob","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u5c06 Pod \u5206\u53d1\u5230\u96c6\u7fa4\u4e2d\u6bcf\u4e2a node \u4e0a\uff0c\u7c7b\u4f3c\u4e8e DaemonSet\uff0c","sidebar":"version-v0.10/docs"},"user-manuals/cloneset":{"id":"user-manuals/cloneset","title":"CloneSet","description":"CloneSet \u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u9ad8\u6548\u7ba1\u7406\u65e0\u72b6\u6001\u5e94\u7528\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u5bf9\u6807\u539f\u751f\u7684 Deployment\uff0c\u4f46 CloneSet \u63d0\u4f9b\u4e86\u5f88\u591a\u589e\u5f3a\u529f\u80fd\u3002","sidebar":"version-v0.10/docs"},"user-manuals/containerrecreaterequest":{"id":"user-manuals/containerrecreaterequest","title":"Container Restart","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"version-v0.10/docs"},"user-manuals/deletionprotection":{"id":"user-manuals/deletionprotection","title":"Deletion Protection","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"version-v0.10/docs"},"user-manuals/imagepulljob":{"id":"user-manuals/imagepulljob","title":"ImagePullJob","description":"NodeImage \u548c ImagePullJob \u662f\u4ece Kruise v0.8.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u7684 CRD\u3002","sidebar":"version-v0.10/docs"},"user-manuals/podunavailablebudget":{"id":"user-manuals/podunavailablebudget","title":"PodUnavailableBudget","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"version-v0.10/docs"},"user-manuals/sidecarset":{"id":"user-manuals/sidecarset","title":"SidecarSet","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u652f\u6301\u901a\u8fc7 admission webhook \u6765\u81ea\u52a8\u4e3a\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u7b26\u5408\u6761\u4ef6\u7684 Pod \u6ce8\u5165 sidecar \u5bb9\u5668\u3002","sidebar":"version-v0.10/docs"},"user-manuals/uniteddeployment":{"id":"user-manuals/uniteddeployment","title":"UnitedDeployment","description":"\u8fd9\u4e2a\u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u6a21\u5f0f\u6765\u901a\u8fc7\u591a\u4e2a workload \u7ba1\u7406\u591a\u4e2a\u533a\u57df\u4e0b\u7684 Pod\u3002","sidebar":"version-v0.10/docs"},"user-manuals/workloadspread":{"id":"user-manuals/workloadspread","title":"WorkloadSpread","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"version-v0.10/docs"}}}')}}]);