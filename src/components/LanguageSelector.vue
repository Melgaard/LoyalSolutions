<template>
	<div class="languageSelector">
		<select v-model="$i18n.locale" @change="updateURL">
			<option v-for="lang in languages" v-bind:key="lang">{{lang}}</option>
		</select>
		locale: {{$t('message')}} <!-- TODO: fix translations to come from file-->
	</div>
</template>

<script>
export default {
	name: 'LanguageSelector',
	methods: {
		updateURL() {
			this.$route.params.lang = this.$i18n.locale;
			this.$router.push(this.$route);
		}
	},
	computed: {
		languages() {
			return Object.keys(this.$i18n.messages);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.languageSelector {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-around;

	width: 200px;

	select {
		width: fit-content;
	}
}

</style>
