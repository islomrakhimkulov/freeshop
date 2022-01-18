<template>
    <div class="recommend">
        <div class="container">
            <h2 class="text-uppercase">Tavsiya qilamiz</h2>
            <CardData />
        </div>
    </div>
</template>

<script>
import CardData from '../views/CardData.vue';
export default {
    name: 'Recommend',
    components: {
        CardData,
    },
    props: {}
}
</script>

<style>
.cardData h2 {
    position: relative;
    font-weight: 500;
    font-size: 30px;
    color: #333;
}
.cardData h2::before {
    content: '';
    position: absolute;
    bottom: 50%;
    left: 50%;
    height: 2px;
    width: 100px;
    background-color: var(--mainColor);
}
</style>
