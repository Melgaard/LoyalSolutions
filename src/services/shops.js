const axios = require('axios');

export default {
	async getAll() {
		const res = await axios.get(`https://run.mocky.io/v3/96795216-2572-44a1-b971-855f25e481c6`);
		return res.data.shops;
	},
}