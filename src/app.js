import Vue from 'vue'
import Button from "./button"
import Icon from './icon'
import groupbtn from "./g-button-group"
Vue.component("g-buttton",Button)
Vue.component("g-group-buttton",groupbtn)
Vue.component('g-icon', Icon)
new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:false
    }
})
