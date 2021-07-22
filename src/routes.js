import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue' //add
import Signup from './components/SignUp.vue' //add
import AddUser from './components/AddUser.vue' //add
import List from './components/UserList.vue'

const routes = [
    { path: '/', component: Home, name:'home' },
    { path: '/login', component: LoginForm, name:'login' },
    { path: '/signup', component: Signup, name:'signup' },
    { path: '/add', component: AddUser, name : 'add' },
    { path: '/userlist', component: List, name : 'list' },
];

export default routes;