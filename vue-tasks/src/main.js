import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import index from './views/index.vue'
import second from './views/second.vue'
import third from './views/third.vue'


// переменная со страницами приложения
let routes = [
    {
        path: '/',
        component: index,
    },
    {
        path: '/second',
        component: second,
    },
    {
        path: '/third',
        component: third,
    },
];

let router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

createApp(App).use(router).mount('#app')
