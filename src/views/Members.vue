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

	<Pagination @goto="gotoPage" :currentPage="currentPage" :maxPage="maxPage" />

</div>
</template>

<script>
import Members from '../services/members.js';
import Pagination from '../components/Pagination.vue';

export default {
	name: 'Members',
	components: {
		Pagination
	},
	data() {
		return {
			members: [],
			currentPage: 1,
			rowsPerPage: 10
		}
	},
	methods: {
		gotoPage(pageNumber) {
			this.currentPage = pageNumber;
		}
	},
	async created() {
		this.members = await Members.getAll();
	},
	computed: {
		displayedMembers() {
			return this.members.slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage)
		},
		maxPage() {
			return Math.trunc(this.members.length / 10);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
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
