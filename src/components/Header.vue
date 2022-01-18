<template>
    <div class="header">
        <div class="header-wrapper" :style="{ backgroundImage: `url(${ require('@/assets/images/bg.png')})` }">
            <div class="container">
                <div class="row">
                    <div class="banner-content">
                        <div class="col-lg-6 col-md-8">
                            <div class="header-content text-uppercase">
                                <h2 class="mainColor">Onlayn</h2>
                                <h2 class="whiteColor">Xarid qiling</h2>
                            </div>
                            <span class="header-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <br>
                            <button class="btn btnColor  text-uppercase mt-5">Buy now</button>
                        </div>     
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: {
    
    },
}
</script>

<style>
.header {
    background: linear-gradient(180deg, #ABB8BA 0%, rgba(188, 202, 205, 0.81) 100%) !important;
}

.header-wrapper {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  padding: 120px 0;
}

.banner-content {
    padding: 70px 50px 0px 70px;
}

.header-content h2{
    font-weight: 600 !important;
    font-size: 54px !important;
    line-height: 66px;
    letter-spacing: 3px;
}
.header-content h2:nth-child(1) {
    margin-bottom: -0.7rem;
}
.header-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
}

@media screen and (max-width: 990px) {
    .header-wrapper {
        background: none ;
    }
}
</style>
