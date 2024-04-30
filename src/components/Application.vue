<template>
  <section class="application__section" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <div class="application__descr">
                <h2 class="application__descr-title all-title-45">{{ title }}</h2>
                <p class="application__descr-txt">{{ txt }}</p>

                <div class="application__icons">
                    <a href="" class="application__icons-item" v-for="(icon, idx) in icons" :key="idx">
                        <img :src="icon.icon" alt="" class="icon-img">
                    </a>
                </div>
            </div>

            <img :src="img" alt="" class="application-img">

            <img :src="vectorImg" alt="" class="vector-img">

            <img :src="appBg" alt="" class="application-bg">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Application Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'Мобильное приложение Mi Home',
            txt: 'Подключите самокат к мобильному приложению Mi Home и используйте его для блокировки и разблокировки самоката, а так же просмотра основных данных: пробег, скорость, уровень заряда аккумулятора.',
            icons: [
                {
                    name: 'appstore',
                    icon: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Application%2Fappstore.svg?alt=media&token=ffe8dda2-4693-4d6c-bcf9-abe5014d685c'
                },
                {
                    name: 'playmarket',
                    icon: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Application%2Fplaymarket.svg?alt=media&token=dbefd7aa-adf7-43cc-8415-055ec22654ea'
                }
            ],
            img: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Application%2Fapp-img.png?alt=media&token=b05cf9fb-f55a-4fdf-a436-ff622ae0e52f',
            vectorImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Application%2Fapplication-vector.png?alt=media&token=65d6cd89-9d26-4459-86e9-5095e9c17629',
            appBg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Application%2Fapplication-bg.png?alt=media&token=60f894fd-519c-48e9-99e6-d1614adf1829'
        }
    }
}

</script>

<style lang="scss" scoped>

.application__section {
    width: 100%;

    .row {
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .application {
        &__descr {
            max-width: 525px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 30px;

            &-title {
                color: var(--main-orange);
            }

            &-txt {
                max-width: 360px;
                width: 100%;
                font-size: 14px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

        }

        &__icons {
            max-width: max-content;
            width: 100%;
            display: flex;
            gap: 20px;
            align-items: center;

            &-item {
                max-width: 120px;
                width: 100%;
                display: flex;
                align-items: center;

                .icon-img {
                    width: 100%;
                }
            }
        }

        &-img {
            max-width: 400px;
            width: 100%;
            z-index: 7;
        }

        &-bg {
            position: absolute;
            bottom: -15%;
            left: 25%;
            z-index: 4;
        }
    }

    &.light {
        .application__descr-txt {
            font-weight: 500;
            color: var(--main-black);
        }
    }

    .vector-img {
        max-width: 650px;
        width: 100%;
        position: absolute;
        top: -38%;
        right: -25%;
        z-index: 6;
    }
}

</style>