<template>
    <nav class="nav" :class="{'light': light}">
        <div class="container">
            <div class="row">
                <router-link to="/" class="nav-logo">
                    <img :src="light ? orangeLogo : whiteLogo" alt="" class="nav-logo-img">
                </router-link>

                <div class="nav-wrapper">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                            <a :href="link.url" class="nav__list-link">{{ link.name }}</a>
                        </li>
                    </ul>

                    <button class="buy-btn all-btn">Купить</button>
                </div>
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
            orangeLogo: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/orangelogo.svg?alt=media&token=730f7741-89d8-4fd3-bd97-859de5a6ee88'
        }
    },
    props: {
        light: {
            type: Boolean,
            default: false,
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 50px 0;
    position: sticky;
    top: 0;
    left: 0;

    .row {
        justify-content: space-between;
    }

    &-logo {
        max-width: 60px;
        width: 100%;


        &-img {
            width: 100%;
        }
    }

    &-wrapper {
        max-width: 1020px;
        width: 100%;
        display: flex;
        justify-content: space-between;
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
    }
}

</style>