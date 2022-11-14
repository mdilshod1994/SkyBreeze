<template>
    <div class="loading-bar" id="show-loading">
    </div>
</template>
<script>
export default {
}
</script>

<style >
.loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    background: #28aecb;
    z-index: 999999;
}

@media screen and (max-width: 540px) {
    .loading-bar {
        height: 2px;
    }
}
</style>