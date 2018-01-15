import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-ls';
import CategoryPage from './../views/CategoryPage'
import ProductPage from './../views/ProductPage'
import HomePage from './../views/HomePage'
import CartPage from './../views/CartPage'
import BasketPage from './../views/BasketPage'
import AdminPage from '../views/admin/AdminPage'
import LoginPage from './../views/admin/LoginPage'
import ProductListPage from './../views/admin/ProductListPage'


Vue.use(VueLocalStorage);

Vue.use(VueRouter);

function checkAuth(to, from, next) {
    if (from.path === '/admin/login') {
        // if coming from login page skip continue automatically to avoid loop
        next();
    }
    Backendless.UserService.getCurrentUser().then(() => {
        next();
    }).catch(()=>{
        next({ path: '/admin/login' });
    });
};

const baseRoutes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/basket',
        component: BasketPage,
        name: 'basket'
    },
    {
        path: '/cart',
        component: CartPage,
        name: 'cart'
    },
    {
        path: '/admin',
        component: AdminPage,
        name: 'admin',
        children: [
            {
                path: 'login',
                component: LoginPage
            },
            {
                path: 'products',
                component: ProductListPage,
                name: 'admin-products-list',
                beforeEnter: checkAuth,
            },
        ]
    },
    {
        path: '/:catSlug',
        component: CategoryPage,
        name: 'category'
    },
    {
        path: '/:catSlug/:productSlug',
        component: ProductPage,
        name: 'detail'
    },
    {
        path: '*',
        redirect: '/',
    },
];


export const routes = baseRoutes;

export const VueRouterObject = {
    routes,
};

const router = new VueRouter(VueRouterObject);

export default router;