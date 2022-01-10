<template>
    <div class="footer">
        <footer class="footer" id="footer">
            <section class="footer-top">
                <div class="container footer-top-inner d-flex justify-content-between">
                    <p>We’re confident we’ve provided all the best for you. Stay connect with us</p>
                    <ul class="d-flex">
                        <li><router-link to="/"><i class="fab fa-facebook-f"></i></router-link></li>
                        <li><router-link to="/"><i class="fab fa-twitter"></i></router-link></li>
                        <li><router-link to="/"><i class="fab fa-instagram"></i></router-link></li>
                        <li><router-link to="/"><i class="fab fa-linkedin-in"></i></router-link></li>
                        <li><router-link to="/"><i class="fab fa-telegram-plane"></i></router-link></li>
                    </ul>
                </div>
            </section>
            <section class="footer-inner">
                <div class="container">
                    <div class="row g-2">
                        <div class="col-md-3 col-sm-6">
                            <h4 class="ps-4 text-uppercase footer-title">Information</h4>
                            <ul class="d-flex flex-column">
                                <li><router-link to="/">Yetkazish xizmati</router-link></li>
                                <li><router-link to="/">Chegirma</router-link></li>
                                <li><router-link to="/">Mening profilim</router-link></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h4 class="ps-4 text-uppercase footer-title">Mening profilim</h4>
                            <ul class="d-flex flex-column">
                                <li><router-link to="/">Sign In</router-link></li>
                                <li><router-link to="/">View Cart</router-link></li>
                                <li><router-link to="/">My Wishlist</router-link></li>
                                <li><router-link to="/">Track My Order</router-link></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <ul class="d-flex flex-column pt-4">
                                <li><router-link to="/">F.A.Q</router-link></li>
                                <li><router-link to="/">Shipping </router-link></li>
                                <li><router-link to="/">Track My Order</router-link></li>
                                <li><router-link to="/">Privacy Policy</router-link></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6 ">
                            <h4 class="ps-4 text-uppercase footer-title">Biz bilan aloqa</h4>
                            <ul class="d-flex flex-column fw-light">
                                <li><router-link to="/"><i class="fas fa-globe-americas me-2"></i>1234, Your Address Country </router-link></li>
                                <li><router-link to="/"><i class="fas fa-phone-alt me-2"></i>+998 99 5*3 5* 35 </router-link></li>
                                <li><router-link to="/"> <i class="fas fa-envelope me-2"></i> mail@domain.com </router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
/* footer-top */
.footer-top {
    padding-top: 15px;
    border-bottom: 2px solid #eee;
    border-top: 2px solid #eee;
}
.footer-top-inner ul {
    border-start-end-radius: 5px;
}
.footer-top-inner ul li {
    margin-right: 50px !important;
}

.footer-top-inner ul li a {
    color: var(--mainColor);
    transition: all 0.3s ease-in-out;
}
.footer-top-inner ul li a:hover {
    color: #333;
}

/* footer */
.footer-inner {
    padding: 25px 0;
}
.footer-inner .footer-title {
    font-weight: 600;
    font-size: 18px;
    color: #333;
}
.footer-inner ul li {
    font-weight: 400;
    font-size: 14px;
    color: #333;
    padding: 2px 0;
}
.footer-inner ul li a {
    color: #333;
    transition: color 0.2s linear;
}
.footer-inner ul li a:hover {
    color: var(--mainColor);
}

</style>
