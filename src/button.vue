<template>
    <button class="g-button">hellow</button>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius:var(--button-radius) ;
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    .g-button:hover{
        border-color:var(--border-hover-color) ;
    }
    .g-button:active{
        background: var(--button-active-bg);
    }
</style>