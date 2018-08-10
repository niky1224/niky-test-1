<template>
    <svg class="icon testniky111">
        <use :xlink:href="`#my-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: "icon",
        props:["name"]
    }
</script>

<style lang="scss">
    .icon {
        width: 1em;
        height: 1em;
    }
</style>