<template>
  <section class="appearance__section" :class="{'light': light}" id="appearance">
    <div class="container">
        <div class="row">
            <h2 class="appearance-title all-title-45">{{ title }}</h2>

            <div class="appearance__cards">
                <div class="appearance__cards-item" v-for="(card, idx) in cards" :key="idx">
                    <img :src="card.img" alt="" class="card-img">

                    <h4 class="card-title">{{ card.title }}</h4>

                    <p class="card-txt">{{ card.txt }}</p>
                </div>
            </div>

            <img :src="filterImg" alt="" class="appearance-filter">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Appearance Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'Лаконичный современный дизайн, в котором нет ничего лишнего',
            filterImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Appearance%2Fappearance-filter.png?alt=media&token=fc1e567c-d2d6-442b-9767-1b309f439b53',
            cards: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Appearance%2Fcard-1.png?alt=media&token=7e74fdf9-8c9e-410d-a9c4-5a695f44a907',
                    title : 'Минималистичный дизайн',
                    txt: 'Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место.  Одного прикосновения достаточно, чтобы запустить самокат.'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Appearance%2Fcard-2.png?alt=media&token=6656cfa6-1805-4d93-8c01-82efacaeb0d4',
                    title : 'Удобная панель управления',
                    txt: 'Удобно расположенные элементы управления. Отображение8 типов данных в реальном времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая информация.'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.appearance__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 70px;
        position: relative;
    }

    .appearance {
        &-title {
            max-width: 700px;
            width: 100%;
            color: var(--main-orange);
        }

        &-filter {
            max-width: max-content;
            width: 100%;
            position: absolute;
            top: -50%;
            left: 40%;
            z-index: -1;
        }

        &__cards {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;

            &-item {
                max-width: 560px;
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 15px;
                position: relative;
                padding: 400px 60px 45px;
                overflow: hidden;
                border-radius: 15px;
                background: #0E0E0E;

                .card-img {
                    width: 100%;
                    max-height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    object-fit: cover;
                }

                .card-title, .card-txt {
                    z-index: 2;
                }
                
            }
        }
    }

    &.light {
        .appearance-title {
            color: var(--main-black);
        }
    }
}

</style>