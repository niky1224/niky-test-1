import Vue from 'vue'
import Button from "./button"
import groupbtn from "./g-button-group"
Vue.component("g-buttton",Button)
Vue.component("g-group-buttton",groupbtn)
new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:false
    }
})
import chai from "chai"
const expect=chai.expect;
{
    const constructor=Vue.extend(Button);
    const vm=new constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount('#test')
    let useelement=vm.$el.querySelector("use")
    let href=useelement.getAttribute("xlink:href")
    expect(href).to.eq("#my-setting")
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#my-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
   vm.$el.remove()
    vm.$destroy()
}