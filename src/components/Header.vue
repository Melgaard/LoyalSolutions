<template>
	<div class="header">
		<img src="https://www.loyalsolutions.eu/assets/img/logo.c524cdae.svg" alt="LoyalSolutions logo" />

		<div id="nav">
			<router-link :to="`/${$route.params.lang}`">Home</router-link> |
			<router-link :to="`/${$route.params.lang}/members`">Members</router-link> |
			<router-link :to="`/${$route.params.lang}/signup`">Signup</router-link> |
			<router-link :to="`/${$route.params.lang}/shop`">Shop</router-link>
		</div>

		<language-selector />

	</div>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'
export default {
  name: 'Header',
  components: {
    LanguageSelector    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
	display: flex;
    justify-content: space-between;
}

</style>
