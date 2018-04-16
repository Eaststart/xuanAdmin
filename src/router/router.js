import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import comp1 from '../views/Comp1.vue'
import comp2 from '../views/Comp2.vue'

export function createRouter (){
    return new Router({
        mode:'history',
        routes:[
            {
                path:'/demo1',
                component:comp1
            },
            {
                path:'/demo2',
                component:comp2
            }
        ]
    })
}