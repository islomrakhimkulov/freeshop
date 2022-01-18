<template>
    <div class="login  shadow text-center" >
        <h2 class="text-uppercase">Kirish</h2>
        <div class="container ">
            <form id="login-form" @submit.prevent="onSubmit()">
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
                    <button class="btn btnColor">
                        <template v-if="loading">
                            <span class="spinner-border spinner-border-sm" role="status"></span>
                            Kuting...
                        </template>
                        <template v-else>
                            Kirish
                        </template>
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
import { mapActions, mapGetters } from 'vuex';

oninput = "this.setCustomValidity('')"

export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: '',
        loading: false,
    }),
    computed: {
        ...mapGetters(['isUserLogined'])
    },
    methods: {
        ...mapActions(["login"]),
        async onSubmit() {
            this.loading = true;

            try {
                await this.login({ email: this.email, password: this.password });
                this.$router.push('/');
            } catch (error) {
                console.error(error.code);
                console.dir(error);
            } finally {
                this.loading = false;
            }
        },
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (!vm.isUserLogined) {
                return;
            }

            next("/");
            return false;
        });
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
