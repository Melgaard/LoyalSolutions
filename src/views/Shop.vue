<template>
<div class="shops">
	<div class="shopWrapper">
		<div v-for="(shop, index) in displayedShops" :key="shop.name.concat(index)" >
			<ShopCard :shop="shop" />
		</div>
	</div>
	<Pagination @goto="gotoPage" :currentPage="currentPage" :totalItems="shops.length" :rowsPerPage="rowsPerPage" />
</div>
</template>

<script>
import Shops from '../services/shops.js';
import ShopCard from '../components/ShopCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
	name: 'Shops',
	props: {},
	components: {
		ShopCard,
		Pagination
	},
	data() {
		return {
			shops: [],
			currentPage: 1,
			rowsPerPage: 15
		}
	},
	methods: {
		gotoPage(pageNumber) {
			this.currentPage = pageNumber;
		}
	},
	async created() {
		this.shops = await Shops.getAll();
	},
	computed: {
		displayedShops() {
			return this.shops.slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage)
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopWrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	flex-direction: row;
}

</style>
