<template>
  <div id="references">
    <h1>参考資料</h1>
    <ul>
      <li><a href="https://twitter.com/koloka_/status/1355747999872208896" target="_blank">元ネタ</a></li>
      <li><a href="https://rattanji78.blogspot.com/" target="_blank">Silent Letters in English Words</a></li>
      <li><a href="https://www.merriam-webster.com/words-at-play/mums-the-letter-when-letters-dont-say-a-thing" target="_blank">A - Silent Letters | Merriam-Webster</a></li>
      <li><a href="http://okinawa-repo.lib.u-ryukyu.ac.jp/bitstream/20.500.12001/5858/1/No17p19.pdf" target="_blank">英語の黙字－発音の落とし穴－ 沖縄大学紀要</a></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
}
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

.quote {
  color: #555;
  font-weight: bold;
  font-family: serif;
  padding: 5px;
}

h1{
  font-size: 2.8em;
  font-weight: bold;

} 
h2 {
  font-weight: bold;
}

ul {
  list-style-type: square;
  text-align: left;
  padding: 0;
  display: inline-block;
}

li {
  margin: 0 10px;
}

a {
  color: purple;
}
</style>
