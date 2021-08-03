<template>
<div class="pagination">
	<span v-if="currentPage > 1" @click="gotoPage(1)">First</span>
	<span v-if="currentPage > 1" @click="gotoPage(currentPage - 1)">{{currentPage - 1}}</span>
	<span class="currentPage">{{currentPage}}</span>
	<span v-if="currentPage < maxPage" @click="gotoPage(currentPage + 1)">{{currentPage + 1}}</span>
	<span v-if="currentPage < maxPage" @click="gotoPage(maxPage)">Last</span>
</div>
</template>

<script>

export default {
	name: 'Pagination',
	props: {
		currentPage: Number,
		totalItems: Number,
		rowsPerPage: Number
	},
	data() {
		return {
		}
	},
	methods: {
		gotoPage(pageNumber) {
			this.$emit('goto', pageNumber);
		}
	},
	async created() {
	},
	computed: {
		maxPage() {
			return Math.trunc(this.totalItems / this.rowsPerPage);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pagination {
	padding: 10px 10px 10px 10px;

	span {
		padding: 5px 5px 5px 5px;
		cursor: pointer;

		&.currentPage {
			cursor: default;
			color: #42b883;
		}
	}
}
</style>
