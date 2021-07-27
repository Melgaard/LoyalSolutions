import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import axios from 'axios'

Vue.use(VueI18n)

function loadLocaleMessages () {
	// const data = (await axios.get('https://run.mocky.io/v3/61098797-3414-47e1-b749-1b9342574b09')).data;
	
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'da',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'da',
  messages: loadLocaleMessages()
})
