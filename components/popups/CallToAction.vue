<template>
    <div :class="`call-to-action ${isActive ? 'active' : ''}`" @click="closePopup" v-if="translations.length > 0">
        <div @click.stop="" :class="`call-to-action__body ${show ? 'active' : ''} ${sending ? 'hidden' : ''}`">
            <div class="call-to-action__wrapper">
                <img src="@/assets/img/icons/close.png" alt="close" class="call-to-action__btn-close"
                    @click="closePopup">
                <div class="call-to-action__title">
                    {{ translations[0].text }}
                </div>
                <form class="call-to-action__form" @submit.prevent="postOrder">
                    <div class="call-to-action__top-block">
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                {{ translations[1].text }}
                            </span>
                            <input type="text" :class="`form__field field ${errors.name ? 'errorValid' : ''}`"
                                :placeholder="translations[1].text" v-model="name">
                        </label>
                        <label class="form__label call-to-action__label call-to-action__label--width">
                            <span class="call-to-action__text">
                                {{ translations[2].text }}
                            </span>
                            <input type="email" :class="`form__field field ${errors.email ? 'errorValid' : ''}`"
                                :placeholder="translations[2].text" v-model="email">
                        </label>
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                {{ translations[3].text }}
                            </span>
                            <input type="tel" :class="`form__field field ${errors.phone ? 'errorValid' : ''}`"
                                :placeholder="translations[3].text" v-model="phone">
                        </label>
                        <label
                            class="form__label call-to-action__label call-to-action__label--type call-to-action__label--width"
                            v-if="types.length" v-show="toShowTypes">
                            <span class="call-to-action__text">
                                <!-- {{ translations[2].text }} -->
                                {{ promoCodeTranslation[0].typeService }}
                            </span>
                            <span class="call-to-action__btn-index" @click="openTypes">
                            </span>
                            <div v-for="item in types" :key="item.id"
                                :class="`form__field field call-to-action__types  ${false ? 'errorValid' : ''}`"
                                v-show="item.alias === currType">
                                <p v-if="(item.alias === currType)"> {{ item.name }} </p>
                            </div>
                            <img src="@/assets/img/icons/arrow-d.svg" alt="" :class="`${isActiveType ? 'active' : ''}`">
                            <div :class="`call-to-action__select-types-overlay ${isActiveType ? 'active' : ''}`">
                            </div>
                            <div :class="`call-to-action__select-types ${isActiveType ? 'active' : ''}`" @click.stop="">
                                <ul class="call-to-action__select-list" @click.stop="">
                                    <li v-for="t in types" :key="t.id" @click="setTypes(t)"
                                        :class="`call-to-action__select-item ${t.alias === currType ? 'active' : ''}`">
                                        {{ t.name }}
                                    </li>
                                </ul>
                            </div>
                        </label>

                        <label class="form__label call-to-action__label call-to-action__label--width">
                            <span class="call-to-action__text">
                                <!-- {{ translations[2].text }} -->
                                {{ promoCodeTranslation[0].textPromoCode }}
                            </span>
                            <!-- <input type="text" :class="`form__field field ${false ? 'errorValid' : ''}`"
                            :placeholder="translations[2].text" v-model="email"> -->
                            <input type="text" :class="`form__field field ${false ? 'errorValid' : ''}`"
                                placeholder="428BP" v-model="promoCode">
                        </label>
                        <label
                            class="form__label call-to-action__label call-to-action__label--type call-to-action__label--width"
                            v-if="typePackages">
                            <span class="call-to-action__text">
                                <!-- {{ translations[2].text }} -->
                                {{ promoCodeTranslation[0].typePackage }}
                            </span>
                            <span class="call-to-action__btn-index" @click="openPackages">
                            </span>
                            <div :class="`form__field field call-to-action__types  ${false ? 'errorValid' : ''}`">
                                <p v-if="currPackage === ''">
                                    Выбрать пакет
                                </p>
                                <p v-else>
                                    {{ currPackage }}
                                </p>
                            </div>

                            <img src="@/assets/img/icons/arrow-d.svg" alt=""
                                :class="`${isActivePackages ? 'active' : ''}`">
                            <div :class="`call-to-action__select-types-overlay ${isActivePackages ? 'active' : ''}`">
                            </div>
                            <div :class="`call-to-action__select-types-package ${isActivePackages ? 'active' : ''}`"
                                @click.stop="">
                                <ul class="call-to-action__select-list" @click.stop="">
                                    <li v-for="t in packages" :key="t.id" @click="setPackage(t)"
                                        :class="`call-to-action__select-item ${t.name === currPackage ? 'active' : ''}`">
                                        {{ t.name }}
                                    </li>
                                </ul>
                            </div>
                        </label>
                        <label
                            class="form__label call-to-action__label call-to-action__label--width call-to-action__calendar">
                            <span class="call-to-action__text">
                                {{ translations[4].text }}
                            </span>
                            <span class="call-to-action__btn-index" @click="datePick">
                            </span>
                            <div class="form__field field call-to-action__input call-to-action__input--date">
                                {{
                                        `${(range.start).toLocaleDateString(`${$i18n.locale}-${($i18n.locale).toUpperCase()}`,
                                            { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })} -
                                                                ${(range.end).toLocaleDateString(`${$i18n.locale}-${($i18n.locale).toUpperCase()}`,
                                                { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}`
                                }}
                            </div>
                            <img src="@/assets/img/icons/calendar.svg" class="call-to-action__calendar-icon" alt="">
                        </label>
                        <date-picker mode="dateTime" color="blue" is-dark is-range v-model="range" :columns="2"
                            :class="{ active: isOpen }" :locale="$i18n.locale" />
                        <div class="call-to-action__calendar-overlay" :class="{ active: isOpen }"
                            @click="isOpen = false">
                        </div>
                    </div>
                    <div class="call-to-action__bottom">
                        <div class="call-to-action__sides">
                            <div class="call-to-action__title call-to-action__title--sides">
                                {{ translations[5].text }}
                            </div>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    {{ translations[15].text }}
                                </span>
                                <input type="text"
                                    :class="`form__field field ${errors.address_from ? 'errorValid' : ''}`"
                                    :placeholder="translations[7].text" v-model="address_from">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    {{ translations[8].text }}
                                </span>
                                <input type="text" :class="`form__field field ${errors.house_from ? 'errorValid' : ''}`"
                                    :placeholder="`${$i18n.locale === 'en' ? 'Ex. 1А' : '1A'}`" v-model="house_from">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    {{ translations[9].text }}
                                </span>
                                <input type="text" :class="`form__field field ${errors.city_from ? 'errorValid' : ''}`"
                                    :placeholder="translations[10].text" v-model="city_from">
                            </label>
                            <div class="call-to-action__state">
                                <label class="form__label  call-to-action__label call-to-action__label--first">
                                    <span class="call-to-action__text">
                                        {{ translations[11].text }}
                                    </span>
                                    <span class="call-to-action__btn-index" @click="openZipListStart">
                                    </span>
                                    <div class="form__field field">
                                        {{ stateValStart }}
                                    </div>
                                    <img src="@/assets/img/icons/arrow-d.svg" alt=""
                                        :class="`${isActiveZipStart ? 'active' : ''}`">
                                    <div :class="`call-to-action__select ${isActiveZipStart ? 'active' : ''}`">
                                        <ul class="call-to-action__select-list">
                                            <li v-for="zip in this.statePost" :key="zip.id" @click="setZipStart(zip)"
                                                :class="`call-to-action__select-item ${zip.name === stateValStart ? 'active' : ''}`">
                                                {{ zip.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </label>
                                <label class="form__label call-to-action__label call-to-action__label--second">
                                    <span class="call-to-action__text">
                                        {{ translations[12].text }}
                                    </span>
                                    <input type="text"
                                        :class="`form__field field ${errors.zip_from ? 'errorValid' : ''}`"
                                        :placeholder="`${$i18n.locale === 'en' ? 'Ex. 95050' : '95050'}`"
                                        v-model="zip_from">
                                </label>
                            </div>
                        </div>
                        <div class="call-to-action__devider">
                        </div>
                        <div class="call-to-action__sides">
                            <div class="call-to-action__title call-to-action__title--sides">
                                {{ translations[6].text }}
                            </div>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    {{ translations[15].text }}
                                </span>
                                <input type="text" :class="`form__field field ${errors.address_to ? 'errorValid' : ''}`"
                                    :placeholder="translations[14].text" v-model="address_to">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    {{ translations[8].text }}
                                </span>
                                <input type="text" :class="`form__field field ${errors.house_to ? 'errorValid' : ''}`"
                                    :placeholder="`${$i18n.locale === 'en' ? 'Ex. 1А' : '1A'}`" v-model="house_to">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    {{ translations[9].text }}
                                </span>
                                <input type="text" :class="`form__field field ${errors.city_to ? 'errorValid' : ''}`"
                                    :placeholder="translations[10].text" v-model="city_to">
                            </label>
                            <div class="call-to-action__state">
                                <label class="form__label call-to-action__label call-to-action__label--first">
                                    <span class="call-to-action__text">
                                        {{ translations[11].text }}
                                    </span>
                                    <span class="call-to-action__btn-index" @click="openZipListEnd">
                                    </span>
                                    <div class="form__field field">
                                        {{ stateValEnd }}
                                    </div>
                                    <img src="@/assets/img/icons/arrow-d.svg" alt=""
                                        :class="`${isActiveZipEnd ? 'active' : ''}`">
                                    <div :class="`call-to-action__select ${isActiveZipEnd ? 'active' : ''}`">
                                        <ul class="call-to-action__select-list">
                                            <li v-for="zip in this.statePost" :key="zip.id" @click="setZipEnd(zip)"
                                                :class="`call-to-action__select-item ${zip.name === stateValEnd ? 'active' : ''}`">
                                                {{ zip.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </label>
                                <label class="form__label call-to-action__label call-to-action__label--second">
                                    <span class="call-to-action__text">
                                        {{ translations[12].text }}
                                    </span>
                                    <input type="text" :class="`form__field field ${errors.zip_to ? 'errorValid' : ''}`"
                                        :placeholder="`${$i18n.locale === 'en' ? 'Ex. 95050' : '95050'}`"
                                        v-model="zip_to">
                                </label>
                            </div>
                        </div>
                    </div>
                    <button class="call-to-action__btn btn" type="submit">
                        {{ translations[13].text }}
                    </button>
                </form>
            </div>
            <div :class="`call-to-action__loader ${sending ? 'show' : ''}`">
                <div class="call-to-action__loader-body">
                    <div class="call-to-action__loader-text">
                        {{ translatedForm[0].btnText }}
                    </div>
                    <svg class="call-to-action__loader-icon" width="53" height="36" viewBox="0 0 53 36" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M43.8556 9.3651C46.615 8.30852 49.3665 7.24493 52.1259 6.18834C53.1257 5.80349 53.1417 4.57197 52.1579 4.16613C47.4469 2.22789 39.7204 -0.172177 30.0024 0.00975156C15.1653 0.282645 4.68742 6.39126 0.496262 9.21116C0.024357 9.52604 -0.127613 10.0788 0.112339 10.5546C1.8 13.7944 3.48766 17.0271 5.17533 20.2669C5.45527 20.8056 6.15913 21.0575 6.791 20.8406C9.63843 19.868 13.3977 18.8744 17.9088 18.3776C20.8682 18.0557 23.5716 18.0137 25.9232 18.1117C26.579 18.1397 26.675 18.9584 26.0351 19.1053C24.7714 19.3922 23.4117 19.77 21.988 20.2808C19.2365 21.2605 17.029 22.436 15.3573 23.4786C14.8614 23.7865 14.6854 24.3603 14.9414 24.8431C16.597 28.0408 18.2607 31.2386 19.9164 34.4433C20.3723 35.325 21.812 35.311 22.2439 34.4223C23.2757 32.3022 24.2995 30.182 25.3313 28.0618C25.4593 27.7959 25.6992 27.586 25.9952 27.474C27.8828 26.7673 30.2343 26.0536 33.0018 25.5708C36.873 24.892 40.2723 24.892 42.8798 25.074C43.4317 25.116 43.9516 24.8361 44.1595 24.3882C45.0873 22.387 46.0151 20.3928 46.943 18.3916C47.1749 17.8948 46.967 17.328 46.4471 17.0411C43.4877 15.3898 39.2005 13.4305 33.6736 12.199C29.8104 11.3383 26.2191 11.0305 23.1077 11.0165C21.884 11.0095 21.692 9.47706 22.8838 9.23915C24.9954 8.80532 27.3629 8.47645 29.9464 8.3365C35.3693 8.04962 39.8964 8.72135 43.0477 9.42808C43.3037 9.48406 43.5996 9.47006 43.8556 9.3651Z"
                            fill="#28AECB" />
                    </svg>
                </div>
            </div>
        </div>
        <div :class="`call-to-action__thanks ${showThanx ? 'active' : ''}`">
            <div class="call-to-action__thanks-title">
                {{ translateThanx[0].title }}
            </div>
            <p class="call-to-action__thanks-text">
                {{ translateThanx[0].text }}
            </p>
            <!-- <nuxt-link to=""></nuxt-link> -->
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            sending: false,
            translate: [
                {
                    lang: 'ru',
                    text: 'В скором времени мы свяжемся с Вами',
                    title: 'Спасибо за сообщение!'
                },
                {
                    lang: 'es',
                    text: 'Nos pondremos en contacto con usted en breve',
                    title: 'Gracias por tu mensaje'
                },
                {
                    lang: 'en',
                    text: 'We will contact you shortly',
                    title: 'Thanks for your message!'
                },
            ],
            toShowTypes: true,
            currPackage: '',
            packages: [
                {
                    name: 'Dynamic Amigos'
                },
                {
                    name: 'The Supremes'
                },
                {
                    name: 'SkyBreeze Gang'
                },
            ],
            isActivePackages: false,
            isActiveType: false,
            currType: "apartment-moving",
            valueType: "",
            typesMoving: [
                {
                    name: '',
                    value: '',
                }
            ],
            isActiveZipStart: false,
            isActiveZipEnd: false,
            stateValStart: "CA",
            stateValEnd: 'CA',
            range: {
                start: new Date(),
                end: new Date()
            },
            isOpen: false,
            statePost: [],
            show: true,
            showThanx: false,
            name: '',
            email: '',
            phone: '',
            address_from: '',
            house_from: '',
            city_from: "",
            zip_from: "",
            address_to: "",
            house_to: "",
            city_to: "",
            zip_to: "",
            promoCode: '',
            errors: {
                address_from: false,
                address_to: false,
                city_from: false,
                city_to: false,
                email: false,
                house_from: false,
                house_to: false,
                name: false,
                phone: false,
                zip_from: false,
                zip_to: false
            },
            translationForm: [
                {
                    lang: 'ru',
                    btnText: 'Отправляем'

                },
                {
                    lang: 'en',
                    btnText: 'Sending'
                },
                {
                    lang: 'es',
                    btnText: 'Enviando'
                },
            ],
        }
    },
    computed: {
        translatedForm() {
            return this.translationForm.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        },
        translateThanx() {
            return this.translate.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        },
        promoCodeTranslation() {
            const arr = [
                {
                    textPromoCode: 'Promocode',
                    typeService: 'Type of move',
                    typePackage: 'Package type',
                    lang: 'en'
                },
                {
                    textPromoCode: 'Промо-код',
                    typeService: 'Тип переезда',
                    typePackage: 'Тип пакета',
                    lang: 'ru'
                },
                {
                    textPromoCode: 'Código Promocional',
                    typeService: 'Tipo de movimiento',
                    typePackage: 'Tipo de paquete',
                    lang: 'es'
                },
            ]
            return arr.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        },
        isActive() {
            return this.$store.getters['choose-service-popup/IS_ACTIVE']
        },
        typeFromPage() {
            return this.$store.getters['choose-service-popup/VALUE_TYPE']
        },
        translations() {
            let formOrder = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'form_order')
            return formOrder
        },
        types() {
            return this.$store.getters['services/SERVICES']
        },
        typeMoving() {
            return this.$store.getters['choose-service-popup/TYPE']
        },
        typePackages() {
            return this.$store.getters['choose-service-popup/PACKAGE']
        },
        valueForm() {
            return this.$store.getters['choose-service-popup/VALUE']
        }
    },
    methods: {
        setPackage(e) {
            this.currPackage = e.name
            this.isActivePackages = false
        },
        openPackages() {
            this.isActivePackages = !this.isActivePackages
        },
        openTypes() {
            this.isActiveType = !this.isActiveType
        },
        setTypes(e) {
            this.currType = e.alias
            this.valueType = e.name
            this.isActiveType = false
        },
        setDefault() {
            this.errors = {
                address_from: false,
                address_to: false,
                city_from: false,
                city_to: false,
                email: false,
                house_from: false,
                house_to: false,
                name: false,
                phone: false,
                zip_from: false,
                zip_to: false
            }
        },
        closePopup() {
            this.$store.dispatch('choose-service-popup/closePopup')
            this.isActivePackages = false
            this.isActiveType = false
            this.currPackage = ''
        },
        async postOrder() {
            try {
                this.sending = true
                let options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' }

                const orderMessage = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    range_date: `${new Date(this.range.start).toLocaleDateString(`${this.$i18n.locale}-${(this.$i18n.locale).toUpperCase()}`, options)} - ${new Date(this.range.end).toLocaleDateString(`${this.$i18n.locale}-${(this.$i18n.locale).toUpperCase()}`, options)}`,
                    address_from: this.address_from,
                    house_from: this.house_from,
                    city_from: this.city_from,
                    state_from: this.stateValStart,
                    zip_from: this.zip_from,
                    address_to: this.address_to,
                    house_to: this.house_to,
                    city_to: this.city_to,
                    state_to: this.stateValEnd,
                    zip_to: this.zip_to,
                    package: this.currPackage,
                    promocode: this.promoCode,
                    type_service: this.valueType
                }
                const order = await this.$axios.post('/orders', orderMessage)
                    .then(res => {
                        return res
                    })
                if (order) {
                    this.sending = false
                    this.show = false
                    this.showThanx = true
                    setTimeout(() => {
                        this.closePopup()
                        this.showThanx = false
                    }, 2000);
                    this.name = ""
                    this.email = ""
                    this.phone = ""
                    this.address_from = ""
                    this.house_from = ""
                    this.city_from = ""
                    this.zip_from = ""
                    this.address_to = ""
                    this.house_to = ""
                    this.city_to = ""
                    this.zip_to = ""
                    this.stateValStart = "CA"
                    this.stateValEnd = "CA"
                    this.currPackage = ''
                    this.promoCode = ''
                }
            } catch (error) {
                console.error(error.response.data.errors);
                this.errors.address_from = !!error.response.data.errors.address_from
                this.errors.address_to = !!error.response.data.errors.address_to
                this.errors.city_from = !!error.response.data.errors.city_from
                this.errors.city_to = !!error.response.data.errors.city_to
                this.errors.email = !!error.response.data.errors.email
                this.errors.house_from = !!error.response.data.errors.house_from
                this.errors.house_to = !!error.response.data.errors.house_to
                this.errors.name = !!error.response.data.errors.name
                this.errors.phone = !!error.response.data.errors.phone
                this.errors.zip_from = !!error.response.data.errors.zip_from
                this.errors.zip_to = !!error.response.data.errors.zip_to
                this.sending = false
                setTimeout(() => {
                    this.setDefault()
                }, 5000)
            }

        },
        openZipListStart() {
            this.isActiveZipStart = true
        },
        openZipListEnd() {
            this.isActiveZipEnd = true
        },
        setZipStart(e) {
            this.isActiveZipStart = false
            this.stateValStart = e.name
        },
        setZipEnd(e) {
            this.isActiveZipEnd = false
            this.stateValEnd = e.name
        },
        datePick() {
            this.isOpen = true
        },
    },
    async mounted() {
        await this.$axios.$get('front/postal_codes').then(res => {
            this.statePost = res.data
        })
    },
    watch: {
        valueForm(v) {
            if (v) {
                this.currType = v.alias
                this.valueType = v.name
            } else {
                this.currType = this.types[0].alias
                this.valueType = this.types[0].name
            }
        },
        typePackages(newValue) {
            if (newValue) {
                this.currPackage = newValue
            }
        },
        range(newVal) {
            if (newVal.end) {
                this.isOpen = false
            }
        },
        isActive(e) {
            const body = document.querySelector('body')
            if (e) {
                this.show = true
                body.classList.add('lock')
            } else {
                body.classList.remove('lock')
                this.isOpen = false
            }
        }
    }
}
</script>
<style lang="scss" >
.vc-time-picker {
    display: none !important;
}

.call-to-action {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 29, 50, .50);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    transform: translateY(-30px);
    opacity: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;

    &.active {
        visibility: visible;
        opacity: 1;
        z-index: 9999;
        transform: translateY(0);
    }

    &__btn-index {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        cursor: pointer;
    }

    &__loader {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120%;
        background: rgba(15, 29, 50, 0.1);
        backdrop-filter: blur(3px);
        opacity: 0;
        visibility: hidden;
        z-index: -1;
        transition: 0.3s ease-in-out;

        &.show {
            z-index: 99999;
            opacity: 1;
            visibility: visible;
        }
    }

    &__loader-body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 20px;
        flex-direction: column;
    }

    &__loader-text {
        font-size: 30px;
        font-weight: bold;
        color: #28aecb;
        animation: loading 1.2s infinite linear;
    }

    @keyframes loading {

        0%,
        100% {
            letter-spacing: normal;
            opacity: 0.5;
        }

        50% {
            letter-spacing: 1.5px;
            opacity: 1;
        }
    }

    &__loader-icon {
        animation: loadingIcon 1.2s infinite linear;
    }

    @keyframes loadingIcon {

        0%,
        100% {
            transform: scale(1);
            opacity: 0.5;
        }

        50% {
            transform: scale(1.09);
            opacity: 1;
        }
    }

    &__thanks {
        position: fixed;
        background: #FAFAFA;
        padding: 35px;
        color: #000000;
        border-radius: 10px;
        visibility: hidden;
        transform: translateY(30px);
        opacity: 0;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;

        &.active {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        }
    }

    &__thanks-title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        margin-bottom: 15px;
    }

    &__thanks-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }

    &__types {
        cursor: pointer;
        caret-color: transparent;
        position: relative;
    }

    &__select-types-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        display: none;

        &.active {
            display: block;
        }
    }

    &__select-types {
        position: absolute;
        background: #FAFAFA;
        border: 1px solid #0f1d32;
        border-radius: 15px;
        z-index: 9;
        width: 100%;
        overflow: hidden;
        opacity: 0;
        height: 0;
        visibility: hidden;
        transition: 0.3s ease-in;

        &.active {
            height: 177px;
            opacity: 1;
            visibility: visible;
        }
    }

    .call-to-action__select-types-package {
        position: absolute;
        background: #FAFAFA;
        border: 1px solid #0f1d32;
        border-radius: 15px;
        z-index: 9;
        width: 100%;
        overflow: hidden;
        opacity: 0;
        height: 0;
        visibility: hidden;
        transition: 0.3s ease-in;

        &.active {
            height: 105px;
            opacity: 1;
            visibility: visible;
        }
    }

    &__select {
        position: absolute;
        right: -85px;
        bottom: 0;
        height: 0;
        width: 85px;
        border: 1px solid #0f1d32;
        border-radius: 15px;
        background: #FAFAFA;
        z-index: 9;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in;

        &.active {
            height: 175px;
            opacity: 1;
            visibility: visible;
        }
    }

    &__select-list {
        width: 100%;
        height: 100%;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-webkit-scrollbar-track {
            background: none;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border: 3px solid rgba(0, 0, 0, 0);
            background-clip: padding-box;
            border-radius: 9999px;
            background-color: rgba(15, 29, 50, 0.5);
            transition: 0.3s;
        }

        &::-webkit-scrollbar-thumb:hover {
            border: 3px solid rgba(0, 0, 0, 0);
            background-color: rgba(15, 29, 50, 1);
        }
    }

    &__select-item {
        color: #000;
        width: 100%;
        padding: 3.9px 2px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in-out;

        &.active,
        &:hover {
            background-color: rgba(15, 29, 50, 1);
            color: #fff;

        }
    }

    &__body {
        background: #FAFAFA;
        padding: 35px 25px 35px 35px;
        border-radius: 10px;
        width: 810px;
        height: 90%;
        overflow-y: scroll;
        position: relative;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-30px);
        transition: 0.3s ease-in-out;
        z-index: 9999;

        &.active {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        }

        &.hidden {
            overflow: hidden !important;
            display: flex;
            align-items: flex-end;
        }

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: none;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border: 3px solid rgba(0, 0, 0, 0);
            background-clip: padding-box;
            border-radius: 9999px;
            background-color: rgba(15, 29, 50, 0.5);
            transition: 0.3s;
        }

        &::-webkit-scrollbar-thumb:hover {
            border: 3px solid rgba(0, 0, 0, 0);
            background-color: rgba(15, 29, 50, 1);
        }
    }

    &__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 30px;
        color: #000;

        &--sides {
            max-width: 290px;
            margin-bottom: 0;
        }
    }

    &__calendar {
        position: relative;
        cursor: pointer;

        input {
            cursor: pointer;
        }
    }

    &__input {
        padding-left: 35px;

        &--date {
            white-space: nowrap;
            overflow: hidden;
        }
    }

    &__top-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 30px;
        margin-bottom: 55px;
    }

    &__bottom {
        display: flex;
        gap: 49px;
    }


    &__devider {
        width: 0.5px;
        background: rgba(0, 0, 0, 0.5);
        flex-shrink: 0;
    }

    &__text {
        display: block;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #000000;
        margin-bottom: 10px;

        &--hidden {
            opacity: 0;
        }
    }

    &__calendar-icon {
        position: absolute;
        left: 16px;
        bottom: 18px;
    }

    &__label {
        width: 320px;
        position: relative;

        &--width {
            width: 330px;
        }

        &--first {
            width: 85px;
            margin-right: 30px;
            position: relative;

            .field {
                padding: 14px 15px 14px 22px;
                cursor: pointer;
                caret-color: transparent;

            }
        }

        &--type {
            img {
                position: absolute;
                right: 20px;
                top: 49px;
                transform: rotate(-90deg);
                transition: 0.3s ease-in-out;

                &.active {
                    transform: rotate(0);
                }
            }
        }

        &--second {
            width: 205px;
        }
    }

    &__state {
        display: flex;
        align-items: center;
        position: relative;

        img {
            position: absolute;
            top: 50px;
            right: 22px;
            transition: 0.3s ease-in-out;

            &.active {
                transform: rotate(-90deg);
            }
        }


    }

    &__minus {
        color: #000;
        margin-top: 25px;
        margin: 25px 9px 0px;
        display: block;
    }

    &__sides {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: flex-end;
    }

    &__btn {
        width: 100%;
        margin-top: 50px;
    }

    &__calendar-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        visibility: hidden;
        opacity: 0;
        z-index: 0;
        transition: 0.2s ease-in-out;

        &.active {
            visibility: visible;
            opacity: 1;
            z-index: 999;
        }
    }

    &__btn-close {
        position: absolute;
        right: 8px;
        top: 8px;
        width: 35px;
        height: 35px;
        display: none;
    }

}


.vc-container {
    width: 93% !important;
    position: absolute !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    background: #0f1d32 !important;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    .vc-pane-container {
        .vc-pane-layout {
            gap: 30px;
        }

        div {
            // &:nth-child(3) {
            //     display: none;
            // }
        }
    }
}

@media screen and (max-width: 992px) {
    .call-to-action {
        padding: 0 20px;
    }
}

@media screen and (max-width: 768px) {
    .call-to-action {

        &__label,
        &__input {
            width: 100%;
        }

        &__top-block {
            row-gap: 10px;
        }
    }
}

@media screen and (max-width: 620px) {
    .call-to-action {
        &__bottom {
            flex-direction: column;
        }

        &__top-block {
            margin-bottom: 32px;
        }

        &__sides {
            gap: 15px
        }

        &__devider {
            display: none;
        }

        &__title--sides {
            max-width: 100%;
        }
    }

    .vc-pane-layout {
        grid-template-columns: repeat(1, 1fr) !important;
    }

    .vc-container .vc-pane-container .vc-pane-layout {
        gap: 15px;
    }

    .vc-header {
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 540px) {
    .call-to-action {
        padding: 0;

        &__body {
            width: 100%;
            height: 100vh;
            border-radius: 0;
            padding: 35px 25px 110px 35px;
        }

        &__btn-close {
            display: block;
        }
    }
}
</style>