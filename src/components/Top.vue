<template>
  <div id="top">
    <h1><span>発音しない</span><span>チャレンジ</span></h1>
    <p class="quote">発音するの、もうやめませんか？</p>
    <input-word></input-word>
    <input-button></input-button>
    <footer>
    <router-link to="./references" target="_blank">参考資料</router-link>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
}
import {InputWord, InputButton} from './forms/Headers.js'
//  コンポーネントを登録
Vue.component('input-word', InputWord)
//  コンポーネントを登録
Vue.component('input-button', InputButton)
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
  padding: 10px;
}
.quote {
  color: #555;
  font-weight: bold;
  font-family: serif;
  padding: 5px;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 50%;
  max-width: 200px;
  color: white;
  font-weight: bold;
  background-color: #FF7F50;
  border-radius: 0.5rem 0.5rem;
  border: none;
  padding: 10px;
  margin-top: 20px;
  text-decoration: none;
}
.button:hover {
  background-color: #FF4500;
}
.button:focus {
  outline: none;
  background-color: #FF4500;
}

.input{
  text-align: center;
  font-size: x-large;
  width: 80%;
  max-width: 500px;
  height: 3em;
  padding: 0px 10px;
  border-color: gray;
  border-radius: 10px;
}
.input:focus {
  outline: none;
  border-radius: 5px;
}

h1{
  font-size: 2.8em;
  font-weight: bold;
  padding: 10px 0px;
} 
h2 {
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
