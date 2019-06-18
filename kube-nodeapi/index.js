const k8s = require('@kubernetes/client-node');
 
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
 
const k8sApi = kc.makeApiClient(k8s.Core_v1Api);
 
// console.log(Object.getOwnPropertyNames(k8sApi));

const body = {
   "id":"nginx-mysql",
   "kind": "Pod",
   "apiVersion": "v1",
   "metadata": {
      "name": "",
      "labels": {
         "name": "nginx-mysql"
      }
   },
   "spec": {
      "containers": [
         {
            "name": "nginx",
            "image": "nginx",
            "ports": [
               {
                  "hostPort": 85,
                  "containerPort": 80
               }
            ]
         },
         {
            "name": "mysql",
            "image": "mysql",
            "ports": [
               {
                  "hostPort": 3306,
                  "containerPort": 3306
               }
            ]
         }
      ]
   }
}

k8sApi.createNamespacedPod('default', body).then((res)=>{
	console.log(res);
})
.catch(err=>{
	console.log(err, 'ERROR');
});

// k8sApi.listNamespacedPod('default').then((res) => {
//     // console.log(res.body);
//     res.body.items.forEach(item=>{
//     	// console.log(item.spec.volumes);
//     })
// });
