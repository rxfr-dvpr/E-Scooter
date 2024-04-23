<template>
  <section class="about__section" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <router-link to="/" class="about-logo">
                <img :src="aboutLogo" alt="" class="about-logo-img">
            </router-link>

            <div class="about__descr">
                <h2 class="about__descr-title all-title-45">{{ title }}</h2>

                <p class="about__descr-txt" v-html="txt"></p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'About Section',
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            aboutLogo: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/orangelogo.svg?alt=media&token=730f7741-89d8-4fd3-bd97-859de5a6ee88',
            title: 'О бренде Xiaomi',
            txt: 'Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех». <span>Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому.</span>'
        }
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;
    padding: 120px 0;
    background-image: url('@/assets/images/about-img.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    position: relative;

    .row {
        flex-direction: column;
        row-gap: 150px;
    }

    .about__descr {
        max-width: 960px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;

        &-title {
            color: var(--main-orange);
        }

        &-txt {
            max-width: 460px;
            width: 100%;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            color: var(--main-black);
            font-weight: 600;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

</style>