<template>
<div class="header">
	<table>
		<tr class="headerRow">
			<th>Name</th>
			<th>Lastname</th>
			<th>Email</th>
		</tr>
		<tr v-for="member in displayedMembers" :key="member.email" class="tableRow">
			<th>{{member.name}}</th>
			<th>{{member.last_name}}</th>
			<th>{{member.email}}</th>
		</tr>
	</table>
	
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
			members: [],
			currentPage: 1,
			rowsPerPage: 10
		}
	},
	async created() {
		this.members = await Members.getAll();
	},
	computed: {
		displayedMembers() {
			return this.members.slice(this.currentPage * this.rowsPerPage, (this.currentPage + 1) * this.rowsPerPage)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
	display: flex;
	justify-content: center;
}
.headerRow th {
	font-size: 20px;
	border-bottom: 1px solid black;
}
.tableRow {
	text-align: left;

	th {
		padding: 5px 5px 5px 10px;
	}
}

</style>
