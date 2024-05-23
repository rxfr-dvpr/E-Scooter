<template>
  <section class="scooter__section" :class="{'light' : light}">
    <div class="container">
        <div class="row">
            <div class="scooter__descr">
                <h2 class="scooter__descr-title all-title-45">{{ descr.title }}</h2>

                <span class="scooter__descr-price">{{ descr.price }}</span>

                <button class="theme-btn" @click="this.$emit('changeTheme')" :class="{'light': light}">
                    <span class="dark-btn">черный</span>
                    <span class="bg"></span>
                    <span class="light-btn">белый</span>
                </button>

                <button class="scooter__descr-btn all-btn">{{ descr.btn }}</button>
            </div>

            <ul class="info__list">
                <p class="info__list-title">{{ info.title }}</p>

                <li class="info__list-item" v-for="item in info.list" :key="item">{{ item }}</li>
            </ul>

            <span class="scooter-bg"></span>
        </div>

        <img :src="light ? scooter2Img : scooter1Img" alt="" class="scooter-img">
    </div>
  </section>
</template>

<script>

export default {
    name: 'Scooter Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            descr: {
                title: 'Mi Electric Scooter Pro 2',
                price: '54 990 ₽',
                btn: 'Купить'
            },
            info: {
                title: 'Комплект поставки',
                list: [
                    'Адаптер питания',
                    'Шестигранный ключ',
                    'Удлинитель для насоса',
                    'Винты x 5 шт.',
                    'Запасная шина',
                    'Руководство пользователя',
                    'Буклет с информацией'
                ]
            },
            scooter1Img: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Scooter%2Fscooter-img-1.png?alt=media&token=5590b6e7-ea1f-4217-881c-6fe28cbe5c0b',
            scooter2Img: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Scooter%2Fscooter-img-2.png?alt=media&token=139dfc1c-0322-4ba6-87e1-4ba168e0431b',
        }
    }
}

</script>

<style lang="scss" scoped>

.scooter__section {
    width: 100%;

    .container {
        position: relative;
    }

    .row {
        justify-content: space-between;
        padding: 60px;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        z-index: 5;
    }

    .scooter__descr {
        max-width: 495px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        z-index: 5;

        &-price {
            font-size: 25px;
            font-weight: 700;
            color: var(--main-orange);
            margin-bottom: 15px;
        }

        &-btn {
            margin-top: 190px;
        }
    }

    .theme-btn {
        max-width: 250px;
        width: 100%;
        min-width: 250px;
        height: 55px;
        background: transparent;
        border: 3px solid var(--main-white);
        border-radius: 108px;
        display: flex;
        position: relative;
        transition: .4s;

        .dark-btn, .light-btn {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 16px;
            text-transform: capitalize;
            font-weight: 700;
            transition: .4s;
        }

        .dark-btn {
            color: var(--main-black);
        }

        .bg {
            width: 50%;
            height: 103%;
            position: absolute;
            top: -1px;
            left: -2px;
            border-radius: 100px;
            background: var(--main-white);
            z-index: -1;
            transition: .4s;
        }

        &.light {
            border-color: var(--main-black);

            .bg {
                transform: translateX(103%);
                background: var(--main-black);
            }
        }
    }

    .info__list {
        max-width: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        z-index: 5;

        &-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        &-item {
            font-size: 14px;
            font-weight: 300;
        }
    }

    .scooter-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background: #101010;
    }

    &.light {

        .scooter__descr {
            &-title {
                color: var(--main-black);
            }
        }

        .info__list {
            &-title, &-item {
                color: var(--main-black);
            }
        }
        .scooter-bg {
            background: #f0f0f0;
        }
    }

    .scooter-img {
        max-width: 570px;
        width: 100%;
        position: absolute;
        bottom: -2%;
        right: 7%;
        pointer-events: none;
        z-index: 6;
    }
}

@media (max-width: 856px) {

    .scooter__section {
        .row {
            padding: 60px 45px;
        }
    }
    .scooter__descr {
        max-width: 400px !important;
    }
}

@media (max-width: 746px) {
    .scooter__section {
        .row {
            padding: 60px 35px;
        }
    }
    .scooter__descr {
        max-width: max-content !important;
    }

    .info__list {
        max-width: max-content !important;
    }
}

</style>