//  インポートします。
import Vue from 'vue'
import PropertyStore from '../../models/PropertyStore.js'

export var InputWord = Vue.extend({
    name: 'input-word',
    template: '<input class="input" v-model="sharedState.state.property.word" placeholder="英単語を入力してください">',
    data: function () {
      return {
        privateState: {},
        sharedState: PropertyStore
      }
    }
})
  
//遷移ボタン
export  var InputButton = Vue.extend({
  name: 'input-button',
  template: '<div><button class="button" v-on:click="result">チャレンジ！</button></div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    result: function (event) {
      var valid = false
      try {
        valid = this.$data.sharedState.validate()
        if (valid) {
          this.$router.push('/result')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
})
 

//遷移ボタン
export  var TopButton = Vue.extend({
  name: 'top-button',
  template: '<div><button class="button" v-on:click="top">もう一度遊ぶ</button></div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    top: function (event) {
        this.$router.push('/')
    }
  }
})


export var ShareOnTwitter = Vue.extend({
  name: 'twitter-button',
  template: '<div><button class="twitter_link" v-bind:onclick="link">ツイートする</button></div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  computed: {
    link: function() {
      const text = this.sharedState.result(this.sharedState.state.property.word).join('%0D%0A')
      const url = `https://twitter.com/intent/tweet?text=${text}&hashtags=発音しないチャレンジ&url=https://ensan-hcl.github.io/NotPronouncingChallenge/`
      return `location.href='${url}'`
    }
  },    
})



export var WordText = Vue.extend({
  name: 'text-word',
  template: '<ul><p class="result_text" v-for="value in results">{{ value }}</p></ul>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  computed: {
    results: function() {
      const values = this.sharedState.result(this.sharedState.state.property.word)
      return values
    }
  },    
})

