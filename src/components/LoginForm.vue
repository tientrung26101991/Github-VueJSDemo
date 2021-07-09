<template>
    <div id="form">
        <form @submit="login">
            <h1>Login Form</h1>
            <input type="text" v-model="name" placeholder="enter user name:" /><br><br>
            <input type="password" v-model="password" placeholder="enter user password:" /><br><br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",

        data() {
            return {
                error: [],
                name: null,
                password: null

            }
        },

        methods: {
            login() {
                alert("Name" + this.name + "Pw:" + this.password);


                if(this.name && this.password) {
                    alert(this.name + "," + this.password)        
                }
                this.error=[];    
                if (!this.name) {
                    alert("name is required")
                }
                if (!this.password) {
                    alert("password is required")
                }
                alert("error!!!!!")
            }
        }   
    }

</script>

<style scoped>
    #form {
        background-color:burlywood;
        margin-right:400px;
        margin-top:0px;
        width:500px;
        padding:10px;
        float:right;
        text-align:center;
        
    }
</style>