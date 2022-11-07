<template>
    <button class="btn" @click="openServicesModal">
        <slot />
    </button>
</template>
<script>
export default {
    name: 'choose-service-btn',
    
    methods: {
        openServicesModal() {
            this.$store.dispatch('choose-service-popup/openPopup')
        }
    }
}
</script>
<style>

</style>