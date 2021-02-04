import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const Cart = () => import('../views/cart/Cart');
const Category = () => import('../views/category/Category');
const Profile = () => import('../views/profile/Profile');
const Home = () => import('../views/home/Home');

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        meta:{
            title:'主页'
        },
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        meta:{
            title:'购物车'
        },
        component: Cart
    },
    {
        path: '/category',
        name: 'category',
        meta:{
            title:'分类'
        },
        component: Category
    },
    {
        path: '/profile',
        name: 'profile',
        meta:{
            title:'个人信息'
        },
        component: Profile
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
});
export default router
