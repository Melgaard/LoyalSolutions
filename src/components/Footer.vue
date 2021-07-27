<template>
  <div class="footer">
	<div id="nav">
		<router-link :to="`/${$route.params.lang}`">Home</router-link>
		<router-link :to="`/${$route.params.lang}/members`">Members</router-link>
		<router-link :to="`/${$route.params.lang}/signup`">Signup</router-link>
		<router-link :to="`/${$route.params.lang}/shop`">Shop</router-link>
	</div>

	<div class="contactInfo">
		<h1>Contact information</h1>
		<span>Phonenumber: +45 33 26 78 33</span>
		<span>Adress: Robert Jacobsens Vej 68</span>
		<span>Email: info@loyalsolutions.eu</span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
	width: 100%;
	min-height: 100px;

	background: #42b883;
	color: #35495e;

	display: flex;
	justify-content: space-between;	

	#nav {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		a.router-link-exact-active {
			color: #566f88;
		}
	}

	.contactInfo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		padding: 15px;

		h1 {
			font-size: 20px;
		}
	}
	
}
</style>
