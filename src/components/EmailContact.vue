<template>
    <div class="emailContact">
        <div class="emailContact-wrapper text-center py-4" :style="{ backgroundImage: `url(${require('@/assets/images/form-menu.png')})` }">
            <h4>Maxsus chegirmaga ega bo'l</h4>
            <p>Har oy siz uchun maxsus chegirma taqdim etiladi</p>
            <p>{{ input }}</p>
            <div class="py-3">
                <input v-model="input" class="emailContactInput me-3" type="text" placeholder="E-mail address ...">
                <button class="btn btnColor text-uppercase" @click="saw(item)">Get Coupon Now</button> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EmailContact',
    data: () => ({
        input: '',
    }),
    methods: {
        saw(item) {
            this.input = item
        }
    }
}
</script>

<style scoped>
.emailContact-wrapper {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1.1;
    padding: 10px 0;
    color: #fff;
    filter: grayscale(25%);
}
.emailContact-wrapper h4 {
    font-weight: 600;
    font-size: 36px;
    padding: 25px 0 5px 0;
}
.emailContact-wrapper p {
    font-weight: 400;
    font-size: 18px;
}
.emailContactInput {
    padding: 5px 7px 7px 7px;
    font-size: 14px;
    outline: none;
    border: none;
    width: 25%;
    margin: auto;
}
.emailContact button {
    border: none !important;
    border-radius: 0 !important;
    font-size: 14px;
    font-weight: 400;
}

</style>
