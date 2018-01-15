import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryPage from './../views/CategoryPage'
import ProductPage from './../views/ProductPage'
import HomePage from './../views/HomePage'
import CartPage from './../views/CartPage'
import BasketPage from './../views/BasketPage'

Vue.use(VueRouter);

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