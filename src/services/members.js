const axios = require('axios');

export default {
	async getAll() {
		const res = await axios.get(`https://run.mocky.io/v3/90cfbed9-924c-423f-8e4b-dde6a6be438b`)
		return res;
	},
	async signup(member) {
		const res = await axios.post(`https://run.mocky.io/v3/029be3b9-c4d0-42c9-b348-dc2b575e3312`, member)
		return res;
	}
}