<template>
    <nav class="nav" :class="{'light': light, 'blur': navBlur}">
        <div class="container">
            <div class="row">
                <router-link to="/" class="nav-logo">
                    <img :src="light ? orangeLogo : whiteLogo" alt="" class="nav-logo-img">
                </router-link>

                <div class="nav-wrapper" :class="{'opened': navOpened}">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                            <a :href="link.url" class="nav__list-link">{{ link.name }}</a>
                        </li>
                    </ul>

                    <button class="buy-btn all-btn">Купить</button>
                </div>

                <button class="all-btn" @click="navOpened = !navOpened" v-if="windowSize < 992">open</button>
            </div>
        </div>
    </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
    name: 'Navigation',
    data() {
        return {
            store: navStore(),
            whiteLogo: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/white-logo.svg?alt=media&token=32cfea1d-7a44-4907-9bba-d36b34b6b5ae',
            orangeLogo: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/orangelogo.svg?alt=media&token=730f7741-89d8-4fd3-bd97-859de5a6ee88',
            navBlur: false,
            navOpened: false,
            windowSize: window.innerWidth
        }
    },
    props: {
        light: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.navBlur = window.scrollY > 10 ? true : false

            this.windowSize = window.innerWidth
        })
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 15px 0;
    position: sticky;
    top: 0;
    left: 0;
    margin-top: 25px;
    transition: .3s;
    z-index: 2024;

    .row {
        justify-content: space-between;
        flex-wrap: unset;
        gap: 15px;
    }

    &-logo {
        max-width: 60px;
        width: 100%;
        display: flex;
        justify-content: center;

        &-img {
            width: 100%;
        }
    }

    &-wrapper {
        max-width: 1020px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .buy-btn {
            border: solid 2px transparent;

            &:hover {
                border-color: var(--main-white);
                background: transparent;
                color: var(--main-white);
            }
        }
    }

    &__list {
        max-width: 500px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-link {
            font-size: 16px;
            font-weight: 500;
            transition: .4s;
            color: var(--main-white);
            
            &::first-letter {
                text-transform: uppercase;
            }

            &:hover {
                color: var(--main-orange) !important;
            }
        }
    }

    &.light {
        .nav__list-link {
            color: var(--main-black);
        }

        .buy-btn:hover {
            border-color: var(--main-black);
            color: var(--main-black);
        }
    }

    &.blur {
        backdrop-filter: blur(25px);
    }
}

@media (max-width: 1200px) {
    .nav__list {
        margin: 0 auto;
    }
}


@media (max-width: 992px) {
    .nav {
        margin-top: 0;
    }

    .nav-wrapper {
        max-width: 170px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        height: 100dvh;
        justify-content: center !important;
        padding: 15px;
        row-gap: 25px;
        background: var(--main-black);
        box-shadow: 5px 1px 15px rgba($color: #FF4C0D, $alpha: .4);
        transform: translateX(-120%);

        .nav__list {
            margin: unset !important;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 25px;
        }

        &.opened {
            transform: translateX(0%) !important;
        }
    }
}

</style>