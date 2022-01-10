<template>
    <div class="offer">
        <div class="offer-wrapper container">
            <div class="row gy-3">
                <div class="col-md-3 col-sm-6">
                    <div class="text-center ">
                        <i class="fas fa-handshake fa-2x mainColor"></i>
                        <h4 class="text-uppercase offer-title pt-2 mainColor">Maxsus Taklif</h4>
                        <p class="offer-text">Katta xarid uchun chegirma</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="text-center ">
                        <i class="fab fa-telegram-plane fa-2x mainColor"></i>
                        <h4 class="text-uppercase offer-title pt-2 mainColor">Bepul yetkazish</h4>
                        <p class="offer-text">$99 dan ortiq haridlar uchun</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="text-center ">
                        <i class="fas fa-retweet fa-2x mainColor"></i>      
                        <h4 class="text-uppercase offer-title pt-2 mainColor">30 kunda qaytarish</h4>
                        <p class="offer-text">Biz uchun ishonch muhim</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="text-center ">
                        <i class="fas fa-rocket fa-2x mainColor"></i>
                        <h4 class="text-uppercase offer-title pt-2 mainColor">Tez Eltish xizmati</h4>
                        <p class="offer-text">2 kun ichida</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Offer',
}
</script>

<style>
.offer {
    background: #F5F6F9;
    padding: 25px 0;
}
.offer-title {
    font-weight: normal;
    font-size: 18px ;     
}
.offer-text {
    font-size: 13px;
    color: #888888;
}
@media only screen and (max-width: 768px) {
    .offer-content {
        padding: 40px 0 !important;
    }
}

</style>
