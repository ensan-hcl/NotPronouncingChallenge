<template>
  <div id="result">
    <h1>チャレンジ結果</h1>
    <text-word></text-word>
      <div align="center">
      <button-twitter></button-twitter>
      <button-top></button-top>
      </div>
      <footer>
        <router-link to="./references" target="_blank">参考資料</router-link>
      </footer>
  </div>
  
</template>

<script>
import Vue from 'vue'

export default {
}

import PropertyStore from '../Models/PropertyStore.js'
import {TopButton, WordText, ShareOnTwitter} from './forms/Headers.js'

//  コンポーネントを登録
Vue.component('text-word', WordText)
Vue.component('button-twitter', ShareOnTwitter)
Vue.component('button-top', TopButton)

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: orange;
  margin-top: 60px;
}
.twitter_link{
  color: white;
  display: block;
  position: relative;
  width: 50%;
  max-width: 200px;
  font-weight: bold;
  background-color: #55acee;
  border: none;
  border-radius: 0.5rem 0.5rem;
  padding: 10px;
  text-decoration: none;
}

.result_text {
  font-family: Helvetica;
  font-weight: bold;
  font-size: 1.7em;
}

h1, h2 {
  font-weight: bold;
}


footer {
  display: block;
  padding: 20px 0px;
}

a {
  color: purple;
}
</style>
