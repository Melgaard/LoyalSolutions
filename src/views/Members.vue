<template>
  <div class="header">
    {{ members }}
  </div>
</template>

<script>
import Members from '../services/members.js';

export default {
	name: 'Header',
	props: {
		msg: String
	},
	data() {
		return {
			members: []
	}	
	},
	async created() {
		this.members = await Members.getAll();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
