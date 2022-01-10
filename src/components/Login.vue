<template>
    <div class="login  shadow text-center" >
        <h2 class="text-uppercase">Kirish</h2>
        <div class="container ">
            <form action="" id="login-form"  @submit.prevent="loginRequest()">
                <div>
                    <input type="text" 
                        class="login-input" 
                        v-model="email" 
                        placeholder="Elektron pochta" 
                        id="username" 
                        required
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
                    <button v-if="!xhrRequest" class="btn btnColor">Kirish</button>
                    <button v-if="xhrRequest" class="btn btnColor">
                        <span class="spinner-border spinner-border-sm" role="status"></span>
                        kuting...
                    </button>
                    <div class="d-flex justify-content-between align-items-center pt-2">
                        <p>Tarmoqda yangimisiz?</p>
                        <p>
                            <router-link to="/register" class="mainColor">Ro'yxatdan o'tish</router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

oninput="this.setCustomValidity('')"
export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: '',
        xhrRequest: false,
    }),
    methods: {
        async loginRequest() {
            let v = this;
            v.xhrRequest = true;
            const auth = getAuth();
            await signInWithEmailAndPassword(auth,this.email,this.password)
             .then((userCredential) => {
                 const user = userCredential.user;
                 localStorage.setItem('STORAGE_KEY', JSON.stringify(this.user.accessToken));
                 this.$router.push('/');
                 console.log('successfully');
                 console.log(user);
                 console.log(user.accessToken);
                 alert(userCredential.user.email);
             })
             .catch( (error) => {
                 v.xhrRequest = false;
                 const errorCode = error.code;
                 console.log('errorCode'+errorCode);
                 alert(" Login yoki parol no'tog'ri qaytadan o'rinib ko'ring");
             })
        }
    }
}
</script>        

<style>

.login {
    max-width: 350px;
    width: 100%;
    margin: 10px auto 40px auto;
    padding: 20px 0;
    border-radius: 5px;
}
.login h2 {
    color: #333;
    font-size: 32px;
    font-weight: 600;
}

input[type="text"],
input[type="password"] {
  border: 0px solid var(--mainColor);
  border-bottom: 1px solid var(--mainColor);
  /* display: block; */
  width: 100%;
  padding: 5px;
  margin: 12px 0;
  transition: .5s ease-out; 
  outline: none;
  color: var(--mainColor);
}

input::placeholder{
   color: #333333;
}
.formButtonGroup {
    margin-top: 10px;
}
</style>
