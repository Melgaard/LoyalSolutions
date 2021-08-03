<template>
	<div class="signup">
		<div>
			<div class="input">
				<label>Name:</label>
				<input type="text" v-model="name" placeholder="Name"/>
			</div>
			<div class="input">
				<label>Lastname:</label>
				<input type="text" v-model="last_name" placeholder="Lastname"/>
			</div>
		</div>
		<div>
			<div class="input">
				<label>Email:</label>
				<input type="text" v-model="email" placeholder="Email"/>
			</div>
			<div class="input">
				<label>Confirm email:</label>
				<input type="text" v-model="emailConfirmation" placeholder="Name"/>
			</div>
		</div>

		<div @click="submit" :class="['submitButton', validated ? 'active' : 'disabled']">Submit</div>
	</div>
</template>

<script>
import Members from '../services/members.js';

export default {
	name: 'Signup',
	data() {
		return {
			name: '',
			last_name: '',
			email: '',
			emailConfirmation: ''
		}
	},
	methods: {
		async submit() {
			const newMember = {name: this.name, last_name: this.last_name, email: this.email}
			const res = await Members.signup(newMember);
			if (res.status === 200) {
				alert(res.data);

				this.name = '';
				this.last_name = '';
				this.email = '';
				this.emailConfirmation = '';
			}
		},
		validateEmail(email) {
			const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			return regex.test(email);
		}
	},
	computed: {
		validated() {
			let allValid = true;

			if (!this.name) allValid = false;
			// if (!this.last_name) allValid = false; //Lastname is optional
			if (!this.validateEmail(this.email)) allValid = false;
			if (this.email !== this.emailConfirmation) allValid = false;

			return allValid;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.signup {
	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		display: flex;

		.input {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 10px;

			input {
				width: 170px;
				height: 30px;
				font-size: 16px;
				margin-top: 5px;
				border-radius: 16px;
				padding-left: 10px;

				&:focus-visible {
					outline: none;
					border-color: #42b883;
					border-style: solid;
				}
			}

			label {
				padding-right: 10px;
			}
		}
	}


	.submitButton {
		height: 50px;
		width: 250px;
		background: #42b883;
		color: #566f88;
		margin: 5px;
		border-radius: 8px;

		display: flex;
		justify-content: center;
		align-items: center;

		&.active {
			cursor: pointer;
		}

		&.disabled {
			opacity: 0.5;
		}
	}
}


</style>
