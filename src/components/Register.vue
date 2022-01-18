<template>
    <div class="login shadow text-center" >
        <h2 class="text-uppercase">Ro'yxatdan o'tish</h2>
        <div class="container ">
            <form action="" id="register-form" @submit.prevent="registerRequest">
                <div>
                    <input type="text"
                        v-model="username" 
                        placeholder="Ismingiz" 
                        id="username"
                        autofocus
                    >
                </div>
                <div>
                    <input type="text" 
                        class="login-input" 
                        v-model="email" 
                        placeholder="Elektron pochta" 
                        id="username" 
                        required
                        autofocus
                        oninvalid="this.setCustomValidity('Elektron pochta kiritish shart!')"
                        oninput="this.setCustomValidity('')"
                    >
                </div>
                <div>
                    <input 
                        type="password"
                        class="login-input" 
                        v-model="password" 
                        placeholder="Parolingizni kiriting" 
                        id="password"
                        required
                        oninvalid="this.setCustomValidity('Parol kiritilishi shart!')"
                        oninput="this.setCustomValidity('')"
                    >
                </div>
                <div class="formButtonGroup">
                    <button v-if="!xhrRequest"  class="btn btnColor">Ro'yxatdan o'tish</button>
                    <button v-if="xhrRequest" class="btn btnColor">
                        <span class="spinner-border spinner-border-sm" role="status"></span>
                        kuting...
                    </button>
                    <div class="d-flex justify-content-between align-items-center pt-3">
                        <p>Sizda account bormi?</p>
                        <p>
                            <router-link to="/login" class="mainColor">Kirish</router-link>
                        </p>
                    </div>
                </div> 
            </form>
        </div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
oninput="this.setCustomValidity('')";
export default {
    name: 'Register',
    data: () => ({
        username: '',
        email: '',
        password: '',
        xhrRequest: false,
    }),
    methods: {
     async  registerRequest() {
            let v = this;
            v.xhrRequest = true;
            const auth = getAuth();
            await createUserWithEmailAndPassword( auth,this.email, this.password)
             .then((userCredential) => {
                this.showLogOutButton = true;
                this.showLoginButton = false;
                this.$router.push('/');
                const user = userCredential.user;
                user.displayName = this.username;
                alert("Salom " + this.username + " xush kelibsiz");
             })
             .catch( (error) =>{
                 v.xhrRequest = false;
                 const errorCode = error.code;
                 console.log('errorCode'+errorCode);
                 alert("Ushbu " + this.email + " avval ro'yxatdan o'tgan")
             })
        }
    }
}
</script>
<style>

.login h2 {
    color: #333;
    font-size: 25px;
    font-weight: 600;
}



</style>
