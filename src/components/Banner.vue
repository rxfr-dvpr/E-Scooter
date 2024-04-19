<template>
  <section class="banner__section">
    <div class="container">
        <div class="row">
            <span class="banner-logo"><img :src="logo" alt="" class="banner-logo-img"></span>

            <div class="banner__descr">
                <h3 class="banner__descr-title">{{ title }}</h3>

                <p class="banner__descr-txt">{{ txt }}</p>
            </div>

            <img :src="filterImg" alt="" class="banner-filter">
        </div>
    </div>

    <span class="banner-dark-bg"></span>
  </section>
</template>

<script>

export default {
    name: 'Banner Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            logo: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/white-logo.svg?alt=media&token=32cfea1d-7a44-4907-9bba-d36b34b6b5ae',
            title: 'Высокая скорость передвижения',
            txt: 'Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч.',
            filterImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Banner%2Fbanner-filter.png?alt=media&token=278a74df-eef7-47c5-9745-234ea80b6647'
        }
    }
}

</script>

<style lang="scss" scoped>

.banner__section {
    width: 100%;
    padding: 120px 0;
    background-image: url('@/assets/images/banner-img.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    position: relative;

    .row {
        flex-direction: column;
        row-gap: 160px;
        position: relative;
    }

    .banner-logo {
        max-width: 60px;
        width: 100%;
        z-index: 3;

        &-img {
            width: 100%;
        }
    }

    .banner__descr {
        max-width: 450px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        z-index: 3;

        &-title {
            font-size: 45px;
            line-height: 100%;
            font-weight: 600;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-txt {
            max-width: 360px;
            font-size: 14px;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .banner-dark-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba($color: #000000, $alpha: .2);
    }

    .banner-filter {
        max-width: max-content;
        width: 100%;
        position: absolute;
        top: -160%;
        right: -45%;
        z-index: -1;
    }
}

</style>