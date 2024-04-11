<template>
    <nav class="nav">
        <div class="container">
            <div class="row">
                <router-link to="/" class="nav-logo">
                    <img src="@/assets/images/white-logo.svg" alt="" class="nav-logo-img">
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
            store: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 50px 0;
    position: fixed;
    top: 0;
    left: 0;

    .row {
        justify-content: space-between;
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
            font-size: 15px;
            font-weight: 400;
            transition: .3s;
            
            &::first-letter {
                text-transform: uppercase;
            }

            &:hover {
                color: var(--main-orange);
            }
        }
    }
}

</style>