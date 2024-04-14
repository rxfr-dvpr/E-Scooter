<template>
  <header class="header" :class="{'light': light}">
    <div class="container">
        <div class="row">
            <h1 class="header-title">{{ title }}</h1>

            <p class="header-txt">{{ txt }}</p>

            <button class="theme-btn all-btn" @click="this.$emit('changeTheme')">Change theme</button>

            <img :src="light ? lightImg : darkImg" alt="" class="header-img">
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
            lightImg: 'https://firebasestorage.googleapis.com/v0/b/mi-scooter-2e744.appspot.com/o/Header%2Fheader-light-img.png?alt=media&token=7b087e23-9865-4feb-82f9-504d0dd7419f'
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
        font-size: 80px;
        line-height: 100%;
        transition: .4s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &-txt {
        max-width: 480px;
        width: 100%;
        font-size: 30px;
        font-weight: 600;
        line-height: 100%;
        color: var(--main-orange);
        transition: .4s;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .theme-btn {
        margin-top: 60px;
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
        position: absolute;
        bottom: -70%;
        left: 10%;
        z-index: -1;
    }
}

</style>