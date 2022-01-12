<template>
    <div class="footer-bottom ">
        <div class="container">
            <div class="footer-wrapper d-flex align-items-center justify-content-between">
                <p>2022 Barcha huquqlar himoyalangan. &copy;Islom
                </p>
                <ul class="pay-link d-flex">
                    <li>
                        <router-link to="/">
                            <img :src="require('../assets/images/paypal.png')" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/category">
                            <img :src="require('../assets/images/paypal.png')" alt="">
                        </router-link>
                    </li>   
                    <li>
                        <router-link to="/about">
                            <img :src="require('../assets/images/paypal.png')" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/help">
                            <img :src="require('../assets/images/paypal.png')" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            <img :src="require('../assets/images/paypal.png')" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBottom',
    components: {

    },
}
</script>

<style>
.footer-bottom {
    padding: 15px 0 0 0;
    background: #222222;
    color: #E7E7E7;
}
.pay-link {
    list-style-type: none;
    color: var(--mainColor);
}
.pay-link li a {
    padding: 0 7px;
}
@media only screen and (max-width: 768px) {
    .pay-link li a {
        padding: 0 0;
    }
}
</style>
