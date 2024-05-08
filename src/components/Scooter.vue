<template>
  <section class="scooter__section">
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
        </div>
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
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.scooter__section {
    width: 100%;

    .row {
        justify-content: space-between;
    }

    .scooter__descr {
        max-width: 495px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;

        &-price {
            font-size: 25px;
            font-weight: 700;
            color: var(--main-orange);
            margin-bottom: 15px;
        }

        &-btn {
            margin-top: auto;
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
}

</style>