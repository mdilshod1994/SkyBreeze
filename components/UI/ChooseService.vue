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
            this.$store.dispatch('choose-service-popup/openPopup', { type: 'empty', info: {} })
        }
    }
}
</script>
<style>

</style>