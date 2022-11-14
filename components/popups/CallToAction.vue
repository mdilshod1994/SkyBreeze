<template>
    <div :class="`call-to-action ${isActive ? 'active' : ''}`" @click="closePopup" v-if="translations.length > 0">
        <div @click.stop="" :class="`call-to-action__body ${show ? 'active' : ''}`">
            <img src="@/assets/img/icons/close.png" alt="close" class="call-to-action__btn-close" @click="closePopup">
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
                        class="form__label call-to-action__label call-to-action__label--width call-to-action__calendar">
                        <span class="call-to-action__text">
                            {{ translations[4].text }}
                        </span>
                        <input type="text" class="form__field field call-to-action__input"
                            :value="`${(range.start).toLocaleDateString(`${$i18n.locale}-${($i18n.locale).toUpperCase()}`, { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })} - ${(range.end).toLocaleDateString(`${$i18n.locale}-${($i18n.locale).toUpperCase()}`, { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}`"
                            placeholder="Выбрать диапазон дат" @click="datePick">
                        <img src="@/assets/img/icons/calendar.svg" class="call-to-action__calendar-icon" alt="">
                    </label>
                    <date-picker mode="dateTime" color="blue" is-dark is-range v-model="range" :columns="2"
                        :class="{ active: isOpen }" :locale="$i18n.locale" />
                    <div class="call-to-action__calendar-overlay" :class="{ active: isOpen }" @click="isOpen = false">
                    </div>
                </div>
                <div class="call-to-action__bottom">
                    <div class="call-to-action__sides">
                        <div class="call-to-action__title call-to-action__title--sides">
                            {{ translations[5].text }}
                        </div>
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                {{ translations[7].text }}
                            </span>
                            <input type="text" :class="`form__field field ${errors.address_from ? 'errorValid' : ''}`"
                                :placeholder="translations[7].text" v-model="address_from">
                        </label>
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                {{ translations[8].text }}
                            </span>
                            <input type="text" :class="`form__field field ${errors.house_from ? 'errorValid' : ''}`"
                                placeholder="1А" v-model="house_from">
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
                                <input type="text" class="form__field field" v-model="stateValStart"
                                    @click="openZipListStart">
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
                                <input type="text" :class="`form__field field ${errors.zip_from ? 'errorValid' : ''}`"
                                    placeholder="" v-model="zip_from">
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
                                {{ translations[7].text }}
                            </span>
                            <input type="text" :class="`form__field field ${errors.address_to ? 'errorValid' : ''}`"
                                :placeholder="translations[7].text" v-model="address_to">
                        </label>
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                {{ translations[8].text }}
                            </span>
                            <input type="text" :class="`form__field field ${errors.house_to ? 'errorValid' : ''}`"
                                placeholder="1А" v-model="house_to">
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
                                <input type="text" class="form__field field" placeholder="NY" v-model="stateValEnd"
                                    @click="openZipListEnd">
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
                                    placeholder="" v-model="zip_to">
                            </label>
                        </div>
                    </div>
                </div>
                <button class="call-to-action__btn btn" type="submit">
                    {{ translations[13].text }}
                </button>
            </form>
        </div>
        <div :class="`call-to-action__thanks ${showThanx ? 'active' : ''}`">
            <div class="call-to-action__thanks-title">
                Спасибо за заказ!
            </div>
            <p class="call-to-action__thanks-text">
                В скором времени мы свяжемся с Вами
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
            isActiveZipStart: false,
            isActiveZipEnd: false,
            stateValStart: "NY",
            stateValEnd: 'NY',
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
            }
        }
    },
    computed: {
        isActive() {
            return this.$store.getters['choose-service-popup/IS_ACTIVE']
        },
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'form_order')
            return topMenu
        },
    },
    methods: {
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
        },
        async postOrder() {
            try {
                const orderMessage = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    range_date: `${this.range.start} / ${this.range.end}`,
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
                }
                const order = await this.$axios.post('/orders', orderMessage)
                    .then(res => {
                        return res
                    })
                if (order) {
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
                    this.stateValStart = ""
                    this.stateValEnd = ""
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
                setTimeout(() => {
                    this.setDefault()
                }, 5000)
            }

        },
        openZipListStart() {
            this.isActiveZipStart = !this.isActiveZipStart
        },
        openZipListEnd() {
            this.isActiveZipEnd = !this.isActiveZipEnd
        },
        setZipStart(e) {
            this.stateValStart = e.name
        },
        setZipEnd(e) {
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
        range(newVal) {
            if (newVal.end) {
                this.isOpen = false
            }
        },
        isActive(e) {
            if (e) {
                this.show = true
            }
        }
    }
}
</script>
<style lang="scss" >
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
        height: 35px;
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
    }

    &__input {
        padding-left: 50px;
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
        left: 25px;
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
            &:nth-child(3) {
                width: 100%;
                display: flex !important;
                justify-content: center;
                gap: 30px;

                .vc-time-picker {
                    width: 50%;
                }
            }
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

    .vc-container .vc-pane-container div:nth-child(3) {
        flex-direction: column;
    }

    .vc-container .vc-pane-container div:nth-child(3) .vc-time-picker {
        width: 100%;
        justify-content: center;
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