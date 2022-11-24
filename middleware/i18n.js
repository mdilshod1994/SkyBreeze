export default function ({ app, store, route }) {
    const isLang = app.$cookies.get('langId')
    if (isLang) {

    } else {
        if (route.path.includes('/es/') || route.path.includes('/es')) {
            app.$cookies.set('i18n_redirected', 'es')
            app.$cookies.set('langId', 3)
        } else if (route.path.includes('/ru/') || route.path.includes('/ru')) {
            app.$cookies.set('i18n_redirected', 'ru')
            app.$cookies.set('langId', 1)
        } else {
            app.$cookies.set('i18n_redirected', 'en')
            app.$cookies.set('langId', 2)
        }
    }
}