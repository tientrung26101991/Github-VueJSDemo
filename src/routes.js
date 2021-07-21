import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue' //add
import Signup from './components/SignUp.vue' //add
import AddUser from './components/AddUser.vue' //add

const routes = [
    { path: '/', component: Home, name:'home' },
    { path: '/login', component: LoginForm, name:'login' },
    { path: '/signup', component: Signup, name:'signup' },
    { path: '/add', component: AddUser, name : 'add' },
];

export default routes;