<template>
  <section class="banner__section">
    <div class="container">
        <div class="row">
            <span class="banner-logo"><img :src="logo" alt="" class="banner-logo-img"></span>

            <div class="banner__descr">
                <h3 class="banner__descr-title">{{ title }}</h3>

                <p class="banner__descr-txt">{{ txt }}</p>
            </div>

            <span class="banner-filter"></span>
        </div>
    </div>
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
            txt: 'Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч.'
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

    .banner-filter {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba($color: #000000, $alpha: .2);
    }
}

</style>