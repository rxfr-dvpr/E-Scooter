<template>
  <header class="header" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <h1 class="header-title">{{ title }}</h1>

            <p class="header-txt">{{ txt }}</p>

            <button class="theme-btn" @click="this.$emit('changeTheme')" :class="{'light': light}">
                <span class="dark-btn">черный</span>
                <span class="bg"></span>
                <span class="light-btn">белый</span>
            </button>

            <img :src="light ? lightImg : darkImg" alt="" class="header-img">

            <img :src="filterImg" alt="" class="header-filter">
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            title: 'Стильный электросамокат с мощным аккумулятором',
            txt: 'Улучшенная производительность для дальних путешествий. Работает так же просто, как и выглядит.',
            darkImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Header%2Fheader-dark-img.png?alt=media&token=17de6d04-1df3-423d-9f76-04a823c83283',
            lightImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Header%2Fheader-light-img.png?alt=media&token=7b087e23-9865-4feb-82f9-504d0dd7419f',
            filterImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Header%2Fheader-filter.png?alt=media&token=0e138a49-091f-4c68-8efa-e64dc6408a58'
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

.header {
    width: 100%;
    padding: 80px 0 125px;

    .row {
        flex-direction: column;
        row-gap: 30px;
        position: relative;
    }

    &-title {
        max-width: 950px;
        width: 100%;
        font-size: calc(30px + 50 * (100vw / 1920));
        line-height: 100%;
        transition: .4s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &-txt {
        max-width: 480px;
        width: 100%;
        font-size: calc(16px + 14 * (100vw / 1920));
        font-weight: 600;
        line-height: 100%;
        color: var(--main-orange);
        transition: .4s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .theme-btn {
        max-width: 250px;
        width: 100%;
        min-width: 250px;
        height: 55px;
        margin-top: 60px;
        background: transparent;
        border: 3px solid var(--main-white);
        border-radius: 108px;
        display: flex;
        position: relative;
        transition: .4s;
        z-index: 3;

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

    &.light {
        .header {
            &-title {
                color: var(--main-orange);
            }

            &-txt {
                color: var(--main-black);
            }
        }
    }

    &-img {
        max-width: 1945px;
        width: 100%;
        position: absolute;
        bottom: -20%;
        left: 30%;
        z-index: -1;
    }

    &-filter {
        max-width: 1300px;
        width: 100%;
        position: absolute;
        bottom: 40%;
        right: -30%;
        z-index: -2;
    }
}

@media (min-width: 1920px) {
    .header {
        &-title {
            font-size: 80px !important;
        }

        &-txt {
            font-size: 30px !important;
        }
    }
}

@media (max-width: 1700px) {
    .header-filter {
        right: 0 !important;
    }

    .header-img {
        left: 0 !important;
    }
}

@media (max-width: 992px) {
    .header-img {
        max-width: 700px !important;
        right: 0 !important;
        left: unset !important;
        bottom: 10% !important;
    }
}

@media (max-width: 876px) {
    .header-filter {
        bottom: 80%;
    }    
}

@media (max-width: 576px) {
    .header-filter {
        bottom: 100%;
    }    
}

</style>