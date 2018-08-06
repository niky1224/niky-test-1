<template>
    <svg class="icon">
        <use :xlink:href="`#my-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props:["name"]
    }
</script>

<style scoped>
    .icon {
        width: 1em;
        height: 1em;
    }
</style>