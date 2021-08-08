import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

Vue.use(VueI18n)

async function loadLocaleMessages () {
	const locales = (await axios.get('https://run.mocky.io/v3/61098797-3414-47e1-b749-1b9342574b09')).data;
	
	const messages = {}
	Object.keys(locales).forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)/i)
		if (matched && matched.length > 1) {
		const locale = matched[1]
		messages[locale] = locales[key]
		}
	})
	return messages
}

export async function init() {
	var messages = await loadLocaleMessages();
	return new VueI18n({
		locale: 'da',
		fallbackLocale: 'da',
		messages: messages
	})
}

