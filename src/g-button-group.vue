<template>
    <div class="g-group-bntton">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "g-button-group"
    }
</script>

<style lang="scss" scoped>
.g-group-bntton{
    display: inline-flex;
    vertical-align: middle;
    > .g-button{
        border-radius:0px;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
     }
}
</style>