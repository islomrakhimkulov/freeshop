<template>
    <div>
        <button @click="openGotProducts">
            <i class="fas fa-shopping-cart fa-2x px-1 shooping-cart"></i>
        </button>
    </div>
</template>
<script>
export default {
    name: "NavbarCartButton",
    data: () => ({
        isCheckoutVisible: false,
    }),
    methods:{},
}
</script>