<template>
    <section class="scene order">
        <div class="wrapper">
            <div class="order__title title h2">Как вы можете связаться с нами?</div>
            <div class="order__body">
                <div class="order__left">
                    <div class="order__caption">Заполните форму обратной связи и мы свяжемся с вами</div>
                    <form action="#" class="order__form form form--white">
                        <div class="order__form-body">
                            <div class="order__form-row">
                                <div class="order__form-coll">
                                    <label class="form__label">
                                        <input type="text" class="form__field field" placeholder="Ваше имя">
                                    </label>
                                </div>
                                <div class="order__form-coll">
                                    <label class="form__label">
                                        <input type="text" class="form__field field" placeholder="Ваша фамилия">
                                    </label>
                                </div>
                            </div>
                            <label class="form__label">
                                <input type="text" class="form__field field" placeholder="Ваша эл.почта">
                            </label>
                            <label class="form__label">
                                <textarea class="form__field field" placeholder="Ваше сообщение"></textarea>
                            </label>
                        </div>
                        <div class="order__form-bottom">
                            <button class="form__btn btn">Отправить</button>
                            <div class="form__checbox">
                                <label class="checbox">
                                    <input type="checkbox" name="value" value="active" checked>
                                    <div class="checbox__icon"></div>
                                    <div class="checbox__caption">Соглашаюсь с <a href="#">Политикой Конфиденциальности
                                            и Обработкой Персональных данных</a></div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="order__right">
                    <div class="map">
                        <!--iframe src="https://www.google.com/maps/d/u/0/embed?mid=1XJfXppO6cPHmLO35qZvbFvbGrSHAwuw&ehbc=2E312F" width="1300" height="480"></iframe-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style>

</style>