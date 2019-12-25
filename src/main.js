import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//       //这里判断用户是否登录，验证本地存储是否有token
//       if (!localStorage.token) { // 判断当前的token是否存在
//           next({
//               path: '/login',
//               query: { redirect: to.fullPath }
//           })
//       } else {
//           next()
//       }
//   } else {
//       next() // 确保一定要调用 next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   if(to.path === '/login'){
//     sessionStorage.removeItem('user');
//   }
//   var user = sessionStorage.getItem('user');
//   if(!user && to.path !== '/login'){
//     next({
//       path: '/login'
//     })
//   }else{
//     next();
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
