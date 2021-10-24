<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="This is Your Vue.js App"/>
    <button v-on:click="this.getData">Get data</button>
    <p class="thunk-msg">{{ this.thunkMsg }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      thunkMsg: '',
      data: {}
    }
  },
  methods: {
    getData() {
      // display a loading message
      this.thunkMsg = 'Loading...'
      // change display to block
      document.querySelector('.thunk-msg').style.display = 'block'

      setTimeout(() => {
       fetch('http://localhost:4000').then(function (Response) {
         // store data in data property
        console.log(Response)
      document.querySelector('.thunk-msg').style.display = 'none'
      }) 
      }, 5000);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.thunk-msg {
  display: none;
}
</style>
