import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
Vue.component(Button.name, Button);
console.log("Button",Button.name)
new Vue({
  el: '#app',
  render: h => h(App)
})
