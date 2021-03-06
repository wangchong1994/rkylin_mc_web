/**
 * Created by JoeLiu on 2017-9-15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const home = r => require.ensure([], () => r(require('../modules/home/index.vue')), 'home');
const test = r => require.ensure([], () => r(require('../modules/test/index.vue')), 'test');

var routerConfig = {
    linkActiveClass: 'active',
    routes: [
        {
            name:'/home',
            path: '/home',
            component:home
        }
        ,{
            name:'/test',
            path: '/test',
            component:test
        }]
}

var router = new VueRouter(routerConfig);

router.beforeEach((to, from, next)=>{
    next();
});

export default router;