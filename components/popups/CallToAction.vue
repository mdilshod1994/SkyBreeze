<template>
    <div :class="`call-to-action ${isActive ? 'active' : ''}`" @click="closePopup">
        <transition>
            <div class="call-to-action__body" @click.stop="">
                <div class="call-to-action__title">
                    Введите ваши данные для связи
                </div>
                <form class="call-to-action__form">
                    <div class="call-to-action__top-block">
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                Имя и фамилия
                            </span>
                            <input type="text" class="form__field field" placeholder="Ваше имя">
                        </label>
                        <label class="form__label call-to-action__label call-to-action__label--width">
                            <span class="call-to-action__text">
                                Ваша эл. почта
                            </span>
                            <input type="email" class="form__field field" placeholder="jstone@gmail.com">
                        </label>
                        <label class="form__label call-to-action__label">
                            <span class="call-to-action__text">
                                Ваш номер телефона (опционально)
                            </span>
                            <input type="tel" class="form__field field" placeholder="+12312312312">
                        </label>
                        <label
                            class="form__label call-to-action__label call-to-action__label--width call-to-action__calendar">
                            <span class="call-to-action__text">
                                Выбрать диапазон дат
                            </span>
                            <input type="text" class="form__field field call-to-action__input"
                                :value="`${(range.start).toDateString()} - ${(range.end).toDateString()}`"
                                placeholder="Выбрать диапазон дат" @click="datePick">
                            <img src="@/assets/img/icons/calendar.svg" class="call-to-action__calendar-icon" alt="">
                        </label>
                        <date-picker mode="dateTime" color="blue" is-dark is-range v-model="range" :columns="2"
                            :class="{ active: isOpen }" />
                        <div class="call-to-action__calendar-overlay" :class="{ active: isOpen }"
                            @click="isOpen = false">
                        </div>
                    </div>
                    <div class="call-to-action__bottom">
                        <div class="call-to-action__sides">
                            <div class="call-to-action__title call-to-action__title--sides">
                                Укажите адрес места погрузки
                            </div>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    Адрес
                                </span>
                                <input type="text" class="form__field field" placeholder="Пример адреса">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    Номер дома/квартиры
                                </span>
                                <input type="text" class="form__field field" placeholder="1А">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    Город
                                </span>
                                <input type="text" class="form__field field" placeholder="Нью-йорк">
                            </label>
                            <div class="call-to-action__state">
                                <label class="form__label  call-to-action__label call-to-action__label--first">
                                    <span class="call-to-action__text">
                                        Штат
                                    </span>
                                    <input type="text" class="form__field field" placeholder="NY">
                                    <img src="" alt="">
                                </label>
                                <label class="form__label call-to-action__label call-to-action__label--second">
                                    <span class="call-to-action__text">
                                        Zip
                                    </span>
                                    <input type="text" class="form__field field" placeholder="">
                                </label>
                                <span class="call-to-action__minus">-</span>
                                <label class="form__label call-to-action__label call-to-action__label--third">
                                    <span class="call-to-action__text call-to-action__text--hidden">
                                        a
                                    </span>
                                    <input type="text" class="form__field field" placeholder="">
                                </label>
                            </div>
                        </div>
                        <div class="call-to-action__devider">
                        </div>
                        <div class="call-to-action__sides">
                            <div class="call-to-action__title call-to-action__title--sides">
                                Укажите адрес места погрузки
                            </div>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    Адрес
                                </span>
                                <input type="text" class="form__field field" placeholder="Пример адреса">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    Номер дома/квартиры
                                </span>
                                <input type="text" class="form__field field" placeholder="1А">
                            </label>
                            <label class="form__label call-to-action__label">
                                <span class="call-to-action__text">
                                    Город
                                </span>
                                <input type="text" class="form__field field" placeholder="Нью-йорк">
                            </label>
                            <div class="call-to-action__state">
                                <label class="form__label call-to-action__label call-to-action__label--first">
                                    <span class="call-to-action__text">
                                        Штат
                                    </span>
                                    <input type="text" class="form__field field" placeholder="NY">
                                    <img src="" alt="">
                                </label>
                                <label class="form__label call-to-action__label call-to-action__label--second">
                                    <span class="call-to-action__text">
                                        Zip
                                    </span>
                                    <input type="text" class="form__field field" placeholder="">
                                </label>
                                <span class="call-to-action__minus">-</span>
                                <label class="form__label call-to-action__label call-to-action__label--third">
                                    <span class="call-to-action__text call-to-action__text--hidden">
                                        a
                                    </span>
                                    <input type="text" class="form__field field" placeholder="">
                                </label>
                            </div>
                        </div>
                    </div>
                    <button class="call-to-action__btn btn">
                        Оставить заявку
                    </button>
                </form>
            </div>
        </transition>

    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            range: {
                start: new Date(),
                end: new Date()
            },
            isOpen: false
        }
    },
    computed: {
        isActive() {
            return this.$store.getters['choose-service-popup/IS_ACTIVE']
        }
    },
    methods: {
        datePick() {
            this.isOpen = true
        },
        closePopup() {
            this.$store.dispatch('choose-service-popup/closePopup')
        }
    },
    watch: {
        range(newVal) {
            if (newVal.end) {
                this.isOpen = false
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
    opacity: 0;

    &.active {
        visibility: visible;
        opacity: 1;
    }

    &__body {
        background: #fff;
        padding: 35px 25px 35px 35px;
        border-radius: 10px;
        width: 810px;
        height: 90%;
        overflow-y: scroll;
        position: relative;

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

    &__form {}

    &__calendar {
        position: relative;
    }

    &__input {
        padding-left: 50px;
    }

    &__top-block {
        display: flex;
        flex-wrap: wrap;
        gap: 30px 45px;
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
        }

        &--second {
            width: 80px;
        }

        &--third {
            width: 100px;
        }
    }

    &__state {
        display: flex;
        align-items: center;
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
</style>