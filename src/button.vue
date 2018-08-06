<template>
    <button class="g-button" :class="{[`icon-${isposition}`]:true}" @click="methodsBtn">
        <g-icon v-if="icon&&!loading" :name="icon"></g-icon>
        <g-icon v-if="loading"  class="loading icon" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import ICON from './icon'
    export default {
        //props: ['icon', 'isposition']
        props:{
            icon:{},
            isposition:{
                type:String,
                default:"left",
                validator(value){
                    return value==="left" ||value==="right";
                }
            },
            loading:{
                type:Boolean,
                default:false
            },
            name:{}
        },
        components:{
            'g-icon':ICON
        },
        methods:{
            methodsBtn(){
                this.$emit('click');
                console.log(this);
            }
        }
    }
</script>

<style lang="scss">
    @keyframes move {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-hover-color);
        }
        &:active {
            background: var(--button-active-bg);
        }

        > .icon {
            order: 1;
            margin-right: .1em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0em;
                margin-left: .1em;
            }
            > .content {
                order: 1;
            }
        }
    }
    .loading{
        animation: move 2s infinite linear;
    }
</style>