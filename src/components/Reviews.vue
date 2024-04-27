<template>
  <section class="reviews__section">
    <div class="container">
        <div class="row">
            <h2 class="reviews-title all-title-45">{{ title }}</h2>

            <div class="reviews-list">
                <div class="reviews-list-item" v-for="(item, idx) in slides" :key="idx">
                    <p class="review-author">{{ item.author }}</p>

                    <span class="review-line"></span>

                    <p class="review-msg">{{ item.msg }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

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
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.reviews__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 30px;
    }
    
    .reviews-title {
        color: var(--main-orange);
    }

    .reviews-list {
        width: 100%;
        display: flex;
        gap: 40px;
        overflow-x: auto;
        scroll-snap-type: mandatory;
        cursor: grab;
        scroll-snap-align: center;
        padding-bottom: 15px;

        &-item {
            width: 460px;
            min-width: 460px;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            padding: 40px;
            background: #111010;
            border-radius: 15px;

            .review-author {
                font-size: 20px;
                text-transform: capitalize;
                font-weight: 600;
            }

            .review-msg {
                font-size: 14px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .review-line {
                max-width: 100px;
                width: 100%;
                height: 3px;
                background: var(--main-orange);
                border-radius: 3px;
            }
        }
        
    }
}

</style>