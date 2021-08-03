<template>
<div class="shopCard" @click="goToLink">
	<div class="imageWrapper">
		<img :src="shop.img_url"/>
	</div>
	<div class="titleBox">
		{{shop.name}}
	</div>
	<div class="description">
		<div v-html="shop.description_html" />
	</div>
</div>
</template>

<script>

export default {
	name: 'ShopCard',
	props: {
		shop: Object
	},
	data() {
		return {}
	},
	methods: {
		goToLink() {
			window.location.href = this.shop.external_url;
		}
	},
	async mounted() {
	},
	computed: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.shopCard {
	display: inline-block;
	width: 400px;
	height: 400px;
	margin: 25px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 3px;

	&:hover img {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		height: 400px;
		object-fit: cover;

		mask-image: linear-gradient(to top, transparent 10%, black 35%);
		-webkit-mask-image: linear-gradient(to top, transparent 10%, black 35%);
		transition: 0.2s;
	}

	.titleBox {
		position: relative;
		transform: translate(0px, -3.5rem);

		height: 0px;
		overflow: visible;
		
		font-size: 36px;
		line-height: 60px;
		font-weight: 600;
		font-family: Playfair Display,serif;
	}

	&:hover {
		.description {
			width: 100%;
			height: 100%;
			position: relative;
			top: 0;
			left: 0;
			// opacity: 0.7;
			transform: translate(0px, -404px);
			background: #6d6d6dcc;
			color: #ffffffa6;

			display: flex;
			align-items: center;
			justify-content: center;

			div {
				padding: 25px;
			}
		}
	}

	.description {
		display: none;
	}
	
	
}

</style>
