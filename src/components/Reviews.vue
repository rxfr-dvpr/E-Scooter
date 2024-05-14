<template>
  <section class="reviews__section" :class="{'light': light}" id="reviews">
    <div class="container">
        <div class="row">
            <h2 class="reviews-title all-title-45">{{ title }}</h2>

            <ReviewsSlider :dataList="slides" :light="light"/>

            <div class="reviews-bottom">
                <button class="review-btn all-btn">{{ btnVal }}</button>

                <div class="slider-buttons">
                    <button class="slider-btn prev"><i class="far fa-angle-left"></i></button>
                    <button class="slider-btn next"><i class="far fa-angle-right"></i></button>
                </div>
            </div>


            <img :src="reviewsBg" alt="" class="reviews-bg">
        </div>
    </div>
  </section>
</template>

<script>
import ReviewsSlider from './ReviewsSlider.vue'

export default {
    name: 'Reviews Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'Отзывы о Mi Scooter Pro 2',
            slides: [
                {
                    author: 'Михаил Сафонов',
                    msg: 'Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса - десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски (вес аппарата, развесовка). В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе самоката.'
                },
                {
                    author: 'Имя скрыто',
                    msg: 'Владею также первой версией самоката (m365). В версии pro 2 исправлено множество недостатков m365: - усилен узел складывания и язычок - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку из-за тряски - установлена поддержка заднего крыла и защита провода заднего габарита.'
                },
                {
                    author: 'Алексей З.',
                    msg: 'Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км и еще оставалось 16% заряда. ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными'
                }
            ],
            btnVal: 'Оставить отзыв',
            reviewsBg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Reviews%2Freviews-bg.png?alt=media&token=dcfebab1-2b43-4bcb-8a89-fc82e5811909'
        }
    },
    components: {
        ReviewsSlider
    }
}

</script>

<style lang="scss" scoped>

.reviews__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 30px;
        position: relative;
    }
    
    .reviews-title {
        color: var(--main-orange);
    }

    .reviews-bg {
        max-width: 1000px;
        width: 100%;
        position: absolute;
        bottom: -30%;
        right: -25%;
        z-index: -1;
    }

    .reviews-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .slider-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;

            .slider-btn {
                width: 54px;
                height: 54px;
                border-radius: 50%;
                border: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--main-white);

                i {
                    font-size: 25px;
                    color: var(--main-black);
                }

                &:hover, &:active {
                    background: var(--main-orange) !important;
                }

                &.swiper-button-disabled {
                    opacity: .3;
                    pointer-events: none;
                }
            }
        }
    }

    &.light {
        .slider-btn {
            background: var(--main-black) !important;

            i {
                color: var(--main-white) !important;
            }
        }
    }
}

@media (max-width: 1800px) {
    .reviews-bg {
        right: 0 !important;
    }
}

@media (max-width: 992px) {
    .reviews-bg {
        bottom: 15% !important;
    }
}

@media (max-width: 826px) {
    .reviews-bg {
        bottom: 30% !important;
    }
}

</style>