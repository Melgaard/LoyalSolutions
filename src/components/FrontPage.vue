<template>
  <div class="frontPage">
    <h1>Welcome to My Vue.js App</h1>
    <p>
      This repository initialized with 
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li>Vue-router</li>
      <li>Vue-i18n</li>
    </ul>
    <h3>Localization</h3>
    <ul>
      <li>Current Language:</li>
      <li>{{this.$i18n.locale}}</li>
      <li>Translation message:</li>
      <li>{{$t('paragraph')}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
