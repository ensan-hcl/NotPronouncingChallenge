<template>
  <div id="result">
    <h1>チャレンジ結果</h1>
    <text-word></text-word>
      <button-twitter></button-twitter>

      <footer>
        <div>
      <a href="./reference" target="_blank">参考資料</a>
      </div>
      </footer>
  </div>
  
</template>

<script>
import Vue from 'vue'

export default {
}

import PropertyStore from '../Models/PropertyStore.js'
import {WordText, ShareOnTwitter} from './forms/Headers.js'

//  コンポーネントを登録
Vue.component('text-word', WordText)
Vue.component('button-twitter', ShareOnTwitter)

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
.link{
  font-weight: bold;
  color: white;
  text-decoration: none;
  background-color: #55acee;
  padding: 10px;
  border: solid;
  border-width: 2px;
  border-color: #55acee;
  border-radius: 10px;

}

.result_text {
  font-family: Helvetica;
  font-weight: bold;
  font-size: 1.7em;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

footer {
  padding: 20px 0px;
}

a {
  color: purple;
}
</style>
