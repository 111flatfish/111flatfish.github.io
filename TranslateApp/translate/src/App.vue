<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="比目鱼在线翻译"/>
    <translate-from v-on:translateto="handle" ></translate-from>
    <translateTo v-bind:text="translateVal"></translateTo>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TranslateFrom from './components/TranslateFrom.vue'
import TranslateTo from './components/TranslateTo.vue'



export default {
  name: 'app',
  components: {
    HelloWorld,
    TranslateFrom,
    TranslateTo

  },
  data:function(){
    return {
      translateVal:""
    }
  },
  methods:{
    handle:function (text,lang) {
      // alert(text);
      this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190716T045834Z.87fee6d4a1e18bf0.6c5efe4674c9afc7cb6ac09a8330578e3418ce15&lang="+lang+"&text="+text).then((res)=>{
        // console.log(res)
            this.translateVal = res.body.text[0];
              }
      )
    }

  }

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
</style>
