<template>
  <div id="app">
    <p class="icon">🙊</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon{
  font-size: 5em;
  margin-top: -0.6em;
  margin-bottom: -0.6em;
}
</style>
